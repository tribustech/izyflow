export const bikes = [
  { id: 'b1', name: 'Iron 883', model: 'Sportster Iron', year: 2019, plate: 'B-217-YZY', lastService: 'Apr 02, 2026', daysSince: 35, color: 'Vivid Black', engine: '883cc V-Twin', registered: 'Jan 2024', nextService: 'Due in 4 weeks', status: 'Active', variant: 0, vin: '1HD1CR3115K***482', inService: false, photo: `${import.meta.env.BASE_URL}assets/images/street_glide_2015.jpg` },
  { id: 'b2', name: 'Fat Boy 114', model: 'Softail Fat Boy', year: 2022, plate: 'B-330-FLW', lastService: 'Jan 18, 2026', daysSince: 109, color: 'Industrial Yellow', engine: '1868cc Milwaukee-Eight', registered: 'Aug 2024', nextService: 'On schedule', status: 'Active', variant: 1, vin: '1HD1YEK19NB***027', inService: false, photo: `${import.meta.env.BASE_URL}assets/images/fat_boy_2009.jpg` },
  { id: 'b3', name: 'Road King', model: 'Touring Road King', year: 2017, plate: 'B-091-RKG', lastService: 'Oct 11, 2025', daysSince: 208, color: 'Twisted Cherry', engine: '1745cc Milwaukee-Eight 107', registered: 'Mar 2025', nextService: 'Overdue', status: 'In service', variant: 2, vin: '1HD1FRM19HB***311', inService: true, photo: `${import.meta.env.BASE_URL}assets/images/road_king_army.jpg` },
];

export const member = {
  name: 'Teutzu Neagu',
  handle: '@teutzu',
  photo: `${import.meta.env.BASE_URL}assets/images/profile_teutzu.jpg`,
  initials: 'TN',
  city: 'București',
  memberSince: 'March 2024',
  cardNumber: '4911 0072 ····',
  tier: 'YZYFLOW MEMBER',
  status: 'ACTIVE',
  renewsOn: 'Mar 14, 2027',
  nextCharge: '€18.00',
  monthly: '€18',
  rides: 47,
  services: 14,
  rallies: 6,
  perks: [
    '15% off parts & equipment',
    'Priority service booking',
    'Free seasonal inspection',
    'Members-only rides & rallies',
    'Exclusive Thunderbike drops',
  ],
};

export const events = [
  { id: 'e1', title: 'Spring Opening Ride', date: 'May 16', time: '09:00', location: 'Yzyflow HQ → Sinaia', going: 84, dist: '184 km', tag: 'Group ride', variant: 0, photo: `${import.meta.env.BASE_URL}assets/images/road_king_army.jpg` },
  { id: 'e2', title: 'Bike Night & Burgers', date: 'May 22', time: '19:30', location: 'Șos. Odăii 243', going: 120, dist: 'On-site', tag: 'Meetup', variant: 3, photo: `${import.meta.env.BASE_URL}assets/images/street_glide_2015.jpg` },
  { id: 'e3', title: 'Transfăgărășan Rally', date: 'Jun 07', time: '07:00', location: 'București → Bâlea Lac', going: 56, dist: '480 km', tag: 'Rally', variant: 2, photo: `${import.meta.env.BASE_URL}assets/images/ultra_cvo_2016.jpg` },
  { id: 'e4', title: 'Custom Showdown', date: 'Jun 21', time: '12:00', location: 'Yzyflow Yard', going: 230, dist: 'On-site', tag: 'Show', variant: 1, photo: `${import.meta.env.BASE_URL}assets/images/fat_boy_2009.jpg` },
];

