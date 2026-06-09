// components/ScrollToTop.jsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable auto scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    
    // Scroll to top on EVERY route change and refresh
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}