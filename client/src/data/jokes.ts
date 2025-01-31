// Collection of western-themed sheriff jokes and humor
export const jokes = [
  {
    setup: "What did the new sheriff say on his first day?",
    punchline: "Time to clean up this one-horse town... as soon as I find the horse!",
    category: "workplace",
    tags: ["leadership", "humor"]
  },
  {
    setup: "How do you know when there's a new sheriff in town?",
    punchline: "The old one is still looking for his parking spot!",
    category: "workplace",
    tags: ["change", "humor"]
  },
  {
    setup: "What's the first thing a new sheriff does in town?",
    punchline: "Changes everything to 'new and improved' - even the wanted posters!",
    category: "leadership",
    tags: ["change", "humor"]
  },
  {
    setup: "Why did the new sheriff bring a ladder to work?",
    punchline: "Because they told him crime was on the rise!",
    category: "workplace",
    tags: ["puns", "humor"]
  },
  {
    setup: "What's a new sheriff's favorite breakfast?",
    punchline: "Law and Order with a side of Justice served cold!",
    category: "food",
    tags: ["puns", "humor"]
  },
  {
    setup: "How does a new sheriff organize their desk?",
    punchline: "With marshal law and order!",
    category: "workplace",
    tags: ["puns", "organization"]
  },
  {
    setup: "What's a new sheriff's favorite exercise?",
    punchline: "Running for office!",
    category: "fitness",
    tags: ["puns", "politics"]
  },
  {
    setup: "Why was the new sheriff great at math?",
    punchline: "Because they could lay down the law and maintain order!",
    category: "education",
    tags: ["puns", "math"]
  }
];

export const categories = [
  "workplace",
  "leadership",
  "food",
  "fitness",
  "education"
] as const;

export type JokeCategory = typeof categories[number];
