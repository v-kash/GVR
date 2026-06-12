"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { FileText } from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const CATEGORIES = [
  "General",
  "Protein Analysis",
  "Hygiene Test",
  "Nutrient Profile",
];

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function PDFIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="14,2 14,8 20,8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline
        points="3,6 5,6 21,6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 11v6M14 11v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AdminDashboard() {
  const router = useRouter();
  const fileRef = useRef(null);

  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(null); // id being deleted
  const [toast, setToast] = useState(null); // { type: 'success'|'error', msg }

  // Upload form state
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("General");
  const [file, setFile] = useState(null);

  // Load reports
  async function loadReports() {
    const res = await fetch("/api/reports");
    const data = await res.json();
    setReports(data);
    setLoading(false);
  }

  useEffect(() => {
    loadReports();
  }, []);

  // Toast auto-dismiss
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  // Upload handler
  async function handleUpload(e) {
    e.preventDefault();
    if (!file || !title) return;

    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("title", title);
    fd.append("category", category);

    const res = await fetch("/api/reports/upload", {
      method: "POST",
      body: fd,
    });

    if (res.ok) {
      setToast({ type: "success", msg: "Report uploaded successfully." });
      setTitle("");
      setCategory("General");
      setFile(null);
      if (fileRef.current) fileRef.current.value = "";
      loadReports();
    } else {
      const err = await res.json();
      setToast({ type: "error", msg: err.error || "Upload failed." });
    }
    setUploading(false);
  }

  // Delete handler
  async function handleDelete(report) {
    if (!confirm(`Delete "${report.title}"? This cannot be undone.`)) return;
    setDeleting(report.id);

    const res = await fetch("/api/reports/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: report.id, file_path: report.file_path }),
    });

    if (res.ok) {
      setToast({ type: "success", msg: "Report deleted." });
      setReports((prev) => prev.filter((r) => r.id !== report.id));
    } else {
      setToast({ type: "error", msg: "Delete failed." });
    }
    setDeleting(null);
  }

  // Logout
  async function handleLogout() {
    await supabase.auth.signOut();
    document.cookie = "sb-access-token=; path=/; max-age=0";
    router.push("/admin/login");
  }

  return (
    <main className={`${montserrat.className} min-h-screen bg-[#f5f0e7]`}>
      {/* ── TOP BAR ───────────────────────────────────────────────── */}
      <header className="bg-[#1a2e14] px-6 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center ">
          <Image
            src="/GVRLOGO.png"
            alt="GVR Fresh Foods Logo"
            width={160}
            height={100}
            className="object-contain"
            priority
          />
        </div>

        <button
          onClick={handleLogout}
          className={`${montserrat.className} text-[10px] uppercase tracking-[0.18em] text-[#f5f0e7]/60 hover:text-[#f5f0e7] transition-colors duration-200`}
          style={{ fontWeight: 500 }}
        >
          Sign Out
        </button>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12 flex flex-col gap-12">
        {/* Stats Section Heading */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 md:w-10 bg-[#6E7E45]/30" />

            <p
              className={`${montserrat.className} text-[12px] sm:text-[12px] md:text-[16px] lg:text-[18px] xl:text-[18px] uppercase tracking-[0.2em] md:tracking-[0.25em] text-[#6E7E45]`}
              style={{ fontWeight: 600 }}
            >
              Admin Dashboard
            </p>

            <div className="h-px w-8 md:w-10 bg-[#6E7E45]/30" />
          </div>
        </div>
        {/* ── STATS ROW ─────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Reports", value: reports.length },
            ...CATEGORIES.map((cat) => ({
              label: cat,
              value: reports.filter((r) => r.category === cat).length,
            })),
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/50 rounded-[10px] px-5 py-4"
              style={{ border: "1px solid rgba(110,126,69,0.18)" }}
            >
              <p
                className={`${cormorant.className} text-[32px] font-semibold text-[#241A12]`}
              >
                {stat.value}
              </p>
              <p
                className={`${montserrat.className} text-[10px] uppercase tracking-[0.15em] text-[#5f5146]`}
                style={{ fontWeight: 500 }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── UPLOAD FORM ───────────────────────────────────────── */}
        <div
          className="bg-white/50 rounded-[12px] p-8"
          style={{ border: "1px solid rgba(110,126,69,0.18)" }}
        >
          {/* Section heading */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#C49A2A]/60" />
            <p
              className={`${montserrat.className} text-[10px] uppercase tracking-[0.22em] text-[#6E7E45]`}
              style={{ fontWeight: 600 }}
            >
              Upload New Report
            </p>
          </div>

          <form
            onSubmit={handleUpload}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {/* Title */}
            <div className="flex flex-col gap-1.5">
              <label
                className={`${montserrat.className} text-[10px] uppercase tracking-[0.18em] text-[#6E7E45]`}
                style={{ fontWeight: 600 }}
              >
                Report Title *
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="e.g. Q2 Protein Analysis 2024"
                className={`${montserrat.className} w-full px-4 py-3 rounded-[8px] text-[13px] text-[#241A12] bg-[#f5f0e7] outline-none placeholder:text-[#5f5146]/40`}
                style={{
                  border: "1px solid rgba(110,126,69,0.25)",
                  fontWeight: 400,
                }}
                onFocus={(e) => (e.target.style.borderColor = "#6E7E45")}
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(110,126,69,0.25)")
                }
              />
            </div>

            {/* Category */}
            <div className="flex flex-col gap-1.5">
              <label
                className={`${montserrat.className} text-[10px] uppercase tracking-[0.18em] text-[#6E7E45]`}
                style={{ fontWeight: 600 }}
              >
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={`${montserrat.className} w-full px-4 py-3 rounded-[8px] text-[13px] text-[#241A12] bg-[#f5f0e7] outline-none`}
                style={{
                  border: "1px solid rgba(110,126,69,0.25)",
                  fontWeight: 400,
                }}
                onFocus={(e) => (e.target.style.borderColor = "#6E7E45")}
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(110,126,69,0.25)")
                }
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* File picker */}
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label
                className={`${montserrat.className} text-[10px] uppercase tracking-[0.18em] text-[#6E7E45]`}
                style={{ fontWeight: 600 }}
              >
                PDF File *
              </label>
              <div
                className="relative flex items-center gap-4 px-4 py-3 rounded-[8px] bg-[#f5f0e7] cursor-pointer"
                style={{ border: "1px dashed rgba(110,126,69,0.40)" }}
                onClick={() => fileRef.current?.click()}
              >
                <span className="text-[#6E7E45]">
                  <PDFIcon />
                </span>
                <span
                  className={`${montserrat.className} text-[13px] text-[#5f5146]`}
                  style={{ fontWeight: 400 }}
                >
                  {file ? file.name : "Click to choose a PDF file"}
                </span>
                <input
                  ref={fileRef}
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files[0] || null)}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                disabled={uploading || !file || !title}
                className={`${montserrat.className} px-8 py-3 rounded-[8px] text-[11px] uppercase tracking-[0.2em] text-[#f5f0e7] transition-all duration-200`}
                style={{
                  fontWeight: 600,
                  background:
                    uploading || !file || !title
                      ? "rgba(26,46,20,0.7)"
                      : "#1a2e14",
                  cursor:
                    uploading || !file || !title ? "not-allowed" : "pointer",
                }}
              >
                {uploading ? "Uploading…" : "Upload Report"}
              </button>
            </div>
          </form>
        </div>

        {/* ── REPORTS TABLE ─────────────────────────────────────── */}
        <div
          className="bg-white/50 rounded-[12px] overflow-hidden"
          style={{ border: "1px solid rgba(110,126,69,0.18)" }}
        >
          {/* Table heading */}
          <div
            className="px-8 py-5 flex items-center gap-3"
            style={{ borderBottom: "1px solid rgba(110,126,69,0.12)" }}
          >
            <div className="h-px w-8 bg-[#C49A2A]/60" />
            <p
              className={`${montserrat.className} text-[10px] uppercase tracking-[0.22em] text-[#6E7E45]`}
              style={{ fontWeight: 600 }}
            >
              All Reports ({reports.length})
            </p>
          </div>

          {loading && (
            <div className="flex justify-center py-16">
              <div className="w-7 h-7 rounded-full border-2 border-[#6E7E45] border-t-transparent animate-spin" />
            </div>
          )}

          {!loading && reports.length === 0 && (
            <p
              className={`${montserrat.className} text-[13px] text-[#5f5146] text-center py-16`}
            >
              No reports uploaded yet.
            </p>
          )}

          {!loading && reports.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr
                    style={{ borderBottom: "1px solid rgba(110,126,69,0.10)" }}
                  >
                    {["Title", "Category", "Uploaded On", "Actions"].map(
                      (h) => (
                        <th
                          key={h}
                          className={`${montserrat.className} px-8 py-3 text-[9px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                          style={{ fontWeight: 600 }}
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report, i) => (
                    <tr
                      key={report.id}
                      style={{
                        borderBottom:
                          i < reports.length - 1
                            ? "1px solid rgba(110,126,69,0.08)"
                            : "none",
                        background:
                          i % 2 === 0 ? "transparent" : "rgba(110,126,69,0.03)",
                      }}
                    >
                      {/* Title */}
                      <td className="px-8 py-4">
                        <p
                          className={`${cormorant.className} text-[17px] font-semibold text-[#241A12]`}
                        >
                          {report.title}
                        </p>
                      </td>
                      {/* Category */}
                      <td className="px-8 py-4">
                        <span
                          className={`${montserrat.className} text-[9px] uppercase tracking-[0.15em] px-3 py-1 rounded-full`}
                          style={{
                            fontWeight: 600,
                            background: "rgba(196,154,42,0.10)",
                            color: "#8B6914",
                            border: "1px solid rgba(196,154,42,0.22)",
                          }}
                        >
                          {report.category}
                        </span>
                      </td>
                      {/* Date */}
                      <td className="px-8 py-4">
                        <p
                          className={`${montserrat.className} text-[12px] text-[#5f5146]`}
                          style={{ fontWeight: 400 }}
                        >
                          {formatDate(report.uploaded_at)}
                        </p>
                      </td>
                      {/* Actions */}
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-8">
                          <a
                            href={report.file_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${montserrat.className} flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-[#6E7E45] hover:text-[#1a2e14] transition-colors duration-150`}
                            style={{ fontWeight: 600 }}
                          >
                            <FileText size={14} strokeWidth={2} />
                            <span>View</span>
                          </a>
                          <button
                            onClick={() => handleDelete(report)}
                            disabled={deleting === report.id}
                            className={`${montserrat.className} flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-red-400 hover:text-red-600 transition-colors duration-150`}
                            style={{ fontWeight: 600 }}
                          >
                            {deleting === report.id ? (
                              <>
                                <div className="w-4 h-4 rounded-full border border-red-400 border-t-transparent animate-spin" />
                                <span>Deleting...</span>
                              </>
                            ) : (
                              <>
                                <TrashIcon />
                                <span>Delete</span>
                              </>
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* ── TOAST ─────────────────────────────────────────────────── */}
      {toast && (
        <div
          className={`${montserrat.className} fixed bottom-6 right-6 px-6 py-3 rounded-[8px] text-[12px] text-white shadow-lg z-50 transition-all duration-300`}
          style={{
            fontWeight: 500,
            background: toast.type === "success" ? "#1a2e14" : "#b91c1c",
          }}
        >
          {toast.msg}
        </div>
      )}
    </main>
  );
}
