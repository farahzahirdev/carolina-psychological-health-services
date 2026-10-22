import Reveal from "@/components/Reveal";
import { BookButton, QualifyButton, CallButton } from "@/components/CTAButtons";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

const POINTS = [
  "Free consultation with no obligation",
  "Apollo TMS and Spravato® on site",
  "TRICARE, Medicare, and major plans",
  "CareCredit financing available",
] as const;

export default function FinalCta() {
  return (
    <section className="section-padding cphs-final">
      <div className="container-main">
        <Reveal>
          <div className="cphs-final-card">
            <div className="cphs-final-copy">
              <p className="section-eyebrow">Ready when you are</p>
              <h2 className="mt-3">Start with a free consultation</h2>
              <p className="text-lead mt-4">
                See whether TMS or Spravato® fits your history, coverage, and goals. Confidential
                support from a Jacksonville team trusted since 1988.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <BookButton variant="primary" />
                <QualifyButton variant="outline" />
                <CallButton variant="outline" />
              </div>

              <p className="mt-5 text-sm text-muted">
                Prefer to talk now?{" "}
                <a href={PHONE_HREF} className="font-semibold text-teal-deep hover:text-navy">
                  {PHONE_NUMBER}
                </a>
              </p>
            </div>

            <ul className="cphs-final-points">
              {POINTS.map((point) => (
                <li key={point}>
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5 shrink-0 text-teal"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}
