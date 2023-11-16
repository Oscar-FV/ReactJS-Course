import { useFetch } from "../hooks/useFetch";
import { LoadingComponent, QuoteComponent } from "../03-examples/components";

interface quoteData {
  character: string;
  quote: string;
  image: string;
}

const Layout = () => {
  const { data, isLoading, counter, onNextQuote } = useFetch(
    "https://thesimpsonsquoteapi.glitch.me/quotes"
  );

  const { character, quote, image } = (!!data && data[0]) || ({} as quoteData);

  return (
    <>
      <h1>The Simpsons Quotes</h1>
      <hr />

      {isLoading ? (
        <LoadingComponent />
      ) : (
        <QuoteComponent 
          character={character} 
          quote={quote} 
          image={image} 
        />
      )}

      <p className="mb-1"> Quotes Generated: {counter} </p>
      <button
        className="btn btn-primary"
        onClick={onNextQuote}
        disabled={isLoading}
      >
        Next Quote
      </button>
    </>
  );
};

export default Layout;
