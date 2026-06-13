import { Monitor, Server, Cloud, Layers, ShieldCheck } from "lucide-react";

export default function Technologies() {
  const categories = [
    {
      title: "Frontend Engineering",
      icon: Monitor,
      desc: "Delivering fast, visually stunning, and highly accessible user interfaces using cutting-edge technologies.",
      techs: ["React.js", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP Animations", "HTML5 & Vanilla CSS"],
      borderColor: "border-sky-100",
      accentColor: "text-sky-600 bg-sky-50"
    },
    {
      title: "Backend & Databases",
      icon: Server,
      desc: "Architecting secure, modular APIs, microservices, and relational schema designs.",
      techs: ["Node.js (Express)", "Python (FastAPI / Django)", "Go", "Prisma / Drizzle ORMs", "PostgreSQL", "SQLite", "RESTful & GraphQL APIs"],
      borderColor: "border-blue-100",
      accentColor: "text-blue-600 bg-blue-50"
    },
    {
      title: "Salesforce CRM Systems",
      icon: Layers,
      desc: "Building deep business automations and cloud CRM solutions natively on the Salesforce platform.",
      techs: ["Apex Programming", "Lightning Web Components (LWC)", "Sales & Service Cloud", "Financial Cloud", "Salesforce APIs", "SOQL / SOSL"],
      borderColor: "border-indigo-100",
      accentColor: "text-indigo-600 bg-indigo-50"
    },
    {
      title: "Cloud & Devops",
      icon: Cloud,
      desc: "Ensuring zero downtime, automated scaling, and absolute security for enterprise infrastructures.",
      techs: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform", "Docker Containers", "CI/CD Pipelines (GitHub Actions)", "Linux Server Administration"],
      borderColor: "border-purple-100",
      accentColor: "text-purple-600 bg-purple-50"
    },
  ];

  return (
    <div className="relative w-full bg-white text-zinc-900 overflow-hidden min-h-screen">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-50/40 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[600px] right-1/4 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center grid-bg fade-in-up active">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full animate-fade-in">
          Our Stack
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-950 tracking-tight mt-4 max-w-3xl mx-auto leading-tight">
          Technologies We Trust
        </h1>
        <p className="text-zinc-650 text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed font-medium">
          SaaS and enterprise-ready framework integrations built for speed, scalability, and absolute security.
        </p>
      </section>

      {/* Technologies Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div 
                key={idx} 
                style={{ transitionDelay: `${idx * 150}ms` }}
                className={`glass-card glass-card-hover rounded-3xl p-8 border ${category.borderColor} bg-white/70 backdrop-blur-md space-y-6 relative overflow-hidden transition-all duration-300 hover:shadow-md hover:border-zinc-300 scale-in`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-zinc-50/50 to-transparent pointer-events-none" />
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center p-2.5 ${category.accentColor} border border-current/10`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-zinc-950 tracking-tight">{category.title}</h3>
                </div>
                <p className="text-xs text-zinc-650 font-medium leading-relaxed">{category.desc}</p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-100">
                  {category.techs.map((tech, tidx) => (
                    <span
                      key={tidx}
                      className="px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 text-[10px] text-zinc-700 font-bold tracking-wider uppercase hover:border-indigo-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust & Quality Banner */}
      <section className="max-w-7xl mx-auto px-6 py-12 mb-16 scale-in">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-zinc-200 bg-zinc-50/50 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center p-3 shrink-0 shadow-sm">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-extrabold text-zinc-950 tracking-tight">Security-First Quality Standard</h4>
            <p className="text-xs text-zinc-650 leading-relaxed max-w-4xl font-medium">
              Every technology is selected and applied based on standard security guidelines. We use static analyzer tools, security scanning dependencies, and end-to-end cryptographic integrations to secure your code before it reaches production.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
