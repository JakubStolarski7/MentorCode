import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(3, "Imię musi mieć co najmniej 3 znaki."),
  email: z.string().email("Nieprawidłowy adres email."),
  password: z.string().min(8, "Hasło musi mieć co najmniej 8 znaków."),
});

// WAŻNE: W App Routerze (app/api/...) NIE używamy "export default function handler".
// Musimy używać nazwanych eksportów dla metod HTTP, np. "export async function POST".

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Walidacja danych
    const validation = userSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Błąd walidacji danych",
          details: validation.error.format(),
        },
        { status: 400 }
      );
    }

    const { name, email, password } = validation.data;

    // Sprawdzenie, czy użytkownik już istnieje
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Użytkownik o tym emailu już istnieje." },
        { status: 409 }
      );
    }

    // Hashowanie hasła
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Utworzenie użytkownika
    // Uwaga: Używamy hashedPassword zgodnie z Twoim schematem Prisma
    await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword, 
      },
    });

    return NextResponse.json(
      { message: "Rejestracja zakończona sukcesem." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Błąd rejestracji:", error);
    return NextResponse.json(
      { error: "Wystąpił błąd serwera podczas rejestracji." },
      { status: 500 }
    );
  }
}