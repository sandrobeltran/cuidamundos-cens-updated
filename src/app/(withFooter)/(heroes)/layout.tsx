import PathBar from "@/components/heroes/PathBar";

const HeroesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PathBar />
      {children}
    </>
  );
};

export default HeroesLayout;
