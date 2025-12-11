import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; // Import konfiguracji NextAuth
import { MainNav } from "@/components/main-nav"; // Będziemy używać głównej nawigacji

/**
 * Główna strona aplikacji (Dashboard), dostępna tylko dla zalogowanych użytkowników.
 */
export default async function DashboardPage() {
  // 1. Zabezpieczenie strony: Pobieramy dane sesji na serwerze
  const session = await getServerSession(authOptions);

  // 2. Jeśli sesja nie istnieje (użytkownik nie jest zalogowany), przekierowujemy do /login
  if (!session?.user) {
    redirect("/login");
  }

  // W tej sekcji wyświetlamy zawartość pulpitu
  return (
    <div className="min-h-screen flex flex-col">
      {/* Używamy MainNav, który teraz zawiera logikę Logowanie/Wylogowanie */}
      <MainNav /> 
      <main className="flex flex-col flex-grow items-center justify-center p-8 bg-gray-50 dark:bg-gray-900 text-center">
        <h1 className="text-4xl font-extrabold text-primary mb-4">
          Witaj na Pulpicie, {session.user.name || session.user.email}!
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
          To jest Twój prywatny obszar roboczy. Możesz teraz korzystać ze wszystkich funkcji MentorCode AI.
        </p>
        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Strona jest chroniona – nikt niezalogowany nie ma do niej dostępu.
        </p>
      </main>
    </div>
  );
}