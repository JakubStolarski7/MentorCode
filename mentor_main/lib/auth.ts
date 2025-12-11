import { PrismaAdapter } from "@auth/prisma-adapter";
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma"; // Zakładamy, że masz ten plik dla klienta Prismy

/**
 * Rozszerzenie sesji i użytkownika NextAuth, aby bezpiecznie przechowywać userId.
 * @see https://next-auth.js.org/configuration/nextjs
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
    };
  }

  interface User {
    id: string;
  }
}

/**
 * Opcje konfiguracji dla NextAuth.js.
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  // 1. Adapter Prisma do zarządzania danymi użytkowników w bazie
  adapter: PrismaAdapter(prisma), 

  // 2. Konfiguracja strategii sesji (używamy JWT dla bezpieczeństwa i bezstanowości)
  session: {
    strategy: "jwt",
  },
  
  // 3. Konfiguracja dostawców (Providers)
  providers: [
    // Dostawca Logowania/Rejestracji poprzez email/hasło (CredentialsProvider)
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Hasło", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        // Sprawdzenie, czy użytkownik istnieje
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.hashedPassword) {
          return null;
        }

        // Weryfikacja hasła
        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.hashedPassword,
        );

        if (!isPasswordValid) {
          return null;
        }

        // Jeśli wszystko poprawne, zwracamy użytkownika (NextAuth go zautoryzuje)
        return user;
      },
    }),
    // Możesz dodać GoogleProvider, GitHubProvider itp.
  ],
  
  // 4. Konfiguracja Callbacks, aby dodać userId do sesji
  callbacks: {
    session: ({ session, token }) => {
      // W przypadku strategii "jwt", user.id jest przekazywane przez token
      if (token && session.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
    jwt: async ({ token, user }) => {
        // W przypadku logowania przez Credentials, NextAuth przekazuje pełny obiekt user, 
        // ale w kolejnych wywołaniach mamy tylko token
        if (user) {
          token.sub = user.id;
        }
        return token;
    },
  },
  
  // 5. Ustawienia stron
  pages: {
    signIn: "/login", // Przekierowanie na stronę logowania
    error: "/login", // Przekierowanie do logowania w przypadku błędu
  },
};

/**
 * Wygodna funkcja do użycia w komponentach po stronie serwera (Server Components/Actions)
 */
export function getServerAuthSession(ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) {
  return getServerSession(ctx.req, ctx.res, authOptions);
}