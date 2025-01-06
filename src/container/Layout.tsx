import Navbar from "../components/Navbar.tsx";
import { Outlet } from "react-router";

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-700">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
