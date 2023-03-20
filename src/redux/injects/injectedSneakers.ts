import { SneakersModel } from '../../models';
import { sneakersApi } from '../sneakers.api';

const injectedCart = sneakersApi.injectEndpoints({
    endpoints: (builder) => ({
        getSneakers: builder.query<SneakersModel[], string>({
            query: (value) => `cards/?search=${value}`,
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'CartItems' as const, id })), 'CartItems']
                    : ['CartItems'],
        })
    }),
    overrideExisting: false,
})

export const { useGetSneakersQuery } = injectedCart;
