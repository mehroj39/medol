import React, { useState } from 'react';
import logo from '../assets/Image/logo.png';
import hospital from '../assets/Image/hospital.png';
import { CiLocationOn } from 'react-icons/ci';
import { FaFacebook, FaPhone, FaSearch } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import MySwiper from '../components/Swiper';
import LanguageSelector from '../components/LanguageSelector';
import { useTranslation } from 'react-i18next';
const Navbar = () => {
  const { t } = useTranslation();

   const navItems = [
  { item: t('navbar.shopping'), link: 'shopping' },
  { item: t('navbar.about'), link: 'about' },
  { item: t('navbar.product'), link: 'product' },
  { item: t('navbar.service'), link: 'service' },
  { item: t('navbar.news'), link: 'news' }
];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hospital})` }}
    >
      <div className="xl:hidden fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-2 text-blue-500 text-lg">
            <CiLocationOn />
            <FaPhone />
          </div>
          <img src={logo} alt="logo" className="w-16 h-auto" />
          <div className="flex items-center gap-3">
            <FaSearch className="text-lg cursor-pointer" />
            <LanguageSelector />
            <HiOutlineMenuAlt3
              className="text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>

      <div className="hidden sm:hidden md:hidden xl:flex justify-center relative z-40 pt-6">
        <div className="w-[90%] max-w-[1200px] flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 text-blue-900">
            <CiLocationOn className="text-2xl" />
            <span className="text-sm"> {t('nav.location')}</span>
            <FaPhone className="text-xl ml-3" />
            <div className="flex flex-col text-xs">
              <a href="tel:+998712766253">+998 71 276-62-53 </a>
              <a href="tel:+998712766254">+998 71 276-62-54 </a>
            </div>
          </div>
          <img src={logo} alt="logo" className="w-24" />
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white px-2 py-1 rounded-full">
              <FaSearch className="text-blue-500 cursor-pointer text-base" />
            </div>
            <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-2xl text-xs">
              <FaFacebook className="text-lg" />
              <p> {t('nav.social')}</p>
            </div>
            <div className="ml-2">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>

      <ul className="hidden xl:flex fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-[1000px] z-30 justify-center gap-6 bg-white py-3 px-4 mt-14 rounded-xl shadow-md text-blue-700 text-sm font-medium">
        {navItems.map((item,key) => (
          <li key={key} className="relative group hover:text-cyan-400">
            <a href={`#${item.link}`}>{item.item.toUpperCase()}</a>
            <span className="absolute -right-3 top-1/2 -translate-y-1/2 text-cyan-400 opacity-0 group-hover:opacity-100 transition duration-200">
              ●
            </span>
          </li>
        ))}
      </ul>

      <div className="pt-[60px] sm:pt-[80px] md:pt-[120px] xl:pt-[200px]">
        <MySwiper />
      </div>

      <ul
        className={`xl:hidden fixed top-[60px] left-1/2 -translate-x-1/2 w-[280px] bg-white z-40
          flex flex-col items-center gap-3 text-sm font-semibold py-5 transition-all duration-300
          text-blue-600 rounded-xl shadow-md
          ${isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`}
      >
        {[t('navbar.shopping'), t('navbar.about'), t('navbar.products'), t('navbar.service'), t('navbar.news'), t('navbar.shopping')].map((item) => (
          <li
            key={item}
            className="w-full text-center p-3 hover:bg-sky-400 hover:text-white transition-all"
          >
            <a onClick={() => setIsMenuOpen(false)} href={`#${item}`}>
              {item.toUpperCase()}
            </a>
          </li>
        ))}

        <div className="pt-2">
          <LanguageSelector />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
