import { FC } from 'react';
import { Arrow } from 'icons/Arrow';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import style from './EmptyStatePage.module.scss';

const boredFace = './assets/img/bored_face.svg';

type Props = {
    title: string;
    message: string;
    imgUrl: string;
}

const EmptyStatePage: FC<Partial<Props>> = ({
    title = 'Не найденно',
    message = 'Не удалось найти данную страницу попробуйте позже',
    imgUrl = boredFace
}) => {

    return (
        <div className={style.empty}>
            <img className={style['empty__image']} src={imgUrl} alt='emoji' />
            <h2 className={style['empty__title']}>{title}</h2>
            <p className={style['empty__descr']}>{message}</p>
            <Link to='/'>
                <div className={clsx(style['empty__btn'], 'btn-reset')}>
                    <Arrow />
                    Вернуться назад
                </div>
            </Link>
        </div>
    );
}

export default EmptyStatePage;

