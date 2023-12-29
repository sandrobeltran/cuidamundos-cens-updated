import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import Book, { TBookPage } from "@/components/heroes/purita/Book";
import CustomMain from "@/components/layout/CustomMain";

const pages1: TBookPage[] = [
  {
    text: "¡Descubre el clima cálido! En lugares con clima cálido, el sol brilla mucho y hace calor durante la mayor parte del año. Esto significa que puedes usar ropa ligera, jugar al aire libre, ir a la playa, disfrutar de la piscina y divertirte bajo el sol.",
  },
  {
    bg: "/img/purita/atiende/calido.jpg",
  },
  {
    bg: "/img/purita/atiende/invernadero.jpg",
  },
  {
    text: 'El efecto invernadero retiene el calor del sol, esencial para la vida en la Tierra. Sin embargo, actividades como la quema de combustibles y la deforestación liberan gases de efecto invernadero, provocando un calentamiento adicional llamado "cambio climático", semejante a una fiebre en el planeta.',
  },
  {
    text: "Algunas especies se están mudando hacia lugares más frescos, y esto puede causar revuelo en los ecosistemas y cambiar la forma en que los animales se alimentan y viven.",
  },
  {
    bg: "/img/purita/atiende/migracion.jpg",
  },
];

const pages2: TBookPage[] = [
  {
    bg: "/img/purita/atiende/templado.jpg",
  },
  {
    text: "¡Explora el mágico clima templado! El clima templado tiene cuatro estaciones con variaciones moderadas. En primavera hay flores, en verano hace calor, en otoño las hojas cambian de color, y en invierno a veces nieva. Es un clima versátil para disfrutar de diversas actividades a lo largo del año.",
  },
  {
    text: "El calentamiento global provoca cambios climáticos como sequías, inundaciones, tormentas súper fuertes y olas de calor que no se van, causando daños a personas, casas, edificios y carreteras.",
  },
  {
    bg: "/img/purita/atiende/calentamiento.jpg",
  },
  {
    bg: "/img/purita/atiende/glaciares.jpg",
  },
  {
    text: "El derretimiento de los glaciales contribuye a que el nivel del agua en los mares suba, ocasionado inundaciones en las costas, perdida de tierras y afectación de la calidad de nuestras fuentes de agua dulce.",
  },
];

const pages3: TBookPage[] = [
  {
    text: "¡Descubre el clima frío! ¡Hola! El clima frío es como sentir aire fresco durante gran parte del año. Esto hace que la gente use abrigos, bufandas y guantes. En muchos lugares con este clima, a menudo hay nieve, creando un paisaje blanco.",
  },
  {
    bg: "/img/purita/atiende/frio.jpg",
  },
  {
    bg: "/img/purita/atiende/arrecifes.jpg",
  },
  {
    text: "El aumento de la temperatura está afectando a lugares asombrosos como los arrecifes de coral y los bosques tropicales. Esta situación no es favorable para los animales y las plantas, pudiendo llevar a la desaparición de especies y a una disminución en la diversidad biológica.",
  },
  {
    text: "Las personas y empresas podrían enfrentar pérdidas económicas debido a la reducción del turismo, la disminución de la productividad y el aumento de los costos de transporte y de la energía eléctrica. ",
  },
  {
    bg: "/img/purita/atiende/abandono.jpg",
  },
];

export default function AtiendePurita() {
  return (
    <CustomMain>
      <HeroeSection>
        <HeroeTitle
          title={{ text: "Qué", resalted: "atiende" }}
          description="¡Explora el medio ambiente y el cambio climático, entendiendo los desafíos que enfrentamos!"
        />

        {/* BOOKS ZONE */}
        <div className="flex flex-col gap-8">
          <Book pages={pages1} />
          <Book pages={pages2} />
          <Book pages={pages3} />
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
