export const sayings = [
  {
    quote: "There's a new sheriff in town",
    origin: "American Old West",
    meaning: "A new authority figure has arrived, bringing significant changes",
    context: "Originally used literally in the American frontier when a new law enforcement officer arrived, now used metaphorically for any new leadership.",
    variants: ["New boss in town", "New kid on the block"],
    usage: "Business, Sports, Politics"
  },
  {
    quote: "新官上任三把火",
    origin: "Chinese Proverb",
    meaning: "A new official brings three fires - meaning new leaders often start with dramatic changes",
    context: "Traditional Chinese saying referring to how new officials typically implement three major changes upon taking office",
    variants: ["新官上任", "新官上任好做事"],
    usage: "Government, Business, Education"
  },
  {
    quote: "Un nuevo rey, una nueva ley",
    origin: "Spanish Proverb",
    meaning: "New king, new law - similar to new sheriff, emphasizing how new leadership brings new rules",
    context: "Dating back to medieval Spain, reflects how leadership changes often bring policy changes",
    variants: ["Nuevo jefe, nuevas reglas", "Nuevo líder, nuevo camino"],
    usage: "Politics, Corporate, Social"
  },
  {
    quote: "Nouveau roi, nouvelle loi",
    origin: "French Saying",
    meaning: "New king, new law - the French equivalent emphasizing change with new leadership",
    context: "Historically used in French monarchy, now applied broadly to leadership transitions",
    variants: ["Nouveau chef, nouvelles règles", "Nouveau patron, nouvelle direction"],
    usage: "Business, Government, Society"
  },
  {
    quote: "Ein neuer Besen kehrt gut",
    origin: "German Proverb",
    meaning: "A new broom sweeps well - referring to how new leadership often brings fresh energy and change",
    context: "Traditional German wisdom about the enthusiasm and effectiveness of new leaders",
    variants: ["Neue Führung, neue Richtung", "Neuer Chef, neue Regeln"],
    usage: "Corporate, Management, Leadership"
  },
  {
    quote: "新しい将軍、新しい戦略",
    origin: "Japanese Saying",
    meaning: "New general, new strategy - emphasizing how new leadership brings new approaches",
    context: "Derived from military wisdom, now used in business and organizational contexts",
    variants: ["新しい親分、新しい道", "新しいリーダー、新しい方向"],
    usage: "Business, Military, Organization"
  },
  {
    quote: "Новая метла по-новому метёт",
    origin: "Russian Proverb",
    meaning: "A new broom sweeps in a new way - similar to the German version, emphasizing change with new leadership",
    context: "Traditional Russian saying about how new leaders bring their own style and methods",
    variants: ["Новый начальник - новые порядки", "Новый лидер - новые правила"],
    usage: "Management, Government, Society"
  }
];

export const regions = [
  "American",
  "Asian",
  "European",
  "Latin American",
  "Middle Eastern"
] as const;

export type SayingRegion = typeof regions[number];
