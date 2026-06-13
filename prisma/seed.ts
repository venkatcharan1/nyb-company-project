import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import bcrypt from "bcryptjs";
import path from "path";

const dbPath = path.join(process.cwd(), "prisma", "dev.db");
const url = `file:${dbPath}`;
const adapter = new PrismaBetterSqlite3({ url });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  // 1. Create default admin
  const existingAdmin = await prisma.adminUser.findUnique({
    where: { username: "admin" },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash("password", 10);
    await prisma.adminUser.create({
      data: {
        username: "admin",
        password: hashedPassword,
        role: "ADMIN",
      },
    });
    console.log("Created admin user: admin / password");
  } else {
    console.log("Admin user already exists.");
  }

  // 2. Create initial jobs
  const jobCount = await prisma.job.count();
  if (jobCount === 0) {
    await prisma.job.create({
      data: {
        title: "Senior Full-Stack Engineer (Next.js & Node.js)",
        description: "Join our core team to build next-generation enterprise software. You will lead the development of our React/Next.js client portals and robust API services.",
        department: "Engineering",
        location: "Hyderabad, India (Hybrid)",
        type: "Full-time",
        salary: "₹18,00,000 - ₹24,00,000 per annum",
        status: "PUBLISHED",
        featured: true,
        requirements: JSON.stringify([
          "5+ years of experience with modern JavaScript frameworks (React, Next.js, TypeScript)",
          "Strong experience building relational database schemas and optimizing SQL queries",
          "Experience with state management, layout architectures, and Tailwind CSS",
          "Excellent problem solving and communication skills"
        ]),
        benefits: JSON.stringify([
          "Flexible working hours and hybrid options",
          "Comprehensive health insurance for family",
          "Annual learning and certification budget",
          "Performance-linked bonuses"
        ])
      }
    });

    await prisma.job.create({
      data: {
        title: "Salesforce Solution Architect",
        description: "Lead the design, implementation, and deployment of complex Salesforce enterprise integrations for our global finance and mortgage clients.",
        department: "Consulting",
        location: "Hyderabad, India (On-site)",
        type: "Full-time",
        salary: "₹22,00,000 - ₹30,00,000 per annum",
        status: "PUBLISHED",
        featured: true,
        requirements: JSON.stringify([
          "Salesforce Application/System Architect certification",
          "8+ years of Salesforce development (Apex, LWC, Visualforce, Integrations)",
          "Strong understanding of enterprise integration patterns and REST/SOAP APIs",
          "Experience in the finance, banking, or mortgage domains is a plus"
        ]),
        benefits: JSON.stringify([
          "Top-of-market salary packages",
          "Global exposure and travel opportunities",
          "Dedicated wellness program",
          "Mentorship and leadership opportunities"
        ])
      }
    });

    await prisma.job.create({
      data: {
        title: "Cybersecurity Analyst",
        description: "Monitor and defend our client's cloud infrastructure. Conduct security audits, penetration testing, and implement compliance frameworks.",
        department: "Security",
        location: "Remote (India)",
        type: "Full-time",
        salary: "₹12,00,000 - ₹16,00,000 per annum",
        status: "PUBLISHED",
        featured: false,
        requirements: JSON.stringify([
          "CEH, CISSP, or CompTIA Security+ certifications",
          "3+ years of experience in Security Operations Center (SOC) environments",
          "Hands-on experience with SIEM tools (Splunk, Sentinel) and vulnerability scanners",
          "Familiarity with ISO 27001, SOC2, and GDPR requirements"
        ]),
        benefits: JSON.stringify([
          "100% remote working option",
          "Coverage for security certification exams",
          "High-end hardware setup provided",
          "Gym membership reimbursement"
        ])
      }
    });

    console.log("Mock jobs seeded successfully.");
  }

  // 3. Create initial blog posts
  const blogCount = await prisma.blogPost.count();
  if (blogCount === 0) {
    await prisma.blogPost.create({
      data: {
        title: "Navayuva Bharati Infotech Redesigns Core Digital Process Automation Frameworks",
        slug: "nyb-redesigns-dpa-frameworks",
        summary: "Discover how we are integrating advanced AI reasoning engines to accelerate complex digital process automation by 45%.",
        content: `### Unleashing the Power of AI in Digital Process Automation

Digital Process Automation (DPA) has entered a new era. Previously, process modeling required rigid flowcharts and rule engines that struggled with unstructured documents or unpredictable user actions. At **Navayuva Bharati Infotech (NYB Infotech)**, we have reimagined this approach by blending traditional business processes with state-of-the-art AI reasoning models.

#### Key Highlights of the New Architecture:

1. **Intelligent Event Orchestration**: Instead of static loops, our engine dynamically evaluates user intent and adjusts workflows on-the-fly.
2. **Context-Aware Document Processing**: Extract, classify, and validate mortgage application data, invoices, and legal contracts with 99.8% accuracy.
3. **Low-Code Custom Integrations**: Rapidly connect core enterprise databases (SAP, Salesforce, Oracle) to custom user experiences using our secure API gateways.

This framework is now being rolled out across our primary client base in logistics, retail, and mortgage services, delivering a measurable 45% increase in operational throughput.`,
        coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000",
        status: "PUBLISHED",
        tags: "Automation,AI,Enterprise,Tech Updates",
        readingTime: 4,
        seoTitle: "AI-Powered Digital Process Automation Redesigned | NYB Infotech",
        seoDescription: "Learn how Navayuva Bharati Infotech is integrating AI reasoning engines to speed up Digital Process Automation (DPA) by 45%."
      }
    });

    await prisma.blogPost.create({
      data: {
        title: "Securing the Future: Our Cybersecurity Best Practices for Financial Systems",
        slug: "securing-financial-systems-cybersecurity",
        summary: "An in-depth look at how we secure financial transactions, sensitive customer databases, and mortgage pipelines from modern threat vectors.",
        content: `### Protecting Core Financial Datasets

With cyberattacks increasing in frequency and sophistication, financial infrastructure requires proactive, zero-trust security postures. At **Navayuva Bharati Infotech**, security is not an afterthought; it is built into the foundation of every line of code we write.

#### Our Zero-Trust Cybersecurity Pillars:

* **Role-Based Microsegmentation**: We ensure that access to financial records and customer PII (Personally Identifiable Information) is strictly controlled on a need-to-know basis.
* **End-to-End Cryptographic Enveloping**: All data, whether in transit over HTTPS or at rest in our SQLite/Postgres datastores, is encrypted using military-grade AES-256.
* **Continuous Vulnerability Remediation**: By integrating automated dependency scanning and static analysis in our pipelines, we identify and patch vulnerabilities before deployment.

Implementing these practices has allowed us to help major banks and credit organizations pass SOC2 and ISO 27001 audits with flying colors.`,
        coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000",
        status: "PUBLISHED",
        tags: "Cybersecurity,Security,Finance",
        readingTime: 6,
        seoTitle: "Financial System Security Best Practices | NYB Infotech",
        seoDescription: "Explore the zero-trust security pillars used by Navayuva Bharati Infotech to safeguard financial databases and mortgage applications."
      }
    });

    console.log("Mock blogs seeded successfully.");
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
