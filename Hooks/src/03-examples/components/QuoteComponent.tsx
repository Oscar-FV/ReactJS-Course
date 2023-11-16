import { useLayoutEffect, useRef, useState } from 'react';

interface QuoteComponentProps{
  character: string;
  quote: string;
  image: string;
}

export const QuoteComponent = ( {character, quote, image}: QuoteComponentProps ) => {

  const pRef = useRef<HTMLParagraphElement | null>( null );
  const [ boxSize, setBoxSize ] = useState({
    width: 0,
    height: 0
  })

  useLayoutEffect(() => {

    const { height, width } = pRef.current?.getBoundingClientRect();
    setBoxSize({ height, width });
    
  }, [quote]);

  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{display: 'flex'}}
      >
        <p className="mb-1" ref={ pRef} > { quote } </p>
        <img src={image} alt={ character } />
        <footer className="blockquote-footer mt-1"> { character } </footer>
      </blockquote>
    </>
  )
}

