import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { useGetCartItemsQuery } from '../../redux/sneakersAPI';
import CartFooter from '../CartFooter/CartFooter';
import CartItem from '../CartItem/CartItem';
import style from './Cart.module.scss';
import CartEmpty from './CartEmpty';
import ErrorModal from '../ErrorModal/ErrorModal';
import useSendOrder from '../../Hook/useSendOrder';

type CartPropsType = {
    toggleCart: () => boolean | void
    totalPrice: number
}

const Cart: FC<CartPropsType> = ({ toggleCart, totalPrice }) => {

    const [anError, setAnError] = useState({ isError: false })

    const { data = [], error } = useGetCartItemsQuery();

    const { checkoutSneakers } = useSendOrder(setAnError);

    if (error) {
        return (
            <div className={style['cart-shadow']}>
                <div className={style.cart}>
                    <div className={style['cart-headline']}>
                        <h2 className={style['cart-title']}>Корзина</h2>
                        <button className={clsx(style['cart-btn'], 'btn-reset')} onClick={toggleCart}></button>
                    </div>
                    <div>Ошибка</div>
                </div>
            </div>
        );
    } else if (data.length === 0) {
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
                                <CartEmpty toggleCart={toggleCart} />
                            </ul>
                        </>
                    }
                </div>
            </div>
        );
    }

    return (
        <>
            {//@ts-ignore
                anError.isError && <ErrorModal {...anError} />}
            <div className={style['cart-shadow']}>
                <div className={style.cart}>
                    <div className={style['cart-headline']}>
                        <h2 className={style['cart-title']}>Корзина</h2>
                        <button className={clsx(style['cart-btn'], 'btn-reset')} onClick={toggleCart}></button>
                    </div>
                    <>
                        <ul className={style['cart-main']}>
                            {
                                data?.map((obj, i) => (<CartItem key={i} {...obj} setAnError={setAnError} />))
                            }
                        </ul>
                        <CartFooter totalPrice={totalPrice} checkoutSneakers={checkoutSneakers} />
                    </>
                </div>
            </div>
        </>
    );
}

export default Cart;

