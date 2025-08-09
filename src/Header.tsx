import React from "react";
import "./Header.css"

const Header = () => {
    return (
        <header>
            <nav>
                <ul className="menu-list">
                    <li><a href="#">Sobre mí</a></li>
                    <li><a href="#">Galería</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;