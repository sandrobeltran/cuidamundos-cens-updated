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
        title: "CuidaMundos"
      }
    ]
  },
  {
    href: "/aprende",
    title: "Aprende",
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
    href: "/blog",
    title: "Blog",
  },
  {
    href: "/nosotros",
    title: "Acerca de Nosotros",
  },
  {
    href: "/contacto",
    title: "Contacto",
  },
];
