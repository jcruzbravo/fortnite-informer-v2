import { useState, useEffect } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

// @ts-ignore
const Paginator = ({ page, setPage, maximum }) => {
    const [input, setInput] = useState(page);

    useEffect(() => {
        setInput(page);
    }, [page]);

    const nextPage = () => {
        if (page < maximum) {
            setPage(page + 1);
        }
    };

    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    // @ts-ignore
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            const value = parseInt(e.target.value);
            if (value < 1 || value > maximum || isNaN(value)) {
                setPage(1);
            } else {
                setPage(value);
            }
        }
    };

    // @ts-ignore
    const onChange = (e) => {
        setInput(e.target.value)
    };

    return (
        <div className="flex justify-center gap-4 items-center">
            <button disabled={page <= 1} onClick={previousPage}>
                <GrPrevious />
            </button>
            <input
                className="text-center"
                onChange={onChange}
                onKeyDown={onKeyDown}
                name="page"
                autoComplete="off"
                value={input}
            />
            <p>de {maximum}</p>
            <button disabled={page >= maximum} onClick={nextPage}>
                <GrNext />
            </button>
        </div>
    );
};

export default Paginator;
