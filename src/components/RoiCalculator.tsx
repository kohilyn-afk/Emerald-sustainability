import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, Leaf, Shield, AlertCircle, ArrowRight } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface RoiCalculatorProps {
  onOpenContactWithTopic: (topic: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenContactWithTopic }) => {
  const [targetReduction, setTargetReduction] = useState(30); // %
  const [complianceHours, setComplianceHours] = useState(450); // hours/yr
  const [utilitySpend, setUtilitySpend] = useState(1800000); // RM/yr
  const [cbamRisk, setCbamRisk] = useState<'Low' | 'Medium' | 'High'>('Medium');

  // Mathematical forecast calculations
  const hourlyRateRM = 120; // Avg hourly cost for senior accounting/compliance staff
  const hoursSavedFactor = 0.65; // 65% reduction in prep hours
  const annualHoursSaved = Math.round(complianceHours * hoursSavedFactor);
  const annualComplianceSavingsRM = annualHoursSaved * hourlyRateRM;

  // Utility savings: 12% - 22% energy efficiency optimization
  const energyEfficiencyFactor = (targetReduction / 100) * 0.45;
  const annualEnergySavingsRM = Math.round(utilitySpend * energyEfficiencyFactor);

  // Carbon liability mitigation
  const cbamFactorMap = { Low: 20000, Medium: 65000, High: 150000 };
  const annualTaxMitigationRM = cbamFactorMap[cbamRisk];

  const totalAnnualSavingsRM = annualComplianceSavingsRM + annualEnergySavingsRM + annualTaxMitigationRM;

  // Investment baseline estimated
  const advisoryInvestmentRM = 120000;
  const paybackMonths = Math.max(4, Math.round((advisoryInvestmentRM / (totalAnnualSavingsRM / 12))));

  // 5-Year Forecast Data for Recharts
  const chartData = Array.from({ length: 5 }, (_, i) => {
    const year = i + 1;
    const cumulativeSavings = Math.round(totalAnnualSavingsRM * year);
    const cumulativeNetValue = Math.round(cumulativeSavings - advisoryInvestmentRM);
    return {
      year: `Year ${year}`,
      savings: Math.round(cumulativeSavings / 1000), // in RM Thousands
      netValue: Math.round(cumulativeNetValue / 1000),
    };
  });

  const fiveYearNetValueRM = (totalAnnualSavingsRM * 5) - advisoryInvestmentRM;

  return (
    <section id="roi-calculator" className="py-20 border-b border-[#1f4230] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#143122] border border-[#e5b958]/35 text-[#f3d38c] text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5 text-[#f3d38c]" />
            <span>Financial & Carbon ROI Impact Simulator</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#f2faf5]">
            Carbon & Financial ROI Impact Calculator
          </h2>
          <p className="text-sm sm:text-base text-[#b2c5b9] leading-relaxed">
            Quantify the financial return of combining Bursa Malaysia carbon accounting, TNB energy optimization, and operational efficiency for your Malaysian corporation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Panel */}
          <div className="lg:col-span-5 forest-card rounded-2xl p-6 sm:p-8 border border-[#90d0a7]/25 space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-lg font-bold text-[#f2faf5] border-b border-[#1f4230] pb-3 mb-5">
                Malaysian Operational Assumptions
              </h3>

              <div className="space-y-5">
                
                {/* Target Carbon Reduction Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-[#e2f1e8] mb-2">
                    <span>Target Carbon Reduction (%)</span>
                    <span className="font-mono text-[#90d0a7] bg-[#143122] px-2 py-0.5 rounded border border-[#224835]">{targetReduction}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="70"
                    step="5"
                    value={targetReduction}
                    onChange={(e) => setTargetReduction(Number(e.target.value))}
                    className="w-full accent-[#90d0a7] cursor-pointer bg-[#0e2117] rounded-lg h-2"
                  />
                  <div className="flex justify-between text-[10px] text-[#a8bba0] mt-1 font-mono">
                    <span>10% Baseline</span>
                    <span>40% Aggressive</span>
                    <span>70% Net Zero</span>
                  </div>
                </div>

                {/* Annual Compliance Hours Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-[#e2f1e8] mb-2">
                    <span>Annual ESG Compliance Prep Hours</span>
                    <span className="font-mono text-[#f3d38c] bg-[#143122] px-2 py-0.5 rounded border border-[#e5b958]/30">{complianceHours} Hours</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="50"
                    value={complianceHours}
                    onChange={(e) => setComplianceHours(Number(e.target.value))}
                    className="w-full accent-[#f3d38c] cursor-pointer bg-[#0e2117] rounded-lg h-2"
                  />
                  <p className="text-[10px] text-[#a8bba0] mt-1">
                    Manual spreadsheet tracking across finance, operations & ESG teams.
                  </p>
                </div>

                {/* Annual Utility Spend Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-[#e2f1e8] mb-2">
                    <span>Annual TNB Utility Spend (RM)</span>
                    <span className="font-mono text-[#a8dadc] bg-[#143122] px-2 py-0.5 rounded border border-[#224835]">
                      RM {(utilitySpend / 1000000).toFixed(2)}M
                    </span>
                  </div>
                  <input
                    type="range"
                    min="200000"
                    max="10000000"
                    step="200000"
                    value={utilitySpend}
                    onChange={(e) => setUtilitySpend(Number(e.target.value))}
                    className="w-full accent-[#a8dadc] cursor-pointer bg-[#0e2117] rounded-lg h-2"
                  />
                  <div className="flex justify-between text-[10px] text-[#a8bba0] mt-1 font-mono">
                    <span>RM 200k</span>
                    <span>RM 5.0M</span>
                    <span>RM 10.0M</span>
                  </div>
                </div>

                {/* Shadow Carbon Risk */}
                <div>
                  <label className="block text-xs font-bold text-[#e2f1e8] mb-2">
                    CBAM & Shadow Carbon Risk Profile
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Low', 'Medium', 'High'] as const).map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setCbamRisk(level)}
                        className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                          cbamRisk === level
                            ? 'gold-gradient-btn text-[#08150e] border-[#e5b958]'
                            : 'bg-[#0e2117] text-[#b2c5b9] border-[#224835] hover:bg-[#143122]'
                        }`}
                      >
                        {level} Risk
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0e2117] border border-[#224835] space-y-1 mt-4">
              <div className="text-[11px] font-bold text-[#f3d38c] flex items-center gap-1.5 font-mono">
                <AlertCircle className="w-3.5 h-3.5 text-[#f3d38c]" />
                <span>Malaysian MIDA Tax Incentive Inclusion:</span>
              </div>
              <p className="text-[11px] text-[#b2c5b9] leading-normal">
                Includes eligibility for MIDA Green Investment Tax Allowance (GITA) 100% tax offset against statutory income.
              </p>
            </div>
          </div>

          {/* Results & Chart Panel */}
          <div className="lg:col-span-7 forest-card rounded-2xl p-6 sm:p-8 border border-[#90d0a7]/25 flex flex-col justify-between space-y-6">
            
            {/* Header Metrics Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-[#143122] border border-[#90d0a7]/30">
                <div className="text-[10px] font-mono uppercase text-[#a8bba0]">Annual Savings Yield</div>
                <div className="text-xl font-extrabold font-grotesk text-[#90d0a7] mt-1">
                  RM {(totalAnnualSavingsRM / 1000).toFixed(0)}k <span className="text-xs font-normal text-[#b2c5b9]">/yr</span>
                </div>
                <div className="text-[10px] text-[#a8dadc] mt-1">Energy + Hours + Tax</div>
              </div>

              <div className="p-4 rounded-xl bg-[#143122] border border-[#e5b958]/35">
                <div className="text-[10px] font-mono uppercase text-[#a8bba0]">5-Year Cumulative Net Value</div>
                <div className="text-xl font-extrabold font-grotesk text-[#f3d38c] mt-1">
                  RM {(fiveYearNetValueRM / 1000000).toFixed(2)}M
                </div>
                <div className="text-[10px] text-[#f3d38c] mt-1">Net after advisory fees</div>
              </div>

              <div className="p-4 rounded-xl bg-[#143122] border border-[#90d0a7]/30">
                <div className="text-[10px] font-mono uppercase text-[#a8bba0]">Payback Horizon</div>
                <div className="text-xl font-extrabold font-grotesk text-[#f2faf5] mt-1">
                  {paybackMonths} Months
                </div>
                <div className="text-[10px] text-[#90d0a7] mt-1">Rapid Capital Return</div>
              </div>
            </div>

            {/* Interactive Recharts 5-Year Area Chart */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#f2faf5] font-mono uppercase tracking-wider">
                  5-Year Financial Savings Forecast (RM Thousands)
                </span>
                <span className="text-[10px] font-mono text-[#f3d38c] bg-[#143122] px-2 py-0.5 rounded border border-[#e5b958]/30">
                  Cumulative Net Value
                </span>
              </div>

              <div className="h-56 w-full bg-[#0e2117] rounded-xl p-3 border border-[#224835]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#90d0a7" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#90d0a7" stopOpacity={0.0}/>
                      </linearGradient>
                      <linearGradient id="colorNet" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f3d38c" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#f3d38c" stopOpacity={0.0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#224835" />
                    <XAxis dataKey="year" stroke="#a8bba0" tick={{ fontSize: 11 }} />
                    <YAxis stroke="#a8bba0" tick={{ fontSize: 11 }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#143122', borderColor: '#e5b958', borderRadius: '8px', color: '#f2faf5', fontSize: '12px' }}
                      formatter={(val: any) => [`RM ${val}k`, '']}
                    />
                    <Area type="monotone" dataKey="savings" stroke="#90d0a7" fillOpacity={1} fill="url(#colorSavings)" name="Gross Cumulative Savings" />
                    <Area type="monotone" dataKey="netValue" stroke="#f3d38c" fillOpacity={1} fill="url(#colorNet)" name="Net Value Realized" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#1f4230]">
              <div className="text-xs text-[#b2c5b9]">
                Want a formal MFRS financial controls & MIDA tax feasibility review for your Board of Directors?
              </div>
              <button
                onClick={() => onOpenContactWithTopic(`Request Board Review based on ROI Calculator (Estimated RM ${(fiveYearNetValueRM/1000000).toFixed(2)}M 5-Yr Net)`)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold gold-gradient-btn transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <span>Request Board Review</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#08150e]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
