import { useCallback, useState } from "react"
import ShowIncrement from "./ShowIncrement"


const CallbackHook = () => {

    const [counter, setCounter] = useState<number>(10);
    
    const increment = useCallback(
        ( value: number ) => {
            setCounter( (counter) => counter + value)
        },
        []
    )

  return (
    <>
        <h1> useCallback Hook: {counter} </h1>
        <hr />

        <ShowIncrement 
            increment={ () => increment( 5 ) }
        />


    </>
  )
}

export default CallbackHook
