import React from "react";
import CustomSection from "../layout/CustomSection";

const NewsSection = () => {
  return (
    <CustomSection>
      <div className="flex flex-col items-center gap-8 rounded-3xl border bg-white p-16 text-center text-stone-500 shadow-lg shadow-stone-200 max-sm:grid-rows-3 max-sm:p-8 max-sm:text-left">
        <h2 className="text-center text-4xl font-medium">
          Mantente al día con las{" "}
          <span className="text-cens-dark">
            Últimas noticias de CuidaMundos
          </span>
        </h2>
        <p className="font-normal">
          Explora las últimas noticias y actualizaciones de CuidaMundos.
          Mantente al tanto de los eventos emocionantes, las nuevas funciones
          del juego, las competencias y las historias fascinantes que te
          sumergirán en nuestro mundo virtual. Descubre cómo la comunidad de
          CuidaMundos está trabajando para proteger el medio ambiente y cómo tú
          puedes formar parte de esta misión. Sumérgete en nuestras noticias
          destacadas y mantén viva la emoción en tu viaje por CuidaMundos
        </p>
        <div className="grid aspect-[16/7] w-full grid-cols-4 grid-rows-2 text-white max-sm:h-[644px] max-sm:grid-cols-2 max-sm:grid-rows-3 max-sm:overflow-hidden max-sm:rounded-3xl">
          <div className="col-span-2 row-span-2 overflow-hidden rounded-bl-3xl rounded-tl-3xl bg-[url(/img/news_01.jpeg)] bg-cover bg-center bg-no-repeat text-left max-lg:rounded-none max-sm:row-span-1">
            <div className="flex h-full w-full flex-col justify-end bg-overlay-down p-6">
              <h4 className="text-lg font-medium max-lg:text-sm">
                Celebra el Día Mundial del Medio Ambiente en CuidaMundos
              </h4>
              <p className="text-sm font-normal max-lg:hidden">
                Descubre cómo nuestra comunidad se unió para plantar árboles
                virtuales y aprender sobre la importancia de la reforestación.
              </p>
              <a
                href="/"
                className="mt-3 py-1 text-sm font-medium text-white underline"
              >
                Leer más
              </a>
            </div>
          </div>
          <div className="overflow-hidden bg-[url(/img/news_01.jpeg)] bg-cover bg-center bg-no-repeat text-left max-lg:rounded-none">
            <div className="flex h-full w-full flex-col justify-end bg-overlay-down p-6">
              <h4 className="text-lg font-medium max-lg:text-sm">
                Detrás de escena de CuidaMundos
              </h4>
              <a
                href="/"
                className="mt-3 py-1 text-sm font-medium text-white underline"
              >
                Leer más
              </a>
            </div>
          </div>
          <div className="row-span-2 overflow-hidden rounded-br-3xl rounded-tr-3xl bg-[url(/img/news_03.jpeg)] bg-cover bg-center bg-no-repeat text-left max-lg:rounded-none max-sm:row-span-1">
            <div className="flex h-full w-full flex-col justify-end bg-overlay-down p-6">
              <h4 className="text-lg font-medium max-lg:text-sm">
                Descubre cómo ahorrar energía en CuidaMundos y en tu hogar
              </h4>
              <p className="text-sm font-normal max-lg:hidden">
                Aprende consejos prácticos para reducir el consumo de energía-
              </p>
              <a
                href="/"
                className="mt-3 py-1 text-sm font-medium text-white underline"
              >
                Leer más
              </a>
            </div>
          </div>
          <div className="overflow-hidden bg-[url(/img/news_01.jpeg)] bg-cover bg-center bg-no-repeat text-left max-lg:rounded-none max-sm:col-span-2">
            <div className="flex h-full w-full flex-col justify-end bg-overlay-down p-6">
              <h4 className="text-lg font-medium max-lg:text-sm">
                Nueva actualización
              </h4>
              <a
                href="/"
                className="mt-3 py-1 text-sm font-medium text-white underline"
              >
                Leer más
              </a>
            </div>
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default NewsSection;
