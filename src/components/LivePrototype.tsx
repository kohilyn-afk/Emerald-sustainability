import React, { useState } from 'react';
import { Database, Activity, CheckCircle2, RefreshCw, FileText, BarChart3, Lock, Cpu, Server, ShieldCheck } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { PROTOTYPE_PLANT_DATA } from '../data/siteData';

export const LivePrototype: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pnl' | 'utility' | 'connectors'>('pnl');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1200);
  };

  return (
    <section id="live-prototype" className="py-20 border-b border-[#1f4230] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#143122] border border-[#e5b958]/35 text-[#f3d38c] text-xs font-semibold">
            <Activity className="w-3.5 h-3.5 text-[#f3d38c]" />
            <span>Interactive C-Suite Suite Demo</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#f2faf5]">
            Executive Analytics & Bursa ESG Suite
          </h2>
          <p className="text-sm sm:text-base text-[#b2c5b9] leading-relaxed">
            Real-time data pipelines connecting TNB utility OCR, SAP/SQL Accounting ERP ledgers, and Snowflake with Bursa Malaysia ESG reporting endpoints. Test our live prototype interface below.
          </p>
        </div>

        {/* Prototype Console Frame */}
        <div className="forest-card rounded-2xl border border-[#e5b958]/35 overflow-hidden shadow-2xl">
          
          {/* Top Bar Header */}
          <div className="bg-[#0e2117] px-6 py-4 border-b border-[#1f4230] flex flex-wrap items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#f87171]" />
                <span className="w-3 h-3 rounded-full bg-[#fbbf24]" />
                <span className="w-3 h-3 rounded-full bg-[#34d399]" />
              </div>
              <span className="text-xs font-mono font-bold text-[#f3d38c] pl-2 border-l border-[#1f4230]">
                kohilyn-bursa-analytics-v4.2.0 • Live Malaysian Enterprise Pipeline
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-[#143122] border border-[#90d0a7]/35 text-[11px] font-mono text-[#e2f1e8]">
                <span className="w-2 h-2 rounded-full bg-[#90d0a7] animate-ping" />
                <span>Bursa ESG API Connected</span>
              </div>

              <button
                onClick={handleRefreshData}
                disabled={isRefreshing}
                className="p-1.5 rounded-lg bg-[#143122] hover:bg-[#1f4230] text-[#b2c5b9] hover:text-[#f2faf5] transition-all border border-[#224835]"
                title="Refresh Pipeline Feed"
              >
                <RefreshCw className={`w-4 h-4 text-[#90d0a7] ${isRefreshing ? 'animate-spin' : ''}`} />
              </button>
            </div>

          </div>

          {/* Console Navigation Tabs */}
          <div className="bg-[#11261b] px-6 py-2 border-b border-[#1f4230] flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('pnl')}
              className={`px-4 py-2 rounded-lg text-xs font-bold font-mono transition-all flex items-center gap-2 ${
                activeTab === 'pnl'
                  ? 'bg-[#1e4632] text-[#f3d38c] border border-[#e5b958]/40'
                  : 'text-[#b2c5b9] hover:text-[#f2faf5]'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5 text-[#f3d38c]" />
              <span>RM P&L vs Carbon Cost</span>
            </button>

            <button
              onClick={() => setActiveTab('connectors')}
              className={`px-4 py-2 rounded-lg text-xs font-bold font-mono transition-all flex items-center gap-2 ${
                activeTab === 'connectors'
                  ? 'bg-[#1e4632] text-[#f3d38c] border border-[#e5b958]/40'
                  : 'text-[#b2c5b9] hover:text-[#f2faf5]'
              }`}
            >
              <Server className="w-3.5 h-3.5 text-[#f3d38c]" />
              <span>ERP & TNB Utility Connectors</span>
            </button>
          </div>

          {/* Console Content Area */}
          <div className="p-6 sm:p-8 space-y-6 bg-[#091710]">
            
            {activeTab === 'pnl' && (
              <div className="space-y-6">
                
                {/* Metric Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#0e2117] border border-[#224835]">
                    <div className="text-[10px] font-mono text-[#a8bba0]">Monthly Plant Revenue</div>
                    <div className="text-lg font-bold font-grotesk text-[#f2faf5] mt-0.5">RM 2.05M</div>
                    <div className="text-[10px] text-[#90d0a7] mt-0.5">+8.5% YoY</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0e2117] border border-[#224835]">
                    <div className="text-[10px] font-mono text-[#a8bba0]">TNB Utility Expense</div>
                    <div className="text-lg font-bold font-grotesk text-[#f3d38c] mt-0.5">RM 154k</div>
                    <div className="text-[10px] text-[#f3d38c] mt-0.5">-14.8% via Optimization</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0e2117] border border-[#224835]">
                    <div className="text-[10px] font-mono text-[#a8bba0]">CBAM Carbon Liability</div>
                    <div className="text-lg font-bold font-grotesk text-[#a8dadc] mt-0.5">RM 12k</div>
                    <div className="text-[10px] text-[#a8dadc] mt-0.5">Mitigated Baseline</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0e2117] border border-[#224835]">
                    <div className="text-[10px] font-mono text-[#a8bba0]">Bursa Data Verification</div>
                    <div className="text-lg font-bold font-grotesk text-[#90d0a7] mt-0.5">100% Passed</div>
                    <div className="text-[10px] text-[#90d0a7] mt-0.5">MFRS & ISSB Compliant</div>
                  </div>
                </div>

                {/* Main Recharts Bar Chart */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-[#f2faf5] font-mono uppercase tracking-wider">
                    Malaysian Plant P&L Revenue vs TNB Utility & Carbon Liability (RM Thousands)
                  </div>

                  <div className="h-64 w-full bg-[#0e2117] rounded-xl p-4 border border-[#224835]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={PROTOTYPE_PLANT_DATA} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#224835" />
                        <XAxis dataKey="month" stroke="#a8bba0" tick={{ fontSize: 11 }} />
                        <YAxis stroke="#a8bba0" tick={{ fontSize: 11 }} />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#143122', borderColor: '#e5b958', borderRadius: '8px', color: '#f2faf5', fontSize: '12px' }}
                          formatter={(val: any) => [`RM ${val}k`, '']}
                        />
                        <Legend wrapperStyle={{ fontSize: '11px', color: '#b2c5b9' }} />
                        <Bar dataKey="revenueRM" fill="#90d0a7" name="Plant Revenue" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="utilityRM" fill="#f3d38c" name="TNB Utility Spend" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="carbonTaxRM" fill="#1b402d" name="Carbon Liability" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

              </div>
            )}

            {activeTab === 'connectors' && (
              <div className="space-y-4">
                <div className="text-xs font-bold text-[#f2faf5] font-mono uppercase tracking-wider">
                  Active Enterprise Ledger & Pipeline Connectors:
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <div className="p-4 rounded-xl bg-[#0e2117] border border-[#224835] space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Server className="w-4 h-4 text-[#90d0a7]" />
                        <span className="text-xs font-bold text-[#f2faf5]">SAP / SQL Accounting / MFRS Ledger</span>
                      </div>
                      <span className="text-[10px] font-mono bg-[#90d0a7]/20 text-[#90d0a7] px-2 py-0.5 rounded border border-[#90d0a7]/35">
                        ACTIVE
                      </span>
                    </div>
                    <p className="text-[11px] text-[#b2c5b9]">
                      Pulls general ledger journal entries automatically, mapping utility expenses and carbon liabilities to MFRS accounts.
                    </p>
                    <div className="text-[10px] font-mono text-[#90d0a7]">
                      Sync Frequency: Every 15 Minutes • Uptime 99.9%
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0e2117] border border-[#224835] space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-[#f3d38c]" />
                        <span className="text-xs font-bold text-[#f2faf5]">TNB Utility Invoice OCR Engine</span>
                      </div>
                      <span className="text-[10px] font-mono bg-[#e5b958]/20 text-[#f3d38c] px-2 py-0.5 rounded border border-[#e5b958]/35">
                        PROCESSING
                      </span>
                    </div>
                    <p className="text-[11px] text-[#b2c5b9]">
                      Extracts kWh consumption, peak demand surcharges, and tariff category directly from PDF utility invoices.
                    </p>
                    <div className="text-[10px] font-mono text-[#f3d38c]">
                      Processed Invoices: 142 Bills • Error Rate 0.00%
                    </div>
                  </div>

                </div>
              </div>
            )}

          </div>

          {/* Footer Bar */}
          <div className="bg-[#0e2117] px-6 py-3 border-t border-[#1f4230] flex items-center justify-between text-[11px] text-[#b2c5b9] font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#f3d38c]" />
              <span>Aligned with Bursa Malaysia ESG Guidelines & ISSB Standards</span>
            </div>
            <div className="hidden sm:block text-[#90d0a7]">
              Direct Advisory Execution by Koh I-Lyn
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
