import React, { useState } from 'react';
import service1 from "../assets/serviceImg/service_1.png";
import service2 from "../assets/serviceImg/service_2.png";
import service3 from "../assets/serviceImg/service_3.png";
import ServiceModal from '../components/ServiceModal';
import hospital from '../assets/Image/hospital.png';
import { useTranslation } from 'react-i18next';


const Service = () => {
  const { t } = useTranslation();
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState(null);
  const handleClick = (item) => {
    setData(item);
    setModalShow(true);
  };

  const dataCard = [
    {
      id: 1,
      title: "",
      img: service1,
      description: "The company provides after-sales service for all products provided. Our engineers have experience and certificates from manufacturers ......"
    },
    {
      id: 2,
      title: "",
      img: service2,
      description: "Ensuring the receipt of permits, registration certificates for medical devices Preparation of facilities for ...."
    },
    {
      id: 3,
      title: "",
      img: service3,
      description: "The company provides after-sales service for all products provided. Our engineers have experience and certificates from manufacturers ....."
    }
  ];

  return (
    <div className=" py-20 px-6" style={{ backgroundImage: `url(${hospital})` }} id='service'>
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-10">{t('service.header')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {dataCard.map(item => (
          <div
            key={item.id}
            className=" w-full relative bg-gray-100 rounded-xl flex flex-col items-center p-6 text-center shadow hover:shadow-md transition"
          >
            <img src={item.img} alt={item.title} className="w-full h-32 object-contain mb-4" />
            <h4 className="text-lg font-semibold mb-2">{item.title} {t('service.title')}</h4>
            <p className="text-sm text-gray-600">{item.description} {t('service.description')}</p>
            <button
              onClick={() => handleClick(item)}
              className=" absolute bottom-[-20px] mt-6 px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-700 text-white rounded-full text-sm"
            > {t('service.btn')}
            </button>
          </div>
        ))}
      </div>

      {modalShow && (
        <ServiceModal
          show={modalShow}
          data={data}
          onHide={() => setModalShow(false)}
        />
      )}
    </div>
  );
};

export default Service;
