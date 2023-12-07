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
        href: "/juega/uso-eficiente",
        title: "Uso Eficiente",
      },
      {
        href: "/juega/riesgo-electrico",
        title: "Riesgo Eléctrico",
      },
      {
        href: "/juega/energias-renovables",
        title: "Energías Renovables",
      },
      {
        href: "/juega/generacion-energia",
        title: "Energía Eléctrica",
      },
      {
        href: "/juega/huella-ecologica",
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
