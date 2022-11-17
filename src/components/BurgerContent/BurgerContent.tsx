import clsx from 'clsx';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './BurgerContent.module.scss';


const cart = './../assets/img/Group.svg';
const heart = './../assets/img/heart.svg';
const profile = './../assets/img/Union.svg';

type BurgerContentProps = {
    toggleCart: () => boolean | void;
    setBurgerOpen: (x: boolean) => void;
}

const BurgerContent: FC<BurgerContentProps> = ({ toggleCart, setBurgerOpen }) => {
    return (
        <div className={style['burger-container']}>
            <div className={style['burger-menu']}>
                <div className={style['burger-menu__headline']}>
                    <h2 className={style['burger-title']}>Меню</h2>
                    <button className={clsx(style['burger-btn'], "btn-reset")} onClick={() => setBurgerOpen(false)}></button>
                </div>
                <ul className={style['burger-content']}>
                    <li className={style['burger-content__item']} onClick={toggleCart}>
                        <img src={cart} alt="" /> Корзина
                    </li>
                    <Link to="/favorites" className={style['burger-content__item']} onClick={() => setBurgerOpen(false)}>
                        <img src={heart} alt="" /> Избранное

                    </Link>
                    <Link to="/orders" className={style['burger-content__item']} onClick={() => setBurgerOpen(false)}>
                        <img src={profile} alt="" /> Заказы

                    </Link>
                </ul>
            </div>
        </div>

    );
}

export default BurgerContent;