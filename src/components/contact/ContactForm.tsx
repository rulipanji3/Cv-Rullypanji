import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

// Floating Label Input
const FloatingInput: React.FC<{
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}> = ({ label, name, type = 'text', value, onChange, placeholder, required }) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none font-medium ${
          isActive
            ? 'top-2 text-[10px] text-[#2c67ed] uppercase tracking-wider'
            : 'top-1/2 -translate-y-1/2 text-sm text-slate-500'
        }`}
      >
        {label}{required && <span className="text-[#2c67ed] ml-0.5">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={isActive ? placeholder : ''}
        required={required}
        className={`w-full px-4 pt-6 pb-2.5 rounded-xl bg-white/[0.04] text-white text-sm outline-none transition-all duration-200 border ${
          focused
            ? 'border-[#2c67ed] shadow-[0_0_0_3px_rgba(44,103,237,0.2),0_0_15px_rgba(44,103,237,0.15)]'
            : 'border-white/10 hover:border-white/20'
        }`}
        style={{ caretColor: '#38bdf8' }}
      />
    </div>
  );
};

// Floating Label Textarea
const FloatingTextarea: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}> = ({ label, name, value, onChange, placeholder, required, rows = 4 }) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none font-medium z-10 ${
          isActive
            ? 'top-2 text-[10px] text-[#2c67ed] uppercase tracking-wider'
            : 'top-4 text-sm text-slate-500'
        }`}
      >
        {label}{required && <span className="text-[#2c67ed] ml-0.5">*</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={isActive ? placeholder : ''}
        required={required}
        rows={rows}
        className={`w-full px-4 pt-7 pb-3 rounded-xl bg-white/[0.04] text-white text-sm outline-none transition-all duration-200 resize-none border ${
          focused
            ? 'border-[#2c67ed] shadow-[0_0_0_3px_rgba(44,103,237,0.2),0_0_15px_rgba(44,103,237,0.15)]'
            : 'border-white/10 hover:border-white/20'
        }`}
        style={{ caretColor: '#38bdf8' }}
      />
    </div>
  );
};

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Mohon lengkapi Nama, Email, dan Pesan Anda.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Cosmic confetti celebration
      const colors = ['#2c67ed', '#38bdf8', '#818cf8', '#ffffff', '#c084fc'];
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.65 }, colors });
      setTimeout(() => {
        confetti({ particleCount: 40, spread: 50, origin: { y: 0.65, x: 0.3 }, colors });
        confetti({ particleCount: 40, spread: 50, origin: { y: 0.65, x: 0.7 }, colors });
      }, 250);

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#081026]/85 border border-[#2c67ed]/30 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-0 right-0 w-52 h-52 bg-[#2c67ed]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-indigo-600/8 rounded-full blur-2xl pointer-events-none" />

      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 flex items-center gap-2 relative">
        <Send className="w-5 h-5 text-[#2c67ed]" />
        Kirim Transmisi Pesan
      </h3>
      <p className="text-xs sm:text-sm text-slate-400 mb-6 relative">
        Ada ide proyek, penawaran kerja sama, atau ingin berkolaborasi? Isi formulir di bawah ini.
      </p>

      {/* Success Message */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-start gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Transmisi Berhasil Terkirim! 🚀</p>
              <p className="text-emerald-400/80 mt-0.5 text-xs">Terima kasih atas pesan Anda. Saya akan segera menghubungi balik.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
      <AnimatePresence>
        {errorMsg && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-center gap-2"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{errorMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-4 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FloatingInput
            label="Nama Lengkap"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Contoh: Budi Pratama"
            required
          />
          <FloatingInput
            label="Alamat Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="nama@domain.com"
            required
          />
        </div>

        <FloatingInput
          label="Subjek Pesan"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Tawaran Project / Kolaborasi / Diskusi"
        />

        <FloatingTextarea
          label="Isi Pesan"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tuliskan detail pesan atau pertanyaan Anda di sini..."
          required
          rows={4}
        />

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.01, y: isSubmitting ? 0 : -2 }}
          whileTap={{ scale: 0.99 }}
          className="shimmer-btn w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#2c67ed] to-blue-500 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-60 shadow-[0_0_25px_rgba(44,103,237,0.55)] hover:shadow-[0_0_40px_rgba(44,103,237,0.85)] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-cyan-200" />
              <span>Mentransmisikan Pesan...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Luncurkan Pesan</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
};
