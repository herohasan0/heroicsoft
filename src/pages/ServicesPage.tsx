import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useTranslations } from '@/i18n';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Smartphone, Database, Palette, Zap, Shield, Check, ArrowRight } from "lucide-react";
import { Link } from "@/components/Link";

const getServiceIcon = (serviceType: string) => {
  switch (serviceType) {
    case 'webDev':
      return Code;
    case 'appDesign':
      return Smartphone;
    case 'apiIntegration':
      return Database;
    case 'uiux':
      return Palette;
    case 'performance':
      return Zap;
    case 'security':
      return Shield;
    default:
      return Code;
  }
};

function ServiceCard({ serviceKey, index }: { serviceKey: string; index: number }) {
  const t = useTranslations('servicesPage');
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = getServiceIcon(serviceKey);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(148, 163, 184, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7 text-slate-900 dark:text-white" />
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          {t(`services.${serviceKey}.title`)}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
          {t(`services.${serviceKey}.description`)}
        </p>

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {(t.raw(`services.${serviceKey}.features`) as string[] || []).map((feature: string, idx: number) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
              {t('startingFrom')}
            </p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              {t(`services.${serviceKey}.price`)}
            </p>
          </div>
          <button className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors flex items-center gap-2">
            {t('getStarted')}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const t = useTranslations('servicesPage');
  const serviceKeys = ['webDev', 'appDesign', 'apiIntegration', 'uiux', 'performance', 'security'];

  const processes = [
    { key: 'discovery', number: '01' },
    { key: 'planning', number: '02' },
    { key: 'development', number: '03' },
    { key: 'launch', number: '04' },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      
      <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
              {t('title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4">
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {serviceKeys.map((serviceKey, index) => (
              <ServiceCard key={serviceKey} serviceKey={serviceKey} index={index} />
            ))}
          </div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                {t('process.title')}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {t('process.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processes.map((process, index) => (
                <motion.div
                  key={process.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-6xl font-bold text-slate-200 dark:text-slate-800 mb-4">
                    {process.number}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {t(`process.steps.${process.key}.title`)}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t(`process.steps.${process.key}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-16 bg-slate-900 dark:bg-white rounded-3xl"
          >
            <h2 className="text-4xl font-bold text-white dark:text-slate-900 mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-slate-300 dark:text-slate-600 mb-8 text-lg max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                {t('cta.button')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

