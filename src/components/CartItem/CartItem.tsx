import React, { FC } from 'react';
import clsx from 'clsx';
import { CartSneakersType } from '../../globalTypes';
import { useDeleteSneakersMutation } from '../../redux/sneakersAPI';
import style from './CartItem.module.scss';

type cartItemTestProps = {
    id: string;
    name: string;
    parentId: number;
    price: number;
    img: string;
    setAnError: any;
}


const CartItem: FC<cartItemTestProps> = ({ id, name, parentId, price, img, setAnError }) => {

    const [deleteItem, deleteItemStatuses] = useDeleteSneakersMutation(); 

    const clickDelete = async (id: string) => {
        await deleteItem(id)
    }

    if (deleteItemStatuses.isError) {
        setAnError(deleteItemStatuses)
    }

    return (
        <li className={style['cart-item']} >
            <div className={style['cart-card']}>
                <picture>
                    <source />
                    < source />
                    <img src={img} alt="" width={70} height={70} />
                </picture>
                < div className={style['cart-card__main']} >
                    <p className={style['cart-card__name']}> {name} </p>
                    < p className={style['cart-card__price']} > {price} руб.</p>
                </div>
                <button className={clsx(style['cart-card__btn'], 'btn-reset')} onClick={() => clickDelete(id)}></button>
            </div>
        </li>
    );
}

export default CartItem;