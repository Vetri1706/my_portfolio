"use client";
import emailjs from "@emailjs/browser";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export async function sendContact(data: ContactPayload) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS is not configured. Please set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in .env.local. Template ID is found in EmailJS Dashboard → Email Templates → your template → ID."
    );
  }
  // Provide multiple common param aliases so most templates work without edits
  const params = {
    // our fields
    name: data.name,
    email: data.email,
    message: data.message,
    // common EmailJS defaults
    from_name: data.name,
    from_email: data.email,
    user_name: data.name,
    user_email: data.email,
    reply_to: data.email,
  } as Record<string, string>;

  return emailjs.send(serviceId, templateId, params, { publicKey });
}
