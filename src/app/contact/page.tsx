"use client";

import { useActionState, startTransition } from "react";
import { submitContactForm } from "./actions";
import { Send, Loader, CheckCircle2, AlertTriangle, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div className="relative w-full bg-white text-zinc-900 overflow-hidden min-h-screen">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center grid-bg fade-in-up active">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full animate-fade-in">
          Get In Touch
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-950 tracking-tight mt-4 max-w-3xl mx-auto leading-tight">
          Contact Our Team
        </h1>
        <p className="text-zinc-650 text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed font-medium">
          Have a project in mind, need consultation, or want to discuss integrations? Send us a message!
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 mb-16 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Info Column */}
        <div className="lg:col-span-1 space-y-8 text-left fade-in-left">
          <div className="glass-card rounded-3xl p-6 border border-zinc-200 bg-white/70 backdrop-blur-md space-y-6 shadow-sm scale-in">
            <h3 className="text-xl font-extrabold text-zinc-950">Contact Info</h3>
            <div className="space-y-4 text-sm text-zinc-650">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span className="font-semibold leading-relaxed">Megrish Tower, Patrika Nagar, Madhapur, HITEC City, Hyderabad, Telangana 500081</span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-indigo-600 shrink-0" />
                <a href="mailto:info@nybinfotech.com" className="hover:text-indigo-600 transition-colors font-bold">info@nybinfotech.com</a>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-indigo-600 shrink-0" />
                <a href="tel:+914012345678" className="hover:text-indigo-600 transition-colors font-bold">+91 40 1234 5678</a>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 border border-zinc-200 bg-zinc-50/50 space-y-3 scale-in">
            <h4 className="text-sm font-extrabold text-zinc-950 tracking-tight">24x7 Global Support</h4>
            <p className="text-xs text-zinc-650 leading-relaxed font-semibold">
              We ensure constant uptime monitoring and rapid response engineering for all critical SLA clients.
            </p>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-2 fade-in-right">
          {state?.success ? (
            <div className="glass-card rounded-3xl p-8 md:p-16 border border-emerald-200 bg-emerald-50/50 text-center space-y-4 h-full flex flex-col justify-center items-center shadow-sm scale-in">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 animate-bounce" />
              <h3 className="text-2xl font-extrabold text-zinc-950">Message Received</h3>
              <p className="text-sm text-zinc-700 leading-relaxed max-w-md font-semibold">
                {state.message}
              </p>
            </div>
          ) : (
            <div className="glass-card rounded-3xl p-8 border border-zinc-200 bg-white/70 backdrop-blur-md space-y-6 shadow-sm scale-in">
              <h3 className="text-xl font-extrabold text-zinc-950 tracking-tight text-left">Send Us A Message</h3>
              
              {state?.error && (
                <div className="p-4 rounded-2xl border border-rose-200 bg-rose-50 flex gap-3 items-center text-xs text-rose-700 font-bold text-left animate-pulse">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-rose-500" />
                  <span>{state.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all font-semibold"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all font-semibold"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all font-semibold"
                    placeholder="Project Inquiry / Consultation"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all resize-none font-semibold"
                    placeholder="Describe your project, objectives, and timelines..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-sm hover:scale-[1.01]"
                >
                  {isPending ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
