import { FC } from 'react';
import { CartIcon } from '../../icons/CartIcon';
import { FavoriteIcon } from '../../icons/FavoriteIcon';
import { OrdersIcon } from '../../icons/OrdersIcon';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import style from './BurgerContent.module.scss';

type Props = {
    onClickCartInBurger: () => void;
    toggleBurger: () => void;
}

const BurgerContent: FC<Props> = ({ onClickCartInBurger, toggleBurger }) => {
    return (
        <div className={style['burger-container']}>
            <div className={style['burger-menu']}>
                <div className={style['burger-menu__headline']}>
                    <h2 className={style['burger-title']}>Меню</h2>
                    <button
                        className={clsx(style['burger-btn'], 'btn-reset')}
                        onClick={toggleBurger}></button>
                </div>
                <ul className={style['burger-content']}>
                    <li
                        className={style['burger-content__item']}
                        onClick={onClickCartInBurger}>
                        <CartIcon /> Корзина
                    </li>
                    <Link
                        to='/favorites'
                        className={style['burger-content__item']}
                        onClick={toggleBurger}>
                        <FavoriteIcon /> Избранное
                    </Link>
                    <Link
                        to='/orders'
                        className={style['burger-content__item']}
                        onClick={toggleBurger}>
                        <OrdersIcon /> Заказы
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default BurgerContent;