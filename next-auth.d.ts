import type { DefaultSession, JWT } from "next-auth";
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    username?: string;
    user: {
      username?: string;
    } & DefaultSession["user"];
  }
  interface Profile {
    login?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username?: string;
  }
}
