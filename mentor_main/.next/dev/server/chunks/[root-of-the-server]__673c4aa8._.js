module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/mentor_main/app/api/explain/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/api/explain/route.ts
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/openai/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/mentor_main/node_modules/openai/client.mjs [app-route] (ecmascript) <export OpenAI as default>");
;
;
const openai = new __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
    apiKey: process.env.OPENAI_API_KEY
});
// ... (Funkcja getLanguageDetails bez zmian)
const getLanguageDetails = (lang)=>{
    const l = lang.toLowerCase().trim();
    switch(l){
        case "python":
            return {
                name: "Python",
                details: "Używaj składni Python 3.11+. Pamiętaj o wcięciach, duck typing, list comprehensions i typowaniu (np. def f(x: int) -> bool)."
            };
        case "javascript":
            return {
                name: "JavaScript",
                details: "Używaj ES2023+. Pamiętaj o różnicach: let/const, funkcje strzałkowe, async/await, i braku statycznego typowania."
            };
        case "java":
            return {
                name: "Java",
                details: "Używaj Java 17+. Pamiętaj o typach generycznych, interfejsach, konwencjach (camelCase), i ścisłym typowaniu."
            };
        case "cpp":
            return {
                name: "C++",
                details: "Używaj C++17. Pamiętaj o: wskaźnikach vs referencjach, RAII, zarządzaniu pamięcią (new/delete), i różnicach stack/heap."
            };
        case "csharp":
            return {
                name: "C#",
                details: "Używaj C# 10+. Pamiętaj o: właściwościach, LINQ, async/await, namespace’ach i typach referencyjnych/wartościowych."
            };
        default:
            return {
                name: l.charAt(0).toUpperCase() + l.slice(1),
                details: `Używaj typowych konstrukcji języka ${l}. Dostosuj wyjaśnienia do jego składni i filozofii.`
            };
    }
};
async function POST(req) {
    try {
        const { question, language = "python" } = await req.json();
        // Walidacja
        if (!question || typeof question !== 'string' || question.trim().length < 5) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Pytanie musi mieć co najmniej 5 znaków.'
            }, {
                status: 400
            });
        }
        // Pobierz szczegóły języka
        const langDetails = getLanguageDetails(language);
        // SYSTEM PROMPT: Wzmożone wymagania edukacyjne i RYGORYSTYCZNE ZASADY FORMATOWANIA
        const SYSTEM_PROMPT = `Jesteś polskim mentorem programowania, Twoim jedynym celem jest przeprowadzenie **kompletnej, dogłębnej, dydaktycznej lekcji** dla ucznia. Odpowiedź musi być zrozumiała, wyczerpująca i **PERFEKCYJNIE ZFORMATOWANA**.
Dzisiaj tłumaczysz złożone koncepcje w języku: **${langDetails.name}**.

Szczegóły kontekstowe:
${langDetails.details}

Zasady formatowania i generowania odpowiedzi:
1. Odpowiadaj WYŁĄCZNIE po polsku.
2. Odpowiedź MUSI mieć 4 **bardzo szczegółowe** sekcje, dokładnie w tej kolejności.

Instrukcje dla każdej sekcji:
✅ **Kod**: Zawsze umieść **kompletne, działające** rozwiązanie w bloku \`\`\`${language}\n...\n\`\`\`. **KRYTYCZNE**: Wcięcia w kodzie Pythona muszą być zachowane (używaj 4 spacji/tabulatorów). Kod ma być czytelny i zgodny z PEP 8.
🧠 **Jak to działa?**: To jest serce lekcji. Używaj nagłówków Markdown (np. ### Teoria) i list numerowanych/punktowanych. Wyjaśnienie musi mieć **dwie fazy**:
    a) **Teoria i Kontekst**: Głęboko wyjaśnij podstawowe koncepcje. Używaj **pogrubień** dla kluczowych terminów i formatowania matematycznego LaTeX (\`$...\$\` dla równań inline).
    b) **Analiza Implementacji**: Przeanalizuj *każdą część* kodu z sekcji ✅ **Kod**.
⚠️ **Typowe błędy**: Podaj **przynajmniej trzy** realne błędy. Używaj **list numerowanych**. Dla każdego błędu, użyj formatowania pogrubionego, aby opisać: **1. Przyczyna**, **2. Konsekwencje**, **3. Unikanie**.
🔁 **Inne podejścia**: Podaj **przynajmniej dwa** alternatywne, bardziej zaawansowane rozwiązania. Używaj list punktowanych. **Szczegółowo wyjaśnij** ich zalety (np. złożoność $O(\log n)$) i **kontekst użycia**.

3. Po każdej sekcji używaj dwóch nowych linii, aby zapewnić czytelne odstępy.
4. Nie dodawaj wstępu, ani podsumowania. Zacznij bezpośrednio od ✅.`;
        // Używamy GPT-4o Mini
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: SYSTEM_PROMPT.trim()
                },
                {
                    role: "user",
                    content: `Pytanie ucznia: "${question.trim()}"\n\nWygeneruj pełną, dydaktyczną lekcję zgodnie z rygorystycznymi zasadami formatowania, aby treść była MAKSYMALNIE czytelna.`
                }
            ],
            max_tokens: 4000
        });
        // Ekstrakcja i walidacja odpowiedzi
        const answer = response.choices[0]?.message?.content?.trim();
        if (!answer || answer.length < 500) {
            throw new Error("Model nie wygenerował wystarczająco obszernej odpowiedzi. Sprawdź limit max_tokens.");
        }
        // Sukces
        return __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            question: question.trim(),
            answer,
            language
        });
    } catch (error) {
        let errorMessage = "Nie udało się wygenerować wyjaśnienia. Spróbuj ponownie.";
        if (error.message.includes("does not exist") || error.message.includes("404")) {
            errorMessage = "BŁĄD MODELU: Model gpt-4o-mini nie jest dostępny. Użyj 'gpt-3.5-turbo'.";
        } else if (error.message.includes("API key")) {
            errorMessage = "BŁĄD KLUCZA API: Sprawdź klucz OPENAI_API_KEY.";
        } else if (error.message.includes("rate limit")) {
            errorMessage = "Przekroczono limit zapytań do API. Spróbuj za chwilę.";
        }
        console.error("[AI Error]", error.message);
        return __TURBOPACK__imported__module__$5b$project$5d2f$mentor_main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: errorMessage
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__673c4aa8._.js.map