import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterations: number) => {

  for( let i: number = 0 ; i < iterations; i++ ){
    console.log('ahi vamos')
  }

  return `${ iterations } iterations made`


}

const MemoHook = () => {
  const { counter, incrementCounter } = useCounter(10);
  const [show, setShow] = useState<boolean>(true);

  const memorizedValue = useMemo( () => heavyStuff(counter), [counter] );

  return (
    <>
      <h1>
        {" "}
        Counter: <small> {counter} </small>
      </h1>
      
      {memorizedValue }
      <hr />

      <button className="btn btn-primary" onClick={() => incrementCounter(1)}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

export default MemoHook;
