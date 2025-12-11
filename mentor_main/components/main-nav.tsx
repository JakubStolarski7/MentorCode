import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
// Używamy aliasu '@' dla pewności importu
import { LogoutButton } from "@/components/logout-button"; 

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react"; 

/**
 * Komponent nawigacji serwerowej. 
 * Pobiera stan sesji i dynamicznie wyświetla linki logowania/wylogowania.
 */
export async function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  // Pobieramy sesję bezpośrednio w komponencie serwerowym
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6 px-6 h-16 border-b bg-white dark:bg-gray-950", className)}
      {...props}
    >
      {/* Logo/Nazwa Aplikacji */}
      <Link href="/" className="flex items-center space-x-2 mr-6">
        <span className="text-xl font-bold text-primary">MentorCode</span>
      </Link>

      {/* Główne linki nawigacji */}
      <div className="flex-1 flex space-x-4">
        {user && (
          // Link do Dashboardu tylko dla zalogowanych
          <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
            Dashboard
          </Link>
        )}
        <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Strona Główna
        </Link>
      </div>

      {/* Sekcja Uwierzytelniania */}
      <div className="flex items-center space-x-4">
        {user ? (
          // STAN ZALOGOWANY: Imię/Email i Wylogowanie
          <>
            <div className="flex items-center space-x-1 text-sm font-medium">
              <User className="h-4 w-4 mr-1 text-gray-500" />
              <span>{user.name || user.email || "Użytkownik"}</span>
            </div>
            <LogoutButton />
          </>
        ) : (
          // STAN NIEZALOGOWANY: Logowanie i Rejestracja
          <>
            <Button asChild variant="ghost">
              <Link href="/login">Zaloguj się</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Rejestracja</Link>
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}