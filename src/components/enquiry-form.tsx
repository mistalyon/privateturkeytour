"use client";

import { useState, type FormEvent } from "react";

import { siteConfig } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = (await response.json()) as {
        ok?: boolean;
        error?: string;
        mode?: string;
      };

      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Unable to send enquiry.");
      }

      setStatus("success");
      setMessage(
        payload.mode === "webhook"
          ? "Thank you—your planning request is with our team. We will reply by email."
          : `Thank you. Your details are ready—please confirm by emailing ${siteConfig.email} if you do not hear back within one business day.`,
      );
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : `Something went wrong. Please email ${siteConfig.email} directly.`,
      );
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-black/10 bg-[#efe9df] p-7 sm:p-10"
    >
      <label className="block text-sm text-black/70">
        Name
        <input
          required
          name="name"
          className="mt-2 w-full border border-black/15 bg-[#f4f0e8] px-4 py-3 outline-none focus:border-black"
        />
      </label>
      <label className="mt-5 block text-sm text-black/70">
        Email
        <input
          required
          type="email"
          name="email"
          className="mt-2 w-full border border-black/15 bg-[#f4f0e8] px-4 py-3 outline-none focus:border-black"
        />
      </label>
      <label className="mt-5 block text-sm text-black/70">
        Travel dates / month
        <input
          name="dates"
          className="mt-2 w-full border border-black/15 bg-[#f4f0e8] px-4 py-3 outline-none focus:border-black"
        />
      </label>
      <label className="mt-5 block text-sm text-black/70">
        Tell us about the trip
        <textarea
          required
          name="message"
          rows={6}
          className="mt-2 w-full border border-black/15 bg-[#f4f0e8] px-4 py-3 outline-none focus:border-black"
          placeholder="Trip length, companions, must-sees, pace, stay style..."
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 h-12 rounded-full bg-black px-7 text-sm text-[#f4f0e8] transition hover:bg-black/80 disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send planning request"}
      </button>
      {message ? (
        <p
          className={`mt-4 text-sm leading-7 ${
            status === "error" ? "text-red-800" : "text-black/65"
          }`}
        >
          {message}
        </p>
      ) : (
        <p className="mt-4 text-sm leading-7 text-black/55">
          Prefer email directly? Write to{" "}
          <a
            className="underline underline-offset-4"
            href={`mailto:${siteConfig.email}`}
          >
            {siteConfig.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
