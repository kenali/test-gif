import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const BASE_URL = "https://api.giphy.com/v1/gifs/";

export const giphyApi = createApi({
  reducerPath: "giphyApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    searchGifs: builder.query({
      query: (term: string) => `search?api_key=${API_KEY}&q=${term}&limit=20`,
    }),
    getRandomGifs: builder.query({
      query: () => `trending?api_key=${API_KEY}&limit=20`,
    }),
  }),
});

export const { useSearchGifsQuery, useGetRandomGifsQuery } = giphyApi;
