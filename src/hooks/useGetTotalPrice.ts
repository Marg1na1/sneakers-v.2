import { useEffect, useState } from 'react';
import { useGetCartItemsQuery } from '../redux/sneakersAPI';

export const useGetTotalPrice = () => {

    const [totalPrice, setTotalPrtice] = useState<number>(0);

    const { data = [] } = useGetCartItemsQuery();
     
    useEffect(() => {
        setTotalPrtice(data.reduce((acc, current) => acc + current.price, 0)) 
    }, [data]);

    return totalPrice 
}


