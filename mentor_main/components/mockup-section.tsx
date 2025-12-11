"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronRight, Lightbulb, AlertCircle, BookOpen, Zap } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function MockupSection() {
  const [expandedSection, setExpandedSection] = useState<string | null>("how")

  const sections = [
    {
      id: "jak",
      title: "Jak to działa",
      icon: Zap,
      content:
        "Przeglądamy ciąg znaków od obu końców. Technika dwóch wskaźników pozwala nam efektywnie porównywać znaki w czasie O(n/2).",
      color: "text-primary",
    },
    {
      id: "dlaczego",
      title: "Dlaczego takie podejście?",
      icon: Lightbulb,
      content:
        "W tym przypadku optymalne są dwa wskaźniki, ponieważ musimy zweryfikować symetrię. Odwrócenie całego ciągu znaków wymagałoby dodatkowej przestrzeni i czasu O(n).",
      color: "text-accent",
    },
    {
      id: "błędy",
      title: "Typowe błędy",
      icon: AlertCircle,
      content:
        "Zapominanie o uwzględnieniu wielkości liter i znaków specjalnych. Zawsze najpierw normalizuj dane wejściowe!",
      color: "text-destructive",
    },
    {
      id: "głębiej",
      title: "Zagłęb się jeszcze bardziej",
      icon: BookOpen,
      content:
        "Wzorzec ten ma zastosowanie w wielu problemach: sprawdzaniu poprawności palindromów w listach połączonych, wyszukiwaniu par w posortowanych tablicach oraz problemach związanych z kontenerami.",
      color: "text-chart-2",
    },
  ]

  return (
    <section className="py-20 md:py-32 relative">
      {/* Decorative background with gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 text-balance">
            Zobacz różnicę
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Nie tylko odpowiedź — zrozum proces myślowy stojący za każdym rozwiązaniem.{" "}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Problem Card */}
          <Link href="/rozwiazanie" className="block group">
            <Card className="p-6 bg-card border-2 h-full transition-all hover:border-primary/40 hover:shadow-md cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge variant="secondary" className="mb-3">
                    Problem
                  </Badge>
                  <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    Sprawdź, czy ciąg znaków jest palindromem
                  </h3>
                </div>
                <Badge className="bg-primary text-primary-foreground">Łatwy</Badge>
              </div>

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Napisz funkcję, która pobiera ciąg znaków i zwraca wartość true, jeśli jest to palindrom (czyli ciąg
                znaków, który czyta się tak samo od początku do końca, jak i od końca do początku), a w przeciwnym razie
                zwraca wartość false.
              </p>

              <div className="space-y-3">
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">Przykład:</p>
                  <div className="rounded-md bg-muted p-3 font-mono text-sm">
                    <span className="text-muted-foreground">Input:</span>{" "}
                    <span className="text-foreground">"racecar"</span>
                    <br />
                    <span className="text-muted-foreground">Output:</span> <span className="text-primary">true</span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Solution Card - usunięto Link wrapper z całej karty */}
          <Card className="p-6 bg-card border-2 border-primary/20 h-full transition-all hover:border-primary/50 hover:shadow-md">
            <Link href="/rozwiazanie" className="block group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge className="mb-3 bg-primary text-primary-foreground">Rozwiązanie + Dokładne objaśnienie</Badge>
                  <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    Podejście dwupunktowe
                  </h3>
                </div>
              </div>
            </Link>

            {/* Code Block */}
            <div className="rounded-lg bg-muted/50 dark:bg-slate-900/50 p-4 font-mono text-sm mb-4 border border-border">
              <pre className="text-foreground m-0 p-0 leading-relaxed overflow-x-auto">
                {`def is_palindrome(s):
    left, right = 0, len(s) - 1
    
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    
    return True`}
              </pre>
            </div>

            <div className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon
                const isExpanded = expandedSection === section.id

                return (
                  <div
                    key={section.id}
                    className={cn(
                      "rounded-lg border transition-all",
                      isExpanded ? "bg-accent/5 border-accent/20" : "bg-background border-border",
                    )}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        setExpandedSection(isExpanded ? null : section.id)
                      }}
                      className="flex w-full items-center gap-3 p-3 text-left hover:bg-accent/5 transition-colors rounded-lg"
                    >
                      <Icon className={cn("h-4 w-4", section.color)} />
                      <span className="flex-1 text-sm font-medium text-foreground">{section.title}</span>
                      {isExpanded ? (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="px-3 pb-3 pt-0">
                        <p className="text-sm text-muted-foreground leading-relaxed pl-7">{section.content}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
