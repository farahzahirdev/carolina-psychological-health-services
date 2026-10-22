import Reveal from "@/components/Reveal";
import { TESTIMONIALS, TESTIMONIALS_SECTION_ID } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id={TESTIMONIALS_SECTION_ID} className="section-padding scroll-mt-24 bg-teal-mist/50">
      <div className="container-main">
        <Reveal className="section-intro">
          <p className="section-eyebrow">Patient stories</p>
          <h2 className="mt-3">Real people. Real relief.</h2>
          <p className="text-lead mt-4">
            Hear from patients who found hope with TMS and the Carolina Psych team, including
            military community members.
          </p>
        </Reveal>

        <div className="cphs-quotes mt-12">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.name} delay={(Math.min(index + 1, 3) as 1 | 2 | 3)}>
              <blockquote className="cphs-quote">
                <div className="cphs-stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p>&ldquo;{item.quote}&rdquo;</p>
                <footer>
                  <cite>{item.name}</cite>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-coral" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.836.067-1.171 1.12-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.991l4.069 2.085c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.53.3-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
        clipRule="evenodd"
      />
    </svg>
  );
}
