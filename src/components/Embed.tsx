import React from "react";
import type { EmbedProps } from "../types/galleries";

const Embed: React.FC<EmbedProps> = ({ type, src, title = "Embed" }) => {
  switch (type) {
    case "youtube":
      return (
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );

    case "vimeo":
      return (
        <iframe
          src={src}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
        />
      );

    case "figma":
      return (
        <iframe
          src={src}
          title={title}
          allowFullScreen
        />
      );

    case "url":
    default:
      return (
        <iframe
          src={src}
          title={title}
        />
      );
  }
};

export default Embed;
