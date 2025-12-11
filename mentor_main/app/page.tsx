import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MockupSection } from "@/components/mockup-section"
import { LanguageSelector } from "@/components/language-selector"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-20 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-1/4 top-[800px] h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute left-1/3 top-[1400px] h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>
      <Header />
      <main>
        <Hero />
        <MockupSection />
        <LanguageSelector />
      </main>
      <Footer />
    </div>
  )
}
