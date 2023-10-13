import jsPDF from "jspdf";
import { TUserData } from "./customTypes";

export default function generateCertificate(user: TUserData, course: string) {
  if (!user) return;

  const doc = new jsPDF({
    orientation: "landscape",
    format: "a4",
  });

  const fonts = doc.getFontList();

  //   doc.addFont("courier");
  doc.setFont("courier", fonts.courier[0]);

  doc.setTextColor(120);
  doc.setFontSize(16);
  doc.text("Felicidades a", 32, 10);
  doc.text("Por completar la trivia", 32, 60);
  doc.text("Certificada por", 32, 110);

  doc.setFont("courier", fonts.courier[1]);
  doc.setTextColor(0);
  doc.setFontSize(32);
  doc.text(`${user?.name.toUpperCase()} ${user?.lastname.toUpperCase()}`, 32, 25);
  doc.text("CuidaMundos 01", 32, 75);
  doc.text("CENS x AENS TECH", 32, 125);

  // Certify code
  doc.setFont("courier", fonts.courier[0]);
  doc.setTextColor(120);
  doc.setFontSize(16);
  doc.text("5545-5743-9812-3290", 30, 180);

  doc.save(`${user?.name.replaceAll(" ", "_")}_Cuidamundos.pdf`);
}
