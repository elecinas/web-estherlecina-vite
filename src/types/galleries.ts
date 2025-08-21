import type { Image, SupportedLanguages, LinkDirection } from "./global";

export type PortfolioLabel =
  | "Illustration"
  | "Comic"
  | "UxUiDesign"
  | "GraphicDesign"
  | "WebDevelopment"
  | "Others";

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

export type ProjectContent = {
  portfolioLabel: PortfolioLabel;
  title: string;
  description: string;
  cardImage: Image;
  links?: WorkLink[];
  pageContent: PageModule[];
};

export type Project = {
  id: string;
  translations: Record<SupportedLanguages, ProjectContent>;
};
