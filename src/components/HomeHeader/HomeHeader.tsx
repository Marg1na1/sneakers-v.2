import React, { FC } from "react";
import clsx from "clsx";
import style from './HomeHeader.module.scss';

const loupe = './assets/img/loupe.svg';

type HomeHeaderProps = {
    setSearchValue: (x: string) => void;
    searchValue: string;
}

const HomeHeader: FC<HomeHeaderProps> = ({ setSearchValue, searchValue }) => {

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className={style['product-headline']}>
            <h1 className={style['product-title']}>Все кроссовки</h1>
            <form className={style['product-headline__form']}>
                <button className={clsx(style['product-headline__btn'], 'btn-reset')}>
                    <img src={loupe} alt="" />
                </button>
                <input type="text" className={clsx(style['product-headline__input'], 'input-reset')}
                    placeholder='Поиск...'
                    onChange={onChangeInput}
                    value={searchValue} />
            </form>
        </div>
    );
}

export default HomeHeader;