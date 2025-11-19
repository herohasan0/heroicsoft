import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Code, Smartphone, Database, ArrowUpRight } from "lucide-react";
import { useTranslations, useLocale } from '@/i18n';

const getServiceIcon = (serviceType: string) => {
  switch (serviceType) {
    case 'webDev':
      return Code;
    case 'appDesign':
      return Smartphone;
    case 'apiIntegration':
      return Database;
    default:
      return Code;
  }
};

function ServiceCard({ serviceKey, index }: { serviceKey: string; index: number }) {
  const t = useTranslations('services');
  const locale = useLocale();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = getServiceIcon(serviceKey);

  // Safe translation access
  let cardTitle, cardDescription, cardPrice;
  try {
    cardTitle = t(`${serviceKey}.title`);
    cardDescription = t(`${serviceKey}.description`);
    cardPrice = t(`${serviceKey}.price`);
  } catch (error) {
    console.error(`Translation error for ${serviceKey}:`, error);
    cardTitle = serviceKey;
    cardDescription = '';
    cardPrice = '';
  }

  return (
    <motion.div
      key={`${serviceKey}-${locale}-${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
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
      
      <div className="absolute top-6 right-6 p-2 bg-white dark:bg-slate-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <ArrowUpRight className="w-5 h-5 text-slate-900 dark:text-white" />
      </div>

      <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-slate-900 dark:text-white z-10 relative">
        <Icon className="w-6 h-6" />
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 z-10 relative">
        {cardTitle}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm leading-relaxed z-10 relative">
        {cardDescription}
      </p>

      <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-200 dark:border-slate-800 z-10 relative">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {cardPrice}
        </span>
        <button className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-sm font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">
          {t('bookNow')}
        </button>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const locale = useLocale();
  const t = useTranslations('services');
  const serviceKeys = ['webDev', 'appDesign', 'apiIntegration'];

  // Ensure we have translations before rendering
  let title, subtitle;
  try {
    title = t('title');
    subtitle = t('subtitle');
  } catch (error) {
    console.error('Translation error:', error);
    title = 'Services';
    subtitle = 'Premium technical services packaged as products.';
  }

  return (
    <section key={`services-${locale}`} className="pb-12 px-6 lg:px-24 lg:pb-24 lg:pt-24 bg-white dark:bg-slate-950" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          key={`header-${locale}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceKeys.map((serviceKey, index) => (
            <ServiceCard key={`${serviceKey}-${locale}-${index}`} serviceKey={serviceKey} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
