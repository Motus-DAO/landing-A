import "./globals.css";
import type { ReactNode } from "react";
import { Jura } from "next/font/google";

const jura = Jura({
  subsets: ["latin"],
  variable: "--font-jura",
  display: "swap"
});

export const metadata = {
  title: "MotusDAO Academia",
  description:
    "Formación clínica en trauma y regulación emocional para psicólogxs y terapeutas que quieren actualizar su práctica."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={jura.variable}>
      <body className="min-h-screen bg-motus-bg text-motus-text antialiased">
        {children}
      </body>
    </html>
  );
}

