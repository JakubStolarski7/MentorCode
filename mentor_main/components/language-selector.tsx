"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"

export function LanguageSelector() {
  const languages = [
    { name: "Python", slug: "python", icon: "🐍", color: "bg-blue-500" },
    { name: "JavaScript", slug: "javascript", icon: "⚡", color: "bg-yellow-500" },
    { name: "Java", slug: "java", icon: "☕", color: "bg-red-500" },
    { name: "C++", slug: "cpp", icon: "⚙️", color: "bg-blue-600" },
  ]

  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 text-balance">
            Wybierz język
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-pretty">
            Otrzymaj precyzyjne wyjaśnienia dopasowane do składni i stylu Twojego języka programowania.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {languages.map((lang) => (
              <Link key={lang.name} href={`/zapytaj?lang=${lang.slug}`}>
                <Card className="p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group bg-card">
                  <div className="flex flex-col items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl ${lang.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}
                    >
                      {lang.icon}
                    </div>
                    <span className="text-sm font-semibold text-card-foreground">{lang.name}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Wkrótce dostępne będą kolejne języki: Go, Rust, TypeScript i Ruby.
          </p>
        </div>
      </div>
    </section>
  )
}
