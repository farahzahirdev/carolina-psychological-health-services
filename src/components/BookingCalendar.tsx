"use client";

import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";
import { CallButton, QualifyButton } from "@/components/CTAButtons";
import {
  BOOKING_SECTION_ID,
  CALENDAR_ID,
  CALENDAR_IFRAME_ID,
  PHONE_HREF,
  PHONE_NUMBER,
} from "@/lib/constants";
import { mountAndBindGhlCalendar, revealGhlIframe, unmountGhlEmbed } from "@/lib/ghlEmbed";

const CALENDAR_MIN_HEIGHT = "720px";

function parseEmbedHeight(data: unknown): number | null {
  if (typeof data === "number" && data > 0) return data;

  if (typeof data === "string") {
    const match = data.match(/height[:=]\s*(\d+)/i);
    if (match) return Number(match[1]);
  }

  if (typeof data === "object" && data !== null) {
    const payload = data as Record<string, unknown>;
    if (typeof payload.height === "number" && payload.height > 0) return payload.height;
    if (typeof payload.frameHeight === "number" && payload.frameHeight > 0) {
      return payload.frameHeight;
    }
  }

  return null;
}

export default function BookingCalendar() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const unbind = mountAndBindGhlCalendar(host, {
      id: CALENDAR_ID,
      title: "Book a free consultation with Carolina Psychological Health Services",
      iframeId: CALENDAR_IFRAME_ID,
      minHeight: CALENDAR_MIN_HEIGHT,
    });

    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("4tms.com")) return;
      const height = parseEmbedHeight(event.data);
      const iframe = host.querySelector("iframe");
      if (!iframe) return;
      revealGhlIframe(iframe);
      if (height) {
        iframe.style.height = `${height}px`;
        iframe.style.minHeight = "0";
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      unbind();
      unmountGhlEmbed(host);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <section id={BOOKING_SECTION_ID} className="section-padding scroll-mt-24 bg-cream-deep/60">
      <div className="container-main">
        <div className="embed-layout">
          <Reveal className="space-y-5 text-center lg:sticky lg:top-28 lg:text-left">
            <div>
              <p className="section-eyebrow justify-center lg:justify-start">Free consultation</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Book your Free Consultation</h2>
              <p className="text-lead mx-auto mt-4 max-w-xl lg:mx-0">
                Pick a time that works for you. No obligation, just a conversation about whether TMS
                or Spravato® is the right next step. Insurance and financing options can be reviewed
                on the call.
              </p>
              <p className="mt-3 text-sm text-muted">
                Prefer to talk first? Call{" "}
                <a href={PHONE_HREF} className="font-semibold text-teal-deep hover:text-navy">
                  {PHONE_NUMBER}
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <CallButton variant="outline" />
              <QualifyButton variant="outline" />
            </div>
          </Reveal>

          <Reveal delay={2} className="embed-panel min-w-0">
            <div
              ref={hostRef}
              className="w-full"
              style={{ minHeight: CALENDAR_MIN_HEIGHT }}
              aria-label="Booking calendar"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
