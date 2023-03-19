import { ErrorResponseModel} from '../models';
import { useEffect, useState } from 'react';
import { useAddFavoritesMutation, useDeleteFavoriteItemMutation, useGetFavoritesItemQuery } from '../redux/sneakersAPI';

export const useClickFavoriteHandler = (parentId: number, obj: any, setAnError: (x: ErrorResponseModel | any) => void) => {

    const [isFavorite, setIsFavorite] = useState(false);

    const { data = [], isLoading } = useGetFavoritesItemQuery();

    const [addFavorite, addFavoriteStatuses] = useAddFavoritesMutation();

    const [deleteFavorite, deleteFavoriteStatuses] = useDeleteFavoriteItemMutation();

    const onClickFavorite = async () => {
        if (data.some((obj) => Number(obj.parentId) === Number(parentId))) {
            let exId = data.find((obj) => Number(obj.parentId) === Number(parentId))
            await deleteFavorite(exId!.id)
        } else {
            await addFavorite(obj)
        }
    };

    useEffect(() => {
        if (!isLoading) {
            if (data.some((obj) => Number(obj.parentId) === Number(parentId))) {
                setIsFavorite(true)
            } else {
                setIsFavorite(false)
            }
        }
    }, [data]);

    useEffect(() => {
        if (addFavoriteStatuses.isError) {
            setAnError(addFavoriteStatuses)
        } else if (deleteFavoriteStatuses.isError) {
            setAnError(deleteFavoriteStatuses)
        }
    }, [addFavoriteStatuses, deleteFavoriteStatuses])

    return { onClickFavorite, isFavorite }
}
