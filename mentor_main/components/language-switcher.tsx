"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

interface LanguageSwitcherProps {
  currentLanguage: string
}

export function LanguageSwitcher({ currentLanguage }: LanguageSwitcherProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const languages = [
    { name: "Python", slug: "python", icon: "🐍" },
    { name: "JavaScript", slug: "javascript", icon: "⚡" },
    { name: "Java", slug: "java", icon: "☕" },
    { name: "C++", slug: "cpp", icon: "⚙️" },
  ]

  const currentLang = languages.find((l) => l.slug === currentLanguage) || languages[0]

  const handleLanguageChange = (slug: string) => {
    router.push(`/zapytaj?lang=${slug}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <span>{currentLang.icon}</span>
          <span className="hidden sm:inline">{currentLang.name}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.slug} onClick={() => handleLanguageChange(lang.slug)}>
            <span className="mr-2">{lang.icon}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
