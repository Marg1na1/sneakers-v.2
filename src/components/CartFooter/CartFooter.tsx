import { FC } from 'react';
import { Arrow } from 'icons/Arrow';
import clsx from 'clsx';
import style from './CartFooter.module.scss';

type Props = {
    totalPrice: number;
    checkoutSneakers: () => void;
}

const CartFooter: FC<Props> = ({ totalPrice, checkoutSneakers }) => {

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
                {/* <img src={arrow} alt="" /> */}
                <Arrow />
            </button>
        </div>
    );
}

export default CartFooter;