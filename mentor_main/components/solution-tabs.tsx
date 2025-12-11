// @/components/solution-tabs.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block"; // Zakładamy, że CodeBlock istnieje
import { ExplanationSection } from "@/components/explanation-section";

// Uproszczona definicja typu dla SolutionTabsProps
interface SolutionTabsProps {
    // W SolutionTabsProps musi być możliwość przyjęcia undefined, ponieważ
    // w SolutionPageClient.tsx (stan ładowania) jest na początku undefined.
    explanation?: { 
        answer?: string; 
        error?: string; 
        code?: string;
        language?: string;
    };
}

// 🛑 Zmieniamy wymóg na opcjonalny "?" w typowaniu, aby uniknąć błędów
export function SolutionTabs({ explanation }: SolutionTabsProps) {
    const [activeTab, setActiveTab] = useState<"explanation" | "solution">("explanation");
    
    // Wydobywamy kod i język (musimy polegać na tym, że są w explanation)
    const code = explanation?.code || 'Ładowanie kodu...';
    const language = explanation?.language || 'python'; // Domyślny język, gdy dane się ładują

    return (
        <div className="mb-8">
            <div className="flex gap-2 mb-6 border-b">
                <Button
                    variant={activeTab === "explanation" ? "default" : "ghost"}
                    onClick={() => setActiveTab("explanation")}
                    className="rounded-b-none"
                >
                    Wyjaśnienie
                </Button>
                <Button
                    variant={activeTab === "solution" ? "default" : "ghost"}
                    onClick={() => setActiveTab("solution")}
                    className="rounded-b-none"
                >
                    Rozwiązanie
                </Button>
            </div>

            {activeTab === "explanation" ? (
                // PRZEKAZUJEMY explanation (może być undefined, obsłużone w ExplanationSection)
                <ExplanationSection explanation={explanation} />
            ) : (
                <div className="rounded-lg border bg-card p-6">
                    {/* Przekazujemy domyślne/załadowane wartości do CodeBlock */}
                    <CodeBlock code={code} language={language} /> 
                </div>
            )}
        </div>
    );
}