import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <header>
            <div className="logo">
                <NavLink to="/">EstherLecinaWeb</NavLink>
            </div>
            <nav>
                <ul className="menu-list">
                    <li><NavLink to="/about">Sobre mí</NavLink></li>
                    <li><NavLink to="/portfolio">Galería</NavLink>
                        <ul>
                            <li><NavLink to="/graphic-design">Diseño Gráfico</NavLink></li>
                            <li><NavLink to="/illustration">Ilustración y cómic</NavLink></li>
                            <li><NavLink to="/ux-ui-design">Diseño UX/UI</NavLink></li>
                            <li><NavLink to="/development">Desarrollo Web</NavLink></li>
                            <li><NavLink to="/others">Otros</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/contact">Contacto</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;