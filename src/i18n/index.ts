import enMessages from '../../messages/en.json';
import trMessages from '../../messages/tr.json';
import esMessages from '../../messages/es.json';

export const locales = ['en', 'tr', 'es'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'en';

const messages = {
  en: enMessages,
  tr: trMessages,
  es: esMessages,
};

let currentLocale: Locale = defaultLocale;

export function setLocale(locale: Locale) {
  if (locales.includes(locale)) {
    currentLocale = locale;
    localStorage.setItem('locale', locale);
  }
}

export function getLocale(): Locale {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('locale') as Locale;
    if (stored && locales.includes(stored)) {
      return stored;
    }
  }
  return currentLocale;
}

export function getMessages(locale?: Locale) {
  const localeToUse = locale || getLocale();
  return messages[localeToUse] || messages[defaultLocale];
}

export function useTranslations(namespace?: string) {
  const locale = getLocale();
  const allMessages = getMessages(locale);
  
  const t = (key: string): string => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    const keys = fullKey.split('.');
    let value: any = allMessages;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return fullKey;
      }
    }
    
    return typeof value === 'string' ? value : fullKey;
  };
  
  t.raw = (key: string): any => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    const keys = fullKey.split('.');
    let value: any = allMessages;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return undefined;
      }
    }
    
    return value;
  };
  
  t.has = (key: string): boolean => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    const keys = fullKey.split('.');
    let value: any = allMessages;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return false;
      }
    }
    
    return value !== undefined;
  };
  
  return t;
}

export function useLocale(): Locale {
  return getLocale();
}

