import { Routes, Route } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { BlogLists } from './pages/BlogLists';
import { BlogDetails } from './pages/BlogDetails';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<BlogLists />} path="/blogs" />
      <Route element={<BlogDetails />} path="details/:id" />
    </Routes>
  );
};
