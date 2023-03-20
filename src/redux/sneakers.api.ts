import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sneakersApi = createApi({
    reducerPath: 'sneakersApi',
    tagTypes: ['CartItems', 'FavoriteItems', 'OrderItems'],
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_KEY }),
    refetchOnFocus: true,
    endpoints: () => ({}),
});

export const { } = sneakersApi;
