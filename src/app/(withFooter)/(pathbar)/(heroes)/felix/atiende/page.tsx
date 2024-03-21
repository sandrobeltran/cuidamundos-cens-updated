"use client";

import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import CustomMain from "@/components/layout/CustomMain";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import FelixImage1 from "@public/img/felix/atiende/felix_1.png";

type TMark = {
  coors: {
    x: number;
    y: number;
    correct: number;
  };
  content: {
    title: string;
    value: number;
  };
};

/* GAME DATA */
const GAME_DATA: TMark[] = [
  {
    coors: {
      x: 90,
      y: 76,
      correct: 1,
    },
    content: {
      title:
        "Para apagar los aparatos, siempre usa el enchufe, ¡nunca tires del cable!",
      value: 1,
    },
  },
  {
    coors: {
      x: 14,
      y: 81,
      correct: 2,
    },
    content: {
      title: "¡Evita poner cosas extrañas en los enchufes, es muy riesgoso!",
      value: 2,
    },
  },
  {
    coors: {
      x: 10,
      y: 55,
      correct: 3,
    },
    content: {
      title:
        "¡Si encuentras un tomacorriente en mal estado, corre y avísale a un adulto de inmediato!",
      value: 3,
    },
  },
  {
    coors: {
      x: 54,
      y: 38,
      correct: 4,
    },
    content: {
      title: "¡Avisa a los adultos si encuentras cables sin protección!",
      value: 4,
    },
  },
  {
    coors: {
      x: 36,
      y: 79,
      correct: 5,
    },
    content: {
      title:
        "Evita conectar muchos aparatos en un solo tomacorriente. ¡Puede calentarse demasiado y causar un cortocircuito!",
      value: 5,
    },
  },
  {
    coors: {
      x: 61,
      y: 69,
      correct: 6,
    },
    content: {
      title:
        "Nunca toques enchufes o aparatos eléctricos con las manos mojadas. ¡Es muy peligroso!",
      value: 6,
    },
  },
];

type TProps = {
  size: number;
  mark: TMark;
  value?: number;
  add: (value: number) => void;
};

const Mark = ({
  mark: {
    coors: { x, y, correct },
  },
  value,
  size,
  add,
}: TProps) => {
  const [failed, setFailed] = useState<boolean>(false);

  useEffect(() => {
    if (value && failed) {
      setFailed(false);
    }
  }, [value, failed]);

  return (
    <div
      className="felix__mark group absolute aspect-square rounded-full shadow-md"
      style={{
        width: `${size}px`,
        left: `calc(${x}% - ${size / 2}px)`,
        top: `calc(${y}% - ${size / 2}px)`,
      }}
    >
      {value === correct ? (
        <p className="h-full w-full rounded-full bg-cens-light p-2 text-center text-3xl font-bold text-white">
          {value}
        </p>
      ) : (
        <input
          type="number"
          placeholder=" "
          className="h-full w-full rounded-full bg-felix p-2 text-center text-3xl font-bold text-white transition-all placeholder-shown:bg-amber-400 focus:outline-none"
          style={failed ? { backgroundColor: "#ED5C5C" } : {}}
          max={GAME_DATA.length}
          onChange={(e) =>
            parseInt(e.target.value) === correct
              ? add(parseInt(e.target.value))
              : setFailed(true)
          }
        />
      )}
    </div>
  );
};

