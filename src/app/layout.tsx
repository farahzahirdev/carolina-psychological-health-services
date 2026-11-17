import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PHONE_NUMBER, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} | TMS & Spravato® in Jacksonville, NC`,
  description: `Advanced TMS and Spravato® for treatment-resistant depression in Jacksonville, NC. Book a free consultation. Call ${PHONE_NUMBER}. TRICARE accepted.`,
  icons: {
    icon: [
      { url: "/images/favicon.avif", type: "image/avif" },
      { url: "/images/favicon.png", type: "image/png", sizes: "256x256" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/favicon.png",
  },
  keywords: [
    "Carolina Psychological Health Services",
    "TMS Jacksonville NC",
    "Spravato Jacksonville",
    "treatment-resistant depression",
    "Apollo TMS",
    "TRICARE mental health",
  ],
  openGraph: {
    title: `${SITE_NAME} | When Depression Hasn't Responded`,
    description:
      "FDA-cleared TMS and Spravato® for treatment-resistant depression. Free consultation in Jacksonville, NC.",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#283343",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1163886716198340');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1163886716198340&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Script src="https://go.4tms.com/js/form_embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
