import { FC } from 'react'
import { Arrow } from 'icons/Arrow';
import clsx from 'clsx';
import style from './Cart.module.scss';

const emptyCart = './../assets/img/empty-cart.png'

type Props = {
    toggleCart: () => boolean | void
}

const CartEmpty: FC<Props> = ({ toggleCart }) => {
    return (
        <div className={style['cart-empty']}>
            <div className={style['cart-empty-content']}>
                <img
                    src={emptyCart}
                    alt='empty box'
                    className={style['cart-empty-content__img']}
                    width={120}
                    height={120} />
                <h3 className={style['cart-empty-content__title']}>Корзина пустая</h3>
                <p className={style['cart-empty-content__descr']}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                <button className={clsx(style['cart-empty-content__btn'], 'btn-reset')} onClick={toggleCart} >
                    <Arrow />
                    Вернуться назад
                </button>
            </div>
        </div>
    );
};

export default CartEmpty;