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
        href: "/felix/uso-eficiente",
        title: "Uso Eficiente",
      },
      {
        href: "/felix/riesgo-electrico",
        title: "Riesgo Eléctrico",
      },
      {
        href: "/jirol/energias-renovables",
        title: "Energías Renovables",
      },
      {
        href: "/jirol/fuentes-energia",
        title: "Fuentes de Energía",
      },
      {
        href: "/purita/huella-ecologica",
        title: "Huella Ecológica",
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
