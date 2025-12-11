"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Brain } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface MainQuestionFormProps {
  language: string
  onSubmit?: (question: string) => void
}

export function MainQuestionForm({ language, onSubmit }: MainQuestionFormProps) {
  const [question, setQuestion] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit && question.trim()) {
      onSubmit(question)
    }
  }

  const languageExamples: Record<string, string> = {
    python: '„rekurencja silnia python", „odczyt pliku csv", „błąd IndentationError"',
    javascript: '„asynchroniczne funkcje", „fetch API", „promise vs async/await"',
    java: '„dziedziczenie klas", „ArrayList vs LinkedList", „błąd NullPointerException"',
    cpp: '„wskaźniki i referencje", „błąd segmentation fault", „alokacja pamięci"',
  }

  return (
    <section id="question-form" className="px-4 md:px-6 py-16 md:py-24 max-w-7xl mx-auto relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-slate-100 mb-4 text-balance">
            Zapytaj mentora o swoje zadanie
          </h1>
          <p className="text-lg text-muted-foreground dark:text-slate-400 leading-relaxed text-pretty">
            Wpisz treść zadania — np.{" "}
            <span className="italic">„Napisz program, który oblicza NWD dwóch liczb w C++"</span> — a my przygotujemy
            pełne wyjaśnienie, nie tylko kod.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Textarea
              placeholder="Tu wpisz swoje zadanie z programowania…"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="min-h-[200px] text-base resize-none bg-card dark:bg-slate-900 border-2 dark:border-slate-700 focus:border-primary dark:focus:border-primary transition-colors dark:text-slate-100 dark:placeholder:text-slate-500"
            />
          </div>

          <div className="space-y-4">
            <Button type="submit" size="lg" className="w-full text-base gap-2 h-14">
              <Brain className="h-5 w-5" />
              Przeanalizuj z mentorem
            </Button>

            <p className="text-sm text-muted-foreground dark:text-slate-400 text-center">
              <span className="font-medium">Przykłady:</span> {languageExamples[language] || languageExamples.python}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
