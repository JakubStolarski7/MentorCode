"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

/**
 * Komponent przycisku, który obsługuje wylogowanie z aplikacji.
 * Używa funkcji signOut z NextAuth.js.
 */
export function LogoutButton() {
  const handleLogout = async () => {
    // Wylogowanie i przekierowanie na stronę logowania
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <Button 
      variant="ghost" 
      onClick={handleLogout} 
      className="text-sm font-medium transition-colors hover:text-primary"
    >
      Wyloguj się
    </Button>
  );
}