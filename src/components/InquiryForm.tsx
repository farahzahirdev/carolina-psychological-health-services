"use client";

import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";
import {
  ADDRESS_LINES,
  FORM_HEIGHT,
  FORM_ID,
  FORM_IFRAME_ID,
  FORM_NAME,
  FORM_SECTION_ID,
  MAPS_URL,
  PHONE_HREF,
  PHONE_NUMBER,
} from "@/lib/constants";
import { mountAndBindGhlForm, unmountGhlEmbed } from "@/lib/ghlEmbed";

const FORM_MIN_HEIGHT = "900px";

export default function InquiryForm() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const unbind = mountAndBindGhlForm(host, {
      id: FORM_ID,
      name: FORM_NAME,
      height: FORM_HEIGHT,
      iframeId: FORM_IFRAME_ID,
      minHeight: FORM_MIN_HEIGHT,
      borderRadius: "16px",
    });

    const iframe = host.querySelector("iframe");
    if (iframe) {
      iframe.setAttribute("data-cookie-consent", "true");
      iframe.setAttribute("data-cookie-consent-provider", "auto");
    }

    return () => {
      unbind();
      unmountGhlEmbed(host);
    };
  }, []);

  return (
    <section id={FORM_SECTION_ID} className="section-padding scroll-mt-24">
      <div className="container-main">
        <div className="embed-layout">
          <Reveal className="space-y-5 lg:sticky lg:top-28">
            <div>
              <p className="section-eyebrow">Get started</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Find out if you Qualify</h2>
              <p className="text-lead mx-auto mt-4 max-w-xl lg:mx-0">
                Share a few details and our Jacksonville team will follow up about eligibility,
                insurance, and whether TMS or Spravato® may fit.
              </p>
              <p className="mt-3 text-sm font-medium text-teal-deep">
                Confidential. Free consultation available. Takes a few minutes.
              </p>
            </div>

            <p className="text-center text-sm font-medium text-navy lg:text-left">
              Prefer to talk first? Call our team.
            </p>

            <ul className="contact-list mx-auto max-w-md lg:mx-0">
              <li>
                <a href={PHONE_HREF} className="contact-item group">
                  <span className="contact-icon">
                    <PhoneIcon />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-teal">
                      Phone
                    </span>
                    <span className="mt-0.5 block font-medium text-navy group-hover:text-teal-deep">
                      {PHONE_NUMBER}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item group"
                >
                  <span className="contact-icon">
                    <PinIcon />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-teal">
                      Jacksonville, NC
                    </span>
                    <span className="mt-0.5 block font-medium leading-relaxed text-navy group-hover:text-teal-deep">
                      {ADDRESS_LINES.join(", ")}
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={2} className="embed-panel min-w-0">
            <div
              ref={hostRef}
              className="w-full"
              style={{ minHeight: FORM_MIN_HEIGHT }}
              aria-label="Qualification form"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.08 19.08 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.08 19.08 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}
