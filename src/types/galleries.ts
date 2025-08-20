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

export type Image = {
  src: string;
  alt: string;
  legend?: string;
  width?: number;
  height?: number;
};

export type LinkDirection = "internal" | "external";

export type WorkLink = {
  href: string;
  title: string;
  label: string;
  linkDirection: LinkDirection;
  target?: "_blank";
};

export type EmbedType = "youtube" | "vimeo" | "figma" | "url";

export interface EmbedProps {
  type: EmbedType;
  src: string;
  title?: string;
}

export type PageModule = {
  text?: string;
  images?: Image[];
  embeds?: EmbedProps[];
};

export type Gallery = {
  id: string;
  portfolioLabel: PortfolioLabel;
  title: string;
  description: string;
  cardImage: Image;
  links?: WorkLink[];
  pageContent: PageModule[];
};