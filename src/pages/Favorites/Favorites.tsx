import React, { FC, useState } from "react";
import Card from "../../components/Card/Card";
import Skeleton from "../../components/Card/Skeleton";
import EmptyStatePage from "../../components/EmptyStatePage/EmptyStatePage";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import { useGetFavoritesItemQuery } from "../../redux/sneakersAPI";

import style from './Favorites.module.scss';

const stunnedFace = './assets/img/stunned.svg';

const Favorites: FC = () => {

    const { data = [], isLoading, error } = useGetFavoritesItemQuery();
    const [anError, setAnError] = useState({ isError: false })

    const favoritesSnip = data.map((obj, i) => (<Card key={i}  {...obj} setAnError={setAnError} />));
    const sneakersSkeleton = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

    if (error) {
        return (
            <EmptyStatePage
                title={'Ошибка'}
                message={'Произошла ошибка при попытке получения данных'}
                imgUrl={stunnedFace}
            />
        );
    } else if (data.length === 0) {
        return (
            <EmptyStatePage
                title={'Закладок нет ('}
                message={'Вы ничего не добавили в закладки'}
                imgUrl={stunnedFace}
            />
        );
    } else if (isLoading) {
        return (
            <div className={style['favorite']}>
                {sneakersSkeleton}
            </div>
        );
    }

    return (
        <div className={style['favorite']}>
            {anError.isError && <ErrorModal {...anError} />}
            <h1 className={style['favorite-title']}>Закладки</h1>
            <ul className={style['favorite-list']}>
                {favoritesSnip}
            </ul>
        </div>
    );
}

export default Favorites;