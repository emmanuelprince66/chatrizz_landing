import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fonts are self-hosted (latin subset, variable weight) so builds don't
// need to reach Google Fonts.

// Inter font for body text
const inter = localFont({
  src: "../fonts/inter-latin.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

// Work Sans as Cabinet Grotesk alternative (or you could use: Outfit, Public Sans, or Space Grotesk)
const workSans = localFont({
  src: "../fonts/work-sans-latin.woff2",
  variable: "--font-work-sans",
  weight: "400 700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chatrizz - Find People. Drop Rizz. Grow Your Hustle.",
  description:
    "A location-aware social app where meeting new people, growing your vibe, and promoting your hustle all happens in one tap.",
  verification: {
    google: "OCk7qpsVbUZrcyOyZ5yS3mFkqekmm3i1ow54tHzU99A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${workSans.variable} w-full font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
