import Footer from "@/components/Footer";
import "../globals.css";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import Script from "next/script";
import GetUserByToken from "@/components/validations/GetUserByToken";
import Header from "@/components/header/Header";
import LeavesFalling from "@/components/LeavesFalling";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecoaventura Sostenible - CENS",
  description: "Page description placeholder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={ubuntu.className}>
        <LeavesFalling />
        <GetUserByToken />
        <Header />
        {children}
      </body>
    </html>
  );
}
