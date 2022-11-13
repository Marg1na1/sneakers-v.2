import { useEffect, useState } from 'react';
import { useAddFavoritesMutation, useDeleteFavoriteItemMutation, useGetFavoritesItemQuery } from "../redux/sneakersAPI";

const useClickFavoriteHandler = (parentId: number, obj: any, setAnError: any) => {

    const [isFavorite, setIsFavorite] = useState(false);

    const favoriteItems = useGetFavoritesItemQuery();

    const [addFavorite, addFavoriteStatuses] = useAddFavoritesMutation();

    const [deleteFavorite, deleteFavoriteStatuses] = useDeleteFavoriteItemMutation();

    const onClickFavorite = async () => {
        if (favoriteItems.data!.some((obj) => Number(obj.parentId) === Number(parentId))) {
            let exId = favoriteItems.data!.find((obj) => Number(obj.parentId) === Number(parentId))
            await deleteFavorite(exId!.id)
        } else {
            await addFavorite(obj)
        }
    };

    useEffect(() => {
        if (!favoriteItems.isLoading) {
            if (favoriteItems.data!.some((obj) => Number(obj.parentId) === Number(parentId))) {
                setIsFavorite(true)
            } else {
                setIsFavorite(false)
            }
        }
    }, [favoriteItems.data]);

    useEffect(() => {
        if (addFavoriteStatuses.isError) {
            setAnError(addFavoriteStatuses)
        } else if (deleteFavoriteStatuses.isError) {
            setAnError(deleteFavoriteStatuses)
        }
    }, [addFavoriteStatuses, deleteFavoriteStatuses])


    return { onClickFavorite, isFavorite }
}

export default useClickFavoriteHandler;