import { NavLink } from "react-router";
import "../styles/menumobile.scss";

const MenuMobile = () => {
    return (
        <div className="MenuMobile">
            <div className="menu-mobile-container">
                <ul>
                    <li>
                        <NavLink to="/home">Home</NavLink>
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
            </div>
        </div>
    );
};

export default MenuMobile;
