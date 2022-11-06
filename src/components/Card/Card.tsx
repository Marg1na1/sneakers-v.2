import clsx from "clsx";
import React, { useState, FC, useEffect } from "react";
import { SneakersType, CartSneakersType } from "../../globalTypes";
import style from './Card.module.scss';
import {
    useAddSneakersMutation,
    useDeleteSneakersMutation,
    useGetCartItemsQuery,
    useAddFavoritesMutation,
    useGetFavoritesItemQuery,
    useDeleteFavoriteItemMutation
} from "../../redux/sneakersAPI";

const added = './../assets/img/plus-chaked.svg';
const unadded = './../assets/img/unactive-plus.svg';
const liked = './../assets/img/liked.svg';
const unliked = './../assets/img/unliked.svg';

const Card: FC<SneakersType> = ({ img, name, price, id, parentId }) => {

    const obj = { img, name, price, id, parentId };

    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const cartItems = useGetCartItemsQuery();
    const favoriteItems = useGetFavoritesItemQuery();

    useEffect(() => {
        if (!cartItems.isLoading) {
            if (cartItems.data!.some((obj) => Number(obj.parentId) === Number(parentId))) {
                setIsAdded(true)
            } else {
                setIsAdded(false)
            }
        }
    }, [cartItems.data]);

    useEffect(() => {
        if (!favoriteItems.isLoading) {
            if (favoriteItems.data!.some((obj) => Number(obj.parentId) === Number(parentId))) {
                setIsFavorite(true)
            }
        }
    }, [favoriteItems.data]);

    const [addSneakers] = useAddSneakersMutation();

    const [deleteItem] = useDeleteSneakersMutation();

    const [addFavorite] = useAddFavoritesMutation();

    const [deleteFavorite] = useDeleteFavoriteItemMutation();

    const clickAdded = async () => {
        if (cartItems.data!.some((obj) => Number(obj.parentId) === Number(parentId))) {
            let exId = cartItems.data!.find((obj) => Number(obj.parentId) === Number(parentId))
            await deleteItem(exId!.id)
            setIsAdded(false)
        } else {
            await addSneakers(obj)
        }
    };

    const clickFavorite = async () => {
        if (favoriteItems.data!.some((obj) => Number(obj.parentId) === Number(parentId))) {
            let exId = favoriteItems.data!.find((obj) => Number(obj.parentId) === Number(parentId))
            await deleteFavorite(exId!.id)
            setIsFavorite(false)
        } else {
            await addFavorite(obj)
            setIsFavorite(true)
        }
    };

    return (
        <li className={style['product-list__item']}>
            <div className={style['product-card']}>
                <button className={clsx(style['product-card__favorite'], 'btn-reset')} onClick={() => clickFavorite()}>
                    <img src={isFavorite ? liked : unliked} />
                </button>
                <img src={img} alt="" width={133} height={112} />
                <p className={style['product-card__name']}>{name}</p>
                <div className={style['product-card-footer']}>
                    <div>
                        <div className={style['product-card__cost']}>Цена:</div>
                        <div className={style['product-card__price']}>{price} руб.</div>
                    </div>
                    <button className={clsx(style['product-card__btn'], 'btn-reset')} onClick={() => clickAdded()}>
                        <img src={isAdded ? added : unadded} />
                    </button>
                </div>
            </div>
        </li>
    );
}

export default Card;
