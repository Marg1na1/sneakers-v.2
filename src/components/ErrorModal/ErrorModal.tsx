import React, { FC } from "react";
import { ErrorResponseType } from "../../globalTypes";
import style from './ErrorModal.module.scss';

const stunnedFace = './assets/img/stunned.svg'

const ErrorModal: FC<ErrorResponseType> = (anError) => {

    let todo = '';
    let pretext = '';
    let where = '';

    if (anError.endpointName === 'addFavorites' || anError.endpointName === "addSneakers") {
        todo = 'добавления'
    } else {
        todo = 'удаления'
    }

    if (anError.endpointName === 'addOrder') {
        todo = 'оформления'
    }

    if (anError.endpointName === 'addFavorites' || anError.endpointName === 'addSneakers') {
        pretext = ' в'
    } else {
        pretext = ' из'
    }

    if (anError.endpointName === 'addFavorites' || pretext === 'в') {
        where = ' избранное'
    } else {
        where = ' избранного'
    }

    if (anError.endpointName === 'addSneakers') {
        where = ' корзину'
    } else if (anError.endpointName === 'deleteSneakers') {
        where = ' корзины'
    }

    let notOrder = 'товара' + pretext + where

    return (
        <div className={style['modal-blackout']}>
            <div className={style['modal']}>
                <img src={stunnedFace} className={style['modal__img']} width={50} height={50} />
                <h3 className={style['modal__message']}>Ошибка при попытке {todo} {anError.endpointName === 'addOrder' ? 'заказа' : notOrder}</h3>
                <p className={style['modal__advice']}>Попробуйте перезагрузить страницу или зайдите позже</p>
                <p className={style['modal__errorCode']}>{anError.error!.status}</p>
            </div>
        </div>
    );
}

export default ErrorModal;