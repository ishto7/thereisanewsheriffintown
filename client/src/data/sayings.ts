// Collection of leadership-related sayings and proverbs from around the world
export const sayings = [
  {
    quote: "There's a new sheriff in town",
    origin: "American Old West",
    meaning: "A new authority figure has arrived, bringing significant changes",
    context: "Originally used literally in the American frontier when a new law enforcement officer arrived, now used metaphorically for any new leadership.",
    variants: ["New boss in town", "New kid on the block"],
    usage: "Business, Sports, Politics",
    image: "https://images.unsplash.com/photo-1551887373-11dceb093836",
    regions: ["North America"]
  },
  {
    quote: "新官上任三把火",
    origin: "Chinese Proverb",
    meaning: "A new official brings three fires - meaning new leaders often start with dramatic changes",
    context: "Traditional Chinese saying referring to how new officials typically implement three major changes upon taking office",
    variants: ["新官上任", "新官上任好做事"],
    usage: "Government, Business, Education",
    image: "https://images.unsplash.com/photo-1533062618053-d51e617307ec",
    regions: ["East Asia"]
  },
  {
    quote: "Un nuevo rey, una nueva ley",
    origin: "Spanish Proverb",
    meaning: "New king, new law - similar to new sheriff, emphasizing how new leadership brings new rules",
    context: "Dating back to medieval Spain, reflects how leadership changes often bring policy changes",
    variants: ["Nuevo jefe, nuevas reglas", "Nuevo líder, nuevo camino"],
    usage: "Politics, Corporate, Social",
    image: "https://images.unsplash.com/photo-1583784561105-95c2bfaf0aa8",
    regions: ["Europe", "Latin America"]
  },
  // Adding many more proverbs from different cultures
  {
    quote: "The broom is new, so it sweeps clean",
    origin: "African Proverb",
    meaning: "New leaders start with enthusiasm and vigor",
    context: "Common across many African cultures, emphasizing how new leadership brings initial energy",
    variants: ["New broom sweeps clean", "Fresh start, clean sweep"],
    usage: "Leadership, Community, Governance",
    image: "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28",
    regions: ["Africa"]
  },
  {
    quote: "नए राजा, नए कानून",
    origin: "Hindi Proverb",
    meaning: "New king, new laws - reflecting leadership change impact",
    context: "Traditional Indian wisdom about leadership transitions",
    variants: ["नया नेता, नई दिशा", "नई सोच, नया विकास"],
    usage: "Politics, Business, Society",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c",
    regions: ["South Asia"]
  },
  // Continue with more proverbs...
  {
    quote: "Yeni süpürge iyi süpürür",
    origin: "Turkish Proverb",
    meaning: "A new broom sweeps well - similar to the English version",
    context: "Traditional Turkish saying about new leadership",
    variants: ["Yeni yönetici, yeni düzen", "Yeni kaptan, yeni rota"],
    usage: "Business, Government, Education",
    image: "https://images.unsplash.com/photo-1559066653-edfd1e4d9845",
    regions: ["Middle East"]
  },
  // Add at least 24 more proverbs here...
];

export const regions = [
  "North America",
  "South America",
  "Europe",
  "Africa",
  "Asia",
  "Middle East",
  "Oceania"
] as const;

export type SayingRegion = typeof regions[number];

// Adding usage contexts for better organization
export const usageContexts = [
  "Business",
  "Politics",
  "Education",
  "Sports",
  "Technology",
  "Social Movements",
  "Cultural Change",
  "Community Leadership"
] as const;

export type UsageContext = typeof usageContexts[number];