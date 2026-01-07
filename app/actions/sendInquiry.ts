"use server";

import { Resend } from "resend";

export async function sendInquiry(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const dates = formData.get("dates");
  const guests = formData.get("guests");

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is missing; inquiry email not sent", {
      hasName: Boolean(name),
      hasEmail: Boolean(email),
      hasDates: Boolean(dates),
      hasGuests: Boolean(guests),
    });
    return { ok: false, error: "Email service not configured." };
  }

  const resend = new Resend(apiKey);

  const safeName = typeof name === "string" ? name : "";
  const safeEmail = typeof email === "string" ? email : "";
  const safeDates = typeof dates === "string" ? dates : "";
  const safeGuests = typeof guests === "string" ? guests : "";

  try {
    console.log("[sendInquiry] sending email via Resend", {
      hasApiKey: Boolean(apiKey),
      apiKeyLength: apiKey?.length ?? 0,
      safeName,
      safeEmail,
      safeDates,
      safeGuests,
    });

    const sendResult = await resend.emails.send({
      from: "AMI Rentals <inquiries@amirentals.com>",
      to: ["amirentals2020@gmail.com"],
      replyTo: safeEmail || undefined,
      subject: `New AMI Rentals Inquiry: ${safeDates || "(no dates provided)"}`,
      html: `
        <h2>New Booking Inquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Dates:</strong> ${safeDates}</p>
        <p><strong>Guests:</strong> ${safeGuests}</p>
      `,
    });

    console.log("[sendInquiry] Resend sendResult", sendResult);

    if (sendResult?.error) {
      return {
        ok: false,
        error: `Resend error: ${sendResult.error.message || "unknown error"}. Please email amirentals2020@gmail.com.`,
      };
    }
  } catch (error) {
    console.error("Failed to send AMI Rentals inquiry email", error);
    return { ok: false, error: "Failed to send message. Please email amirentals2020@gmail.com directly." };
  }

  console.log("[sendInquiry] email sent successfully");
  return { ok: true };
}
