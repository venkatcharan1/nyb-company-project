# Navayuva Bharati Infotech (NYB Infotech) - Project Documentation

This documentation details the premium, enterprise-grade redesign and rebuild of the **Navayuva Bharati Infotech** website.

---

## 1. Tech Stack Overview

* **Core Framework**: Next.js 15 (App Router, Server Actions, Dynamic Data Rendering).
* **Language**: TypeScript (Strict Type Safety).
* **Styling**: Tailwind CSS v4 (Sleek CSS-based configurations).
* **Animations**:
  * **Framer Motion**: Smooth component-level transitions and scroll reveals.
  * **GSAP**: Magnetic cursor scaling and advanced micro-interactions.
  * **Lenis Smooth Scroll**: Cinematic scrolling inertia.
* **Database & ORM**:
  * **Prisma 7 (ORM)**: Modern type-safe database access client.
  * **SQLite**: Open-source, zero-configuration local relational database.
  * **@prisma/adapter-better-sqlite3**: Prisma 7-compliant driver adapter.
* **Form & Validation**: React Hook Form, React 19 `useActionState`, and Zod validation.
* **Icons**: Lucide Icons & custom inline SVGs (for brand logos).

---

## 2. Project Folder Structure

All code is stored at `D:\nyb-infotech`. Key locations include:

```text
D:\nyb-infotech
├── prisma
│   ├── dev.db             <- The SQLite database file
│   ├── schema.prisma      <- Database model definitions
│   └── seed.ts            <- Seed script for mock blogs, jobs, and admin credentials
├── public
│   ├── logo.png           <- Rebranded corporate logo (attached by user)
│   └── uploads/           <- Folder where submitted applicant resumes are stored
├── src
│   ├── app
│   │   ├── about          <- Company story, values, and mission/vision
│   │   ├── admin          <- Private Admin panel & login portal
│   │   ├── blog           <- Blog list & dynamic articles
│   │   ├── careers        <- Jobs list & dynamic application portals
│   │   ├── contact        <- Interactive message form
│   │   ├── privacy        <- Privacy Policy
│   │   ├── services       <- Core service details
│   │   ├── technologies   <- Frontend/Backend/Salesforce/Cloud stacks
│   │   ├── terms          <- Terms & Conditions
│   │   ├── globals.css    <- Dark theme variables, custom scrollbar & glows
│   │   ├── icon.png       <- Automatic favicon asset (Next.js automatically matches it)
│   │   └── layout.tsx     <- Global template including smooth scroll & cursor
│   ├── components
│   │   ├── CustomCursor.tsx  <- Magnetic trailing mouse cursor
│   │   ├── Footer.tsx        <- Premium links and contact footer
│   │   ├── Navbar.tsx        <- Sticky navbar (exluding links to Admin portal)
│   │   └── SmoothScroll.tsx  <- Lenis scroll engine initialization
│   └── lib
│       ├── auth.ts        <- Node Crypto-based HttpOnly cookie encryption
│       └── db.ts          <- Singleton Prisma Client instance with SQLite adapter
```

---

## 3. Database Schema

The SQLite schema defined in `prisma/schema.prisma` is:

* **`AdminUser`**: Secure admin credentials.
* **`Job`**: Corporate job openings.
* **`Application`**: Job application submissions containing details, cover message, and a path to the uploaded resume file.
* **`BlogPost`**: Articles, event summaries, and milestone updates.
* **`ContactMessage`**: User message inquiries sent from the contact page.

---

## 4. Secure Admin Credentials

To verify the admin dashboard features immediately:
* **Login URL**: `/admin/login` (Note: This is **hidden** from standard public navigation menus and accessible only via direct URL).
* **Default Admin Username**: `admin`
* **Default Admin Password**: `password`

Sessions are encrypted using the Node `crypto` library and stored securely in an `HttpOnly` cookie (`nyb_session`).

---

## 5. Local Execution & Setup Guide

Since the database uses an absolute path on **Disk D** (`D:\nyb-infotech\prisma\dev.db`) and npm cache redirections are configured, follow these steps to run the site locally:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Re-Generate Prisma Client**:
   ```bash
   npx prisma generate
   ```

3. **Verify Database Setup** (Optional, database is already seeded):
   ```bash
   npx prisma db push
   npx tsx prisma/seed.ts
   ```

4. **Launch Dev Server**:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the redesigned corporate experience.
