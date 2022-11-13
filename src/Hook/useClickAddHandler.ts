import { useState, useEffect } from 'react';
import { ErrorResponseType, SneakersType } from '../globalTypes';
import { useAddSneakersMutation, useDeleteSneakersMutation, useGetCartItemsQuery } from "../redux/sneakersAPI";

const useClickAddHandler = (parentId: number, obj: SneakersType, setAnError: (x: ErrorResponseType | any) => void) => {

    const [isAdded, setIsAdded] = useState(false);

    const cartItems = useGetCartItemsQuery();

    const [addSneakers, addSneakersStatuses] = useAddSneakersMutation();

    const [deleteItem, deleteItemStatuses] = useDeleteSneakersMutation();

    const onClickAdded = async () => {
        if (cartItems.data!.some((obj) => Number(obj.parentId) === Number(parentId))) {
            let exId = cartItems.data!.find((obj) => Number(obj.parentId) === Number(parentId))
            await deleteItem(exId!.id)
        } else {
            await addSneakers(obj)
        }
    }

    useEffect(() => {
        if (!cartItems.isLoading) {
            if (cartItems.data!.some((obj) => Number(obj.parentId) === Number(parentId))) {
                setIsAdded(true)
            } else {
                setIsAdded(false)
            }
        }
    }, [cartItems.data]);

    useEffect(() => {
        if (addSneakersStatuses.isError) {
            setAnError(addSneakersStatuses)
        } else if (deleteItemStatuses.isError) {
            setAnError(deleteItemStatuses)
        }
    }, [addSneakersStatuses, deleteItemStatuses])



    return { onClickAdded, isAdded }
}

export default useClickAddHandler; 