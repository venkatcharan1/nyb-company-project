import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Briefcase, DollarSign, CheckCircle2 } from "lucide-react";
import prisma from "@/lib/db";
import JobApplicationForm from "../JobApplicationForm";

export const revalidate = 0;

export default async function JobDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const job = await prisma.job.findUnique({
    where: { id },
  });

  if (!job || job.status !== "PUBLISHED") {
    notFound();
  }

  // Parse JSON requirements and benefits
  const requirements: string[] = job.requirements ? JSON.parse(job.requirements) : [];
  const benefits: string[] = job.benefits ? JSON.parse(job.benefits) : [];

  return (
    <div className="relative w-full bg-white text-zinc-900 overflow-hidden min-h-screen">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-12 relative">
        {/* Back button */}
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-indigo-600 font-semibold transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" /> Back to Careers
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Job Details Content */}
          <div className="lg:col-span-2 space-y-8 text-left">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded">
                  {job.department}
                </span>
                <span className="text-xs text-zinc-500 flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" /> {job.location}
                </span>
                <span className="text-xs text-zinc-500 flex items-center gap-1 font-medium">
                  <Briefcase className="w-3.5 h-3.5 text-zinc-400" /> {job.type}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">{job.title}</h1>
              {job.salary && (
                <div className="text-sm text-zinc-600 flex items-center gap-1.5 font-medium">
                  <DollarSign className="w-4 h-4 text-zinc-400" /> {job.salary}
                </div>
              )}
            </div>

            <div className="border-t border-zinc-200 pt-8 space-y-8">
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-zinc-950">About the Role</h3>
                <p className="text-sm text-zinc-600 leading-relaxed whitespace-pre-line">{job.description}</p>
              </div>

              {requirements.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xl font-extrabold text-zinc-950">Requirements</h3>
                  <ul className="space-y-3">
                    {requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-650 leading-relaxed font-medium">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {benefits.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xl font-extrabold text-zinc-950">Benefits & Perks</h3>
                  <ul className="space-y-3">
                    {benefits.map((ben, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-650 leading-relaxed font-medium">
                        <CheckCircle2 className="w-5 h-5 text-sky-650 shrink-0 mt-0.5 text-sky-600" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <JobApplicationForm jobId={job.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
