import { FC, useState, useEffect } from 'react';
import { useGetTotalPrice } from '../../hooks/useGetTotalPrice';
import { CartIcon } from '../../icons/CartIcon';
import { FavoriteIcon } from '../../icons/FavoriteIcon';
import { Logotype } from '../../icons/Logotype';
import { OrdersIcon } from '../../icons/OrdersIcon';
import { Burger } from '../Burger';
import { BurgerContent } from '../BurgerContent';
import { Cart } from '../Cart';
import { Link } from 'react-router-dom';
import style from './../Header/Headaer.module.scss';

const Header: FC = () => {

    const [cartOpen, setCartOpen] = useState<boolean>(false);
    const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

    const totalPrice = useGetTotalPrice();

    const onClickCartInBurger = () => {
        setCartOpen(true)
        setBurgerOpen(false)
    };

    const toggleCart = () => setCartOpen(!cartOpen)
    const toggleBurger = () => setBurgerOpen(!burgerOpen)

    useEffect(() => {
        if (cartOpen === true) {
            const close = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    setCartOpen(!cartOpen)
                }
            }
            window.addEventListener('keydown', close)

            return () => window.removeEventListener('keydown', close)
        }
    });

    useEffect(() => {
        if (burgerOpen || cartOpen) {
            window.scrollTo(0, 0);
            document.body.style.overflowY = 'hidden';
        } else if (!burgerOpen && !cartOpen) {
            document.body.style.overflowY = 'visible';
        }
    }, [burgerOpen, cartOpen])

    return (
        <header className={style.header}>
            {cartOpen && <Cart toggleCart={toggleCart} totalPrice={totalPrice} />}
            {burgerOpen && <BurgerContent onClickCartInBurger={onClickCartInBurger} toggleBurger={toggleBurger} />}
            <Link to='/'>
                <div className={style['header-left']}>
                    <Logotype />
                    <div >
                        <h3 className={style['header-title']}>REACT SNEAKERS</h3>
                        <p className={style['header-tagline']}>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className={style['header-right']}>
                <li className={style['header-right__item']} onClick={toggleCart}>
                    <CartIcon />
                    <span className={style['header-right__price']}>{totalPrice} руб.</span>
                </li>
                <Link to='/favorites' className={style['header-right__item']}>
                    <li><FavoriteIcon /></li>
                </Link>
                <Link to='/orders' className={style['header-right__item']}>
                    <li> <OrdersIcon /></li>
                </Link>
                <Burger burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
            </ul>
        </header>
    );
}

export default Header;