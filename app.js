// ===== STORE DATA =====
const STORES = [
  // LEVEL 1
  { id: 'zara', name: 'Zara', cat: 'fashion', floor: 1, unit: 'A1', icon: '👗', color: '#374151',
    desc: 'International fashion retailer offering trendy clothing, accessories, and shoes for men, women, and children.',
    hours: ['Mon–Thu', '10:00 AM – 9:00 PM', 'Fri–Sat', '10:00 AM – 10:00 PM', 'Sunday', '11:00 AM – 8:00 PM'],
    phone: '(555) 201-1100', mapX: 120, mapY: 180, mapW: 90, mapH: 70 },
  { id: 'hm', name: 'H&M', cat: 'fashion', floor: 1, unit: 'A2', icon: '🛍️', color: '#dc2626',
    desc: 'Affordable fashion for the whole family. Wide selection of clothing, accessories, and home goods.',
    hours: ['Mon–Thu', '10:00 AM – 9:00 PM', 'Fri–Sat', '10:00 AM – 10:00 PM', 'Sunday', '11:00 AM – 8:00 PM'],
    phone: '(555) 201-1200', mapX: 220, mapY: 180, mapW: 90, mapH: 70 },
  { id: 'nike', name: 'Nike', cat: 'fashion', floor: 1, unit: 'B1', icon: '👟', color: '#111827',
    desc: 'Flagship Nike store featuring footwear, apparel, and equipment for every sport and activity.',
    hours: ['Mon–Sun', '10:00 AM – 9:00 PM'],
    phone: '(555) 201-1300', mapX: 120, mapY: 280, mapW: 90, mapH: 70 },
  { id: 'apple', name: 'Apple Store', cat: 'tech', floor: 1, unit: 'B2', icon: '🍎', color: '#6b7280',
    desc: 'Experience the full range of Apple products including iPhone, iPad, Mac, and Apple Watch with expert Genius Bar support.',
    hours: ['Mon–Sun', '10:00 AM – 9:00 PM'],
    phone: '(555) 201-2700', mapX: 220, mapY: 280, mapW: 90, mapH: 70 },
  { id: 'mcdonalds', name: "McDonald's", cat: 'food', floor: 1, unit: 'FC1', icon: '🍔', color: '#dc2626',
    desc: "America's favorite fast food restaurant with classic burgers, fries, McCafé beverages, and breakfast items.",
    hours: ['Mon–Sun', '7:00 AM – 10:00 PM'],
    phone: '(555) 201-3100', mapX: 450, mapY: 300, mapW: 80, mapH: 60 },
  { id: 'subway', name: 'Subway', cat: 'food', floor: 1, unit: 'FC2', icon: '🥖', color: '#16a34a',
    desc: 'Build your perfect sub with fresh ingredients. Eat Fresh!',
    hours: ['Mon–Sun', '8:00 AM – 9:00 PM'],
    phone: '(555) 201-3200', mapX: 540, mapY: 300, mapW: 80, mapH: 60 },
  { id: 'atm', name: 'ATM — Chase Bank', cat: 'services', floor: 1, unit: 'SVC-1', icon: '🏧', color: '#1e40af',
    desc: 'Chase Bank ATM available 24/7 for cash withdrawals and deposits.',
    hours: ['Mon–Sun', 'Open 24 Hours'],
    phone: null, mapX: 360, mapY: 220, mapW: 50, mapH: 40 },
  { id: 'info-desk', name: 'Information Desk', cat: 'services', floor: 1, unit: 'CTR', icon: 'ℹ️', color: '#0891b2',
    desc: 'Our friendly staff can help you find stores, answer questions about mall services, and provide accessibility assistance.',
    hours: ['Mon–Sun', '10:00 AM – 9:00 PM'],
    phone: '(555) 201-0000', mapX: 355, mapY: 300, mapW: 50, mapH: 40 },
  { id: 'restroom-1', name: 'Restrooms (L1)', cat: 'services', floor: 1, unit: 'RST-1', icon: '🚻', color: '#7c3aed',
    desc: 'Family restrooms with accessible facilities and baby changing stations.',
    hours: ['Mon–Sun', 'Open During Mall Hours'],
    phone: null, mapX: 460, mapY: 180, mapW: 60, mapH: 40 },
  { id: 'elevator-1', name: 'Elevator / Stairs', cat: 'services', floor: 1, unit: 'ELV-1', icon: '🛗', color: '#4b5563',
    desc: 'Elevator and staircase access to all mall levels. Elevator is ADA accessible.',
    hours: ['Mon–Sun', 'Open During Mall Hours'],
    phone: null, mapX: 355, mapY: 160, mapW: 50, mapH: 40 },

  // LEVEL 2
  { id: 'gap', name: 'Gap', cat: 'fashion', floor: 2, unit: 'C1', icon: '👕', color: '#1d4ed8',
    desc: 'Classic American style for the whole family — denim, khakis, tees, and more.',
    hours: ['Mon–Thu', '10:00 AM – 9:00 PM', 'Fri–Sat', '10:00 AM – 10:00 PM', 'Sunday', '11:00 AM – 8:00 PM'],
    phone: '(555) 201-1400', mapX: 120, mapY: 180, mapW: 90, mapH: 70 },
  { id: 'victorias-secret', name: "Victoria's Secret", cat: 'fashion', floor: 2, unit: 'C2', icon: '🌸', color: '#be185d',
    desc: 'Lingerie, beauty products, and sleepwear from the world\'s leading intimates brand.',
    hours: ['Mon–Thu', '10:00 AM – 9:00 PM', 'Fri–Sat', '10:00 AM – 10:00 PM', 'Sunday', '11:00 AM – 8:00 PM'],
    phone: '(555) 201-1500', mapX: 220, mapY: 180, mapW: 90, mapH: 70 },
  { id: 'sephora', name: 'Sephora', cat: 'beauty', floor: 2, unit: 'D1', icon: '💄', color: '#991b1b',
    desc: 'Curated collection of prestige beauty products from top brands and exclusive collections.',
    hours: ['Mon–Thu', '10:00 AM – 9:00 PM', 'Fri–Sat', '10:00 AM – 10:00 PM', 'Sunday', '11:00 AM – 8:00 PM'],
    phone: '(555) 201-2100', mapX: 120, mapY: 280, mapW: 90, mapH: 70 },
  { id: 'bath-body', name: 'Bath & Body Works', cat: 'beauty', floor: 2, unit: 'D2', icon: '🛁', color: '#b45309',
    desc: 'Fragrant body care, candles, and home fragrance products for every season.',
    hours: ['Mon–Thu', '10:00 AM – 9:00 PM', 'Fri–Sat', '10:00 AM – 10:00 PM', 'Sunday', '11:00 AM – 8:00 PM'],
    phone: '(555) 201-2200', mapX: 220, mapY: 280, mapW: 90, mapH: 70 },
  { id: 'best-buy', name: 'Best Buy', cat: 'tech', floor: 2, unit: 'E1', icon: '📺', color: '#1d4ed8',
    desc: 'Electronics megastore offering TVs, computers, phones, gaming, and smart home devices.',
    hours: ['Mon–Sat', '10:00 AM – 9:00 PM', 'Sunday', '11:00 AM – 8:00 PM'],
    phone: '(555) 201-2800', mapX: 350, mapY: 180, mapW: 110, mapH: 80 },
  { id: 'starbucks-2', name: 'Starbucks', cat: 'food', floor: 2, unit: 'FC3', icon: '☕', color: '#065f46',
    desc: 'Your favorite coffee shop with seasonal beverages, pastries, and sandwiches.',
    hours: ['Mon–Sun', '7:00 AM – 9:00 PM'],
    phone: '(555) 201-3400', mapX: 450, mapY: 280, mapW: 80, mapH: 60 },
  { id: 'chipotle', name: 'Chipotle', cat: 'food', floor: 2, unit: 'FC4', icon: '🌯', color: '#9a3412',
    desc: 'Mexican-inspired burritos, tacos, bowls, and salads made with fresh ingredients.',
    hours: ['Mon–Sun', '10:45 AM – 10:00 PM'],
    phone: '(555) 201-3500', mapX: 540, mapY: 280, mapW: 80, mapH: 60 },
  { id: 'restroom-2', name: 'Restrooms (L2)', cat: 'services', floor: 2, unit: 'RST-2', icon: '🚻', color: '#7c3aed',
    desc: 'Family restrooms with accessible facilities and baby changing stations.',
    hours: ['Mon–Sun', 'Open During Mall Hours'],
    phone: null, mapX: 460, mapY: 180, mapW: 60, mapH: 40 },
  { id: 'elevator-2', name: 'Elevator / Stairs', cat: 'services', floor: 2, unit: 'ELV-2', icon: '🛗', color: '#4b5563',
    desc: 'Elevator and staircase access to all mall levels. Elevator is ADA accessible.',
    hours: ['Mon–Sun', 'Open During Mall Hours'],
    phone: null, mapX: 355, mapY: 160, mapW: 50, mapH: 40 },

  // LEVEL 3
  { id: 'cinema', name: 'AMC Cinema 12', cat: 'entertainment', floor: 3, unit: 'ENT-1', icon: '🎬', color: '#b91c1c',
    desc: 'Catch the latest blockbusters across 12 screens including IMAX, Dolby Atmos, and premium recliner seating.',
    hours: ['Mon–Sun', '11:00 AM – 11:00 PM'],
    phone: '(555) 201-4100', mapX: 100, mapY: 160, mapW: 200, mapH: 120 },
  { id: 'bowling', name: 'Lucky Strike Bowling', cat: 'entertainment', floor: 3, unit: 'ENT-2', icon: '🎳', color: '#7c3aed',
    desc: '24-lane luxury bowling alley with full bar, restaurant, and arcade games. Perfect for groups and parties.',
    hours: ['Mon–Thu', '12:00 PM – 11:00 PM', 'Fri–Sat', '11:00 AM – 1:00 AM', 'Sunday', '12:00 PM – 10:00 PM'],
    phone: '(555) 201-4200', mapX: 320, mapY: 160, mapW: 140, mapH: 120 },
  { id: 'arcade', name: 'Dave & Busters', cat: 'entertainment', floor: 3, unit: 'ENT-3', icon: '🕹️', color: '#6d28d9',
    desc: 'Over 200 arcade games, virtual reality experiences, and a full-service restaurant with sports bar.',
    hours: ['Mon–Thu', '11:00 AM – 12:00 AM', 'Fri–Sat', '11:00 AM – 2:00 AM', 'Sunday', '11:00 AM – 11:00 PM'],
    phone: '(555) 201-4300', mapX: 100, mapY: 300, mapW: 140, mapH: 100 },
  { id: 'pf-chang', name: "P.F. Chang's", cat: 'food', floor: 3, unit: 'RST-1', icon: '🥢', color: '#dc2626',
    desc: 'Asian-inspired cuisine featuring wok-tossed dishes, sushi, and signature cocktails in an elegant setting.',
    hours: ['Mon–Thu', '11:30 AM – 10:00 PM', 'Fri–Sat', '11:30 AM – 11:00 PM', 'Sunday', '12:00 PM – 9:00 PM'],
    phone: '(555) 201-3600', mapX: 470, mapY: 160, mapW: 100, mapH: 80 },
  { id: 'cheesecake', name: 'The Cheesecake Factory', cat: 'food', floor: 3, unit: 'RST-2', icon: '🎂', color: '#b45309',
    desc: 'Extensive menu with over 250 dishes plus 50 legendary cheesecakes. Great for families and celebrations.',
    hours: ['Mon–Thu', '11:00 AM – 10:00 PM', 'Fri–Sat', '11:00 AM – 11:00 PM', 'Sunday', '10:00 AM – 10:00 PM'],
    phone: '(555) 201-3700', mapX: 470, mapY: 260, mapW: 100, mapH: 80 },
  { id: 'escape-room', name: 'Escape Zone', cat: 'entertainment', floor: 3, unit: 'ENT-4', icon: '🔐', color: '#1e3a5f',
    desc: 'Immersive escape room experiences with 8 different themed rooms for groups of 2–8 players.',
    hours: ['Mon–Fri', '12:00 PM – 10:00 PM', 'Sat–Sun', '10:00 AM – 11:00 PM'],
    phone: '(555) 201-4400', mapX: 260, mapY: 300, mapW: 100, mapH: 100 },
  { id: 'restroom-3', name: 'Restrooms (L3)', cat: 'services', floor: 3, unit: 'RST-3', icon: '🚻', color: '#7c3aed',
    desc: 'Family restrooms with accessible facilities and baby changing stations.',
    hours: ['Mon–Sun', 'Open During Mall Hours'],
    phone: null, mapX: 380, mapY: 300, mapW: 60, mapH: 40 },
  { id: 'elevator-3', name: 'Elevator / Stairs', cat: 'services', floor: 3, unit: 'ELV-3', icon: '🛗', color: '#4b5563',
    desc: 'Elevator and staircase access to all mall levels.',
    hours: ['Mon–Sun', 'Open During Mall Hours'],
    phone: null, mapX: 375, mapY: 180, mapW: 60, mapH: 40 },

  // Extra stores Level 1
  { id: 'food-court', name: 'Food Court', cat: 'food', floor: 1, unit: 'CTR', icon: '🍕', color: '#d97706',
    desc: 'Central food court on Level 1 with 10+ fast food and casual dining options.',
    hours: ['Mon–Sun', '10:00 AM – 9:00 PM'],
    phone: null, mapX: 440, mapY: 250, mapW: 200, mapH: 130 },
  { id: 'parking', name: 'Parking — P1 & P2', cat: 'services', floor: 1, unit: 'PARK', icon: '🅿️', color: '#334155',
    desc: 'Main parking garage with 2,400 spaces on 4 levels. Electric vehicle charging stations available on P1.',
    hours: ['Mon–Sun', 'Open 24 Hours'],
    phone: null, mapX: 100, mapY: 380, mapW: 500, mapH: 50 },
  { id: 'hollister', name: 'Hollister Co.', cat: 'fashion', floor: 1, unit: 'A3', icon: '🌊', color: '#0c4a6e',
    desc: 'California-inspired casual fashion for teens and young adults — jeans, tees, hoodies, and swimwear.',
    hours: ['Mon–Thu', '10:00 AM – 9:00 PM', 'Fri–Sat', '10:00 AM – 10:00 PM', 'Sunday', '11:00 AM – 8:00 PM'],
    phone: '(555) 201-1600', mapX: 320, mapY: 180, mapW: 80, mapH: 70 },
  { id: 'starbucks', name: 'Starbucks', cat: 'food', floor: 1, unit: 'FC0', icon: '☕', color: '#065f46',
    desc: 'Your favorite coffee shop right at the main entrance. Seasonal beverages, pastries, and sandwiches.',
    hours: ['Mon–Sun', '7:00 AM – 9:00 PM'],
    phone: '(555) 201-3000', mapX: 120, mapY: 380, mapW: 70, mapH: 50 },

  // Extra Level 2
  { id: 'nail-bar', name: 'The Nail Bar', cat: 'beauty', floor: 2, unit: 'D3', icon: '💅', color: '#db2777',
    desc: 'Premium nail salon offering manicures, pedicures, gel nails, and nail art by expert technicians.',
    hours: ['Mon–Sat', '10:00 AM – 8:00 PM', 'Sunday', '11:00 AM – 6:00 PM'],
    phone: '(555) 201-2300', mapX: 120, mapY: 370, mapW: 90, mapH: 60 },
  { id: 'phone-repair', name: 'uBreakiFix', cat: 'tech', floor: 2, unit: 'E2', icon: '🔧', color: '#0369a1',
    desc: 'Same-day phone, tablet, and computer repair. Screen replacements, battery swaps, and water damage repair.',
    hours: ['Mon–Sat', '10:00 AM – 8:00 PM', 'Sunday', '12:00 PM – 6:00 PM'],
    phone: '(555) 201-2900', mapX: 470, mapY: 180, mapW: 100, mapH: 70 },
  { id: 'lululemon', name: 'lululemon', cat: 'fashion', floor: 2, unit: 'C3', icon: '🧘', color: '#312e81',
    desc: 'High-performance athleisure clothing for yoga, running, training, and everyday life.',
    hours: ['Mon–Thu', '10:00 AM – 9:00 PM', 'Fri–Sat', '10:00 AM – 10:00 PM', 'Sunday', '11:00 AM – 8:00 PM'],
    phone: '(555) 201-1700', mapX: 320, mapY: 280, mapW: 90, mapH: 70 },
];

