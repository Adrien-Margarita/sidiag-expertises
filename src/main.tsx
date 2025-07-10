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
import SaleDiagnostics from './pages/SaleDiagnostics';
import DiagnosticPage from './pages/DiagnosticPage';
import { HelmetProvider } from 'react-helmet-async';
import RentalDiagnostics from './pages/RentalDiagnostics';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToHash />
          <Layout>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/merci" element={<Thanks />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/mentions-legales" element={<LegalNotices />} />
              <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
              <Route path="/diagnostics-vente" element={<SaleDiagnostics />} />
              <Route path="/diagnostics-location" element={<RentalDiagnostics />} />
              <Route path="/diagnostic/:slug" element={<DiagnosticPage />} />
            </Routes>
          </Layout>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
