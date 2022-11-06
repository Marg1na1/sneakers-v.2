import React, { FC } from 'react';
import EmptyStatePage from '../../components/EmptyStatePage/EmptyStatePage';
import OrderSection from '../../components/OrderSection/OrderSection';
import { useGetOrdersQuery } from '../../redux/sneakersAPI';
import style from './Orders.module.scss';

const stunnedFace = './assets/img/stunned.svg';


const Orders: FC = () => {

    const { data = [], isSuccess } = useGetOrdersQuery();

    return (
        <div className={style['orders']}>
            {
                data.length > 0 ? <>
                    <h1 className={style['orders-title']}>Заказы</h1>
                    <ul className={style['orders-list']}>
                        {
                            isSuccess && data!.map((obj, i) => <OrderSection key={i} {...obj} />)
                        }
                    </ul>
                </> : <EmptyStatePage
                    title={'Заказов нет ('}
                    message={'Вы ничего не заказали'}
                    imgUrl={stunnedFace}
                />
            }
        </div>
    );
}

export default Orders;