export default function AtiendeFelix() {
  const [stage, setStage] = useState<number>(0);
  const markSize = 50;
  const [corrects, setCorrects] = useState<number[]>([]);

  function addResult(value: number) {
    setCorrects([...corrects, value]);
  }

  useEffect(() => {
    if (corrects.length) {
      const tipModal = document.getElementById("felixTipModal")!;
      tipModal.style.display = "grid";

      const {
        content: { title: message },
      } = GAME_DATA.find(
        (item) => item.content.value === corrects[corrects.length - 1],
      ) as TMark;
      tipModal.querySelector("div p")!.innerHTML = message;
    }
  }, [corrects]);

  function showRecommendation1() {
    document.getElementById("felixRecommendation1")!.style.display = "flex";
    document.getElementById("felixRecommendation2")!.style.display = "none";
  }
  function showRecommendation2() {
    document.getElementById("felixRecommendation1")!.style.display = "none";
    document.getElementById("felixRecommendation2")!.style.display = "flex";
  }

  function hideTipModal() {
    document.getElementById("felixTipModal")!.style.display = "none";
    if (corrects.length >= GAME_DATA.length) {
      // THE GAME HAS FINISHED
      document.getElementById("felixWinModal")!.style.display = "flex";
    }
  }

  function handleResetGame() {
    setCorrects([]);
    document.getElementById("felixRecommendation2")!.style.display = "none";
    document.getElementById("felixRecommendation1")!.style.display = "none";
    document.getElementById("felixWinModal")!.style.display = "none";
    document.getElementById("felixTipModal")!.style.display = "none";
  }

  return (
    <CustomMain>
      <HeroeSection>
        <HeroeTitle
          title={{ text: "¡Juega y", resalted: "aprende!" }}
          description="¡Diviértete aprendiendo a evitar accidentes eléctricos en casa! Descubre los riesgos y cómo prevenirlos. ¡Hora de jugar! Coloca en el círculo el número correcto para cada situación mencionada."
        />

        {/* MINIGAME SECTION */}
        <div className="relative flex flex-col items-center justify-start gap-10 px-28 mobile-land:px-6">
          <div className="relative aspect-[1.6/1] w-full max-w-5xl overflow-hidden rounded-3xl bg-[url(/img/felix/atiende/living_room.jpg)] bg-cover bg-center shadow-md backdrop-blur-md mobile-land:aspect-[1.6/1.1] mobile-land:max-w-3xl">
            {/* CORRECT ACTION MODAL */}
            <div
              id="felixTipModal"
              className="modalWrapper absolute left-0 top-0 hidden h-full w-full place-content-center bg-black/10 backdrop-blur-md"
            >
              <div className="flex w-full max-w-lg flex-col items-center gap-4 rounded-3xl bg-white p-16 text-center">
                <h3 className="text-2xl font-bold text-cens-dark">
                  ¡Acción Correcta!
                </h3>
                <p className="text-stone-500">
                  Evita conectar muchos aparatos en un solo tomacorriente.
                  ¡Puede calentarse demasiado y causar un cortocircuito!
                </p>
                <Button
                  hierarchy="primary"
                  size="md"
                  onClick={() => hideTipModal()}
                >
                  Continuar
                </Button>
              </div>
            </div>

            {/* WIN MODAL */}
            <div
              className="modalWrapper absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-black/10 backdrop-blur-md"
              id="felixWinModal"
            >
              <div className="flex w-full max-w-3xl flex-col items-center gap-4 rounded-3xl bg-white p-16 text-center mobile-land:max-w-[95%] mobile-land:gap-2 mobile-land:p-8">
                <h3 className="text-xl font-medium text-stone-500 mobile-land:text-lg">
                  ¡Felicidades por{" "}
                  <span className="text-cens-medium">
                    completar la lección!
                  </span>
                </h3>
                <p className="text-left text-stone-500 mobile-land:text-sm">
                  Ya eres todo un experto en evitar accidentes eléctricos. ¡Gran
                  trabajo! Aquí va otra recomendación crucial: Si ves cables de
                  energía caídos, ¡no los toques! En su lugar, informa de
                  inmediato llamando a la línea gratuita 01 8000 414 115 o
                  marcando #515 desde Claro si te encuentras en el sur del Cesar
                  o sur de Bolívar. Recuerda, la diversión con seguridad es
                  responsabilidad de todos y puede marcar la diferencia en la
                  seguridad de tu vida, la de tu familia y amigos.
                </p>

                {/* BUTTONS */}
                <div className="flex w-full justify-center gap-12">
                  <div>
                    <Button
                      hierarchy="primary"
                      size="md"
                      onClick={() => showRecommendation1()}
                    >
                      Recomendación 1
                    </Button>
                  </div>
                  <div>
                    <Button
                      hierarchy="primary"
                      size="md"
                      onClick={() => showRecommendation2()}
                    >
                      Recomendación 2
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* RECOMMENDATION 1 */}
            <div
              className="modalWrapper absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-black/10 backdrop-blur-md"
              id="felixRecommendation1"
            >
              <div className="flex w-full max-w-3xl flex-col items-center gap-4 rounded-3xl bg-white p-16 text-center mobile-land:max-w-[95%] mobile-land:gap-2 mobile-land:p-8">
                <h3 className="text-xl font-medium text-stone-500 mobile-land:text-lg">
                  Recomendaciones en caso de{" "}
                  <span className="text-cens-medium">
                    accidentes eléctricos
                  </span>
                </h3>
                <p className="text-left text-stone-500 mobile-land:text-sm">
                  Ante cualquier situación de accidente eléctrico, es esencial
                  seguir estos pasos para garantizar una respuesta segura y
                  efectiva. En primer lugar, mantén la calma y, si es posible,
                  desconecta la fuente de electricidad. Luego, llama al número
                  de emergencia 115 para obtener asistencia profesional. Aleja a
                  la persona herida de la fuente de corriente utilizando un
                  material aislante, como madera o plástico, y asegúrate de que
                  ya no esté en contacto con la electricidad. Posteriormente,
                  verifica el estado de la persona y, si es necesario, afloja su
                  ropa para facilitar la ventilación. Si la persona presenta
                  signos de sobrecalentamiento, utiliza un ventilador para
                  refrescarla. En caso de dificultades respiratorias, busca
                  ayuda de un adulto o un profesional médico de inmediato.
                  Finalmente, tras realizar estas medidas, lleva a la persona
                  afectada al hospital para recibir atención médica
                  especializada.
                </p>

                {/* BUTTONS */}
                <div className="flex w-full justify-center gap-12">
                  <div>
                    <Button
                      hierarchy="primary"
                      size="md"
                      onClick={() => handleResetGame()}
                    >
                      Volver a jugar
                    </Button>
                  </div>
                  <div>
                    <Button
                      hierarchy="primary"
                      size="md"
                      onClick={() => showRecommendation2()}
                    >
                      Recomendación 2
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* RECOMMENDATION 2 */}
            <div
              className="modalWrapper absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-black/10 backdrop-blur-md"
              id="felixRecommendation2"
            >
              <div className="flex w-full max-w-3xl flex-col items-center gap-4 rounded-3xl bg-white p-16 text-center mobile-land:max-w-[95%] mobile-land:gap-2 mobile-land:p-8">
                <h3 className="text-xl font-medium text-stone-500 mobile-land:text-lg">
                  Recomendaciones de seguridad{" "}
                  <span className="text-cens-medium">
                    con la infraestructura eléctrica
                  </span>
                </h3>
                <ul className="text-left text-stone-500 mobile-land:text-sm list-disc">
                  <li>
                    Evita elevar cometas cerca de las redes eléctricas. Intentar
                    retirar cometas, globos o cualquier otro objeto ¡es
                    peligroso!
                  </li>
                  <li>
                    No suba a los postes o torres de energía. Tampoco suba a los
                    árboles o andamios que estén cerca de las redes de energía
                    ¡puede causarte un accidente!
                  </li>
                  <li>
                    No acerques a las redes eléctricas varillas, tubos u otros
                    elementos. Una descarga de energía ¡te puede electrocutar!
                  </li>
                  <li>
                    Evita sembrar o realizar otras actividades sin mantener las
                    distancias mínimas con la infraestructura eléctrica.
                  </li>
                  <li>
                    Recomienda a tus padres informar a la línea de atención al
                    cliente 01 8000 415 115 cuando personas estén manipulando,
                    hurtando o construyendo cerca de las redes o torres de
                    energía.
                  </li>
                </ul>

                {/* BUTTONS */}
                <div className="flex w-full justify-center gap-12">
                  <div>
                    <Button
                      hierarchy="primary"
                      size="md"
                      onClick={() => handleResetGame()}
                    >
                      Volver a jugar
                    </Button>
                  </div>
                  <div>
                    <Button
                      hierarchy="primary"
                      size="md"
                      onClick={() => showRecommendation1()}
                    >
                      Recomendación 1
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {stage === 0 ? (
              <div className="modalWrapper absolute left-0 top-0 z-10 grid h-full w-full place-content-center backdrop-blur-md">
                {/* MAIN SCREEN 1 */}
                <div className="relative flex w-full max-w-lg flex-col items-center gap-2 rounded-3xl border-stone-300 bg-white p-10 text-center shadow-md shadow-stone-500/20">
                  <h4 className="text-xl font-semibold text-cens-dark">
                    ¡Saludos, héroes!
                  </h4>
                  <p className="mobile-land:text-sm">
                    Soy Félix, el héroe de la energía eléctrica. Aprendamos
                    juntos cómo evitar accidentes eléctricos con nuestros
                    electrodomésticos. ¡Listos para la acción!
                  </p>
                  <div className="mt-4">
                    <Button
                      hierarchy="primary"
                      size="lg"
                      onClick={() => setStage(1)}
                    >
                      Siguiente
                    </Button>
                  </div>
                </div>

                <Image
                  src={FelixImage1}
                  alt="Imagen de Purita con pose de victoria"
                  className="pointer-events-none absolute bottom-0 right-10 w-5/12"
                />
              </div>
            ) : stage === 1 ? (
              /* MAIN SCREEN 2 */
              <div className="modalWrapper absolute left-0 top-0 z-10 flex h-full w-full place-content-center items-center justify-center backdrop-blur-md">
                <div className="relative flex w-full max-w-3xl flex-col items-center gap-2 rounded-3xl border-stone-300 bg-white p-10 text-left shadow-md shadow-stone-500/20 mobile-land:max-w-[95%] mobile-land:p-5">
                  <p className="mobile-land:text-sm">
                    ¡Para evitar accidentes eléctricos, es súper importante que
                    identifiquemos y corrijamos todo lo que pueda ser peligroso
                    con la electricidad. ¡Vamos a descubrir dos ideas clave!
                    <br />
                    <br />
                    <b>1.</b> Condiciones Inseguras: Aquí nos referimos a cosas
                    como herramientas, equipos o instalaciones que NO están en
                    buenas condiciones para ser utilizadas de manera segura para
                    lo que fueron creadas.
                    <br />
                    <br />
                    <b>2.</b> Acciones Inseguras: Son errores que cometemos al
                    hacer una tarea y que pueden poner en peligro a todos.
                    También pueden ocurrir cuando no sabemos cómo hacer algo de
                    manera segura. ¡Es súper importante conocer y seguir las
                    prácticas y procedimientos de seguridad para estar siempre
                    protegidos!
                  </p>
                  <div className="mt-4">
                    <Button
                      hierarchy="primary"
                      size="lg"
                      onClick={() => setStage(2)}
                    >
                      Empezar
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              GAME_DATA.map((mark, index) => (
                <Mark
                  key={mark.content.title}
                  size={markSize}
                  mark={mark}
                  value={
                    corrects.includes(mark.content.value)
                      ? mark.content.value
                      : undefined
                  }
                  add={addResult}
                />
              ))
            )}

            {/* NUBES MÁGICAS */}

            {/* TIERRA MILAGROSA */}

            {/* AGUA SABIA */}

            {/* PODER ACUÁTICO */}

            {/* PODER VERDE */}
          </div>
          <div className="grid max-w-5xl grid-cols-2 grid-rows-3 gap-x-14 gap-y-6 mobile-land:gap-x-10 mobile-land:gap-y-4">
            {GAME_DATA.map((mark) => (
              <div
                key={mark.content.title}
                className="flex items-center gap-2"
                style={{
                  opacity: corrects.includes(mark.content.value) ? ".5" : "1",
                }}
              >
                <h6 className="text-6xl font-bold text-felix mobile-land:text-5xl">
                  {mark.content.value}
                </h6>
                <p className="text-stone-600 mobile-land:text-sm">
                  {mark.content.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
