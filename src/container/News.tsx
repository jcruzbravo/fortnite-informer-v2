import useGetNews from "../hooks/useGetNews.ts";
import ItemNews from "../components/ItemNews.tsx";
import {FadeLoader} from "react-spinners";

const News = () => {
    const { news, loading, error } = useGetNews();

    return (
        <section>
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                    Noticias
                </h1>

                {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                {loading ? (
                    <div className="flex flex-col items-center justify-center">
                        <FadeLoader color={"#2563EB"} loading={loading}/>
                    </div>
                ) : (
                    <div className="container">
                        {news.map((n, index) => (
                            <ItemNews key={index} news={n}/>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default News;