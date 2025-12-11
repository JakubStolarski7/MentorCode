import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Nowość: Python & JavaScript Support
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Programowanie to logika, nie kopiowanie
            <br />
            <span className="text-primary">Naucz się myśleć jak ekspert</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl text-pretty leading-relaxed">
            Każde rozwiązanie zawiera dokładną analizę : co, jak i – co najważniejsze –
            <span className="font-semibold text-foreground"> dlaczego</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2 text-base px-8 h-12" asChild>
              <a href="/zapytaj">
                Wypróbuj już teraz
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12 bg-transparent" asChild>
              <a href="/rozwiazanie">Zobacz Demo</a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">Karta kredytowa nie jest wymagana</p>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>
    </section>
  )
}
