export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative overflow-hidden flex flex-col items-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob z-0 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 z-0 pointer-events-none"></div>

      <div className="relative z-10 w-full mb-16 text-center animate-fade-up">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Privacy </span>
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-[#0F7C7C] to-teal-400 blur-2xl opacity-30"></span>
            <span className="relative bg-gradient-to-r from-teal-300 via-[#0F7C7C] to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
              Policy
            </span>
          </span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Your privacy is critically important to us. Learn how we collect, use, and protect your data.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-4xl space-y-12 animate-fade-up glass-card p-8 md:p-12 rounded-3xl border border-white/5" style={{ animationDelay: '200ms' }}>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-100">1. Data Collection</h2>
          <p className="text-slate-400 leading-relaxed font-light">
            We collect information you directly provide to us, such as when you create an account, fill out a form, or communicate with us. This includes your name, email address, and any other details you choose to share. We also automatically collect certain technical information when you navigate our site, such as your IP address, browser type, and device information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-100">2. Usage of Information</h2>
          <p className="text-slate-400 leading-relaxed font-light">
            We use the information we collect to provide, maintain, and improve our services. This includes responding to your inquiries, delivering custom solutions, personalizing your experience, and analyzing website traffic to understand how our visitors interact with our platform.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-100">3. Data Security</h2>
          <p className="text-slate-400 leading-relaxed font-light">
            We prioritize the security of your data. We implement reasonable, industry-standard security measures, both technical and organizational, to protect your personal information from unauthorized access, disclosure, or destruction. However, please be aware that no security system is completely infallible.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-100">4. Third-Party Services</h2>
          <p className="text-slate-400 leading-relaxed font-light">
            We do not sell your data. We may occasionally share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-100">5. Contact Us</h2>
          <p className="text-slate-400 leading-relaxed font-light">
            If you have any questions or concerns regarding this Privacy Policy or our data practices, please reach out to us via our contact page. We are committed to transparency and will address your inquiries promptly.
          </p>
        </section>

      </div>
    </main>
  );
}
