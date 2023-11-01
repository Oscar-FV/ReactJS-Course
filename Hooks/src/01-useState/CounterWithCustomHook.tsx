import { useCounter } from "../hooks/useCounter"

const CounterWithCustomHook = () => {

  const { counter, incrementCounter, resetCounter } = useCounter( 10 );

  return (
    <>
        <h1>Counter with Hook: { counter } </h1>
        <hr />

        <button className="btn btn-primary" onClick={() => incrementCounter(1)}>+1</button>
        <button className="btn btn-primary" onClick={resetCounter}>Reset</button>
        <button className="btn btn-primary" onClick={() => incrementCounter(-1)}>-1</button>
    </>
  )
}

export default CounterWithCustomHook
