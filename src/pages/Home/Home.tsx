import React, { FC, useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import Skeleton from "../../components/Card/Skeleton";
import style from './Home.module.scss';
import { useGetSearchedItemsQuery } from "../../redux/sneakersAPI";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import EmptyStatePage from "../../components/EmptyStatePage/EmptyStatePage";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import { ErrorResponseType } from "../../globalTypes";
import { useDebounce } from "../../Hook/useDebounce";

const stunnedFace = './assets/img/stunned.svg';

const Home: FC = () => {

    const [searchValue, setSearchValue] = useState<string>('');
    const [anError, setAnError] = useState<ErrorResponseType | { isError: boolean }>({ isError: false });

    const debouncedValue = useDebounce(searchValue)

    const { data = [], isLoading, error } = useGetSearchedItemsQuery(debouncedValue, {
        refetchOnFocus: true
    });

    useEffect(() => {
        if (anError.isError) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "visible";
        }
    })

    const sneakersSnip = data.map((obj, i) => (<Card key={i} {...obj} setAnError={setAnError} />));
    const sneakersSkeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

    if (isLoading) {
        return (
            <ul className={style['product-list']}>
                {
                    sneakersSkeleton
                }
            </ul>
        );
    } else if (error) {
        return (
            <div className={style['product']}>
                <HomeHeader setSearchValue={setSearchValue} searchValue={searchValue} />
                <EmptyStatePage
                    title={"Ошибка"}
                    message={'Произошла ошибка при попытке получения данных'}
                    imgUrl={stunnedFace} />
            </div>
        );
    } else if (data.length === 0) {
        return (
            <div className={style['product']}>
                <HomeHeader setSearchValue={setSearchValue} searchValue={searchValue} />
                <div className={style['product-unvalidate']}>
                    <img src={stunnedFace} width={70} height={70} />
                    <h3 className={style['product-unvalidate__message']}>По запросу "{debouncedValue}" ничего не найденно</h3>
                    <p className={style['product-unvalidate__advice']}>Попробуйте ввести другой запрос</p>
                </div>
            </div>
        );
    }

    return (
        <div className={style['product']}>
            {anError.isError && <ErrorModal {...anError} />}
            <HomeHeader setSearchValue={setSearchValue} searchValue={searchValue} />
            <ul className={style['product-list']}>
                {sneakersSnip}
            </ul>
        </div>
    );
}

export default Home;