import { FC, useState } from 'react';
import { Card } from 'components/Card';
import Skeleton from 'Skeletons/CardSkeleton';
import { HomeHeader } from 'components/HomeHeader';
import { EmptyStatePage } from '../EmptyStatePage';
import { ErrorModal } from 'components/ErrorModal';
import { ErrorResponseModel } from 'models';
import { useDebounce } from 'hooks/useDebounce';
import { Slider } from 'components/Slider';
import { useGetSneakersQuery } from 'redux/injects/injectedSneakers';
import style from './Home.module.scss';

const stunnedFace = './assets/img/stunned.svg';

const Home: FC = () => {

    const [searchValue, setSearchValue] = useState<string>('');
    const [anError, setAnError] = useState<ErrorResponseModel | { isError: boolean }>({ isError: false });

    const debouncedValue = useDebounce(searchValue);

    const { data = [], isLoading, error } = useGetSneakersQuery(debouncedValue);

    const sneakersSnip = data.map(obj => <Card key={obj.id} {...obj} setAnError={setAnError} />);
    const sneakersSkeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

    if (isLoading) {
        return (
            <ul className={style['product-list']}>
                {sneakersSkeleton}
            </ul>
        );
    } else if (error) {
        return (
            <div className={style['product']}>
                <HomeHeader setSearchValue={setSearchValue} searchValue={searchValue} />
                <EmptyStatePage
                    title='Ошибка'
                    message='Произошла ошибка при попытке получения данных'
                    imgUrl={stunnedFace} />
            </div>
        );
    } else if (data.length === 0) {
        return (
            <div className={style['product']}>
                <HomeHeader setSearchValue={setSearchValue} searchValue={searchValue} />
                <div className={style['product-unvalidate']}>
                    <img src={stunnedFace} width={70} height={70} alt='emoji' />
                    <h3 className={style['product-unvalidate__message']}>По запросу '{debouncedValue}' ничего не найденно</h3>
                    <p className={style['product-unvalidate__advice']}>Попробуйте ввести другой запрос</p>
                </div>
            </div >
        );
    }

    return (
        <div className={style.product}>
            {anError.isError && <ErrorModal {...anError} />}
            <Slider />
            <HomeHeader setSearchValue={setSearchValue} searchValue={searchValue} />
            <ul className={style['product-list']}>
                {sneakersSnip}
            </ul>
        </div>
    );
}

export default Home;