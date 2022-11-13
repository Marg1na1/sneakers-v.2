import { SneakersType, CartSneakersType, OrdersType } from '../globalTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { url } from './apiKey.env';

export const sneakersApi = createApi({
    reducerPath: 'sneakersApi',
    tagTypes: ['CartItems', 'FavoriteItems', 'OrderItems'],
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: (builder) => ({
        getSneakers: builder.query<SneakersType[], void>({
            query: () => 'cards',
        }),
        getCartItems: builder.query<CartSneakersType[], void>({
            query: () => 'cartItems',
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'CartItems' as const, id })), 'CartItems']
                    : ['CartItems'],
        }),
        getFavoritesItem: builder.query<SneakersType[], void>({
            query: () => 'favorites',
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'FavoriteItems' as const, id })), 'FavoriteItems']
                    : ['FavoriteItems'],
        }),
        getOrders: builder.query<OrdersType[], void>({
            query: () => 'orders',
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'OrderItems' as const, id })), 'OrderItems']
                    : ['OrderItems'],
        }),
        getSearchedItems: builder.query<SneakersType[], string>({
            query: (value) => `cards/?search=${value}`,
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'CartItems' as const, id })), 'CartItems']
                    : ['CartItems'],
        }),
        addSneakers: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `cartItems`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['CartItems'],
        }),
        addFavorites: builder.mutation({
            query: ({ ...data }) => ({
                url: 'favorites',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['FavoriteItems'],
        }),
        addOrder: builder.mutation({
            query: ({ id, ...data }) => ({
                url: 'orders',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['OrderItems'],
        }),
        deleteSneakers: builder.mutation({
            query: (id) => ({
                url: `cartItems/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['CartItems'],
        }),
        deleteFavoriteItem: builder.mutation({
            query: (id) => ({
                url: `favorites/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['FavoriteItems'],
        }),
        deleteOrder: builder.mutation({
            query: (id) => ({
                url: `orders${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['OrderItems'],
        }),
    }),
})

export const {
    useGetSneakersQuery,
    useGetCartItemsQuery,
    useAddSneakersMutation,
    useDeleteSneakersMutation,
    useAddFavoritesMutation,
    useGetFavoritesItemQuery,
    useDeleteFavoriteItemMutation,
    useAddOrderMutation,
    useGetOrdersQuery,
    useDeleteOrderMutation,
    useGetSearchedItemsQuery
} = sneakersApi
