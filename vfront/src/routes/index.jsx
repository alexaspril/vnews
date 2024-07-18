import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from '../components/mainpage/MainPage';
import { useSelector } from 'react-redux';

const AppRoutes = () => {
  const currentPage = useSelector((state) => state.page.currentPage);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={currentPage} replace />} />
        <Route path="/news/*" element={<MainPage />} />
        <Route path="/news/:id" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
