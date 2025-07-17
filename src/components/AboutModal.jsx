import { t } from 'i18next';
import React from 'react';

const AboutModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-2">
            <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg p-4 sm:p-6 relative">

                <div className="flex justify-between items-center border-b border-gray-300 pb-4">
                    <h1 className="text-xl sm:text-3xl font-semibold"> {t('aboutmodal.title')}</h1>
                    <button
                        className="text-black text-2xl sm:text-3xl"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>

                <div className="pt-4 sm:pt-6 border-b border-gray-300 text-sm sm:text-base leading-relaxed text-gray-700">

                    <p>
                        {t('aboutmodal.description')}
                    </p>
                </div>

                <div className="text-center sm:text-right mt-4">
                    <button
                        onClick={onClose}
                        className="w-full sm:w-fit px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-700 hover:opacity-90 text-white rounded-full text-sm sm:text-base"
                    > {t('aboutmodal.closebtn')}

                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutModal;
