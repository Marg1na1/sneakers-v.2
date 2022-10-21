import React from 'react';
import { Link } from 'react-router-dom';
import style from './../Header/Hedaer.module.scss';


const logo = './../assets/img/image 4.svg';
const cart = './../assets/img/Group.svg';
const heart = './../assets/img/heart.svg';
const profile = './../assets/img/Union.svg';

const Header = () => {
    return (
        <header className={style.header}>
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
                <li className={style['header-right__item']}>
                    <img src={cart} alt="" />
                    <span className={style['header-right__price']}>1205 руб.</span>
                </li>
                <Link to="/favorites" className={style['header-right__item']}>
                    <li >
                        <img src={heart} alt="" />
                    </li>
                </Link>
                <Link to="/profile" className={style['header-right__item']}>
                    <li>
                        <img src={profile} alt="" />
                    </li>
                </Link>
            </ul>
        </header>
    )

}

export default Header;