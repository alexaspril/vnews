import React from 'react';
import styles from './NewsItem.module.css';
import { setSelectedNews } from '../../../../../../../store/newsSlice';
import { useDispatch } from 'react-redux';
import { parseHTML } from '../../../../../../../utils/utils';


const NewsItem = ({ newsItem, language }) => {
    const dispatch = useDispatch();
    const newsData = language === 'en' ? newsItem.local_en : newsItem.local_ru;
    const formatDateTime = (dateTimeString) => {
        const [day, month, year, time] = dateTimeString.split(' ');
        const formattedDate = `${day}.${month}.${year}`;
        const formattedTime = time;
        return `${formattedDate} : ${formattedTime}`;
      };
    const handleClick = () => {
        dispatch(setSelectedNews(newsItem));
    };
    return (
        <div className={styles.NewsItem}  onClick={handleClick}>
            <div className={styles.NewsContent}>{parseHTML(newsData.short_text)}</div>
            <div className={styles.TitleDate}>
                <h2 className={styles.Title}>{newsData.title}</h2>    
                <p className={styles.Date}>{formatDateTime(newsItem.publishedAt)}</p>
            </div>
            
        </div>
    );
};

export default NewsItem;
