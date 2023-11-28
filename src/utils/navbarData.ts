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
    items: [
      {
        href: "/jirol",
        title: "Jirol",
      },
      {
        href: "/felix",
        title: "Félix",
      },
      {
        href: "/purita",
        title: "Purita",
      },
    ],
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

  },
  {
    href: "/contacto",
    title: "Contacto",
  },
];
