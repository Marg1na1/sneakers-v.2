import React, { FC } from "react";
import clsx from "clsx";
import style from './Card.module.scss';
import { useClickAddHandler } from "../../Hook/useClickAddHandler";
import { useClickFavoriteHandler } from "../../Hook/useClickFavoriteHandler";

const added = './../assets/img/plus-chaked.svg';
const unadded = './../assets/img/unactive-plus.svg';
const liked = './../assets/img/liked.svg';
const unliked = './../assets/img/unliked.svg';

type CardPropsType = {
    id: number;
    name: string;
    price: number;
    img: string;
    parentId: number;
    setAnError: (x: any) => void;
}

const Card: FC<CardPropsType> = ({ img, name, price, id, parentId, setAnError }) => {

    const obj = { img, name, price, id, parentId };

    const { onClickAdded, isAdded } = useClickAddHandler(parentId, obj, setAnError);
    const { onClickFavorite, isFavorite } = useClickFavoriteHandler(parentId, obj, setAnError);

    return (
        <li className={style['product-list__item']}>
            <div className={style['product-card']}>
                <button className={clsx(style['product-card__favorite'], 'btn-reset')} onClick={() => onClickFavorite()}>
                    <img src={isFavorite ? liked : unliked} />
                </button>
                <img src={img} alt="" width={133} height={112} />
                <p className={style['product-card__name']}>{name}</p>
                <div className={style['product-card-footer']}>
                    <div>
                        <div className={style['product-card__cost']}>Цена:</div>
                        <div className={style['product-card__price']}>{price} руб.</div>
                    </div>
                    <button className={clsx(style['product-card__btn'], 'btn-reset')} onClick={() => onClickAdded()}>
                        <img src={isAdded ? added : unadded} />
                    </button>
                </div>
            </div>
        </li>
    );
}

export default Card;
