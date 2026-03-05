import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Features() {
  const { t } = useLanguage();

  const featureKeys = [
    'features.f1', 'features.f2', 'features.f3',
    'features.f4', 'features.f5', 'features.f6'
  ] as const;

  return (
    <section className="py-24 relative border-y border-white/[0.05] bg-zinc-950/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <span className="font-display text-xs tracking-[0.2em] text-metallic uppercase block mb-4">
              {t('features.header')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-zinc-100">
              {t('features.title')}
            </h2>
          </motion.div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
            {featureKeys.map((key, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-zinc-300" strokeWidth={2} />
                </div>
                <span className="text-zinc-300 font-light">
                  {t(key)}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
