"use client";

import { useLanguage } from "@/app/providers/LanguageProvider";
import { Loader2, Send } from "lucide-react";
import type { ChangeEvent, FormEvent } from "react";
import { useMemo, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  company: string;
  serviceType: string;
  projectLocation: string;
  message: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  company: "",
  serviceType: "",
  projectLocation: "",
  message: "",
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function InquiryForm() {
  const { t } = useLanguage();
  const f = t.contactPage.form;
  const [values, setValues] = useState<FormState>(initial);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const serviceOptions = useMemo(
    () =>
      f.serviceOptions.map((label, i) => ({
        value: String(i),
        label,
      })),
    [f.serviceOptions],
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const requiredMissing =
      !values.name.trim() ||
      !values.phone.trim() ||
      !values.email.trim() ||
      !values.serviceType ||
      !values.projectLocation.trim() ||
      !values.message.trim();

    if (requiredMissing) {
      setError(f.errorRequired);
      return;
    }
    if (!isValidEmail(values.email)) {
      setError(f.errorEmail);
      return;
    }

    setSubmitting(true);
    // Frontend-ready: replace with API call when backend exists
    const payload = {
      ...values,
      serviceLabel: f.serviceOptions[Number(values.serviceType)] ?? values.serviceType,
    };
    void payload;

    window.setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setValues(initial);
    }, 600);
  };

  const onFieldChange =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((s) => ({ ...s, [key]: e.target.value }));
    };

  const inputClass =
    "w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition-shadow placeholder:text-gray-400 focus:border-[#1a3a6b] focus:ring-2 focus:ring-[#1a3a6b]/20";

  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-yellow-600 font-semibold text-sm uppercase tracking-widest mb-2">
            {f.sectionEyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{f.sectionTitle}</h2>
          <p className="text-gray-600 text-base">{f.sectionSubtitle}</p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-gray-100 bg-gray-50/80 p-6 sm:p-8 shadow-sm"
          noValidate
        >
          {success && (
            <div
              role="status"
              className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900 text-start"
            >
              {f.success}
            </div>
          )}
          {error && (
            <div
              role="alert"
              className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900 text-start"
            >
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block text-start sm:col-span-2">
              <span className="mb-1 block text-xs font-semibold text-gray-700">{f.name} *</span>
              <input
                className={inputClass}
                value={values.name}
                onChange={onFieldChange("name")}
                placeholder={f.placeholders.name}
                name="name"
                autoComplete="name"
              />
            </label>
            <label className="block text-start">
              <span className="mb-1 block text-xs font-semibold text-gray-700">{f.phone} *</span>
              <input
                className={inputClass}
                value={values.phone}
                onChange={onFieldChange("phone")}
                placeholder={f.placeholders.phone}
                name="phone"
                type="tel"
                autoComplete="tel"
              />
            </label>
            <label className="block text-start">
              <span className="mb-1 block text-xs font-semibold text-gray-700">{f.email} *</span>
              <input
                className={inputClass}
                value={values.email}
                onChange={onFieldChange("email")}
                placeholder={f.placeholders.email}
                name="email"
                type="email"
                autoComplete="email"
              />
            </label>
            <label className="block text-start sm:col-span-2">
              <span className="mb-1 block text-xs font-semibold text-gray-700">{f.company}</span>
              <input
                className={inputClass}
                value={values.company}
                onChange={onFieldChange("company")}
                placeholder={f.placeholders.company}
                name="company"
                autoComplete="organization"
              />
            </label>
            <label className="block text-start sm:col-span-2">
              <span className="mb-1 block text-xs font-semibold text-gray-700">{f.serviceType} *</span>
              <select
                className={inputClass}
                value={values.serviceType}
                onChange={onFieldChange("serviceType")}
                name="serviceType"
              >
                <option value="">{f.placeholders.serviceType}</option>
                {serviceOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-start sm:col-span-2">
              <span className="mb-1 block text-xs font-semibold text-gray-700">
                {f.projectLocation} *
              </span>
              <input
                className={inputClass}
                value={values.projectLocation}
                onChange={onFieldChange("projectLocation")}
                placeholder={f.placeholders.projectLocation}
                name="projectLocation"
              />
            </label>
            <label className="block text-start sm:col-span-2">
              <span className="mb-1 block text-xs font-semibold text-gray-700">{f.message} *</span>
              <textarea
                className={`${inputClass} min-h-[120px] resize-y`}
                value={values.message}
                onChange={onFieldChange("message")}
                placeholder={f.placeholders.message}
                name="message"
                rows={4}
              />
            </label>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1a3a6b] px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Send size={18} className="rtl:rotate-180" />
              )}
              {f.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
