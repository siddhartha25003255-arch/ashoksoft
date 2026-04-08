import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* 🚀 HERO SECTION */}
      <section className="relative z-10 flex flex-col justify-center items-center text-center px-6 pt-24 md:pt-32 pb-32 min-h-[85vh]">
        <div className="animate-fade-up max-w-4xl mx-auto">
          <div className="inline-block mb-8 px-5 py-2 rounded-full border border-teal-500/20 bg-teal-500/5 backdrop-blur-md">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
              The Next Evolution of Software
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight text-white mb-8">
            Build{" "}
            <span className="relative inline-block">
              {/* Highlight word glow */}
              <span className="absolute -inset-2 bg-gradient-to-r from-[#0F7C7C] to-teal-400 blur-2xl opacity-40"></span>
              <span className="relative bg-gradient-to-r from-teal-300 via-[#0F7C7C] to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
                Powerful
              </span>
            </span>
            <br />
            Digital Experiences
          </h1>

          <p className="mt-6 text-slate-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            We craft scalable, high-performance software solutions for modern
            businesses. From concept to deployment, we build what's next.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 items-center">
            {/* Secondary CTA */}
            <Link href="/work" className="group px-8 py-4 rounded-xl text-slate-300 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:text-white transition-all duration-300 tracking-wide font-medium">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* 🧩 SERVICES */}
      <section className="relative z-10 py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in animation-delay-2000">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built for Scale
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            From modern web applications to robust mobile platforms, our toolkit
            handles the hard parts so you can focus on your product.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Service Card 1: Teal Accent */}
          <Link href="/services/web-architecture" className="glass-card group relative p-8 rounded-2xl border border-white/5 hover:border-[#0F7C7C]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(15,124,124,0.3)] overflow-hidden block">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0F7C7C] rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#0F7C7C]/50 transition-colors duration-300 text-teal-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white transition-colors duration-300">
                Web Architecture
              </h4>
              <p className="text-slate-400 leading-relaxed font-light text-sm">
                Next.js, React, and serverless backends engineered for
                sub-second load times and infinite scalability.
              </p>
            </div>
          </Link>

          {/* Service Card 2: Orange Accent */}
          <Link href="/services/app-development" className="glass-card group relative p-8 rounded-2xl border border-white/5 hover:border-[#F97316]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.2)] overflow-hidden block">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97316] rounded-full blur-[100px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#F97316]/50 transition-colors duration-300 text-orange-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white transition-colors duration-300">
                App Development
              </h4>
              <p className="text-slate-400 leading-relaxed font-light text-sm">
                Native-feeling cross-platform iOS and Android experiences built
                with React Native and Expo.
              </p>
            </div>
          </Link>

          {/* Service Card 3: Cyan Accent */}
          <Link href="/services/cloud" className="glass-card group relative p-8 rounded-2xl border border-white/5 hover:border-cyan-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.3)] overflow-hidden block">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600 rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-cyan-500/50 transition-colors duration-300 text-cyan-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white transition-colors duration-300">
                Cloud & Infrastructure
              </h4>
              <p className="text-slate-400 leading-relaxed font-light text-sm">
                Custom AWS and Vercel infrastructure deployments tailored for
                massive concurrency.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
