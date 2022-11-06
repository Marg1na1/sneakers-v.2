import React, { FC } from 'react';
import clsx from 'clsx';
import { useAddOrderMutation, useDeleteSneakersMutation, useGetCartItemsQuery } from '../../redux/sneakersAPI';
import CartFooter from '../CartFooter/CartFooter';
import CartItem from '../CartItem/CartItem';
import style from './Cart.module.scss';
import CartEmpty from './CartEmpty';

type CartPropsType = {
    toggleCart: () => boolean | void
    totalPrice: number
}

const Cart: FC<CartPropsType> = ({ toggleCart, totalPrice }) => {

    const { data = [] } = useGetCartItemsQuery();

    const [addOrders] = useAddOrderMutation();

    const [deleteCartItems] = useDeleteSneakersMutation();

    const checkoutSneakers = async () => {
        // setTimeout(() => { data.length > 0 && data.forEach(async (obj) => await addOrders(obj)) }, 0)
        // setTimeout(() => { data.length > 0 && data.forEach(async (obj) => await deleteCartItems(obj.id)) }, 1000)
        addOrders(data);
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
                                data.length > 0 ?
                                    data?.map((obj) => (<CartItem key={obj.parentId} {...obj} />)) :
                                    <CartEmpty toggleCart={toggleCart} />

                            }
                        </ul>
                        {
                            data.length > 0 && <CartFooter totalPrice={totalPrice} checkoutSneakers={checkoutSneakers} />
                        }
                    </>
                }
            </div>
        </div>
    );
}

export default Cart;

