import { NavLink } from "react-router-dom";
import "./Header.css"
import { useLanguage } from "../context/languageContext";
import { headerContent } from "../data/global";

const Header = () => {

    const { language, setLanguage } = useLanguage();
    const languageSelector = (e: { target: { value: string; }; }) => {
        setLanguage(e.target.value as "en" | "es")
    }

    return (
        <header>
            <div className="logo">
                <NavLink to="/">EstherLecinaWeb</NavLink>
            </div>
            <nav>
                <ul className="menu-list">
                    <li><NavLink to="/about">{headerContent.translations[language].navBar.about}</NavLink></li>
                    <li><NavLink to="/portfolio">Galería</NavLink>
                        <ul>
                            <li><NavLink to="/graphic-design">{headerContent.translations[language].navBar.graphicDesign}</NavLink></li>
                            <li><NavLink to="/illustration">{headerContent.translations[language].navBar.illustrationAndComic}</NavLink></li>
                            <li><NavLink to="/ux-ui-design">{headerContent.translations[language].navBar.designUxUi}</NavLink></li>
                            <li><NavLink to="/development">{headerContent.translations[language].navBar.development}</NavLink></li>
                            <li><NavLink to="/others">{headerContent.translations[language].navBar.others}</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/contact">{headerContent.translations[language].navBar.contact}</NavLink></li>
                    <li><NavLink to="/blog">{headerContent.translations[language].navBar.blog}</NavLink></li>
                </ul>
            </nav>
            <div className="language-select">
                <select value={language} onChange={(e) => languageSelector(e)}>
                    <option value="en">EN</option>
                    <option value="es">ES</option>
                </select>
            </div>
        </header>
    )
}

export default Header;