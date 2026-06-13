"use server";

import prisma from "@/lib/db";
import fs from "fs/promises";
import path from "path";
import { z } from "zod";

const applicationSchema = z.object({
  jobId: z.string().uuid(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Invalid phone number"),
  experience: z.string().min(1, "Experience is required"),
  portfolioLink: z.string().url().optional().or(z.literal("")),
  linkedIn: z.string().url().optional().or(z.literal("")),
  message: z.string().optional(),
});

export async function submitApplication(prevState: any, formData: FormData) {
  try {
    const jobId = formData.get("jobId") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const experience = formData.get("experience") as string;
    const portfolioLink = formData.get("portfolioLink") as string;
    const linkedIn = formData.get("linkedIn") as string;
    const message = formData.get("message") as string;
    const resumeFile = formData.get("resume") as File;

    // Validate inputs
    const validated = applicationSchema.safeParse({
      jobId,
      name,
      email,
      phone,
      experience,
      portfolioLink,
      linkedIn,
      message,
    });

    if (!validated.success) {
      return {
        success: false,
        error: validated.error.issues[0].message,
      };
    }

    if (!resumeFile || resumeFile.size === 0) {
      return {
        success: false,
        error: "Resume file is required",
      };
    }

    // Save resume to public/uploads
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadsDir, { recursive: true });

    const fileExtension = path.extname(resumeFile.name) || ".pdf";
    const fileName = `${Date.now()}-${name.replace(/\s+/g, "_")}${fileExtension}`;
    const filePath = path.join(uploadsDir, fileName);

    const buffer = Buffer.from(await resumeFile.arrayBuffer());
    await fs.writeFile(filePath, buffer);

    // Save to SQLite via Prisma
    await prisma.application.create({
      data: {
        name,
        email,
        phone,
        experience,
        portfolioLink: portfolioLink || null,
        linkedIn: linkedIn || null,
        message: message || null,
        resumePath: `/uploads/${fileName}`,
        jobId,
      },
    });

    return {
      success: true,
      message: "Application submitted successfully! Our team will contact you soon.",
    };
  } catch (error: any) {
    console.error("Application submission error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
