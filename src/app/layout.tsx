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
      <body>
        <Navbar />
        {children}
        <Script
          src="https://t.raah.dev/script.js"
          data-pid="proj_la5c1b1mru0b37c6"
          data-domain="test-route-psi.vercel.app"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
