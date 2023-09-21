import Image from "next/image";
import React from "react";
import CENSLogo from "../../public/logos/cens.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white h-[400px] mt-20 rounded-tl-4xl rounded-tr-4xl bg-gradient-to-b from-cens-dark to-green-950 grid grid-cols-6 p-10 px-24">
      <div className="col-span-2">
        <Image
          src={CENSLogo}
          height={128}
          className="brightness-[10]"
          alt="CENS Grupo EPM Logo"
        />
      </div>
      <div className="">
        <h6 className="font-bold text-lg">Company</h6>
        <ul className="list-none font-normal text-stone-300 mt-3">
          <Link href={"/"}>
            <li>Inicio</li>
          </Link>
          <Link href={"/"}>
            <li>Juego</li>
          </Link>
          <Link href={"/"}>
            <li>Aprende</li>
          </Link>
          <Link href={"/"}>
            <li>Blog</li>
          </Link>
          <Link href={"/"}>
            <li>Acerca de nosotros</li>
          </Link>
          <Link href={"/"}>
            <li>Contacto</li>
          </Link>
        </ul>
      </div>
      <div className="">
        <h6 className="font-bold text-lg">Social Media</h6>
        <ul className="list-none font-normal text-stone-300 mt-3">
          <a href={"/"} target="_blank">
            <li>Facebook</li>
          </a>
          <a href={"/"} target="_blank">
            <li>Twitter</li>
          </a>
          <a href={"/"} target="_blank">
            <li>Instagram</li>
          </a>
        </ul>
      </div>
      <div className="">
        <h6 className="font-bold text-lg">Legal</h6>
        <ul className="list-none font-normal text-stone-300 mt-3">
          <Link href={"/"}>
            <li>Term of Services</li>
          </Link>
          <Link href={"/"}>
            <li>Privacy Policy</li>
          </Link>
        </ul>
      </div>
      <div className="">
        <h6 className="font-bold text-lg">Contacto</h6>
        <ul className="list-none font-normal text-stone-300 mt-3">
          <li>info@cens.com</li>
          <li>Cúcuta, Colombia</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