export const news = [
  { id: 'n1', cat: 'Build', title: 'Fat Boy 2009 — full cosmetic restoration', excerpt: 'Stripped, repainted, rechromed. Six months of work. See the before/after.', date: 'May 03', read: '4 min', variant: 2, photo: `${import.meta.env.BASE_URL}assets/images/fat_boy_2009_after.jpg` },
  { id: 'n2', cat: 'Build', title: 'Ultra Limited CVO 2016 — top-down rebuild', excerpt: 'Owner brought it in tired. We sent it home looking better than the showroom.', date: 'Apr 28', read: '5 min', variant: 1, photo: `${import.meta.env.BASE_URL}assets/images/ultra_cvo_2016_after.jpg` },
  { id: 'n3', cat: 'Drop', title: 'Street Glide 2015 just landed at the shop', excerpt: 'Murdered out, low miles, ready to ride. Members get first look.', date: 'Apr 21', read: '2 min', variant: 0, photo: `${import.meta.env.BASE_URL}assets/images/street_glide_2015.jpg` },
];

export const serviceHistory = [
  { id: 's1', date: 'Apr 02 2026', title: '20,000 km full service', tech: 'Florin', cost: '1,840 lei', status: 'Completed', items: ['Oil & filter', 'Primary fluid', 'Brake fluid', 'Diagnostic'] },
  { id: 's2', date: 'Nov 14 2025', title: 'Stage 1 — Air & exhaust', tech: 'Yzy', cost: '6,420 lei', status: 'Completed', items: ['Vance & Hines exhaust', "Screamin' Eagle filter", 'ECM tune'] },
  { id: 's3', date: 'Aug 28 2025', title: 'Front tire replacement', tech: 'Florin', cost: '1,210 lei', status: 'Completed', items: ['Michelin Commander III', 'Balance & alignment'] },
  { id: 's4', date: 'May 12 2025', title: 'Spring inspection (free)', tech: 'Yzy', cost: '0 lei', status: 'Completed', items: ['Brake check', 'Belt tension', 'Lights & signals'] },
];

export const serviceTypes = [
  { id: 't1', label: 'Maintenance', sub: 'Oil, fluids, inspection', price: 'from 480 lei', icon: 'wrench' },
  { id: 't2', label: 'Diagnostic', sub: 'Engine, electrical', price: '320 lei', icon: 'speedo' },
  { id: 't3', label: 'Custom build', sub: 'Stage tune, paint, parts', price: 'on quote', icon: 'star' },
  { id: 't4', label: 'Tires & brakes', sub: 'Replace, balance', price: 'from 240 lei', icon: 'road' },
  { id: 't5', label: 'Pre-season check', sub: 'Free for members', price: 'Free', icon: 'shield' },
];

export const rides = [
  { id: 'r1', title: 'Bucharest Loop', km: 84, time: '2h 40m', riders: 12, lead: 'Cristi Z.', tag: 'Sunday cruise' },
  { id: 'r2', title: 'Carpathian Sprint', km: 312, time: '7h 10m', riders: 8, lead: 'Florin A.', tag: 'Long route' },
  { id: 'r3', title: 'Coastal Run — Mamaia', km: 248, time: '5h 30m', riders: 22, lead: 'Yzy', tag: 'Weekend' },
];

export const directory = [
  { id: 'm1', name: 'Cristian Z.', city: 'București', bike: 'Street Bob', since: '2023', initials: 'CZ', online: true },
  { id: 'm2', name: 'Florin A.', city: 'Brașov', bike: 'Heritage Classic', since: '2022', initials: 'FA', online: true },
  { id: 'm3', name: 'Stefan M.', city: 'Cluj', bike: 'Iron 883', since: '2024', initials: 'SM', online: false },
  { id: 'm4', name: 'Dragos P.', city: 'Timișoara', bike: 'Fat Boy 114', since: '2024', initials: 'DP', online: false },
  { id: 'm5', name: 'Oleksandr K.', city: 'București', bike: 'Sportster S', since: '2024', initials: 'OK', online: true },
  { id: 'm6', name: 'Laur D.', city: 'Iași', bike: 'Road King', since: '2023', initials: 'LD', online: false },
];
