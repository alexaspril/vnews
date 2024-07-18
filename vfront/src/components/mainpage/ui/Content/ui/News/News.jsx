import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { loadNews, incrementPerPage, resetNews  } from '../../../../../../store/newsSlice';
import styles from './News.module.css';
import NewsItem from './ui/NewsItem';

const News = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);
  const currentPage = useSelector((state) => state.news.currentPage);
  const perPage = useSelector((state) => state.news.perPage);
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    dispatch(resetNews());
    dispatch(loadNews({ page: 1, perPage }));
  }, [dispatch, language]);

  const handleLoadMore = () => {
    dispatch(incrementPerPage());
    dispatch(loadNews({ page: 1, perPage: perPage + 10 }));
  };

  return (
    <div className={styles.News}>
      <h1>{t('news')}</h1>
      {news.map(item => (
        <NewsItem key={item.id} newsItem={item} language={language} />
      ))}
      <button className={styles.MoreButton} onClick={handleLoadMore}>
        {t('loadmore')}
      </button>
    </div>
  );
};

export default News;
