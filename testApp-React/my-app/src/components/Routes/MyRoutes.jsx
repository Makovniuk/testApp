import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginFormModal from '../../pages/LoginPage/LoginFormModal';
import Header from '../Header/Header';

export default function MyRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<LoginFormModal />} />
      <Route path='/home' element={<Header />} />
    </Routes>
  );
}
