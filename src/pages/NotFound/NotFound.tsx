import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './NotFound.module.scss';
import clsx from "clsx";

const boredFace = './assets/img/bored_face.svg'
const rightArrow = './../assets/img/right-arrow.svg'

const NotFound: FC = () => {
    return (
        <div className={style['not-found']}>
            <img className={style['not-found__image']} src={boredFace} />
            <h2 className={style['not-found__title']}>Не найденно</h2>
            <p className={style['not-found__descr']}>Не удалось найти данную страницу попробуйте позже</p>
            <Link to='/'>
                <div className={clsx(style['not-found__btn'], 'btn-reset')}>
                    <img src={rightArrow} />      Вернуться назад
                </div>
            </Link>
        </div>
    );
}

export default NotFound;