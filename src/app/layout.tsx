import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LenisProvider } from "@/components/lenis-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://infralyxtechnologies.com"),
  title: {
    default: "Infralyx Technologies | Doorstep Mobile Repair",
    template: "%s | Infralyx Technologies"
  },
  description:
    "Premium doorstep mobile repair for iPhone, Samsung flagship, and Android devices with fast turnaround and transparent pricing.",
  applicationName: "Infralyx Technologies",
  keywords: [
    "mobile repair",
    "doorstep repair",
    "iPhone repair",
    "Samsung repair",
    "battery replacement",
    "screen repair"
  ],
  openGraph: {
    title: "Infralyx Technologies | Doorstep Mobile Repair",
    description:
      "Premium liquid-glass inspired mobile repair website for iPhone, Samsung flagship, and Android devices.",
    url: "https://infralyxtechnologies.com",
    siteName: "Infralyx Technologies",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Infralyx Technologies | Doorstep Mobile Repair",
    description:
      "Fast, reliable doorstep repair with a premium booking experience and trusted technicians."
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} bg-background text-foreground antialiased`}>
        <LenisProvider>
          {children}
          <WhatsAppButton />
        </LenisProvider>
      </body>
    </html>
  );
}
