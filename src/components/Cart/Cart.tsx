import clsx from 'clsx';
import React, { FC } from 'react';
import { CartSneakersType } from '../../globalTypes';
import CartFooter from '../CartFooter/CartFooter';
import CartItem from '../CartItem/CartItem';
import style from './Cart.module.scss';
import CartEmpty from './CartEmpty';



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
                        {
                            cartItems.length > 0 && <CartFooter totalPrice={totalPrice} />
                        }
                    </>
                }
            </div>
        </div>
    );
}

export default Cart;

