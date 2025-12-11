import { Brain, AlertTriangle, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function HowItWorksCards() {
  const features = [
    {
      icon: Brain,
      title: "Myślenie krok po kroku",
      description: "Nie podajemy tylko kodu — tłumaczymy, jak do niego dojść.",
    },
    {
      icon: AlertTriangle,
      title: "Typowe pułapki",
      description: "Wskazujemy błędy, które kosztują punkty na kolokwiach i maturze.",
    },
    {
      icon: BookOpen,
      title: "Głębszy kontekst",
      description: "Łączymy zadanie z teorią — np. złożoność, wzorce projektowe, architektura.",
    },
  ]

  return (
    <section className="px-4 md:px-6 py-16 md:py-20 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/2 h-[300px] w-[300px] rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground dark:text-slate-100 mb-12">
          Jak to działa?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-colors bg-card/80 backdrop-blur-sm dark:bg-slate-800/80 dark:border-slate-700"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground dark:text-slate-100">{feature.title}</h3>
                  <p className="text-muted-foreground dark:text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
