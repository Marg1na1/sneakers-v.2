import { SneakersModel } from '../../models';
import { sneakersApi } from '../sneakers.api';

const injectedCart = sneakersApi.injectEndpoints({
    endpoints: (builder) => ({
        getFavoritesItem: builder.query<SneakersModel[], void>({
            query: () => 'favorites',
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'FavoriteItems' as const, id })), 'FavoriteItems']
                    : ['FavoriteItems'],
        }),
        addFavorites: builder.mutation({
            query: ({ ...data }) => ({
                url: 'favorites',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['FavoriteItems'],
        }),
        deleteFavoriteItem: builder.mutation({
            query: (id) => ({
                url: `favorites/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['FavoriteItems'],
        }),
    }),
    overrideExisting: false,
})

export const {
    useGetFavoritesItemQuery,
    useAddFavoritesMutation,
    useDeleteFavoriteItemMutation
} = injectedCart;
