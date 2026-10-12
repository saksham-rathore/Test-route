import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Lumina | Premium Clothing",
  description: "State of the art fashion and clothing e-commerce app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <Script
          src="http://localhost:3000/beacon.js"
          data-pid="cmv566dqy000188wcyjyd5mag"
          data-domain="test-route-psi.vercel.app"
          data-beacon="http://localhost:3000/api/collect"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <Navbar />
        {children}
       
      </body>
    </html>
  );
}
