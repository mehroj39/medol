import React, { useState } from "react";
import product1 from '../assets/productImg/product_1.png';
import product2 from '../assets/productImg/product_2.png';
import product3 from '../assets/productImg/product_3.png';
import product4 from '../assets/productImg/product_4.png';
import product5 from '../assets/productImg/product_5.png';
import product6 from '../assets/productImg/product_6.png';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'
import { useTranslation } from 'react-i18next';

const Product = () => {
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
      title: '',
      img: product1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi accusamus quam, omnis quas impedit voluptate blanditiis."
    },
    {
      id: 2,
      title: '',
      img: product2,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi accusamus quam, omnis quas impedit voluptate blanditiis."
    },
    {
      id: 3,
      title: '',
      img: product3,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi accusamus quam, omnis quas impedit voluptate blanditiis."
    },
    {
      id: 4,
      title: '',
      img: product4,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi accusamus quam, omnis quas impedit voluptate blanditiis."
    },
    {
      id: 5,
      title: '',
      img: product5,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi accusamus quam, omnis quas impedit voluptate blanditiis."
    },
    {
      id: 6,
      title: '',
      img: product6,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi accusamus quam, omnis quas impedit voluptate blanditiis.  "
    }
  ];

  return (
<div className="py-20 px-6 " id="products">
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-10"> {t('products.header')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {dataCard.map(item => (
          <div
            key={item.id}
            className="bg-gray-100 rounded-xl flex flex-col items-center p-6 text-center shadow hover:shadow-md transition"
          >
            <img src={item.img} alt={item.title} className="w-[250px] h-[250px] object-contain" />
            <p className="text-2xl font-semibold mt-4">{item.title} {t('products.title')}</p>
            <button
              onClick={() => handleClick(item)}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-700 text-white rounded-full text-sm"
            > {t('products.btn')}
            </button>
          </div>
        ))}
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        data={data}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Product;
