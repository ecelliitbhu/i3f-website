import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "I3F Incubation Process | IIT (BHU)",
  description: "End-to-end Start to Scale support to entrepreneurs at IIT (BHU) Varanasi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">

        {/* Our new Navbar component! */}
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        {/* Add the Footer here! */}
        <Footer />

      </body>
    </html>

  );
}
