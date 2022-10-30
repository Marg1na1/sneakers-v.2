import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './Favorites.module.scss';
import clsx from "clsx";

const stunnedFace = './assets/img/stunned.svg'
const rightArrow = './../assets/img/right-arrow.svg'

const EmptyFavorite: FC = () => {
    return (
        <div className={style['favorite-not-found']}>
            <img className={style['favorite-not-found__image']} src={stunnedFace} />
            <h2 className={style['favorite-not-found__title']}>Закладок нет (</h2>
            <p className={style['favorite-not-found__descr']}>Вы ничего не добавили в закладки</p>
            <Link to='/'>
                <div className={clsx(style['favorite-not-found__btn'], 'btn-reset')}>
                    <img src={rightArrow} />
                    Вернуться назад
                </div>
            </Link>
        </div>
    );
}

export default EmptyFavorite;