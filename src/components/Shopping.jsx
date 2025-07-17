import React from 'react';
import hospital from '../assets/Image/hospital.png';
import { CiLocationOn } from 'react-icons/ci';
import { FaFacebook, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from '../assets/Image/logo.png';
import { useTranslation } from 'react-i18next';

const Shopping = () => {
  const { t } = useTranslation();
  return (
    <div
      className="w-full bg-cover bg-center py-12 bg-gray-200" id='shopping'
      style={{ backgroundImage: `url(${hospital})` }}
    >
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-10 w-full lg:w-2/3">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-medium">{t('shopping.header')}</h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <CiLocationOn className="text-blue-500 text-2xl" />
                <a href="#" className="text-sm hover:underline"> {t('shopping.location')}
                  
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MdEmail className="text-blue-500 text-xl" />
                <p className="text-sm"> {t('shopping.email')}</p> 
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaPhone className="text-blue-500 text-xl mt-1" />
              <div className="text-sm">
                <p> {t('shopping.phone1')}</p>
                <p> {t('shopping.phone2')}</p>
              </div>
            </div>

            <button className="w-fit px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-500 hover:to-blue-800 text-white rounded-full text-sm md:text-base">
               {t('shopping.btn')}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <img src={logo} alt="logo" className="w-20 h-auto" />
            <p className="sm:w-[70%] text-sm"> {t('shopping.description')}
              
            </p>
          </div>

          <p className="text-xs text-gray-700"> {t('shopping.footer')}</p>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col sm:flex-row lg:flex-col gap-8">
          <ul className="flex-1 flex flex-col gap-2 text-gray-600">
            <li className="text-xl font-semibold text-black"> {t('shopping.li')}</li>
            <li className="hover:text-cyan-400 cursor-pointer">{t('shopping.li2')}</li>
            <li className="hover:text-cyan-400 cursor-pointer">{t('shopping.li3')}</li>
            <li className="hover:text-cyan-400 cursor-pointer">{t('shopping.li4')}</li>
          </ul>

          <ul className="flex-1 flex flex-col gap-2 text-gray-600">
            <li className="text-xl font-semibold text-black">{t('shopping.li5')}</li>
            <li className="hover:text-cyan-400 cursor-pointer">{t('shopping.li6')} </li>
            <li className="hover:text-cyan-400 cursor-pointer">{t('shopping.li7')}</li>
            <li className="hover:text-cyan-400 cursor-pointer">{t('shopping.li8')}</li>
            <li className="hover:text-cyan-400 cursor-pointer">{t('shopping.li9')} </li>
            <li className="hover:text-cyan-400 cursor-pointer">{t('shopping.li10')}</li>
            <li className="hover:text-cyan-400 cursor-pointer">{t('shopping.li11')}</li>
            <li className="hover:text-cyan-400 cursor-pointer">{t('shopping.li12')}</li>
            <li className="hover:text-cyan-400 cursor-pointer">{t('shopping.li13')}</li>
            <li className="hover:text-cyan-400 cursor-pointer">{t('shopping.li14')}</li>
          </ul>

          <ul className="flex-1 flex flex-col gap-2 text-gray-600">
            <li className="text-xl font-semibold text-black">{t('shopping.li15')}</li>
            <li className="hover:text-cyan-400 cursor-pointer">{t('shopping.li16')}</li>
            <li className="hover:text-cyan-400 cursor-pointer">{t('shopping.li17')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
