import { Cormorant_Garamond, Geist_Mono, Jost } from "next/font/google";

/** Brand fonts, shared by both root layouts (public site and admin). */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const bodyClassName = `${cormorant.variable} ${jost.variable} ${geistMono.variable} font-sans antialiased`;
