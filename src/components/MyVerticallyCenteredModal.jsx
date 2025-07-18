import React from "react";
import { useTranslation } from "react-i18next";

const MyVerticallyCenteredModal = ({ show, onHide, data }) => {
  const { t } = useTranslation();

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-6 relative mx-3 flex flex-col gap-7">
        <div className="flex justify-between border-b border-gray-300 pb-5">
          <h1 className="text-3xl font-medium">
            {t("myverticallycenteredmodal.title")}
          </h1>
          <button className="text-black text-3xl" onClick={onHide}>
            &times;
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-semibold">
              {t("myverticallycenteredmodal.title2")} {data?.title}
            </h4>
            <p>
              {data?.description || "No description available."}
              {t("myverticallycenteredmodal.description")}
            </p>
          </div>
          {data?.img && (
            <img
              src={data.img}
              alt="modal visual"
              className="max-w-[300px] h-auto object-contain"
            />
          )}
        </div>
        <div className="text-right">
          <button
            className="w-fit px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-500 hover:to-blue-800 text-white rounded-full text-sm md:text-base mt-4"
            onClick={onHide}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyVerticallyCenteredModal;