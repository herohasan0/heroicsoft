import { motion } from "framer-motion";
import { useTranslations } from '@/i18n';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Package, Clock, Truck, RotateCcw, RefreshCw, Mail, CheckCircle } from "lucide-react";

export default function DeliveryReturnPage() {
  const t = useTranslations('deliveryReturn');
  
  const deliverySections = [
    { icon: Clock, key: 'processingTime' },
    { icon: Package, key: 'deliveryTime' },
    { icon: Truck, key: 'deliveryFees' },
    { icon: CheckCircle, key: 'tracking' },
  ];

  const returnSections = [
    { icon: RotateCcw, key: 'returnConditions' },
    { icon: RefreshCw, key: 'returnProcess' },
    { icon: FileText, key: 'refundProcess' },
    { icon: RefreshCw, key: 'exchangeConditions' },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      
      <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-4 sm:mb-6">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 dark:text-slate-400" />
              <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                {t('badge')}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
              {t('title')}
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
              {t('lastUpdated')}: <span className="font-medium">November 19, 2025</span>
            </p>
          </motion.div>

          {/* Delivery Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8">
              {t('delivery.title')}
            </h2>
            
            <div className="space-y-12">
              {deliverySections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.section
                    key={section.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="border-b border-slate-200 dark:border-slate-800 pb-12 last:border-0"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-slate-900 dark:text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                          {t(`delivery.${section.key}.title`)}
                        </h3>
                        <div className="prose prose-slate dark:prose-invert max-w-none">
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            {t(`delivery.${section.key}.content`)}
                          </p>
                          
                          {t.has(`delivery.${section.key}.items`) && (
                            <ul className="space-y-2 mt-4">
                              {(t.raw(`delivery.${section.key}.items`) as string[] || []).map((item: string, idx: number) => (
                                <li key={idx} className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                  <span className="text-slate-400 dark:text-slate-600 mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.section>
                );
              })}
            </div>
          </motion.div>

          {/* Return Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8">
              {t('return.title')}
            </h2>
            
            <div className="space-y-12">
              {returnSections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.section
                    key={section.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="border-b border-slate-200 dark:border-slate-800 pb-12 last:border-0"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-slate-900 dark:text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                          {t(`return.${section.key}.title`)}
                        </h3>
                        <div className="prose prose-slate dark:prose-invert max-w-none">
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            {t(`return.${section.key}.content`)}
                          </p>
                          
                          {t.has(`return.${section.key}.items`) && (
                            <ul className="space-y-2 mt-4">
                              {(t.raw(`return.${section.key}.items`) as string[] || []).map((item: string, idx: number) => (
                                <li key={idx} className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                  <span className="text-slate-400 dark:text-slate-600 mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.section>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-16 p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              {t('contact.title')}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {t('contact.content')}
            </p>
            <a 
              href="mailto:help@heroicsoft.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-full font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {t('contact.email')}
            </a>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

