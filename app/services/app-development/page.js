import Image from "next/image";
import Link from "next/link";

export default function AppDevelopment() {
  return (
    <main className="min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative overflow-hidden flex flex-col">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#F97316]/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob z-0 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-red-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 z-0 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative z-10 w-full mb-20 text-center animate-fade-up">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#F97316]/20 bg-[#F97316]/5 backdrop-blur-md">
          <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase">App Development</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Native Mobile </span>
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-[#F97316] to-orange-400 blur-2xl opacity-30"></span>
            <span className="relative bg-gradient-to-r from-orange-300 via-[#F97316] to-red-500 bg-clip-text text-transparent drop-shadow-sm">
              Experiences
            </span>
          </span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          We architect cross-platform mobile applications that feel flawlessly native, delivering immersive user experiences for global audiences.
        </p>
      </section>

      <div className="relative z-10 w-full space-y-24 animate-fade-up" style={{animationDelay: '100ms'}}>
        
        {/* Intro Layout (Text Left, Image Right) */}
        <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
              Transform Your Reach
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg font-light">
              Mobile isn't just an extension of your business; it's often the primary touchpoint. We specialize in bringing powerful functionalities to iOS and Android environments without sacrificing performance. Utilizing frameworks like React Native, we write once and deploy natively to both ecosystems.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.2)] border border-white/10 group bg-slate-900">
              <Image 
                src="/images/services/app_development_bg.png" 
                alt="Abstract mobile smartphone visualization"
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
                { step: "1", title: "Prototyping & Flow", desc: "Crafting intuitive mobile gestures, navigation loops, and high-fidelity mockups." },
                { step: "2", title: "Native Hardware Integration", desc: "Tapping into device capabilities like camera, biometrics, and GPS seamlessly." },
                { step: "3", title: "App Store Deployment", desc: "Handling the rigorous QA, compliance, and launch phases on Apple and Google Play stores." }
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#F97316]/50 bg-[#F97316]/20 flex items-center justify-center text-orange-400 font-bold text-xl">
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
               {name: "React Native", icon: "📱"}, 
               {name: "Expo", icon: "🚀"}, 
               {name: "Swift", icon: "🍏"}, 
               {name: "Kotlin", icon: "🤖"}
             ].map(tech => (
               <div key={tech.name} className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-3 hover:border-[#F97316]/40 transition-colors">
                  <span className="text-4xl">{tech.icon}</span>
                  <span className="text-slate-300 font-medium">{tech.name}</span>
               </div>
             ))}
          </div>
        </section>

        {/* Benefits text section */}
        <section className="glass-card p-10 md:p-16 rounded-3xl border border-white/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F97316]/10 blur-[120px] rounded-full pointer-events-none"></div>
           <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
             <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                  Why It Matters
                </h2>
                <p className="text-slate-400 leading-relaxed font-light text-lg">
                  Speed to market is essential. Maintaining separate iOS and Android codebases drains resources. Our unified architecture approach dramatically reduces development cycles while preserving authentic, native hardware acceleration and animation fluidity.
                </p>
             </div>
             <div className="space-y-4">
                {[
                  "Single unified codebase",
                  "Over-the-air (OTA) updates",
                  "Native 60fps animations",
                  "Offline-first architectures"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                     <span className="text-orange-400">✓</span>
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
                 {title: "On-Demand Services", desc: "Apps requiring background geolocation, real-time socket connections, and maps."},
                 {title: "Social Platforms", desc: "Media-heavy applications utilizing seamless feeds, device cameras, and push notifications."},
                 {title: "FinTech Wallets", desc: "Ultra-secure mobile applications with biometric authentication and encrypted local storage."}
               ].map(uc => (
                 <div key={uc.title} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-1 transition-transform">
                    <h3 className="text-xl font-semibold text-slate-200 mb-3">{uc.title}</h3>
                    <p className="text-slate-400 font-light">{uc.desc}</p>
                 </div>
               ))}
            </div>
            
            <div className="pt-8">
              <Link href="/contact" className="inline-block px-8 py-4 rounded-xl text-white bg-[#F97316] hover:bg-[#d65f0e] transition-all duration-300 font-semibold shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                Launch Your App
              </Link>
            </div>
        </section>

      </div>
    </main>
  );
}