// ===== ROUTES (simplified step-by-step directions from Main Entrance) =====
const ROUTES = {
  // Floor 1
  'zara':       { steps: ['Walk straight ahead from the main entrance', 'Turn left at the fountain', 'Zara is on your left — Unit A1'], path: 'M355,320 L260,320 L190,250 L160,215' },
  'hm':         { steps: ['Walk straight ahead from the main entrance', 'Turn left at the fountain', 'H&M is just past Zara on your left — Unit A2'], path: 'M355,320 L260,320 L260,215' },
  'nike':       { steps: ['Walk straight ahead from the main entrance', 'Turn left at the fountain', 'Continue past Zara', 'Nike is around the corner — Unit B1'], path: 'M355,320 L260,320 L190,320 L155,315' },
  'apple':      { steps: ['Walk straight ahead from the main entrance', 'Turn left at the fountain', 'Continue along the main corridor', 'Apple Store is on your left — Unit B2'], path: 'M355,320 L260,320 L260,315' },
  'food-court': { steps: ['Walk straight from the main entrance', 'The Food Court is ahead on the right side', 'Follow the signs to the food court'], path: 'M355,320 L420,320 L520,320' },
  'mcdonalds':  { steps: ['Walk straight from the main entrance', 'Enter the Food Court area on your right', "McDonald's is at the front of the Food Court"], path: 'M355,320 L420,320 L490,320' },
  'subway':     { steps: ['Walk straight from the main entrance', 'Enter the Food Court area', 'Subway is next to McDonald\'s'], path: 'M355,320 L420,320 L560,320' },
  'starbucks':  { steps: ['Turn right from the main entrance', 'Starbucks is immediately on your right near the entrance'], path: 'M355,320 L300,390 L160,400' },
  'hollister':  { steps: ['Walk straight from the main entrance', 'Hollister Co. is on the right side of the main corridor — Unit A3'], path: 'M355,320 L340,215' },
  'atm':        { steps: ['From the main entrance, walk straight ahead', 'The ATM is on your right before the food court'], path: 'M355,320 L380,240' },
  'restroom-1': { steps: ['Walk straight from the main entrance', 'Turn right at the central kiosk', 'Restrooms are on the left side near the food court — Unit RST-1'], path: 'M355,320 L420,250 L490,200' },
  'elevator-1': { steps: ['The elevator is located in the center of the mall', 'Walk straight and you\'ll see it on your right'], path: 'M355,320 L380,200' },
  'parking':    { steps: ['Exit through the main entrance', 'Parking is available on both sides of the mall', 'P1 is to your left, P2 is to your right'], path: 'M355,320 L355,380 L300,395' },
  'info-desk':  { steps: ['Walk straight from the main entrance', 'The Information Desk is in the center court'], path: 'M355,320 L380,320' },

  // Floor 2 (require elevator)
  'gap':            { steps: ['Take the elevator or stairs to Level 2', 'Turn left from the elevator', 'Gap is at the end of the corridor — Unit C1'], path: null, floor: 2, floorPath: 'M375,200 L310,200 L155,215' },
  'victorias-secret': { steps: ['Take the elevator or stairs to Level 2', 'Turn left from the elevator', "Victoria's Secret is just past Gap — Unit C2"], path: null, floor: 2, floorPath: 'M375,200 L260,215' },
  'sephora':        { steps: ['Take the elevator or stairs to Level 2', 'Turn left and continue to the lower corridor', 'Sephora is on your left — Unit D1'], path: null, floor: 2, floorPath: 'M375,200 L310,200 L155,315' },
  'bath-body':      { steps: ['Take the elevator or stairs to Level 2', 'Turn left and continue to the lower corridor', 'Bath & Body Works is next to Sephora — Unit D2'], path: null, floor: 2, floorPath: 'M375,200 L260,315' },
  'best-buy':       { steps: ['Take the elevator or stairs to Level 2', 'Turn right from the elevator', 'Best Buy is the large store on your right — Unit E1'], path: null, floor: 2, floorPath: 'M375,200 L400,215' },
  'starbucks-2':    { steps: ['Take the elevator to Level 2', 'Turn right and continue to the food area', 'Starbucks is on your right'], path: null, floor: 2, floorPath: 'M375,200 L420,200 L490,310' },
  'chipotle':       { steps: ['Take the elevator to Level 2', 'Continue to the food area on the right', 'Chipotle is next to Starbucks'], path: null, floor: 2, floorPath: 'M375,200 L420,200 L580,310' },
  'lululemon':      { steps: ['Take the elevator to Level 2', 'Turn left from the elevator', 'lululemon is in the C wing — Unit C3'], path: null, floor: 2, floorPath: 'M375,200 L355,315' },
  'nail-bar':       { steps: ['Take the elevator to Level 2', 'Turn left and continue past the D wing', 'The Nail Bar is at the end — Unit D3'], path: null, floor: 2, floorPath: 'M375,200 L310,200 L155,390' },
  'phone-repair':   { steps: ['Take the elevator to Level 2', 'Turn right toward the tech stores', 'uBreakiFix is past Best Buy — Unit E2'], path: null, floor: 2, floorPath: 'M375,200 L420,200 L505,215' },
  'restroom-2':     { steps: ['Take the elevator to Level 2', 'Turn right', 'Restrooms are on the left near the food area'], path: null, floor: 2, floorPath: 'M375,200 L420,200 L490,200' },

  // Floor 3 (require elevator)
  'cinema':     { steps: ['Take the elevator or stairs to Level 3', 'Turn left from the elevator', 'AMC Cinema is the large venue straight ahead — Unit ENT-1'], path: null, floor: 3, floorPath: 'M405,220 L360,220 L195,220' },
  'bowling':    { steps: ['Take the elevator or stairs to Level 3', 'Turn right from the elevator', 'Lucky Strike Bowling is on your right — Unit ENT-2'], path: null, floor: 3, floorPath: 'M405,220 L390,220' },
  'arcade':     { steps: ['Take the elevator or stairs to Level 3', 'Turn left and continue past the cinema', "Dave & Buster's is at the far left — Unit ENT-3"], path: null, floor: 3, floorPath: 'M405,220 L360,220 L170,350' },
  'escape-room': { steps: ['Take the elevator to Level 3', 'Walk toward the entertainment zone', 'Escape Zone is in the center — Unit ENT-4'], path: null, floor: 3, floorPath: 'M405,220 L380,350' },
  'pf-chang':   { steps: ['Take the elevator to Level 3', 'Turn right toward the dining area', "P.F. Chang's is at the far right — Unit RST-1"], path: null, floor: 3, floorPath: 'M405,220 L440,200 L520,200' },
  'cheesecake': { steps: ['Take the elevator to Level 3', 'Turn right and continue to the restaurant row', 'The Cheesecake Factory is at the end — Unit RST-2'], path: null, floor: 3, floorPath: 'M405,220 L440,200 L520,300' },
};

