"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Logo - lewa strona */}
          <div className="flex justify-start">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-semibold text-foreground">MentorCode</span>
            </Link>
          </div>

          {/* Nawigacja - środek */}
          <nav className="hidden md:flex items-center gap-6 justify-center">
            <Link
              href="/jak-to-dziala"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Jak to działa
            </Link>
            <Link
              href="/cennik"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Cennik
            </Link>
            <Link
              href="/o-nas"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              O nas
            </Link>
          </nav>

          {/* Przyciski - prawa strona */}
          <div className="flex items-center gap-3 justify-end">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                Zaloguj się
              </Button>
            </Link>
            <Link href="/zapytaj">
              <Button size="sm">Zacznij już dziś</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
