import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import Small from './Small';

const Memorize = () => {

  const { counter, incrementCounter } = useCounter(10);
  const [ show, setShow ] = useState<boolean>(true);

  return (
    <>
        <h1> Counter: <Small value={counter} /></h1>
        <hr />
        <button
            className="btn btn-primary"
            onClick={ () => incrementCounter(1) }
        >
            +1
        </button>

        <button 
          className="btn btn-outline-primary"
          onClick={ () => setShow( !show ) }
        >
          Show/Hide { JSON.stringify(show)}
        </button>
    </>
  )
}

export default Memorize
