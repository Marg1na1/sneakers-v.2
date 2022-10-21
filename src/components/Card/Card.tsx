import clsx from "clsx";
import React, { useState, FC } from "react";
import { SneakersType } from "../../redux/sneakers/types";
import style from './Card.module.scss';

const cheked = './../assets/img/plus-chaked.svg';
const unactive = './../assets/img/unactive-plus.svg';
const liked = './../assets/img/liked.svg';
const unliked = './../assets/img/unliked.svg';


const Card: FC<SneakersType> = ({ img, name, price }) => {

    return (
        <li className={style['product-list__item']}>
            <div className={style['product-card']}>
                <button className={clsx(style['product-card__favorite'], 'btn-reset')}>
                </button>
                <img src={img} alt="" width={133} height={112} />
                <p className={style['product-card__name']}>{name}</p>
                <div className={style['product-card-footer']}>
                    <div>
                        <div className={style['product-card__cost']}>Цена:</div>
                        <div className={style['product-card__price']}>{price} руб.</div>
                    </div>
                    <button className={clsx(style['product-card__btn'], 'btn-reset')}>
                    </button>
                </div>
            </div>
        </li>
    );
}

export default Card;