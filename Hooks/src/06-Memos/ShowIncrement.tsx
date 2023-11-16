
interface ShowIncrementProps{
    increment: (value: number) => void
}

const ShowIncrement = ( {increment}: ShowIncrementProps ) => {
  return (
    <>
        <button 
            className="btn btn-primary"
            onClick={ () =>{
                increment( 5 );
            }}
        >
            Increment
        </button>
    </>
  )
}

export default ShowIncrement
