import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SERVICES, SERVICES_SECTION_ID } from "@/lib/constants";

export default function Services() {
  return (
    <section id={SERVICES_SECTION_ID} className="section-padding scroll-mt-24 bg-cream-deep/70">
      <div className="container-main">
        <Reveal className="section-intro">
          <p className="section-eyebrow">Advanced depression care</p>
          <h2 className="mt-3">TMS and Spravato®, explained</h2>
          <p className="text-lead mt-4">
            Two evidence-based options for depression that hasn&apos;t responded well to medication,
            delivered in a supportive Jacksonville clinic.
          </p>
        </Reveal>

        <div className="mt-14 space-y-16 lg:space-y-20">
          {SERVICES.map((service, index) => {
            const reverse = index % 2 === 1;
            return (
              <Reveal key={service.id}>
                <article
                  id={service.id}
                  className={`cphs-service${reverse ? " is-reverse" : ""}`}
                >
                  <div
                    className={`cphs-service-media${service.id === "spravato" ? " is-contain" : ""}`}
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      quality={90}
                      sizes="(max-width: 1023px) 100vw, 48vw"
                      className={service.id === "spravato" ? "object-contain" : "object-cover"}
                    />
                  </div>
                  <div className="cphs-service-copy">
                    <p className="section-eyebrow">{service.eyebrow}</p>
                    <h3 className="mt-2 text-3xl sm:text-4xl">{service.title}</h3>
                    <p className="text-lead mt-4">{service.description}</p>
                    <ul className="cphs-check-list mt-6">
                      {service.points.map((point) => (
                        <li key={point}>
                          <CheckIcon />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 shrink-0 text-teal" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}
