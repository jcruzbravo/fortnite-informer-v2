import axios from 'axios';
import { useEffect, useState } from 'react';
import endpoints from "../data/endpoints.ts";

const useGetFullShop = () => {
    const [shop, setShop] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [lastUpdate, setLastUpdate] = useState("");

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await axios.get(endpoints.SHOP_IO,
                    {
                        headers: {
                            'Authorization': import.meta.env.VITE_FORTNITEIO_API_KEY,
                            'Content-Type': 'application/json;charset=UTF-8',
                        },
                    }
                );
                const data = response.data;
                const shop = data.shop;
                setLastUpdate(data.lastUpdate.date);
                setShop(shop);
                setLoading(false);
            } catch (error) {
                setError("Something went wrong. Please try again later.");
                setLoading(false);
            }
        };
        loadData();
    }, []);

    return { shop, loading, error, lastUpdate };
};

export default useGetFullShop;