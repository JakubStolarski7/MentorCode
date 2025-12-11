import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Brain, Code2, MessageCircle, Lightbulb, CheckCircle2, BookOpen } from "lucide-react"
import Link from "next/link"

export default function FunkcjePage() {
  const features = [
    {
      icon: Brain,
      title: "Wyjaśnienia krok po kroku",
      description: "Nie tylko kod - rozumiemy DLACZEGO coś działa. Każde rozwiązanie rozbijamy na logiczne kroki.",
    },
    {
      icon: Code2,
      title: "Wielojęzykowe wsparcie",
      description: "Python, JavaScript, Java, C++ - wybierz swój język i ucz się w swoim tempie.",
    },
    {
      icon: MessageCircle,
      title: "Społeczność Discord",
      description:
        "Dołącz do tysięcy uczących się programistów. Zadawaj pytania, dziel się wiedzą, rozwijaj się razem.",
    },
    {
      icon: Lightbulb,
      title: "Typowe błędy i pułapki",
      description:
        "Uczymy nie tylko jak pisać kod, ale też czego unikać. Poznaj najczęstsze błędy przed ich popełnieniem.",
    },
    {
      icon: CheckCircle2,
      title: "Alternatywne podejścia",
      description: "Jeden problem, wiele rozwiązań. Porównujemy różne metody i tłumaczymy, kiedy używać każdej z nich.",
    },
    {
      icon: BookOpen,
      title: "Głębsze wyjaśnienia",
      description: "Linki do dodatkowych materiałów, artykułów i źródeł, gdy chcesz zagłębić się w temat.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Wszystko czego potrzebujesz do nauki programowania
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
              MentorCode to więcej niż odpowiedzi - to kompleksowa platforma edukacyjna stworzona dla polskich
              programistów
            </p>
            <Link href="/zapytaj">
              <Button size="lg">Wypróbuj za darmo</Button>
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4">
          <div className="container max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Jak to działa?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Zadaj pytanie</h3>
                <p className="text-muted-foreground">Wklej swoje zadanie programistyczne lub opisz problem</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Otrzymaj wyjaśnienie</h3>
                <p className="text-muted-foreground">Dostaniesz kod + szczegółowe wyjaśnienie jak mentor</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Zrozum i naucz się</h3>
                <p className="text-muted-foreground">Nie kopiuj - zrozum logikę i naucz się myśleć jak programista</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Gotowy, aby zacząć myśleć jak programista?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Dołącz do tysięcy studentów, którzy już uczą się efektywnie z MentorCode
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/zapytaj">
                <Button size="lg">Zacznij już dziś</Button>
              </Link>
              <Link href="/cennik">
                <Button size="lg" variant="outline">
                  Zobacz cennik
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
