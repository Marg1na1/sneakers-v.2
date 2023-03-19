import { FC } from 'react';
import { MarkIcon } from '../../icons/MarkIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import clsx from 'clsx';
import style from './Slider.module.scss';

const slide = './../assets/img/slider_img.jpg'

const Slider: FC = () => {
    return (
        <section>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{ nextEl: '.next', prevEl: '.prev' }}
                className={style['slider']}
            >
                <SwiperSlide><img src={slide} alt='slide' /></SwiperSlide>
                <SwiperSlide><img src={slide} alt='slide' /></SwiperSlide>

                <button className={clsx(style['slider-btn'], 'next')}><MarkIcon /></button>
                <button className={clsx(style['slider-btn'], 'prev')}><MarkIcon /></button>
            </Swiper>
        </section >
    );
}

export default Slider;

