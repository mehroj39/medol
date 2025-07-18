import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
import slide from '../assets/Image/slide.png';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

export default function MySwiper() {
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="px-4 sm:px-6 xl:w-full max-w-7xl mx-auto py-10 pb-[100px] xl:pb-[200px]">
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={false}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000 }}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >
                {[...Array(3)].map((_, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-20 text-base font-medium bg-opacity-50 mt-24 md:mt-36 px-4 md:px-10 py-10">

                             <div className="flex flex-col gap-5 max-w-xl">
                                <h1 className="text-3xl md:text-4xl xl:text-6xl text-blue-700 font-semibold leading-tight">
                                    {t('swiper.header')}
                                </h1>
                                <p className="text-sm md:text-base leading-relaxed">
                                 {t('swiper.description')}   
                                </p>
                                <button onClick={() => setShowModal(true)} className="w-fit px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-700 hover:bg-blue-800 text-white rounded-full text-sm md:text-base ">
                                     {t('swiper.btn')}
                                </button>
                            </div>

                            <img
                                src={slide}
                                alt="slide"
                                className="w-full md:w-[80%] xl:w-[500px] h-auto object-contain"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className='    bg-white w-full max-w-4xl rounded-lg shadow-lg p-6 relative mx-3 '>
                        <div className='flex justify-between border-b border-gray-300 pb-4'>
                            <h1 className='text-3xl font-medium'> {t('modal.header')}</h1>
                            <button className='text-black text-3xl' onClick={() => setShowModal(false)}>&times;</button>
                        </div>
                        <div className='flex justify-between pt-6 border-b border-gray-300 '>
                            <div className='flex flex-col gap-5 '>
                                <h2 className='text-4xl font-normal'> {t('modal.title')}</h2>
                                 <p>{t('modal.description')}
                                </p>
                            </div>
                            <img className='w-[200px] h-auto object-contain' src={slide} alt="slide" />
                        </div>
                        <div className='text-right'>
                            <button onClick={() => setShowModal(false)} className='w-fit px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-700 hover:bg-blue-800 text-white rounded-full text-sm md:text-base mt-4 text-right mr-4'> {t('modal.btn')}</button>

                        </div>
                    </div>


                </div>
            )}
<div id='product'></div>
        </div>

    );
}
