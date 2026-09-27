import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Award, Cpu } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectsTab } from './ProjectsTab';
import { CertificatesTab } from './CertificatesTab';
import { TechStackTab } from './TechStackTab';

type PortfolioTabKey = 'projects' | 'certificates' | 'techstack';

interface TabDefinition {
  key: PortfolioTabKey;
  label: string;
  count?: number;
  icon: React.ReactNode;
}

const TABS: TabDefinition[] = [
  { key: 'projects', label: 'Projects', icon: <FolderGit2 className="w-4 h-4" /> },
  { key: 'certificates', label: 'Certificates', icon: <Award className="w-4 h-4" /> },
  { key: 'techstack', label: 'Tech Stack', icon: <Cpu className="w-4 h-4" /> },
];

export const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PortfolioTabKey>('projects');

  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      
      {/* Section Header */}
      <SectionHeader
        badge="Galeri Karya & Kompetensi"
        title="Jelajahi Ekosistem"
        highlightedTitle="Portfolio Saya"
        subtitle="Eksplorasi karya aplikasi nyata, kredensial sertifikasi resmi, serta persenjataan teknologi yang saya gunakan sehari-hari."
      />

      {/* Main Tab Bar with Cosmic Glow */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center p-1.5 rounded-full bg-[#081026]/90 border border-[#2c67ed]/40 backdrop-blur-2xl shadow-[0_0_25px_rgba(44,103,237,0.3)]">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-colors cursor-pointer select-none ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePortfolioTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2c67ed] to-blue-600 shadow-[0_0_20px_rgba(44,103,237,0.7)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab.icon}
                  <span>{tab.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {activeTab === 'projects' && <ProjectsTab />}
          {activeTab === 'certificates' && <CertificatesTab />}
          {activeTab === 'techstack' && <TechStackTab />}
        </motion.div>
      </AnimatePresence>

    </section>
  );
};
