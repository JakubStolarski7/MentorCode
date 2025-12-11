import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

// Inicjalizacja handlera NextAuth z naszymi opcjami
const handler = NextAuth(authOptions);

// W App Routerze (app directory) musimy eksportować nazwane funkcje obsługujące metody HTTP.
// NextAuth obsługuje zarówno GET jak i POST.
export { handler as GET, handler as POST };