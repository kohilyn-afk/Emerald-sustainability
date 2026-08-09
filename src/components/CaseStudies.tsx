import React from 'react';
import { Award, CheckCircle2, TrendingUp, Building2, ExternalLink } from 'lucide-react';
import { CASE_STUDIES } from '../data/siteData';

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-20 border-b border-[#1f4230] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#143122] border border-[#e5b958]/35 text-[#f3d38c] text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-[#f3d38c]" />
            <span>Proven Malaysian Enterprise Outcomes</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#f2faf5]">
            Track Record of Strategic Value Realization
          </h2>
          <p className="text-sm sm:text-base text-[#b2c5b9] leading-relaxed">
            Delivering measurable financial performance and regulatory sign-offs for leading Malaysian public listed companies and conglomerates.
          </p>
        </div>

        {/* Grid of Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              className="forest-card rounded-2xl p-7 border border-[#e5b958]/30 flex flex-col justify-between hover:border-[#e5b958]/60 transition-all space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#f3d38c] bg-[#e5b958]/15 px-2.5 py-1 rounded border border-[#e5b958]/35">
                    {cs.industry}
                  </span>
                  <Building2 className="w-4 h-4 text-[#a8bba0]" />
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-[#f2faf5]">
                    {cs.client}
                  </h3>
                  <div className="text-xs font-bold text-[#90d0a7] mt-1">
                    {cs.impact}
                  </div>
                </div>

                <p className="text-xs text-[#b2c5b9] leading-relaxed">
                  {cs.description}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="pt-4 border-t border-[#1f4230] grid grid-cols-3 gap-2">
                {cs.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#0e2117] border border-[#224835] text-center">
                    <div className="text-[10px] text-[#a8bba0] font-mono">{m.label}</div>
                    <div className="text-sm font-extrabold font-grotesk text-[#f3d38c] mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
