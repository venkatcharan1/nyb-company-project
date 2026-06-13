import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import path from "path";

const prismaClientSingleton = () => {
  const rawPath = process.env.DATABASE_URL || "file:./dev.db";
  
  // Resolve absolute path for SQLite
  let url = rawPath;
  if (rawPath.startsWith("file:")) {
    const filePath = rawPath.replace("file:", "");
    if (!path.isAbsolute(filePath)) {
      const absolutePath = path.join(process.cwd(), "prisma", filePath);
      url = `file:${absolutePath}`;
    }
  }

  const adapter = new PrismaBetterSqlite3({ url });
  
  return new PrismaClient({ adapter });
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
