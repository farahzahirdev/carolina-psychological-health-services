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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon.png", type: "image/png" },
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
        <Script src="https://go.4tms.com/js/form_embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
