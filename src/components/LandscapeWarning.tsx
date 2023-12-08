import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";

const LandscapeWarning = () => {
  return (
    <div className="landscapeWarning fixed left-0 top-0 z-[99999] hidden h-full w-full place-content-center bg-black/80 backdrop-blur-lg">
      <div className="w-full px-20 flex flex-col items-center gap-10 text-center text-white">
        <DevicePhoneMobileIcon className="h-24 animate-[rotateLand_1.8s_infinite_ease-in-out]" />
        <p className="text-lg leading-6">Debes rotar tu teléfono para navegar este sitio</p>
      </div>
    </div>
  );
};

export default LandscapeWarning;
