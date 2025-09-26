import "./SectionSeparator.css";
import ChevSection from "../assets/chev_section.svg?react";

const SectionSeparator: React.FC = () => {
  return (
    <div className="section-separator">
      <ChevSection className="chev-nav-page" role="button" width={"54.3"} />
    </div>
  );
};

export default SectionSeparator;
