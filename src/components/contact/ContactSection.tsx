import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ContactForm } from './ContactForm';
import { SocialLinks } from './SocialLinks';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <SectionHeader
        badge="Hubungi & Berkolaborasi"
        title="Mari Membangun Sesuatu yang"
        highlightedTitle="Luar Biasa Bersama"
        subtitle="Punya pertanyaan, tawaran proyek, atau peluang magang/karir? Jangan ragu untuk menghubungi saya melalui formulir ataupun kanal media sosial di bawah."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Right Column: Social Links & Direct Contacts */}
        <div className="lg:col-span-5">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};
