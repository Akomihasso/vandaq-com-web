import type { SiteContent } from "./tr";

const en: SiteContent = {
  nav: {
    links: [
      { href: "#izleme", label: "Global Monitoring" },
      { href: "#ozellikler", label: "Technological Edge" },
      { href: "#nasil-calisir", label: "How It Works" },
      { href: "#fiyatlandirma", label: "Pricing" },
      { href: "#iletisim", label: "Contact" },
    ],
    cta: "Go to VANDAQ-X",
  },
  hero: {
    chip: "Competitive Intelligence Technology Active",
    h1: { plain: "See what will impact your business", highlight: "before it happens" },
    desc: {
      pre: "VANDAQ processes financial markets, energy, geopolitics, climate, and regulatory signals on",
      strong: "your company's digital twin",
      mid: "; instead of generic commentary, it produces",
      em: "your-specific",
      post: "numerical impact and strategy.",
    },
    ctaPrimary: "Try Free for 15 Days",
    ctaGhost: "See How It Works",
    disclaimer: "No credit card required • KVKK/GDPR compliant • Cancel anytime",
    liveSignal: "Live Signal Feed",
    compositeIndex: "Composite Index",
    kpi: {
      cvi: { subtitle: "Corporate Vulnerability", title: "Corporate Vulnerability Index (CVI)", desc: "Weighted average of EDI, TDI, CSI, and GRI. Measures your company's overall vulnerability to external shocks on a 0–1 scale. A lower value means greater resilience." },
      edi: { subtitle: "Economic Dependency", title: "Economic Dependency Index (EDI)", desc: "Shows your dependency level on economic variables such as exchange rates, interest rates, energy, and commodities." },
      tdi: { subtitle: "Technology Dependency", title: "Technology Dependency Index (TDI)", desc: "Measures your dependency on critical software, hardware, and digital infrastructure; summarizes technology risk." },
      csi: { subtitle: "Climate Sensitivity", title: "Climate Sensitivity Index (CSI)", desc: "Intensity of the impact of climate events and environmental risks (drought, flood, disaster, carbon legislation) on your company." },
      gri: { subtitle: "Geopolitical Risk", title: "Geopolitical Risk Index (GRI)", desc: "Intensity of geopolitical risks such as wars, embargoes, trade corridor disruptions, and regime changes on your company." },
    },
  },
  monitoring: {
    chip: "We Monitor All Signals",
    h2: {
      pre: "We monitor and measure the impact on your company of the",
      highlight: "most important signals",
      post: "that may be relevant to your business.",
    },
    desc: "Assess how changes in foreign exchange, interest rates, energy, commodities, geopolitics, and regulations will affect your company's costs, revenues, supply chain, and competitiveness. VANDAQ-X is not a news channel; everyone reads the same news, but VANDAQ-X tells you what that news or change signal means specifically for your company — the risk level, when it will arrive, and what you should do.",
    categories: [
      { icon: "coin", title: "Financial Markets", desc: "Exchange rates, interest rates, bond yields, gold, Bitcoin, stock markets, and global liquidity flows.", color: "primary" },
      { icon: "leaf", title: "Energy & Commodities", desc: "Oil, natural gas, electricity, copper, steel, aluminum, critical elements, and agricultural commodity volatility.", color: "warning" },
      { icon: "globe", title: "Geopolitics & Conflicts", desc: "Conflicts, embargoes, trade tensions, new alliances, and supply chain corridors.", color: "secondary" },
      { icon: "gavel", title: "Tax & Regulation", desc: "CBAM, COP31, carbon tax, Made in Europe, US Customs Duties, additional taxes, VAT, and sectoral regulations.", color: "success" },
      { icon: "cloud", title: "Climate & Natural Events", desc: "Earthquake, drought, flood, typhoon, wildfire, and agricultural/logistics impacts.", color: "info" },
      { icon: "patent", title: "Competitor & IP Signals", desc: "IPOs, acquisitions, bankruptcy, patent, trademark, and new product announcements.", color: "danger" },
    ],
    banner: {
      label: "24/7 Continuous Analysis",
      h3: "When a signal arrives, its impact is calculated. When critical thresholds are exceeded, you are notified.",
      stats: [
        { label: "Signal Sources", value: "120+" },
        { label: "Avg. Response", value: "<3s" },
        { label: "Server Uptime", value: "99.9%" },
      ],
    },
  },
  features: {
    chip: "What We Do",
    h2: { pre: "Not just data,", highlight: "actionable strategy" },
    desc: {
      pre: "Four main modules process 100+ signals from 6 core data sources and calculate the impact on your company. Not general market commentary — company-specific data is produced. Company decision-makers use this specialized data to",
      strong: "see risk or opportunity signals and shape competitive strategies.",
    },
    modules: {
      flow: { title: "Data Signals & Propagation Map", desc: "When any signal that could affect your company — domestically or internationally — arrives, you can see which components it reaches, at what magnitude, and through which chain. Each node (impact focus) and edge (impact degree) is traceable." },
      exposure: { title: "Firm Impact & Degree", desc: "Cost, Revenue, Demand & Market, Technology, Competition, and Regulation impacts are shown with positive and negative measurements at each impact degree." },
      strategy: { title: "Scenarios & Strategy", desc: "Likely scenarios can be predicted in the light of developments up to that point. AI-assisted action proposals are simulated in the graph before implementation; impact reduction rates are numerically verified." },
      ip: { title: "Competitor Monitoring & IP", desc: "Developments in your competitors or sector, new product and technology launches, IPOs, patent, trademark, and design applications are monitored. Probable threats and opportunities are quantified and presented." },
    },
    flowNodes: ["Iran-US Crisis", "Strait of Hormuz", "Supply Chain", "Cost"],
    exposureRows: ["Cost", "Revenue", "Demand/Market", "Technology", "Competition", "Regulation"],
    strategyTags: [
      { l: "FX surge accelerating → index receivables to foreign currency", eff: "−14%" },
      { l: "CBAM impact rising → invest with green credit", eff: "−18%" },
      { l: "Made in Europe coming → increase EU customer meetings", eff: "−9%" },
    ],
    radarLabels: ["Competitor patent", "Going public", "New competitor entering", "Trademark registration"],
    whatif: {
      chip: "Ask Yourself",
      h3: { pre: "VANDAQ-X answers all these questions", highlight: "with numbers" },
      questions: [
        "If the dollar rises 10%, how does my profitability get affected? What happens to my production costs and export growth?",
        "If energy prices rise, which product group of mine is more affected?",
        "How does a new EU regulation change my exports and costs?",
        "With Made in EU, will my Chinese supplier change? How much does my risk decrease if I switch suppliers?",
        "Does the Strait of Hormuz crisis affect my supply chain?",
        "Which product group of mine could be affected by a competitor's new patent application?",
      ],
    },
  },
  howItWorks: {
    chip: "How It Works",
    h2: { pre: "Four layers, one", highlight: "information flow" },
    desc: "Starts from the user's company profile, processes signals, and arrives at your personalized strategy.",
    steps: [
      { n: "01", title: "Define Your Company's Core Structure and Risk Areas", desc: "To evaluate global developments that may be important for your company, non-confidential information and data that must be monitored and assessed are identified." },
      { n: "02", title: "Data Signals Flow Continuously", desc: "100+ data signals — from central banks and exchange rates, energy agency data, stock markets, commodity prices, economic news channels, regulations, patent and trademark offices, and political events — are collected 24/7 and quantified as heterogeneous events." },
      { n: "03", title: "The Impact of Each Data Signal Is Calculated Per Company", desc: "Chain effects are calculated using formulas — one of VANDAQ-X's critical features — whose system logic is protected by patent application. The positive or negative impact and degree of each signal is quantified per company, and risks are identified." },
      { n: "04", title: "Scenarios and Strategy Proposal", desc: "With the data collected for the company, likely scenarios can be generated; if critical thresholds are exceeded, AI-assisted proposals and simulations are performed. Concrete results such as 'This strategy reduces the cost impact by 28%' can be produced." },
    ],
    compositeIndexBadge: "Composite Index",
    compositeIndexLabel: "CVI Index",
    compositeIndexDesc: "Corporate Vulnerability — weighted average of EDI + TDI + CSI + GRI",
    subIndices: [
      { l: "EDI Index", d: "Economic Dependency" },
      { l: "TDI Index", d: "Technology Dependency" },
      { l: "CSI Index", d: "Climate Sensitivity" },
      { l: "GRI Index", d: "Geopolitical Risk" },
    ],
  },
  testimonials: {
    chip: "References",
    h2: "Concrete decisions, measurable results",
    items: [
      { sector: "TEXTILE EXPORTER", signal: "EXCHANGE RATE SIGNAL", quote: "We received EUR/TRY parity fluctuations and cotton price increase signals through VANDAQ-X before the market. By indexing our receivables to foreign currency and pulling forward our raw material procurement, we protected our quarterly profitability." },
      { sector: "ALUMINUM MANUFACTURER", signal: "CBAM / CARBON TAX SIGNAL", quote: "We simulated the additional cost risks under CBAM and COP31 with VANDAQ-X. With investment made using green credit opportunities, we did not lose our competitive position in the EU market." },
      { sector: "AUTOMOTIVE SUPPLIER", signal: "MADE IN EU SIGNAL", quote: "We became aware of the EU's Made in EU regulation when it was still in draft stage, thanks to VANDAQ-X's regulatory signals. By rapidly revising our supply chain and local content ratio, we did not put our contracts with European OEM customers at risk." },
      { sector: "LOGISTICS COMPANY", signal: "STRAIT OF HORMUZ / GEOPOLITICAL CRISIS SIGNAL", quote: "We quantified the chain impact of tensions in the Strait of Hormuz on our freight and fuel costs with VANDAQ-X. By switching early to alternative routes and contracted freight agreements, we provided uninterrupted service to our customers." },
    ],
  },
  pricing: {
    chip: "Pricing",
    h2: { pre: "Flexible plans for", highlight: "your company's scale" },
    trialBadge: "15-day free trial · No card required",
    plans: [
      {
        name: "Starter", price: "95", period: "Euro/month", priceSub: undefined as string | undefined,
        ctaType: "app" as "app" | "contact", cta: "Get Started", highlight: false,
        features: ["Corporate Vulnerability Index (CVI)", "+4 Core vulnerability indices", "Cost Impact monitoring", "Revenue Impact monitoring", "Demand Impact monitoring", "CBRT FX + commodity signal feeds", "Instant notification for 3 critical event groups", "Weekly Report", "Email notification"],
      },
      {
        name: "Professional", price: "175", period: "Euro/month", priceSub: undefined as string | undefined,
        ctaType: "app" as "app" | "contact", cta: "Try Free for 15 Days", highlight: true,
        features: ["Corporate Vulnerability Index (CVI)", "+4 Core vulnerability indices", "Cost Impact monitoring", "Revenue Impact monitoring", "Geopolitical Impact monitoring", "Supply Impact monitoring", "Competition & IP impact monitoring", "Regulation impact monitoring", "CBRT FX + commodity signal feeds", "All other signal feed monitoring", "Instant notification for 9 critical event groups", "Scenario and Strategy generation", "Weekly Report", "PDF Report", "Email notification"],
      },
      {
        name: "Professional + Extra User", price: "175", period: "Euro/month", priceSub: "+ €35/user" as string | undefined,
        ctaType: "contact" as "app" | "contact", cta: "Contact Us", highlight: false,
        features: ["Corporate Vulnerability Index (CVI)", "+4 Core vulnerability indices", "Cost Impact monitoring", "Revenue Impact monitoring", "Geopolitical Impact monitoring", "Supply Impact monitoring", "Competition & IP impact monitoring", "Regulation impact monitoring", "CBRT FX + commodity signal feeds", "All other signal feed monitoring", "Instant notification for 9 critical event groups", "Scenario and Strategy generation", "Weekly Report", "PDF Report", "Email notification"],
      },
      {
        name: "Group Companies", price: "175", period: "Euro/month", priceSub: "+ €35/user × 0.35 per company" as string | undefined,
        ctaType: "contact" as "app" | "contact", cta: "Contact Us", highlight: false,
        features: ["Corporate Vulnerability Index (CVI)", "+4 Core vulnerability indices", "Cost Impact monitoring", "Revenue Impact monitoring", "Geopolitical Impact monitoring", "Supply Impact monitoring", "Competition & IP impact monitoring", "Regulation impact monitoring", "CBRT FX + commodity signal feeds", "All other signal feed monitoring", "Instant notification for 9 critical event groups", "Scenario and Strategy generation", "Weekly Report", "PDF Report", "Email notification"],
      },
    ],
    footerNote: "All prices exclude VAT. 15% discount with annual payment.",
  },
  about: {
    chip: "What is VANDAQ?",
    h2: { pre: "Not industry commentary,", highlight: "firm-specific impact measurement" },
    para1: "VANDAQ is a corporate digital twin project that tracks more than 100 data sources to measure the degree to which domestic and international events in the global competitive environment affect a company's competitiveness, calculating both positive and negative, direct and indirect impacts on the company.",
    para2: "Beyond general economic, sectoral, or region-specific forecasts made worldwide, firm-specific impact levels are measured. As a result, the company can receive some impact signals long before the market, develop its competitive strategy, protect itself from risks, and take advantage of opportunities.",
    para3: {
      pre: "VANDAQ is the operator of VANDAQ-X — believed to be the world's first commercial application of this technology — whose system and method are",
      strong: "protected by patent rights",
      post: ".",
    },
    stats: [
      { value: "100+", label: "Data sources" },
      { value: "6", label: "Main signal groups" },
      { value: "6", label: "Firm impact groups" },
      { value: "4 + CVI", label: "Indices (composite + sub)" },
    ],
    tech: {
      label: "Our Technology",
      title: "Competitive Intelligence with Digital Twin Company",
      items: [
        { title: "Real-Time Propagation", body: "Chain impact calculation for heterogeneous events with 100+ data signals." },
        { title: "Firm-Level Impact & Grading", body: "Calculation of the varying impact of data signals from company to company, and estimation of firm-specific, realistic impact intensity." },
        { title: "Scenario & Strategy Generation", body: "Realistic scenarios with real data and AI-assisted strategy and decision support system." },
        { title: "Hybrid Integration", body: "Real-time data via API connections for not just financial markets, commodities, and stock exchanges, but also geopolitical developments, regulations, climate and natural events, integrated in a hybrid manner." },
      ],
    },
  },
  contact: {
    chip: "Contact",
    h2: { primary: "Try the 15-day", rest: "free trial" },
    desc: "Contact us for company-specific applications. We will get back to you as soon as possible.",
    rows: {
      email: { title: "Email", value: "bilgi@vandaq.com", href: "mailto:bilgi@vandaq.com" },
      phone: { title: "Phone / WhatsApp", value: "+90 537 952 62 22", href: "tel:+905379526222" },
      address: { title: "Address", line1: "Nispetiye Cad. No:6 Levent İş Merkezi", line2: "Etiler, Istanbul" },
    },
    form: {
      name: { label: "Full Name", placeholder: "Your Full Name" },
      email: { label: "Email", placeholder: "example@company.com" },
      company: { label: "Company", placeholder: "Company name" },
      subject: { label: "Subject", options: ["Partnership", "Information", "Suggestion", "Other"] },
      message: { label: "Your Message", placeholder: "How can we help you?" },
      kvkk: "I have read the Privacy Notice and agree to the processing of my contact information for this request.",
      submit: "Send Request",
      submitting: "Sending...",
    },
    messages: {
      okWithAck: "Your request has been submitted. We sent a thank you email to your address.",
      okNoAck: "Your request has been submitted. We will get back to you as soon as possible.",
      emailError: "Your request was recorded but the email notification could not be sent ({error}). Our team will follow up via the record.",
      genericError: "An error occurred",
    },
  },
  footer: {
    tagline: "Corporate Digital Twin & Strategic Impact Analysis Platform. We concretely calculate how much every external signal touches your company.",
    appLink: "Go to VANDAQ-X app",
    platform: {
      title: "Platform",
      links: [
        { l: "Global Monitoring", h: "#izleme" },
        { l: "Technological Edge", h: "#ozellikler" },
        { l: "How It Works", h: "#nasil-calisir" },
        { l: "Pricing", h: "#fiyatlandirma" },
      ],
    },
    corporate: {
      title: "Corporate",
      links: [
        { l: "About", h: "#hakkinda" },
        { l: "Contact", h: "#iletisim" },
        { l: "Privacy Policy", h: "/gizlilik" },
        { l: "KVKK", h: "/kvkk" },
        { l: "Terms of Use", h: "/kosullar" },
      ],
    },
    copyright: "All rights reserved.",
    patent: "VANDAQ is the operator of the patented VANDAQ-X project, the world's first and only of its kind.",
  },
  logoStrip: {
    label: "Designed for",
    items: [
      "Exporting Manufacturers",
      "Producers Selling to EU Market",
      "Automotive Suppliers",
      "Textile & Apparel",
      "Machinery & Energy",
      "CFOs & Strategy Teams",
      "Management Consultants",
      "Banks & Credit Assessors",
    ],
  },
};

export default en;
