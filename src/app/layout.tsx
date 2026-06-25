import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "MaaKosh — Maternal & Neonatal Monitoring Ecosystem",
  description:
    "AI-powered wearable ecosystem for continuous maternal and neonatal monitoring. Early risk awareness. Better outcomes.",
  keywords: [
    "maternal monitoring",
    "neonatal monitoring",
    "wearable medical device",
    "AI healthcare",
    "MaaKosh",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-surface-bg text-surface-text">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
