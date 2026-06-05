import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import "./globals.css";

export const metadata: Metadata = {
  title: "RYMETAL | Cookware Handle Manufacturer",
  description: "Bakelite, stainless steel and cast zinc cookware handles, side handles and knobs with OEM & ODM service.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header />{children}<Footer /><WhatsApp /><Analytics /></body></html>;
}