// ===== MAP SVG GENERATORS =====
function generateFloor1SVG() {
  return `<svg width="700" height="480" viewBox="0 0 700 480" xmlns="http://www.w3.org/2000/svg" style="display:block;">
  <!-- Background -->
  <rect width="700" height="480" fill="#10181f"/>
  <!-- Outer mall walls -->
  <rect x="80" y="100" width="560" height="330" rx="10" fill="#1a2530" stroke="#334455" stroke-width="2"/>
  <!-- Main Corridor -->
  <rect x="80" y="290" width="560" height="70" fill="#243040" opacity="0.6"/>
  <rect x="80" y="160" width="560" height="60" fill="#243040" opacity="0.3"/>
  <!-- Center Court -->
  <ellipse cx="380" cy="325" rx="80" ry="40" fill="#1e3a4a" stroke="#00b7af" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="380" y="320" text-anchor="middle" fill="#00b7af" font-size="10" font-family="Segoe UI" font-weight="600">CENTER</text>
  <text x="380" y="332" text-anchor="middle" fill="#00b7af" font-size="10" font-family="Segoe UI" font-weight="600">COURT</text>
  <!-- Entrance -->
  <rect x="340" y="425" width="80" height="5" rx="2" fill="#00b7af"/>
  <text x="380" y="448" text-anchor="middle" fill="#00b7af" font-size="11" font-family="Segoe UI" font-weight="700">MAIN ENTRANCE</text>
  <!-- Store Zones will be rendered by JS -->
  ${renderStoreZones(1)}
  <!-- Entrance Arrow -->
  <path d="M380 420 L380 435" stroke="#00b7af" stroke-width="2" stroke-dasharray="3 2"/>
  <!-- YOU ARE HERE marker -->
  <circle cx="380" cy="350" r="14" fill="rgba(0,183,175,0.2)" stroke="#00b7af" stroke-width="2" class="kiosk-marker"/>
  <circle cx="380" cy="350" r="7" fill="#00b7af"/>
  <text x="380" y="370" text-anchor="middle" fill="#00b7af" font-size="9" font-family="Segoe UI" font-weight="700">YOU ARE HERE</text>
  <!-- Floor label -->
  <text x="110" y="130" fill="#7a8fa8" font-size="13" font-family="Segoe UI" font-weight="700" letter-spacing="2">LEVEL 1</text>
  <!-- North indicator -->
  <text x="640" y="130" fill="#7a8fa8" font-size="11" font-family="Segoe UI">N</text>
  <path d="M643 140 L643 120" stroke="#7a8fa8" stroke-width="1.5" marker-end="url(#arrow)"/>
  <defs>
    <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#7a8fa8"/>
    </marker>
  </defs>
</svg>`;
}

