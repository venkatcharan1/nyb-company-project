import Link from "next/link";
import { ArrowRight, Cpu, Shield, Layers, Activity, Database, ChevronRight, Landmark, Laptop } from "lucide-react";
import prisma from "@/lib/db";

export const revalidate = 0;

export default async function Home() {
  const latestBlogs = await prisma.blogPost.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
    take: 3,
  });

  const stats = [
    { value: "87", label: "Satisfied Clients" },
    { value: "150", label: "Projects Completed" },
    { value: "28", label: "Accolades Earned" },
    { value: "56K+", label: "Lines of Code" },
  ];

  const services = [
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      description: "AI with its cognitive and generative capabilities, possesses the remarkable ability to revolutionize every facet of an organization – customer service, operations, research, sales & marketing, finance, human resources.",
      color: "bg-sky-50 border-sky-100 text-sky-600",
    },
    {
      icon: Database,
      title: "Data and Analytics",
      description: "Data is the core to every business. Data modernization, Data Analytics, AI etc. are fueling efforts to get more value from data for smarter and data driven decision making across Industries.",
      color: "bg-blue-50 border-blue-100 text-blue-600",
    },
    {
      icon: Laptop,
      title: "Digital Services",
      description: "As the next era of Digital unfolds, Consumer expectations are evolving at an unprecedented pace, creating more demand than ever before for powering meaningful Digital experiences and increasing Consumer delight.",
      color: "bg-indigo-50 border-indigo-100 text-indigo-600",
    },
    {
      icon: Activity,
      title: "Digital Process Automation",
      description: "The Digital Process Automation Market size is expected to reach USD 21.41 billion by 2028. It is projected to grow at a CAGR of 11.60% during the forecast period (2023-2028). With AI breaking barriers of physical and digital world.",
      color: "bg-pink-50 border-pink-100 text-pink-600",
    },
    {
      icon: Layers,
      title: "Salesforce Ecosystem",
      description: "Businesses invest in digital transformation for many reasons, from streamlining processes and generating efficiencies, to futureproofing your organization and optimizing growth. But without the right support.",
      color: "bg-rose-50 border-rose-100 text-rose-600",
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "In the current interconnected environment, CyberSecurity plays an important role in not only keeping the environment secure but also enabling business strategies and supporting growth.",
      color: "bg-emerald-50 border-emerald-100 text-emerald-600",
    },
    {
      icon: Landmark,
      title: "Mortgage Services",
      description: "Navayuva Bharat Infotech offers advanced Mortgage Services that streamline processes, improve efficiency, and enhance customer experience. Our tech-driven solutions empower lenders, brokers, and borrowers to manage the mortgage lifecycle.",
      color: "bg-amber-50 border-amber-100 text-amber-600",
    },
  ];

  const clients = [
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
  ];  return (
    <div className="w-full overflow-hidden bg-white text-zinc-900 animate-fade-in">
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-16 pb-24 text-center grid-bg overflow-hidden fade-in-up active">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-100 bg-indigo-50 text-indigo-600 text-xs font-semibold mb-8 animate-pulse">
          WELCOME TO NAVAYUVABHARAT INFOTECH
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-zinc-950 max-w-4xl mx-auto">
          Where It Meets <span className="gradient-text animate-pulse">Ingenuity</span>
        </h1>
        <p className="text-zinc-650 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          “where technology meets ingenuity” describes the process of inventing new things or solving problems through a combination of human ideas and the tools we’ve built.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center scale-in">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-md hover:shadow-lg text-sm hover:scale-[1.02]"
          >
            How can we help you?
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-zinc-200 hover:border-zinc-300 text-zinc-700 hover:text-zinc-950 font-bold transition-all text-sm bg-zinc-50 hover:scale-[1.02]"
          >
            Explore Services
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-zinc-50 border-y border-zinc-100 py-16 w-full overflow-hidden fade-in-up">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1 scale-in">
              <div className="text-4xl md:text-5xl font-black text-indigo-600 tracking-tight">{stat.value}</div>
              <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Looping Client Logos Marquee */}
      <section className="w-full py-12 border-b border-zinc-200 bg-zinc-50/20 overflow-hidden relative scale-in">
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

      {/* Services Grid (Bento style) */}
      <section className="max-w-7xl mx-auto px-6 py-24 w-full overflow-hidden">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 fade-in-up">
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-950 tracking-tight">Our Core Services</h2>
          <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
            Professional software engineering, CRM integration, security systems, and digital automation platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className="glass-card glass-card-hover rounded-2xl p-6 md:p-8 border border-zinc-200 flex flex-col justify-between text-left scale-in"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center p-2.5 border ${service.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950">{service.title}</h3>
                  <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="pt-6 mt-4 border-t border-zinc-100">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-500 group"
                  >
                    Learn More <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="bg-zinc-50 border-t border-zinc-200/60 py-24 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-950 tracking-tight">Our Execution Process</h2>
            <p className="text-zinc-500 text-sm md:text-base">
              Six systematic execution workflows built to ensure top-tier delivery standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Discover", desc: "Identify, research and understand the initial problem. Meaning can be found in the continuous process of learning and expanding your knowledge." },
              { num: "02", title: "Define", desc: "Limit and define a clear problem to be solved. It can also mean to describe the essential qualities or characteristics of something." },
              { num: "03", title: "Design", desc: "Our design strategies are attractive and user-friendly to capture the attention of the audience." },
              { num: "04", title: "Develop", desc: "We transform your ideas into reality using the latest software technologies. It can apply to anything that gradually progresses to a more mature, complex system." },
              { num: "05", title: "Deploy", desc: "GoLive, Handover to business and close down the project. Deploy means to strategically position or utilize something for a specific purpose." },
              { num: "06", title: "Deliver", desc: "Test and evaluate, ready the concept for production and launch. By delivering meaningful work, they can create a fulfilling environment for their employees." },
            ].map((step, idx) => (
              <div
                key={idx}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between text-left h-[220px] scale-in"
              >
                <div className="flex justify-between items-start">
                  <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest">{step.num}.</span>
                  <span className="text-[10px] text-zinc-400 uppercase font-semibold">STAGE</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-zinc-950">{step.title}</h3>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs / Announcements */}
      {latestBlogs.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-200 w-full overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 fade-in-up">
            <div className="space-y-4 text-left">
              <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-950 tracking-tight">Latest Announcements</h2>
              <p className="text-zinc-500 text-sm">Stay updated with our research, milestones, and technological innovations.</p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-zinc-200 hover:border-zinc-300 text-zinc-700 hover:text-zinc-950 text-xs font-semibold bg-zinc-50 transition-all shrink-0 hover:scale-[1.02]"
            >
              View All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map((post, idx) => (
              <article
                key={post.id}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col h-full border border-zinc-200 text-left scale-in"
              >
                {post.coverImage && (
                  <div className="relative w-full h-[200px] overflow-hidden border-b border-zinc-100">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow gap-3">
                  <span className="text-[10px] font-bold uppercase text-indigo-600 tracking-wider">
                    {post.tags.split(",")[0]}
                  </span>
                  <h3 className="text-lg font-bold text-zinc-950 leading-snug line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-indigo-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-zinc-500 text-xs line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                    <span>{post.readingTime} Min Read</span>
                    <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ""}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Call-to-Action */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center w-full overflow-hidden scale-in">
        <div className="glass-card rounded-3xl p-12 md:p-20 border border-zinc-200 bg-zinc-50/50 space-y-6">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-950 tracking-tight">
            Would you like to start a project with us?
          </h2>
          <div className="flex justify-center pt-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-md hover:shadow-lg text-sm hover:scale-[1.02]"
            >
              Contact Us
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
