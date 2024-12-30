import { useState, useEffect } from 'react';

const useLoadingTimeout = (delay = 4000) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, delay);

        return () => clearTimeout(timeout);
    }, [delay]);

    return isLoading;
};

export default useLoadingTimeout;