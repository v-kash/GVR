"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Link from "next/link";
import {
  ChevronRight,
  FileText,
  Calendar,
  FolderOpen,
  Eye,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function LabReportsPage() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);
  const observerRef = useRef(null);
  const loadMoreRef = useRef(null);

  const ITEMS_PER_PAGE = 12;

  const fetchReports = useCallback(async (pageNum, isInitial = false) => {
    try {
      if (isInitial) {
        setLoading(true);
      } else {
        setIsLoadingMore(true);
      }

      const response = await fetch("/api/reports");

      if (!response.ok) {
        throw new Error("Failed to fetch reports");
      }

      const data = await response.json();

      const start = (pageNum - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
      const paginatedData = data.slice(start, end);

      if (isInitial) {
        setReports(paginatedData);
      } else {
        setReports((prev) => [...prev, ...paginatedData]);
      }

      setHasMore(end < data.length);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      if (isInitial) {
        setLoading(false);
      } else {
        setIsLoadingMore(false);
      }
    }
  }, []);

  useEffect(() => {
    fetchReports(1, true);
  }, [fetchReports]);

  useEffect(() => {
    if (!hasMore || isLoadingMore) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoadingMore) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.1, rootMargin: "100px" },
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore, isLoadingMore]);

  useEffect(() => {
    if (page > 1) {
      fetchReports(page, false);
    }
  }, [page, fetchReports]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      if (headingRef.current)
        gsap.set(headingRef.current, { opacity: 1, y: 0 });
      if (gridRef.current) gsap.set(gridRef.current, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set([headingRef.current, gridRef.current].filter(Boolean), {
        opacity: 0,
        y: 30,
      });

      const tl = gsap.timeline();

      if (headingRef.current) {
        tl.to(headingRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      if (gridRef.current) {
        tl.to(
          gridRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getCategoryIcon = (category) => {
    return <FolderOpen size={20} className="text-[#6E7E45]" />;
  };

  if (error) {
    return (
      <section className="relative bg-[#f5f0e7] min-h-screen py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-16 text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-red-600 font-medium">Error loading reports</p>
            <p className="text-red-500 text-sm mt-2">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-[#6E7E45] text-white rounded-lg hover:bg-[#5a6938] transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f5f0e7] min-h-screen py-24 sm:py-24 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* Hero Section */}
        <div className="relative mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-8 md:mb-8">
            <Link
              href="/"
              className={`${montserrat.className} text-[11px] uppercase tracking-[0.15em] text-[#4D5B2A] font-bold hover:text-[#6E7E45] transition-colors`}
            >
              Home
            </Link>
            <ChevronRight size={13} className="text-[#5f5146]/50" />
            <span
              className={`${montserrat.className} text-[11px] uppercase tracking-[0.15em] text-[#5f5146]/60 font-normal`}
            >
              Lab Reports
            </span>
          </div>

          <div ref={headingRef}>
            <h1
              className={`${cormorant.className} text-[42px] sm:text-[52px] md:text-[64px] lg:text-[76px] font-semibold text-[#241A12] leading-[1.05] mb-4`}
            >
              Lab Reports
            </h1>

            <div className="h-[2px] w-12 bg-[#C49A2A] mb-5" />

            <p
              className={`${montserrat.className} text-[13px] sm:text-[14px] md:text-[15px] text-[#5f5146] leading-[1.8] max-w-2xl font-normal`}
            >
              Access and view all your laboratory test reports in one place.
              Click on any report to open it in a new tab.
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        {!loading && reports.length > 0 && (
          <div className="mb-8 pb-4 border-b border-[#d8d2c4]">
            <div className="flex items-center gap-2">
              <FileText size={18} className="text-[#6E7E45]" />
              <span
                className={`${montserrat.className} text-sm text-[#5f5146]`}
              >
                Showing {reports.length} of{" "}
                {reports.length + (hasMore ? "..." : "")} reports
              </span>
            </div>
          </div>
        )}

        {/* Grid View with PDF Preview */}
        <div ref={gridRef}>
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e8e0d4] animate-pulse"
                >
                  <div className="h-52 bg-gray-200" />
                  <div className="p-5 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                    <div className="h-3 bg-gray-200 rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : reports.length === 0 ? (
            <div className="text-center py-20 bg-white/50 rounded-2xl border border-[#e8e0d4]">
              <FileText size={48} className="mx-auto text-[#d8d2c4] mb-4" />
              <p className={`${montserrat.className} text-[#5f5146] text-lg`}>
                No lab reports found
              </p>
              <p
                className={`${montserrat.className} text-sm text-[#5f5146]/60 mt-1`}
              >
                Check back later for your reports
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
                {reports.map((report) => (
                  <div
                    key={report.id}
                    onClick={() => window.open(report.file_url, "_blank")}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm border border-[#e8e0d4] hover:shadow-xl hover:border-[#6E7E45]/40 transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative  overflow-hidden ">
                      <div 
  className="relative overflow-hidden"
  style={{ height: '380px'}}
>
  <img
    src="/thumbnail.jpeg"
    alt="Report preview"
    className="block w-full h-full object-cover"
  />
</div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-[#6E7E45]/0 group-hover:bg-[#6E7E45]/20 transition-all duration-300 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Eye
                            size={32}
                            className="text-black drop-shadow-lg"
                          />
                          <span
                            className={`${montserrat.className} text-xs font-medium text-black`}
                          >
                            View Full Report →
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <h3
                          className={`${montserrat.className} text-sm font-bold text-[#241A12] line-clamp-2 group-hover:text-[#6E7E45] transition-colors flex-1`}
                        >
                          {report.title}
                        </h3>
                        <div className="flex-shrink-0 mt-0.5">
                          {getCategoryIcon(report.category)}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-[#5f5146]">
                          <Calendar size={12} className="text-[#C49A2A]" />
                          <span className={`${montserrat.className}`}>
                            {formatDate(report.uploaded_at)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Loading more indicator */}
              {isLoadingMore && (
                <div className="flex justify-center items-center py-8">
                  <div className="flex gap-2">
                    <div
                      className="w-2 h-2 bg-[#6E7E45] rounded-full animate-bounce"
                      style={{ animationDelay: "0s" }}
                    />
                    <div
                      className="w-2 h-2 bg-[#6E7E45] rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="w-2 h-2 bg-[#6E7E45] rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>
                </div>
              )}

              {/* Intersection observer target */}
              {hasMore && <div ref={loadMoreRef} className="h-10" />}

              {/* End of results */}
              {!hasMore && reports.length > 0 && (
                <div className="text-center pt-8 pb-4">
                  <p
                    className={`${montserrat.className} text-sm text-[#5f5146]/60`}
                  >
                    You've reached the end
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
