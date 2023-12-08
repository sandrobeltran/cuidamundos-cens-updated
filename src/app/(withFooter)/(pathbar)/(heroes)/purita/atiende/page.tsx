import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import Book, { TBookPage } from "@/components/heroes/purita/Book";
import CustomMain from "@/components/layout/CustomMain";

const pages1: TBookPage[] = [
  {
    text: "¡Descubre el Clima Cálido! En lugares como Cúcuta, Tibú y Aguachica, el sol brilla todo el año con temperaturas siempre por encima de 22 °C. ¡Es como vivir en un eterno día soleado!",
  },
  {
    bg: "/img/purita/atiende/calido.jpg",
  },
  {
    bg: "/img/purita/atiende/invernadero.jpg",
  },
  {
    text: "El efecto invernadero retiene el calor del sol, regulando la temperatura terrestre. La quema de combustibles fósiles y la deforestación liberan gases como el dióxido de carbono, intensificando el efecto invernadero y provocando el cambio climático, semejante a una fiebre en el planeta.",
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
    text: "¡Explora el mágico Clima Templado, donde las temperaturas crean un ambiente perfecto entre los 15 y 21 °C! Es como estar en un lugar donde el clima es como un abrazo amigable, ni muy frío ni muy caliente.",
  },
  {
    text: "El calentamiento global está provocando cambios climáticos extraños como sequías, inundaciones, tormentas y olas de calor persistentes, lo cual es peligroso y puede causar daños a personas, hogares y estructuras.",
  },
  {
    bg: "/img/purita/atiende/calentamiento.jpg",
  },
  {
    bg: "/img/purita/atiende/glaciares.jpg",
  },
  {
    text: "El derretimiento de los glaciares contribuye a que el agua del mar suba. Esto puede causar inundaciones en las costas, pérdida de tierras y afectar la pureza de nuestras fuentes de agua dulce.",
  },
];

const pages3: TBookPage[] = [
  {
    text: "Descubre el Clima Frío, donde las temperaturas se ponen fresquitas durante la mayor parte del año! En lugares como Pamplona o Bogotá, el invierno se viste de frío, con días frescos y noches que te hacen sentir acurrucado.",
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
    text: "Las empresas podrían enfrentar pérdidas económicas debido a la reducción del turismo, la disminución de la productividad y el aumento de los costos en energía y transporte.",
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
