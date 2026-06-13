import { Cpu, Shield, Layers, Activity, Database, Monitor, Landmark, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const serviceList = [
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      description: "AI with its cognitive and generative capabilities, possesses the remarkable ability to revolutionize every facet of an organization – customer service, operations, research, sales & marketing, finance, human resources.",
      bullets: [
        "Cognitive chatbots & support modules",
        "Generative AI custom workflow logic",
        "NLP document search & categorization",
        "Context-aware predictive systems",
      ],
      color: "from-sky-500 to-blue-600",
      badge: "Cognitive & GenAI"
    },
    {
      icon: Database,
      title: "Data and Analytics",
      description: "Data is the core to every business. Data modernization, Data Analytics, AI etc. are fueling efforts to get more value from data for smarter and data driven decision making across Industries",
      bullets: [
        "Data pipeline modernization",
        "Real-time business intelligence",
        "Structured enterprise warehouse schemas",
        "Scalable analysis modeling & reporting",
      ],
      color: "from-blue-500 to-indigo-600",
      badge: "Big Data"
    },
    {
      icon: Monitor,
      title: "Digital Services",
      description: "As the next era of Digital unfolds, Consumer expectations are evolving at an unprecedented pace, creating more demand than ever before for powering meaningful Digital experiences and increasing Consumer delight.",
      bullets: [
        "Premium speed web applications",
        "Intuitive customer experience interfaces",
        "Responsive cross-platform portal sites",
        "SaaS product frontend systems",
      ],
      color: "from-indigo-500 to-purple-600",
      badge: "Experiences"
    },
    {
      icon: Activity,
      title: "Digital Process Automation",
      description: "The Digital Process Automation Market size is expected to reach USD 21.41 billion by 2028. It is projected to grow at a CAGR of 11.60% during the forecast period (2023-2028). With AI breaking barriers of physical and digital world, there has been tectonic shift in Digital process automation use cases and applications",
      bullets: [
        "Robotic Process Automation (RPA)",
        "Zero-redundancy business automations",
        "Third-party system API gateways",
        "Advanced orchestration & rules engines",
      ],
      color: "from-purple-500 to-pink-600",
      badge: "Automation"
    },
    {
      icon: Layers,
      title: "Salesforce Ecosystem",
      description: "Businesses invest in digital transformation for many reasons, from streamlining processes and generating efficiencies, to futureproofing your organization and optimizing growth. But without the right support, it can be difficult to find the right solutions to achieve your strategic goals, or to realize the true value of your investments.",
      bullets: [
        "Apex and Lightning Web Components (LWC)",
        "Sales, Service, and Financial Cloud layouts",
        "Custom integration with external backend tools",
        "System maintenance & CRM architecture audits",
      ],
      color: "from-pink-500 to-rose-600",
      badge: "Salesforce CRM"
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "In the current interconnected environment, CyberSecurity plays an important role in not only keeping the environment secure but also enabling business strategies and supporting growth.",
      bullets: [
        "Vulnerability scanning & penetration checks",
        "Zero-trust authentication setups",
        "Military-grade encryption databases",
        "IAM segregation & active compliance audits",
      ],
      color: "from-rose-500 to-orange-600",
      badge: "Security & Trust"
    },
    {
      icon: Landmark,
      title: "Mortgage Services",
      description: "Navayuva Bharat Infotech offers advanced Mortgage Services that streamline processes, improve efficiency, and enhance customer experience. Our tech-driven solutions empower lenders, brokers, and borrowers to manage the mortgage lifecycle with speed, accuracy, and confidence.",
      bullets: [
        "Digital loan origination workflows",
        "Automated compliance documentation review",
        "Real-time status updates & client portals",
        "Instant document storage and verification",
      ],
      color: "from-emerald-500 to-teal-600",
      badge: "Fintech & Loans"
    },
  ];  const clients = [
    "Zepto",
    "Jobdunia",
    "Wroots",
    "Smile India Trust",
    "Aduri Group",
    "Techno Hire",
    "Bigbasket",
    "Silicon Global Consulting",
    "Technotoise",
    "Firstsource"
  ];

  return (
    <div className="w-full bg-white text-zinc-900 overflow-hidden min-h-screen">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[800px] -left-1/4 w-[600px] h-[600px] bg-sky-50/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center grid-bg fade-in-up active">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full animate-fade-in">
          Capabilities
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-950 tracking-tight mt-4 max-w-3xl mx-auto leading-tight">
          Enterprise Services & Solutions
        </h1>
        <p className="text-zinc-650 text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed font-medium">
          Robust consulting, secure networks, custom CRM portals, and scalable automations driving enterprise efficiency.
        </p>
      </section>

      {/* Client Logos Marquee */}
      <section className="w-full py-12 border-y border-zinc-200/80 bg-zinc-50/40 overflow-hidden relative scale-in">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Trusted by Enterprise Leaders</h2>
        </div>
        <div className="relative w-full flex overflow-x-hidden">
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee gap-8 items-center shrink-0">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-8 py-4 bg-white border border-zinc-200/60 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center justify-center select-none hover:border-indigo-300 hover:shadow-md transition-all duration-300 min-h-[60px]"
              >
                <ClientLogo name={client} />
              </div>
            ))}
          </div>
          
          <div className="flex animate-marquee gap-8 items-center shrink-0" aria-hidden="true">
            {clients.map((client, idx) => (
              <div
                key={`dup-${idx}`}
                className="flex-shrink-0 px-8 py-4 bg-white border border-zinc-200/60 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center justify-center select-none hover:border-indigo-300 hover:shadow-md transition-all duration-300 min-h-[60px]"
              >
                <ClientLogo name={client} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 gap-8">
          {serviceList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                style={{ transitionDelay: `${idx * 150}ms` }}
                className="glass-card glass-card-hover rounded-3xl p-8 md:p-12 border border-zinc-200/80 bg-white/70 backdrop-blur-md flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-zinc-350 scale-in"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-sky-500" />
                
                {/* Icon section */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center p-3.5 shrink-0 shadow-md`}>
                  <Icon className="text-white w-7 h-7" />
                </div>

                {/* Content section */}
                <div className="space-y-6 flex-grow text-left">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-950 tracking-tight">
                        {service.title}
                      </h3>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider bg-zinc-100 text-zinc-600 px-2.5 py-1 rounded-md">
                        {service.badge}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-650 leading-relaxed max-w-4xl whitespace-pre-line font-medium">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-zinc-100">
                    {service.bullets.map((bullet, bidx) => (
                      <div key={bidx} className="flex gap-3 items-center text-xs text-zinc-700 font-bold">
                        <CheckCircle2 className="w-4.5 h-4.5 text-indigo-600 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 mb-16 text-center fade-in-up">
        <div className="glass-card rounded-3xl p-12 border border-zinc-200 bg-zinc-50/50 space-y-6 max-w-4xl mx-auto scale-in">
          <h2 className="text-3xl font-extrabold text-zinc-950">
            Ready to upgrade your enterprise systems?
          </h2>
          <p className="text-zinc-600 text-sm max-w-md mx-auto font-medium">
            Get in touch with our certified engineers today and find out how we can customize solutions for your business.
          </p>
          <div className="flex justify-center pt-2">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-md text-sm hover:scale-[1.02]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ClientLogo({ name }: { name: string }) {
  if (name.toLowerCase() === "zepto") {
    return (
      <span className="flex items-center gap-1 select-none">
        <span className="font-extrabold text-[22px] tracking-tighter text-[#E12A61] lowercase font-sans">zepto</span>
      </span>
    );
  }
  if (name.toLowerCase() === "jobdunia") {
    return (
      <span className="flex items-center gap-1 select-none">
        <span className="font-black text-lg tracking-tight text-[#006EA6] uppercase font-sans">JOB</span>
        <span className="font-black text-lg tracking-tight text-[#00A14B] uppercase font-sans">DUNIA</span>
        <span className="text-[9px] font-bold text-zinc-400 self-end mb-0.5 leading-none font-sans">.com</span>
      </span>
    );
  }
  if (name.toLowerCase() === "wroots global" || name.toLowerCase() === "wroots") {
    return (
      <span className="flex flex-col items-center leading-none select-none">
        <svg className="w-8 h-6 text-[#1A4B9F]" viewBox="0 0 24 20" fill="currentColor">
          <path d="M4 18a4 4 0 118 0M12 18a4 4 0 118 0M12 8a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
        <span className="font-extrabold text-[10px] tracking-wider text-[#1A4B9F] uppercase mt-0.5 font-sans">WROOTS</span>
      </span>
    );
  }
  if (name.toLowerCase() === "smile india trust") {
    return (
      <span className="flex flex-col items-center leading-none select-none">
        <span className="font-serif italic font-black text-base text-[#6C5B7B] tracking-tight">Smile</span>
        <span className="font-extrabold text-[9px] tracking-widest text-[#2B2E4A] uppercase -mt-0.5 font-sans">INDIA TRUST</span>
      </span>
    );
  }
  if (name.toLowerCase() === "aduri group") {
    return (
      <span className="flex items-center gap-1.5 select-none">
        <svg className="w-5 h-5 text-[#8B0000]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 22 22 2 22" />
          <polygon points="12 8 18 20 6 20" fill="white" />
          <polygon points="12 12 15 19 9 19" />
        </svg>
        <span className="font-extrabold text-xs tracking-widest text-[#8B0000] uppercase font-sans">ADURI GROUP</span>
      </span>
    );
  }
  if (name.toLowerCase() === "techno hire") {
    return (
      <span className="flex flex-col items-center justify-center border border-zinc-200 px-3 py-1 rounded select-none">
        <span className="font-black text-[11px] tracking-wider text-[#0F2042] uppercase font-sans">TECHNO HIRE</span>
      </span>
    );
  }
  if (name.toLowerCase() === "bigbasket") {
    return (
      <span className="flex flex-col items-start leading-none select-none">
        <span className="font-black text-[#5C8D27] text-lg tracking-tighter font-sans">
          big<span className="text-[#D32F2F]">basket</span>
        </span>
        <span className="text-[7px] text-[#0D47A1] font-bold tracking-wider uppercase mt-0.5 font-sans">A TATA Enterprise</span>
      </span>
    );
  }
  if (name.toLowerCase() === "silicon global consulting") {
    return (
      <span className="flex items-center gap-1.5 select-none">
        <svg className="w-5 h-5 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="font-bold text-[10px] tracking-tight text-zinc-700 uppercase leading-none text-left font-sans">
          Silicon Global<br />Consulting
        </span>
      </span>
    );
  }
  if (name.toLowerCase() === "technotoise") {
    return (
      <span className="flex items-center gap-1.5 select-none">
        <div className="grid grid-cols-2 gap-0.5 w-4 h-4 shrink-0">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
        </div>
        <span className="font-black text-[13px] tracking-tight text-blue-600 font-sans">Technotoise</span>
      </span>
    );
  }
  if (name.toLowerCase() === "firstsource") {
    return (
      <span className="flex items-center gap-1 select-none">
        <span className="font-black text-[16px] tracking-tighter text-[#0C2340] lowercase font-sans">firstsource</span>
        <svg className="w-4 h-4 text-[#FF6B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </span>
    );
  }
  return <span className="font-bold text-zinc-500 font-sans">{name}</span>;
}

