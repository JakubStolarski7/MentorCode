(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/code-block.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// export function CodeBlock() {
//   return (
//     <div className="space-y-4">
//       <div className="flex items-center gap-2 mb-4">
//         <span className="text-2xl">✅</span>
//         <h3 className="text-lg font-semibold text-foreground">Kod</h3>
//       </div>
//       <div className="bg-muted/50 dark:bg-slate-900/50 rounded-lg p-5 border border-border">
//         <pre className="m-0 p-0 text-foreground font-mono text-sm leading-relaxed overflow-x-auto">
//           {`def czy_palindrom(napis):
//     # Usuwamy spacje i zamieniamy na małe litery
//     oczyszczony = napis.replace(" ", "").lower()
//     # Porównujemy z odwróconym napisem
//     return oczyszczony == oczyszczony[::-1]
// # Przykłady użycia
// print(czy_palindrom("kajak"))               # True
// print(czy_palindrom("Kobyła ma mały bok"))  # True
// print(czy_palindrom("python"))              # False`}
//         </pre>
//       </div>
//     </div>
//   )
// }
// @/components/code-block.tsx
__turbopack_context__.s([
    "CodeBlock",
    ()=>CodeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function CodeBlock({ code = "// Kod nie został wygenerowany", language = "python" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl",
                        children: "✅"
                    }, void 0, false, {
                        fileName: "[project]/components/code-block.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-foreground",
                        children: "Kod"
                    }, void 0, false, {
                        fileName: "[project]/components/code-block.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/code-block.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-muted/50 dark:bg-slate-900/50 rounded-lg p-5 border border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    className: "m-0 p-0 text-foreground font-mono text-sm leading-relaxed overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: code
                    }, void 0, false, {
                        fileName: "[project]/components/code-block.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/code-block.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/code-block.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/code-block.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = CodeBlock;
var _c;
__turbopack_context__.k.register(_c, "CodeBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/explanation-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import { CodeBlock } from "@/components/code-block"
// import { ExternalLink } from "lucide-react"
// import Link from "next/link"
// export function ExplanationSection() {
//   return (
//     <div className="space-y-8">
//       {/* Kod */}
//       <div className="rounded-lg border bg-card p-6">
//         <CodeBlock />
//       </div>
//       {/* Jak to działa */}
//       <div className="rounded-lg border bg-card p-6">
//         <div className="flex items-center gap-2 mb-4">
//           <span className="text-2xl">🧠</span>
//           <h3 className="text-lg font-semibold text-foreground">Jak to działa?</h3>
//         </div>
//         <div className="space-y-4 text-muted-foreground leading-relaxed">
//           <div className="space-y-2">
//             <p className="font-medium text-foreground">Krok 1: Czyszczenie napisu</p>
//             <p className="pl-4">
//               Funkcja najpierw usuwa wszystkie spacje z napisu używając{" "}
//               <code className="bg-muted px-2 py-0.5 rounded font-mono text-sm text-foreground border border-border">
//                 .replace(" ", "")
//               </code>{" "}
//               i zamienia wszystkie litery na małe za pomocą{" "}
//               <code className="bg-muted px-2 py-0.5 rounded font-mono text-sm text-foreground border border-border">
//                 .lower()
//               </code>
//               .
//             </p>
//             <p className="pl-4 text-sm bg-muted/50 p-3 rounded border border-border">
//               Przykład:{" "}
//               <code className="bg-muted px-2 py-0.5 rounded font-mono text-sm text-foreground border border-border">
//                 "Kobyła ma mały bok"
//               </code>{" "}
//               →{" "}
//               <code className="bg-muted px-2 py-0.5 rounded font-mono text-sm text-foreground border border-border">
//                 "kobyłamamałybok"
//               </code>
//             </p>
//           </div>
//           <div className="space-y-2">
//             <p className="font-medium text-foreground">Krok 2: Odwracanie napisu</p>
//             <p className="pl-4">
//               Python używa notacji slice{" "}
//               <code className="bg-muted px-2 py-0.5 rounded font-mono text-sm text-foreground border border-border">
//                 [::-1]
//               </code>
//               , która tworzy odwróconą kopię napisu. Środkowy element{" "}
//               <code className="bg-muted px-2 py-0.5 rounded font-mono text-sm text-foreground border border-border">
//                 -1
//               </code>{" "}
//               oznacza "idź od tyłu".
//             </p>
//           </div>
//           <div className="space-y-2">
//             <p className="font-medium text-foreground">Krok 3: Porównanie</p>
//             <p className="pl-4">
//               Funkcja sprawdza, czy oczyszczony napis jest identyczny z jego odwróconą wersją. Jeśli tak, zwraca{" "}
//               <code className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded font-mono text-sm border border-green-200 dark:border-green-800">
//                 True
//               </code>
//               , w przeciwnym razie{" "}
//               <code className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-2 py-0.5 rounded font-mono text-sm border border-red-200 dark:border-red-800">
//                 False
//               </code>
//               .
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* Typowe błędy */}
//       <div className="rounded-lg border bg-card p-6">
//         <div className="flex items-center gap-2 mb-4">
//           <span className="text-2xl">⚠️</span>
//           <h3 className="text-lg font-semibold text-foreground">Typowe błędy</h3>
//         </div>
//         <ul className="space-y-3 text-muted-foreground leading-relaxed">
//           <li className="flex gap-3">
//             <span className="text-destructive font-bold">•</span>
//             <div>
//               <p className="font-medium text-foreground">Zapominanie o wielkości liter</p>
//               <p className="text-sm">
//                 "Kajak" nie będzie równe "kajaK". Zawsze normalizuj wielkość liter używając{" "}
//                 <code className="bg-muted px-2 py-0.5 rounded font-mono text-sm text-foreground border border-border">
//                   .lower()
//                 </code>
//                 .
//               </p>
//             </div>
//           </li>
//           <li className="flex gap-3">
//             <span className="text-destructive font-bold">•</span>
//             <div>
//               <p className="font-medium text-foreground">Ignorowanie spacji i znaków interpunkcyjnych</p>
//               <p className="text-sm">"A man a plan a canal Panama" jest palindromem, ale tylko po usunięciu spacji.</p>
//             </div>
//           </li>
//           <li className="flex gap-3">
//             <span className="text-destructive font-bold">•</span>
//             <div>
//               <p className="font-medium text-foreground">Modyfikowanie oryginalnego napisu</p>
//               <p className="text-sm">
//                 Lepiej stworzyć nową zmienną dla oczyszczonego napisu zamiast nadpisywać parametr funkcji.
//               </p>
//             </div>
//           </li>
//         </ul>
//       </div>
//       {/* Inne podejścia */}
//       <div className="rounded-lg border bg-card p-6">
//         <div className="flex items-center gap-2 mb-4">
//           <span className="text-2xl">🔁</span>
//           <h3 className="text-lg font-semibold text-foreground">Inne podejścia</h3>
//         </div>
//         <div className="space-y-4">
//           <div className="space-y-2">
//             <p className="font-medium text-foreground">1. Rekurencja</p>
//             <p className="text-muted-foreground text-sm leading-relaxed">
//               Można sprawdzić, czy pierwszy i ostatni znak są takie same, a następnie wywołać funkcję rekurencyjnie dla
//               środkowej części napisu.
//             </p>
//             <div className="bg-muted/50 dark:bg-slate-900/50 rounded-lg p-3 overflow-x-auto mt-2 border border-border">
//               <pre className="m-0 p-0 text-foreground font-mono text-xs leading-relaxed">
//                 {`def czy_palindrom_rek(napis):
//     if len(napis) <= 1:
//         return True
//     if napis[0] != napis[-1]:
//         return False
//     return czy_palindrom_rek(napis[1:-1])`}
//               </pre>
//             </div>
//           </div>
//           <div className="space-y-2">
//             <p className="font-medium text-foreground">2. Dwa wskaźniki (two pointers)</p>
//             <p className="text-muted-foreground text-sm leading-relaxed">
//               Użyj dwóch wskaźników: jednego na początku, drugiego na końcu. Porównuj znaki i przesuwaj wskaźniki do
//               środka.
//             </p>
//             <div className="bg-muted/50 dark:bg-slate-900/50 rounded-lg p-3 overflow-x-auto mt-2 border border-border">
//               <pre className="m-0 p-0 text-foreground font-mono text-xs leading-relaxed">
//                 {`def czy_palindrom_wskazniki(napis):
//     lewy, prawy = 0, len(napis) - 1
//     while lewy < prawy:
//         if napis[lewy] != napis[prawy]:
//             return False
//         lewy += 1
//         prawy -= 1
//     return True`}
//               </pre>
//             </div>
//           </div>
//           <div className="space-y-2">
//             <p className="font-medium text-foreground">3. Odwracanie stringa</p>
//             <p className="text-muted-foreground text-sm leading-relaxed">
//               Najprostsze podejście używające{" "}
//               <code className="bg-muted px-2 py-0.5 rounded font-mono text-xs text-foreground border border-border">
//                 reversed()
//               </code>{" "}
//               lub{" "}
//               <code className="bg-muted px-2 py-0.5 rounded font-mono text-xs text-foreground border border-border">
//                 [::-1]
//               </code>
//               .
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* Głębiej w temat */}
//       <div className="rounded-lg border bg-card p-6">
//         <div className="flex items-center gap-2 mb-4">
//           <span className="text-2xl">📚</span>
//           <h3 className="text-lg font-semibold text-foreground">Głębiej w temat</h3>
//         </div>
//         <div className="space-y-3">
//           <div className="flex items-start gap-3 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
//             <ExternalLink className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
//             <div>
//               <Link href="#" className="font-medium text-foreground hover:text-accent transition-colors">
//                 Technika dwóch wskaźników (Two Pointers)
//               </Link>
//               <p className="text-sm text-muted-foreground mt-1">
//                 Dowiedz się więcej o tym popularnym wzorcu algorytmicznym używanym w wielu problemach z tablicami i
//                 napisami.
//               </p>
//             </div>
//           </div>
//           <div className="flex items-start gap-3 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
//             <ExternalLink className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
//             <div>
//               <Link href="#" className="font-medium text-foreground hover:text-accent transition-colors">
//                 Złożoność czasowa i pamięciowa
//               </Link>
//               <p className="text-sm text-muted-foreground mt-1">
//                 Zrozum, dlaczego niektóre podejścia są bardziej wydajne niż inne i jak analizować złożoność algorytmów.
//               </p>
//             </div>
//           </div>
//           <div className="flex items-start gap-3 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
//             <ExternalLink className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
//             <div>
//               <Link href="#" className="font-medium text-foreground hover:text-accent transition-colors">
//                 String slicing w Pythonie
//               </Link>
//               <p className="text-sm text-muted-foreground mt-1">
//                 Poznaj wszystkie możliwości notacji slice w Pythonie i jak efektywnie pracować z napisami.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// @/components/explanation-section.tsx
__turbopack_context__.s([
    "ExplanationSection",
    ()=>ExplanationSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ExplanationSection({ explanation }) {
    // POPRAWKA: Dodano sprawdzenie, czy 'explanation' istnieje, zanim odczytamy 'error'.
    if (explanation && explanation.error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-destructive/10 text-destructive rounded-lg border",
            children: [
                "❌ ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: "Błąd:"
                }, void 0, false, {
                    fileName: "[project]/components/explanation-section.tsx",
                    lineNumber: 237,
                    columnNumber: 11
                }, this),
                " ",
                explanation.error
            ]
        }, void 0, true, {
            fileName: "[project]/components/explanation-section.tsx",
            lineNumber: 236,
            columnNumber: 7
        }, this);
    }
    // Dodatkowo, jeśli 'explanation' w ogóle nie zostało przekazane lub jest puste,
    // możemy wyświetlić stan oczekiwania, zanim przejdziemy do dalszego renderowania.
    if (!explanation || !explanation.answer) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border bg-card p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground",
                children: "Oczekiwanie na odpowiedź…"
            }, void 0, false, {
                fileName: "[project]/components/explanation-section.tsx",
                lineNumber: 247,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/explanation-section.tsx",
            lineNumber: 246,
            columnNumber: 9
        }, this);
    }
    // ✅ Renderujemy surową odpowiedź AI
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg border bg-card p-6 prose max-w-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold text-lg mb-4",
                children: "🧠 Pełne wyjaśnienie:"
            }, void 0, false, {
                fileName: "[project]/components/explanation-section.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-muted-foreground leading-relaxed",
                dangerouslySetInnerHTML: {
                    __html: explanation.answer.replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br/>')
                }
            }, void 0, false, {
                fileName: "[project]/components/explanation-section.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/explanation-section.tsx",
        lineNumber: 254,
        columnNumber: 5
    }, this);
}
_c = ExplanationSection;
var _c;
__turbopack_context__.k.register(_c, "ExplanationSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/solution-tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { CodeBlock } from "@/components/code-block"
// import { ExplanationSection } from "@/components/explanation-section"
// export function SolutionTabs() {
//   const [activeTab, setActiveTab] = useState<"explanation" | "solution">("explanation")
//   return (
//     <div className="mb-8">
//       <div className="flex gap-2 mb-6 border-b">
//         <Button
//           variant={activeTab === "explanation" ? "default" : "ghost"}
//           onClick={() => setActiveTab("explanation")}
//           className="rounded-b-none"
//         >
//           Wyjaśnienie
//         </Button>
//         <Button
//           variant={activeTab === "solution" ? "default" : "ghost"}
//           onClick={() => setActiveTab("solution")}
//           className="rounded-b-none"
//         >
//           Rozwiązanie
//         </Button>
//       </div>
//       {activeTab === "explanation" ? (
//         <ExplanationSection />
//       ) : (
//         <div className="rounded-lg border bg-card p-6">
//           <CodeBlock />
//         </div>
//       )}
//     </div>
//   )
// }
// @/components/solution-tabs.tsx
__turbopack_context__.s([
    "SolutionTabs",
    ()=>SolutionTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$code$2d$block$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/code-block.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$explanation$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/explanation-section.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SolutionTabs({ explanation }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("explanation");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mb-6 border-b",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: activeTab === "explanation" ? "default" : "ghost",
                        onClick: ()=>setActiveTab("explanation"),
                        className: "rounded-b-none",
                        children: "Wyjaśnienie"
                    }, void 0, false, {
                        fileName: "[project]/components/solution-tabs.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: activeTab === "solution" ? "default" : "ghost",
                        onClick: ()=>setActiveTab("solution"),
                        className: "rounded-b-none",
                        children: "Rozwiązanie"
                    }, void 0, false, {
                        fileName: "[project]/components/solution-tabs.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/solution-tabs.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            activeTab === "explanation" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$explanation$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExplanationSection"], {
                explanation: explanation
            }, void 0, false, {
                fileName: "[project]/components/solution-tabs.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border bg-card p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$code$2d$block$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                    code: explanation.code,
                    language: explanation.language
                }, void 0, false, {
                    fileName: "[project]/components/solution-tabs.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/solution-tabs.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/solution-tabs.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(SolutionTabs, "GaFhUKHEfAJBDx95Im8TPJbeSGI=");
_c = SolutionTabs;
var _c;
__turbopack_context__.k.register(_c, "SolutionTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d4030e84._.js.map