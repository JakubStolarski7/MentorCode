import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function SolutionHeader() {
  return (
    <header className="border-b bg-card">
      <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Wróć
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="font-mono">
                Python
              </Badge>
              <Badge
                variant="outline"
                className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-400 dark:border-emerald-800"
              >
                Łatwe
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
