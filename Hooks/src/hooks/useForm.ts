import { ChangeEvent, useState } from "react";

export const useForm = <T>( initialForm: T ) => {   //* <T> help us so that the state can recive and return any type

    const [formState, setFormState] = useState( initialForm );
    
      const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const onResetForm = () => {
        setFormState( initialForm );
      }
  
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }

}

