import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#0B0F0F] pt-16 pb-8 overflow-hidden z-10 w-full mt-auto">
      {/* Decorative Glows inside footer */}
      <div className="absolute bottom-[-20%] left-[10%] w-[300px] h-[300px] bg-[#0F7C7C]/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none z-[-1]"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[300px] h-[300px] bg-[#F97316]/5 blur-[100px] rounded-full mix-blend-screen pointer-events-none z-[-1]"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-4 group cursor-pointer mb-6 inline-flex">
              <div className="relative">
                <div className="absolute -inset-2 bg-[#0F7C7C] rounded-full opacity-20 group-hover:opacity-60 blur-md transition duration-500"></div>
                <Image
                  src="/logo.png"
                  alt="Ashoksoft Technologies logo"
                  width={36}
                  height={36}
                  className="relative z-10 drop-shadow-[0_0_12px_rgba(15,124,124,0.8)] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h2 className="text-xl font-bold tracking-widest text-slate-100 uppercase">
                Ashoksoft Technologies
              </h2>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Empowering businesses with modern, scalable, and high-performance digital solutions. We transform ideas into interactive realities.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-slate-100 font-semibold tracking-wide uppercase text-sm mb-6 pb-2 border-b border-white/10 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/services", label: "Services" },
                { path: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-slate-400 text-sm hover:text-teal-300 transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-slate-100 font-semibold tracking-wide uppercase text-sm mb-6 pb-2 border-b border-white/10 inline-block">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3 hover:text-teal-300 transition-colors duration-300">
                <span className="text-[#0F7C7C]">📍</span>
                <span>Bengaluru, India</span>
              </li>
              <li className="flex items-center gap-3 hover:text-teal-300 transition-colors duration-300">
                <span className="text-[#0F7C7C]">📧</span>
                <a href="mailto:hello@ashoksofttechnologies.com">hello@ashoksofttechnologies.com</a>
              </li>
              <li className="flex items-center gap-3 hover:text-teal-300 transition-colors duration-300">
                <span className="text-[#0F7C7C]">📞</span>
                <a href="tel:+919958426849">+91 9958426849</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {currentYear} Ashoksoft Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 z-20">
            <Link href="/privacy-policy" className="text-slate-500 hover:text-[#0F7C7C] transition-colors duration-300 relative z-20 pointer-events-auto">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-slate-500 hover:text-[#0F7C7C] transition-colors duration-300 relative z-20 pointer-events-auto">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
