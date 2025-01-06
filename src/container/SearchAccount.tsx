import { useState } from "react";
import useGetAccountStats from "../hooks/useGetAccountStats.ts";
import { MdDelete } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FadeLoader } from "react-spinners";

const SearchAccount = () => {
    const [username, setUsername] = useState('');
    const [image, setImage] = useState('all'); // Valor predeterminado
    const [timeWindow, setTimeWindow] = useState('');
    const [query, setQuery] = useState<string | null>(null);

    const { accountStats, loading, error, reset } = useGetAccountStats(query);

    const searchAccount = () => {
        if (!username.trim()) {
            alert("Por favor, ingresa un nombre de usuario.");
            return;
        }
        const params = new URLSearchParams();
        params.append('name', username);
        params.append('image', image);
        params.append('timeWindow', timeWindow);
        setQuery(params.toString());
    };

    return (
        <section className="flex flex-col items-center justify-center">
            <div className="container max-w-sm px-6 py-8">
                <h1 className="text-4xl font-extrabold text-white mb-6 text-center">
                    Buscar Cuenta
                </h1>

                <form className="flex flex-col items-center gap-4">
                    <div className="relative w-full">
                        <input
                            className="w-full px-4 py-3 text-gray-900 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder="Ingresa tu nombre de usuario"
                            aria-label="Buscar cuenta"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                    </div>

                    <div className="relative w-full">
                        <label
                            htmlFor="images"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Selecciona un tipo de entrada
                        </label>
                        <select
                            id="images"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="all">Todos</option>
                            <option value="keyboardMouse">Teclado y Ratón</option>
                            <option value="gamepad">Control</option>
                            <option value="touch">Pantalla Táctil</option>
                        </select>
                    </div>

                    <div className="relative w-full">
                        <label
                            htmlFor="timeWindow"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Selecciona un período de tiempo
                        </label>
                        <select
                            id="timeWindow"
                            value={timeWindow}
                            onChange={(e) => setTimeWindow(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="season">Temporada</option>
                            <option value="lifetime">Todo el tiempo</option>
                        </select>
                    </div>

                    <div className="flex w-full justify-between gap-4">
                        <button
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                            type="button"
                            onClick={searchAccount}
                        >
                            <FaSearch/>
                            Buscar
                        </button>
                        <button
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 focus:ring-2 focus:ring-red-500"
                            type="button"
                            onClick={() => {
                                setUsername('');
                                setImage('all');
                                setTimeWindow('');
                                setQuery(null);
                                reset();
                            }}
                        >
                            <MdDelete/>
                            Limpiar
                        </button>
                    </div>
                </form>
            </div>

            {loading && <FadeLoader color="#2563EB" loading={loading}/>}
            <div className="container m-2">
                {error && <p className="text-red-500 text-center">Error: {error}</p>}
                {accountStats && Object.keys(accountStats).length > 0 && (
                    <div
                        className="flex gap-4 dark:bg-gray-800 dark:border-gray-700"
                        key={accountStats.account.id}
                    >
                        <div className="bg-white border border-gray-200 rounded-lg shadow">
                            <img
                                loading="lazy"
                                className="rounded-t-lg object-contain h-56 md:h-64 lg:h-80 xl:h-96"
                                src={accountStats.image}
                                alt=""
                            />
                        </div>
                        <div className="p-5">
                            <div className="text-xl font-semibold text-gray-800 dark:text-white">
                                {accountStats.account.name}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                <span className="text-gray-500 dark:text-gray-400">Pase de batalla</span>
                                <div className="flex gap-2">
                                    <span>Nivel: {accountStats.battlePass.level}</span>
                                    <span>Progreso: {accountStats.battlePass.progress}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SearchAccount;
