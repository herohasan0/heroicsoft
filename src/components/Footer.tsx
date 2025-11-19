import { motion } from "framer-motion";
import { ArrowUpRight, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { useTranslations } from '@/i18n';
import { Link } from "@/components/Link";

export default function Footer() {
  const t = useTranslations('footer');
  
  const socialIcons = [
    { key: 'twitter', icon: Twitter, href: 'https://x.com/hasannka_' },
    { key: 'github', icon: Github, href: 'https://github.com/herohasan0' },
    { key: 'linkedin', icon: Linkedin, href: 'https://www.linkedin.com/in/hasan-kahraman0/' },
    { key: 'email', icon: Mail, href: '/contact' },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-24">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8"
            >
              {t('cta')} <br />
              <span className="text-slate-400 dark:text-slate-500">{t('ctaHighlight')}</span>
            </motion.h2>
            <Link href="/contact" className="group inline-flex items-center gap-2 text-base sm:text-lg md:text-xl font-medium hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
              {t('startProject')} <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-slate-500 dark:text-slate-500 font-medium mb-3 sm:mb-4 text-sm sm:text-base">{t('navigation')}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {["services", "about"].map((item) => (
                  <li key={item}>
                    <Link href={`/${item}`} className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors text-sm sm:text-base">
                      {t(`links.${item}` as any)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-slate-500 dark:text-slate-500 font-medium mb-3 sm:mb-4 text-sm sm:text-base">{t('socials')}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {socialIcons.map((item) => (
                  <li key={item.key}>
                    {item.key === 'email' ? (
                      <Link href={item.href} className="flex items-center gap-2 hover:text-slate-600 dark:hover:text-slate-300 transition-colors text-sm sm:text-base">
                        <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {t(`links.${item.key}` as any)}
                      </Link>
                    ) : (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-slate-600 dark:hover:text-slate-300 transition-colors text-sm sm:text-base">
                        <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {t(`links.${item.key}` as any)}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-slate-500 dark:text-slate-500 text-xs sm:text-sm">
          <p className="text-center md:text-left">{t('copyright')}</p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('privacy')}</Link>
            <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
