import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import DiscoveryTracker from "@/components/DiscoveryTracker";
import Script from "next/script";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Samaadi Scott",
  description: "Worker. Thinker. Builder. Civic entrepreneur.",
  icons: {
    icon: "/hero.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${bebasNeue.variable}`}>
        {children}
        <DiscoveryTracker />
      </body>
    </html>
  );
}