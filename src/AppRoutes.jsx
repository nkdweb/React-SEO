import { Routes, Route } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
};