function generateFloor2SVG() {
  return `<svg width="700" height="480" viewBox="0 0 700 480" xmlns="http://www.w3.org/2000/svg" style="display:block;">
  <rect width="700" height="480" fill="#10181f"/>
  <rect x="80" y="100" width="560" height="330" rx="10" fill="#1a2530" stroke="#334455" stroke-width="2"/>
  <rect x="80" y="250" width="560" height="60" fill="#243040" opacity="0.5"/>
  <rect x="80" y="155" width="560" height="55" fill="#243040" opacity="0.3"/>
  <text x="110" y="130" fill="#7a8fa8" font-size="13" font-family="Segoe UI" font-weight="700" letter-spacing="2">LEVEL 2</text>
  ${renderStoreZones(2)}
  <defs>
    <marker id="arrow2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#7a8fa8"/>
    </marker>
  </defs>
</svg>`;
}

function generateFloor3SVG() {
  return `<svg width="700" height="480" viewBox="0 0 700 480" xmlns="http://www.w3.org/2000/svg" style="display:block;">
  <rect width="700" height="480" fill="#10181f"/>
  <rect x="80" y="100" width="560" height="330" rx="10" fill="#1a2530" stroke="#334455" stroke-width="2"/>
  <rect x="80" y="145" width="560" height="50" fill="#243040" opacity="0.4"/>
  <text x="110" y="130" fill="#7a8fa8" font-size="13" font-family="Segoe UI" font-weight="700" letter-spacing="2">LEVEL 3 — ENTERTAINMENT</text>
  ${renderStoreZones(3)}
  <defs>
    <marker id="arrow3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#7a8fa8"/>
    </marker>
  </defs>
</svg>`;
}

