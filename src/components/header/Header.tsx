"use client";

import React, { useEffect, useState } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  useEffect(() => {
    setMenuToggle(false);
  }, [pathname]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <DesktopNavbar />
      <MobileNavbar toggleMenu={() => setMenuToggle(!menuToggle)} />
      {menuToggle ? <MobileMenu /> : null}
    </header>
  );
};

export default Header;
