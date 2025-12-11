"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { signIn } from "next-auth/react";

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

const formSchema = z.object({
  email: z.string().email("Nieprawidłowy adres email."),
  password: z.string().min(1, "Hasło jest wymagane."),
});

type FormData = z.infer<typeof formSchema>;

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: FormData) {
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });

      if (result?.error) {
        toast({
          variant: "destructive",
          title: "Błąd logowania",
          description: "Nieprawidłowy email lub hasło. Spróbuj ponownie.",
        });
      } else if (result?.ok) {
        toast({
          title: "Sukces!",
          description: "Zalogowano pomyślnie. Trwa przekierowanie...",
        });
        router.push("/dashboard"); 
      }
    } catch (error) {
      console.error("Błąd sieci podczas logowania:", error);
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
    // ZMIANA: Usunięto 'bg-gray-50'. Teraz używamy 'bg-background', co respektuje Twój ciemny motyw.
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Zaloguj się</CardTitle>
          <CardDescription className="text-center">
            Wprowadź swoje dane, aby kontynuować
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hasło</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="Wprowadź hasło" 
                        {...field} 
                        disabled={isLoading} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logowanie..." : "Zaloguj się"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center">
            <Link href="/register" className="text-sm text-blue-500 hover:underline">
                Nie masz konta? Zarejestruj się
            </Link>
        </CardFooter>
      </Card>
    </div>
  );
}