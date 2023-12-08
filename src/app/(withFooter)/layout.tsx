import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Ecoaventura Sostenible - CENS",
  description: "Page description placeholder",
};

export default function FooterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
