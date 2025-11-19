import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { I18nProvider } from '@/components/I18nProvider';
import { locales, defaultLocale } from '@/i18n';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import ServicesPage from '@/pages/ServicesPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';

function LocaleRoute() {
  const { locale } = useParams<{ locale: string }>();
  
  if (!locale || !locales.includes(locale as any)) {
    return <Navigate to={`/${defaultLocale}`} replace />;
  }
  
  return (
    <I18nProvider locale={locale as any}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="*" element={<Navigate to={`/${locale}`} replace />} />
      </Routes>
    </I18nProvider>
  );
}

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Routes>
        <Route path="/" element={<Navigate to={`/${defaultLocale}`} replace />} />
        <Route path="/:locale/*" element={<LocaleRoute />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

