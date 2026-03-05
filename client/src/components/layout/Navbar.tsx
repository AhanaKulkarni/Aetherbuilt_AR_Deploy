import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Hexagon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const scrollToContact = () => {
    document.getElementById("deployment")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "glass-panel py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Hexagon className="w-6 h-6 text-zinc-100" strokeWidth={1.5} />
          <span className="font-display font-bold text-xl tracking-widest text-zinc-100 uppercase">
            Aetherbuild
          </span>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-xs font-display tracking-widest text-zinc-400 hover:text-zinc-100 transition-colors uppercase"
          >
            <Globe className="w-4 h-4" strokeWidth={1.5} />
            <AnimatePresence mode="wait">
              <motion.span
                key={language}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="w-4 text-center inline-block"
              >
                {language.toUpperCase()}
              </motion.span>
            </AnimatePresence>
          </button>

          <button 
            onClick={scrollToContact}
            className="hidden md:block px-6 py-2.5 text-xs font-display tracking-widest uppercase bg-zinc-100 text-zinc-900 rounded hover:bg-white transition-colors"
          >
            {t('nav.requestAccess')}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
