import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "MotusDAO Academia",
  description:
    "Formación clínica en trauma y regulación emocional para psicólogxs y terapeutas que quieren actualizar su práctica."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-motus-bg text-motus-text antialiased">
        {children}
      </body>
    </html>
  );
}

