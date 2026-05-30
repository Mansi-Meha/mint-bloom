// v2 key forces fresh data after status model simplification (Pending / Completed only)
const STORAGE_KEY = 'mb_admin_brands_v2';

const DEFAULT_BRANDS = [
  {
    id: '1',
    brandName: 'Loom & Leaf',
    founderName: 'Elena Vance',
    category: 'Sustainable Textiles',
    joinDate: '2026-03-12',
    contactEmail: 'elena@loomandleaf.co',
    contactPhone: '+1 415 889 1290',
    brandingStatus: 'Completed',
    packagingStatus: 'Pending',
    digitalMarketingStatus: 'Pending',
    notes: 'Elena has completed the core branding guidelines. We are now working on eco-friendly paper packaging solutions and tag designs. Digital marketing strategy draft is ready for review.',
    checklist: [
      { id: '1-1', text: 'Brand guidelines & typography spec', completed: true },
      { id: '1-2', text: 'Eco-friendly cardboard tube prototypes', completed: true },
      { id: '1-3', text: 'Primary typography and botanical patterns', completed: true },
      { id: '1-4', text: 'Web storefront high-fidelity wireframe', completed: false },
      { id: '1-5', text: 'Instagram launch asset creation', completed: false }
    ],
    timeline: [
      { action: 'Branding started & approved', date: '2026-03-15' },
      { action: 'Eco-packaging brainstorming session', date: '2026-04-02' },
      { action: 'Storefront wireframe draft submitted', date: '2026-05-10' }
    ],
    mockups: ['loom_packaging_v1.png', 'color_palette_palette.jpg'],
    storefrontStatus: 'Draft',
    productCount: 14
  },
  {
    id: '2',
    brandName: 'Clay & Herb',
    founderName: 'Mira Patel',
    category: 'Organic Skincare',
    joinDate: '2026-04-05',
    contactEmail: 'mira@clayandherb.com',
    contactPhone: '+1 212 902 4432',
    brandingStatus: 'Completed',
    packagingStatus: 'Completed',
    digitalMarketingStatus: 'Pending',
    notes: 'Products have passed lab checks. Packaging has been manufactured and shipped to the warehouse. Active onboarding onto TikTok Shop and Pinterest Business is ongoing.',
    checklist: [
      { id: '2-1', text: 'Ingredient label compliance review', completed: true },
      { id: '2-2', text: 'Amber glass jar packaging design', completed: true },
      { id: '2-3', text: 'Product photoshoot (10 key items)', completed: true },
      { id: '2-4', text: 'Launch influencer list curation', completed: true },
      { id: '2-5', text: 'Google Ads account setup & seed campaigns', completed: false }
    ],
    timeline: [
      { action: 'Incubation onboarding completed', date: '2026-04-06' },
      { action: 'Packaging approved & manufactured', date: '2026-04-28' },
      { action: 'Botanical photography finished', date: '2026-05-15' },
      { action: 'Marketing campaign initiated', date: '2026-05-22' }
    ],
    mockups: ['clay_cleanser_bottle.png', 'skincare_moodboard.jpg'],
    storefrontStatus: 'Under Review',
    productCount: 8
  },
  {
    id: '3',
    brandName: 'Midi Floral',
    founderName: 'Sophie Dubois',
    category: 'Artisanal Florals',
    joinDate: '2026-05-18',
    contactEmail: 'hello@midifloral.fr',
    contactPhone: '+33 6 12 34 56 78',
    brandingStatus: 'Pending',
    packagingStatus: 'Pending',
    digitalMarketingStatus: 'Pending',
    notes: 'Brand new onboarding. Sophie wants a vintage Parisian floral shop vibe but updated with clean serif typography. Currently generating initial moodboards.',
    checklist: [
      { id: '3-1', text: 'Creative brief questionnaire completion', completed: true },
      { id: '3-2', text: 'Moodboard generation & palette sign-off', completed: false },
      { id: '3-3', text: 'Primary logo typography lockup', completed: false },
      { id: '3-4', text: 'Tissue wrapping paper custom illustration', completed: false }
    ],
    timeline: [
      { action: 'Branding started & brief submitted', date: '2026-05-19' }
    ],
    mockups: [],
    storefrontStatus: 'Draft',
    productCount: 0
  },
  {
    id: '4',
    brandName: 'Bloom Botanics',
    founderName: 'Aria Thorne',
    category: 'Wellness Tech',
    joinDate: '2026-01-20',
    contactEmail: 'aria@bloombotanics.io',
    contactPhone: '+1 650 334 9871',
    brandingStatus: 'Completed',
    packagingStatus: 'Completed',
    digitalMarketingStatus: 'Completed',
    notes: 'Fully incubated brand. Currently running at $45K monthly run rate. Storefront approved, live, and converting extremely well. Admin task shifts to maintenance and checking monthly metrics.',
    checklist: [
      { id: '4-1', text: 'Digital hardware box design structure', completed: true },
      { id: '4-2', text: 'Shopify Custom Storefront Development', completed: true },
      { id: '4-3', text: 'Meta ads pixel setup & tracking logs', completed: true },
      { id: '4-4', text: 'Creator affiliate program launch', completed: true }
    ],
    timeline: [
      { action: 'Onboarding kickoff', date: '2026-01-22' },
      { action: 'Creative assets finalised', date: '2026-02-15' },
      { action: 'Storefront approved & launched', date: '2026-03-01' },
      { action: 'Milestone: $10k in platform sales', date: '2026-04-18' }
    ],
    mockups: ['bloom_device_rendering.png'],
    storefrontStatus: 'Live',
    productCount: 22
  },
  {
    id: '5',
    brandName: 'Slow Brew Tea Co.',
    founderName: 'Kenji Sato',
    category: 'Specialty Tea',
    joinDate: '2026-02-28',
    contactEmail: 'sato@slowbrew.jp',
    contactPhone: '+81 90 2831 9902',
    brandingStatus: 'Completed',
    packagingStatus: 'Pending',
    digitalMarketingStatus: 'Pending',
    notes: 'Kenji sent the tea canisters for proofing. Logo revisions are on third round to refine the gold foil print details. The digital ads focus on mindful morning rituals.',
    checklist: [
      { id: '5-1', text: 'Custom tea canister illustrations', completed: true },
      { id: '5-2', text: 'Foil stamp packaging print proofs', completed: true },
      { id: '5-3', text: 'Brand typography review & adjustments', completed: true },
      { id: '5-4', text: 'Ad copywriting for launch campaigns', completed: false }
    ],
    timeline: [
      { action: 'Onboarding completed', date: '2026-03-02' },
      { action: 'Initial canister mockups submitted', date: '2026-03-24' },
      { action: 'Foil samples sent for review', date: '2026-05-02' }
    ],
    mockups: ['slowbrew_canister_gold.png', 'ad_copy_deck.pdf'],
    storefrontStatus: 'Draft',
    productCount: 5
  }
];

export const getBrandsData = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_BRANDS));
    return DEFAULT_BRANDS;
  }
  return JSON.parse(data);
};

export const saveBrandsData = (brands) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(brands));
};

export const updateBrand = (updatedBrand) => {
  const brands = getBrandsData();
  const index = brands.findIndex(b => b.id === updatedBrand.id);
  if (index !== -1) {
    brands[index] = updatedBrand;
    saveBrandsData(brands);
  }
  return brands;
};

// Progress: each completed phase = 33%, checklist blended in at 20% weight
export const getProgressPercentage = (brand) => {
  const statuses = [brand.brandingStatus, brand.packagingStatus, brand.digitalMarketingStatus];
  const completedCount = statuses.filter(s => s === 'Completed').length;
  const statusScore = (completedCount / 3) * 100;

  if (brand.checklist && brand.checklist.length > 0) {
    const done = brand.checklist.filter(c => c.completed).length;
    const checklistScore = (done / brand.checklist.length) * 100;
    // 80% weighted on milestone phases, 20% on checklist tasks
    return Math.min(100, Math.round(statusScore * 0.8 + checklistScore * 0.2));
  }
  return Math.min(100, Math.round(statusScore));
};
