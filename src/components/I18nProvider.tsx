import { createContext, useContext, useEffect, ReactNode } from 'react';
import { setLocale, getLocale, type Locale } from '@/i18n';

const I18nContext = createContext<{ locale: Locale }>({ locale: 'en' });

export function I18nProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  useEffect(() => {
    setLocale(locale);
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18nContext() {
  return useContext(I18nContext);
}

