import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className={`${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
