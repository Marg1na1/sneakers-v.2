import clsx from 'clsx';
import React, { FC, useEffect } from 'react';
import { CartSneakersType } from '../../globalTypes';
import CartItem from '../CartItem/CartItem';
import style from './Cart.module.scss';
import CartEmpty from './CartEmpty';

const arrow = './../assets/img/arrow.svg';

type CartType = {
    toggleCart: () => boolean | void
    cartItems: CartSneakersType[]
    totalPrice: number
}



const Cart: FC<CartType> = ({ toggleCart, cartItems, totalPrice }) => {
    return (
        <div className={style['cart-shadow']}>
            <div className={style.cart}>
                <div className={style['cart-headline']}>
                    <h2 className={style['cart-title']}>Корзина</h2>
                    <button className={clsx(style['cart-btn'], 'btn-reset')} onClick={toggleCart}></button>
                </div>
                {
                    <>
                        <ul className={style['cart-main']}>
                            {
                                cartItems.length > 0 ?
                                    cartItems?.map((obj) => (<CartItem key={obj.parentId} {...obj} />)) :
                                    <CartEmpty toggleCart={toggleCart} />

                            }
                        </ul>
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
                            <button className={clsx(style['cart-footer__btn'], 'green-btn', 'btn-reset')}>Оформить заказ
                                <img src={arrow} alt="" />
                            </button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default Cart;

