export interface IGiphy {
  id: string;
  title: string;
  url: string;
}

interface GiphyApiResponse {
  data: {
    id: string;
    title: string;
    images: {
      downsized_medium: {
        url: string;
      };
    };
  }[];
}

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=PXaYj2ACPeGCERKRkX6qBSK3H4pxFlrG&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data }: GiphyApiResponse = await resp.json();
  const gifs: IGiphy[] = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
