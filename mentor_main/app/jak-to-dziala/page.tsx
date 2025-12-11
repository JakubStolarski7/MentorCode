import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function JakToDzialaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Jak działa MentorCode?</h1>
            <p className="text-lg text-muted-foreground text-balance">
              Poznaj platformę krok po kroku i zobacz, jak możemy pomóc Ci w nauce programowania
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 px-4">
          <div className="container max-w-5xl mx-auto">
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-sm font-semibold text-primary mb-2">KROK 1</div>
                  <h2 className="text-3xl font-bold mb-4">Zadaj swoje pytanie</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Wklej treść zadania programistycznego, opisz problem, lub zapytaj o konkretny koncept. Możesz
                    również wkleić fragment kodu, który chcesz zrozumieć.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Wybierz język programowania (Python, JavaScript, Java, C++) i poziom szczegółowości wyjaśnienia.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-xl p-8 border border-border">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="text-sm text-muted-foreground mb-2">Twoje pytanie:</div>
                    <div className="font-mono text-sm bg-muted p-3 rounded">
                      Napisz funkcję, która sprawdza, czy dany napis jest palindromem
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 bg-muted/50 rounded-xl p-8 border border-border">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <div className="text-sm font-semibold mb-2">Rozwiązanie + Wyjaśnienie</div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span>Kod rozwiązania</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span>Jak to działa? (krok po kroku)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span>Typowe błędy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span>Alternatywne podejścia</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="text-sm font-semibold text-primary mb-2">KROK 2</div>
                  <h2 className="text-3xl font-bold mb-4">Otrzymaj szczegółowe wyjaśnienie</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Nie dostaniesz tylko kodu - otrzymasz kompletne wyjaśnienie jak od mentora. Każde rozwiązanie
                    zawiera:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Kod rozwiązania z komentarzami</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Krok po kroku jak działa algorytm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Najczęstsze błędy i jak ich unikać</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Alternatywne rozwiązania i porównanie</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-sm font-semibold text-primary mb-2">KROK 3</div>
                  <h2 className="text-3xl font-bold mb-4">Naucz się i zastosuj</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Zapisz rozwiązanie do swoich ulubionych, aby móc do niego wrócić. Zadaj dodatkowe pytania na
                    Discordzie, jeśli czegoś nie rozumiesz.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Najważniejsze: spróbuj napisać kod samodzielnie po przeczytaniu wyjaśnienia. To tak uczysz się
                    najlepiej - przez zrozumienie, nie kopiowanie.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-xl p-8 border border-border">
                  <div className="bg-card p-6 rounded-lg border border-border text-center">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="font-semibold mb-2">Cel osiągnięty!</h3>
                    <p className="text-sm text-muted-foreground">
                      Rozumiesz problem, znasz rozwiązanie, potrafisz wyjaśnić dlaczego to działa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Gotowy, aby spróbować?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Zacznij już teraz i zobacz, jak MentorCode pomaga zrozumieć programowanie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/zapytaj">
                <Button size="lg">Zadaj pierwsze pytanie</Button>
              </Link>
              <Link href="/rozwiazanie">
                <Button size="lg" variant="outline">
                  Zobacz przykład
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
