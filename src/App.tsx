import { CustomCursor } from './components/effects/CustomCursor';
import { ScrollProgress } from './components/effects/ScrollProgress';
import { StarfieldBackground } from './components/background/StarfieldBackground';
import { FloatingNavbar } from './components/navbar/FloatingNavbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { PortfolioSection } from './components/portfolio/PortfolioSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-[#2c67ed] selection:text-white overflow-x-hidden font-sans">
      {/* Custom Cursor (desktop only) */}
      <CustomCursor />

      {/* Scroll Progress Bar + Circular Badge */}
      <ScrollProgress />

      {/* Interactive Cosmic Background (Stars, Meteors, Ambient Nebulas) */}
      <StarfieldBackground />

      {/* Floating Navbar with Blue Neon Glow */}
      <FloatingNavbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Cosmic Divider */}
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[#2c67ed]/30 to-transparent" />
        </div>

        {/* About Me Section */}
        <AboutSection />

        {/* Cosmic Divider */}
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[#2c67ed]/30 to-transparent" />
        </div>

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* Cosmic Divider */}
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[#2c67ed]/30 to-transparent" />
        </div>

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Cosmic Footer */}
      <Footer />
    </div>
  );
}

export default App;
