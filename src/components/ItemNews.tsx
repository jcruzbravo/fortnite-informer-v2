import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useLoadingTimeout from "../hooks/useLoadingTimeout";
import React from "react";

interface News {
    title: string;
    tabTitle: string;
    body: string;
    image: string;
}

const ItemNews: React.FC<{ news: News }> = ({ news }) => {
    const isLoading = useLoadingTimeout(4000);

    if (isLoading) {
        return (
            <div className="w-full flex flex-col md:flex-row gap-4 bg-white border border-gray-200 rounded-lg shadow mt-2 mb-2 p-4">
                <div className="w-full md:w-1/3 rounded-lg overflow-hidden">
                    <Skeleton
                        count={1}
                        height={256}
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="flex flex-col flex-grow mt-4">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">
                        <Skeleton
                            count={3}
                            height={50}
                            style={{ width: "100%" }}
                        />
                    </h5>
                </div>
            </div>
        );
    } else {
        return (
            <div className="w-full flex flex-col items-center md:flex-row gap-4 mt-2 mb-2 bg-white border border-gray-200 rounded-lg shadow-md p-4">
                <div className="rounded-lg overflow-hidden">
                    <img
                        src={news.image}
                        alt={news.tabTitle}
                        className="h-64 object-cover"
                    />
                </div>
                <div className="flex flex-col mt-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {news.title}
                    </h3>
                    <h4 className="text-sm font-medium text-black dark:text-gray-400">
                        {news.tabTitle}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">{news.body}</p>
                </div>
            </div>
        );
    }
};

export default ItemNews;
