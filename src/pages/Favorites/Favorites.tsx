import React, { FC } from "react";
import Card from "../../components/Card/Card";
import { useGetFavoritesItemQuery } from "../../redux/sneakersAPI";
import EmptyFavorite from "./EmptyFavorite";

import style from './Favorites.module.scss';

const Favorites: FC = () => {

    const { data = [], isLoading } = useGetFavoritesItemQuery();

    const favoritesSnip = data.map((obj, i) => (<Card key={i}  {...obj} />));

    return (
        <div className={style['favorite']}>
            {
                data.length > 0 ?
                    <>
                        <h1 className={style['favorite-title']}>Закладки</h1>
                        <ul className={style['favorite-list']}>
                            {
                                !isLoading && favoritesSnip
                            }
                        </ul>
                    </> : <EmptyFavorite />
            }

        </div>
    );
}

export default Favorites;