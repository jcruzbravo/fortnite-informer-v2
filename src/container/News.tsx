import useGetNews from "../hooks/useGetNews.ts";
import ItemNews from "../components/ItemNews.tsx";

const News = () => {
    const {news, loading, error} = useGetNews();

    return (
        <div className="News">
            <section>
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                        Battle Royale News
                    </h1>

                    {error && <div className="text-red-500 text-center mb-4">{error}</div>}


                    {loading ? (
                         <div className="text-gray-500 text-center mb4">Loading...</div>
                    ): (
                        <div className="container">
                            {news.map((n, index) => (
                                <ItemNews key={index} news={n}/>
                            ))}
                        </div>
                    )}
                </div>
            </section>

        </div>
    );
}

export default News;