import Reveal from "@/components/Reveal";
import { RESULTS_SECTION_ID, STATS, VIDEO_RESULTS_BG } from "@/lib/constants";

export default function Results() {
  return (
    <section id={RESULTS_SECTION_ID} className="section-padding scroll-mt-24 cphs-results">
      <div className="cphs-results-media" aria-hidden>
        <video
          className="cphs-results-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={VIDEO_RESULTS_BG} type="video/mp4" />
        </video>
        <div className="cphs-results-vignette" />
      </div>

      <div className="container-main cphs-results-content">
        <Reveal className="cphs-results-header">
          <p className="cphs-results-eyebrow">Results that matter</p>
          <h2>Hope backed by real outcomes</h2>
          <p className="cphs-results-lede">
            TMS response rates from published research, plus a practice that has stood with
            Jacksonville families for decades.
          </p>
        </Reveal>

        <div className="cphs-stats">
          {STATS.map((stat, index) => (
            <Reveal
              key={stat.label}
              className="reveal-fade"
              delay={(Math.min(index + 1, 3) as 1 | 2 | 3)}
            >
              <article className="cphs-stat">
                <p className="cphs-stat-value">{stat.value}</p>
                <p className="cphs-stat-label">{stat.label}</p>
                <p className="cphs-stat-detail">{stat.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
