import { NavLink } from "react-router";

const MenuMobile = () => {
    return (
        <div className="bg-blue-800 w-full p-4 absolute top-16 left-0 z-20 shadow-lg">
            <div className="flex flex-col items-center">
                <ul className="list-none space-y-4">
                    <li>
                        <NavLink
                            to="/home"
                            className="text-white font-bold no-underline block"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/shop"
                            className="text-white font-bold no-underline block"
                        >
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/challenges"
                            className="text-white font-bold no-underline block"
                        >
                            Challenges
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/search"
                            className="text-white font-bold no-underline block"
                        >
                            Search Account
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MenuMobile;
