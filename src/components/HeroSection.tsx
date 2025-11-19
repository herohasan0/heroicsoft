import { motion } from "framer-motion";
import { ArrowRight, Command, Terminal, Cpu, Globe } from "lucide-react";
import { useTranslations } from '@/i18n';
import { Link } from "@/components/Link";

// Fixed particle positions to avoid hydration mismatch
const PARTICLE_POSITIONS = [
  { top: 25, left: 30 },
  { top: 40, left: 65 },
  { top: 60, left: 25 },
  { top: 70, left: 55 },
  { top: 35, left: 75 },
];

export default function HeroSection() {
  const t = useTranslations('hero');
  
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-slate-50 dark:bg-slate-950 relative">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]" 
             style={{ backgroundImage: "radial-gradient(#64748b 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
        </div>

      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8 z-10 relative">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 w-fit"
        >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{t('availableBadge')}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
        >
          {t('title')} <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-600 to-slate-400 dark:from-slate-200 dark:to-slate-500">
            {t('titleHighlight')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-lg"
        >
          {t('description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap gap-3 sm:gap-4"
        >
          <Link href="/contact" className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300 flex items-center justify-center gap-2">
            {t('hireMe')} <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-800 mt-2 sm:mt-4"
        >
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 sm:mb-4">{t('trustedBy')}</p>
            <div className="flex gap-4 sm:gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <Command className="w-5 h-5 sm:w-6 sm:h-6" />
                <Terminal className="w-5 h-5 sm:w-6 sm:h-6" />
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
                <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
        </motion.div>
      </div>

      {/* Right Content - Advanced Geometric Animation */}
      <div className="hidden lg:flex w-full lg:w-1/2 h-screen items-center justify-center relative perspective-[1000px]">
        <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] flex items-center justify-center transform-style-3d">
          {/* Orbiting Rings - Increased Opacity and Width */}
          {[1, 2, 3].map((i) => (
             <motion.div
                key={i}
                animate={{
                  rotateX: [0, 360],
                  rotateY: [0, 360],
                  rotateZ: [0, 360],
                }}
                transition={{
                  duration: 15 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className={`absolute border-2 border-slate-400/20 dark:border-slate-500/20 rounded-full shadow-[0_0_15px_rgba(148,163,184,0.1)] dark:shadow-[0_0_15px_rgba(248,250,252,0.05)]`}
                style={{
                    width: `${100 + i * 60}%`,
                    height: `${100 + i * 60}%`,
                    borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%'
                }}
             /> 
          ))}

          {/* Core Geometric Shape - More Dynamic */}
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 border-4 border-slate-900/5 dark:border-white/5 rounded-full"
          />
          
          {/* Central Glowing Core */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="w-64 h-64 bg-linear-to-tr from-blue-500/30 to-purple-500/30 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="w-40 h-40 bg-slate-900/5 dark:bg-white/5 rounded-2xl rotate-45 backdrop-blur-md border border-slate-900/10 dark:border-white/10 flex items-center justify-center">
                <div className="w-20 h-20 bg-slate-900 dark:bg-white rounded-full opacity-80 shadow-2xl" />
            </div>
          </motion.div>

          {/* Floating Tech Particles */}
          {PARTICLE_POSITIONS.map((pos, i) => (
            <motion.div
                key={`particle-${i}`}
                className="absolute w-3 h-3 bg-slate-400 dark:bg-slate-600 rounded-full"
                initial={{ opacity: 0 }}
                animate={{
                    y: [-20, 20, -20],
                    x: [-20, 20, -20],
                    opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                }}
                style={{
                    top: `${pos.top}%`,
                    left: `${pos.left}%`,
                }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
