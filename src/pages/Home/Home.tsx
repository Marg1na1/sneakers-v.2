import React, { FC, useEffect } from "react";
import clsx from "clsx";
import { useAppDispath, useAppSelector } from "../../hook";
import Card from "../../components/Card/Card";
import { fetchSneakers } from "../../redux/sneakers/asyncAction";
import { selectSneakersData } from "../../redux/sneakers/selectors";
import Skeleton from "../../components/Card/Skeleton";


const loupe = './assets/img/loupe.svg';

const Home: FC = () => {

    const dispath = useAppDispath();

    const { sneakers } = useAppSelector(selectSneakersData);

    const getSneakers = async () => {
        dispath(fetchSneakers())
    };

    useEffect(() => {
        getSneakers();
    }, [])

    const sneakersSnip = sneakers.map((obj) => (<Card key={obj.id} {...obj} />));
    const sneakersSkeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

    return (
        <div className={'product'}>
            <div className={'product-headline'}>
                <h1 className={'product-title'}>Кроссовки</h1>
                <form className={'product-headline__form'}>
                    <button className={clsx('product-headline__btn', 'btn-reset')}>
                        <img src={loupe} alt="" />
                    </button>
                    <input type="text" className={clsx('product-headline__input', 'input-reset')} placeholder='Поиск...' />
                </form>
            </div>
            <ul className={'product-list'}>
                {
                    sneakers.length > 0 ? sneakersSnip : sneakersSkeleton
                }
            </ul>
        </div>
    );
}


export default Home;