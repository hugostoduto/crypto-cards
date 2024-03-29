import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
  'X-RapidAPI-Host': import.meta.env.VITE_API_HOST,
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducer: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`coin/${coinId}`),
    }),
    getHistory: builder.query({
      query: (uuid) => createRequest(`/coin/${uuid}/history?timePeriod=3h`),
    }),
  }),
});
export const {
  useGetCryptosQuery,
  useGetHistoryQuery,
  useGetCryptoDetailsQuery,
} = cryptoApi;

/*  getCryptos: builder.query({
   query: (count) => createRequest(`/coins?limit=${count}`),
 }), */

/* /coin/${uuid}/history?timePeriod=24h */
/* /coin/${uuid}/history?coinId=${uuid}&timePeriod=3h */
