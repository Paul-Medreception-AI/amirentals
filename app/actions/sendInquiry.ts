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
      name,
      email,
      dates,
      guests,
    });
    return { ok: false, error: "Email service not configured." };
  }

  const resend = new Resend(apiKey);

  const safeName = typeof name === "string" ? name : "";
  const safeEmail = typeof email === "string" ? email : "";
  const safeDates = typeof dates === "string" ? dates : "";
  const safeGuests = typeof guests === "string" ? guests : "";

  try {
    await resend.emails.send({
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
  } catch (error) {
    console.error("Failed to send AMI Rentals inquiry email", error);
    return { ok: false, error: "Failed to send message. Please email amirentals2020@gmail.com directly." };
  }

  return { ok: true };
}
