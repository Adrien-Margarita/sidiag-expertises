import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Thanks from './pages/Thanks';
import Layout from './components/Layout';
import './styles/index.css';
import ContactPage from './pages/Contact';
import ScrollToHash from './components/ScrollToHash';
import LegalNotices from './pages/LegalNotices';
import PrivacyPolicy from './pages/PrivacyPolicy';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToHash />
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/merci" element={<Thanks />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<LegalNotices />} />
          <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
