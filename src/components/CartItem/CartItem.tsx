import clsx from 'clsx';
import React, { FC } from 'react';
import { CartSneakersType } from '../../globalTypes';
import { useDeleteSneakersMutation } from '../../redux/sneakersAPI';
import style from './CartItem.module.scss';


const CartItem: FC<CartSneakersType> = ({ id, name, parentId, price, img }) => {

    const [deleteItem] = useDeleteSneakersMutation();

    const clickDelete = async (id: string) => {
        await deleteItem(id)
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