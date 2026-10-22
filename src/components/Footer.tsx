import Image from "next/image";
import {
  ADDRESS_LINES,
  CRISIS_HREF,
  CRISIS_LINE,
  LOGO_WHITE_URL,
  MAPS_URL,
  PHONE_HREF,
  PHONE_NUMBER,
  SITE_NAME,
  WEBSITE_URL,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-main">
        <div className="site-footer-grid">
          <div>
            <Image
              src={LOGO_WHITE_URL}
              alt={SITE_NAME}
              width={560}
              height={128}
              quality={100}
              className="h-11 w-auto sm:h-12"
              unoptimized
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              A Pneuma Behavioral Health practice providing outpatient behavioral health care in
              Jacksonville, NC since 1988.
            </p>
          </div>

          <div>
            <p className="footer-label">Contact</p>
            <ul className="footer-list">
              <li>
                <a href={PHONE_HREF}>{PHONE_NUMBER}</a>
              </li>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  {ADDRESS_LINES.join(", ")}
                </a>
              </li>
              <li>
                <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer">
                  cphsnc.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-label">Crisis support</p>
            <p className="text-sm leading-relaxed text-white/70">
              After-hours crisis line:{" "}
              <a href={CRISIS_HREF} className="text-white hover:underline">
                {CRISIS_LINE}
              </a>
              . If this is an emergency, call or text 988, or dial 911.
            </p>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>HIPAA compliant · Not for emergencies</p>
        </div>
      </div>
    </footer>
  );
}
