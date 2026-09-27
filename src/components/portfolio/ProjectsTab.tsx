import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Info, Rocket, Star } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import type { ProjectItem } from '../../data/portfolioData';
import { Modal } from '../common/Modal';
import { GithubIcon } from '../common/BrandIcons';

// Tag colors per technology
const TAG_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  'Laravel': { bg: 'rgba(240,83,64,0.12)', border: 'rgba(240,83,64,0.35)', text: '#f05340' },
  'PHP': { bg: 'rgba(119,123,180,0.12)', border: 'rgba(119,123,180,0.35)', text: '#777bb4' },
  'MySQL': { bg: 'rgba(0,117,143,0.12)', border: 'rgba(0,117,143,0.35)', text: '#00758f' },
  'React': { bg: 'rgba(97,218,251,0.12)', border: 'rgba(97,218,251,0.35)', text: '#61dafb' },
  'TypeScript': { bg: 'rgba(49,120,198,0.12)', border: 'rgba(49,120,198,0.35)', text: '#3178c6' },
  'Vite': { bg: 'rgba(189,52,254,0.12)', border: 'rgba(189,52,254,0.35)', text: '#bd34fe' },
  'Blade': { bg: 'rgba(255,45,85,0.12)', border: 'rgba(255,45,85,0.35)', text: '#ff2d55' },
  'REST API': { bg: 'rgba(52,199,89,0.12)', border: 'rgba(52,199,89,0.35)', text: '#34c759' },
  'default': { bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.12)', text: '#94a3b8' },
};

// 3D Tilt Card
const TiltCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -8;
    const rotateY = ((x - cx) / cx) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`;

    if (shineRef.current) {
      const pctX = (x / rect.width) * 100;
      const pctY = (y / rect.height) * 100;
      shineRef.current.style.setProperty('--mouse-x', `${pctX}%`);
      shineRef.current.style.setProperty('--mouse-y', `${pctY}%`);
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    }
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.15s ease' }}
    >
      <div ref={shineRef} className="tilt-card-shine" />
      {children}
    </div>
  );
};

export const ProjectsTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Web App', 'Fullstack', 'UI/UX'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {PROJECTS_DATA.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-xl mx-auto my-12 p-8 sm:p-10 rounded-2xl bg-[#081026]/75 border border-[#2c67ed]/30 backdrop-blur-xl shadow-[0_0_35px_rgba(44,103,237,0.2)] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#2c67ed]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#2c67ed]/15 border border-[#2c67ed]/40 flex items-center justify-center shadow-[0_0_20px_rgba(44,103,237,0.4)]">
            <Rocket className="w-8 h-8 text-cyan-300 animate-pulse" />
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-400/10 border border-cyan-400/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            Dalam Proses Kurasi & Pengembangan
          </span>
          <h4 className="text-xl font-bold text-white mb-2 tracking-wide">Proyek Segera Diluncurkan</h4>
          <p className="text-sm text-slate-400 leading-relaxed max-w-md mx-auto">
            Koleksi karya dan proyek aplikasi web terbaru sedang dalam tahap perakitan dan akan segera diluncurkan ke orbit portofolio ini.
          </p>
        </motion.div>
      ) : (
        <>
          {/* Filter Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2c67ed] text-white shadow-[0_0_15px_rgba(44,103,237,0.5)] border border-blue-400/50'
                    : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <TiltCard className="group relative flex flex-col h-full rounded-2xl bg-[#081026]/80 border border-[#2c67ed]/25 hover:border-[#2c67ed]/70 backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(44,103,237,0.35)] transition-all overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#050b1a]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center filter saturate-110 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081026] via-[#081026]/20 to-black/30" />

                    {/* Overlay hover: "Live Preview" label */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="px-4 py-2 rounded-full bg-[#2c67ed]/90 backdrop-blur-md text-white text-xs font-bold shadow-[0_0_20px_rgba(44,103,237,0.8)] flex items-center gap-2">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Klik untuk Detail
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-black/70 backdrop-blur-md border border-white/10 text-cyan-300">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#2c67ed]/90 text-white shadow-[0_0_12px_#2c67ed] flex items-center gap-1">
                          <Star className="w-2.5 h-2.5" />
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-1 mb-2">
                      {project.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Colored Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.slice(0, 4).map((tag) => {
                        const c = TAG_COLORS[tag] ?? TAG_COLORS['default'];
                        return (
                          <span
                            key={tag}
                            className="text-[10px] px-2.5 py-1 rounded-md font-semibold"
                            style={{
                              background: c.bg,
                              border: `1px solid ${c.border}`,
                              color: c.text,
                            }}
                          >
                            {tag}
                          </span>
                        );
                      })}
                      {project.tags.length > 4 && (
                        <span className="text-[10px] px-2 py-1 rounded-md bg-white/[0.04] text-slate-400 border border-white/10">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Detail Info</span>
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-all hover:border-white/30"
                          title="Source Code"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="shimmer-btn inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#2c67ed] hover:bg-blue-500 text-white text-xs font-semibold shadow-[0_0_15px_rgba(44,103,237,0.5)] hover:shadow-[0_0_25px_rgba(44,103,237,0.8)] transition-all"
                        >
                          <span>Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}

      {/* Modal */}
      {activeModalProject && (
        <Modal
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
          title={activeModalProject.title}
        >
          <div className="space-y-4">
            <div className="h-52 w-full rounded-xl overflow-hidden border border-white/10 relative">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d1e] via-transparent to-transparent opacity-80" />
            </div>

            <div>
              <span className="text-xs font-semibold text-[#2c67ed] uppercase tracking-wider">
                Kategori: {activeModalProject.category}
              </span>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {activeModalProject.longDescription}
              </p>
            </div>

            <div>
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Teknologi yang Digunakan
              </h5>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.tags.map((t) => {
                  const c = TAG_COLORS[t] ?? TAG_COLORS['default'];
                  return (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full font-semibold"
                      style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white text-xs font-semibold border border-white/10 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
              <a
                href={activeModalProject.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="shimmer-btn inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2c67ed] hover:bg-blue-600 text-white text-xs font-bold shadow-[0_0_15px_rgba(44,103,237,0.5)] transition-all"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
