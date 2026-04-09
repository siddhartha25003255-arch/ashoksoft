import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ashoksoft Technologies | Modern Software Solutions",
  description: "Crafting scalable, high-performance software and digital experiences for modern businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="relative min-h-screen text-slate-100 overflow-x-hidden bg-[var(--background)] font-sans selection:bg-[#0F7C7C]/30 flex flex-col">
        
        {/* ✨ ENHANCED PREMIUM ANIMATED BACKGROUND */}
        <div className="fixed inset-0 z-[-2] pointer-events-none overflow-hidden bg-[#0B0F0F]">
          {/* Subtle slow moving gradient blobs using soft blurs and opacity */}
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#0F7C7C]/20 blur-[120px] mix-blend-screen animate-blob-flow"></div>
          <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#F97316]/10 blur-[100px] mix-blend-screen animate-blob-flow animation-delay-4000"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[#0F7C7C]/15 blur-[120px] mix-blend-screen animate-blob-flow animation-delay-2000"></div>
        </div>

        {/* 🌑 SUBTLE TEXTURE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0F0F]/80 to-[#0B0F0F] pointer-events-none z-[-1]"></div>

        <Navbar />
        {/* Pass down children wrapped in a main layout container */}
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
