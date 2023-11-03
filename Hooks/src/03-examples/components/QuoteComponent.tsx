interface QuoteComponentProps{
  character: string;
  quote: string;
  image: string;
}

export const QuoteComponent = ( {character, quote, image}: QuoteComponentProps ) => {
  return (
    <blockquote className="blockquote text-end">
          <p className="mb-1"> { quote } </p>
          <img src={image} alt={ character } />
          <footer className="blockquote-footer mt-1"> { character } </footer>
    </blockquote>
  )
}