// Category color mapping
const CAT_COLORS = {
  fashion: '#1d4ed8',
  food: '#d97706',
  tech: '#0891b2',
  entertainment: '#7c3aed',
  beauty: '#db2777',
  services: '#374151',
};

function renderStoreZones(floor) {
  const stores = STORES.filter(s => s.floor === floor);
  return stores.map(s => {
    const fill = CAT_COLORS[s.cat] || '#374151';
    const nameLines = splitLabel(s.name);
    const cx = s.mapX + s.mapW / 2;
    const cy = s.mapY + s.mapH / 2;
    return `<g class="store-zone" data-id="${s.id}" data-floor="${s.floor}">
      <rect class="zone-fill" x="${s.mapX}" y="${s.mapY}" width="${s.mapW}" height="${s.mapH}"
        rx="6" fill="${fill}" opacity="0.75" stroke="${fill}" stroke-width="1.5"/>
      <text x="${cx}" y="${cy - (nameLines.length > 1 ? 6 : 0)}" class="zone-label">${nameLines[0]}</text>
      ${nameLines[1] ? `<text x="${cx}" y="${cy + 10}" class="zone-label">${nameLines[1]}</text>` : ''}
    </g>`;
  }).join('\n');
}

function splitLabel(name) {
  if (name.length <= 10) return [name];
  const mid = name.lastIndexOf(' ', 12);
  if (mid > 0) return [name.slice(0, mid), name.slice(mid + 1)];
  return [name.slice(0, 10), name.slice(10)];
}

