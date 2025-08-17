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
  pageContent: pageModule[];
};

export const galleries: Gallery[] = [
  {
    id: "comic-freelance",
    portfolioLabel: "Comic",
    title: "Cómic autobiográfico de la vida freelance",
    description: "Historias ilustradas breves sobre la vida freelance",
    cardImage: {
      src: "/images/react.svg",
      alt: "alt de la imagen",
    },
    pageContent: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut nisl at eros dapibus pretium. Sed vitae tortor tempor, posuere ipsum nec, placerat nibh. Sed congue nisl purus, et molestie ante placerat sed. Nunc sollicitudin, diam nec condimentum accumsan, erat erat congue lorem, ac eleifend.",
        images: [
          {
            src: "/images/react.svg",
            legend: "Src public/images",
            alt: "Src public/images",
          },
          {
            src: "/images/react.svg",
            legend: "Src con un puntico",
            alt: "Src con un puntico",
          },
          {
            src: "/images/react.svg",
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
    id: "ilustracion-barcanova",
    portfolioLabel: "Illustration",
    title: "Ilustraciones para Editorial Barcanova",
    description: "Ilustraciones sueltas y proyectos personales",
    cardImage: {
      src: "/images/react.svg",
      alt: "alt de la imagen",
    },
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
        text:
          "Sed eu dui urna. Phasellus convallis mattis enim pretium condimentum. Etiam at volutpat orci. Phasellus laoreet sem non velit venenatis dapibus. Donec tincidunt sollicitudin arcu id pellentesque. Mauris egestas augue et nibh gravida, at condimentum nunc pellentesque. Aenean molestie neque feugiat felis posuere, in bibendum mauris pretium. Donec vel diam pulvinar, aliquam mi eu, semper turpis. Praesent aliquet dictum sagittis. Pellentesque a justo pharetra, elementum dui vitae, faucibus sem. Nulla commodo aliquam dui, vel molestie libero luctus nec. Maecenas in molestie ex. Etiam venenatis porta.",
      },
    ],
  },
];
// ] as const satisfies UniqueArray<AllIds<typeof galleries>[]>;
