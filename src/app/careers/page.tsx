import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, DollarSign } from "lucide-react";
import prisma from "@/lib/db";

export const revalidate = 0;

export default async function Careers({
  searchParams,
}: {
  searchParams: Promise<{ dept?: string }>;
}) {
  // Await the searchParams promise as required by Next.js 15
  const resolvedSearchParams = await searchParams;
  const selectedDept = resolvedSearchParams.dept || "";

  // Fetch published jobs
  const jobs = await prisma.job.findMany({
    where: {
      status: "PUBLISHED",
      ...(selectedDept ? { department: selectedDept } : {}),
    },
    orderBy: { createdAt: "desc" },
  });

  // Fetch all departments to construct filters
  const allJobs = await prisma.job.findMany({
    where: { status: "PUBLISHED" },
    select: { department: true },
  });

  const departments = Array.from(new Set(allJobs.map((j) => j.department)));

  const benefits = [
    { title: "Hybrid & Flexible Hours", desc: "Work from home or join our collaborative hub in Madhapur with flexible timing." },
    { title: "Health & Wellness", desc: "Comprehensive health insurance policy covering you and your immediate family." },
    { title: "Growth & Learning", desc: "Dedicated annual budget for certified exams, online courses, and technical training." },
    { title: "Performance Bonuses", desc: "Compelling salary structures with annual performance-linked rewards." },
  ];

  return (
    <div className="w-full bg-white text-zinc-900 overflow-hidden min-h-screen">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center grid-bg fade-in-up active">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full animate-fade-in">
          Join Our Team
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-950 tracking-tight mt-4 max-w-3xl mx-auto leading-tight">
          Open Opportunities
        </h1>
        <p className="text-zinc-650 text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed font-medium">
          Be a part of a fast-growing, innovative software company building enterprise-grade applications.
        </p>
      </section>

      {/* Benefits / Why NYB */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        <h2 className="text-3xl font-extrabold text-zinc-950 tracking-tight text-center fade-in-up">Why Work at NYB Infotech?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((ben, idx) => (
            <div
              key={idx}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-zinc-200 bg-white/70 backdrop-blur-md space-y-3 transition-all duration-300 hover:shadow-sm scale-in"
            >
              <h4 className="text-lg font-bold text-zinc-950 tracking-tight">{ben.title}</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">{ben.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Jobs Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 mb-16 space-y-12">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 border-b border-zinc-200 pb-6 scale-in">
          <Link
            href="/careers"
            className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
              !selectedDept
                ? "bg-indigo-600 border-indigo-600 text-white shadow-sm"
                : "border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50 bg-white"
            }`}
          >
            All Departments
          </Link>
          {departments.map((dept) => (
            <Link
              key={dept}
              href={`/careers?dept=${encodeURIComponent(dept)}`}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                selectedDept === dept
                  ? "bg-indigo-600 border-indigo-600 text-white shadow-sm"
                  : "border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50 bg-white"
              }`}
            >
              {dept}
            </Link>
          ))}
        </div>

        {/* Listings */}
        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {jobs.map((job, idx) => (
              <div
                key={job.id}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className="glass-card glass-card-hover rounded-3xl p-6 md:p-8 border border-zinc-200 bg-white/70 backdrop-blur-md flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-all duration-300 hover:shadow-md hover:border-zinc-300 scale-in"
              >
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
                  <h3 className="text-2xl font-extrabold text-zinc-950 tracking-tight">{job.title}</h3>
                  {job.salary && (
                    <div className="text-xs text-zinc-600 flex items-center gap-1 font-medium">
                      <DollarSign className="w-3.5 h-3.5 text-zinc-400" /> {job.salary}
                    </div>
                  )}
                </div>
                <Link
                  href={`/careers/${job.id}`}
                  className="px-6 py-3 rounded-full bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-500 transition-colors flex items-center gap-2 group shrink-0 shadow-sm"
                >
                  View Details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-zinc-500 border border-dashed border-zinc-200 rounded-3xl bg-zinc-50/50 scale-in">
            No job opportunities currently open in this category. Check back soon!
          </div>
        )}
      </section>
    </div>
  );
}
