import { ServiceItem, AdvisoryModule, CaseStudy } from '../types';

export const KOHILYN_CREDENTIALS = [
  { abbr: 'FCCA', title: 'Fellow of the Association of Chartered Certified Accountants' },
  { abbr: 'CA(M)', title: 'Chartered Accountant, Malaysian Institute of Accountants' },
  { abbr: 'BA(Hons) UK', title: 'Bachelor of Arts with Honours (United Kingdom)' },
  { abbr: 'Oxford Certified', title: 'Oxford Said Business School Certified Sustainability Expert' }
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'sustainability-bursa',
    pillar: 'sustainability',
    title: 'Bursa Scope 1-3 Baseline Analytics & ISSB Alignment',
    subtitle: 'GHG Protocol Baseline, Gap Assessment & Decarbonization Roadmap',
    description: 'Establish verifiable GHG Protocol Scope 1, 2 & 3 baseline emission inventories. We perform comprehensive maturity gap analysis against Bursa Malaysia Sustainability Reporting Guide & ISSB IFRS S1/S2 standards.',
    deliverables: [
      'Scope 1, 2 & 3 GHG Protocol Compliant Emission Inventory',
      'Bursa Malaysia & ISSB (IFRS S1/S2) Compliance Gap Assessment',
      'Eco-design Diagnostic & Resource Efficiency Blueprint',
      'End-to-End ESG Disclosure & Submission Pack for Bursa Portal'
    ],
    impactMetric: '18% Avg Energy Efficiency Yield',
    details: 'Leveraging Oxford-certified methodologies, we audit operational data from facilities, logistics, and supply chains to provide audit-ready carbon inventories that satisfy Bursa Malaysia mandatory disclosure deadlines.'
  },
  {
    id: 'accounting-mfrs',
    pillar: 'accounting',
    title: 'MFRS Integrated ESG Controls & Financial Reporting',
    subtitle: 'General Ledger Integration, Shadow Carbon Liabilities & MIDA Incentives',
    description: 'Embed carbon liabilities, CBAM cross-border tariff risks, and MIDA green tax incentives (GITA/GITE) directly into month-end general ledger closing under MFRS financial standards.',
    deliverables: [
      'MFRS Integrated Chart of Accounts & General Ledger Mapping',
      'Month-End Closing Workflow Restructuring & Audit Prep',
      'CBAM & Shadow Carbon Tax Liability Feasibility Assessment',
      'MIDA Green Investment Tax Allowance (GITA) Application Prep'
    ],
    impactMetric: '60% Faster Month-End Close',
    details: 'Ensure 100% compliance with Malaysian Financial Reporting Standards (MFRS). We bridge the gap between financial controllers and environmental metrics so board members receive unified financial and ESG statements.'
  },
  {
    id: 'analytics-pipeline',
    pillar: 'analytics',
    title: 'Executive Analytics & Bursa ESG Data Pipelines',
    subtitle: 'Automated TNB Utility OCR, ERP Connectors & Snowflake PowerBI Suite',
    description: 'Deploy real-time automated data pipelines connecting TNB utility OCR extraction, SAP/SQL Accounting/AutoCount ERP ledgers, and Snowflake cloud data warehouses directly to C-Suite PowerBI dashboards.',
    deliverables: [
      'Automated TNB Invoice OCR & Utility Extraction Engine',
      'SAP / SQL Accounting / AutoCount ERP Ledger Connectors',
      'Snowflake Cloud Data Warehouse & PowerBI Executive Suite',
      'Bursa Malaysia ESG Reporting API & Real-time Audit Trail'
    ],
    impactMetric: 'Saves ~450 Analyst Hours/Yr',
    details: 'Eliminate error-prone spreadsheets and manual data entry. Our production-grade data pipelines aggregate utility bills, plant telemetry, and financial ledger data into real-time executive visual dashboards.'
  }
];

