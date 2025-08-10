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

  

export type PortfolioLabel =
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
}

export type PageContent =
  | { id: string; type: "text"; content: string }
  | {
      id: string;
      type: "image";
      src: string;
      title: string;
      legend: string;
      alt: string;
    };

export type Gallery = {
  id: string;
  portFolioLabel: PortfolioLabel;
  title: string;
  description: string;
  cardImage: image;
  pageContent: PageContent[];
};

export const galleries: Gallery[] = [
  {
    id: "comic-freelance",
    portFolioLabel: "Comic",
    title: "Cómic autobiográfico de la vida freelance",
    description: "Historias ilustradas breves sobre la vida freelance",
    cardImage: {
      src: "/images/react.svg",
      alt: "alt de la imagen",
    },
    pageContent: [
      {
        id: "comic-freelance-p1",
        type: "text",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut nisl at eros dapibus pretium. Sed vitae tortor tempor, posuere ipsum nec, placerat nibh. Sed congue nisl purus, et molestie ante placerat sed. Nunc sollicitudin, diam nec condimentum accumsan, erat erat congue lorem, ac eleifend.",
      },
      {
        id: "comic-freelance-img1",
        type: "image",
        src: "/images/react.svg",
        title: "Src public/images",
        legend: "Src public/images",
        alt: "Src public/images",
      },
      {
        id: "comic-freelance-img1",
        type: "image",
        src: "/images/react.svg",
        title: "Src con un puntico",
        legend: "Src con un puntico",
        alt: "Src con un puntico",
      },
      {
        id: "comic-freelance-img2",
        type: "image",
        src: "/images/react.svg",
        title: "Src con dos punticos",
        legend: "Src con dos punticos",
        alt: "Src con dos punticos",
      },
      {
        id: "comic-freelance-p2",
        type: "text",
        content:
          "Quisque quis laoreet elit, volutpat sodales velit. Etiam eleifend nunc id convallis ultricies. Duis sodales sit amet nunc ac volutpat. Morbi ac consequat lorem. Nulla volutpat velit eget cursus ultrices. Quisque tincidunt nulla velit, eu aliquet odio ultrices in. Ut cursus non ligula ut efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque lacinia ullamcorper malesuada. Nulla nunc dui, tincidunt.",
      },
    ],
  },
  {
    id: "ilustracion-barcanova",
    portFolioLabel: "Illustration",
    title: "Ilustraciones para Editorial Barcanova",
    description: "Ilustraciones sueltas y proyectos personales",
    cardImage: {
      src: "/images/react.svg",
      alt: "alt de la imagen",
    },
    pageContent: [
      {
        id: "ilustracion-barcanova-p1",
        type: "text",
        content:
          "Ut cursus non ligula ut efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque lacinia ullamcorper malesuada. Nulla nunc dui, tincidunt.",
      },
      {
        id: "ilustracion-barcanova-img1",
        type: "image",
        src: "/images/react.svg",
        title: "Título",
        legend: "Leyenda",
        alt: "Descripción",
      },
      {
        id: "ilustracion-barcanova-p2",
        type: "text",
        content:
          "Sed eu dui urna. Phasellus convallis mattis enim pretium condimentum. Etiam at volutpat orci. Phasellus laoreet sem non velit venenatis dapibus. Donec tincidunt sollicitudin arcu id pellentesque. Mauris egestas augue et nibh gravida, at condimentum nunc pellentesque. Aenean molestie neque feugiat felis posuere, in bibendum mauris pretium. Donec vel diam pulvinar, aliquam mi eu, semper turpis. Praesent aliquet dictum sagittis. Pellentesque a justo pharetra, elementum dui vitae, faucibus sem. Nulla commodo aliquam dui, vel molestie libero luctus nec. Maecenas in molestie ex. Etiam venenatis porta.",
      },
    ],
  },
];
// ] as const satisfies UniqueArray<AllIds<typeof galleries>[]>;
