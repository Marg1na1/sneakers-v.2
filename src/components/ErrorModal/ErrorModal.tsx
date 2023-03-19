import { FC } from 'react';
import { ErrorResponseModel } from '../../models';
import { useCreateErrorMessage } from '../../hook/useCreateErrorMessage';
import style from './ErrorModal.module.scss';

const stunnedFace = './assets/img/stunned.svg';

const ErrorModal: FC<ErrorResponseModel> = (anError) => {

    const { todo, pretext, where } = useCreateErrorMessage(anError);

    let notOrder = 'товара' + pretext + where

    if (anError.isError) {
        window.scrollTo(0, 0)
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style.overflowY = 'visible';
    }

    return (
        <div className={style['modal-blackout']}>
            <div className={style['modal']}>
                <img src={stunnedFace} alt='emoji' className={style['modal__img']} width={50} height={50} />
                <h3 className={style['modal__message']}>Ошибка при попытке {todo} {anError.endpointName === 'addOrder' ? 'заказа' : notOrder}</h3>
                <p className={style['modal__advice']}>Попробуйте перезагрузить страницу или зайдите позже</p>
                <p className={style['modal__errorCode']}>{anError.error!.status}</p>
            </div>
        </div>
    );
}

export default ErrorModal;