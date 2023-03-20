import { OrdersModel } from 'models';
import { sneakersApi } from 'redux/sneakers.api';

const injectedCart = sneakersApi.injectEndpoints({
    endpoints: (builder) => ({
        getOrders: builder.query<OrdersModel[], void>({
            query: () => 'orders',
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'OrderItems' as const, id })), 'OrderItems']
                    : ['OrderItems'],
        }),
        addOrder: builder.mutation({
            query: ({ id, ...data }) => ({
                url: 'orders',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['OrderItems'],
        }),
        deleteOrder: builder.mutation({
            query: (id) => ({
                url: `orders/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['OrderItems'],
        }),
    }),
    overrideExisting: false,
})

export const {
    useGetOrdersQuery,
    useAddOrderMutation,
    useDeleteOrderMutation
} = injectedCart;
