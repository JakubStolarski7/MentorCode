// app/rozwiazanie/page.tsx
import { SolutionHeader } from "@/components/solution-header"
import { SolutionPageClient } from "./SolutionPageClient"; // Import nowego komponentu klientowego

export default function SolutionPage() {
  return (
    <div className="min-h-screen bg-background">
      <SolutionHeader />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Renderujemy logikę ładowania/stanu w komponencie klientowym */}
        <SolutionPageClient /> 
      </main>
    </div>
  )
}