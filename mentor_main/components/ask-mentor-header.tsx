"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { MessageCircle } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import Link from "next/link"

interface AskMentorHeaderProps {
  language: string
}

export function AskMentorHeader({ language }: AskMentorHeaderProps) {
  return (
    <header className="border-b border-border dark:border-slate-800 bg-background/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:supports-[backdrop-filter]:bg-slate-900/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
            <span className="text-primary-foreground font-bold text-lg">M</span>
          </div>
          <span className="text-xl font-semibold text-foreground dark:text-slate-100">MentorCode</span>
        </Link>

        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLanguage={language} />
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild className="gap-2">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Discord</span>
            </a>
          </Button>
          <Button variant="outline" size="sm">
            Zapisz postępy
          </Button>
        </div>
      </div>
    </header>
  )
}
