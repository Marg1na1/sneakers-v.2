import clsx from "clsx";
import React, { useState, FC, useEffect } from "react";
import { SneakersType } from "../../globalTypes";
import style from './Card.module.scss';
import { useAddSneakersMutation, useDeleteSneakersMutation, useGetCartItemsQuery } from "../../redux/sneakersAPI";

const added = './../assets/img/plus-chaked.svg';
const unadded = './../assets/img/unactive-plus.svg';
const liked = './../assets/img/liked.svg';
const unliked = './../assets/img/unliked.svg';


const Card: FC<SneakersType> = ({ img, name, price, id }) => {

    const [isAdded, setIsAdded] = useState(false);

    const { data = [] } = useGetCartItemsQuery()

    useEffect(() => {
        if (data.some((obj) => Number(obj.parentId) === Number(id))) {
            setIsAdded(true)
        }
    }, [data])

    const obj = { img, name, price, id, parentId: id, }

    const [addSneakers] = useAddSneakersMutation();

    const [deleteItem] = useDeleteSneakersMutation();

    const clickAdded = async (id: number) => {
        if (data.some((obj) => Number(obj.id) === Number(id))) {
            await deleteItem(id)
            setIsAdded(false)
        } else {
            await addSneakers(obj)
        }
    }

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
                    <button className={clsx(style['product-card__btn'], 'btn-reset')} onClick={() => clickAdded(id)}>
                        <img src={isAdded ? added : unadded} />
                    </button>
                </div>
            </div>
        </li>
    );
}

export default Card;