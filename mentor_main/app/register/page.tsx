"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// Schemat walidacji Zod (musi pasować do schematu w app/api/register/route.ts)
const formSchema = z.object({
  name: z.string().min(3, "Imię musi mieć co najmniej 3 znaki."),
  email: z.string().email("Nieprawidłowy adres email."),
  password: z.string().min(8, "Hasło musi mieć co najmniej 8 znaków."),
});

type FormData = z.infer<typeof formSchema>;

/**
 * Komponent formularza rejestracji i całej strony rejestracji.
 */
export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // Funkcja obsługująca wysłanie formularza
  async function onSubmit(values: FormData) {
    setIsLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        // Sukces rejestracji
        toast({
          title: "Sukces!",
          description: "Konto zostało utworzone. Zostaniesz teraz przekierowany do logowania.",
        });
        // Przekierowanie do strony logowania
        router.push("/login"); 
      } else if (response.status === 409) {
        // Błąd 409: Użytkownik już istnieje
        toast({
          variant: "destructive",
          title: "Błąd rejestracji",
          description: data.error || "Użytkownik o tym emailu już istnieje.",
        });
      } else {
        // Inne błędy (np. 400 - walidacja)
        toast({
          variant: "destructive",
          title: "Błąd rejestracji",
          description: data.error || "Wystąpił nieznany błąd podczas rejestracji.",
        });
      }
    } catch (error) {
      console.error("Błąd sieci podczas rejestracji:", error);
      toast({
        variant: "destructive",
        title: "Błąd sieci",
        description: "Nie można połączyć się z serwerem.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Utwórz konto</CardTitle>
          <CardDescription className="text-center">
            Zacznij korzystać z MentorCode już teraz!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Pole Imię */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Imię</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Twoje imię" 
                        {...field} 
                        disabled={isLoading} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Pole Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="email@przyklad.com" 
                        {...field} 
                        disabled={isLoading} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Pole Hasło */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hasło</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="Min. 8 znaków" 
                        {...field} 
                        disabled={isLoading} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem> 
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Rejestrowanie..." : "Zarejestruj się"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center">
            <Link href="/login" className="text-sm text-blue-500 hover:underline">
                Masz już konto? Zaloguj się
            </Link>
        </CardFooter>
      </Card>
    </div>
  );
}