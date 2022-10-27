import clsx from "clsx";
import React from "react"
import style from './Cart.module.scss';

const emptyCart = './../assets/img/empty-cart.png'
const rightArrow = './../assets/img/right-arrow.svg'

const EmptyCart = () => {
    return (
        <div className={style['cart-empty']}>
            <div className={style['cart-empty-content']}>
                <img src={emptyCart} alt="" className={style['cart-empty-content__img']} width={120} height={120} />
                <h3 className={style['cart-empty-content__title']}>Корзина пустая</h3>
                <p className={style['cart-empty-content__descr']}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                <button className={clsx(style['cart-empty-content__btn'], 'btn-reset')} >
                    <img src={rightArrow} alt="" />
                    Вернуться назад</button>
            </div>
        </div>
    );
};

export default EmptyCart;