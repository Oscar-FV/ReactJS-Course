import { useEffect, useState } from "react";
import { getGifs, IGiphy } from "../helpers/getGifs";

export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState<IGiphy[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    getGifs(category).then((newImages) => {
      setImages(newImages);
      setIsLoading(false);
    });
  }, [category]);

  return {
    images: images,
    isLoading: isLoading,
  };
};
