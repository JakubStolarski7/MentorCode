"use client";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import React from "react";

/**
 * Otoczenie aplikacji w SessionProvider z NextAuth.js, 
 * co pozwala na użycie hooka useSession() w komponentach klienckich.
 */
export default function SessionProvider({ children }: { children: React.ReactNode }) {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
}