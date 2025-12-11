import { LoginForm } from "@/components/login-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
              <span className="text-primary-foreground font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-semibold text-foreground">MentorCode</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Witaj ponownie</h1>
          <p className="text-muted-foreground">Zaloguj się, aby kontynuować naukę</p>
        </div>

        <LoginForm />

        <p className="text-center text-sm text-muted-foreground mt-6">
          Nie masz jeszcze konta?{" "}
          <Link href="/register" className="text-primary hover:underline font-medium">
            Zarejestruj się
          </Link>
        </p>
      </div>
    </div>
  )
}
