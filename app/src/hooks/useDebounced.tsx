import { useEffect, useState } from "react";

const useDebounced = (value: any, delay: number = 500) => {

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {

        const timeout = setTimeout(() => {
            setDebouncedValue(value);
            console.log(value);
        },delay);

        return () => { clearTimeout(timeout) } ; 

    }, [value, delay]);

    return debouncedValue;

}

export default useDebounced;