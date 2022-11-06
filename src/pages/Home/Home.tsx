import React, { FC } from "react";
import clsx from "clsx";
import Card from "../../components/Card/Card";
import Skeleton from "../../components/Card/Skeleton";
import style from './Home.module.scss';
import { useGetSneakersQuery } from "../../redux/sneakersAPI";


const loupe = './assets/img/loupe.svg';

const Home: FC = () => {

    const { data = [], isLoading, } = useGetSneakersQuery();

    const sneakersSnip = data.map((obj, i) => (<Card key={i} {...obj} />));
    const sneakersSkeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

    return (
        <div className={style['product']}>
            <div className={style['product-headline']}>
                <h1 className={style['product-title']}>Кроссовки</h1>
                <form className={style['product-headline__form']}>
                    <button className={clsx(style['product-headline__btn'], 'btn-reset')}>
                        <img src={loupe} alt="" />
                    </button>
                    <input type="text" className={clsx(style['product-headline__input'], 'input-reset')} placeholder='Поиск...' />
                </form>
            </div>
            <ul className={style['product-list']}>
                {
                    isLoading ? sneakersSkeleton : sneakersSnip
                }
            </ul>
        </div>
    );
}


export default Home;