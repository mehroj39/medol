import React from 'react';
import { useTranslation } from 'react-i18next';

const ServiceModal = ({ show, onHide, data }) => {
  const { t } = useTranslation();

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-3">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-6 relative flex flex-col gap-7">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-5">
          <h1 className="text-3xl font-medium">{t('servicemodal.header')}</h1>
          <button
            className="text-black text-3xl leading-none focus:outline-none"
            onClick={onHide}
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="flex flex-col gap-5 flex-1">
            <h4 className="text-4xl font-normal">
              {data?.title} {t('servicemodal.title')}
            </h4>
            <p className="text-gray-700">
              {data?.description || 'Lorem ipsum dolor sit amet...'}{' '}
              {t('servicemodal.description')}
            </p>
          </div>
          <div className="flex-1">
            {data?.img && (
              <img
                src={data.img}
                alt="modal visual"
                className="w-full h-auto object-contain"
              />
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-right">
          <button
            onClick={onHide}
            className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-700 hover:bg-blue-800 text-white rounded-full text-sm md:text-base mt-4"
          >
            {t('servicemodal.btn')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
