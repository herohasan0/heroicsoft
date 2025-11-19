import { useLocale, setLocale, type Locale } from '@/i18n';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useTransition } from 'react';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const navigate = useNavigate();
  const { locale: paramLocale } = useParams<{ locale: Locale }>();
  const location = useLocation();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);

  function onSelectChange(nextLocale: Locale) {
    startTransition(() => {
      setLocale(nextLocale);
      // Get current path without locale
      const pathWithoutLocale = location.pathname.replace(`/${paramLocale || 'en'}`, '') || '/';
      navigate(`/${nextLocale}${pathWithoutLocale}`);
    });
    setIsOpen(false);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
      >
        <Globe className="w-4 h-4 text-slate-600 dark:text-slate-400" />
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl overflow-hidden z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onSelectChange(lang.code as Locale)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${
                    locale === lang.code
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{lang.label}</div>
                    <div className="text-xs text-slate-400 dark:text-slate-500">
                      {lang.code.toUpperCase()}
                    </div>
                  </div>
                  {locale === lang.code && (
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
