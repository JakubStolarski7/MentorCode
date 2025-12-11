import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Nowe Importy dla Uwierzytelniania i Powiadomień
import SessionProvider from "@/components/session-provider";
import { Toaster } from "@/components/ui/toaster";

// Używamy Inter font dla czystego, nowoczesnego stylu edukacyjnego
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  // Zaktualizowane metadane dla MentorCode
  title: "MentorCode – Naucz się myśleć jak programista",
  description: "Każde rozwiązanie zawiera dokładną analizę : co, jak i – co najważniejsze – dlaczego.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl"> {/* Zmieniono lang="en" na lang="pl" (zgodnie z poprzednimi ustaleniami) */}
      <body className={`${inter.className} antialiased`}>
        {/* Właściwy order: SessionProvider musi otaczać ThemeProvider, jeśli ThemeProvider musi mieć dostęp do sesji. */}
        <SessionProvider>
          {/* Usunięto błąd: komentarz wewnątrz JSX nie może być otoczony klamrami {} */}
          <ThemeProvider defaultTheme="light" attribute="class"> 
            {children}
            <Toaster />
          </ThemeProvider>
        </SessionProvider>
        <Analytics />
      </body>
    </html>
  )
}