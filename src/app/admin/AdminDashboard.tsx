"use client";

import { useState, useTransition } from "react";
import { adminLogout, createOrUpdateJob, deleteJob, createOrUpdateBlogPost, deleteBlogPost, updateApplicationStatus } from "./actions";
import { LogOut, LayoutDashboard, FileText, Briefcase, Users, MessageSquare, Plus, Trash2, Edit2, Loader, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

interface AdminDashboardProps {
  initialData: {
    jobs: any[];
    applications: any[];
    blogPosts: any[];
    contactMessages: any[];
  };
}

export default function AdminDashboard({ initialData }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "blogs" | "jobs" | "applicants" | "messages">("overview");
  const [editingJob, setEditingJob] = useState<any | null>(null);
  const [editingBlog, setEditingBlog] = useState<any | null>(null);
  const [isAddingJob, setIsAddingJob] = useState(false);
  const [isAddingBlog, setIsAddingBlog] = useState(false);

  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      await adminLogout();
    });
  };

  const handleJobDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this job?")) {
      startTransition(async () => {
        await deleteJob(id);
      });
    }
  };

  const handleBlogDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      startTransition(async () => {
        await deleteBlogPost(id);
      });
    }
  };

  const handleStatusChange = (id: string, status: string) => {
    startTransition(async () => {
      await updateApplicationStatus(id, status);
    });
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col md:flex-row">
      {/* Mobile Top Bar */}
      <header className="md:hidden flex items-center justify-between px-6 py-4 bg-white border-b border-zinc-200 shadow-sm shrink-0">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Logo" width={28} height={28} className="object-contain animate-fade-in" />
          <span className="font-extrabold tracking-wider text-xs text-zinc-950 uppercase">NYB Console</span>
        </div>
        <button
          onClick={handleLogout}
          disabled={isPending}
          className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg border border-transparent transition-all cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </header>

      {/* Mobile Horizontal Tabs */}
      <div className="md:hidden flex overflow-x-auto gap-1.5 p-3 bg-white border-b border-zinc-200 sticky top-0 z-30 shrink-0 select-none">
        {[
          { id: "overview", name: "Overview", icon: LayoutDashboard },
          { id: "blogs", name: "Blogs", icon: FileText },
          { id: "jobs", name: "Jobs", icon: Briefcase },
          { id: "applicants", name: "Applicants", icon: Users },
          { id: "messages", name: "Messages", icon: MessageSquare },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                setIsAddingJob(false);
                setEditingJob(null);
                setIsAddingBlog(false);
                setEditingBlog(null);
              }}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-extrabold whitespace-nowrap transition-all border shrink-0 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-indigo-50 border-indigo-100 text-indigo-650"
                  : "text-zinc-650 bg-zinc-50 border-zinc-200/60 hover:text-zinc-950"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {tab.name}
            </button>
          );
        })}
      </div>

      {/* Sidebar (Desktop only) */}
      <aside className="hidden md:flex w-64 border-r border-zinc-200 bg-white p-6 flex-col justify-between shrink-0 shadow-sm">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex items-center justify-center transition-transform duration-500 hover:scale-105">
              <Image
                src="/logo.png"
                alt="Navayuva Bharati Infotech Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="font-extrabold tracking-wider text-sm text-zinc-950 uppercase">NYB Console</span>
          </div>
 
          <nav className="flex flex-col gap-2 text-left">
            {[
              { id: "overview", name: "Overview", icon: LayoutDashboard },
              { id: "blogs", name: "Blog Posts", icon: FileText },
              { id: "jobs", name: "Job Listings", icon: Briefcase },
              { id: "applicants", name: "Applications", icon: Users },
              { id: "messages", name: "Messages", icon: MessageSquare },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    setIsAddingJob(false);
                    setEditingJob(null);
                    setIsAddingBlog(false);
                    setEditingBlog(null);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all border cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-indigo-50 border-indigo-100 text-indigo-650"
                      : "text-zinc-655 hover:text-zinc-950 hover:bg-zinc-50 border-transparent"
                  }`}
                >
                  <Icon className="w-4 h-4" /> {tab.name}
                </button>
              );
            })}
          </nav>
        </div>
 
        <button
          onClick={handleLogout}
          disabled={isPending}
          className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-rose-600 hover:text-rose-700 hover:bg-rose-50 rounded-xl border border-transparent hover:border-rose-100 transition-all cursor-pointer mt-8 md:mt-0"
        >
          <LogOut className="w-4 h-4" /> Log Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-10 overflow-y-auto">
        {activeTab === "overview" && (
          <div className="space-y-8 text-left">
            <h1 className="text-3xl font-extrabold text-zinc-950 tracking-tight">Overview</h1>
            
            {/* Stats widgets */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Active Jobs", value: initialData.jobs.length, color: "text-sky-600 bg-sky-50 border-sky-100" },
                { label: "Applications", value: initialData.applications.length, color: "text-indigo-600 bg-indigo-50 border-indigo-100" },
                { label: "Blog Posts", value: initialData.blogPosts.length, color: "text-purple-600 bg-purple-50 border-purple-100" },
                { label: "Messages", value: initialData.contactMessages.length, color: "text-pink-600 bg-pink-50 border-pink-100" },
              ].map((stat, idx) => (
                <div key={idx} className={`glass-card rounded-3xl p-6 border ${stat.color} space-y-1`}>
                  <div className="text-xs text-zinc-600 font-bold uppercase tracking-wider">{stat.label}</div>
                  <div className="text-3xl font-black">{stat.value}</div>
                </div>
              ))}
            </div>
 
             {/* Latest Applications */}
            <div className="glass-card rounded-3xl border border-zinc-200 bg-white/70 backdrop-blur-md p-6 space-y-4 shadow-sm">
              <h3 className="text-lg font-extrabold text-zinc-950 tracking-tight">Recent Applications</h3>
              {initialData.applications.length > 0 ? (
                <>
                  {/* Mobile Layout (Cards) */}
                  <div className="md:hidden space-y-3">
                    {initialData.applications.slice(0, 5).map((app) => (
                      <div key={app.id} className="p-4 rounded-2xl bg-zinc-50 border border-zinc-150 space-y-2">
                        <div className="flex justify-between items-start">
                          <div className="max-w-[70%]">
                            <div className="font-bold text-zinc-900 text-sm truncate">{app.name}</div>
                            <div className="text-[11px] text-zinc-500 font-medium truncate">{app.job.title}</div>
                          </div>
                          <span className="px-2 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider bg-indigo-50 text-indigo-600 border border-indigo-100 shrink-0">
                            {app.status}
                          </span>
                        </div>
                        <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider" suppressHydrationWarning>
                          Applied: {new Date(app.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Desktop Layout (Table) */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead>
                        <tr className="border-b border-zinc-200 text-zinc-500 text-xs uppercase tracking-wider">
                          <th className="pb-3 pr-4">Applicant</th>
                          <th className="pb-3 pr-4">Job Applied</th>
                          <th className="pb-3 pr-4">Status</th>
                          <th className="pb-3">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {initialData.applications.slice(0, 5).map((app) => (
                          <tr key={app.id} className="border-b border-zinc-100">
                            <td className="py-3 pr-4 font-semibold text-zinc-900">{app.name}</td>
                            <td className="py-3 pr-4 text-zinc-600">{app.job.title}</td>
                            <td className="py-3 pr-4">
                              <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-indigo-50 text-indigo-600 border border-indigo-100">
                                {app.status}
                              </span>
                            </td>
                            <td className="py-3 text-zinc-500" suppressHydrationWarning>{new Date(app.createdAt).toLocaleDateString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : (
                <div className="text-zinc-500 text-xs py-4">No recent applications.</div>
              )}
            </div>
          </div>
        )}

        {activeTab === "jobs" && (
          <div className="space-y-6 text-left">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-extrabold text-zinc-950 tracking-tight">Job Listings</h1>
              {!isAddingJob && !editingJob && (
                <button
                  onClick={() => setIsAddingJob(true)}
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Add Job
                </button>
              )}
            </div>
 
            {isAddingJob || editingJob ? (
              <JobForm
                job={editingJob}
                onClose={() => {
                  setIsAddingJob(false);
                  setEditingJob(null);
                }}
              />
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {initialData.jobs.map((job) => (
                  <div
                    key={job.id}
                    className="glass-card rounded-3xl p-6 border border-zinc-200 bg-white/70 backdrop-blur-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all hover:shadow-sm"
                  >
                    <div>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded">{job.department}</span>
                        <span className="text-zinc-500 font-medium">{job.location}</span>
                        <span className="text-zinc-500 font-medium">{job.status}</span>
                      </div>
                      <h3 className="text-lg font-extrabold text-zinc-950 mt-1">{job.title}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setEditingJob(job)}
                        className="p-2 rounded-lg border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-zinc-500 hover:text-zinc-900 transition-all cursor-pointer bg-white"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleJobDelete(job.id)}
                        className="p-2 rounded-lg border border-rose-200 hover:border-rose-300 hover:bg-rose-50 text-rose-600 hover:text-rose-700 transition-all cursor-pointer bg-white"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "blogs" && (
          <div className="space-y-6 text-left">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-extrabold text-zinc-950 tracking-tight">Blog Posts</h1>
              {!isAddingBlog && !editingBlog && (
                <button
                  onClick={() => setIsAddingBlog(true)}
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Create Post
                </button>
              )}
            </div>
 
            {isAddingBlog || editingBlog ? (
              <BlogForm
                post={editingBlog}
                onClose={() => {
                  setIsAddingBlog(false);
                  setEditingBlog(null);
                }}
              />
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {initialData.blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="glass-card rounded-3xl p-6 border border-zinc-200 bg-white/70 backdrop-blur-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all hover:shadow-sm"
                  >
                    <div>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded">{post.tags.split(",")[0]}</span>
                        <span className="text-zinc-500 font-medium">{post.status}</span>
                      </div>
                      <h3 className="text-lg font-extrabold text-zinc-950 mt-1">{post.title}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setEditingBlog(post)}
                        className="p-2 rounded-lg border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-zinc-500 hover:text-zinc-900 transition-all cursor-pointer bg-white"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleBlogDelete(post.id)}
                        className="p-2 rounded-lg border border-rose-200 hover:border-rose-300 hover:bg-rose-50 text-rose-600 hover:text-rose-700 transition-all cursor-pointer bg-white"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "applicants" && (
          <div className="space-y-6 text-left">
            <h1 className="text-3xl font-extrabold text-zinc-950 tracking-tight">Applications</h1>
 
            <div className="space-y-4">
              {initialData.applications.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {initialData.applications.map((app) => (
                    <div key={app.id} className="glass-card rounded-3xl p-6 border border-zinc-200 bg-white/70 backdrop-blur-md flex flex-col gap-4 transition-all hover:shadow-sm">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-100 pb-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="font-extrabold text-zinc-950 text-lg">{app.name}</h3>
                            <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-indigo-50 text-indigo-600 border border-indigo-100">
                              {app.job.title}
                            </span>
                          </div>
                          <div className="text-xs text-zinc-500 mt-1 flex flex-wrap gap-x-4 gap-y-1">
                            <span>Email: <a href={`mailto:${app.email}`} className="text-indigo-600 hover:underline">{app.email}</a></span>
                            <span>Phone: <span className="font-semibold text-zinc-800">{app.phone}</span></span>
                            <span>Applied: <span className="font-semibold text-zinc-850" suppressHydrationWarning>{new Date(app.createdAt).toLocaleDateString()}</span></span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 self-end sm:self-auto">
                          <span className="text-xs font-bold text-zinc-500">Status:</span>
                          <select
                            value={app.status}
                            onChange={(e) => handleStatusChange(app.id, e.target.value)}
                            className="bg-zinc-50 border border-zinc-200 rounded-lg px-2.5 py-1.5 text-xs text-zinc-900 focus:outline-none focus:border-indigo-500 font-bold"
                          >
                            <option value="APPLIED">Applied</option>
                            <option value="REVIEWING">Reviewing</option>
                            <option value="INTERVIEWING">Interviewing</option>
                            <option value="OFFERED">Offered</option>
                            <option value="REJECTED">Rejected</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                        <div className="bg-zinc-50 p-3.5 rounded-2xl border border-zinc-200/50">
                          <div className="text-zinc-500 font-bold uppercase tracking-wider text-[9px] mb-1">Experience</div>
                          <div className="font-bold text-zinc-950 text-sm">{app.experience} Years</div>
                        </div>
                        <div className="bg-zinc-50 p-3.5 rounded-2xl border border-zinc-200/50 flex flex-col justify-center">
                          <div className="text-zinc-500 font-bold uppercase tracking-wider text-[9px] mb-1">Resume File</div>
                          <a
                            href={app.resumePath}
                            download
                            className="text-xs text-indigo-600 hover:underline font-extrabold inline-flex items-center gap-1"
                          >
                            Download Resume
                          </a>
                        </div>
                        <div className="bg-zinc-50 p-3.5 rounded-2xl border border-zinc-200/50">
                          <div className="text-zinc-500 font-bold uppercase tracking-wider text-[9px] mb-1">Professional Links</div>
                          <div className="flex gap-4 mt-1">
                            {app.linkedIn ? (
                              <a href={app.linkedIn} target="_blank" rel="noreferrer" className="text-indigo-650 hover:underline font-extrabold flex items-center gap-0.5">
                                LinkedIn
                              </a>
                            ) : (
                              <span className="text-zinc-400 font-medium">No LinkedIn</span>
                            )}
                            {app.portfolioLink ? (
                              <a href={app.portfolioLink} target="_blank" rel="noreferrer" className="text-sky-600 hover:underline font-extrabold flex items-center gap-0.5">
                                Portfolio
                              </a>
                            ) : (
                              <span className="text-zinc-400 font-medium">No Portfolio</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {app.message && (
                        <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200/60 text-xs">
                          <div className="text-zinc-500 font-bold uppercase tracking-wider text-[9px] mb-1.5">Cover Message</div>
                          <p className="text-zinc-700 leading-relaxed whitespace-pre-wrap">{app.message}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-zinc-500 text-xs py-4 text-center">No applications received yet.</div>
              )}
            </div>
          </div>
        )}

        {activeTab === "messages" && (
          <div className="space-y-6 text-left">
            <h1 className="text-3xl font-extrabold text-zinc-950 tracking-tight">Contact Messages</h1>
 
            <div className="grid grid-cols-1 gap-4">
              {initialData.contactMessages.length > 0 ? (
                initialData.contactMessages.map((msg) => (
                  <div key={msg.id} className="glass-card rounded-3xl p-6 border border-zinc-200 bg-white/70 backdrop-blur-md space-y-4 shadow-sm">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-extrabold text-zinc-950">{msg.name}</div>
                        <div className="text-xs text-zinc-500 font-medium">{msg.email}</div>
                      </div>
                      <span className="text-[10px] text-zinc-400 font-bold uppercase">{new Date(msg.createdAt).toLocaleString()}</span>
                    </div>
                    {msg.subject && <div className="text-xs font-bold text-indigo-650 uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded inline-block">Subject: {msg.subject}</div>}
                    <p className="text-xs text-zinc-750 leading-relaxed bg-zinc-50 p-4 rounded-2xl border border-zinc-200">{msg.message}</p>
                  </div>
                ))
              ) : (
                <div className="text-zinc-500 text-xs py-4 text-center">No messages received yet.</div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// Job Form Component
function JobForm({ job, onClose }: { job?: any; onClose: () => void }) {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      await createOrUpdateJob(null, formData);
      onClose();
    });
  };

  const requirements = job?.requirements ? JSON.parse(job.requirements).join("\n") : "";
  const benefits = job?.benefits ? JSON.parse(job.benefits).join("\n") : "";

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 border border-zinc-200 bg-white/70 backdrop-blur-md space-y-4 shadow-sm">
      {job?.id && <input type="hidden" name="id" value={job.id} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Job Title *</label>
          <input
            type="text"
            name="title"
            required
            defaultValue={job?.title || ""}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Department *</label>
          <input
            type="text"
            name="department"
            required
            defaultValue={job?.department || ""}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all"
            placeholder="Engineering, Security, Sales..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Location *</label>
          <input
            type="text"
            name="location"
            required
            defaultValue={job?.location || ""}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all"
            placeholder="Hyderabad, India (Hybrid)"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Job Type *</label>
          <select
            name="type"
            required
            defaultValue={job?.type || "Full-time"}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500"
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Salary Range</label>
          <input
            type="text"
            name="salary"
            defaultValue={job?.salary || ""}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all"
            placeholder="₹12,00,000 - ₹18,00,000"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Status *</label>
          <select
            name="status"
            required
            defaultValue={job?.status || "PUBLISHED"}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500"
          >
            <option value="PUBLISHED">Published</option>
            <option value="DRAFT">Draft</option>
            <option value="ARCHIVED">Archived</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Featured Position</label>
          <select
            name="featured"
            required
            defaultValue={job?.featured ? "true" : "false"}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500"
          >
            <option value="false">No</option>
            <option value="true">Yes (Show on Home Page)</option>
          </select>
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Description *</label>
        <textarea
          name="description"
          required
          rows={4}
          defaultValue={job?.description || ""}
          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all resize-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Requirements (One per line)</label>
          <textarea
            name="requirements"
            rows={4}
            defaultValue={requirements}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all resize-none"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Benefits & Perks (One per line)</label>
          <textarea
            name="benefits"
            rows={4}
            defaultValue={benefits}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all resize-none"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="px-5 py-2.5 rounded-xl border border-zinc-200 hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900 text-xs font-bold cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isPending}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-2 cursor-pointer disabled:opacity-50 shadow-sm"
        >
          {isPending ? <Loader className="w-4 h-4 animate-spin" /> : "Save Job"}
        </button>
      </div>
    </form>
  );
}

// Blog Form Component
function BlogForm({ post, onClose }: { post?: any; onClose: () => void }) {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      await createOrUpdateBlogPost(null, formData);
      onClose();
    });
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 border border-zinc-200 bg-white/70 backdrop-blur-md space-y-4 shadow-sm">
      {post?.id && <input type="hidden" name="id" value={post.id} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Article Title *</label>
          <input
            type="text"
            name="title"
            required
            defaultValue={post?.title || ""}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">URL Slug (e.g. nyb-automation-upgrade)</label>
          <input
            type="text"
            name="slug"
            defaultValue={post?.slug || ""}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all"
          />
        </div>
      </div>
 
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Tags / Categories (Comma separated)</label>
          <input
            type="text"
            name="tags"
            defaultValue={post?.tags || ""}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all"
            placeholder="Automation,AI,Cybersecurity..."
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Reading Time (Minutes) *</label>
          <input
            type="number"
            name="readingTime"
            required
            min="1"
            defaultValue={post?.readingTime || 5}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Publish Status *</label>
          <select
            name="status"
            required
            defaultValue={post?.status || "PUBLISHED"}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500"
          >
            <option value="PUBLISHED">Published</option>
            <option value="DRAFT">Draft</option>
          </select>
        </div>
      </div>
 
      <div className="space-y-1">
        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Cover Image URL</label>
        <input
          type="text"
          name="coverImage"
          defaultValue={post?.coverImage || ""}
          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all"
          placeholder="https://images.unsplash.com/..."
        />
      </div>
 
      <div className="space-y-1">
        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Summary / Intro</label>
        <textarea
          name="summary"
          rows={2}
          defaultValue={post?.summary || ""}
          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all resize-none"
        />
      </div>
 
      <div className="space-y-1">
        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Content (supports simple markdown e.g. ### for headers)</label>
        <textarea
          name="content"
          rows={10}
          defaultValue={post?.content || ""}
          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 font-mono focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all"
        />
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="px-5 py-2.5 rounded-xl border border-zinc-200 hover:bg-zinc-50 text-zinc-650 hover:text-zinc-900 text-xs font-bold cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isPending}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-2 cursor-pointer disabled:opacity-50 shadow-sm"
        >
          {isPending ? <Loader className="w-4 h-4 animate-spin" /> : "Save Post"}
        </button>
      </div>
    </form>
  );
}
