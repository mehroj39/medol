import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import GB from '../assets/Image/GB.png';
import UZ from '../assets/Image/UZ.png';
import RU from '../assets/Image/ru.png';
import i18n from '../i18n';

const LanguageSelector = ({ hideOnMobileMenu = false }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    code: 'en',
    label: 'English',
    flag: GB,
  });

  const languages = [
    { code: 'en', label: 'English', flag: GB },
    { code: 'uz', label: 'Uzbek', flag: UZ },
    { code: 'ru', label: 'Русский', flag: RU },
  ];

  const handleSelect = (lang) => {
    i18n.changeLanguage(lang.code);
    setSelected(lang);
    setOpen(false);
  };

  if (hideOnMobileMenu) return null; // 🔥 Agar prop true bo‘lsa — umuman ko‘rsatmaymiz

  return (
    <div className="relative text-sm font-medium z-50">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 hover:bg-gray-100"
      >
        <img src={selected.flag} alt={selected.label} className="w-5 h-5 object-cover rounded-full" />
        <span className="hidden sm:block">{selected.label}</span>
        <FaChevronDown className="text-xs mt-0.5" />
      </button>

      {open && (
        <ul className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-md border border-gray-200">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-blue-100 ${
                lang.code === selected.code ? 'bg-blue-500 text-white' : ''
              }`}
            >
              <img src={lang.flag} alt={lang.label} className="w-5 h-5 object-cover" />
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
