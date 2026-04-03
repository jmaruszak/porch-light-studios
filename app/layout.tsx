import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// TODO: Replace with your real production domain (no trailing slash), e.g. "https://porchlightstudios.com"
const SITE_URL = "https://REPLACE_WITH_PRODUCTION_DOMAIN.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Porch Light Studios",
  description: "Original films, music, and episodic content built in Mississippi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Porch Light Studios",
    description: "Original films, music, and episodic content built in Mississippi",
    url: "/",
    siteName: "Porch Light Studios",
    type: "website",
    images: [
      {
        url: "/images/porch-hero-cinematic.jpeg",
        alt: "Porch Light Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Porch Light Studios",
    description: "Original films, music, and episodic content built in Mississippi",
    images: ["/images/porch-hero-cinematic.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased grain`}
      >
        {children}
      </body>
    </html>
  );
}
