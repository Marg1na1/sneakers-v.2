import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './EmptyStatePage.module.scss';
import clsx from "clsx";

const rightArrow = './../assets/img/right-arrow.svg'

type EmptyStatePage = {
    title: string;
    message: string;
    imgUrl: string;
}

const EmptyStatePage: FC<EmptyStatePage> = ({ title, message, imgUrl }) => {
    return (
        <div className={style['empty']}>
            <img className={style['empty__image']} src={imgUrl} />
            <h2 className={style['empty__title']}>{title}</h2>
            <p className={style['empty__descr']}>{message}</p>
            <Link to='/'>
                <div className={clsx(style['empty__btn'], 'btn-reset')}>
                    <img src={rightArrow} />
                    Вернуться назад
                </div>
            </Link>
        </div>
    );
}

export default EmptyStatePage;

