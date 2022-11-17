import React, { FC } from 'react';
import EmptyStatePage from '../../components/EmptyStatePage/EmptyStatePage';
import OrderSection from '../../components/OrderSection/OrderSection';
import { useGetOrdersQuery } from '../../redux/sneakersAPI';
import style from './Orders.module.scss';

const stunnedFace = './assets/img/stunned.svg';

const Orders: FC = () => {

    const { data = [], error } = useGetOrdersQuery();

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
                title={'Заказов нет ('}
                message={'Вы еще ничего не заказали'}
                imgUrl={stunnedFace}
            />
        );
    }

    return (
        <div className={style['orders']}> 
            {
                <>
                    <h1 className={style['orders-title']}>Заказы</h1>
                    <ul className={style['orders-list']}>
                        {data.map((obj, i) => <OrderSection key={i} {...obj} />)}
                    </ul>
                </>
            }
        </div>
    );
}

export default Orders;