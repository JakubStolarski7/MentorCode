// components/explanation-section.tsx (Ostateczna Wersja)
import React from 'react';
import dynamic from 'next/dynamic';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

// 🛑 Import stylu powinien być teraz akceptowany dzięki declaration.d.ts
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; 

// Dynamiczny import dla SyntaxHighlighter (zapewnia ładowanie po stronie klienta)
const SyntaxHighlighter = dynamic(
  // mod: any pomaga zwalczyć błąd typowania eksportu
  () => import('react-syntax-highlighter').then((mod: any) => mod.Prism), 
  { ssr: false } 
);

interface Explanation {
  answer?: string;
  error?: string;
  success?: boolean; 
  language?: string;
  code?: string;
}

export function ExplanationSection({ explanation }: { explanation?: Explanation | undefined }) { 
    
    if (!explanation || (!explanation.answer && !explanation.error)) {
        return (
            <div className="rounded-lg border bg-card p-6">
                <p className="text-muted-foreground">Oczekiwanie na odpowiedź…</p>
            </div>
        );
    }
    
    if (explanation.error) {
        return (
            <div className="p-4 bg-destructive/10 text-destructive rounded-lg border">
                ❌ <strong>Błąd:</strong> {explanation.error}
            </div>
        );
    }

    // ✅ Renderujemy treść za pomocą komponentu ReactMarkdown
    return (
        <div className="rounded-lg border bg-card p-6 prose max-w-none">
            <h3 className="font-bold text-lg mb-4">🧠 Pełne wyjaśnienie:</h3>
            
            <ReactMarkdown
                // props 'source' jest aliasem dla 'children' i jest oczekiwany jako string.
                // Użycie answer || '' było poprawne, ale usuwamy błąd podkreślenia:
                children={explanation.answer || ''} 
                rehypePlugins={[rehypeRaw]} 
                components={{
                    code({ node, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        
                        if (match) {
                            // 🛑 RZUTOWANIE TYPU NA ANY (rozwiązuje błąd podkreślenia w JSX)
                            const Highlighter: any = SyntaxHighlighter; 

                            return (
                                <Highlighter
                                    style={vscDarkPlus}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </Highlighter>
                            );
                        }
                        return (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                    p: ({ node, ...props }) => <p className="mb-3 text-muted-foreground leading-relaxed" {...props} />,
                    li: ({ node, ...props }) => <li className="text-muted-foreground leading-relaxed" {...props} />,
                }}
            />
            
        </div>
    );
}