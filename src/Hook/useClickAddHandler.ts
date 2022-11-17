import { useState, useEffect } from 'react';
import { ErrorResponseType, SneakersType } from '../globalTypes';
import { useAddSneakersMutation, useDeleteSneakersMutation, useGetCartItemsQuery } from "../redux/sneakersAPI";

export const useClickAddHandler = (parentId: number, obj: SneakersType, setAnError: (x: ErrorResponseType | any) => void) => {

    const [isAdded, setIsAdded] = useState(false);

    const { data = [], isLoading } = useGetCartItemsQuery();

    const [addSneakers, addSneakersStatuses] = useAddSneakersMutation();

    const [deleteItem, deleteItemStatuses] = useDeleteSneakersMutation();

    const onClickAdded = async () => {
        if (data.some((obj) => Number(obj.parentId) === Number(parentId))) {
            let exId = data.find((obj) => Number(obj.parentId) === Number(parentId))
            await deleteItem(exId!.id)
        } else {
            await addSneakers(obj)
        }
    }

    useEffect(() => {
        if (!isLoading) {
            if (data.some((obj) => Number(obj.parentId) === Number(parentId))) {
                setIsAdded(true)
            } else {
                setIsAdded(false)
            }
        }
    }, [data]);

    useEffect(() => {
        if (addSneakersStatuses.isError) {
            setAnError(addSneakersStatuses)
        } else if (deleteItemStatuses.isError) {
            setAnError(deleteItemStatuses)
        }
    }, [addSneakersStatuses, deleteItemStatuses]);

    return { onClickAdded, isAdded }
}