// ===== APP STATE =====
let state = {
  activeFloor: 1,
  activeCategory: 'all',
  activeFloorFilter: 'all',
  selectedStore: null,
  searchQuery: '',
  sortAZ: true,
  zoom: 1,
  panX: 0,
  panY: 0,
  isDragging: false,
  lastX: 0,
  lastY: 0,
  routeActive: false,
};

// ===== DOM REFS =====
const $ = id => document.getElementById(id);
const mapViewport = $('mapViewport');
const storeList = $('storeList');
const storeCount = $('storeCount');
const infoDefault = $('infoDefault');
const infoStore = $('infoStore');
const searchInput = $('searchInput');
const searchClear = $('searchClear');
const searchOverlay = $('searchOverlay');
const searchResultsEl = $('searchResults');
const toast = $('toast');

// ===== INIT =====
function init() {
  renderAllFloors();
  renderStoreList();
  setupEventListeners();
  startClock();
  resetMapView();
}

function renderAllFloors() {
  mapViewport.innerHTML = `
    <div class="map-floor visible" id="floor-1">${generateFloor1SVG()}</div>
    <div class="map-floor" id="floor-2">${generateFloor2SVG()}</div>
    <div class="map-floor" id="floor-3">${generateFloor3SVG()}</div>
  `;
  attachZoneListeners();
}

function attachZoneListeners() {
  document.querySelectorAll('.store-zone').forEach(zone => {
    zone.addEventListener('click', e => {
      e.stopPropagation();
      const id = zone.dataset.id;
      selectStore(id);
    });
  });
}

function switchFloor(floor) {
  state.activeFloor = floor;
  document.querySelectorAll('.map-floor').forEach(f => f.classList.remove('visible'));
  $(`floor-${floor}`).classList.add('visible');
  document.querySelectorAll('.floor-tab').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.mapfloor) === floor);
  });
  resetMapView();
}

// ===== STORE LIST =====
function renderStoreList() {
  let stores = STORES.filter(s => {
    if (s.cat === 'services' && s.id.startsWith('restroom')) return false;
    if (s.cat === 'services' && s.id.startsWith('elevator')) return false;
    const catOk = state.activeCategory === 'all' || s.cat === state.activeCategory;
    const floorOk = state.activeFloorFilter === 'all' || s.floor === parseInt(state.activeFloorFilter);
    const searchOk = state.searchQuery === '' ||
      s.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      s.cat.toLowerCase().includes(state.searchQuery.toLowerCase());
    return catOk && floorOk && searchOk;
  });

  if (state.sortAZ) {
    stores.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    stores.sort((a, b) => b.name.localeCompare(a.name));
  }

  storeCount.textContent = `${stores.length} Store${stores.length !== 1 ? 's' : ''}`;

  storeList.innerHTML = stores.map(s => `
    <div class="store-item ${state.selectedStore === s.id ? 'active' : ''}" data-id="${s.id}">
      <div class="store-item-icon" style="background:${CAT_COLORS[s.cat]}22; border:1px solid ${CAT_COLORS[s.cat]}44">
        ${s.icon}
      </div>
      <div class="store-item-info">
        <div class="store-item-name">${highlight(s.name, state.searchQuery)}</div>
        <div class="store-item-meta">
          <span class="store-item-floor">Level ${s.floor} · ${s.unit}</span>
          <span class="store-item-cat">${capitalize(s.cat)}</span>
        </div>
      </div>
      <span class="store-item-arrow">›</span>
    </div>
  `).join('');

  storeList.querySelectorAll('.store-item').forEach(item => {
    item.addEventListener('click', () => selectStore(item.dataset.id));
  });
}

