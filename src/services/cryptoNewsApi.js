import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_NEWS_API_URL,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", process.env.REACT_APP_RAPIDAPI_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
        query: ({ newsCategory, count }) => `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`}),  
  }),
});

export const {useGetCryptoNewsQuery } = cryptoNewsApi;
