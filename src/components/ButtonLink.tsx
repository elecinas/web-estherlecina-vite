import "./ButtonLink.css";
import { Link } from "react-router-dom";

type ButtonLink = {
  classList: string[];
  label: string;
  href: string;
  target?: "_blank";
  title?: string;
};

const ButtonLink: React.FC<ButtonLink> = ({
  classList = [],
  label,
  href,
  target,
  title,
}) => {
  const classes =
    ["button-link", ...classList].filter(Boolean).join(" ") || undefined;
  return (
    <Link
      className={classes}
      to={href}
      title={title ?? "button link"}
      target={target}
    >
      {label}
    </Link>
  );
};

export default ButtonLink;
