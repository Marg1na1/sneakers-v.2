import React, { FC } from 'react';
import style from './CartFooter.module.scss';
import clsx from 'clsx';

const arrow = './../assets/img/arrow.svg';

type CartFooterType = {
    totalPrice: number,
    checkoutSneakers: () => void
}

const CartFooter: FC<CartFooterType> = ({ totalPrice, checkoutSneakers }) => { 
    return (
        <div className={style['cart-footer']}>
            <ul className={style['cart-footer__list']}>
                <li className={style['cart-footer-item']}>
                    <p className={style['cart-footer-item__key']}>Итого:</p>
                    <div className={style['cart-footer-item__dashes']}></div>
                    <p className={style['cart-footer-item__value']}>{totalPrice} руб.</p>
                </li>
                <li className={style['cart-footer-item']}>
                    <p className={style['cart-footer-item__key']}>Налог 5%:</p>
                    <div className={style['cart-footer-item__dashes']}></div>
                    <p className={style['cart-footer-item__value']}>{Math.floor((totalPrice * 0.05) * 100) / 100} руб.</p>
                </li>
            </ul>
            <button className={clsx(style['cart-footer__btn'], 'green-btn', 'btn-reset')} onClick={() => checkoutSneakers()}>Оформить заказ
                <img src={arrow} alt="" />
            </button>
        </div>
    );
}

export default CartFooter;