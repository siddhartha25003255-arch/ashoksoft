export default function Services() {
  return (
    <main className="min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative overflow-hidden flex flex-col items-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob z-0"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 z-0"></div>

      <div className="relative z-10 w-full mb-16 text-center animate-fade-up">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Our </span>
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-[#0F7C7C] to-teal-400 blur-2xl opacity-30"></span>
            <span className="relative bg-gradient-to-r from-teal-300 via-[#0F7C7C] to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
              Services
            </span>
          </span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          From modern web applications to robust robust enterprise solutions, our toolkit handles the hard parts so you can focus on building your business.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10 w-full animate-fade-up" style={{ animationDelay: '200ms' }}>
        
        {/* Service Card 1 */}
        <div className="glass-card group relative p-8 rounded-2xl border border-white/5 hover:border-[#0F7C7C]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(15,124,124,0.3)] overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0F7C7C] rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#0F7C7C]/50 transition-colors duration-300 text-teal-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-slate-100 transition-colors duration-300">
              Web Development
            </h2>
            <p className="text-slate-400 leading-relaxed font-light">
              Modern, responsive, and fast websites engineered using Next.js, React, and high-performance serverless backends.
            </p>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="glass-card group relative p-8 rounded-2xl border border-white/5 hover:border-[#F97316]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.2)] overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97316] rounded-full blur-[100px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#F97316]/50 transition-colors duration-300 text-orange-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-slate-100 transition-colors duration-300">
              App Development
            </h2>
            <p className="text-slate-400 leading-relaxed font-light">
              Native-feeling cross-platform iOS and Android applications built for lightning-fast speeds and seamless user experiences.
            </p>
          </div>
        </div>

        {/* Service Card 3 */}
        <div className="glass-card group relative p-8 rounded-2xl border border-white/5 hover:border-cyan-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.3)] overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600 rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-cyan-500/50 transition-colors duration-300 text-cyan-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-slate-100 transition-colors duration-300">
              Custom Software
            </h2>
            <p className="text-slate-400 leading-relaxed font-light">
              Tailored, custom-built digital solutions tailored perfectly to handle your business's unique bottlenecks and growth needs.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
