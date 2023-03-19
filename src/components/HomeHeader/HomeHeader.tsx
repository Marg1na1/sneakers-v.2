import { FC } from 'react';
import { SearchIcon } from '../../icons/SearchIcon';
import clsx from 'clsx';
import style from './HomeHeader.module.scss';

type Props = {
    setSearchValue: (x: string) => void;
    searchValue: string;
}

const HomeHeader: FC<Props> = ({ setSearchValue, searchValue }) => {

    return (
        <div className={style['product-headline']}>
            <h1 className={style['product-title']}>Все кроссовки</h1>
            <form className={style['product-headline__form']}>
                <button className={clsx(style['product-headline__btn'], 'btn-reset')} type='button'>
                    <SearchIcon />
                </button>
                <input type='text' className={clsx(style['product-headline__input'], 'input-reset')}
                    placeholder='Поиск...'
                    onChange={e => setSearchValue(e.target.value)}
                    value={searchValue} />
            </form>
        </div>
    );
}

export default HomeHeader;