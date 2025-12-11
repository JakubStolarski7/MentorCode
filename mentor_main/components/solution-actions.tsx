import { Button } from "@/components/ui/button"
import { Heart, MessageCircle } from "lucide-react"

export function SolutionActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
      <Button variant="outline" className="flex-1 sm:flex-none bg-transparent">
        <Heart className="mr-2 h-4 w-4" />
        Zapisz do ulubionych
      </Button>
      <Button variant="outline" className="flex-1 sm:flex-none bg-transparent">
        <MessageCircle className="mr-2 h-4 w-4" />
        Zapytaj na Discordzie
      </Button>
    </div>
  )
}