function highlight(text, query) {
  if (!query) return text;
  const re = new RegExp(`(${query})`, 'gi');
  return text.replace(re, '<mark style="background:rgba(0,183,175,0.3);color:#00b7af;border-radius:2px;">$1</mark>');
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ===== SELECT STORE =====
function selectStore(id) {
  const store = STORES.find(s => s.id === id);
  if (!store) return;

  state.selectedStore = id;
  state.routeActive = false;

  // Switch floor if needed
  if (store.floor !== state.activeFloor) {
    switchFloor(store.floor);
  }

  // Highlight zone
  document.querySelectorAll('.store-zone').forEach(z => {
    z.classList.remove('highlighted', 'dimmed');
    if (z.dataset.id === id) {
      z.classList.add('highlighted');
    } else if (z.dataset.floor == store.floor) {
      z.classList.add('dimmed');
    }
  });

  // Pan to store
  panToStore(store);

  // Update sidebar
  renderStoreList();

  // Show store info panel
  showStoreDetail(store);

  // Update zone highlights
  clearRoutes();
}

function panToStore(store) {
  const cx = store.mapX + store.mapW / 2;
  const cy = store.mapY + store.mapH / 2;
  const containerW = document.querySelector('.map-area').offsetWidth;
  const containerH = document.querySelector('.map-area').offsetHeight;
  state.panX = containerW / 2 - cx * state.zoom;
  state.panY = containerH / 2 - cy * state.zoom;
  applyTransform();
}

function showStoreDetail(store) {
  infoDefault.style.display = 'none';
  infoStore.style.display = 'block';

  $('storeDetailIcon').textContent = store.icon;
  $('storeDetailName').textContent = store.name;
  $('storeDetailFloor').textContent = `Level ${store.floor}`;
  $('storeDetailUnit').textContent = store.unit;
  $('storeDetailCat').textContent = capitalize(store.cat);
  $('storeDetailDesc').textContent = store.desc;

  // Hours
  const hoursEl = $('storeDetailHours');
  let hoursHtml = '';
  for (let i = 0; i < store.hours.length; i += 2) {
    hoursHtml += `<span>${store.hours[i]}</span><span>${store.hours[i+1]}</span>`;
  }
  hoursEl.innerHTML = hoursHtml;

  // Contact
  const contactEl = $('storeContactInfo');
  if (store.phone) {
    contactEl.innerHTML = `📞 ${store.phone}`;
    $('storeContact').style.display = 'block';
  } else {
    $('storeContact').style.display = 'none';
  }

  // Route steps
  const route = ROUTES[store.id];
  const stepsEl = $('routeSteps');
  if (route) {
    stepsEl.innerHTML = route.steps.map((step, i) => `
      <div class="route-step">
        <span class="route-step-num">${i + 1}</span>
        <span class="route-step-text">${step}</span>
      </div>
    `).join('');
  } else {
    stepsEl.innerHTML = '<div class="route-step"><span class="route-step-text">Ask at the Information Desk for directions.</span></div>';
  }
}

// ===== BACK BUTTON =====
$('backBtn').addEventListener('click', () => {
  state.selectedStore = null;
  state.routeActive = false;
  infoStore.style.display = 'none';
  infoDefault.style.display = 'block';
  document.querySelectorAll('.store-zone').forEach(z => z.classList.remove('highlighted', 'dimmed', 'on-route'));
  clearRoutes();
  renderStoreList();
});

// ===== GET DIRECTIONS =====
$('getDirectionsBtn').addEventListener('click', () => {
  if (!state.selectedStore) return;
  const route = ROUTES[state.selectedStore];
  if (!route) { showToast('No route available for this location'); return; }

  state.routeActive = true;
  clearRoutes();

  if (route.floor && route.floor !== 1) {
    // Multi-floor: go to store's floor and show path there
    switchFloor(route.floor);
    if (route.floorPath) drawRoute(route.floorPath, route.floor);
    showToast(`Route shown on Level ${route.floor}`);
  } else if (route.path) {
    switchFloor(1);
    drawRoute(route.path, 1);
    showToast('Route shown on map');
  }

  // Highlight store on route
  document.querySelectorAll('.store-zone').forEach(z => {
    if (z.dataset.id === state.selectedStore) z.classList.add('on-route');
  });
});

function drawRoute(pathD, floor) {
  const svgEl = $(`floor-${floor}`).querySelector('svg');
  const existing = svgEl.querySelector('.route-path');
  if (existing) existing.remove();
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', pathD);
  path.setAttribute('class', 'route-path');
  svgEl.appendChild(path);
}

function clearRoutes() {
  document.querySelectorAll('.route-path').forEach(p => p.remove());
}

// ===== QUICK LINKS =====
document.querySelectorAll('.ql-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.store;
    const store = STORES.find(s => s.id === id);
    if (store) selectStore(id);
  });
});

// ===== SEARCH =====
searchInput.addEventListener('input', e => {
  const q = e.target.value.trim();
  state.searchQuery = q;
  searchClear.style.display = q ? 'flex' : 'none';

  if (q.length >= 1) {
    showSearchResults(q);
  } else {
    searchOverlay.style.display = 'none';
  }
  renderStoreList();
});

searchInput.addEventListener('focus', () => {
  if (state.searchQuery.length >= 1) showSearchResults(state.searchQuery);
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  state.searchQuery = '';
  searchClear.style.display = 'none';
  searchOverlay.style.display = 'none';
  renderStoreList();
});

document.addEventListener('click', e => {
  if (!searchOverlay.contains(e.target) && e.target !== searchInput) {
    searchOverlay.style.display = 'none';
  }
});

