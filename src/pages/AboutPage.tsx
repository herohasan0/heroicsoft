import { motion } from "framer-motion";
import { useTranslations } from '@/i18n';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Palette, Zap, Users, Award, Target, Briefcase, GraduationCap } from "lucide-react";
import { Link } from "@/components/Link";

export default function AboutPage() {
  const t = useTranslations('about');
  
  const skills = [
    { icon: Code, key: 'development' },
    { icon: Palette, key: 'design' },
    { icon: Zap, key: 'performance' },
    { icon: Users, key: 'collaboration' },
  ];

  const stats = [
    { key: 'projects', icon: Briefcase },
    { key: 'clients', icon: Users },
    { key: 'experience', icon: Award },
    { key: 'satisfaction', icon: Target },
  ];

  const journey = [
    { key: 'education', icon: GraduationCap },
    { key: 'career', icon: Briefcase },
    { key: 'expertise', icon: Award },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      
      <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12 sm:mb-16 md:mb-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
                  {t('title')}
                </h1>
                <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  <p>{t('intro.paragraph1')}</p>
                  <p>{t('intro.paragraph2')}</p>
                </div>
              </div>
              
              {/* Profile Image Placeholder */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="relative aspect-square rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 overflow-hidden border border-slate-200 dark:border-slate-800"
                >
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-600 rounded-full opacity-20 blur-3xl"></div>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-800">
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">Heroicsoft</p>
                    <p className="text-slate-600 dark:text-slate-400">{t('role')}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-center"
                >
                  <Icon className="w-8 h-8 text-slate-900 dark:text-white mx-auto mb-4" />
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    {t(`stats.${stat.key}.value`)}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {t(`stats.${stat.key}.label`)}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-24"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              {t('skills.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-slate-900 dark:text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {t(`skills.${skill.key}.title`)}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {t(`skills.${skill.key}.description`)}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Journey Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-24"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              {t('journey.title')}
            </h2>
            <div className="space-y-8">
              {journey.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-6 p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800"
                  >
                    <div className="w-16 h-16 bg-slate-200 dark:bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-slate-900 dark:text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                        {t(`journey.${item.key}.title`)}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {t(`journey.${item.key}.description`)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center p-12 bg-slate-900 dark:bg-white rounded-2xl"
          >
            <h2 className="text-3xl font-bold text-white dark:text-slate-900 mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-slate-300 dark:text-slate-600 mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {t('cta.button')}
            </Link>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

