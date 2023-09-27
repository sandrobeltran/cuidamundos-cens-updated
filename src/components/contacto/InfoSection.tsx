import React from "react";
import CustomSection from "../layout/CustomSection";
import Link from "next/link";

const InfoSection = () => {
  return (
    <CustomSection>
      <div className="flex flex-col items-center gap-12 text-stone-500">
        <div className="flex justify-center gap-10 max-sm:flex-col max-sm:items-center max-sm:text-center">
          <div className="flex flex-col">
            <h5 className="font-semibold">Correo Electrónico</h5>
            <p>info@cens.com</p>
          </div>
          <div className="flex flex-col">
            <h5 className="font-semibold">Dirección de la Empresa</h5>
            <p>xxxxxxxxxxxx</p>
          </div>
          <div className="flex flex-col">
            <h5 className="font-semibold">Número de Contacto</h5>
            <p>+57 3XXXXX-XXXX</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h5 className="font-semibold">Redes Sociales</h5>
          <div className="flex justify-center gap-6 text-cens-medium">
            <Link
              href={"https://twitter.com"}
              className="grid w-10 place-content-center"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10"
              >
                <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
              </svg>
            </Link>
            <Link
              href={"https://instagram.com"}
              className="grid w-10 place-content-center"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10"
              >
                <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
              </svg>
            </Link>
            <Link
              href={"https://facebook.com"}
              className="grid w-10 place-content-center"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default InfoSection;
