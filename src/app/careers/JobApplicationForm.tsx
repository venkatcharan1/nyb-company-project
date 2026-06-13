"use client";

import { useActionState, startTransition } from "react";
import { submitApplication } from "./actions";
import { Send, Loader, CheckCircle2, AlertTriangle } from "lucide-react";

export default function JobApplicationForm({ jobId }: { jobId: string }) {
  const [state, formAction, isPending] = useActionState(submitApplication, null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };

  if (state?.success) {
    return (
      <div className="glass-card rounded-3xl p-8 border border-emerald-200 bg-emerald-50/50 text-center space-y-4 shadow-sm">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
        <h3 className="text-xl font-extrabold text-zinc-950">Application Submitted</h3>
        <p className="text-xs text-zinc-650 leading-relaxed max-w-sm mx-auto font-medium">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-3xl p-8 border border-zinc-200 bg-white/70 backdrop-blur-md space-y-6 shadow-sm">
      <h3 className="text-xl font-extrabold text-zinc-950 tracking-tight text-left">Apply for this Position</h3>
      
      {state?.error && (
        <div className="p-4 rounded-2xl border border-rose-200 bg-rose-50 flex gap-3 items-center text-xs text-rose-700 font-semibold">
          <AlertTriangle className="w-4 h-4 shrink-0 text-rose-500" />
          <span>{state.error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <input type="hidden" name="jobId" value={jobId} />

        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all"
              placeholder="Sarah Connor"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Email Address *</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all"
              placeholder="sarah@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all"
              placeholder="+91 98765 43210"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Experience (Years) *</label>
            <input
              type="number"
              name="experience"
              required
              min="0"
              className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all"
              placeholder="3"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Portfolio Link</label>
          <input
            type="url"
            name="portfolioLink"
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all"
            placeholder="https://myportfolio.com"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">LinkedIn Profile</label>
          <input
            type="url"
            name="linkedIn"
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all"
            placeholder="https://linkedin.com/in/username"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Upload Resume (PDF) *</label>
          <input
            type="file"
            name="resume"
            required
            accept=".pdf"
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-650 file:mr-4 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100 focus:outline-none transition-all cursor-pointer"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Cover Letter / Message</label>
          <textarea
            name="message"
            rows={4}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all resize-none"
            placeholder="Tell us why you are a good fit for this role..."
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-sm"
        >
          {isPending ? (
            <>
              <Loader className="w-5 h-5 animate-spin" /> Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" /> Submit Application
            </>
          )}
        </button>
      </form>
    </div>
  );
}
