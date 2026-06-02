import type { Metadata } from "next";
import { outfit, inter, manrope, instrumentSerif, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhyudaya Dubey — AI Product Engineer & Systems Builder",
  description: "Building intelligent systems, scalable backend architectures, and AI-native products. Full Stack Engineer based in India.",
  openGraph: {
    title: "Abhyudaya Dubey",
    description: "AI Product Engineer · Systems Builder · Full Stack Developer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
      className={`${outfit.variable} ${inter.variable} ${manrope.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg-base text-text-primary selection:bg-accent-primary selection:text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
