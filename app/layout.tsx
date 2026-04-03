import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://theporchlight.studio";
const OG_IMAGE = "https://theporchlight.studio/images/og-image.jpg";

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
  description: "Original films, music, and digital projectsbuilt in Mississippi.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Porch Light Studios",
    description: "Original films, music, and digital projects built in Mississippi.",
    url: SITE_URL,
    siteName: "Porch Light Studios",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Porch Light Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Porch Light Studios",
    description: "Original films, music, and digital projects built in Mississippi.",
    images: [OG_IMAGE],
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
