import { useEffect, useState, useRef } from "react"
export const useTimer = (start, end) => {
    const [count, setCount] = useState(start);
    let interval = useRef()
    useEffect(() => {
        interval.current = setInterval(() => {
            setCount((prev) => prev + 10);
        }, 10);
    }, []);

    if (count === end) {
        clearInterval(interval.current);
    }

    return count;
}
