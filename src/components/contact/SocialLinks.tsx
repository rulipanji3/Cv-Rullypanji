import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, MessageSquare, ExternalLink, Copy, Check, Compass, Sparkles
} from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../common/BrandIcons';

const iconMap: Record<string, React.ReactNode> = {
  Github: <GithubIcon className="w-5 h-5" />,
  Linkedin: <LinkedinIcon className="w-5 h-5" />,
  Instagram: <InstagramIcon className="w-5 h-5" />,
  Mail: <Mail className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
};

export const SocialLinks: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-5">
      {/* Quick email copy card */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0d1a40] to-[#050b1d] border border-[#2c67ed]/40 shadow-[0_0_30px_rgba(44,103,237,0.2)] relative overflow-hidden animate-border-glow">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#2c67ed]/15 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-xl bg-[#2c67ed]/20 border border-[#2c67ed]/50 text-cyan-300">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white">Saluran Cepat</h4>
            <p className="text-xs text-slate-400">Siap terhubung secara langsung</p>
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          Lebih suka berkirim surel langsung? Salin alamat email saya dengan sekali klik:
        </p>

        <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/10">
          <span className="font-mono text-xs text-cyan-300 truncate max-w-[180px] sm:max-w-xs">
            {PERSONAL_INFO.email}
          </span>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#2c67ed]/20 hover:bg-[#2c67ed] text-blue-300 hover:text-white border border-[#2c67ed]/40 hover:border-[#2c67ed] transition-all cursor-pointer"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  key="copied"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Tersalin!</span>
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin</span>
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Social Media Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {SOCIAL_LINKS.map((link, idx) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.07 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group relative p-4 rounded-xl backdrop-blur-md overflow-hidden border transition-all duration-300 flex items-center justify-between"
            style={{
              background: 'rgba(8,16,38,0.75)',
              borderColor: `${link.color}25`,
              boxShadow: `0 4px 20px rgba(0,0,0,0.3)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${link.color}70`;
              e.currentTarget.style.boxShadow = `0 0 25px ${link.color}25, 0 4px 20px rgba(0,0,0,0.4)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${link.color}25`;
              e.currentTarget.style.boxShadow = `0 4px 20px rgba(0,0,0,0.3)`;
            }}
          >
            {/* Subtle glow behind icon */}
            <div
              className="absolute -top-4 -left-4 w-16 h-16 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
              style={{ background: link.color }}
            />

            <div className="flex items-center gap-3 relative">
              <div
                className="p-2.5 rounded-xl transition-all duration-300"
                style={{
                  background: `${link.color}18`,
                  border: `1px solid ${link.color}35`,
                  color: link.color,
                }}
              >
                {iconMap[link.icon] ? (
                  <span style={{ color: link.color }}>
                    {iconMap[link.icon]}
                  </span>
                ) : (
                  <Sparkles className="w-5 h-5" style={{ color: link.color }} />
                )}
              </div>

              <div>
                <h5 className="text-sm font-bold text-white group-hover:text-white transition-colors">
                  {link.name}
                </h5>
                <p className="text-[11px] font-mono text-slate-400 group-hover:text-slate-300 transition-colors">
                  {link.handle}
                </p>
              </div>
            </div>

            {/* WhatsApp live pulse indicator */}
            {link.name === 'WhatsApp' && (
              <div className="flex items-center gap-1.5 mr-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              </div>
            )}

            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all relative" />
          </motion.a>
        ))}
      </div>

      {/* Availability note */}
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/8 border border-emerald-500/20 text-xs text-emerald-300">
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span>Tersedia untuk proyek freelance & kolaborasi baru</span>
      </div>
    </div>
  );
};
