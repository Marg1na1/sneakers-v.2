import { SneakersType, CartSneakersType } from '../globalTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const url: string = 'https://6351a086dfe45bbd55c560cb.mockapi.io';

export const sneakersApi = createApi({
    reducerPath: 'sneakersApi',
    tagTypes: ['CartItems'],
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
        addSneakers: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `cartItems`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['CartItems'],
        }),
        deleteSneakers: builder.mutation({
            query: (id) => ({
                url: `cartItems/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['CartItems'],
        }),
    }),
})

export const { useGetSneakersQuery, useGetCartItemsQuery, useAddSneakersMutation, useDeleteSneakersMutation } = sneakersApi

// <CartSneakersType, Partial<CartSneakersType> & Pick<CartSneakersType, 'id'>> 