import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/components/Link";
import { useState, useEffect } from "react";
import { useTranslations } from '@/i18n';
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('nav');

  useEffect(() => {
    // Set initial scroll state
    setScrolled(window.scrollY > 50);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: 'services', href: '/services', isHash: false },
    { key: 'about', href: '/about', isHash: false },
    { key: 'contact', href: '/contact', isHash: false }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        suppressHydrationWarning
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3 md:py-4"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-24 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold tracking-tighter text-slate-900 dark:text-white"
          >
            HEROICSOFT
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.isHash ? (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {t(item.key as any)}
                </a>
              ) : (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {t(item.key as any)}
                </Link>
              )
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link href="/contact" className="px-4 lg:px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-sm font-medium rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-all">
              {t('letsTalk')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-900 dark:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg pt-20 px-4">
              <nav className="flex flex-col space-y-4 max-w-sm mx-auto">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-6 py-4 text-lg font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-colors"
                    >
                      {t(item.key as any)}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-6 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-center text-lg font-medium rounded-xl hover:bg-slate-800 dark:hover:bg-slate-200 transition-all"
                  >
                    {t('letsTalk')}
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
