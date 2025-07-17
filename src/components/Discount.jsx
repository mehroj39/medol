import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import news from "../assets/Image/news.png";
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';


const Discount = () => {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState(null);
  const { t } = useTranslation();

  const dataNews = [
    { id: 1, img: news, title: "Master Class by Gulyyamov Eduard", description: "From April 19 to April 21 at JSC 'RSNPMTSU' (Republican Specialized Scientific and Practical Medical Center of Urology) with the support of Ethicon Endo Surgery (Johnson&Johnson) and FE LLC Medical Online Services a master class was held in the performance of...", date: "26.07.2021" },
    { id: 2, img: news, title: "Advanced Training Session", description: "From April 19 to April 21 at JSC 'RSNPMTSU' (Republican Specialized Scientific and Practical Medical Center of Urology) with the support of Ethicon Endo Surgery (Johnson&Johnson) and FE LLC Medical Online Services a master class was held in the performance of...", date: "05.08.2021" },
    { id: 3, img: news, title: "New Equipment Introduced", description: "From April 19 to April 21 at JSC 'RSNPMTSU' (Republican Specialized Scientific and Practical Medical Center of Urology) with the. support of Ethicon Endo Surgery (Johnson&Johnson) and FE LLC Medical Online Services a master class was held in the performance of...", date: "11.09.2021" },
    { id: 4, img: news, title: "New Equipment Introduced", description: "From April 19 to April 21 at JSC 'RSNPMTSU' (Republican Specialized Scientific and Practical Medical Center of Urology) with the. support of Ethicon Endo Surgery (Johnson&Johnson) and FE LLC Medical Online Services a master class was held in the performance of...", date: "11.09.2021" },
    { id: 5, img: news, title: "New Equipment Introduced", description: "From April 19 to April 21 at JSC 'RSNPMTSU' (Republican Specialized Scientific and Practical Medical Center of Urology) with the. support of Ethicon Endo Surgery (Johnson&Johnson) and FE LLC Medical Online Services a master class was held in the performance of...", date: "11.09.2021" },
    { id: 6, img: news, title: "New Equipment Introduced", description: "From April 19 to April 21 at JSC 'RSNPMTSU' (Republican Specialized Scientific and Practical Medical Center of Urology) with the. support of Ethicon Endo Surgery (Johnson&Johnson) and FE LLC Medical Online Services a master class was held in the performance of...", date: "11.09.2021" },
    { id: 7, img: news, title: "New Equipment Introduced", description: "From April 19 to April 21 at JSC 'RSNPMTSU' (Republican Specialized Scientific and Practical Medical Center of Urology) with the. support of Ethicon Endo Surgery (Johnson&Johnson) and FE LLC Medical Online Services a master class was held in the performance of...", date: "11.09.2021" },
    { id: 8, img: news, title: "New Equipment Introduced", description: "From April 19 to April 21 at JSC 'RSNPMTSU' (Republican Specialized Scientific and Practical Medical Center of Urology) with the. support of Ethicon Endo Surgery (Johnson&Johnson) and FE LLC Medical Online Services a master class was held in the performance of...", date: "11.09.2021" },

  ];

  const handleClick = (item) => {
    setData(item);
    setModalShow(true);
  };

  return (
    <div className="py-10 px-4 sm:px-10 bg-white mb-14 max-w-7xl mx-auto " id='news'>
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-10">{t('discount.title')}</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: false }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-4xl mx-auto text-center'>
          {dataNews.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative bg-gray-100 p-6 rounded-4xl shadow hover:shadow-md transition flex flex-col justify-between h-full mb-16 gap-5">
                <img src={item.img} alt={item.title} className=" w-full h-[150px] object-cover rounded-4xl mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-center">{item.title} {t('discount.title2')}</h3>
                <p className="text-sm text-gray-600 mb-2 text-center">{item.description} {t('discount.description')}</p>
                <p className="text-xs text-gray-500 text-center">{item.date} {t('discount.date')}</p>
                <button
                  onClick={() => handleClick(item)}
                  className=" w-[50%] absolute bottom-[-20px] left-[85px] mx-auto mt-6 px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-700 text-white rounded-full text-sm"
                >
                  {t('discount.btn')}

                </button>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {modalShow && data && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4 border-b border-gray-300 pb-4 gap-12">
          <div className="bg-white p-6 rounded-lg max-w-md w-[80%] relative border-b border-gray-300 pb-4 gap-7">
            <h1>Medol</h1>
            <button
              onClick={() => setModalShow(false)}
              className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-black"
            >
              &times;
            </button>
            <div className='flex border-b border-gray-300 pb-4 gap-4'>
              <div>
                <h2 className="text-xl font-bold mb-2">{data.title}</h2>
                <p className="text-sm text-gray-700 mb-4">{data.description}</p>
                <p className="text-xs text-gray-500">{data.date}</p>
              </div>
              <img src={data.img} alt={data.title} className="w-[120px] h-[120px] object-cover rounded mb-4" />

            </div>
            <div className='text-right'>
              <button onClick={() => setModalShow(false)} className='w-fit px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-700 hover:bg-blue-800 text-white rounded-full text-sm md:text-base mt-4 text-right mr-4'>Close</button>

            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Discount;
