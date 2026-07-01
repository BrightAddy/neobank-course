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

type PasswordLoginOptions = {
  email: string;
  password: string;
};

type PasswordSignupOptions = PasswordLoginOptions & {
  data?: {
    full_name?: string;
    phone?: string;
  };
};

type EmailOtpVerificationType = "email" | "signup";

export function getAuthErrorMessage(error: unknown) {
  if (!error) {
    return "Something went wrong. Please try again.";
  }

  if (error instanceof Error && error.message && error.message !== "{}") {
    return error.message;
  }

  if (typeof error === "object" && "message" in error) {
    const message = String((error as { message?: unknown }).message || "");

    if (message && message !== "{}") {
      if (
        message.includes("Error sending confirmation email") ||
        message.includes("Error sending magic link email")
      ) {
        return "Supabase received the signup request, but your SMTP provider rejected or failed to send the email. Check the SMTP host, port, username, password/API key, and sender email/domain in Supabase.";
      }

      return message;
    }
  }

  if (typeof error === "string" && error && error !== "{}") {
    return error;
  }

  return "Supabase could not send the verification email. Check your custom SMTP settings and make sure the Confirm sign up email template includes {{ .Token }}.";
}

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
        message: getAuthErrorMessage(error),
      },
    };
  }
}

export async function resendSignupConfirmation(email: string) {
  try {
    return await withEmailTimeout(
      supabase.auth.resend({
        type: "signup",
        email,
        options: {
          emailRedirectTo: getRedirectUrl("/dashboard"),
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
        message: getAuthErrorMessage(error),
      },
    };
  }
}

export async function signUpWithEmailPassword({
  email,
  password,
  data,
}: PasswordSignupOptions) {
  try {
    return await withEmailTimeout(
      supabase.auth.signUp({
        email,
        password,
        options: {
          data,
          emailRedirectTo: getRedirectUrl("/dashboard"),
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
        message: getAuthErrorMessage(error),
      },
    };
  }
}

export async function verifyEmailOtp(
  email: string,
  token: string,
  type: EmailOtpVerificationType = "email",
) {
  return supabase.auth.verifyOtp({
    email,
    token,
    type,
  });
}

export async function signInWithEmailPassword({
  email,
  password,
}: PasswordLoginOptions) {
  return supabase.auth.signInWithPassword({
    email,
    password,
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
