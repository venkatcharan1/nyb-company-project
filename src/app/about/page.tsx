import { Target, Shield, Users, Landmark, Cpu, Database, Laptop, Layers, Activity } from "lucide-react";
import Link from "next/link";

export default function About() {
  const stats = [
    { value: "87", label: "Satisfied Clients" },
    { value: "150", label: "Projects Completed" },
    { value: "28", label: "Accolades Earned" },
    { value: "56K+", label: "Lines of Code" },
  ];

  const processList = [
    { num: "01", title: "Discover", desc: "Identify, research and understand the initial problem. Meaning can be found in the continuous process of learning and expanding your knowledge." },
    { num: "02", title: "Define", desc: "limit and define a clear problem to be solved. it can also mean to describe the essential qualities or characteristics of something." },
    { num: "03", title: "Design", desc: "Our design strategies are attractive and user-friendly to capture the attention of the audience." },
    { num: "04", title: "Develop", desc: "We transform your ideas into reality using the latest software technologies. It can apply to anything that gradually progresses to a more mature, complex system." },
    { num: "05", title: "Deploy", desc: "GoLive, Handover to business and close down the project. Deploy means to strategically position or utilize something for a specific purpose." },
    { num: "06", title: "Deliver", desc: "Test and evaluate, ready the concept for production and launch. By delivering meaningful work, they can create a fulfilling environment for their employees." },
  ];

  const whyChooseUs = [
    { title: "Best Quality Designs", desc: "Good design is a concept defined by industrial designer Dieter Rams’s principles: It makes a product useful and understandable, is innovative, aesthetic, unobtrusive, honest, long-lasting." },
    { title: "24x7 Live Support", desc: "Assistance is provided as soon as your query arises, ensuring round-the-clock technical help." },
    { title: "Award Winning Support Team", desc: "A support department consisting of experienced professionals with high emotional intelligence and technical skills." },
    { title: "Experienced Professionals", desc: "An opportunity to apply years of engineering practice to solve complex, dedicated growth challenges." },
  ];

  return (
    <div className="w-full bg-white text-zinc-900 overflow-hidden">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center grid-bg">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full animate-fade-in">
          Company Overview
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-950 tracking-tight mt-4 fade-in-up active">
          About Us
        </h1>
      </section>

      {/* Intro Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
        <div className="space-y-6 fade-in-left">
          <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950">Who Are We</h2>
          <p className="text-sm text-zinc-650 leading-relaxed font-medium">
            An individual character and arise as a regarded programming arrangements supplier by building and keeping up durable relationships, conveying quality programming and by giving inventive business arrangements…
          </p>
        </div>
        <div className="space-y-6 fade-in-right">
          <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950">Our Mission</h2>
          <p className="text-sm text-zinc-650 leading-relaxed font-medium">
            To give inventive, high calibre and top tier IT Consulting & IT Solutions & Services to our clients, empowering them to accomplish their business objectives. Partners and accomplices while co-operating, and to maintain and grow our convention of “Greatness through Quality”.
          </p>
        </div>
      </section>

      {/* What We Do List */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-left space-y-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 fade-in-up">What We Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Artificial Intelligence",
            "Data and Analytics",
            "Digital Services",
            "Digital Process Automation",
            "Salesforce Ecosystem",
            "Cybersecurity Services",
          ].map((item, idx) => (
            <div
              key={idx}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className="glass-card glass-card-hover rounded-xl px-5 py-4 border border-zinc-200 flex items-center gap-3 scale-in"
            >
              <Check className="w-4 h-4 text-indigo-600 shrink-0" />
              <span className="text-xs font-bold text-zinc-800">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process list */}
      <section className="bg-zinc-50 border-y border-zinc-200/60 py-24 text-left">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 fade-in-up">Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processList.map((step, idx) => (
              <div
                key={idx}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-zinc-200 flex flex-col justify-between h-[220px] scale-in"
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

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-left space-y-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 text-center fade-in-up">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-zinc-200 space-y-2 scale-in"
            >
              <h4 className="text-lg font-bold text-zinc-950">{item.title}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Numbers Section */}
      <section className="bg-zinc-950 py-20 text-center text-white">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="fade-in-up">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">Some Numbers</h2>
            <h3 className="text-2xl font-bold tracking-tight">Our Company in Numbers</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className="space-y-1 scale-in"
              >
                <div className="text-4xl md:text-5xl font-black text-indigo-400 tracking-tight">{stat.value}</div>
                <div className="text-xs text-zinc-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Project CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="glass-card rounded-3xl p-12 border border-zinc-200 space-y-6 scale-in">
          <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950">
            Would you like to start a project with us?
          </h2>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-md text-sm hover:scale-[1.02]"
            >
              CONTACT us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Simple Helper Check Icon
function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
