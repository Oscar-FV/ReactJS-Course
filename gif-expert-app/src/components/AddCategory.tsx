import { useState } from 'react';

interface AddCategoryProps {
  onNewCategory : (category: string) => void
}

export const AddCategory = ({onNewCategory}:AddCategoryProps) => {

  const [InputValue, setInputValue] = useState <string> ('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanValue = InputValue.trim()
    if (cleanValue != ''){
      onNewCategory( cleanValue );
      setInputValue('');
    }
  };


  return (
    <form 
      onSubmit={ event => onSubmit(event) }
      aria-label="form"
    >
      <input 
        type="text" 
        placeholder="Search for gifs" 
        value={InputValue} 
        onChange={event => setInputValue(event.target.value)}
      />
    </form>
      
  )
}

