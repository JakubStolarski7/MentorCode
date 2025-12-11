import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Mail, Book } from "lucide-react"
import Link from "next/link"

export default function PomocPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Jak możemy Ci pomóc?</h1>
            <p className="text-lg text-muted-foreground text-balance">
              Znajdź odpowiedzi na często zadawane pytania lub skontaktuj się z nami bezpośrednio
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 px-4">
          <div className="container max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Discord</h3>
                <p className="text-muted-foreground mb-4">Dołącz do naszej społeczności i uzyskaj błyskawiczną pomoc</p>
                <a href="https://discord.gg/mentorcode" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Dołącz do Discord</Button>
                </a>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">Napisz do nas, odpowiemy w ciągu 24h</p>
                <a href="mailto:pomoc@mentorcode.pl">
                  <Button variant="outline">pomoc@mentorcode.pl</Button>
                </a>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Book className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Dokumentacja</h3>
                <p className="text-muted-foreground mb-4">Przewodniki i tutoriale krok po kroku</p>
                <Link href="/jak-to-dziala">
                  <Button variant="outline">Przejdź do dokumentacji</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Często zadawane pytania</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Jak mogę zacząć korzystać z MentorCode?</h3>
                <p className="text-sm text-muted-foreground">
                  Po prostu przejdź do strony głównej i kliknij "Zacznij już dziś". Nie potrzebujesz karty kredytowej,
                  aby wypróbować podstawowe funkcje.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Czy mogę zmienić plan w każdej chwili?</h3>
                <p className="text-sm text-muted-foreground">
                  Tak, możesz w każdej chwili przejść na wyższy plan lub anulować subskrypcję bez żadnych zobowiązań.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Jakie języki programowania wspieracie?</h3>
                <p className="text-sm text-muted-foreground">
                  Obecnie wspieramy Python, JavaScript, Java i C++. Planujemy dodać więcej języków w przyszłości.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Czy oferujecie zwrot pieniędzy?</h3>
                <p className="text-sm text-muted-foreground">
                  Tak, oferujemy 14-dniową gwarancję zwrotu pieniędzy bez zadawania pytań.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4">
          <div className="container max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Skontaktuj się z nami</h2>
            <div className="bg-card p-8 rounded-xl border border-border">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Imię
                  </label>
                  <Input id="name" placeholder="Jan Kowalski" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="jan@example.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Temat
                  </label>
                  <Input id="subject" placeholder="Mam pytanie dotyczące..." />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Wiadomość
                  </label>
                  <Textarea id="message" placeholder="Opisz swój problem..." rows={6} />
                </div>
                <Button type="submit" className="w-full">
                  Wyślij wiadomość
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
