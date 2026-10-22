import Image from "next/image";
import { BookButton, QualifyButton } from "@/components/CTAButtons";
import { IMAGES } from "@/lib/constants";

const TRUST_ITEMS = [
  {
    title: "Since 1988",
    subtitle: "Trusted in Jacksonville",
    icon: "calendar" as const,
  },
  {
    title: "Apollo TMS",
    subtitle: "FDA-cleared treatment",
    icon: "pulse" as const,
  },
  {
    title: "Spravato®",
    subtitle: "In-office, monitored care",
    icon: "shield" as const,
  },
  {
    title: "TRICARE & more",
    subtitle: "Insurance and financing",
    icon: "check" as const,
  },
] as const;

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="cphs-hero">
      <div className="container-main cphs-hero-main">
        <div className="cphs-hero-grid">
          <div className="cphs-hero-copy">
            <p className="cphs-hero-eyebrow cphs-anim cphs-anim-1">
              <span className="cphs-hero-eyebrow-dot" aria-hidden />
              Jacksonville, NC · Advanced depression care
            </p>

            <h1 id="hero-heading" className="cphs-hero-title cphs-anim cphs-anim-2">
              When Depression Hasn&apos;t Responded, Advanced Options Can Help.
            </h1>

            <p className="cphs-hero-lede cphs-anim cphs-anim-3">
              Explore TMS Therapy and Spravato® with a trusted, experienced care team in
              Jacksonville, NC.
            </p>

            <div className="cphs-hero-actions cphs-anim cphs-anim-4">
              <BookButton variant="primary" />
              <QualifyButton variant="outline" />
            </div>
          </div>

          <div className="cphs-hero-visual cphs-anim cphs-anim-media">
            <div className="cphs-hero-orb-glow" aria-hidden />
            <div className="cphs-hero-orb">
              <div className="cphs-hero-photo">
                <Image
                  src={IMAGES.hero}
                  alt="Patient smiling in a calm, bright care setting"
                  fill
                  priority
                  quality={100}
                  sizes="(max-width: 1023px) 92vw, 700px"
                  className="cphs-hero-img"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cphs-hero-trust cphs-anim cphs-anim-5" aria-label="Trust highlights">
        <div className="container-main">
          <ul className="cphs-hero-trust-strip">
            {TRUST_ITEMS.map((item, index) => (
              <li key={item.title} className="cphs-hero-trust-item">
                {index > 0 ? <span className="cphs-hero-trust-divider" aria-hidden /> : null}
                <div className="cphs-hero-trust-content">
                  <TrustIcon name={item.icon} />
                  <div>
                    <p className="cphs-hero-trust-title">{item.title}</p>
                    <p className="cphs-hero-trust-subtitle">{item.subtitle}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TrustIcon({ name }: { name: (typeof TRUST_ITEMS)[number]["icon"] }) {
  const common = {
    className: "cphs-hero-trust-icon",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    "aria-hidden": true as const,
  };

  if (name === "calendar") {
    return (
      <svg {...common}>
        <rect x="3.5" y="5" width="17" height="15" rx="2" />
        <path d="M8 3.5v3M16 3.5v3M3.5 10h17" />
      </svg>
    );
  }

  if (name === "pulse") {
    return (
      <svg {...common}>
        <path d="M3 12h4l2.5-5 3.5 10 2.5-5H21" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...common}>
        <path
          d="M12 3.5l7 3v5.2c0 4.2-2.8 7.2-7 8.8-4.2-1.6-7-4.6-7-8.8V6.5l7-3z"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M8.5 12.2l2.3 2.3 4.7-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
