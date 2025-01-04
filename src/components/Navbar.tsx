import { useState } from "react";
import { NavLink, Link } from "react-router";
import logo from "../assets/images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import "../styles/navbar.scss";
import MenuMobile from "./MenuMobile.tsx";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav>
            <div className="menu-mobile-icon" onClick={() => handleMenuClick()}>
                <GiHamburgerMenu />
            </div>
            {showMenu && <MenuMobile />}
            <Link to="/">
                <img src={logo} alt="home" />
            </Link>
            <ul>
                <li>
                    <NavLink to="/">
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/news">
                        Noticias
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/shop">
                        Tienda de objetos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/challenges">
                        Desafíos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/search-account">
                        Buscar cuenta
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
