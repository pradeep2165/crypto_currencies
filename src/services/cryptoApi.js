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
    getCryptoDetails: builder.query({ query: (coinId) => `/coin/${coinId}` }),
    getCryptoHistory: builder.query({ query: ({ coinId, timeperiod }) => `coin/${coinId}/history?timeperiod=${timeperiod}`}),
    
  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery } = cryptoApi;
