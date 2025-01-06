import {FadeLoader} from "react-spinners";
import {Suspense, useState} from "react";
import useGetFullShop from "../hooks/useGetFullShop.ts";
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
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold dark:text-white mb-6">
                        Tienda de objetos
                    </h1>

                    {lastUpdate && (
                        <div>
                            <p className="text-blue-600 font-bold">Next update in:</p>
                            <Countdown
                                date={nextUpdate}
                                renderer={({ hours, minutes, seconds }) => (
                                    <span className="text-blue-600 font-bold">
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
                            <div className="grid grid-cols-1 gap-4">
                                {shop
                                    .slice((page - 1) * byPage, (page - 1) * byPage + byPage)
                                    .map((item: any) => (
                                        item.displayAssets.map((asset: any, index: number) => (
                                            <div key={index} className="hover:shadow-lg items-center shadow-lg overflow-hidden transition duration-700 ease-in-out">
                                                <div className="flex flex-col items-center bg-gray-800 border border-gray-700 rounded-lg shadow md:flex-row">
                                                    <img loading="lazy" className="object-contain rounded-t-lg h-56 md:h-64 lg:h-80 xl:h-96" src={asset.full_background ?? asset.url} alt={item.mainId}/>
                                                    <div className="flex flex-col gap-2 justify-evenly p-4 leading-normal">
                                                        <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                            {item.displayName} - {item.displayType} - {item.mainType}
                                                        </h5>
                                                        <p className="mb-3 text-sm sm:text-base font-normal text-gray-700 dark:text-gray-400">
                                                            {item.devName}
                                                        </p>
                                                        <p style={{color: item.colors.textBackgroundColor}} className="text-sm font-bold sm:text-base p-1 rounded-md">
                                                            Offer dates: {new Date(item.offerDates.in).toLocaleDateString()} - {new Date(item.offerDates.out).toLocaleDateString()}
                                                        </p>
                                                        <p>
                                                            <span
                                                                className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                                                {item.giftAllowed ? "Gift" : "No Gift"}
                                                            </span>

                                                            <span
                                                                className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                                                {item.buyAllowed ? "Buy" : "No Buy"}
                                                            </span>

                                                            <span
                                                                className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                                                {item.rarity.name}
                                                            </span>

                                                            {item.banner && (
                                                                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                                                    {item.banner.name}
                                                                </span>
                                                            )}
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