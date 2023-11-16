import React from "react";
import MenuLinkCard from "./MenuLinkCard";
import { navbarData } from "@/utils/navbarData";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";
import Button from "../Button";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

const MobileMenu = () => {
  const user = useUserStore((state) => state.user);
  const { logOut } = useUserStore((state) => state);
  const router = useRouter();

  function handleLogOut() {
    router.push("/");
    localStorage.removeItem("session-token");
    logOut();
  }

  return (
    <div className="fixed bottom-0 left-0 hidden h-[calc(100%-64px)] w-full flex-col items-center gap-10 bg-black/30 backdrop-blur-lg max-lg:flex">
      {user ? (
        <div className="flex w-full flex-col items-center gap-4 pt-12 text-white">
          <Image
            src={user!.avatar}
            alt="Avatar del Usuario"
            width={200}
            height={200}
            className="aspect-square w-5/12 object-cover object-center"
          />
          <div className="flex flex-col items-center text-center">
            <h5 className="text-2xl font-medium">{`${user?.name.split(
              " ",
            )[0]} ${user?.lastname.split(" ")[0]}`}</h5>
            <p className="text-lg text-stone-100">{user?.username}</p>
          </div>
          <div className="flex items-center justify-start gap-1 text-xl font-semibold">
            Puntos:
            <StarIcon color="#ffb800" className="h-7" />
            <p className="text-xl font-semibold">{user?.points}</p>
          </div>
        </div>
      ) : null}
      <ul className="flex w-full flex-col gap-4">
        <li className="w-full">
          {navbarData.map((link) => (
            <MenuLinkCard key={link.title} {...link} />
          ))}
        </li>
      </ul>
      {user ? (
        <div>
          <Button hierarchy="primary" size="lg" onClick={() => handleLogOut()}>
            Cerrar sesión
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default MobileMenu;
