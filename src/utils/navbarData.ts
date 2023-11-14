export interface INavbarLinkItem {
  title: string;
  href: string;
}

export interface INavbarProps extends INavbarLinkItem {
  items?: INavbarLinkItem[];
  selected?: boolean;
}

export const navbarData: INavbarProps[] = [
  {
    href: "/",
    title: "Inicio",
  },
  {
    href: "/juega",
    title: "Juega",
    items: [
      {
        href: "/juega/cuidamundos-trivia",
        title: "CuidaMundos",
      },
      {
        href: "/juega/huella-ecologica",
        title: "Huella de Ecológica",
      },
    ],
  },
  {
    href: "/aprende",
    title: "Dalia",
    items: [
      {
        href: "/aprende/capitan",
        title: "Capitán",
      },
      {
        href: "/aprende/felix",
        title: "Félix",
      },
      {
        href: "/aprende/purita",
        title: "Purita",
      },
    ],
  },
  {
    href: "/contacto",
    title: "Contacto",
  },
];
