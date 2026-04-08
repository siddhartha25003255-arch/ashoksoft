"use client";

import { useEffect, useState } from "react";

export default function Admin() {
  const [data, setData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  // Fetch data after login
  useEffect(() => {
    if (loggedIn) {
      fetch("/api/contact")
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [loggedIn]);

  // LOGIN SCREEN
  if (!loggedIn) {
    return (
      <main className="min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative overflow-hidden flex flex-col items-center">
        {/* Background Theme Accents */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob z-0"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 z-0"></div>

        <div className="relative z-10 w-full mb-12 text-center animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">
              Admin{" "}
            </span>
            <span className="relative inline-block">
              <span className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-orange-400 blur-2xl opacity-20"></span>
              <span className="relative bg-gradient-to-r from-orange-300 via-orange-500 to-red-400 bg-clip-text text-transparent drop-shadow-sm">
                Login
              </span>
            </span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg font-light leading-relaxed">
            Please authenticate to access the dashboard.
          </p>
        </div>

        <div
          className="relative z-10 w-full max-w-md glass-card rounded-3xl p-8 md:p-12 border border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              if (password === "cewhod") {
                setLoggedIn(true);
              } else {
                alert("Wrong password");
              }
            }}
          >
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#0F7C7C] focus:ring-1 focus:ring-[#0F7C7C] transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              className="group relative w-full flex justify-center py-4 px-6 border border-transparent text-base font-semibold rounded-xl text-white bg-[#0F7C7C] hover:bg-[#0c6b6b] transition-all duration-300 shadow-[0_0_20px_rgba(15,124,124,0.4)] hover:shadow-[0_0_30px_rgba(15,124,124,0.6)] overflow-hidden"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative">Login</span>
            </button>
          </form>
        </div>
      </main>
    );
  }

  // DASHBOARD
  return (
    <main className="min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative overflow-hidden flex flex-col">
      {/* Background Theme Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 z-0"></div>

      <div className="relative z-10 w-full mb-12 text-center animate-fade-up">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">
            Admin{" "}
          </span>
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-[#0F7C7C] to-teal-400 blur-2xl opacity-20"></span>
            <span className="relative bg-gradient-to-r from-teal-300 via-[#0F7C7C] to-teal-800 bg-clip-text text-transparent drop-shadow-sm">
              Dashboard
            </span>
          </span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto text-lg font-light leading-relaxed">
          Manage your incoming messages and inquiries.
        </p>
      </div>

      <div
        className="relative z-10 w-full max-w-5xl mx-auto space-y-6 animate-fade-up"
        style={{ animationDelay: "200ms" }}
      >
        {data.length === 0 ? (
          <div className="text-center text-slate-400 py-10 bg-white/5 border border-white/10 rounded-3xl">
            No messages found.
          </div>
        ) : (
          data.map((item) => (
            <div
              key={item._id}
              className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl flex justify-between items-start lg:items-center flex-col lg:flex-row gap-6 hover:bg-white/10 transition-all duration-300 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]"
            >
              <div className="space-y-4 flex-1 w-full">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <div className="text-lg font-semibold text-white">
                    {item.name}
                  </div>
                  <div className="text-sm font-medium text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full w-fit">
                    {item.email}
                  </div>
                </div>
                <div className="text-slate-300 font-light leading-relaxed whitespace-pre-wrap bg-black/20 p-4 rounded-xl border border-white/5">
                  {item.message}
                </div>
              </div>

              <button
                onClick={async () => {
                  await fetch(`/api/contact/${item._id}`, {
                    method: "DELETE",
                  });

                  // update UI
                  setData(data.filter((d) => d._id !== item._id));
                }}
                className="group relative flex justify-center py-3 px-6 border border-red-500/30 text-sm font-medium rounded-xl text-white bg-red-500/10 hover:bg-red-500 hover:border-red-500 transition-all duration-300 w-full lg:w-auto"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
