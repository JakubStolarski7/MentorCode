"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

// ROZSZERZONA DEFINICJA TYPÓW:
// Używamy React.HTMLAttributes<HTMLDivElement> lub podobnego, aby zaakceptować
// dodatkowe propsy, takie jak 'attribute', które mogą być przekazane.
// Dla prostoty i pewności typowania, użyjemy generycznego podejścia,
// które zaakceptuje atrybuty elementu div (lub innych) i nasze własne.
type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  // Dodajemy index signature, aby akceptować dowolne dodatkowe propsy (np. 'attribute')
  [key: string]: any; 
}

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Akceptujemy wszystkie propsy, nawet te, których nie używamy (np. 'attribute')
export function ThemeProvider({ children, defaultTheme = "light", ...props }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  // NOTE: Ta implementacja używa localStorage i manipuluje klasami CSS ręcznie, 
  // zamiast polegać na bibliotece next-themes.

  useEffect(() => {
    setMounted(true)
    // Zmieniono: używamy window.localStorage, aby uniknąć ewentualnego błędu typu
    const savedTheme = (window.localStorage.getItem("theme") as Theme | null) 
    if (savedTheme) {
      setThemeState(savedTheme)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)

    window.localStorage.setItem("theme", theme)
  }, [theme, mounted])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"))
  }

  return <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}