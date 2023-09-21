import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
};

export default Header;
