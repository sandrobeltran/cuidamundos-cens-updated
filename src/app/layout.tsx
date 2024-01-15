import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import GetUserByToken from "@/components/validations/GetUserByToken";
import Header from "@/components/header/Header";
import LeavesFalling from "@/components/LeavesFalling";
import LoadGames from "@/components/juega/LoadGames";
import SkyBackground from "@/components/heroes/SkyBackground";
import LandscapeWarning from "@/components/LandscapeWarning";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Cuidamundos CENS",
  description:
    "Videojuego 2D de aventura y educativo sobre los CuidaMundos de CENS. ¡Donde serás Purita, Jirol y Félix, y tendrás que ser un héroe para salvar nuestro planeta!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <LandscapeWarning />
        <LeavesFalling />
        <LoadGames />
        <GetUserByToken />
        <Header />
        <SkyBackground />
        {children}
      </body>
    </html>
  );
}
