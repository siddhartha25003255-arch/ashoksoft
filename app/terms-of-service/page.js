export default function TermsOfService() {
  return (
    <main className="min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative overflow-hidden flex flex-col items-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob z-0 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 z-0 pointer-events-none"></div>

      <div className="relative z-10 w-full mb-16 text-center animate-fade-up">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Terms of </span>
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-[#0F7C7C] to-teal-400 blur-2xl opacity-30"></span>
            <span className="relative bg-gradient-to-r from-teal-300 via-[#0F7C7C] to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
              Service
            </span>
          </span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Please read these terms and conditions carefully before using our services.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-4xl space-y-12 animate-fade-up glass-card p-8 md:p-12 rounded-3xl border border-white/5" style={{ animationDelay: '200ms' }}>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-100">1. Acceptance of Terms</h2>
          <p className="text-slate-400 leading-relaxed font-light">
            By accessing and using our website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use our services. We reserve the right to update or modify these terms at any time without prior notice.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-100">2. Use of Services</h2>
          <p className="text-slate-400 leading-relaxed font-light">
            You agree to use our services only for lawful purposes and in accordance with these Terms. You are prohibited from violating or attempting to violate the security of the services, using the services to transmit any harmful or objectionable content, or engaging in any activity that interferes with the proper functioning of the platform.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-100">3. Intellectual Property</h2>
          <p className="text-slate-400 leading-relaxed font-light">
            All content, features, and functionality available on our platform, including but not limited to text, graphics, logos, and software, are the exclusive property of Ashoksoft Technologies and are protected by international copyright, trademark, and other intellectual property laws.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-100">4. Limitation of Liability</h2>
          <p className="text-slate-400 leading-relaxed font-light">
            To the maximum extent permitted by applicable law, Ashoksoft Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of our services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-100">5. Governing Law</h2>
          <p className="text-slate-400 leading-relaxed font-light">
            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any dispute arising from these terms will be resolved exclusively in the jurisdiction of the courts located in Bengaluru, India.
          </p>
        </section>

      </div>
    </main>
  );
}
