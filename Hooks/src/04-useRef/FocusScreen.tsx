import { useRef } from "react";


const FocusScreen = () => {

  const inputRef = useRef<HTMLInputElement | null>( null );

  const onFocus = () => {
    inputRef.current?.select();
  }
  

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            ref={ inputRef }
            className="form-control"
            type="text"
            placeholder="Ingrese Su Nombre"
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={ onFocus }
        >
            Set Focus
        </button>
    </>
  )
}

export default FocusScreen
