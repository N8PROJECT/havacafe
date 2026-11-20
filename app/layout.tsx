import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });
const serif = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "HAVA Restaurant & Cafe | Mampang, Jakarta",
  description: "Middle Eastern flavour, Western delight. Explore HAVA’s Palestinian dishes, grills and pastry, and book a table in Mampang.",
  openGraph: {
    title: "HAVA Restaurant & Cafe",
    description: "Palestinian dishes, generous grills and pastry in Mampang, Jakarta."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${sans.variable} ${serif.variable}`}><body>{children}</body></html>;
}
