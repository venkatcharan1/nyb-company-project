import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import prisma from "@/lib/db";

export const revalidate = 0;

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const post = await prisma.blogPost.findUnique({
    where: { slug },
  });

  if (!post || post.status !== "PUBLISHED") {
    notFound();
  }

  const tagList = post.tags.split(",").map((t) => t.trim());

  // Function to render markdown-like content to HTML (paragraphs, subheaders, lists)
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, idx) => {
      if (block.startsWith("### ")) {
        return (
          <h3 key={idx} className="text-xl md:text-2xl font-extrabold text-zinc-950 tracking-tight mt-8 mb-4">
            {block.replace("### ", "")}
          </h3>
        );
      }
      if (block.startsWith("#### ")) {
        return (
          <h4 key={idx} className="text-lg md:text-xl font-extrabold text-zinc-950 tracking-tight mt-6 mb-3">
            {block.replace("#### ", "")}
          </h4>
        );
      }
      if (block.startsWith("* ") || block.startsWith("- ")) {
        const items = block.split("\n").map((item) => item.replace(/^[*-\s]+/, ""));
        return (
          <ul key={idx} className="list-disc pl-6 space-y-2 text-zinc-700 text-sm leading-relaxed my-4">
            {items.map((item, iidx) => (
              <li key={iidx}>{item}</li>
            ))}
          </ul>
        );
      }
      if (block.startsWith("1. ")) {
        const items = block.split("\n").map((item) => item.replace(/^\d+\.\s+/, ""));
        return (
          <ol key={idx} className="list-decimal pl-6 space-y-2 text-zinc-700 text-sm leading-relaxed my-4">
            {items.map((item, iidx) => (
              <li key={iidx}>{item}</li>
            ))}
          </ol>
        );
      }
      return (
        <p key={idx} className="text-zinc-700 text-sm md:text-base leading-relaxed mb-4">
          {block}
        </p>
      );
    });
  };

  return (
    <div className="relative w-full bg-white text-zinc-900 overflow-hidden min-h-screen">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <article className="max-w-4xl mx-auto px-6 py-20 space-y-8 relative">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-indigo-600 font-semibold transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" /> Back to Articles
        </Link>

        {/* Meta Headers */}
        <div className="space-y-4 text-left">
          <div className="flex flex-wrap items-center gap-2">
            {tagList.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2.5 py-1 rounded border border-indigo-100"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-zinc-400 text-xs font-bold uppercase tracking-widest pt-2">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-indigo-500" /> {post.readingTime} Min Read</span>
            <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' }) : ""}</span>
          </div>
        </div>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-3xl border border-zinc-200 shadow-lg">
            <img src={post.coverImage} alt={post.title} className="object-cover w-full h-full" />
          </div>
        )}

        {/* Article Content */}
        <div className="text-left border-t border-zinc-200 pt-8 max-w-3xl mx-auto space-y-4">
          {renderContent(post.content)}
        </div>

        {/* Sharing footer */}
        <div className="max-w-3xl mx-auto pt-12 border-t border-zinc-200 flex justify-between items-center text-zinc-500 text-xs font-medium">
          <span>Article published by NYB Infotech Team</span>
          <button className="flex items-center gap-2 hover:text-indigo-600 transition-colors font-bold uppercase tracking-wider text-[10px]">
            <Share2 className="w-4 h-4" /> Share Article
          </button>
        </div>
      </article>
    </div>
  );
}
