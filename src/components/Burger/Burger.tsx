import clsx from 'clsx';
import React, { FC } from 'react';
import style from './Burger.module.scss';

type BurgerProps = {
    burgerOpen: boolean;
    setBurgerOpen: (x: boolean) => void
}

const Burger: FC<BurgerProps> = ({ burgerOpen, setBurgerOpen }) => {
    return (
        <button className={clsx(style[burgerOpen ? 'burger--active' : ''], 'btn-reset', style['burger'])}
            onClick={() => setBurgerOpen(!burgerOpen)}>
            <span className={style['burger-line']}></span>
            <span className={style['burger-line']}></span>
            <span className={style['burger-line']}></span>
        </button>
    );
}

export default Burger;