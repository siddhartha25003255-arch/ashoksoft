import Image from "next/image";
import Link from "next/link";

export default function CloudInfrastructure() {
  return (
    <main className="min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative overflow-hidden flex flex-col">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob z-0 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 z-0 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative z-10 w-full mb-20 text-center animate-fade-up">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-md">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Cloud & Infrastructure</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Limitless </span>
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-cyan-600 to-blue-400 blur-2xl opacity-30"></span>
            <span className="relative bg-gradient-to-r from-cyan-300 via-cyan-500 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
              Scalability
            </span>
          </span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          We construct bullet-proof, globally distributed cloud environments designed to absorb massive traffic spikes without dropping a single packet.
        </p>
      </section>

      <div className="relative z-10 w-full space-y-24 animate-fade-up" style={{animationDelay: '100ms'}}>
        
        {/* Intro Layout (Text Left, Image Right) */}
        <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
              Invisible Yet Indestructible
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg font-light">
              Your software is only as stable as the infrastructure hosting it. We specialize in establishing automated, highly secure, CI/CD pipelines and cloud clusters. By leveraging container orchestration and edge networks, we ensure your users always experience lightning-fast reliability closer to regions where they reside.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.2)] border border-white/10 group bg-slate-900">
              <Image 
                src="/images/services/cloud_infrastructure_bg.png" 
                alt="Abstract visualization of massive cloud infrastructure networks"
                width={800} height={600} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
        </section>

        {/* How It Works (Image Left, Text Right) */}
        <section className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
              How It Works
            </h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Architecture Blueprinting", desc: "Analyzing traffic patterns to allocate resources across databases, CDNs, and compute nodes." },
                { step: "2", title: "Docker & Containerization", desc: "Packaging your application into isolated containers for perfect environment parity." },
                { step: "3", title: "Automated Deployments", desc: "Configuring strict CI/CD pipelines that test, build, and deploy zero-downtime updates." }
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-cyan-500/50 bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-2">{item.title}</h3>
                    <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
             {/* Tech Stack Cards */}
             {[
               {name: "AWS", icon: "☁️"}, 
               {name: "Docker", icon: "🐳"}, 
               {name: "Vercel", icon: "▲"}, 
               {name: "Cloudflare", icon: "🛡️"}
             ].map(tech => (
               <div key={tech.name} className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-3 hover:border-cyan-500/40 transition-colors">
                  <span className="text-4xl">{tech.icon}</span>
                  <span className="text-slate-300 font-medium">{tech.name}</span>
               </div>
             ))}
          </div>
        </section>

        {/* Benefits text section */}
        <section className="glass-card p-10 md:p-16 rounded-3xl border border-white/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>
           <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
             <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                  Why It Matters
                </h2>
                <p className="text-slate-400 leading-relaxed font-light text-lg">
                  Modern infrastructure eliminates the "it works on my machine" dilemma. Properly configured cloud environments drastically reduce server maintenance overhead, protect against DDoS vulnerabilities, and automatically scale horizontally right when the viral spikes hit.
                </p>
             </div>
             <div className="space-y-4">
                {[
                  "Zero-downtime automated rollouts",
                  "Global edge CDN delivery",
                  "Horizontal auto-scaling",
                  "Database replication & backups"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                     <span className="text-cyan-400">✓</span>
                     <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
             </div>
           </div>
        </section>

        {/* Use cases */}
        <section className="text-center space-y-12 pb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
              Real-world Use Cases
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
               {[
                 {title: "Video Streaming", desc: "Distributing multi-tier storage networks to stream massive media payloads securely."},
                 {title: "Global APIs", desc: "Hosting low-latency, edge-deployed API gateways that service millions of hits per hour."},
                 {title: "Big Data Processing", desc: "Spinning up temporary compute instances dynamically to process heavy server-side workloads."}
               ].map(uc => (
                 <div key={uc.title} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-1 transition-transform">
                    <h3 className="text-xl font-semibold text-slate-200 mb-3">{uc.title}</h3>
                    <p className="text-slate-400 font-light">{uc.desc}</p>
                 </div>
               ))}
            </div>
            
            <div className="pt-8">
              <Link href="/contact" className="inline-block px-8 py-4 rounded-xl text-white bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 font-semibold shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                Optimize Your Scale
              </Link>
            </div>
        </section>

      </div>
    </main>
  );
}
