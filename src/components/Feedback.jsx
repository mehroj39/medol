import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import partner1 from '../assets/partner/asp1 1.png';
import partner2 from '../assets/partner/bd1 1.png';
import partner3 from '../assets/partner/biosense1 1.png';
import partner4 from '../assets/partner/cordis1 1.png';
import partner5 from '../assets/partner/depuy-synthes-spine-jandj(1) 1.png';
import partner6 from '../assets/partner/eth 1.png';
import partner7 from '../assets/partner/aesculap-b-braun1 1.png';
import partner8 from '../assets/partner/ethicon-endo-surgery1 1.png';

const Feedback = () => {
  const { t } = useTranslation();
  const dataNews = [
    { id: 1, img: partner1 },
    { id: 2, img: partner2 },
    { id: 3, img: partner3 },
    { id: 4, img: partner4 },
    { id: 5, img: partner5 },
    { id: 6, img: partner6 },
    { id: 7, img: partner7 },
    { id: 8, img: partner8 },
  ];

  return (
    <div className="py-10 overflow-hidden" id='feedback'>
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-10"> {t('feedback.title')}</h2>
      <div className="w-full max-w-7xl mx-auto px-4">
        <Swiper
          slidesPerView={4}
          loop={true}
          spaceBetween={20}
          navigation={true}
          autoplay={false}
          pagination={false}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {dataNews.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center items-center">
              <div className="h-[100px] w-full flex justify-center items-center">
                <img
                  src={item.img}
                  alt={`partner-${item.id}`}
                  className="h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
