import React, { FC } from 'react';
import { CartSneakersType } from '../../globalTypes';
import style from './OrderItem.module.scss';

const OrderItem: FC<CartSneakersType> = ({ img, name, price }) => { 
    return (
        <li className={style['orders-section__item']}>
            <img src={img} className={style['orders-section__img']} width={133} height={112} />
            <div className={style['orders-section-info']}>
                <p className={style['orders-section__name']}>{name}</p>
                <p className={style['orders-section__price']}>Цена:<span>{price}</span>руб.</p>
            </div> 
        </li>
    );
}

export default OrderItem;