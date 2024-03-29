export type TTriviaQuestion = {
  id: number;
  title: string;
  options: string[];
  answer: string;
  image: string;
};

export const cuidaMundosQuestions: TTriviaQuestion[] = [
  {
    id: 1,
    title: "¿Cuál es una fuente de energía renovable?",
    options: ["Solar", "Carbón", "Gasolina"],
    answer: "Solar",
    image:
      "https://jdelectricos.com.co/wp-content/uploads/2021/06/fuentes-renovables.jpg",
  },
  {
    id: 2,
    title: "¿Cuál es el principal gas de efecto invernadero?",
    options: ["Dióxido de carbono (CO2)", "Nitrógeno (N2)", "Oxígeno (O2)"],
    answer: "Dióxido de carbono (CO2)",
    image:
      "https://2.bp.blogspot.com/_nufqsEkAHTc/SdA1U01Yy5I/AAAAAAAAABw/snE7HQcXinA/w1200-h630-p-k-no-nu/gases+efecto+invernadero.bmp",
  },
  {
    id: 3,
    title: "¿Qué tipo de bombillas es más eficiente energéticamente?",
    options: ["LED", "Incandescente", "Fluorescente"],
    answer: "LED",
    image:
      "https://i0.wp.com/www.azpirilejardi.com/wp-content/uploads/2014/11/bombillas-bajo-consumo-led1.jpg",
  },
  {
    id: 4,
    title: "¿Cuál es la principal fuente de contaminación del agua?",
    options: [
      "Vertidos industriales",
      "Basura plástica",
      "Fertilizantes químicos",
    ],
    answer: "Vertidos industriales",
    image:
      "https://www.amoquimicos.com/images/Noticias_2021//quimicos-contaminantes-para-fuentes-hidricas1.jpg",
  },
  {
    id: 5,
    title: "¿Cuál de las siguientes no es una forma de energía renovable?",
    options: ["Carbón", "Eólica", "Hidroeléctrica"],
    answer: "Carbón",
    image: "https://lamamapachama.files.wordpress.com/2015/02/carbon_8547.jpg",
  },
  {
    id: 6,
    title:
      "¿Qué se produce mediante la descomposición de materia orgánica en ausencia de oxígeno?",
    options: ["Metano", "Oxígeno", "Hidrógeno"],
    answer: "Metano",
    image:
      "https://www.shutterstock.com/image-vector/methane-ch4-molecule-model-chemical-600w-1213786645.jpg",
  },
  {
    id: 7,
    title:
      "¿Cuál es el proceso de convertir desechos en materiales reutilizables?",
    options: ["Reciclaje", "Compostaje", "Quema de basura"],
    answer: "Reciclaje",
    image:
      "https://cdn0.ecologiaverde.com/es/posts/6/6/0/cuales_son_los_beneficios_de_reciclar_66_orig.jpg",
  },
  {
    id: 8,
    title: "¿Cuál es el componente más abundante en la atmósfera terrestre?",
    options: ["Nitrógeno (N2)", "Oxígeno (O2)", "Dióxido de carbono (CO2)"],
    answer: "Nitrógeno (N2)",
    image:
      "https://www.researchgate.net/profile/Juan-Rocha-Hoyos/publication/321295360/figure/fig20/AS:564662639251467@1511637472667/Figura-2-Porcentaje-gases-que-conforma-el-aire-Fuente-Autor.png",
  },
  {
    id: 9,
    title: "¿Qué dispositivo convierte la luz solar en electricidad?",
    options: ["Panel solar", "Generador de gasolina", "Turbina eólica"],
    answer: "Panel solar",
    image:
      "https://www.endesa.com/content/dam/endesa-com/endesaclientes/blog/imagees/C%C3%B3mo%20se%20produce%20la%20energ%C3%ADa%20el%C3%A9ctrica%20Energia%20solar%20628x335.jpg",
  },
  {
    id: 10,
    title: "¿Cuál es una fuente de energía no renovable?",
    options: ["Petróleo", "Geotérmica", "Biomasa"],
    answer: "Petróleo",
    image:
      "https://www.renovablesverdes.com/wp-content/uploads/2018/09/Energias-no-renovables.jpg",
  },
  {
    id: 11,
    title:
      "¿Cuál es el proceso de producir electricidad a partir de la diferencia de temperatura entre dos sustancias?",
    options: ["Termoelectricidad", "Fotovoltaica", "Eólica"],
    answer: "Termoelectricidad",
    image:
      "https://www.negocioscontralaobsolescencia.com/files/theme/ART118PRINCIPIOSBASICOS/ART118ELECTRICIDAD09.jpg",
  },
  {
    id: 12,
    title: "¿Cuál es el método más eficiente para ahorrar agua en el hogar?",
    options: [
      "Recolectar agua de lluvia",
      "Dejar el grifo abierto",
      "Usar la lavadora diariamente",
    ],
    answer: "Recolectar agua de lluvia",
    image:
      "https://posdatadigital.press/download/multimedia.normal.aea976692c4bcc3c.416775612d6469612d6d756e6469616c2d5f6e6f726d616c2e706e67.png",
  },
  {
    id: 13,
    title:
      "¿Cuál es la principal fuente de energía utilizada para generar electricidad en todo el mundo?",
    options: ["Carbón", "Energía nuclear", "Viento"],
    answer: "Carbón",
    image:
      "https://stockhead.com.au/wp-content/uploads/2023/07/GettyImages-1399377945-e1689663785845-640x360.jpg",
  },
  {
    id: 14,
    title:
      "¿Cuál es el gas que se utiliza en refrigerantes y que contribuye al agotamiento de la capa de ozono?",
    options: ["Clorofluorocarbonos (CFC)", "Nitrógeno (N2)", "Oxígeno (O2)"],
    answer: "Clorofluorocarbonos (CFC)",
    image:
      "https://files.larepublica.pe/Larepublica/2018/11/05/clorofluorocarbonos-cambio-climatico-onu-1541460457.jpg",
  },
  {
    id: 15,
    title: "¿Cuál es el principal contaminante del aire en áreas urbanas?",
    options: ["Dióxido de nitrógeno (NO2)", "Ozono (O3)", "Hidrógeno (H2)"],
    answer: "Dióxido de nitrógeno (NO2)",
    image:
      "https://cdn.unenvironment.org/s3fs-public/inline-images/Nitrogen-climate_1_Photo_by_Greg_Goebel_from_Loveland_CO%2C_USA_Wikimedia_Commons__-_Dave_Johnson_coal-fired_power_plant%2C_central_Wyoming.jpg_resized_0.jpg",
  },
];
