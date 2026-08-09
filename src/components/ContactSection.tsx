import React, { useState, useEffect } from 'react';
import { Mail, PhoneCall, ShieldCheck, Send, CheckCircle2, Linkedin, Clock, ArrowUpRight, MessageSquare } from 'lucide-react';
import { INDUSTRIES } from '../data/siteData';

interface ContactSectionProps {
  initialTopic?: string;
  initialMessage?: string;
  isOpenAsModal?: boolean;
  onCloseModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialTopic,
  initialMessage,
  isOpenAsModal,
  onCloseModal
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [pillar, setPillar] = useState('Sustainability & Scope 1-3 Disclosures');
  const [message, setMessage] = useState(initialMessage || initialTopic || '');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (initialTopic || initialMessage) {
      setMessage(initialMessage || initialTopic || '');
    }
  }, [initialTopic, initialMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, pillar, message })
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Contact submission error:', err);
    } finally {
      setSending(false);
    }
  };

  const handleDirectEmail = () => {
    const subject = encodeURIComponent(`C-Suite Advisory Inquiry - ${company || name || 'Corporate Client'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPillar: ${pillar}\n\nMessage:\n${message}`);
    window.location.href = `mailto:connect@kohilyn.com?subject=${subject}&body=${body}`;
  };

  const content = (
    <div id="contact" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#143122] border border-[#e5b958]/35 text-[#f3d38c] text-xs font-semibold">
            <Clock className="w-3.5 h-3.5 text-[#f3d38c]" />
            <span>24-Hour Direct Response Guarantee</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#f2faf5]">
            Direct Advisor Access & Confidential Inquiries
          </h2>
          <p className="text-sm sm:text-base text-[#b2c5b9] leading-relaxed">
            Reach out directly to Koh I-Lyn for independent advisory spanning Sustainability & ESG disclosures, MFRS Accounting, and Enterprise Data Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Info Card */}
          <div className="lg:col-span-5 forest-card rounded-2xl p-7 border border-[#e5b958]/35 space-y-6">
            
            <div className="border-b border-[#1f4230] pb-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#90d0a7]">
                Independent Malaysian Advisory Practice
              </span>
              <h3 className="font-display text-xl font-bold text-[#f2faf5] mt-1">
                Direct C-Suite Engagement
              </h3>
            </div>

            <div className="space-y-4">
              
              <a
                href="mailto:connect@kohilyn.com"
                className="p-4 rounded-xl bg-[#0e2117] border border-[#224835] hover:border-[#e5b958]/50 transition-all flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#143122] border border-[#e5b958]/35 flex items-center justify-center text-[#f3d38c]">
                  <Mail className="w-5 h-5 text-[#f3d38c]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#a8bba0]">Direct Email Channel</div>
                  <div className="text-sm font-bold text-[#f2faf5] group-hover:text-[#f3d38c] transition-colors">
                    connect@kohilyn.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/kohilyn"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-[#0e2117] border border-[#224835] hover:border-[#90d0a7]/50 transition-all flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#143122] border border-[#90d0a7]/35 flex items-center justify-center text-[#90d0a7]">
                  <Linkedin className="w-5 h-5 text-[#90d0a7]" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-mono text-[#a8bba0]">LinkedIn Profile</div>
                  <div className="text-sm font-bold text-[#f2faf5] group-hover:text-[#90d0a7] transition-colors flex items-center justify-between">
                    <span>linkedin.com/in/kohilyn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#a8bba0]" />
                  </div>
                </div>
              </a>

              <div className="p-4 rounded-xl bg-[#143122] border border-[#90d0a7]/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#90d0a7] font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#90d0a7]" />
                  <span>Confidentiality & Board Protocols</span>
                </div>
                <p className="text-xs text-[#b2c5b9] leading-relaxed">
                  All discussions, diagnostic scorecards, and board materials are conducted under strict non-disclosure obligations.
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 forest-card rounded-2xl p-7 border border-[#e5b958]/35">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#143122] border border-[#f3d38c] flex items-center justify-center text-[#f3d38c] mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#f3d38c]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#f2faf5]">
                  Inquiry Logged Successfully
                </h3>
                <p className="text-xs text-[#b2c5b9] max-w-md mx-auto leading-relaxed">
                  Thank you for connecting. Koh I-Lyn will review your corporate requirements and respond directly within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold gold-gradient-btn"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#e2f1e8] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tan Sri / Datuk / Director Tan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e2117] border border-[#224835] text-xs text-[#f2faf5] focus:outline-none focus:border-[#e5b958]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#e2f1e8] mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. cfo@company.com.my"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e2117] border border-[#224835] text-xs text-[#f2faf5] focus:outline-none focus:border-[#e5b958]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#e2f1e8] mb-1">Organization / Group</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Holdings Berhad"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e2117] border border-[#224835] text-xs text-[#f2faf5] focus:outline-none focus:border-[#e5b958]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#e2f1e8] mb-1">Advisory Focus Pillar</label>
                    <select
                      value={pillar}
                      onChange={(e) => setPillar(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e2117] border border-[#224835] text-xs text-[#f2faf5] focus:outline-none focus:border-[#e5b958]"
                    >
                      <option value="Sustainability & Scope 1-3 Disclosures" className="bg-[#08150e]">Sustainability & Scope 1-3 Disclosures</option>
                      <option value="MFRS Accounting & Financial Controls" className="bg-[#08150e]">MFRS Accounting & Financial Controls</option>
                      <option value="Enterprise Data Analytics & TNB OCR" className="bg-[#08150e]">Enterprise Data Analytics & TNB OCR</option>
                      <option value="Full Integrated 3-Pillar Retainer" className="bg-[#08150e]">Full Integrated 3-Pillar Retainer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#e2f1e8] mb-1">Inquiry / Project Scope Notes</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your timeline, Bursa Malaysia submission deadlines, or MFRS financial review needs..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e2117] border border-[#224835] text-xs text-[#f2faf5] focus:outline-none focus:border-[#e5b958]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={sending}
                    className="flex-1 py-3.5 rounded-xl text-xs font-bold gold-gradient-btn transition-all flex items-center justify-center gap-2 font-mono uppercase gold-glow"
                  >
                    <Send className="w-4 h-4 text-[#08150e]" />
                    <span>{sending ? 'Transmitting...' : 'Submit Confidential Inquiry'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectEmail}
                    className="py-3.5 px-5 rounded-xl text-xs font-bold text-[#f2faf5] bg-[#143122] hover:bg-[#1b402d] border border-[#90d0a7]/35 transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-[#f3d38c]" />
                    <span>Email Trigger</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );

  if (isOpenAsModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#06120b]/80 backdrop-blur-md overflow-y-auto">
        <div className="w-full max-w-4xl relative">
          <button
            onClick={onCloseModal}
            className="absolute -top-12 right-0 p-2 text-[#a3b18a] hover:text-[#f0fdf4]"
          >
            Close ✕
          </button>
          {content}
        </div>
      </div>
    );
  }

  return content;
};
