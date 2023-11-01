import { useState } from "react";

const CounterApp = () => {
  const [counters, setCounters] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counters;

  return (
    <>
      <h1>Counter: {counter1}</h1>
      <button
        className="btn"
        onClick={() => setCounters({ ...counters, counter1: counter1 + 1 })}
      >
        + 1
      </button>

      <hr />

      <h1>Counter: {counter2}</h1>
      <button
        className="btn"
        onClick={() => setCounters({ ...counters, counter2: counter2 + 1 })}
      >
        + 1
      </button>

      <hr />

      <h1>Counter: {counter3}</h1>
      <button
        className="btn"
        onClick={() => setCounters({ ...counters, counter3: counter3 + 1 })}
      >
        + 1
      </button>
    </>
  );
};

export default CounterApp;
