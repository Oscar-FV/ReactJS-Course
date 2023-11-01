import { useState } from "react"

export const useCounter = ( initialValue: number ) => {

    const [ counter, setCounter ] = useState<number>( initialValue );

    const incrementCounter = (value: number) => {
        setCounter( counter + value);
    }

    const resetCounter = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        incrementCounter,
        resetCounter
    }
}