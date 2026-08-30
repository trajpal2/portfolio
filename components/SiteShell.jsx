"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import ScrollTop from "@/components/ScrollTop";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export default function SiteShell({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (hash) {
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <BreadcrumbJsonLd />
      <Loader />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <ScrollTop />
    </>
  );
}
