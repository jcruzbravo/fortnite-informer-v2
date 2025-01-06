import { useState, useEffect } from 'react';
import axios from 'axios';
import endpoints from '../data/endpoints.ts';

const useGetAccountStats = (params: string | null): {
    accountStats: any;
    loading: boolean;
    error: string;
    reset: () => void;
} => {
    const [accountStats, setAccountStats] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const reset = () => {
        setAccountStats([]); // Vaciar las estadísticas
        setLoading(false);
        setError('');
    };

    useEffect(() => {
        if (!params) {
            reset(); // Reinicia el estado cuando no hay parámetros
            return;
        }

        const loadData = async () => {
            setLoading(true);
            setError('');
            try {
                const response = await axios.get(
                    `${endpoints.SEARCH_ACCOUNT}?${params}`,
                    {
                        headers: {
                            'Authorization': import.meta.env.VITE_FORTNITE_API_KEY,
                            'Access-Control-Allow-Origin': '*',
                            'Cache-Control': 'no-cache, no-store, must-revalidate',
                            'Pragma': 'no-cache',
                            'Expires': '0',
                        },
                    }
                );
                setAccountStats(response.data.data);
            } catch (error: any) {
                setError(error.response.data.error || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [params]);

    return { accountStats, loading, error, reset };
};

export default useGetAccountStats;
