"use client";

import { useState, useTransition } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: any[]) => void;
  }
}

type InquiryFormProps = {
  action: (formData: FormData) => Promise<{ ok: boolean; error?: string } | undefined>;
};

export default function InquiryForm({ action }: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="max-w-xl mx-auto space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setStatus("pending");
        setMessage(null);

        startTransition(async () => {
          try {
            window.dataLayer = window.dataLayer ?? [];
            window.dataLayer.push({
              event: "direct_inquiry",
              event_category: "booking",
              event_label: "Direct Inquiry Submitted",
            });

            window.gtag?.("event", "direct_inquiry", {
              event_category: "booking",
              event_label: "Direct Inquiry Submitted",
            });
          } catch {
            // ignore
          }

          const result = await action(formData);

          if (result?.ok) {
            setStatus("success");
            setMessage("Thanks! Your request was sent. We'll reply from amirentals2020@gmail.com.");
            event.currentTarget.reset();
          } else {
            setStatus("error");
            setMessage(result?.error || "Something went wrong. Please email amirentals2020@gmail.com.");
          }
        });
      }}
    >
      <input
        name="name"
        placeholder="Your name"
        required
        className="w-full border px-4 py-3 rounded-md"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full border px-4 py-3 rounded-md"
      />
      <input
        name="dates"
        placeholder="Preferred dates"
        className="w-full border px-4 py-3 rounded-md"
      />
      <input
        name="guests"
        placeholder="Number of guests"
        className="w-full border px-4 py-3 rounded-md"
      />
      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-black text-white py-3 rounded-md font-semibold disabled:opacity-70"
      >
        {isPending ? "Sending..." : "Request Availability"}
      </button>
      {message ? (
        <p
          className={`text-sm ${
            status === "success" ? "text-green-700" : "text-red-700"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
