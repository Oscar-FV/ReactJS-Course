import { useEffect, useState } from "react";
import { useCounter } from "./useCounter";

export const useFetch = (url: string) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const { counter, incrementCounter } = useCounter(1);

  useEffect(() => {
    getFetch();
  }, [url]);

  const getFetch = async () => {
    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data: data,
      isLoading: false,
      hasError: null,
    });
  };

  const onNextQuote = () => {
    setState({
      ...state,
      isLoading: true,
    });

    incrementCounter(1);
    getFetch();
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    counter,
    onNextQuote,
  };
};
