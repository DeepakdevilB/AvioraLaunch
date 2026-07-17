import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Peka Launch — Modern Websites, AI Automation & SaaS Solutions",
  description:
    "Peka Launch is a technology agency specializing in website development, AI automation, and custom SaaS solutions that help businesses grow faster.",
  keywords: [
    "web development",
    "AI automation",
    "SaaS solutions",
    "technology agency",
    "Peka Launch",
  ],
  openGraph: {
    title: "Peka Launch — we launch bussinesss, not rockets",
    description:
      "We build modern websites, AI automations, and scalable SaaS solutions that help businesses grow faster.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
