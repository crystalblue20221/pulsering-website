import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: [
    {
      path: '../fonts/Satoshi-Regular[1].otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "PulseRing - Fall Detection Wearable for Seniors",
  description: "PulseRing is a stylish wearable device that detects falls and automatically alerts caregivers, providing peace of mind for seniors and their families.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${satoshi.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
