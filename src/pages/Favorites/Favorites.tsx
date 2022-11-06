import React, { FC } from "react";
import Card from "../../components/Card/Card";
import Skeleton from "../../components/Card/Skeleton";
import EmptyStatePage from "../../components/EmptyStatePage/EmptyStatePage";
import { useGetFavoritesItemQuery } from "../../redux/sneakersAPI";

import style from './Favorites.module.scss';

const stunnedFace = './assets/img/stunned.svg'

const Favorites: FC = () => {

    const { data = [], isLoading } = useGetFavoritesItemQuery();

    const favoritesSnip = data.map((obj, i) => (<Card key={i}  {...obj} />));
    const sneakersSkeleton = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

    return (
        <div className={style['favorite']}>
            {
                data.length > 0 ?
                    <>
                        <h1 className={style['favorite-title']}>Закладки</h1>
                        <ul className={style['favorite-list']}>
                            {
                                isLoading ? sneakersSkeleton : favoritesSnip
                            }
                        </ul>
                    </> : <EmptyStatePage
                        title={'Закладок нет ('}
                        message={'Вы ничего не добавили в закладки'}
                        imgUrl={stunnedFace}
                    />
            }

        </div>
    );
}

export default Favorites;