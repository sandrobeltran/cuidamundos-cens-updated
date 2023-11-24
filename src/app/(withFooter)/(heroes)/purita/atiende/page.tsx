import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import Book, { TBookPage } from "@/components/heroes/purita/Book";
import CustomMain from "@/components/layout/CustomMain";

const pages1: TBookPage[] = [
  {
    text: "¡Descubre el Clima Cálido! En lugares como Cúcuta, Tibú y Aguachica, el sol brilla todo el año con temperaturas siempre por encima de 22 °C. ¡Es como vivir en un eterno día soleado!",
  },
  {
    bg: "/img/hero_sky.jpg",
  },
  {
    text: "El efecto invernadero retiene el calor del sol, regulando la temperatura terrestre. La quema de combustibles fósiles y la deforestación liberan gases como el dióxido de carbono, intensificando el efecto invernadero y provocando el cambio climático, semejante a una fiebre en el planeta.",
  },
  {
    bg: "/img/hero_sky.jpg",
  },
  {
    text: "Algunas especies se están mudando hacia lugares más frescos, y esto puede causar revuelo en los ecosistemas y cambiar la forma en que los animales se alimentan y viven.",
  },
  {
    bg: "/img/hero_sky.jpg",
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
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