export const ADVISORY_MODULES: AdvisoryModule[] = [
  {
    id: 'sustainability-design-embedding',
    pillar: 'sustainability',
    name: 'Areas to Embed Sustainability in Design',
    description: 'Eco-design diagnostic, resource efficiency blueprint, and lifecycle impact assessment.',
    basePrice: 35000,
    estimatedWeeks: 5
  },
  {
    id: 'sustainability-carbon-industry-benchmark',
    pillar: 'sustainability',
    name: 'Carbon Emission Check Against Industry',
    description: 'Scope 1, 2 & 3 carbon footprint calculation benchmarked against Malaysian sector baselines.',
    basePrice: 42000,
    estimatedWeeks: 6
  },
  {
    id: 'sustainability-standards-check',
    pillar: 'sustainability',
    name: 'Company Check Against Standards (GRI / ISSB / Bursa)',
    description: 'Maturity evaluation and gap analysis against GRI, ISSB (IFRS S1/S2), and Bursa ESG guidelines.',
    basePrice: 38000,
    estimatedWeeks: 5
  },
  {
    id: 'sustainability-esg-disclosure',
    pillar: 'sustainability',
    name: 'ESG Disclosure & Reporting Submission Pack',
    description: 'End-to-end sustainability report preparation and Bursa Malaysia ESG portal submission pack.',
    basePrice: 45000,
    estimatedWeeks: 6
  },
  {
    id: 'accounting-bookkeeping',
    pillar: 'accounting',
    name: 'Accounting & Bookkeeping / MFRS Ledger',
    description: 'Full-scope ledger management, month-end closes, and MFRS-compliant financial statements.',
    basePrice: 24000,
    estimatedWeeks: 3
  },
  {
    id: 'accounting-mfrs-esg-controls',
    pillar: 'accounting',
    name: 'MFRS ESG Integrated Controls & Financial Reporting',
    description: 'Embed carbon liabilities into general ledger closing under MFRS with MIDA tax feasibility.',
    basePrice: 40000,
    estimatedWeeks: 5
  },
  {
    id: 'analytics-tnb-ocr-pipeline',
    pillar: 'analytics',
    name: 'Automated TNB Utility OCR & ERP Connector Pipeline',
    description: 'Automate TNB invoice processing, OCR extraction, and SAP/SQL Accounting ERP pipeline.',
    basePrice: 48000,
    estimatedWeeks: 6
  },
  {
    id: 'analytics-powerbi-suite',
    pillar: 'analytics',
    name: 'Executive PowerBI & Bursa Reporting Dashboard Suite',
    description: 'Deploy real-time executive PowerBI dashboard suite with automated audit-ready compliance export.',
    basePrice: 36000,
    estimatedWeeks: 4
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-bursa-plc',
    client: 'Bursa Main Market Consumer Goods PLC',
    industry: 'Consumer Goods & Retail',
    impact: 'Achieved Full ISSB & Bursa Readiness in 60 Days',
    description: 'Audited corporate governance and environmental data against ISSB IFRS S1/S2 and Bursa Sustainability Guide, closing 18 key disclosure gaps ahead of mandatory filing.',
    metrics: [
      { label: 'Gaps Closed', value: '18 / 18' },
      { label: 'Time to Filing', value: '60 Days' },
      { label: 'Audit Compliance', value: '100%' }
    ]
  },
  {
    id: 'cs-johor-agri',
    client: 'Johor Agricultural Processing Conglomerate',
    industry: 'Agriculture & Processing',
    impact: 'Diverted 8,200 Tonnes Waste & Cut Costs by RM 1.4M',
    description: 'Converted biomass processing byproducts into bio-fertilizer and renewable heat, eliminating landfill fees and qualifying for MIDA Green Tax Incentives (GITA).',
    metrics: [
      { label: 'Annual Savings', value: 'RM 1.4M' },
      { label: 'Waste Diverted', value: '8,200 Tonnes' },
      { label: 'MIDA Tax Yield', value: 'RM 580K' }
    ]
  },
  {
    id: 'cs-tech-enterprise',
    client: 'Malaysian Technology Services Enterprise',
    industry: 'IT & Data Infrastructure',
    impact: 'Seamless Mandatory Filing Sign-Off in 45 Days',
    description: 'Delivered inaugural Bursa-aligned ESG disclosure report in 45 days, receiving top-tier rating from corporate stakeholders and institutional investors.',
    metrics: [
      { label: 'Turnaround', value: '45 Days' },
      { label: 'Investor Rating', value: 'Top Tier' },
      { label: 'Data Accuracy', value: '99.8%' }
    ]
  },
  {
    id: 'cs-kl-retail',
    client: 'Kuala Lumpur Multi-Branch Retail Group',
    industry: 'Multi-Unit Retail',
    impact: 'Reduced Month-End Close Time by 60%',
    description: 'Restructured chart of accounts and general ledger workflows, establishing error-free monthly MFRS financial statements and automated TNB energy tracking across 42 branches.',
    metrics: [
      { label: 'Close Reduction', value: '60% Faster' },
      { label: 'Branches Integrated', value: '42 Units' },
      { label: 'Error Rate', value: '0.00%' }
    ]
  }
];

export const INDUSTRIES = [
  'Manufacturing & Industrial Products',
  'Agriculture & Plantation Processing',
  'Technology & Digital Infrastructure',
  'Consumer Goods & Multi-Unit Retail',
  'Energy, Utilities & Utilities OCR',
  'Real Estate & Construction',
  'Financial Services & Logistics'
];

export const REGIONS = [
  'Malaysia - Klang Valley / Selangor',
  'Malaysia - Johor & Southern Hub',
  'Malaysia - Penang & Northern Belt',
  'Malaysia - East Malaysia (Sabah/Sarawak)',
  'Regional ASEAN Commerce'
];

export const PROTOTYPE_PLANT_DATA = [
  { month: 'Jan', revenueRM: 1420, utilityRM: 182, carbonTaxRM: 24, CO2Tonnes: 410 },
  { month: 'Feb', revenueRM: 1580, utilityRM: 195, carbonTaxRM: 26, CO2Tonnes: 435 },
  { month: 'Mar', revenueRM: 1650, utilityRM: 188, carbonTaxRM: 22, CO2Tonnes: 390 },
  { month: 'Apr', revenueRM: 1720, utilityRM: 170, carbonTaxRM: 18, CO2Tonnes: 350 },
  { month: 'May', revenueRM: 1890, utilityRM: 162, carbonTaxRM: 15, CO2Tonnes: 320 },
  { month: 'Jun', revenueRM: 2050, utilityRM: 154, carbonTaxRM: 12, CO2Tonnes: 295 },
];
