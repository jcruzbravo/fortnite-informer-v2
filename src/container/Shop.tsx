import {FadeLoader} from "react-spinners";
import {Suspense, useState} from "react";
import useGetFullShop from "../hooks/useGetFullShop.tsx";
import Paginator from "../components/Paginator.tsx";
import Countdown from "react-countdown";

const Shop = () => {
    const { shop, loading, error, lastUpdate } = useGetFullShop();
    const [page, setPage] = useState(1);
    const [byPage] = useState(10);
    const [isPageLoading, setIsPageLoading] = useState(false);
    const maximum = Math.ceil(shop.length / byPage);
    const nextUpdate = new Date(lastUpdate).getTime() + 24 * 60 * 60 * 1000;

    const handlePageChange = (newPage: number) => {
        setIsPageLoading(true);
        setTimeout(() => {
            setPage(newPage);
            setIsPageLoading(false);
        }, 500);
    };


    return (
        <Suspense fallback={<FadeLoader/>}>
            <section className="container mx-auto px-4 py-6">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold dark:text-white mb-6 text-center">
                        Item Shop
                    </h1>

                    {lastUpdate && (
                        <div>
                            <p>Next update in:</p>
                            <Countdown
                                date={nextUpdate}
                                renderer={({ hours, minutes, seconds }) => (
                                    <span>
                                    {hours}h {minutes}m {seconds}s
                                </span>
                                )}
                            />
                        </div>
                    )}
                </div>

                {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                {loading || isPageLoading ? (
                    <div className="flex flex-col items-center justify-center">
                        <FadeLoader color={"#2563EB"} loading={loading || isPageLoading}/>
                    </div>
                )
                : (
                        <>
                            <div className="grid grid-cols-2 gap-3">
                                {shop
                                    .slice((page - 1) * byPage, (page - 1) * byPage + byPage)
                                    .map((item: any) => (
                                        item.displayAssets.map((asset: any, index: number) => (
                                            <div key={index} className="hover:shadow-lg items-center shadow-lg overflow-hidden transition duration-700 ease-in-out">
                                                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row">
                                                    <img className="object-contain rounded-t-lg h-96 md:rounded-none md:rounded-s-lg" src={asset.full_background ?? asset.url} alt={item.mainId}/>
                                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                            {item.displayName}
                                                        </h5>
                                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                            {item.devName}
                                                        </p>
                                                        <p>
                                                            {item.rarity.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))))}
                            </div>
                            <div className="mt-8">
                                <Paginator page={page} setPage={handlePageChange} maximum={maximum}/>
                            </div>
                        </>
                    )}
            </section>
        </Suspense>
    );
};

export default Shop;