import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import AdminDashboard from "./AdminDashboard";

export const revalidate = 0;

export default async function AdminPage() {
  // 1. Verify admin session
  const session = await getSession();
  if (!session || session.role !== "ADMIN") {
    redirect("/admin/login");
  }

  // 2. Fetch all datasets from SQLite database
  const jobs = await prisma.job.findMany({
    orderBy: { createdAt: "desc" },
  });

  const applications = await prisma.application.findMany({
    include: { job: true },
    orderBy: { createdAt: "desc" },
  });

  const blogPosts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  });

  const contactMessages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  const data = {
    jobs,
    applications,
    blogPosts,
    contactMessages,
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <AdminDashboard initialData={data} />
    </div>
  );
}

