import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './NewsItemExpanded.module.css'
import { setSelectedNews } from '../../../../../../../store/newsSlice';
import { parseHTML } from '../../../../../../../utils/utils';

import Back from './assets/Back.svg?react'

const NewsItemExpanded = () => {
    const dispatch = useDispatch();
    const selectedNews = useSelector((state) => state.news.selectedNews);
    const language = useSelector((state) => state.language.language);
    const navigate = useNavigate();
    
    if (!selectedNews) {
        return <div>Loading...</div>;
    }
    
    const newsData = language === 'en' ? selectedNews.local_en : selectedNews.local_ru;
    
    const handleBackClick = () => {
        dispatch(setSelectedNews(null));
        navigate('/news');
    };
    const formatDateTime = (dateTimeString) => {
        const [day, month, year, time] = dateTimeString.split(' ');
        const formattedDate = `${day}.${month}.${year}`;
        const formattedTime = time;
        return `${formattedDate} : ${formattedTime}`;
      };

    return (
        <div className={styles.NewsItemExpanded}>
            <button onClick={handleBackClick} className={styles.BackButton}>
                <Back className={styles.Back}/>
                <div className={styles.TitleData}>
                    <h1 className={styles.Title}>{newsData.title}</h1>
                    <p className={styles.Date}>{formatDateTime(selectedNews.publishedAt)}</p>
                </div>
            </button>
            
            <div className={styles.NewsContent}>{parseHTML(newsData.full_text)}</div>
        </div>
   )
}

export default NewsItemExpanded