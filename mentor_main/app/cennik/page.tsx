import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export default function CennikPage() {
  const plans = [
    {
      name: "Darmowy",
      price: "0 zł",
      period: "na zawsze",
      description: "Idealne do rozpoczęcia nauki",
      features: [
        "5 wyjaśnień dziennie",
        "Podstawowe języki (Python, JavaScript)",
        "Dostęp do społeczności Discord",
        "Typowe błędy i pułapki",
      ],
      cta: "Rozpocznij za darmo",
      highlighted: false,
    },
    {
      name: "Student",
      price: "29 zł",
      period: "miesięcznie",
      description: "Dla ambitnych studentów i samouków",
      features: [
        "Nielimitowane wyjaśnienia",
        "Wszystkie języki (Python, JS, Java, C++)",
        "Głębsze wyjaśnienia konceptów",
        "Alternatywne podejścia",
        "Priorytetowe wsparcie",
        "Zapisywanie ulubionych rozwiązań",
      ],
      cta: "Wypróbuj 7 dni za darmo",
      highlighted: true,
    },
    {
      name: "Pro",
      price: "99 zł",
      period: "miesięcznie",
      description: "Dla profesjonalistów i zespołów",
      features: [
        "Wszystko z planu Student",
        "Analiza złożoności algorytmów",
        "Optymalizacja kodu",
        "Wsparcie 1-na-1 z mentorem",
        "Dostęp do ekskluzywnych materiałów",
        "Certyfikaty ukończenia",
      ],
      cta: "Skontaktuj się",
      highlighted: false,
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
              Wybierz plan dopasowany do Twoich potrzeb
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Zaczynaj za darmo, rozwijaj się z planem Student, lub osiągaj więcej z planem Pro
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 px-4">
          <div className="container max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-8 ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground shadow-lg scale-105 border-2 border-primary"
                      : "bg-card text-card-foreground border border-border"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-sm opacity-80 ml-2">{plan.period}</span>
                  </div>
                  <p className={`text-sm mb-6 ${plan.highlighted ? "opacity-90" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                  <Link href="/zapytaj">
                    <Button
                      className={`w-full mb-6 ${
                        plan.highlighted ? "bg-background text-foreground hover:bg-background/90" : ""
                      }`}
                      variant={plan.highlighted ? "secondary" : "default"}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Często zadawane pytania</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Czy mogę anulować w każdej chwili?</h3>
                <p className="text-sm text-muted-foreground">
                  Tak, możesz anulować subskrypcję w dowolnym momencie. Nie ma ukrytych opłat ani zobowiązań.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Czy są zniżki dla studentów?</h3>
                <p className="text-sm text-muted-foreground">
                  Plan Student jest już dostosowany cenowo dla studentów. Oferujemy również zniżki dla grup i uczelni.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Jakie metody płatności akceptujecie?</h3>
                <p className="text-sm text-muted-foreground">
                  Akceptujemy karty kredytowe, BLIK, przelewy bankowe i PayPal.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
