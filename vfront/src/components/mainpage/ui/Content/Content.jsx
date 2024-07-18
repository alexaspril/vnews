import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Content.module.css'
import NewsItemExpanded from './ui/News/ui/NewsItemExpanded';
import News from './ui/News/News'

const Content = () => {
    const selectedNews = useSelector((state) => state.news.selectedNews);
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedNews) {
          navigate(`/news/${selectedNews.id}`);
        } else {
          navigate('/news');
        }
      }, [selectedNews, navigate]);
      
    return (
        <div className={styles.Content}>
            {selectedNews ? <NewsItemExpanded /> : <News />}
        </div>
   )
}

export default Content