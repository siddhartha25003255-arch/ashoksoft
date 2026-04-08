export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 md:p-24 relative overflow-hidden">
      {/* Background Theme Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 z-0"></div>

      <div className="relative z-10 w-full max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight animate-fade-up">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">About </span>
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-[#0F7C7C] to-teal-400 blur-2xl opacity-40"></span>
            <span className="relative bg-gradient-to-r from-teal-300 via-[#0F7C7C] to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
              Ashoksoft Technologies
            </span>
          </span>
        </h1>
        
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/5 animate-fade-up shadow-2xl" style={{ animationDelay: "200ms" }}>
          <p className="text-2xl md:text-3xl text-slate-200 font-light leading-relaxed mb-6">
            We don't just write code. We forge <span className="text-orange-400 font-medium">digital accelerators</span> to scale your vision.
          </p>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Ashoksoft Technologies is a premier technology partner specializing in high-performance web and mobile ecosystems. Through bleeding-edge innovation, intelligent architecture, and relentless execution, we turn complex challenges into seamless, growth-driving realities.
          </p>
        </div>
      </div>
    </main>
  );
}
