import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../../../../../store/languageSlice';
import styles from './LanguageSelector.module.css';
import En from "./assets/en.svg?react";
import Ru from "./assets/ru.svg?react";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const handleLanguageToggle = () => {
    const newLanguage = language === 'en' ? 'ru' : 'en';
    dispatch(setLanguage(newLanguage));
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button className={styles.LanguageSelector} onClick={handleLanguageToggle}>
      {language === 'en' ? <En className={styles.flag} /> : <Ru className={styles.flag} />}
    </button>
  );
};

export default LanguageSelector;
