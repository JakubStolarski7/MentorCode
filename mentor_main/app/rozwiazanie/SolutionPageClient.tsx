// app/rozwiazanie/SolutionPageClient.tsx
"use client"

import { useState, useEffect } from 'react';
import { ProblemStatement } from "@/components/problem-statement";
import { SolutionTabs } from "@/components/solution-tabs";
import { SolutionActions } from "@/components/solution-actions";
// Definiujemy typ oczekiwany od API
interface Explanation {
    answer?: string;
    error?: string;
}

export function SolutionPageClient() {
    // Stan do przechowywania odpowiedzi z API
    const [explanation, setExplanation] = useState<Explanation | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Symulacja pobierania danych (tutaj umieścisz swoją logikę API)
        const fetchExplanation = async () => {
            try {
                // Założenia dla demonstracji:
                const question = "Napisz klasę implementującą iterator ciągu Fibonacciego...";
                const language = "python";

                const response = await fetch('/api/explain', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ question, language }),
                });

                const data = await response.json();

                if (!response.ok) {
                    setExplanation({ error: data.error || "Wystąpił nieznany błąd serwera API." });
                } else {
                    setExplanation({ answer: data.answer });
                }
            } catch (err) {
                console.error("Błąd podczas pobierania danych:", err);
                setExplanation({ error: "Nie udało się połączyć z API." });
            } finally {
                setIsLoading(false);
            }
        };

        fetchExplanation();
    }, []); // Uruchom tylko raz po załadowaniu komponentu

    // Renderowanie stanu ładowania lub błędu
    if (isLoading) {
        // Możesz dodać ładniejszy spinner, ale to wystarczy na początek
        return (
            <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
                <p className="text-xl text-center text-muted-foreground">Ładowanie lekcji...</p>
            </div>
        );
    }
    
    // 🛑 KLUCZOWY MOMENT: Przekazywanie explanation do SolutionTabs
    // Rozwiązuje to błąd, ponieważ SolutionTabs otrzyma poprawną wartość (lub obiekt błędu)
    return (
        <>
            <ProblemStatement />
            {/* PRZEKAZUJEMY PROP: */}
            <SolutionTabs explanation={explanation} /> 
            <SolutionActions />
        </>
    );
}