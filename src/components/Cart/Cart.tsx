import axios from 'axios';
import clsx from 'clsx';
import React, { FC } from 'react';
import { CartSneakersType } from '../../globalTypes';
import { useAddOrderMutation } from '../../redux/sneakersAPI';
import CartFooter from '../CartFooter/CartFooter';
import CartItem from '../CartItem/CartItem';
import style from './Cart.module.scss';
import CartEmpty from './CartEmpty';



type CartPropsType = {
    toggleCart: () => boolean | void
    cartItems: CartSneakersType[]
    totalPrice: number
}

const Cart: FC<CartPropsType> = ({ toggleCart, cartItems, totalPrice }) => {

    const [addOrders] = useAddOrderMutation();

    const checkoutSneakers = async () => {
        console.log(cartItems)
        await addOrders(cartItems)
    }   

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
                            cartItems.length > 0 && <CartFooter totalPrice={totalPrice} checkoutSneakers={checkoutSneakers} />
                        }
                    </>
                }
            </div>
        </div>
    );
}

export default Cart;

