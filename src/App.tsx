import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AiDiagnostic } from './components/AiDiagnostic';
import { RoiCalculator } from './components/RoiCalculator';
import { LivePrototype } from './components/LivePrototype';
import { ScopePlanner } from './components/ScopePlanner';
import { CaseStudies } from './components/CaseStudies';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { ServiceItem } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState('');
  const [plannerPresetServiceId, setPlannerPresetServiceId] = useState<string | undefined>(undefined);

  const handleOpenContactWithTopic = (topic: string) => {
    setContactTopic(topic);
    // Smooth scroll down to contact section
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsContactModalOpen(true);
    }
  };

  const handleOpenPlannerWithService = (serviceId: string) => {
    setPlannerPresetServiceId(serviceId);
    const el = document.getElementById('scope-planner');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#091710] text-[#e2f1e8] font-sans forest-bg-mesh">
      
      {/* Navbar */}
      <Navbar
        onOpenContact={() => handleOpenContactWithTopic('General C-Suite Inquiry')}
        activeSection="home"
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenContact={() => handleOpenContactWithTopic('Hero C-Suite Inquiry')}
        />

        {/* Gemini Powered AI Readiness Diagnostic */}
        <AiDiagnostic
          onOpenContactWithTopic={handleOpenContactWithTopic}
        />

        {/* Financial & Carbon ROI Impact Calculator */}
        <RoiCalculator
          onOpenContactWithTopic={handleOpenContactWithTopic}
        />

        {/* Live Suite Prototype */}
        <LivePrototype />

        {/* Custom Advisory Engagement Planner */}
        <ScopePlanner
          initialSelectedId={plannerPresetServiceId}
          onOpenContactWithScope={(scopeSummary) => handleOpenContactWithTopic(scopeSummary)}
        />

        {/* Track Record & Case Studies */}
        <CaseStudies />

        {/* About Koh I-Lyn */}
        <AboutSection
          onOpenContact={() => handleOpenContactWithTopic('About Koh I-Lyn Discussion')}
        />

        {/* Direct Contact & Inquiries */}
        <ContactSection
          initialTopic={contactTopic}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectInPlanner={(serviceId) => handleOpenPlannerWithService(serviceId)}
          onBookCall={() => handleOpenContactWithTopic(`Inquiry regarding ${selectedService.title}`)}
        />
      )}

      {/* Contact Modal if triggered via popup */}
      {isContactModalOpen && (
        <ContactSection
          initialTopic={contactTopic}
          isOpenAsModal={true}
          onCloseModal={() => setIsContactModalOpen(false)}
        />
      )}

    </div>
  );
}
