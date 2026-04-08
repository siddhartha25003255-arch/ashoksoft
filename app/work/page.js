export default function Work() {
  return (
    <main className="min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob z-0 pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-orange-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 z-0 pointer-events-none"></div>

      <div className="relative z-10 w-full mb-16 text-center animate-fade-up flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Under </span>
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-[#0F7C7C] to-teal-400 blur-2xl opacity-30"></span>
            <span className="relative bg-gradient-to-r from-teal-300 via-[#0F7C7C] to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
              Construction
            </span>
          </span>
        </h1>
        
        <div className="glass-card mt-8 p-10 md:p-16 rounded-3xl border border-white/5 shadow-[0_20px_40px_-15px_rgba(15,124,124,0.1)] max-w-2xl w-full">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-100 mb-6">
            Our Work Page is Under Construction
          </h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            We are currently working on showcasing our top projects and case studies here. We are finalizing the details and it will be up very soon. Stay tuned!
          </p>
          <div className="mt-10 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
