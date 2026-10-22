import Image from "next/image";
import Reveal from "@/components/Reveal";
import { BookButton, CallButton } from "@/components/CTAButtons";
import { IMAGES, WHY_ITEMS, WHY_SECTION_ID } from "@/lib/constants";

export default function WhyCphs() {
  return (
    <section id={WHY_SECTION_ID} className="section-padding scroll-mt-24">
      <div className="container-main">
        <div className="cphs-why-grid">
          <Reveal>
            <div className="cphs-why-media">
              <Image
                src={IMAGES.clinic}
                alt="Front entrance of Carolina Psychological Health Services in Jacksonville, NC"
                fill
                quality={90}
                sizes="(max-width: 1023px) 100vw, 46vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div>
              <p className="section-eyebrow">Why Carolina Psych</p>
              <h2 className="mt-3">Comprehensive care, thoughtfully delivered</h2>
              <p className="text-lead mt-4">
                A Pneuma Behavioral Health practice serving Onslow County since 1988, with more than
                30 clinicians and advanced depression treatments in one place.
              </p>

              <ul className="cphs-why-list mt-8">
                {WHY_ITEMS.map((item) => (
                  <li key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <BookButton variant="primary" />
                <CallButton variant="outline" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
