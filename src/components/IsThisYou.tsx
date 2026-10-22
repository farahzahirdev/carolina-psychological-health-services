import Reveal from "@/components/Reveal";
import { BookButton, QualifyButton } from "@/components/CTAButtons";
import { IS_THIS_YOU, IS_THIS_YOU_SECTION_ID } from "@/lib/constants";

export default function IsThisYou() {
  return (
    <section id={IS_THIS_YOU_SECTION_ID} className="section-padding scroll-mt-24">
      <div className="container-main">
        <Reveal className="section-intro">
          <p className="section-eyebrow">Is this you?</p>
          <h2 className="mt-3">Treatment-resistant depression is more common than you think</h2>
          <p className="text-lead mt-4">
            If standard medications haven&apos;t brought the relief you hoped for, you are not out of
            options. Advanced treatments can open a new path forward.
          </p>
        </Reveal>

        <div className="cphs-fit-grid mt-12">
          {IS_THIS_YOU.map((item, index) => (
            <Reveal key={item.title} delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
              <article className="cphs-fit-item">
                <span className="cphs-fit-num" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <BookButton variant="primary" />
          <QualifyButton variant="outline" />
        </Reveal>
      </div>
    </section>
  );
}
