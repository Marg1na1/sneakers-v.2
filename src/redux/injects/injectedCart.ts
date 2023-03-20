import { CartSneakersModel } from 'models';
import { sneakersApi } from 'redux/sneakers.api';

const injectedCart = sneakersApi.injectEndpoints({
    endpoints: (builder) => ({
        getCartItems: builder.query<CartSneakersModel[], void>({
            query: () => 'cartItems',
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'CartItems' as const, id })), 'CartItems']
                    : ['CartItems'],
        }),
        addSneakersToCart: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `cartItems`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['CartItems'],
        }),
        deleteSneakersFromCart: builder.mutation({
            query: (id) => ({
                url: `cartItems/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['CartItems'],
        }),
    }),
    overrideExisting: false,
})

export const {
    useGetCartItemsQuery,
    useAddSneakersToCartMutation,
    useDeleteSneakersFromCartMutation
} = injectedCart;
