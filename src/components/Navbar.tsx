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
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/news">News</NavLink>
                </li>
                <li>
                    <NavLink to="/shop">Shop</NavLink>
                </li>
                <li>
                    <NavLink to="/challenges">Challenges</NavLink>
                </li>
                <li>
                    <NavLink to="/search">Search Account</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
