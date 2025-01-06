import { useState } from "react";
import { NavLink, Link } from "react-router"; // Asegúrate de usar "react-router-dom".
import logo from "../assets/images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuMobile from "./MenuMobile.tsx";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="relative bg-gray-900 text-white p-4">
            <div className="flex items-center justify-between">
                <button
                    className="text-2xl focus:outline-none md:hidden"
                    onClick={handleMenuClick}
                >
                    <GiHamburgerMenu />
                </button>
                <Link to="/">
                    <img src={logo} alt="home" className="h-10" />
                </Link>
                <ul className="hidden md:flex space-x-4">
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
            </div>
            {showMenu && <MenuMobile />}
        </nav>
    );
};

export default Header;
