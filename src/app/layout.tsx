import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";

// Inter font for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Work Sans as Cabinet Grotesk alternative (or you could use: Outfit, Public Sans, or Space Grotesk)
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chatrizz - Find People. Drop Rizz. Grow Your Hustle.",
  description:
    "A location-aware social app where meeting new people, growing your vibe, and promoting your hustle all happens in one tap.",
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
