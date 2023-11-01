import { useState } from "react";
import {AddCategory, GifGrid} from './components'

const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>([
    "memes",
    "life style",
  ]);

  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory.toLowerCase())) return;

    setCategories([newCategory.toLowerCase(), ...categories]);
  };

  function capitalizeWords(input: string): string {
    const words = input.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((category) => {
        return <GifGrid key={category} category={capitalizeWords(category)} />;
      })}
    </>
  );
};

export default GifExpertApp;
