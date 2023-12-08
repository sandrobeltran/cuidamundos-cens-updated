import PathBar from "@/components/heroes/PathBar";
import SkyBackground from "@/components/heroes/SkyBackground";

const PathBarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PathBar />
      {children}
    </>
  );
};

export default PathBarLayout;
