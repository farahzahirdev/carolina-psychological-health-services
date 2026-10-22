"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BookButton } from "@/components/CTAButtons";
import {
  BOOKING_SECTION_ID,
  LOGO_URL,
  PHONE_HREF,
  PHONE_NUMBER,
  SITE_NAME,
  WHY_SECTION_ID,
} from "@/lib/constants";

const NAV = [
  { href: "#tms", label: "TMS Therapy" },
  { href: "#spravato", label: "Spravato" },
  { href: `#${WHY_SECTION_ID}`, label: "About CPHS" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? " is-solid" : ""}${menuOpen ? " is-menu-open" : ""}`}>
      <div className="container-nav">
        <a href="#" className="site-logo" aria-label={SITE_NAME}>
          <Image
            src={LOGO_URL}
            alt={SITE_NAME}
            width={1023}
            height={244}
            priority
            quality={100}
            sizes="201px"
            unoptimized
          />
        </a>

        <nav className="site-nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="site-nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header-actions">
          <a href={PHONE_HREF} className="site-phone">
            <PhoneIcon />
            <span>{PHONE_NUMBER}</span>
          </a>
          <BookButton variant="primary" className="site-header-cta !py-2.5 sm:!px-5" />
          <button
            type="button"
            className="mobile-nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <>
          <button
            type="button"
            className="mobile-nav-backdrop"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div id="mobile-nav" className="mobile-nav-panel">
            <p className="mobile-nav-label">Menu</p>
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href={PHONE_HREF} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
              Call {PHONE_NUMBER}
            </a>
            <a
              href={`#${BOOKING_SECTION_ID}`}
              className="mobile-nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Book your Free Consultation
            </a>
          </div>
        </>
      ) : null}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.312a11.042 11.042 0 005.516 5.516l.312-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-7.456 0-13.5-6.044-13.5-13.5V3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
