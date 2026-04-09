"use client";
import { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <main className="min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative overflow-hidden flex flex-col items-center">
      {/* Background Theme Accents */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 z-0"></div>

      <div className="relative z-10 w-full mb-12 text-center animate-fade-up">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">
            Get in{" "}
          </span>
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-orange-400 blur-2xl opacity-20"></span>
            <span className="relative bg-gradient-to-r from-orange-300 via-orange-500 to-red-400 bg-clip-text text-transparent drop-shadow-sm">
              Touch
            </span>
          </span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto text-lg font-light leading-relaxed">
          Ready to scale? Drop us a message below and let's craft something
          exceptional together.
        </p>
      </div>

      <div
        className="relative z-10 w-full max-w-2xl glass-card rounded-3xl p-8 md:p-12 border border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] animate-fade-up"
        style={{ animationDelay: "200ms" }}
      >
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center text-center space-y-6 py-12 animate-fade-in">
            <div className="w-20 h-20 bg-[#0F7C7C]/20 border border-[#0F7C7C]/50 rounded-full flex items-center justify-center text-teal-400 mb-4 shadow-[0_0_30px_rgba(15,124,124,0.3)] mx-auto relative">
              <div className="absolute inset-0 bg-[#0F7C7C] rounded-full blur-xl opacity-20 animate-pulse"></div>
              <svg className="w-10 h-10 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-100">Message Sent!</h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md mx-auto">
              We have received your message and will contact you soon.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-6 px-8 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-slate-300 hover:text-white"
            >
              Send another message
            </button>
          </div>
        ) : (
        <form
          className="space-y-6"
          onSubmit={async (e) => {
            e.preventDefault();

            const formData = new FormData(e.target);

            const data = {
              name: formData.get("name"),
              email: formData.get("email"),
              message: formData.get("message"),
            };

            console.log("Submitting form...");
            console.log(data);

            const res = await fetch("/api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });

            console.log("Response:", res);

            if (res.ok) {
              setIsSubmitted(true);
              e.target.reset();
            }
          }}
        >
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Siddhartha Vardhan Somvanshi"
              required
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#0F7C7C] focus:ring-1 focus:ring-[#0F7C7C] transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="siddhartha@example.com"
              required
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#0F7C7C] focus:ring-1 focus:ring-[#0F7C7C] transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="How can we help you?"
              required
              rows="5"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#0F7C7C] focus:ring-1 focus:ring-[#0F7C7C] transition-all duration-300 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-4 px-6 border border-transparent text-base font-semibold rounded-xl text-white bg-[#0F7C7C] hover:bg-[#0c6b6b] transition-all duration-300 shadow-[0_0_20px_rgba(15,124,124,0.4)] hover:shadow-[0_0_30px_rgba(15,124,124,0.6)] overflow-hidden"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <span className="relative">Send Message</span>
          </button>
        </form>
        )}
      </div>
    </main>
  );
}
