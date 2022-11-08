import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_CRYPTO_API_URL,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", process.env.REACT_APP_RAPIDAPI_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({ query: (count) => `/coins?limit=${count}` }),
    
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
