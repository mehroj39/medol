import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';


function MyVerticallyCenteredModal(props) {
    const { t } = useTranslation();
    console.log(props)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-6 relative mx-3 flex flex-col gap-7">
                    <div className="flex justify-between border-b border-gray-300 pb-5">
                        <h1 className='text-3xl font-medium'> {t('myverticallycenteredmodal.title')}</h1>
                        <button className='text-black text-3xl' onClick={props.onHide}>&times;</button>
                    </div>
                    <div className="flex justify-between" >
                        <div className="flex gap-7 flex-col">
                            <h4 className="text-4xl font-normal"> {t('myverticallycenteredmodal.title2')} {props?.data?.title}
                            </h4>
                            <p>
                                {props.data
                                    ? props.data.description
                                    : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi accusamus quam, omnis quas impedit voluptate blanditiis."}
                                    {t('myverticallycenteredmodal.description')}
                            </p>

                        </div>
                        <div>
                            {(props.data && props.data.img ? <img src={props?.data?.img} alt="imgmodal" className="w-full h-auto object-contain" /> : "")}
                        </div>
                    </div>
                    <div className="text-right">
                        <button className="w-fit px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-700 hover:bg-blue-800 text-white rounded-full text-sm md:text-base mt-4 text-right mr-4" onClick={props.onHide}>Close</button>

                    </div>
                </div>
            </div>
        </Modal>

    )
}

export default MyVerticallyCenteredModal
