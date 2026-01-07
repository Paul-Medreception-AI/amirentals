"use client";

import { useRef, useState } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: any[]) => void;
  }
}

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <form
      className="max-w-xl mx-auto space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        const formElement = formRef.current ?? event.currentTarget;
        const formData = new FormData(formElement);
        setStatus("pending");
        setMessage(null);

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

        const safeName = (formData.get("name") || "").toString();
        const safeEmail = (formData.get("email") || "").toString();
        const safeDates = (formData.get("dates") || "").toString();
        const safeGuests = (formData.get("guests") || "").toString();

        const subject = encodeURIComponent(`AMI Rentals Inquiry: ${safeDates || "Dates not provided"}`);
        const body = encodeURIComponent(
          `Name: ${safeName}\nEmail: ${safeEmail}\nDates: ${safeDates}\nGuests: ${safeGuests}`
        );

        window.location.href = `mailto:amirentals2020@gmail.com?subject=${subject}&body=${body}`;

        setStatus("success");
        setMessage("Opening your email app. If it doesn't open, email amirentals2020@gmail.com with your dates.");
        formElement?.reset();
      }}
      ref={formRef}
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
        className="w-full bg-black text-white py-3 rounded-md font-semibold"
      >
        Email Availability Request
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
