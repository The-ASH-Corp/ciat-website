import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CIAT - Institute of Accounts & Management",
  description: "Invest Smart For Grow Your Wealth. The best solution for your business to grow and succeed.",
  icons: {
    icon: "/images/ciat-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-[#4F4F4F]">
        {children}
      </body>
    </html>
  );
}
