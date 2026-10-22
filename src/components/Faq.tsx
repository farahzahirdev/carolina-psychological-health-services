"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { FAQ_ITEMS, IMAGES } from "@/lib/constants";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding bg-cream-deep/50">
      <div className="container-main">
        <Reveal className="section-intro">
          <p className="section-eyebrow">Common questions</p>
          <h2 className="mt-3">Answers before you take the next step</h2>
          <p className="text-lead mt-4">
            Quick details about eligibility, Apollo TMS, insurance, and how to get started.
          </p>
        </Reveal>

        <div className="cphs-faq-layout mt-12">
          <div className="cphs-faq-media-wrap">
            <Reveal>
              <div className="cphs-faq-media">
                <Image
                  src={IMAGES.faq}
                  alt="Front entrance of Carolina Psychological Health Services at 900 Dennis Rd, Jacksonville, NC"
                  fill
                  quality={90}
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="cphs-faq">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = open === index;
              const panelId = `faq-panel-${index}`;
              const triggerId = `faq-trigger-${index}`;

              return (
                <Reveal key={item.question} delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
                  <div className={`cphs-faq-item${isOpen ? " is-open" : ""}`}>
                    <button
                      type="button"
                      id={triggerId}
                      className="cphs-faq-trigger"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : index)}
                    >
                      <span>{item.question}</span>
                      <span className="cphs-faq-icon" aria-hidden>
                        +
                      </span>
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      className="cphs-faq-panel"
                    >
                      <div className="cphs-faq-panel-inner">
                        <p className="cphs-faq-answer">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
