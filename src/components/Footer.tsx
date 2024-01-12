import Image from "next/image";
import React from "react";
import CENSLogo from "../../public/logos/cens_footer.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative mt-20 flex h-fit grid-cols-4 flex-col items-center gap-4 bg-[url(/img/footer_bg.png)] bg-cover bg-center bg-no-repeat text-cens-brand max-sm:h-fit">
      <div className="relative z-10 grid h-fit w-full grid-cols-4 gap-4 p-10 px-24 mobile-land:p-6 max-sm:grid-rows-3 max-sm:items-center">
        <div className="flex flex-col gap-3 mobile-land:items-center max-sm:col-span-4 max-sm:row-span-2">
          <Image
            src={CENSLogo}
            height={124}
            className="mobile-land:h-24"
            alt="CENS Grupo EPM Logo"
          />
        </div>
        <div className="max-sm:col-span-2 max-sm:row-span-2">
          <h6 className="mb-6 text-lg font-bold">Compañía</h6>
          <ul className="mt-3 flex list-none flex-col gap-2 font-medium">
            <Link
              className="w-fit underline-offset-1 hover:underline"
              href={"/"}
            >
              <li>Inicio</li>
            </Link>
            <Link
              className="w-fit underline-offset-1 hover:underline"
              href={"/juega"}
            >
              <li>Juega</li>
            </Link>
            <Link
              className="w-fit underline-offset-1 hover:underline"
              href={"/aprende"}
            >
              <li>Ignis</li>
            </Link>
            <Link
              className="w-fit underline-offset-1 hover:underline"
              href={"/contacto"}
            >
              <li>Contacto</li>
            </Link>
          </ul>
        </div>
        <div className="max-sm:col-span-2">
          <h6 className="mb-6 text-lg font-bold">Síguenos en</h6>
          <ul className="flex w-full list-none justify-start gap-2 text-3xl">
            <a
              href={"https://www.facebook.com/CENSGrupoEPM/"}
              className="transition-transform hover:scale-110"
              target="_blank"
            >
              <li>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </li>
            </a>
            <a
              href={"https://www.instagram.com/censgrupoepm/"}
              className="transition-transform hover:scale-110"
              target="_blank"
            >
              <li>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
                </svg>
              </li>
            </a>
          </ul>
        </div>
        <div className="max-sm:col-span-2">
          <h6 className="mb-6 text-lg font-bold">Contacto</h6>
          <ul className="mt-3 flex list-none flex-col gap-2 font-medium">
            <li>info@cens.com</li>
            <li>Cúcuta, Colombia</li>
          </ul>
        </div>
      </div>
      <div className="relative flex h-fit w-full items-center justify-center">
        <span className="h-[2px] w-full bg-cens-brand" />
        <h6 className="relative min-w-max p-4 text-center text-sm font-semibold">
          Copyright © 2023 Cuidamundos <br /> Powered by AENS TECH
        </h6>
        <span className="h-[2px] w-full bg-cens-brand" />
      </div>
    </footer>
  );
};

export default Footer;
