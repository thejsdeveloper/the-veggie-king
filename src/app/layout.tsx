import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Header from "@/components/Header";

import "./globals.css";
import Footer from "@/components/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "The Veggie King",
  description: "Best Veggies in the market",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${raleway.variable} scroll-smooth`}>
      <body className="bg-gray-50">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
