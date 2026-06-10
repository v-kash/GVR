"use client";
import { useEffect } from "react";

export default function ScrollReset() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      history.scrollRestoration = "manual";
      // Temporarily kill smooth scroll so the jump is instant
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      // Re-enable smooth scroll after jump is done
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = "smooth";
      });
    }
  }, []);
  return null;
}