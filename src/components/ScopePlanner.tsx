import React, { useState } from 'react';
import { Layers, CheckCircle2, Circle, Clock, DollarSign, Mail, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { ADVISORY_MODULES } from '../data/siteData';

interface ScopePlannerProps {
  initialSelectedId?: string;
  onOpenContactWithScope: (scopeSummary: string) => void;
}

export const ScopePlanner: React.FC<ScopePlannerProps> = ({ initialSelectedId, onOpenContactWithScope }) => {
  const [selectedModuleIds, setSelectedModuleIds] = useState<string[]>(
    initialSelectedId ? [initialSelectedId] : ['sustainability-esg-disclosure', 'accounting-mfrs-esg-controls', 'analytics-powerbi-suite']
  );

  const toggleModule = (id: string) => {
    if (selectedModuleIds.includes(id)) {
      setSelectedModuleIds(selectedModuleIds.filter((m) => m !== id));
    } else {
      setSelectedModuleIds([...selectedModuleIds, id]);
    }
  };

  const selectedModules = ADVISORY_MODULES.filter((m) => selectedModuleIds.includes(m.id));
  const totalPriceRM = selectedModules.reduce((acc, m) => acc + m.basePrice, 0);
  const totalWeeks = selectedModules.reduce((acc, m) => acc + m.estimatedWeeks, 0);

  const buildScopeSummaryText = () => {
    const list = selectedModules.map((m) => `• ${m.name} (RM ${m.basePrice.toLocaleString()}, ~${m.estimatedWeeks} wks)`).join('\n');
    return `Selected Advisory Scope:\n${list}\n\nTotal Estimated Investment: RM ${totalPriceRM.toLocaleString()}\nEstimated Duration: ~${totalWeeks} Weeks`;
  };

  const handleEmailScope = () => {
    const subject = encodeURIComponent('Advisory Scope Proposal Request - Koh I-Lyn Advisory');
    const body = encodeURIComponent(
      `Hello Koh I-Lyn,\n\nI would like to request an advisory engagement proposal for the following selected scope modules:\n\n${buildScopeSummaryText()}\n\nPlease reach out to me for an initial confidential discussion.`
    );
    window.location.href = `mailto:connect@kohilyn.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="scope-planner" className="py-20 border-b border-[#1f4230] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#143122] border border-[#e5b958]/35 text-[#f3d38c] text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-[#f3d38c]" />
            <span>Tailored C-Suite Scope Builder</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#f2faf5]">
            Custom Advisory Engagement Planner
          </h2>
          <p className="text-sm sm:text-base text-[#b2c5b9] leading-relaxed">
            Select the exact advisory modules required for your organization to generate an immediate scope proposal and investment breakdown in Ringgit Malaysia (RM).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Module Checklist Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-[#f2faf5] border-b border-[#1f4230] pb-3">
              <span>AVAILABLE ADVISORY MODULES ({ADVISORY_MODULES.length})</span>
              <span className="text-[#a8bba0]">Click to toggle modules</span>
            </div>

            <div className="space-y-3">
              {ADVISORY_MODULES.map((module) => {
                const isSelected = selectedModuleIds.includes(module.id);
                return (
                  <div
                    key={module.id}
                    onClick={() => toggleModule(module.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                      isSelected
                        ? 'bg-[#143122] border-[#e5b958] shadow-lg'
                        : 'bg-[#0e2117] border-[#224835] hover:border-[#90d0a7]/40 opacity-80'
                    }`}
                  >
                    <div className="mt-1 shrink-0">
                      {isSelected ? (
                        <CheckCircle2 className="w-5 h-5 text-[#f3d38c]" />
                      ) : (
                        <Circle className="w-5 h-5 text-[#a8bba0]" />
                      )}
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-bold text-[#f2faf5]">{module.name}</h4>
                        <span className="text-xs font-mono font-bold text-[#f3d38c] shrink-0">
                          RM {module.basePrice.toLocaleString()}
                        </span>
                      </div>

                      <p className="text-xs text-[#b2c5b9] leading-relaxed">{module.description}</p>

                      <div className="flex items-center gap-3 pt-1 text-[10px] font-mono text-[#90d0a7]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#90d0a7]" />
                          <span>~{module.estimatedWeeks} Weeks</span>
                        </span>
                        <span className="uppercase text-[#a8bba0]">| Pillar: {module.pillar}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Proposal Summary Box */}
          <div className="lg:col-span-5 forest-card rounded-2xl p-6 sm:p-8 border border-[#e5b958]/35 sticky top-24 space-y-6">
            <div className="border-b border-[#1f4230] pb-4">
              <span className="text-[10px] font-mono uppercase font-bold text-[#f3d38c] bg-[#e5b958]/15 px-2.5 py-1 rounded border border-[#e5b958]/35">
                Direct Advisory Proposal Breakdown
              </span>
              <h3 className="font-display text-xl font-bold text-[#f2faf5] mt-2">
                Scope Summary
              </h3>
            </div>

            {/* Selected items list */}
            <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
              {selectedModules.length === 0 ? (
                <p className="text-xs text-[#b2c5b9] italic">No modules selected. Select modules from the left list.</p>
              ) : (
                selectedModules.map((m) => (
                  <div key={m.id} className="p-2.5 rounded-lg bg-[#0e2117] border border-[#224835] flex items-center justify-between text-xs">
                    <span className="text-[#e2f1e8] font-medium truncate max-w-[200px]">{m.name}</span>
                    <span className="font-mono text-[#f3d38c]">RM {m.basePrice.toLocaleString()}</span>
                  </div>
                ))
              )}
            </div>

            {/* Total Calculations */}
            <div className="p-4 rounded-xl bg-[#143122] border border-[#90d0a7]/30 space-y-3">
              <div className="flex items-center justify-between text-xs text-[#b2c5b9]">
                <span>Selected Scope Modules:</span>
                <span className="font-mono text-[#f2faf5] font-bold">{selectedModules.length} Modules</span>
              </div>

              <div className="flex items-center justify-between text-xs text-[#b2c5b9]">
                <span>Estimated Timeline:</span>
                <span className="font-mono text-[#90d0a7] font-bold">~{totalWeeks} Weeks</span>
              </div>

              <div className="pt-2 border-t border-[#1f4230] flex items-center justify-between">
                <span className="text-xs font-bold text-[#f2faf5] uppercase font-mono">Estimated Investment:</span>
                <span className="text-2xl font-extrabold font-grotesk text-[#f3d38c]">
                  RM {totalPriceRM.toLocaleString()}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-[#b2c5b9] leading-tight">
              • Includes direct CA(M) & Oxford-certified specialist oversight, analytics verification trails, and custom pipeline implementation.
            </p>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={() => onOpenContactWithScope(buildScopeSummaryText())}
                disabled={selectedModules.length === 0}
                className="w-full py-3.5 rounded-xl text-xs font-bold gold-gradient-btn transition-all flex items-center justify-center gap-2 gold-glow disabled:opacity-50"
              >
                <span>Book Consultation for Selected Scope</span>
                <ArrowRight className="w-4 h-4 text-[#08150e]" />
              </button>

              <button
                onClick={handleEmailScope}
                disabled={selectedModules.length === 0}
                className="w-full py-3 rounded-xl text-xs font-bold text-[#f2faf5] bg-[#143122] hover:bg-[#1b402d] border border-[#90d0a7]/35 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Mail className="w-4 h-4 text-[#90d0a7]" />
                <span>Email Proposal Request to connect@kohilyn.com</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
