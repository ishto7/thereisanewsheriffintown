export const socialPosts = [
  {
    platform: "X (formerly Twitter)",
    icon: "SiX",
    posts: [
      {
        author: "@TechInsider",
        content: "New CEO at Twitter: 'There's a new sheriff in town' - Changes coming to content moderation policies #NewLeadership",
        likes: "45.2K",
        date: "2024-12-15",
        category: "Technology"
      },
      {
        author: "@SportsCenter",
        content: "'There's a new sheriff in town!' - Coach Johnson after turning around the struggling team with 5 straight wins 🏈",
        likes: "32.1K",
        date: "2024-11-30",
        category: "Sports"
      },
      {
        author: "@PoliticsDaily",
        content: "Breaking: New mayor declares 'there's a new sheriff in town' as city hall undergoes major restructuring 🏛️",
        likes: "28.3K",
        date: "2024-12-20",
        category: "Politics"
      },
      {
        author: "@StartupGuru",
        content: "When your startup disrupts the market and the incumbents start noticing 🤠 #NewSheriffInTown #StartupLife",
        likes: "15.7K",
        date: "2024-12-05",
        category: "Business"
      }
    ]
  },
  {
    platform: "Reddit",
    icon: "SiReddit",
    posts: [
      {
        author: "u/CorporateCulture",
        content: "My company just got a new CEO and the first thing they said in the all-hands meeting was 'there's a new sheriff in town.' Should I be worried?",
        subreddit: "r/careerguidance",
        upvotes: "2.4k",
        date: "2024-12-01",
        category: "Career"
      },
      {
        author: "u/StartupLife",
        content: "How to avoid the 'new sheriff in town' syndrome when taking over as a new manager",
        subreddit: "r/management",
        upvotes: "5.6k",
        date: "2024-11-25",
        category: "Management"
      },
      {
        author: "u/LeadershipGuru",
        content: "The psychological impact of declaring yourself the 'new sheriff' - a study in workplace dynamics",
        subreddit: "r/OrganizationalPsych",
        upvotes: "3.8k",
        date: "2024-12-10",
        category: "Psychology"
      },
      {
        author: "u/HistoryBuff",
        content: "TIL: The phrase 'there's a new sheriff in town' originated in the American Old West but wasn't commonly used until the 20th century",
        subreddit: "r/todayilearned",
        upvotes: "12.3k",
        date: "2024-12-15",
        category: "History"
      }
    ]
  },
  {
    platform: "Instagram",
    icon: "SiInstagram",
    posts: [
      {
        author: "@businessmotivation",
        content: "When you walk into Monday meetings like 'there's a new sheriff in town' 💼✨ #MondayMotivation #Leadership",
        likes: "56.3K",
        date: "2024-12-10",
        category: "Motivation"
      },
      {
        author: "@startupculture",
        content: "Every great leader knows when to be the new sheriff and when to be a team player 🤠 #LeadershipLessons",
        likes: "28.9K",
        date: "2024-12-05",
        category: "Leadership"
      },
      {
        author: "@corporatelife",
        content: "POV: The new manager trying to establish their authority on day one 😅 #OfficeHumor #NewSheriff",
        likes: "42.1K",
        date: "2024-12-18",
        category: "Humor"
      },
      {
        author: "@careercoach",
        content: "5 ways to assert leadership without saying 'there's a new sheriff in town' 📈 #CareerAdvice #Leadership",
        likes: "33.7K",
        date: "2024-12-08",
        category: "Career"
      }
    ]
  },
  {
    platform: "LinkedIn",
    icon: "SiLinkedin",
    posts: [
      {
        author: "Sarah Johnson, MBA",
        content: "Leadership Lesson #1: Avoid the 'new sheriff in town' mentality. Instead, focus on understanding the existing culture before implementing changes. #LeadershipDevelopment",
        reactions: "3,456",
        date: "2024-12-20",
        category: "Leadership"
      },
      {
        author: "Mark Thompson, CEO",
        content: "Just completed my first 100 days as CEO. Rather than being the 'new sheriff in town', I chose to listen, learn, and collaborate. Here's what I discovered...",
        reactions: "8,921",
        date: "2024-12-08",
        category: "Executive"
      },
      {
        author: "Dr. Emily Chen, Leadership Consultant",
        content: "New research shows that leaders who avoid the 'new sheriff' approach have 40% higher team retention rates. Here's the full study... #LeadershipResearch",
        reactions: "6,234",
        date: "2024-12-15",
        category: "Research"
      },
      {
        author: "James Wilson, HR Director",
        content: "The evolution of leadership: From 'new sheriff in town' to 'servant leadership' - A 20-year perspective on changing management styles",
        reactions: "4,567",
        date: "2024-12-12",
        category: "HR"
      }
    ]
  }
];

export const categories = [
  "Technology",
  "Sports",
  "Politics",
  "Business",
  "Career",
  "Management",
  "Psychology",
  "History",
  "Motivation",
  "Leadership",
  "Humor",
  "Executive",
  "Research",
  "HR"
] as const;

export type SocialCategory = typeof categories[number];
