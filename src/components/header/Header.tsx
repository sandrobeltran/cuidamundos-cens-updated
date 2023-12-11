"use client";

import React, { useEffect, useState } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import LoginModal from "../usuario/LoginModal";
import RegisterModal from "../usuario/RegisterModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const pathname = usePathname();
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  useEffect(() => {
    setMenuToggle(false);
  }, [pathname]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full mobile-land:absolute">
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <DesktopNavbar />
      <MobileNavbar toggleMenu={() => setMenuToggle(!menuToggle)} />
      {menuToggle ? <MobileMenu /> : null}
      <LoginModal />
      <RegisterModal />
    </header>
  );
};

export default Header;
