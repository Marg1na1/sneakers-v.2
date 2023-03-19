import { FC } from 'react';
import clsx from 'clsx';
import style from './Burger.module.scss';

type Props = {
    burgerOpen: boolean;
    setBurgerOpen: (x: boolean) => void;
}

const Burger: FC<Props> = ({ burgerOpen, setBurgerOpen }) => {
    return (
        <button className={clsx('btn-reset', style['burger'])}
            onClick={() => setBurgerOpen(!burgerOpen)}>
            <span className={style['burger-line']}></span>
        </button>
    );
}

export default Burger;