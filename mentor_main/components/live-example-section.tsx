"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function LiveExampleSection() {
  const [showResult, setShowResult] = useState(false)

  return (
    <section className="px-4 md:px-6 py-16 md:py-24 max-w-7xl mx-auto bg-background dark:bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground dark:text-slate-100 mb-12">
          Zobacz przykład w akcji
        </h2>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          {/* Left: Question */}
          <Card className="border-2 dark:bg-slate-800 dark:border-slate-700">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium">
                  Pytanie
                </div>
                <p className="text-lg text-foreground dark:text-slate-100 leading-relaxed">
                  Jak sprawdzić, czy liczba jest pierwsza w Pythonie?
                </p>
                <Button onClick={() => setShowResult(true)} className="w-full gap-2" disabled={showResult}>
                  Pokaż odpowiedź
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Right: Result preview */}
          <Card
            className={`border-2 dark:bg-slate-800 dark:border-slate-700 transition-all duration-500 ${showResult ? "opacity-100" : "opacity-40 blur-sm"}`}
          >
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 dark:bg-accent/30 text-accent dark:text-teal-300 text-sm font-medium">
                  Odpowiedź mentora
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground dark:text-slate-100">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Jak to działa?
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground dark:text-slate-100">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    Typowe błędy
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground dark:text-slate-100">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Inne podejścia
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground dark:text-slate-100">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    Głębiej w temat
                  </div>
                </div>
                {showResult && (
                  <div className="pt-4 border-t border-border dark:border-slate-700">
                    <p className="text-sm text-muted-foreground dark:text-slate-400 mb-4">
                      Tak wygląda pełne wyjaśnienie…
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full gap-2 bg-transparent dark:bg-slate-700 dark:border-slate-600 dark:hover:bg-slate-600 dark:text-slate-100"
                    >
                      <Link href="/rozwiazanie">
                        Zobacz wersję demo
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
