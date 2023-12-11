import { IGame, IUserCertificate, TUserData } from "@/utils/customTypes";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Button from "../Button";
import CertificateImage from "../../../public/certificado.png";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import generateCertificate, {
  generateCertificateImage,
} from "@/utils/generateCertificate";

type TProps = {
  game: IGame;
  user: TUserData;
};

const heroesColors = {
  felix: "felix",
  jirol: "jirol",
};

const CertificateCard = ({ game, user }: TProps) => {
  const [image, setImage] = useState<string>("");
  const { href } = game;

  // href

  const handleGenerate = useCallback(async () => {
    const url = await generateCertificateImage(user, game.title);
    setImage(url);
  }, [game.title, user]);

  useEffect(() => {
    handleGenerate();
  }, [handleGenerate]);

  return (
    <div className="flex aspect-[1/1.3] flex-col overflow-hidden rounded-3xl border shadow-lg">
      <div className="bg-white/80 p-3 shadow-inner backdrop-blur-sm">
        {image ? (
          <Image
            src={image}
            width={380}
            height={280}
            alt="Imagen de certificado por defecto"
            className="aspect-video w-full rounded-3xl bg-white object-cover object-center shadow-lg"
          />
        ) : (
          <div className="aspect-video w-full rounded-3xl bg-white object-cover object-center shadow-lg" />
        )}
      </div>
      <div className="flex flex-1 flex-col items-center justify-between border-t bg-white py-8 text-center text-stone-500 shadow-[0_-2px_5px_#121212aa]">
        <h6 className="text-xl font-medium">{game.title}</h6>
        <div className="flex items-center gap-1 text-lg font-semibold text-stone-400">
          <p>{game.points}</p>{" "}
          <StarIcon className="h-6 text-amber-400 shadow-sm" />
        </div>
        <div>
          <Button
            hierarchy="primary"
            size="md"
            onClick={() => generateCertificate(user, game.title)?.save()}
          >
            Descargar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
