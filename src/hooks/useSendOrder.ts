import { ErrorResponseModel } from '../models';
import { useState, useEffect } from 'react';
import { useDeleteSneakersMutation, useGetCartItemsQuery } from '../redux/injects/injectedCart';
import { useAddOrderMutation } from '../redux/injects/injectedOrder';

export const useSendOrder = (setAnError: (x: ErrorResponseModel | any) => void) => {

    const { data = [] } = useGetCartItemsQuery();

    const [clickOrder, setclickOrder] = useState(false);

    const [addOrders, addOrdersStatuses] = useAddOrderMutation();

    const [deleteCartItems, deleteCartItemsStatuses] = useDeleteSneakersMutation();

    const checkoutSneakers = async () => {
        await addOrders(data);
        setclickOrder(true)
    }

    const cleanCart = async () => {
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            await deleteCartItems(item.id);
        };
    }

    useEffect(() => {
        if (addOrdersStatuses.isError) {
            setAnError(addOrdersStatuses)
        } else if (deleteCartItemsStatuses.isError) {
            setAnError(deleteCartItemsStatuses)
        }
    }, [addOrdersStatuses, deleteCartItemsStatuses]);

    useEffect(() => {
        if (!addOrdersStatuses.isError && clickOrder) {
            cleanCart()
        }
    }, [clickOrder]);

    return { checkoutSneakers }
}