function showSearchResults(query) {
  const results = STORES.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.cat.toLowerCase().includes(query.toLowerCase()) ||
    (s.desc && s.desc.toLowerCase().includes(query.toLowerCase()))
  ).slice(0, 8);

  if (results.length === 0) {
    searchResultsEl.innerHTML = `<div class="search-no-results">No stores found for "${query}"</div>`;
  } else {
    searchResultsEl.innerHTML = results.map(s => `
      <div class="search-result-item" data-id="${s.id}">
        <div class="sr-icon" style="background:${CAT_COLORS[s.cat]}22">${s.icon}</div>
        <div>
          <div class="sr-name">${highlight(s.name, query)}</div>
          <div class="sr-meta">Level ${s.floor} · ${s.unit} · ${capitalize(s.cat)}</div>
        </div>
      </div>
    `).join('');
    searchResultsEl.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        searchOverlay.style.display = 'none';
        searchInput.blur();
        selectStore(item.dataset.id);
      });
    });
  }
  searchOverlay.style.display = 'block';
}

// ===== CATEGORY TABS =====
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeCategory = btn.dataset.cat;
    renderStoreList();
  });
});

// ===== FLOOR FILTER =====
document.querySelectorAll('.floor-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.floor-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeFloorFilter = btn.dataset.floor;
    renderStoreList();
  });
});

// ===== MAP FLOOR TABS =====
document.querySelectorAll('.floor-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    switchFloor(parseInt(btn.dataset.mapfloor));
  });
});

// ===== SORT =====
$('sortBtn').addEventListener('click', () => {
  state.sortAZ = !state.sortAZ;
  $('sortBtn').textContent = state.sortAZ ? 'A–Z ▾' : 'Z–A ▾';
  renderStoreList();
});

// ===== ZOOM & PAN =====
function applyTransform(animate) {
  mapViewport.style.transition = animate ? 'transform 0.3s ease' : 'none';
  mapViewport.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`;
}

function resetMapView() {
  const area = document.querySelector('.map-area');
  const W = area.offsetWidth;
  const H = area.offsetHeight;
  state.zoom = Math.min(W / 700, H / 480) * 0.92;
  state.panX = (W - 700 * state.zoom) / 2;
  state.panY = (H - 480 * state.zoom) / 2;
  applyTransform(true);
}

$('zoomIn').addEventListener('click', () => {
  state.zoom = Math.min(state.zoom * 1.3, 4);
  applyTransform(true);
});
$('zoomOut').addEventListener('click', () => {
  state.zoom = Math.max(state.zoom / 1.3, 0.4);
  applyTransform(true);
});
$('zoomReset').addEventListener('click', resetMapView);

// Mouse pan
const mapContainer = $('mapContainer');
mapContainer.addEventListener('mousedown', e => {
  if (e.target.closest('.store-zone')) return;
  state.isDragging = true;
  state.lastX = e.clientX;
  state.lastY = e.clientY;
  mapContainer.classList.add('dragging');
});
document.addEventListener('mousemove', e => {
  if (!state.isDragging) return;
  state.panX += e.clientX - state.lastX;
  state.panY += e.clientY - state.lastY;
  state.lastX = e.clientX;
  state.lastY = e.clientY;
  applyTransform();
});
document.addEventListener('mouseup', () => {
  state.isDragging = false;
  mapContainer.classList.remove('dragging');
});

// Touch pan
let touchStartX = 0, touchStartY = 0, startPanX = 0, startPanY = 0;
let pinchStartDist = 0, pinchStartZoom = 0;

mapContainer.addEventListener('touchstart', e => {
  if (e.touches.length === 1) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    startPanX = state.panX;
    startPanY = state.panY;
  } else if (e.touches.length === 2) {
    pinchStartDist = Math.hypot(
      e.touches[1].clientX - e.touches[0].clientX,
      e.touches[1].clientY - e.touches[0].clientY
    );
    pinchStartZoom = state.zoom;
  }
}, { passive: true });

mapContainer.addEventListener('touchmove', e => {
  if (e.touches.length === 1 && !e.target.closest('.store-zone')) {
    state.panX = startPanX + e.touches[0].clientX - touchStartX;
    state.panY = startPanY + e.touches[0].clientY - touchStartY;
    applyTransform();
  } else if (e.touches.length === 2) {
    const dist = Math.hypot(
      e.touches[1].clientX - e.touches[0].clientX,
      e.touches[1].clientY - e.touches[0].clientY
    );
    state.zoom = Math.min(Math.max(pinchStartZoom * (dist / pinchStartDist), 0.4), 4);
    applyTransform();
  }
}, { passive: true });

// Scroll zoom
mapContainer.addEventListener('wheel', e => {
  e.preventDefault();
  const delta = e.deltaY > 0 ? 0.9 : 1.1;
  state.zoom = Math.min(Math.max(state.zoom * delta, 0.4), 4);
  applyTransform();
}, { passive: false });

// ===== CLOCK =====
function startClock() {
  function tick() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    $('clockTime').textContent = `${h}:${m}`;
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    $('clockDate').textContent = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;
  }
  tick();
  setInterval(tick, 10000);
}

// ===== TOAST =====
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== TOUCH RIPPLE =====
document.addEventListener('click', e => {
  const ripple = document.createElement('div');
  ripple.className = 'touch-ripple';
  ripple.style.left = e.clientX + 'px';
  ripple.style.top = e.clientY + 'px';
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

// ===== EVENT LISTENERS =====
function setupEventListeners() {
  window.addEventListener('resize', resetMapView);
}

// ===== START =====
init();
