import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle, AlertTriangle, Cpu, Loader2, Building2, Globe2, BarChart2, Calendar, FileCheck2, Zap } from 'lucide-react';
import { DiagnosticInput, DiagnosticResult } from '../types';
import { INDUSTRIES, REGIONS } from '../data/siteData';

interface AiDiagnosticProps {
  onOpenContactWithTopic: (topic: string) => void;
}

export const AiDiagnostic: React.FC<AiDiagnosticProps> = ({ onOpenContactWithTopic }) => {
  const [formData, setFormData] = useState<DiagnosticInput>({
    companyName: '',
    industry: INDUSTRIES[0],
    employeeCount: '500 - 2,500 Employees',
    annualRevenue: 'RM 100M - RM 500M',
    region: REGIONS[0],
    primaryGoal: 'Ensure 100% compliance with Bursa Malaysia Sustainability Guidelines and optimize TNB utility costs.',
    currentChallenges: 'Fragmented Scope 3 supplier data, manual spreadsheet closes, and disconnected utility tracking.'
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  const handleRunDiagnostic = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/diagnostic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const json = await res.json();
      if (json.data) {
        setResult(json.data);
      }
    } catch (err) {
      console.error('Diagnostic error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="diagnostic" className="py-20 border-b border-[#1f4230] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#143122] border border-[#e5b958]/35 text-[#f3d38c] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#f3d38c]" />
            <span>Powered by Gemini AI & Koh I-Lyn Advisory Framework</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#f2faf5]">
            AI ESG & Financial Readiness Diagnostic
          </h2>
          <p className="text-sm sm:text-base text-[#b2c5b9] leading-relaxed">
            Fill in your organization&apos;s profile to generate an instant, verifiable ESG readiness scorecard, regulatory compliance gap analysis, and 90-day advisory roadmap tailored for Malaysian C-suites.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Input Panel */}
          <div className="lg:col-span-5 forest-card rounded-2xl p-6 sm:p-8 border border-[#90d0a7]/25 space-y-5">
            <div className="flex items-center gap-3 border-b border-[#1f4230] pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#1d4330] border border-[#90d0a7]/40 flex items-center justify-center text-[#90d0a7]">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[#f2faf5]">Enterprise Profile</h3>
                <p className="text-xs text-[#a8bba0]">Bursa & MFRS Readiness Baseline</p>
              </div>
            </div>

            <form onSubmit={handleRunDiagnostic} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#e2f1e8] mb-1">Company / Group Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Industrial Holdings Berhad"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e2117] border border-[#224835] text-xs text-[#f2faf5] focus:outline-none focus:border-[#e5b958] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#e2f1e8] mb-1">Industry Sector</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e2117] border border-[#224835] text-xs text-[#f2faf5] focus:outline-none focus:border-[#e5b958]"
                  >
                    {INDUSTRIES.map((ind) => (
                      <option key={ind} value={ind} className="bg-[#091710]">{ind}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#e2f1e8] mb-1">Operating Region</label>
                  <select
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e2117] border border-[#224835] text-xs text-[#f2faf5] focus:outline-none focus:border-[#e5b958]"
                  >
                    {REGIONS.map((reg) => (
                      <option key={reg} value={reg} className="bg-[#091710]">{reg}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#e2f1e8] mb-1">Workforce Headcount</label>
                  <select
                    value={formData.employeeCount}
                    onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e2117] border border-[#224835] text-xs text-[#f2faf5] focus:outline-none focus:border-[#e5b958]"
                  >
                    <option value="50 - 250 Employees">50 - 250 Employees</option>
                    <option value="250 - 500 Employees">250 - 500 Employees</option>
                    <option value="500 - 2,500 Employees">500 - 2,500 Employees</option>
                    <option value="2,500+ Enterprise">2,500+ Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#e2f1e8] mb-1">Annual Revenue Scale</label>
                  <select
                    value={formData.annualRevenue}
                    onChange={(e) => setFormData({ ...formData, annualRevenue: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e2117] border border-[#224835] text-xs text-[#f2faf5] focus:outline-none focus:border-[#e5b958]"
                  >
                    <option value="RM 10M - RM 50M">RM 10M - RM 50M</option>
                    <option value="RM 50M - RM 100M">RM 50M - RM 100M</option>
                    <option value="RM 100M - RM 500M">RM 100M - RM 500M</option>
                    <option value="RM 500M+ Enterprise">RM 500M+ Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#e2f1e8] mb-1">Primary Mandate / Goal</label>
                <textarea
                  rows={2}
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  placeholder="e.g. CSRD compliance, carbon accounting automation, securing green loans..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0e2117] border border-[#224835] text-xs text-[#f2faf5] focus:outline-none focus:border-[#e5b958]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#e2f1e8] mb-1">Key Operational Challenges</label>
                <textarea
                  rows={2}
                  value={formData.currentChallenges}
                  onChange={(e) => setFormData({ ...formData, currentChallenges: e.target.value })}
                  placeholder="e.g. Scope 3 supply chain data gaps, manual spreadsheet closes..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0e2117] border border-[#224835] text-xs text-[#f2faf5] focus:outline-none focus:border-[#e5b958]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl text-xs font-bold gold-gradient-btn transition-all flex items-center justify-center gap-2 font-mono uppercase tracking-wider gold-glow"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#08150e]" />
                    <span>Generating AI Diagnostic...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 text-[#08150e]" />
                    <span>Generate AI Readiness Scorecard</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Diagnostic Results Panel */}
          <div className="lg:col-span-7 space-y-6">
            {!result && !loading && (
              <div className="forest-card rounded-2xl p-10 border border-[#90d0a7]/25 text-center space-y-4 flex flex-col items-center justify-center min-h-[460px]">
                <div className="w-16 h-16 rounded-2xl bg-[#143122] border border-[#e5b958]/35 flex items-center justify-center text-[#f3d38c]">
                  <Sparkles className="w-8 h-8 text-[#f3d38c]" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#f2faf5]">
                  Awaiting Corporate Input
                </h3>
                <p className="text-xs text-[#b2c5b9] max-w-md mx-auto leading-relaxed">
                  Enter your company profile on the left and trigger the AI diagnostic to view your real-time Bursa ESG gap analysis, readiness score, and 90-day action plan.
                </p>
              </div>
            )}

            {loading && (
              <div className="forest-card rounded-2xl p-12 border border-[#90d0a7]/25 text-center space-y-6 flex flex-col items-center justify-center min-h-[460px]">
                <div className="w-16 h-16 rounded-2xl bg-[#1d4330] border border-[#90d0a7]/50 flex items-center justify-center text-[#90d0a7] animate-pulse">
                  <Cpu className="w-8 h-8 text-[#90d0a7]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-xl font-bold text-[#f2faf5]">
                    Synthesizing C-Suite Analytics Diagnostic...
                  </h3>
                  <p className="text-xs text-[#b2c5b9]">
                    Cross-referencing profile against Bursa Malaysia Sustainability Guidelines and MFRS financial standards...
                  </p>
                </div>
                <div className="w-full max-w-xs bg-[#0e2117] h-2 rounded-full overflow-hidden border border-[#224835]">
                  <div className="bg-gradient-to-r from-[#90d0a7] to-[#f3d38c] h-full w-3/4 animate-pulse" />
                </div>
              </div>
            )}

            {result && !loading && (
              <div className="forest-card rounded-2xl p-6 sm:p-8 border border-[#e5b958]/35 space-y-6">
                
                {/* Result Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1f4230] pb-5">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#f3d38c] bg-[#e5b958]/15 px-2.5 py-1 rounded border border-[#e5b958]/35">
                      {result.tier}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-[#f2faf5] mt-2">
                      Analytics Diagnostic Results
                    </h3>
                    <p className="text-xs text-[#b2c5b9]">
                      Targeting {formData.companyName || 'Enterprise Organization'}
                    </p>
                  </div>

                  <div className="text-right bg-[#0e2117] p-3.5 rounded-xl border border-[#224835]">
                    <div className="text-[10px] font-mono text-[#a8bba0]">Overall Readiness</div>
                    <div className="text-3xl font-extrabold font-grotesk text-[#f3d38c]">
                      {result.scores.overall}<span className="text-xs font-normal text-[#b2c5b9]">/100</span>
                    </div>
                  </div>
                </div>

                {/* Scorecards Breakdown */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#0e2117] border border-[#224835]">
                    <div className="text-[10px] font-mono text-[#a8bba0]">Sustainability</div>
                    <div className="text-xl font-bold font-grotesk text-[#90d0a7] mt-0.5">
                      {result.scores.sustainability}%
                    </div>
                    <div className="w-full bg-[#1f4230] h-1.5 rounded-full mt-2">
                      <div className="bg-[#90d0a7] h-full rounded-full" style={{ width: `${result.scores.sustainability}%` }} />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0e2117] border border-[#224835]">
                    <div className="text-[10px] font-mono text-[#a8bba0]">MFRS Accounting</div>
                    <div className="text-xl font-bold font-grotesk text-[#f3d38c] mt-0.5">
                      {result.scores.accounting}%
                    </div>
                    <div className="w-full bg-[#1f4230] h-1.5 rounded-full mt-2">
                      <div className="bg-[#f3d38c] h-full rounded-full" style={{ width: `${result.scores.accounting}%` }} />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0e2117] border border-[#224835]">
                    <div className="text-[10px] font-mono text-[#a8bba0]">Data Analytics</div>
                    <div className="text-xl font-bold font-grotesk text-[#a8dadc] mt-0.5">
                      {result.scores.analytics}%
                    </div>
                    <div className="w-full bg-[#1f4230] h-1.5 rounded-full mt-2">
                      <div className="bg-[#a8dadc] h-full rounded-full" style={{ width: `${result.scores.analytics}%` }} />
                    </div>
                  </div>
                </div>

                {/* Executive Summary */}
                <div className="p-4 rounded-xl bg-[#143122] border border-[#90d0a7]/30 space-y-1">
                  <div className="text-xs font-bold text-[#90d0a7] font-mono uppercase tracking-wider">
                    Executive Strategic Summary:
                  </div>
                  <p className="text-xs text-[#e2f1e8] leading-relaxed">
                    {result.executiveSummary}
                  </p>
                </div>

                {/* Key Gaps List */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-[#f2faf5] font-mono uppercase tracking-wider flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#f3d38c]" />
                    <span>Identified Compliance Vulnerabilities & Gaps:</span>
                  </div>
                  <div className="space-y-2">
                    {result.gaps.map((gap, i) => (
                      <div key={i} className="p-3 rounded-lg bg-[#0e2117] border border-[#224835] text-xs text-[#b2c5b9] flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f3d38c] shrink-0 mt-1.5" />
                        <span>{gap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 90-Day Tailored Roadmap */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold text-[#f2faf5] font-mono uppercase tracking-wider flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#90d0a7]" />
                    <span>90-Day Action Roadmap:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {result.roadmap.map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-[#0e2117] border border-[#224835] space-y-1.5">
                        <div className="text-[10px] font-mono text-[#90d0a7] font-bold">{item.phase}</div>
                        <div className="text-xs font-bold text-[#f2faf5]">{item.title}</div>
                        <div className="text-[11px] text-[#b2c5b9] leading-tight">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projected Value Capture */}
                <div className="p-4 rounded-xl bg-[#1b3d2b] border border-[#e5b958]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-xs text-[#b2c5b9]">Projected Annual Value Capture</div>
                    <div className="text-xl font-extrabold font-grotesk text-[#f3d38c]">{result.projectedSavings}</div>
                  </div>
                  <button
                    onClick={() => onOpenContactWithTopic(`Discussion on AI Diagnostic Report for ${formData.companyName}`)}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold gold-gradient-btn transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Discuss Report with Koh I-Lyn</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
