import React, { useState } from 'react';
import Modal from "../components/AboutModal";
 import { useTranslation } from 'react-i18next';

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  return (
    <div className='bg-white flex flex-col justify-end relative' id='about'>
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-10">{t('about.title')}</h1>

      <div className='w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] px-6 sm:px-8 md:px-10 lg:px-12 py-8 md:py-10 bg-gray-200 flex flex-col rounded-tr-4xl rounded-br-4xl mx-auto'>
          <div id='news'></div>
        <p className="text-sm sm:text-base leading-relaxed">
          "The MEDOL Group of Companies was created by highly qualified specialists in the field of medicine, engineering
          and economics, who have significant experience in the market of high medical technologies, which has its own offices
          in different parts of the Earth. In 2011, MEDOL registered in Uzbekistan FE LLC 'Medical Online Services'. {t('about.description1')}

          The company’s goal is to build a transparent long-term business, to benefit society through the development and
          implementation of advanced technologies in the healthcare system of the Republic of Uzbekistan." {t('about.description2')}
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="w-[130px] sm:w-[150px] mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-400 to-blue-700 text-white rounded-full text-sm"
        > {t('about.button')}
        </button>

      </div>

      {showModal && <Modal onClose={() => setShowModal(false)} />}

    </div>
  );
};

export default About;
