import { FC, useState } from 'react';
import { useGetCartItemsQuery } from '../../redux/injects/injectedCart';
import { CartFooter } from '../CartFooter';
import { CartItem } from '../CartItem';
import { useSendOrder } from '../../hooks/useSendOrder';
import CartEmpty from './CartEmpty';
import ErrorModal from '../ErrorModal/ErrorModal';
import clsx from 'clsx';
import style from './Cart.module.scss';

type Props = {
    toggleCart: () => void;
    totalPrice: number;
}

const Cart: FC<Props> = ({ toggleCart, totalPrice }) => {

    const [anError, setAnError] = useState({ isError: false });

    const { data = [], isError, isSuccess } = useGetCartItemsQuery();

    const { checkoutSneakers } = useSendOrder(setAnError);

    if (isError) {
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
                    <ul className={style['cart-main']}>
                        <CartEmpty toggleCart={toggleCart} />
                    </ul>
                </div>
            </div>
        );
    }

    return (
        <>
            {anError.isError && <ErrorModal {...anError} />}
            <div className={style['cart-shadow']}>
                <div className={style.cart}>
                    <div className={style['cart-headline']}>
                        <h2 className={style['cart-title']}>Корзина</h2>
                        <button className={clsx(style['cart-btn'], 'btn-reset')} onClick={toggleCart}></button>
                    </div>
                    <>
                        <ul className={style['cart-main']}>
                            {
                                data.map((obj, i) => (<CartItem key={i} {...obj} setAnError={setAnError} />))
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

