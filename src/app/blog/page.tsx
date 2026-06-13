import Link from "next/link";
import { Search, Clock } from "lucide-react";
import prisma from "@/lib/db";

export const revalidate = 0;

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; tag?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams.query || "";
  const tag = resolvedSearchParams.tag || "";

  // Fetch blogs matching search parameters
  const posts = await prisma.blogPost.findMany({
    where: {
      status: "PUBLISHED",
      AND: [
        query
          ? {
              OR: [
                { title: { contains: query } },
                { summary: { contains: query } },
                { content: { contains: query } },
              ],
            }
          : {},
        tag ? { tags: { contains: tag } } : {},
      ],
    },
    orderBy: { publishedAt: "desc" },
  });

  // Extract all tags to show filters
  const allPosts = await prisma.blogPost.findMany({
    where: { status: "PUBLISHED" },
    select: { tags: true },
  });

  const tags = Array.from(
    new Set(allPosts.flatMap((p) => p.tags.split(",").map((t) => t.trim())))
  );

  return (
    <div className="relative w-full bg-white text-zinc-900 overflow-hidden min-h-screen">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center grid-bg fade-in-up active">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full animate-fade-in">
          Announcements & Insights
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-950 tracking-tight mt-4 max-w-3xl mx-auto leading-tight">
          Our Blog & News
        </h1>
        <p className="text-zinc-650 text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed font-medium">
          Stay updated with company achievements, tech upgrades, events, and modern consulting insights.
        </p>
      </section>

      {/* Filters and Search */}
      <section className="max-w-7xl mx-auto px-6 pb-8 border-b border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-6 scale-in">
        {/* Search */}
        <form action="/blog" method="GET" className="relative w-full md:w-[320px]">
          <input
            type="text"
            name="query"
            defaultValue={query}
            placeholder="Search articles..."
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white shadow-sm"
          />
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400" />
        </form>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center">
          <Link
            href="/blog"
            className={`px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase border transition-all ${
              !tag
                ? "bg-indigo-600 border-indigo-600 text-white shadow-sm"
                : "border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50 bg-white"
            }`}
          >
            All tags
          </Link>
          {tags.map((t) => (
            <Link
              key={t}
              href={`/blog?tag=${encodeURIComponent(t)}`}
              className={`px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase border transition-all ${
                tag === t
                  ? "bg-indigo-600 border-indigo-600 text-white shadow-sm"
                  : "border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50 bg-white"
              }`}
            >
              {t}
            </Link>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 mb-16">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <article
                key={post.id}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col h-full border border-zinc-200 bg-white/70 backdrop-blur-md transition-all duration-300 hover:shadow-md hover:border-zinc-300 scale-in"
              >
                {post.coverImage && (
                  <div className="relative w-full h-[200px] overflow-hidden border-b border-zinc-200">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow gap-4 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2.5 py-1 rounded">
                      {post.tags.split(",")[0]}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 leading-snug line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-indigo-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-zinc-650 text-xs line-clamp-3 leading-relaxed font-medium">
                    {post.summary}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-indigo-500" /> {post.readingTime} Min</span>
                    <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' }) : ""}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-zinc-500 border border-dashed border-zinc-200 rounded-3xl bg-zinc-50/50 scale-in">
            No articles found matching your criteria. Check back later!
          </div>
        )}
      </section>
    </div>
  );
}
