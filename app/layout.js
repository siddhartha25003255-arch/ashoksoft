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
        
        {/* 🌟 GLOBAL BACKGROUND GLOWS */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#0F7C7C]/20 blur-[120px] rounded-full animate-blob mix-blend-screen pointer-events-none z-[-1]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#F97316]/10 blur-[130px] rounded-full animate-blob animation-delay-2000 mix-blend-screen pointer-events-none z-[-1]"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-[#0F7C7C]/15 blur-[150px] rounded-full animate-blob animation-delay-4000 mix-blend-screen pointer-events-none z-[-1]"></div>

        {/* ✨ GLOBAL FLOATING PARTICLES */}
        <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
          {[
            { left: '10%', size: 4, dur: '12s', drift: '30px', delay: '0s' },
            { left: '25%', size: 6, dur: '15s', drift: '-20px', delay: '2s' },
            { left: '40%', size: 3, dur: '10s', drift: '40px', delay: '1s' },
            { left: '60%', size: 5, dur: '18s', drift: '-30px', delay: '4s' },
            { left: '75%', size: 7, dur: '14s', drift: '20px', delay: '0s' },
            { left: '90%', size: 4, dur: '16s', drift: '-40px', delay: '3s' },
            { left: '15%', size: 5, dur: '11s', drift: '10px', delay: '5s' },
            { left: '50%', size: 6, dur: '13s', drift: '-10px', delay: '2s' },
            { left: '80%', size: 3, dur: '17s', drift: '50px', delay: '1s' },
          ].map((p, i) => (
            <div 
              key={i} 
              className="absolute bottom-[-10%] animate-float-particle bg-[#0F7C7C]/40 rounded-full blur-[1px]" 
              style={{ 
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
                '--duration': p.dur,
                '--drift': p.drift,
                animationDelay: p.delay
              }}
            ></div>
          ))}
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
