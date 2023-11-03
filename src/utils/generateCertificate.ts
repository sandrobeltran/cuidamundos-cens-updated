import jsPDF from "jspdf";
import { TUserData } from "./customTypes";
import { ubuntuBold } from "../fonts/Ubuntu-Bold-normal"
import { ubuntuRegular } from "../fonts/Ubuntu-Regular-normal"


export async function generateCertificateImage(user: TUserData, game: string): Promise<string> {

  const bgImage = document.createElement("img")
  bgImage.src = "/img/certificate_thumb.jpg"

  const url = await new Promise<string>((res, rej) => {
    bgImage.onload = () => {
      try {
        const canvas = document.createElement("canvas")
        const w = 842
        const h = 595
        canvas.width = w
        canvas.height = h

        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
        ctx.drawImage(bgImage, 0, 0, w, h)

        ctx.font = "bold 28px Arial"
        ctx.fillText(`${user.name} ${user.lastname}`, 56, 230)
        ctx.fillText(game, 56, 320)

        const url = canvas.toDataURL()

        navigator.clipboard.writeText(canvas.toDataURL())

        res(url)
      } catch (error) {
        console.log(error)
        rej("")
      }
    }
  })

  return url
}


export default function generateCertificate(user: TUserData, game: string) {
  if (!user) return;

  const doc = new jsPDF({
    orientation: "landscape",
    format: "a4",
  });


  doc.addFileToVFS('Ubuntu-Bold-normal.ttf', ubuntuBold);
  doc.addFileToVFS('Ubuntu-Regular-normal.ttf', ubuntuRegular);

  doc.addFont('Ubuntu-Bold-normal.ttf', 'Ubuntu-Bold', 'normal');
  doc.addFont('Ubuntu-Regular-normal.ttf', 'Ubuntu-Regular', 'normal');



  const fonts = doc.getFontList();

  //   doc.addFont("courier");
  doc.setFont("courier", fonts.courier[0]);

  const pWidth = doc.internal.pageSize.getWidth()
  const pHeight = doc.internal.pageSize.getHeight()

  // Certificate bg
  const bg = new Image()
  bg.src = "/img/certificate_bg.jpg"
  doc.addImage(bg, "JPG", 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight())

  // Certificate Title
  doc.setTextColor("#006023")
  doc.setFontSize(32)
  doc.setFont("Ubuntu-Bold", "normal")
  // doc.setFont("Ubuntu-Regular", "normal")
  doc.text("Certificado de aprobación", pWidth / 2, 54, { align: "center" })


  // Labels section
  doc.setTextColor("#6C6D6F")
  doc.setFontSize(18)
  doc.setFont("Ubuntu-Regular", "normal")
  doc.text("Otorgado a", 24, 76)
  doc.text("Por haber completado el juego", 24, 110)

  // Titles
  doc.setTextColor("#000000")
  doc.setFontSize(32)
  doc.setFont("Ubuntu-Bold", "normal")
  doc.text(`${user.name} ${user.lastname}`, 24, 76 + 12)
  doc.text(game, 24, 110 + 12)


  // Roles
  doc.setTextColor("#000000")
  doc.setFontSize(16)
  doc.setFont("Ubuntu-Bold", "normal")
  doc.text("Nombre y Apellido", pWidth / 4, pHeight - 36, { align: "center" })
  doc.text("Nombre y Apellido", (pWidth / 4) * 3, pHeight - 36, { align: "center" })

  // Roles Labels
  doc.setTextColor("#6C6D6F")
  doc.setFontSize(10)
  doc.setFont("Ubuntu-Regular", "normal")
  doc.text("Puesto o cargo", pWidth / 4, pHeight - 30, { align: "center" })
  doc.text("Puesto o cargo", (pWidth / 4) * 3, pHeight - 30, { align: "center" })


  const blobURL = URL.createObjectURL(doc.output("blob"))

  return {
    save: () => doc.save(`${user.name.split(" ")[0]}_${user.lastname.split(" ")[0]}_${game}.pdf`),
    url: blobURL
  }
}