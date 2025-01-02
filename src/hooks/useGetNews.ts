import axios from 'axios';
import {useEffect, useState} from "react";
import endpoints from "../data/endpoints";

const useGetNews = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await axios.get(endpoints.NEWS,
                    {
                        headers: {
                            'Authorization': import.meta.env.VITE_FORTNITE_API_KEY,
                            "Access-Control-Allow-Origin": "*",
                            'Cache-Control': 'no-cache, no-store, must-revalidate',
                            'Pragma': 'no-cache',
                            'Expires': '0',
                        },

                    }
                );
                const data = response.data.data.motds;
                setNews(data);
                setLoading(false)
            } catch (error) {
                setError("Something went wrong. Please try again later.");
                setLoading(false);
            }
        };
        loadData();
    }, []);

    return { news, loading, error };
}

export default useGetNews;