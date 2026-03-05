import { motion } from "framer-motion";
import { Link2Off, EyeOff, Timer } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Problem() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Link2Off,
      titleKey: 'problem.card1.title',
      descKey: 'problem.card1.desc',
    },
    {
      icon: EyeOff,
      titleKey: 'problem.card2.title',
      descKey: 'problem.card2.desc',
    },
    {
      icon: Timer,
      titleKey: 'problem.card3.title',
      descKey: 'problem.card3.desc',
    }
  ] as const;

  return (
    <section className="py-32 relative border-t border-white/[0.05] bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="font-display text-xs tracking-[0.2em] text-metallic uppercase block mb-4">
            {t('problem.header')}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-zinc-100">
            {t('problem.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card p-8 rounded-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              
              <card.icon className="w-8 h-8 text-zinc-500 mb-6 stroke-[1.5]" />
              <h3 className="font-display text-xl text-zinc-100 font-medium mb-4">
                {t(card.titleKey)}
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                {t(card.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
