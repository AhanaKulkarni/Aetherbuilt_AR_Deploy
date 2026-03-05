import { Hexagon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/[0.05] bg-zinc-950 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Hexagon className="w-5 h-5 text-zinc-500" strokeWidth={1.5} />
          <span className="font-display font-bold text-sm tracking-widest text-zinc-500 uppercase">
            Aetherbuild
          </span>
        </div>
        
        <div className="text-zinc-600 text-xs font-display tracking-wider text-center md:text-right flex flex-col gap-1">
          <span>{t('footer.company')}</span>
          <span className="opacity-60">{t('footer.rights')}</span>
        </div>
      </div>
    </footer>
  );
}
