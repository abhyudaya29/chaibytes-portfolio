import type { Metadata } from "next";
import Script from "next/script";
import { outfit, inter, manrope, instrumentSerif, jetbrainsMono } from "@/lib/fonts";
import ScrollProvider from "@/components/providers/ScrollProvider";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChaiBytes — AI Agents, Fullstack SaaS & MVP Product Engineering Studio",
  description: "Specialized software lab building custom AI agents, scalable SaaS platforms, high-performance web MVPs, and Agentic Search Discoverability (AEO/GEO/SEO) systems.",
  keywords: ["AI software lab", "AI agents development", "SaaS developers", "MVP product engineering", "Agentic search discoverability", "AEO marketing systems", "GEO optimization", "Next.js SaaS development", "ChaiBytes"],
  authors: [{ name: "ChaiBytes", url: "https://www.chaibytes.in" }],
  creator: "ChaiBytes",
  metadataBase: new URL("https://www.chaibytes.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ChaiBytes — AI Agents, Fullstack SaaS & MVP Product Lab",
    description: "Specialized software lab building custom AI agents, scalable SaaS platforms, high-performance web MVPs, and Agentic Search Discoverability.",
    url: "https://www.chaibytes.in",
    siteName: "ChaiBytes",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ChaiBytes Software Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChaiBytes Software Lab",
    description: "AI Agents, Fullstack SaaS & MVP Product Engineering",
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
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-bg-base text-text-primary selection:bg-accent-primary selection:text-text-primary antialiased" suppressHydrationWarning>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="ffebc9c7-13ce-408e-8418-c0b8d49fdc45"
          strategy="afterInteractive"
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollProvider>
            {children}
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
