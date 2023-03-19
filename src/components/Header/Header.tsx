import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGetTotalPrice } from '../../hook/useGetTotalPrice';
import Burger from '../Burger/Burger';
import BurgerContent from '../BurgerContent/BurgerContent';
import Cart from '../Cart/Cart';
import style from './../Header/Hedaer.module.scss';

const logo = './../assets/img/image 4.svg';
const cart = './../assets/img/Group.svg';
const heart = './../assets/img/heart.svg';
const profile = './../assets/img/Union.svg';

const Header: FC = () => {

    const [cartOpen, setCartOpen] = useState<boolean>(false);
    const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

    const totalPrice = useGetTotalPrice();

    const toggleCart = () => {
        setCartOpen(!cartOpen)
        setBurgerOpen(false)
    };

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
        if (burgerOpen === true || cartOpen === true) {
            window.scrollTo(0, 0);
            document.body.style.overflowY = "hidden";
        } else if (!burgerOpen === true && !cartOpen === true) {
            document.body.style.overflowY = "visible";
        }
    }, [burgerOpen, cartOpen])

    if (cartOpen === true) {
        window.scrollTo(0, 0);
        document.body.style.overflowY = "hidden";
    }
    return (
        <header className={style.header}>
            {
                cartOpen && <Cart toggleCart={toggleCart} totalPrice={totalPrice} />
            }
            {
                burgerOpen && <BurgerContent toggleCart={toggleCart} setBurgerOpen={setBurgerOpen} />
            }
            <Link to="/">
                <div className={style['header-left']}>
                    <img src={logo} height='40px' width='40px' />
                    <div >
                        <h3 className={style['header-title']}>REACT SNEAKERS</h3>
                        <p className={style['header-tagline']}>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className={style['header-right']}>
                <li className={style['header-right__item']} onClick={toggleCart}>
                    <img src={cart} alt="" />
                    <span className={style['header-right__price']}>{totalPrice} руб.</span>
                </li>
                <Link to="/favorites" className={style['header-right__item']}>
                    <li >
                        <img src={heart} alt="" />
                    </li>
                </Link>
                <Link to="/orders" className={style['header-right__item']}>
                    <li>
                        <img src={profile} alt="" />
                    </li>
                </Link>
                <Burger burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
            </ul>
        </header>
    );
}

export default Header;