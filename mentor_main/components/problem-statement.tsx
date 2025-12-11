interface ProblemStatementProps {
  userQuestion?: string
}

export function ProblemStatement({ userQuestion }: ProblemStatementProps) {
  const question = userQuestion || "Napisz funkcję, która sprawdza, czy dany napis jest palindromem."
  const title = userQuestion ? "Twoje zadanie" : "Sprawdzanie palindromu"

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground mb-4">{title}</h1>
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-2">Zadanie</h2>
        <p className="text-muted-foreground leading-relaxed">{question}</p>
      </div>
    </div>
  )
}
