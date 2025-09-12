import ElsImago from "../assets/ELS_imago.svg?react";
import AboutIcon from "../assets/about.svg?react";
import GalleryIcon from "../assets/briefcase.svg?react";
import GraphicDesignIcon from "../assets/ruler-combined.svg?react";
import IllustrationIcon from "../assets/pencil.svg?react";
import UxuiIcon from "../assets/share-nodes.svg?react";
import CodeIcon from "../assets/code.svg?react";
import OthersIcon from "../assets/hand-sparkles.svg?react";
import ContactIcon from "../assets/phone.svg?react";
import BlogIcon from "../assets/message.svg?react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import { useLanguage } from "../context/languageContext";
import { headerContent } from "../data/global";

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const languageSelector = (e: { target: { value: string } }) => {
    setLanguage(e.target.value as "en" | "es");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <div className="content-wrapper">
        <div className="nav-menu-container">
          <NavLink to="/">
            <div className="logo">
              <ElsImago width={40} height={40} />
              <p className="els">
                EL<span className="colored-w">W</span>
              </p>
            </div>
          </NavLink>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <svg
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </div>
        <nav className={`nav-menu-list ${isMenuOpen ? "menu-visible" : ""}`}>
          <div className="nav-menu-list-content">
            <div className="nav-menu-list-top-items">
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleMenu}
              >
                <span className="navbar-toggler-icon">
                  <svg
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                  </svg>
                </span>
              </button>
              <select
                className="language-selector"
                value={language}
                onChange={(e) => languageSelector(e)}
              >
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
            </div>
            <ul className="menu-list" onClick={toggleMenu}>
              <li>
                <AboutIcon className="menu-list-icon" width={16} height={16} />
                <NavLink to="/about">
                  {headerContent.translations[language].navBar.about}
                </NavLink>
              </li>
              <li className="menu-list-father">
                <div className="menu-list-father-wrapper">
                  <GalleryIcon
                    className="menu-list-icon"
                    width={16}
                    height={16}
                  />
                  <NavLink to="/portfolio">
                    {headerContent.translations[language].navBar.portfolio}
                  </NavLink>
                </div>

                <ul className="menu-list-nested">
                  <li>
                    <GraphicDesignIcon
                      className="menu-list-icon"
                      width={16}
                      height={16}
                    />
                    <NavLink to="/graphic-design">
                      {
                        headerContent.translations[language].navBar
                          .graphicDesign
                      }
                    </NavLink>
                  </li>
                  <li>
                    <IllustrationIcon
                      className="menu-list-icon"
                      width={16}
                      height={16}
                    />
                    <NavLink to="/illustration">
                      {
                        headerContent.translations[language].navBar
                          .illustrationAndComic
                      }
                    </NavLink>
                  </li>
                  <li>
                    <UxuiIcon
                      className="menu-list-icon"
                      width={16}
                      height={16}
                    />
                    <NavLink to="/ux-ui-design">
                      {headerContent.translations[language].navBar.designUxUi}
                    </NavLink>
                  </li>
                  <li>
                    <CodeIcon
                      className="menu-list-icon"
                      width={16}
                      height={16}
                    />
                    <NavLink to="/development">
                      {headerContent.translations[language].navBar.development}
                    </NavLink>
                  </li>
                  <li>
                    <OthersIcon
                      className="menu-list-icon"
                      width={16}
                      height={16}
                    />
                    <NavLink to="/others">
                      {headerContent.translations[language].navBar.others}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <ContactIcon
                  className="menu-list-icon"
                  width={16}
                  height={16}
                />
                <NavLink to="/contact">
                  {headerContent.translations[language].navBar.contact}
                </NavLink>
              </li>
              <li>
                <BlogIcon className="menu-list-icon" width={16} height={16} />
                <NavLink to="/blog">
                  {headerContent.translations[language].navBar.blog}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
