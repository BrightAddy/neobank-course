import type { Provider } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

export type AuthProvider = Extract<Provider, "github" | "google">;

const EMAIL_REQUEST_TIMEOUT_MS = 20000;

type EmailOtpOptions = {
  email: string;
  shouldCreateUser: boolean;
  data?: {
    full_name?: string;
    phone?: string;
  };
};

function getRedirectUrl(path: string) {
  if (typeof window === "undefined") {
    return path;
  }

  return `${window.location.origin}${path}`;
}

async function withEmailTimeout<T>(request: Promise<T>) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const timeout = new Promise<never>((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(
        new Error(
          "Supabase could not finish sending the email. Check your custom SMTP host, port, username, app password, and sender email in Supabase.",
        ),
      );
    }, EMAIL_REQUEST_TIMEOUT_MS);
  });

  try {
    return await Promise.race([request, timeout]);
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
}

export async function sendEmailOtp({
  email,
  shouldCreateUser,
  data,
}: EmailOtpOptions) {
  try {
    return await withEmailTimeout(
      supabase.auth.signInWithOtp({
        email,
        options: {
          data,
          emailRedirectTo: getRedirectUrl("/dashboard"),
          shouldCreateUser,
        },
      }),
    );
  } catch (error) {
    return {
      data: {
        user: null,
        session: null,
      },
      error: {
        message:
          error instanceof Error
            ? error.message
            : "Supabase could not send the verification email.",
      },
    };
  }
}

export async function verifyEmailOtp(email: string, token: string) {
  return supabase.auth.verifyOtp({
    email,
    token,
    type: "email",
  });
}

export async function signInWithOAuthProvider(provider: AuthProvider) {
  return supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: getRedirectUrl("/dashboard"),
    },
  });
}
