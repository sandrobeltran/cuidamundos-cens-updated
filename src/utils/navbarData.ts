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
        href: "/juega/cuidamundos",
        title: "Cuidamundos",
      },
      {
        href: "/felix/uso-eficiente",
        title: "Uso Eficiente de la Energía Eléctrica",
      },
      {
        href: "/felix/riesgo-electrico",
        title: "Prevención del Riesgo Eléctrico",
      },
      {
        href: "/jirol/energias-renovables",
        title: "Fuentes de Energías Renovables y No Renovables",
      },
      {
        href: "/jirol/fuentes-energia",
        title: "Proceso de la Energía Eléctrica",
      },
      {
        href: "/purita/huella-ecologica",
        title: "Huella Ecológica",
      },
    ],
  },
  {
    href: "/aprende",
    title: "Ignis",
  },
  {
    href: "/contacto",
    title: "Contacto",
  },
];
