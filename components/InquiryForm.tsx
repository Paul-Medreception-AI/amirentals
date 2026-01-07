"use client";

import { useRef, useState, useTransition } from "react";
import { sendInquiry } from "@/app/actions/sendInquiry";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: any[]) => void;
  }
}

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("");
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <form
      className="max-w-xl mx-auto space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        const formElement = formRef.current ?? event.currentTarget;
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

          try {
            const result = await sendInquiry(formData);
            console.log("[InquiryForm] sendInquiry result", result);

            if (result?.ok) {
              setStatus("success");
              setMessage("Thanks! Your request was sent. We'll reply from amirentals2020@gmail.com.");
              formElement?.reset();
              setName("");
              setEmail("");
              setDates("");
              setGuests("");
            } else {
              setStatus("error");
              setMessage(
                result?.error || "Something went wrong. Please email amirentals2020@gmail.com with your details."
              );
            }
          } catch (err) {
            console.error("[InquiryForm] unexpected error", err);
            setStatus("error");
            setMessage("Something went wrong. Please email amirentals2020@gmail.com with your details.");
          }
        });
      }}
      ref={formRef}
    >
      <input
        name="name"
        placeholder="Your name"
        required
        className="w-full border px-4 py-3 rounded-md"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full border px-4 py-3 rounded-md"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="dates"
        placeholder="Preferred dates"
        className="w-full border px-4 py-3 rounded-md"
        value={dates}
        onChange={(e) => setDates(e.target.value)}
      />
      <input
        name="guests"
        placeholder="Number of guests"
        className="w-full border px-4 py-3 rounded-md"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
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
