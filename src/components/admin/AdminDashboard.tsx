"use client";

import { useCallback, useEffect, useState } from "react";
import type { Inquiry, Provider, SiteContent, Tour } from "@/lib/types";

type Tab = "content" | "tours" | "providers" | "inquiries";

export function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>("inquiries");
  const [loading, setLoading] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  const [content, setContent] = useState<SiteContent | null>(null);
  const [tours, setTours] = useState<Tour[]>([]);
  const [providers, setProviders] = useState<Provider[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  const checkSession = useCallback(async () => {
    const res = await fetch("/api/admin/session");
    const data = (await res.json()) as { authenticated: boolean };
    setAuthenticated(data.authenticated);
    return data.authenticated;
  }, []);

  const loadAll = useCallback(async () => {
    setLoading(true);
    try {
      const [contentRes, toursRes, providersRes, inquiriesRes] = await Promise.all([
        fetch("/api/admin/content"),
        fetch("/api/admin/tours"),
        fetch("/api/admin/providers"),
        fetch("/api/admin/inquiries"),
      ]);

      if (contentRes.status === 401) {
        setAuthenticated(false);
        return;
      }

      setContent((await contentRes.json()) as SiteContent);
      setTours((await toursRes.json()) as Tour[]);
      setProviders((await providersRes.json()) as Provider[]);
      setInquiries((await inquiriesRes.json()) as Inquiry[]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void checkSession().then((ok) => {
      if (ok) void loadAll();
    });
  }, [checkSession, loadAll]);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setLoginError(null);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (!res.ok) {
      setLoginError("Invalid password.");
      return;
    }
    setAuthenticated(true);
    setPassword("");
    await loadAll();
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
  }

  async function saveContent() {
    if (!content) return;
    setSaveMessage(null);
    const res = await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });
    setSaveMessage(res.ok ? "Content saved." : "Failed to save content.");
  }

  async function saveTours() {
    setSaveMessage(null);
    const res = await fetch("/api/admin/tours", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tours),
    });
    setSaveMessage(res.ok ? "Tours saved." : "Failed to save tours.");
  }

  async function saveProviders() {
    setSaveMessage(null);
    const res = await fetch("/api/admin/providers", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(providers),
    });
    setSaveMessage(res.ok ? "Providers saved." : "Failed to save providers.");
  }

  async function updateInquiry(
    id: string,
    status: Inquiry["status"],
    assignedProviderId?: string | null,
  ) {
    const res = await fetch("/api/admin/inquiries", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status, assignedProviderId }),
    });
    if (res.ok) {
      const updated = (await res.json()) as Inquiry;
      setInquiries((rows) => rows.map((r) => (r.id === id ? updated : r)));
    }
  }

  function addProvider() {
    setProviders((rows) => [
      ...rows,
      {
        id: crypto.randomUUID(),
        label: "New Provider",
        contactEmail: "",
        contactPhone: "",
        capacityNotes: "",
        supportedTourIds: [],
        active: true,
      },
    ]);
  }

  if (authenticated === null) {
    return <p className="p-8 text-slate-500">Loading...</p>;
  }

  if (!authenticated) {
    return (
      <div className="mx-auto max-w-md px-4 py-24">
        <h1 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-sky-900">
          Admin Login
        </h1>
        <form onSubmit={login} className="mt-6 space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
          />
          {loginError && <p className="text-sm text-red-600">{loginError}</p>}
          <button
            type="submit"
            className="w-full rounded-full bg-sky-900 py-2 font-semibold text-white"
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: "inquiries", label: "Inquiries" },
    { id: "content", label: "Site Content" },
    { id: "tours", label: "Tours" },
    { id: "providers", label: "Providers (internal)" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-sky-900">
          Admin
        </h1>
        <button
          onClick={() => void logout()}
          className="text-sm font-medium text-slate-600 hover:text-sky-900"
        >
          Sign out
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 border-b border-slate-200 pb-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
              tab === t.id
                ? "bg-sky-900 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {saveMessage && (
        <p className="mt-4 rounded-lg bg-green-50 px-4 py-2 text-sm text-green-700">
          {saveMessage}
        </p>
      )}

      {loading && <p className="mt-6 text-slate-500">Loading...</p>}

      {!loading && tab === "inquiries" && (
        <div className="mt-6 space-y-4">
          {inquiries.length === 0 && (
            <p className="text-slate-500">No inquiries yet.</p>
          )}
          {inquiries.map((inquiry) => (
            <div
              key={inquiry.id}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-sky-900">{inquiry.name}</p>
                  <p className="text-sm text-slate-600">
                    {inquiry.tourName} • {inquiry.preferredDate} • {inquiry.passengers}{" "}
                    passengers
                  </p>
                  <p className="mt-1 text-sm">
                    {inquiry.email} • {inquiry.phone}
                  </p>
                  {inquiry.message && (
                    <p className="mt-2 text-sm text-slate-600">{inquiry.message}</p>
                  )}
                </div>
                <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase text-sky-800">
                  {inquiry.status}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <select
                  value={inquiry.status}
                  onChange={(e) =>
                    void updateInquiry(
                      inquiry.id,
                      e.target.value as Inquiry["status"],
                      inquiry.assignedProviderId,
                    )
                  }
                  className="rounded-lg border border-slate-300 px-2 py-1 text-sm"
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                <select
                  value={inquiry.assignedProviderId ?? ""}
                  onChange={(e) =>
                    void updateInquiry(
                      inquiry.id,
                      inquiry.status,
                      e.target.value || null,
                    )
                  }
                  className="rounded-lg border border-slate-300 px-2 py-1 text-sm"
                >
                  <option value="">Assign provider...</option>
                  {providers
                    .filter((p) => p.active)
                    .map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.label}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && tab === "content" && content && (
        <div className="mt-6 space-y-6">
          <Field
            label="Hero title"
            value={content.hero.title}
            onChange={(v) => setContent({ ...content, hero: { ...content.hero, title: v } })}
          />
          <Field
            label="Hero subtitle"
            value={content.hero.subtitle}
            onChange={(v) =>
              setContent({ ...content, hero: { ...content.hero, subtitle: v } })
            }
          />
          <TextArea
            label="Hero body (paragraphs separated by blank lines)"
            value={content.hero.body}
            onChange={(v) => setContent({ ...content, hero: { ...content.hero, body: v } })}
          />
          <Field
            label="Hero tagline"
            value={content.hero.tagline}
            onChange={(v) =>
              setContent({ ...content, hero: { ...content.hero, tagline: v } })
            }
          />
          <Field
            label="Hero departure line"
            value={content.hero.departureLine}
            onChange={(v) =>
              setContent({ ...content, hero: { ...content.hero, departureLine: v } })
            }
          />
          <Field
            label="Hero image URL"
            value={content.hero.image}
            onChange={(v) => setContent({ ...content, hero: { ...content.hero, image: v } })}
          />
          <Field
            label="Contact headline"
            value={content.contact.headline}
            onChange={(v) =>
              setContent({
                ...content,
                contact: { ...content.contact, headline: v },
              })
            }
          />
          <TextArea
            label="Contact details (one per line)"
            value={content.contact.details.join("\n")}
            onChange={(v) =>
              setContent({
                ...content,
                contact: {
                  ...content.contact,
                  details: v.split("\n").filter(Boolean),
                },
              })
            }
          />
          <Field
            label="Contact CTA button label"
            value={content.contact.ctaLabel}
            onChange={(v) =>
              setContent({
                ...content,
                contact: { ...content.contact, ctaLabel: v },
              })
            }
          />
          <button
            onClick={() => void saveContent()}
            className="rounded-full bg-orange-500 px-6 py-2 font-semibold text-white"
          >
            Save content
          </button>
        </div>
      )}

      {!loading && tab === "tours" && (
        <div className="mt-6 space-y-6">
          {tours.map((tour, index) => (
            <div key={tour.id} className="rounded-xl border border-slate-200 bg-white p-4">
              <Field
                label="Name"
                value={tour.name}
                onChange={(v) => {
                  const next = [...tours];
                  next[index] = { ...tour, name: v };
                  setTours(next);
                }}
              />
              <TextArea
                label="Card highlights (one per line, max 3 shown on cards)"
                value={(tour.highlights ?? []).join("\n")}
                onChange={(v) => {
                  const next = [...tours];
                  next[index] = {
                    ...tour,
                    highlights: v.split("\n").filter(Boolean),
                  };
                  setTours(next);
                }}
              />
              <TextArea
                label="Description"
                value={tour.description}
                onChange={(v) => {
                  const next = [...tours];
                  next[index] = { ...tour, description: v };
                  setTours(next);
                }}
              />
              <Field
                label="Image URL"
                value={tour.image}
                onChange={(v) => {
                  const next = [...tours];
                  next[index] = { ...tour, image: v };
                  setTours(next);
                }}
              />
              <label className="mt-3 flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={tour.active}
                  onChange={(e) => {
                    const next = [...tours];
                    next[index] = { ...tour, active: e.target.checked };
                    setTours(next);
                  }}
                />
                Active on website
              </label>
            </div>
          ))}
          <button
            onClick={() => void saveTours()}
            className="rounded-full bg-orange-500 px-6 py-2 font-semibold text-white"
          >
            Save tours
          </button>
        </div>
      )}

      {!loading && tab === "providers" && (
        <div className="mt-6 space-y-6">
          <p className="text-sm text-slate-600">
            Internal only — provider names are never shown on the public website.
          </p>
          {providers.map((provider, index) => (
            <div key={provider.id} className="rounded-xl border border-slate-200 bg-white p-4">
              <Field
                label="Internal label"
                value={provider.label}
                onChange={(v) => {
                  const next = [...providers];
                  next[index] = { ...provider, label: v };
                  setProviders(next);
                }}
              />
              <Field
                label="Contact email"
                value={provider.contactEmail}
                onChange={(v) => {
                  const next = [...providers];
                  next[index] = { ...provider, contactEmail: v };
                  setProviders(next);
                }}
              />
              <Field
                label="Contact phone"
                value={provider.contactPhone}
                onChange={(v) => {
                  const next = [...providers];
                  next[index] = { ...provider, contactPhone: v };
                  setProviders(next);
                }}
              />
              <TextArea
                label="Capacity notes"
                value={provider.capacityNotes}
                onChange={(v) => {
                  const next = [...providers];
                  next[index] = { ...provider, capacityNotes: v };
                  setProviders(next);
                }}
              />
              <label className="mt-3 flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={provider.active}
                  onChange={(e) => {
                    const next = [...providers];
                    next[index] = { ...provider, active: e.target.checked };
                    setProviders(next);
                  }}
                />
                Active
              </label>
            </div>
          ))}
          <div className="flex gap-3">
            <button
              onClick={addProvider}
              className="rounded-full border border-sky-900 px-6 py-2 font-semibold text-sky-900"
            >
              Add provider
            </button>
            <button
              onClick={() => void saveProviders()}
              className="rounded-full bg-orange-500 px-6 py-2 font-semibold text-white"
            >
              Save providers
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="mt-3 block">
      <span className="text-sm font-semibold text-sky-900">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="mt-3 block">
      <span className="text-sm font-semibold text-sky-900">{label}</span>
      <textarea
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
      />
    </label>
  );
}
