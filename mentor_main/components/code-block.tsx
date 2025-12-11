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
interface CodeBlockProps {
  code?: string;
  language?: string;
}

export function CodeBlock({ code = "// Kod nie został wygenerowany", language = "python" }: CodeBlockProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">✅</span>
        <h3 className="text-lg font-semibold text-foreground">Kod</h3>
      </div>
      <div className="bg-muted/50 dark:bg-slate-900/50 rounded-lg p-5 border border-border">
        <pre className="m-0 p-0 text-foreground font-mono text-sm leading-relaxed overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
