"use server";

import prisma from "@/lib/db";
import { setSession, clearSession } from "@/lib/auth";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Admin Authentication
export async function adminLogin(prevState: any, formData: FormData) {
  try {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!username || !password) {
      return { success: false, error: "Username and password are required" };
    }

    const admin = await prisma.adminUser.findUnique({
      where: { username },
    });

    if (!admin) {
      return { success: false, error: "Invalid username or password" };
    }

    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      return { success: false, error: "Invalid username or password" };
    }

    // Set secure session cookie
    await setSession(admin.username, admin.role);

    return { success: true, redirect: "/admin" };
  } catch (error) {
    console.error("Admin login error:", error);
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function adminLogout() {
  await clearSession();
  redirect("/admin/login");
}

// Jobs CRUD
export async function createOrUpdateJob(prevState: any, formData: FormData) {
  try {
    const id = formData.get("id") as string;
    const title = (formData.get("title") as string) || "Untitled Position";
    const department = (formData.get("department") as string) || "General";
    const location = (formData.get("location") as string) || "Hyderabad, India (Hybrid)";
    const type = (formData.get("type") as string) || "Full-time";
    const salary = formData.get("salary") as string;
    const description = (formData.get("description") as string) || "";
    const featured = formData.get("featured") === "true";
    const status = (formData.get("status") as string) || "PUBLISHED";
    const requirementsRaw = (formData.get("requirements") as string) || "";
    const benefitsRaw = (formData.get("benefits") as string) || "";

    const requirements = JSON.stringify(
      requirementsRaw
        .split("\n")
        .map((r) => r.trim())
        .filter(Boolean)
    );

    const benefits = JSON.stringify(
      benefitsRaw
        .split("\n")
        .map((b) => b.trim())
        .filter(Boolean)
    );

    const jobData = {
      title,
      department,
      location,
      type,
      salary: salary || null,
      description,
      featured,
      status,
      requirements,
      benefits,
    };

    if (id) {
      await prisma.job.update({
        where: { id },
        data: jobData,
      });
    } else {
      await prisma.job.create({
        data: jobData,
      });
    }

    revalidatePath("/careers");
    revalidatePath("/admin");
    return { success: true, message: "Job saved successfully" };
  } catch (error) {
    console.error("Job save error:", error);
    return { success: false, error: "Failed to save job" };
  }
}

export async function deleteJob(id: string) {
  try {
    await prisma.job.delete({ where: { id } });
    revalidatePath("/careers");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Job deletion error:", error);
    return { success: false };
  }
}

// Blog CRUD
export async function createOrUpdateBlogPost(prevState: any, formData: FormData) {
  try {
    const id = formData.get("id") as string;
    const title = (formData.get("title") as string) || "Untitled Post";
    let slug = (formData.get("slug") as string) || "";
    if (!slug) {
      slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    }
    const summary = (formData.get("summary") as string) || "";
    const content = (formData.get("content") as string) || "";
    const coverImage = formData.get("coverImage") as string;
    const tags = (formData.get("tags") as string) || "General";
    const status = (formData.get("status") as string) || "PUBLISHED";
    const readingTime = parseInt(formData.get("readingTime") as string) || 5;

    const postData = {
      title,
      slug,
      summary,
      content,
      coverImage: coverImage || null,
      tags,
      status,
      readingTime,
      seoTitle: title,
      seoDescription: summary,
    };

    if (id) {
      await prisma.blogPost.update({
        where: { id },
        data: postData,
      });
    } else {
      await prisma.blogPost.create({
        data: postData,
      });
    }

    revalidatePath("/blog");
    revalidatePath("/admin");
    return { success: true, message: "Blog post saved successfully" };
  } catch (error) {
    console.error("Blog post save error:", error);
    return { success: false, error: "Failed to save blog post" };
  }
}

export async function deleteBlogPost(id: string) {
  try {
    await prisma.blogPost.delete({ where: { id } });
    revalidatePath("/blog");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Blog post deletion error:", error);
    return { success: false };
  }
}

// Application status update
export async function updateApplicationStatus(id: string, status: string) {
  try {
    await prisma.application.update({
      where: { id },
      data: { status },
    });
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Application status update error:", error);
    return { success: false };
  }
}
