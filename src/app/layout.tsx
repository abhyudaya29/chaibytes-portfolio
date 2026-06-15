import type { Metadata } from "next";
import Script from "next/script";
import { outfit, inter, manrope, instrumentSerif, jetbrainsMono } from "@/lib/fonts";
import ScrollProvider from "@/components/providers/ScrollProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChaiBytes by Abhyudaya — AI Product Engineer & Systems Builder",
  description: "Full-stack developer and AI engineer based in India. Building web apps, AI automation, and SaaS products for startups and founders. Available for freelance.",
  keywords: ["AI engineer India", "freelance developer India", "full stack developer India", "Next.js developer", "AI automation freelance", "SaaS developer India", "hire developer India", "ChaiBytes", "Abhyudaya Dubey"],
  authors: [{ name: "Abhyudaya Dubey", url: "https://www.chaibytes.in" }],
  creator: "Abhyudaya Dubey",
  metadataBase: new URL("https://www.chaibytes.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ChaiBytes by Abhyudaya — AI Product Engineer",
    description: "Full-stack developer and AI engineer based in India. Building web apps, AI automation, and SaaS products for startups and founders.",
    url: "https://www.chaibytes.in",
    siteName: "ChaiBytes",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ChaiBytes by Abhyudaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChaiBytes by Abhyudaya",
    description: "AI Product Engineer · Building in India",
    creator: "@chaiwalahacoder",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${manrope.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg-base text-text-primary selection:bg-accent-primary selection:text-text-primary antialiased">
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="ffebc9c7-13ce-408e-8418-c0b8d49fdc45"
          strategy="afterInteractive"
        />
        <ScrollProvider>
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
