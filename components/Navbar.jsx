"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full backdrop-blur-2xl bg-[#0B0F0F]/60 border-b border-white/5 z-50 transition-all duration-500 shadow-xl shadow-black/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="relative">
            <div className="absolute -inset-2 bg-[#0F7C7C] rounded-full opacity-20 group-hover:opacity-60 blur-md transition duration-500"></div>
            <Image
              src="/logo.png"
              alt="Ashoksoft Technologies logo"
              width={44}
              height={44}
              className="relative z-10 drop-shadow-[0_0_12px_rgba(15,124,124,0.8)] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h1 className="text-xl font-bold tracking-widest text-slate-100 uppercase bg-clip-text">
            Ashoksoft Technologies
          </h1>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-10 items-center">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/services", label: "Services" },
            { path: "/contact", label: "Contact" },
          ].map((link) => (
            <Link key={link.path} href={link.path} className="relative group p-2">
              <span
                className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                  pathname === link.path
                    ? "text-[#0F7C7C] drop-shadow-[0_0_8px_rgba(15,124,124,0.8)]"
                    : "text-slate-400 group-hover:text-teal-300"
                }`}
              >
                {link.label}
              </span>
              <span
                className={`absolute left-1/2 bottom-0 h-[2px] bg-gradient-to-r from-[#0F7C7C] to-teal-400 transition-all duration-300 -translate-x-1/2 ${
                  pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                } shadow-[0_0_8px_rgba(15,124,124,0.8)]`}
              ></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
