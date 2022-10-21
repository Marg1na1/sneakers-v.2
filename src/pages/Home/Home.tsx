import React, { FC, useEffect } from "react";
import clsx from "clsx";
// import { fetchSneakers, selectSneakersData } from "../../redux/slices/sneakers/cartSlice";
import { useAppDispath, useAppSelector } from "../../hook";
import Card from "../../components/Card/Card";
import { fetchSneakers } from "../../redux/sneakers/asyncAction";
import { selectSneakersData } from "../../redux/sneakers/selectors";

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
                    sneakers && sneakers.map((obj) => (
                        <Card
                            key={obj.id}
                            {...obj}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

export default Home;