import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ONasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Pomagamy polskim programistom myśleć, nie kopiować
            </h1>
            <p className="text-lg text-muted-foreground text-balance">
              MentorCode powstał z frustracji - widzieliśmy zbyt wielu studentów kopiujących kod bez zrozumienia
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 px-4">
          <div className="container max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Nasza historia</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Zaczęło się od prostego pytania: dlaczego tak wielu studentów informatyki kopiuje kod ze Stack Overflow,
                nie rozumiejąc, co robią? Dlaczego nikt nie tłumaczy im DLACZEGO coś działa, tylko POKAZUJE gotowe
                rozwiązanie?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                MentorCode to odpowiedź na ten problem. Stworzyliśmy platformę, która nie tylko podaje gotowe
                rozwiązania, ale uczy myśleć jak programista. Każde wyjaśnienie to mini-lekcja z mentorem, który
                przeprowadza Cię przez logikę rozwiązania krok po kroku.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Jesteśmy małym zespołem pasjonatów z Polski, którzy wierzą, że programowanie to umiejętność myślenia,
                nie kopiowania. Chcemy, aby każdy polski programista miał dostęp do wysokiej jakości edukacji w swoim
                języku.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nasza misja</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-3">Zrozumienie {">"} Kopiowanie</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nie chcemy, abyś kopiował kod. Chcemy, abyś go rozumiał i potrafił napisać samodzielnie.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-3">Edukacja dla każdego</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wysokiej jakości materiały edukacyjne powinny być dostępne dla wszystkich, nie tylko dla elit.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-3">Polska społeczność</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Budujemy wspólnotę polskich programistów, którzy wspierają się nawzajem w nauce.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - usunięto link do kariera */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Dołącz do naszej misji</h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Pomóż nam zmienić sposób, w jaki Polacy uczą się programowania
            </p>
            <Link href="/zapytaj">
              <Button size="lg">Zacznij naukę</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
