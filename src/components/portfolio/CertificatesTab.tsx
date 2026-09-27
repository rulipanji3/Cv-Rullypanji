import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  ShieldCheck, 
  Code, 
  Sparkles, 
  Layers, 
  GitBranch, 
  ExternalLink,
  Eye,
  FileText
} from 'lucide-react';
import { CERTIFICATES_DATA } from '../../data/portfolioData';
import type { CertificateItem } from '../../data/portfolioData';
import { Modal } from '../common/Modal';


const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
  Award: <Award className="w-5 h-5 text-cyan-400" />,
  Code: <Code className="w-5 h-5 text-[#2c67ed]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />,
  Layers: <Layers className="w-5 h-5 text-indigo-400" />,
  GitBranch: <GitBranch className="w-5 h-5 text-sky-400" />
};

export const CertificatesTab: React.FC = () => {
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);

  return (
    <div>
      {CERTIFICATES_DATA.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-xl mx-auto my-12 p-8 sm:p-10 rounded-2xl bg-[#081026]/75 border border-[#2c67ed]/30 backdrop-blur-xl shadow-[0_0_35px_rgba(44,103,237,0.2)] text-center relative overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#2c67ed]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#2c67ed]/15 border border-[#2c67ed]/40 flex items-center justify-center shadow-[0_0_20px_rgba(44,103,237,0.4)]">
            <Award className="w-8 h-8 text-cyan-300 animate-pulse" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-400/10 border border-cyan-400/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            Dalam Proses Penataan
          </span>

          <h4 className="text-xl font-bold text-white mb-2 tracking-wide">
            Sertifikasi Segera Hadir
          </h4>

          <p className="text-sm text-slate-400 leading-relaxed max-w-md mx-auto">
            Kredensial dan sertifikat kompetensi sedang dipersiapkan dan akan segera ditampilkan di galaksi portofolio ini.
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-[#081026]/80 border border-[#2c67ed]/25 hover:border-[#2c67ed]/60 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(44,103,237,0.3)] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon and Issuer */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#2c67ed]/40 transition-colors">
                    {iconMap[cert.icon] || <Award className="w-5 h-5 text-[#2c67ed]" />}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium text-cyan-300 bg-cyan-400/10 border border-cyan-400/20">
                    {cert.issueDate}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors leading-snug mb-1">
                  {cert.title}
                </h4>
                <p className="text-xs font-semibold text-[#2c67ed] mb-3">
                  {cert.issuer}
                </p>

                {/* Description */}
                {cert.description && (
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                    {cert.description}
                  </p>
                )}

                {/* Skills covered */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2.5 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credential ID and Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <div className="text-[11px] font-mono text-slate-400 truncate max-w-[150px]">
                  ID: {cert.credentialId}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Lihat Detail Sertifikat"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#2c67ed]/20 hover:bg-[#2c67ed] text-blue-300 hover:text-white border border-[#2c67ed]/50 text-xs font-semibold transition-all"
                  >
                    <span>Verifikasi</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}


      {/* Certificate Preview Modal */}
      {activeCert && (
        <Modal
          isOpen={!!activeCert}
          onClose={() => setActiveCert(null)}
          title="Detail Kredensial Sertifikasi"
        >
          <div className="space-y-6 text-center">
            {/* Holographic Certificate Frame */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#0e1b40] to-[#040817] border-2 border-[#2c67ed]/60 shadow-[0_0_40px_rgba(44,103,237,0.3)] relative overflow-hidden">
              <div className="absolute top-2 right-2 text-[10px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20">
                VERIFIED CREDENTIAL
              </div>

              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#2c67ed]/20 border border-[#2c67ed] flex items-center justify-center shadow-[0_0_20px_#2c67ed]">
                <ShieldCheck className="w-8 h-8 text-cyan-300" />
              </div>

              <h4 className="text-xl font-extrabold text-white mb-2">
                {activeCert.title}
              </h4>

              <p className="text-sm font-semibold text-blue-400 mb-3">
                Diterbitkan oleh: {activeCert.issuer} ({activeCert.issueDate})
              </p>

              <div className="inline-block px-4 py-1.5 rounded-lg bg-black/40 border border-white/10 font-mono text-xs text-slate-300 mb-5">
                Nomor Kredensial: <span className="text-cyan-300 font-bold">{activeCert.credentialId}</span>
              </div>

              {/* Description */}
              {activeCert.description && (
                <div className="text-left bg-black/30 p-4 rounded-xl border border-white/5 mb-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Deskripsi Sertifikasi:
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeCert.description}
                  </p>
                </div>
              )}

              <div className="text-left bg-black/30 p-4 rounded-xl border border-white/5">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Kompetensi Teruji:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {activeCert.skills.map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-[#2c67ed]/15 text-blue-200 border border-[#2c67ed]/30">
                      ✓ {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3">
              {activeCert.pdfUrl && (
                <a
                  href={activeCert.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 text-xs font-semibold transition-all"
                >
                  <FileText className="w-4 h-4 text-cyan-300" />
                  <span>Buka Dokumen PDF</span>
                </a>
              )}
              <a
                href={activeCert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2c67ed] hover:bg-blue-600 text-white text-xs font-bold shadow-[0_0_15px_rgba(44,103,237,0.5)] transition-all"
              >
                <span>Buka Google Drive</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
