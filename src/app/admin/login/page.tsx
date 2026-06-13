"use client";

import { useActionState, startTransition, useEffect } from "react";
import { adminLogin } from "../actions";
import { useRouter } from "next/navigation";
import { Lock, User, Loader, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AdminLogin() {
  const [state, formAction, isPending] = useActionState(adminLogin, null);
  const router = useRouter();

  useEffect(() => {
    if (state?.success && state?.redirect) {
      router.push(state.redirect);
    }
  }, [state, router]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-md space-y-8 text-center relative z-10">
        <Link href="/" className="inline-flex items-center gap-3 justify-center group">
          <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Navayuva Bharati Infotech Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-extrabold tracking-wider text-xl text-zinc-950">
            NAVAYUVA BHARATI INFOTECH
          </span>
        </Link>

        <div className="glass-card rounded-3xl p-8 border border-zinc-200 bg-white/70 backdrop-blur-md space-y-6 shadow-sm">
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-zinc-950 tracking-tight">Admin Console</h2>
            <p className="text-xs text-zinc-600 font-medium">Sign in to manage jobs, blogs, and applications.</p>
          </div>

          {state?.error && (
            <div className="p-4 rounded-2xl border border-rose-200 bg-rose-50 flex gap-3 items-center text-xs text-rose-700 font-semibold text-left">
              <AlertTriangle className="w-4 h-4 shrink-0 text-rose-500" />
              <span>{state.error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Username</label>
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  required
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all"
                  placeholder="admin"
                />
                <User className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-400" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Password</label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all"
                  placeholder="••••••••"
                />
                <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-400" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-sm"
            >
              {isPending ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" /> Authenticating...
                </>
              ) : (
                <>
                  Sign In <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

