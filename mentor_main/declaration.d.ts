// declaration.d.ts

// Deklaracje dla problematycznych modułów react-syntax-highlighter
declare module 'react-syntax-highlighter' {
  const SyntaxHighlighter: any;
  const Prism: any;
  export { SyntaxHighlighter, Prism };
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
  const style: any;
  export { style as vscDarkPlus };
}