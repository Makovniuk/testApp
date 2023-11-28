import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Header from './components/Header/Header';
import AboutUs from './pages/AboutUs/AboutUs';
import HomePage from './pages/HomePage/HomePage';
import LoginFormModal   from './pages/LoginPage/LoginFormModal';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} /> 
      <Route path="/login" element={<LoginFormModal />} /> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
