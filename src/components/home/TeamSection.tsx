import React from "react";
import CustomSection from "../layout/CustomSection";
import Image from "next/image";
import AENSTechLogo from "../../../public/logos/aens_tech.png";
import CENSLogo from "../../../public/logos/cens.png";
import AlcaldiaCucutaLogo from "../../../public/logos/alcaldia_cucuta.png";

const TeamSection = () => {
  return (
    <CustomSection>
      <div className="flex flex-col items-center gap-8 p-16 text-left text-stone-500 max-sm:p-8">
        <h2 className="w-3/4 text-center text-4xl font-medium">
          Conoce al equipo detrás CuidaMundos{" "}
          <span className="text-cens-dark">CuidaMundos</span>
        </h2>
        <p className="font-normal max-sm:hidden">
          En <b>CuidaMundos</b>, contamos con un equipo apasionado y
          multidisciplinario que trabaja en armonía para crear una experiencia
          de juego excepcional. Nuestros desarrolladores, diseñadores y expertos
          en medio ambiente están comprometidos con nuestra misión de fusionar
          la diversión y la conciencia ambiental.
          <br />
          <br />
          Nuestros desarrolladores son los magos detrás de los códigos,
          dedicados a crear un mundo virtual cautivador y lleno de vida. Su
          habilidad para dar vida a paisajes hermosos, personajes encantadores y
          mecánicas de juego innovadoras es fundamental para brindar una
          experiencia envolvente a nuestros jugadores. Nuestro talentoso equipo
          de diseño se encarga de crear la estética única y cautivadora de{" "}
          <b>CuidaMundos</b>. Desde la creación de impresionantes paisajes
          naturales hasta el diseño de personajes memorables, su visión
          artística y atención a los detalles nos transportan a un universo
          visualmente impresionante.
          <br />
          <br />
          <b>
            ¡Estamos orgullosos de nuestro equipo y su dedicación para crear un
            mundo virtual único en CuidaMundos!
          </b>
        </p>
        <p className="hidden font-normal max-sm:inline-block">
          En CuidaMundos, contamos con un equipo apasionado y multidisciplinario
          que trabaja en armonía para crear una experiencia de juego
          excepcional. Nuestros desarrolladores, diseñadores y expertos en medio
          ambiente están comprometidos con nuestra misión de fusionar la
          diversión y la conciencia ambiental.
          <br />
          ¡Estamos orgullosos de nuestro equipo y su dedicación para crear un
          mundo virtual único en CuidaMundos!
        </p>
        <h4 className="text-3xl font-medium text-cens-brand">
          Nuestros Aliados
        </h4>
        <div className="flex flex-wrap items-center justify-center gap-28 max-sm:gap-16">
          <Image
            className="h-36 w-fit object-contain max-sm:h-28"
            src={AENSTechLogo}
            alt="AENS Logo"
          />
          <Image
            className="h-36 w-fit object-contain max-sm:h-28"
            src={CENSLogo}
            alt="CENS Grupo EPM Logo"
          />
          <Image
            className="h-36 w-fit object-contain max-sm:h-28"
            src={AlcaldiaCucutaLogo}
            alt="Alcaldía de Cúcuta Logo"
          />
        </div>
      </div>
    </CustomSection>
  );
};

export default TeamSection;
