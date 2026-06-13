import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollReveal from "@/components/ScrollReveal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Navayuva Bharati Infotech | Enterprise Software Solutions",
  description: "Redefining enterprise consulting, Salesforce integrations, cybersecurity infrastructure, and automated mortgage solutions.",
  metadataBase: new URL("https://navayuvabharatinfotech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Navayuva Bharati Infotech | Enterprise Software Solutions",
    description: "Redefining enterprise consulting, Salesforce integrations, cybersecurity infrastructure, and automated mortgage solutions.",
    url: "https://navayuvabharatinfotech.com",
    siteName: "Navayuva Bharati Infotech",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "NYB Infotech Logo Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navayuva Bharati Infotech | Enterprise Software Solutions",
    description: "Redefining enterprise consulting, Salesforce integrations, cybersecurity infrastructure, and automated mortgage solutions.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">
        <SmoothScroll />
        <ScrollReveal />
        <Navbar />
        <main className="flex-grow pt-[84px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
