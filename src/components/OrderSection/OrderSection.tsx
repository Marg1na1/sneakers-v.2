import { FC, useEffect, useState } from 'react';
import { OrderItem } from '../OrderItem';
import { useDeleteOrderMutation } from '../../redux/injects/injectedOrder';
import { OrdersModel } from '../../models';
import clsx from 'clsx';
import style from './OrderSection.module.scss';

const OrderSection: FC<OrdersModel> = (obj) => {

    const orderItemsArr: any[] = [];

    for (let v in obj) {
        if (typeof obj[v] === 'object') {
            orderItemsArr.push(<OrderItem key={obj[v].id} {...obj[v]} />)
        }
    }

    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(orderItemsArr.reduce((acc, obj) => acc + obj.props.price, 0))
    }, []);

    const [deleteOrderItem] = useDeleteOrderMutation();

    const deleteOrder = () => {
        deleteOrderItem(obj.id)
    };

    const orderDate = new Date(obj.createdAt).toString().split(' ').slice(3, 5).reverse().join(' ');

    return (
        <li className={style['orders-section']}>
            <div className={style['orders-section-header']}>
                <div className={style['orders-section__createTime']}>Дата заказа:<p>{orderDate}</p></div>
                <button className={clsx(style['orders-section__btn'], 'btn-reset')} onClick={deleteOrder}></button>
            </div>
            <ul className={style['orders-section-list']}>
                {orderItemsArr}
            </ul>
            <div className={style['orders-section-footer']}>
                <p className={style['orders-section__total']}>Оплчено:<span>{total} руб.</span></p>
            </div>
        </li>
    );
}

export default OrderSection;