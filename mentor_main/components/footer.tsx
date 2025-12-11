import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="text-lg font-semibold text-foreground">MentorCode</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Programowanie to logika, nie kopiowanie. Naucz się myśleć jak ekspert.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Dla polskich studentów i samouków 🇵🇱</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Produkt</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/funkcje" className="text-muted-foreground hover:text-foreground transition-colors">
                  Funkcje
                </Link>
              </li>
              <li>
                <Link href="/cennik" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cennik
                </Link>
              </li>
              <li>
                <Link href="/zapytaj" className="text-muted-foreground hover:text-foreground transition-colors">
                  Języki
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Firma</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/o-nas" className="text-muted-foreground hover:text-foreground transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="/pomoc" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pomoc
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Społeczność</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://discord.gg/mentorcode"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@mentorcode"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/mentorcode"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2025 MentorCode. Wszystkie prawa zastrzeżone.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Prywatność
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Warunki
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
