import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import GetUserByToken from "@/components/validations/GetUserByToken";
import Header from "@/components/header/Header";
import LeavesFalling from "@/components/LeavesFalling";
import LoadGames from "@/components/juega/LoadGames";
import SkyBackground from "@/components/heroes/SkyBackground";
import LandscapeWarning from "@/components/LandscapeWarning";
import SecurityQuestionsChecker from "@/components/validations/SecurityQuestionsChecker";
import { headers } from "next/headers";

const ubuntu = localFont({
  src: [
    { path: "../fonts/Ubuntu-Light.ttf", weight: "300" },
    { path: "../fonts/Ubuntu-Regular.ttf", weight: "400" },
    { path: "../fonts/Ubuntu-Medium.ttf", weight: "500" },
  ],
  adjustFontFallback: false,
  display: "swap",
});

//? To fetch the font directly from google fonts
/* const ubuntu = Ubuntu({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
}); */

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
  const nonce = headers().get("x-nonce") || undefined;

  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <LandscapeWarning />
        <LeavesFalling />
        <LoadGames />
        <GetUserByToken />
        <SecurityQuestionsChecker />
        <Header />
        <SkyBackground />
        {children}
      </body>
    </html>
  );
}
