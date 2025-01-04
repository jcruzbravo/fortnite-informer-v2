import axios from 'axios';
import { useEffect, useState } from "react";
import endpoints from "../data/endpoints.ts";

const useGetChallenges = () => {
    const [challenges, setChallenges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await axios.get(endpoints.CHALLENGES_IO,
                    {
                        headers: {
                            'Authorization': import.meta.env.VITE_FORTNITEIO_API_KEY,
                            'Content-Type': 'application/json;charset=utf-8',
                        },
                    }
                );
                const data = response.data.bundles[0].bundles;
                setChallenges(data);
                setLoading(false)
            } catch (error) {
                setError("Something went wrong. Please try again later.");
                setLoading(false);
            }
        };
        loadData();
    }, []);
    return { challenges, loading, error };
};

export default useGetChallenges;