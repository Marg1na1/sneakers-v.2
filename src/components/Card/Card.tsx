import { FC } from 'react';
import { useClickAddHandler } from '../../hooks/useClickAddHandler';
import { useClickFavoriteHandler } from '../../hooks/useClickFavoriteHandler';
import clsx from 'clsx';
import style from './Card.module.scss';

const added = './../assets/img/plus-chaked.svg';
const unadded = './../assets/img/unactive-plus.svg';
const liked = './../assets/img/liked.svg';
const unliked = './../assets/img/unliked.svg';

type Props = {
    id: number;
    name: string;
    price: number;
    img: string;
    parentId: number;
    setAnError: (x: any) => void;
}

const Card: FC<Props> = ({ img, name, price, id, parentId, setAnError }) => {

    const obj = { img, name, price, id, parentId };

    const { onClickAdded, isAdded } = useClickAddHandler(parentId, obj, setAnError);
    const { onClickFavorite, isFavorite } = useClickFavoriteHandler(parentId, obj, setAnError);

    return (
        <li className={style['product-list__item']}>
            <div className={style['product-card']}>
                <button className={clsx(style['product-card__favorite'], 'btn-reset')} onClick={onClickFavorite}>
                    <img src={isFavorite ? liked : unliked} alt='indicator is like' />
                </button>
                <img src={img} alt={name} width={133} height={112} />
                <p className={style['product-card__name']}>{name}</p>
                <div className={style['product-card-footer']}>
                    <div>
                        <div className={style['product-card__cost']}>Цена:</div>
                        <div className={style['product-card__price']}>{price} руб.</div>
                    </div>
                    <button className={clsx(style['product-card__btn'], 'btn-reset')} onClick={onClickAdded}>
                        <img src={isAdded ? added : unadded} alt='indicator is added' />
                    </button>
                </div>
            </div>
        </li>
    );
}

export default Card;
