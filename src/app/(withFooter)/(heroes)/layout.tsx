import PathBar from "@/components/heroes/PathBar";
import SkyBackground from "@/components/heroes/SkyBackground";

const HeroesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PathBar />
      <SkyBackground />
      {children}
    </>
  );
};

export default HeroesLayout;
