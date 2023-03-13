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
    getHystory: builder.query({
      query: (uuid, period) =>
        createRequest(`/coin/${uuid}/history?timePeriod=${period}`),
    }),
  }),
});
export const { useGetCryptosQuery, useGetHystoryQuery } = cryptoApi;

/*  getCryptos: builder.query({
   query: (count) => createRequest(`/coins?limit=${count}`),
 }), */
