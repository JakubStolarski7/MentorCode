"use client"

import { AskMentorHeader } from "@/components/ask-mentor-header"
import { MainQuestionForm } from "@/components/main-question-form"
import { HowItWorksCards } from "@/components/how-it-works-cards"
import { LiveExampleSection } from "@/components/live-example-section"
import { Footer } from "@/components/footer"
import { useSearchParams } from "next/navigation"
import { Suspense, useState, useEffect } from "react"
import { ProblemStatement } from "@/components/problem-statement"
import { SolutionTabs } from "@/components/solution-tabs"
import { SolutionActions } from "@/components/solution-actions"

function AskMentorContent() {
  const searchParams = useSearchParams()
  const lang = searchParams.get("lang") || "python"
  const [showSolution, setShowSolution] = useState(false)
  const [userQuestion, setUserQuestion] = useState("")
  const [explanation, setExplanation] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (lang) {
      // Scroll do formularza po załadowaniu strony
      setTimeout(() => {
        document.getElementById("question-form")?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    }
  }, [lang])

  // const handleQuestionSubmit = (question: string) => {
  //   setUserQuestion(question)
  //   setShowSolution(true)
  //   // Przewiń do odpowiedzi
  //   setTimeout(() => {
  //     document.getElementById("solution-section")?.scrollIntoView({ behavior: "smooth" })
  //   }, 100)
  // }
  // W app/zapytaj/page.tsx — zastąp handleQuestionSubmit
const handleQuestionSubmit = async (question: string) => {
  setLoading(true);
  setError(null);

  try {
    const res = await fetch("/api/explain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, language: lang }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Błąd API");
    }

    // ✅ Wyciągamy kod z odpowiedzi AI (szukamy ```kod```)
    const codeMatch = data.answer?.match(/```(?:\w+)?\n([\s\S]*?)\n```/);
    const extractedCode = codeMatch ? codeMatch[1].trim() : "// Brak kodu";

    // ✅ Zapisujemy pełne dane + wyciągnięty kod
    setExplanation({
      ...data,
      code: extractedCode,
    });
    setShowSolution(true);

    setTimeout(() => {
      document.getElementById("solution-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);

  } catch (err: any) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div
      className="min-h-screen flex flex-col bg-background dark:bg-slate-950 relative overflow-hidden"
      data-language={lang}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 top-[600px] h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute left-1/4 top-[1000px] h-[350px] w-[350px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <AskMentorHeader language={lang} />
      <main className="flex-1">
        <MainQuestionForm language={lang} onSubmit={handleQuestionSubmit} />

        {/* {showSolution && (
          <section id="solution-section" className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
            <ProblemStatement userQuestion={userQuestion} />
            <SolutionTabs />
            <SolutionActions />
          </section>
        )} */}
        {showSolution && explanation && (
          <section id="solution-section" className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
            <ProblemStatement userQuestion={explanation.question} />
            <SolutionTabs explanation={explanation} />
            <SolutionActions />
          </section>
        )}

        {!showSolution && (
          <>
            <HowItWorksCards />
            <LiveExampleSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default function AskMentorPage() {
  return (
    <Suspense fallback={<div>Ładowanie...</div>}>
      <AskMentorContent />
    </Suspense>
  )
}
