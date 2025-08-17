// Este tipo compara cada elemento de la lista
// con los que ya han aparecido.
// Si encuentra uno repetido,
// devuelve una tupla de error
// para que TypeScript lo marque en VS Code.

// type UniqueArray<
//   Arr extends readonly any[],
//   Seen extends readonly any[] = []
// > = Arr extends readonly [infer First, ...infer Rest]
//   ? First extends Seen[number]
//     ? ["❌ ID duplicado:", First]
//     : UniqueArray<Rest, [...Seen, First]>
//   : Arr;

// Definimos un helper para extraer todos los IDs y pasarlos por UniqueArray.

// type AllIds<G extends readonly Gallery[]> =
//   // IDs de las galerías
//   | G[number]["id"]
//   // IDs de todos los pageContent
//   | G[number]["pageContent"][number]["id"];

export type portfolioLabel =
  | "Illustration"
  | "Comic"
  | "UxUiDesign"
  | "GraphicDesign"
  | "WebDevelopment"
  | "Others";

export type image = {
  src: string;
  alt: string;
  legend?: string;
  width?: number;
  height?: number;
};

export type linkDirection =
  | "figma"
  | "github"
  | "youtube"
  | "vimeo"
  | "internal"
  | "external";

export type workLink = {
  href: string;
  title: string;
  label: string;
  linkDirection: linkDirection;
  target?: "_blank";
};

export type pageModule = {
  text?: string;
  images?: image[];
};

export type Gallery = {
  id: string;
  portfolioLabel: portfolioLabel;
  title: string;
  description: string;
  cardImage: image;
  links?: workLink[];
  pageContent: pageModule[];
};

export const galleries: Gallery[] = [
  {
    id: "comic-erin",
    portfolioLabel: "Comic",
    title: "Erin. Memorias de una mercenaria",
    description: "La historia de una mercenaria que no consigue trabajo.",
    cardImage: {
      src: "/images/comic_136_erin.jpg",
      alt: "alt de la imagen",
    },
    links: [
      {
        href: "https://tienda.edicionesbabylon.es/shop/28573-erin-1676",
        title: "Vínculo hacia la tienda de la editorial",
        label: "Cómpralo :)",
        linkDirection: "external",
        target: "_blank",
      },
      {
        href: "https://neovallense.blogspot.com/2020/09/erin-de-esther-lecina.html",
        title: "Crítica de la obra por Neovallense",
        label: "Leer crítica",
        linkDirection: "external",
        target: "_blank",
      },
      {
        href: "https://mundosdeairin.blogspot.com/2020/11/erin-esther-lecina.html",
        title: "Crítica de la obra por Mundosdeairin",
        label: "Leer crítica",
        linkDirection: "external",
        target: "_blank",
      },
      {
        href: "https://www.koukyouzen.com/2019/01/entrevista-esther-lecina.html",
        title: "Entrevista por motivo de la publicación de Erin",
        label: "Leer entrevista",
        linkDirection: "external",
        target: "_blank",
      },
    ],
    pageContent: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut nisl at eros dapibus pretium. Sed vitae tortor tempor, posuere ipsum nec, placerat nibh. Sed congue nisl purus, et molestie ante placerat sed. Nunc sollicitudin, diam nec condimentum accumsan, erat erat congue lorem, ac eleifend.",
        images: [
          {
            src: "/images/comic_124_125_erin.jpg",
            legend: "Muestra interior a doble página",
            alt: "Se ve a Erin cayendo dentro de una sala llena de enemigos.",
          },
          {
            src: "/images/comic_136_erin.jpg",
            legend: "Muestra de interior página individual",
            alt: "Se ve a Erin lanzándose hacia una bola negra que la va a absorver.",
          },
          {
            src: "/images/comic_180_erin.jpg",
            legend: "Src con dos punticos",
            alt: "Src con dos punticos",
          },
        ],
      },
      {
        text: "Quisque quis laoreet elit, volutpat sodales velit. Etiam eleifend nunc id convallis ultricies. Duis sodales sit amet nunc ac volutpat. Morbi ac consequat lorem. Nulla volutpat velit eget cursus ultrices. Quisque tincidunt nulla velit, eu aliquet odio ultrices in. Ut cursus non ligula ut efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque lacinia ullamcorper malesuada. Nulla nunc dui, tincidunt.",
      },
    ],
  },
  {
    id: "ilutracion-ideas-de-raquel",
    portfolioLabel: "Illustration",
    title: "Ilustraciones para los libros Las ideas de Raquel",
    description: "Ilustraciones para los dos libros de la youtuber Raquel",
    cardImage: {
      src: "/images/react.svg",
      alt: "alt de la imagen",
    },
    links: [
      {
        href: "disseny-ideas-de-raquel",
        title: "Vínculo hacia la tienda de la editorial",
        label: "Ve a las ilustraciones",
        linkDirection: "internal",
      },
    ],
    pageContent: [
      {
        text: "Ut cursus non ligula ut efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque lacinia ullamcorper malesuada. Nulla nunc dui, tincidunt.",
        images: [
          {
            src: "/images/react.svg",
            legend: "Leyenda",
            alt: "Descripción",
          },
        ],
      },
      {
        text: "Sed eu dui urna. Phasellus convallis mattis enim pretium condimentum. Etiam at volutpat orci. Phasellus laoreet sem non velit venenatis dapibus. Donec tincidunt sollicitudin arcu id pellentesque. Mauris egestas augue et nibh gravida, at condimentum nunc pellentesque. Aenean molestie neque feugiat felis posuere, in bibendum mauris pretium. Donec vel diam pulvinar, aliquam mi eu, semper turpis. Praesent aliquet dictum sagittis. Pellentesque a justo pharetra, elementum dui vitae, faucibus sem. Nulla commodo aliquam dui, vel molestie libero luctus nec. Maecenas in molestie ex. Etiam venenatis porta.",
      },
    ],
  },
  {
    id: "disseny-ideas-de-raquel",
    portfolioLabel: "GraphicDesign",
    title: "Diseño editorial para los libros Las ideas de Raquel",
    description: "Diseño de cubiertas e interiores para los dos libros de la youtuber Raquel",
    cardImage: {
      src: "/images/react.svg",
      alt: "alt de la imagen",
    },
    links: [
      {
        href: "ilutracion-ideas-de-raquel",
        title: "Vínculo hacia la tienda de la editorial",
        label: "Ve al diseño editorial",
        linkDirection: "internal",
      },
    ],
    pageContent: [
      {
        text: "Ut cursus non ligula ut efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque lacinia ullamcorper malesuada. Nulla nunc dui, tincidunt.",
        images: [
          {
            src: "/images/react.svg",
            legend: "Leyenda",
            alt: "Descripción",
          },
        ],
      },
      {
        text: "Sed eu dui urna. Phasellus convallis mattis enim pretium condimentum. Etiam at volutpat orci. Phasellus laoreet sem non velit venenatis dapibus. Donec tincidunt sollicitudin arcu id pellentesque. Mauris egestas augue et nibh gravida, at condimentum nunc pellentesque. Aenean molestie neque feugiat felis posuere, in bibendum mauris pretium. Donec vel diam pulvinar, aliquam mi eu, semper turpis. Praesent aliquet dictum sagittis. Pellentesque a justo pharetra, elementum dui vitae, faucibus sem. Nulla commodo aliquam dui, vel molestie libero luctus nec. Maecenas in molestie ex. Etiam venenatis porta.",
      },
    ],
  },
];
// ] as const satisfies UniqueArray<AllIds<typeof galleries>[]>;
