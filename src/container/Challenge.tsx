import { useState } from "react";
import useGetChallenges from "../hooks/useGetChallenges.ts";
import { FadeLoader } from "react-spinners";
import { FaHammer } from "react-icons/fa";

const Challenge = () => {
    const { challenges, loading, error } = useGetChallenges();
    const [activeTabs, setActiveTabs] = useState<{ [key: number]: string }>({});

    const handleTabChange = (index: number, tab: string) => {
        setActiveTabs((prev) => ({ ...prev, [index]: tab }));
    };

    return (
        <section className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                Desafíos de batalla campal
            </h1>

            {error && <div className="text-red-500 text-center mb-4">{error}</div>}

            {loading ? (
                <div className="flex flex-col items-center justify-center">
                    <FadeLoader color="#2563EB" loading={loading} />
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    {challenges.map((challenge: any, index: number) => {
                        const activeTab = activeTabs[index] || "description";
                        return (
                            <div
                                key={challenge.id}
                                className="w-full border rounded-lg shadow bg-gray-800 border border-gray-700 mb-6"
                            >
                                <ul className="flex text-sm font-medium text-center text-gray-500" role="tablist">
                                    <li className="me-2 hover:bg-gray-700 rounded-none">
                                        <button
                                            type="button"
                                            className={`inline-block p-4 ${
                                                activeTab === "description"
                                                    ? "text-blue-600 border-b-2 border-blue-600"
                                                    : "hover:text-gray-600"
                                            }`}
                                            onClick={() => handleTabChange(index, "description")}
                                        >
                                            Información general
                                        </button>
                                    </li>
                                    <li className="me-2 hover:bg-gray-700 rounded-none">
                                        <button
                                            type="button"
                                            className={`inline-block p-4 ${
                                                activeTab === "quests"
                                                    ? "text-blue-600 border-b-2 border-blue-600"
                                                    : "hover:text-gray-600"
                                            }`}
                                            onClick={() => handleTabChange(index, "quests")}
                                        >
                                            Desafíos
                                        </button>
                                    </li>
                                </ul>
                                <div className="p-4">
                                    {activeTab === "description" && (
                                        <div className="p-4 rounded-lg md:p-8 ">
                                            <h2 className="flex gap-2 mb-3 text-3xl font-extrabold tracking-tight text-blue-600">
                                                <FaHammer /> [{challenge.name != '' ? challenge.name : "No Name"}]
                                            </h2>
                                            <p className="mb-3 text-gray-500">{challenge.unlockType}</p>
                                        </div>
                                    )}
                                    {activeTab === "quests" && (
                                        <div className="p-4 rounded-lg md:p-8">
                                            <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-blue-600">
                                                Desafíos
                                            </h2>
                                            <ul role="list" className="space-y-4 text-gray-500 flex flex-col">
                                                {challenge.quests.map((quest: any, index: number) => (
                                                    <li key={quest.id} className="border-b py-2 hover:bg-gray-700 cursor-default">
                                                        <p>
                                                            <strong>Desafío #</strong>{index}
                                                        </p>
                                                        <p>
                                                            <strong>ID:</strong> {quest.id}
                                                        </p>
                                                        <p>
                                                            <strong>Nombre:</strong> {quest.name}
                                                        </p>
                                                        <p>
                                                            <strong>Descripción corta:</strong> {quest.shortDescription}
                                                        </p>
                                                        <p>
                                                            <strong>Descripción:</strong> {quest.description}
                                                        </p>
                                                        <p>
                                                            <strong>Desbloqueado el:</strong> {quest.enabledDate != null ? new Date(quest.enabledDate).toLocaleDateString() : "No Date"}
                                                        </p>
                                                        <p>
                                                            <strong>Total de progreso:</strong> {quest.progressTotal}
                                                        </p>
                                                        <p>
                                                            <strong>Recompensa de XP:</strong> {quest.reward.xp}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default Challenge;
