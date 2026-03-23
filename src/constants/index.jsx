import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
import event1 from "../assets/event1.png";

export const navItems = [
  { label: "Home", href: "/home" },
  { label: "Book", href: "/home#book" },
  { label: "Services", href: "/home#services" },
  { label: "Testimonials", href: "/home#testimonials" },
  { label: "Events", href: "/home#events" },
  { label: "Gallery", href: "/gallery" },
];

export const testimonials = [
  {
    user: "Aisha Rao",
    company: "IIT Delhi",
    image: user1,
    text: "This book gave me clarity and direction in my career choices — exactly what I needed during my final year of engineering. Highly recommended!",
    stars: 5,
  },
  {
    user: "Rohit Mehta",
    company: "Software Developer, Bengaluru",

    image: user2,
    text: "As a junior software engineer in Bengaluru, reading this inspired me to rethink my goals. The practical advice is gold for anyone starting out.",
    stars: 5,
  },
  {
    user: "Neha Kapoor",
    company: "MBA Student, Mumbai",

    image: user3,
    text: "Balancing studies, internships and life gets overwhelming. This book’s guidance felt like a mentor talking to me — simple, actionable and heartening.",
    stars: 5,
  },

  {
    user: "Vikram Singh",

    company: "Consultant, Delhi",
    image: user4,
    text: "I work in consulting and often mentor freshers. This book will be on my recommended reading list — it bridges dreams and real actions neatly.",

    stars: 5,
  },
  {
    user: "Priya Nair",
    company: "Research Scholar, Pune",
    image: user5,
    text: "What I loved most: it doesn’t just encourage you but also shows how. As a PhD student, I found the frameworks immediately useful.",
    stars: 5,
  },
  {
    user: "Karan Gupta",
    company: "Marketing Analyst, Hyderabad",
    image: user6,

    text: "After reading this, I feel more confident in making bold moves in my career. A must-read for any young professional in India.",
    stars: 5,
  },
];

export const heroItems = {
  title: "Balance your life with purpose and passion",
  description:
    "I believe that nurturing education in the youth is the cornerstone of creating empowered leaders, innovative thinkers, and compassionate citizens who will shape a brighter future",
};

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const bookRelease = {
  title: "The middle path to greatness",
  subtitle: "A transformative guide to achieving balance without burning out",
  heading: "Discover the secrets of sustainable success",
  description:
    "Learn practical strategies for maintaining personal and professional equilibrium",
};

export const SERVICES_TITLE = "Empowering your potential";
export const SERVICES_SUBTITLE =
  "Comprehensive support for personal and professional growth";

export const SERVICE_CARDS = [
  {
    tag: "Empowering Mentorship",
    title: "Guiding young minds to success",
    description:
      "Helping students and emerging professionals build clarity, confidence, and direction.",
    button: "Start your journey",
    image: user6,
    content: `✨ What you’ll gain:
• Personalized career mentoring & guidance  
• Resume + LinkedIn optimization  
• Interview & communication readiness  
• Clarity on strengths, goals, and career direction  

Ideal for: Students, fresh graduates, and early-career professionals.
`,
  },

  {
    tag: "Startup Guidance",
    title: "Entrepreneurial support for the new-age leader",
    description:
      "Transforming ideas into sustainable ventures through strategic mentoring and innovation.",
    button: "Book a session",
    image: user5,
    content: `✨ What you’ll gain:
• Concept-to-pitch startup mentoring  
• Design Thinking & business model clarity  
• Brand + digital presence strategy  
• Investor pitch & funding readiness  

Ideal for: Aspiring founders, entrepreneurs, and innovation teams.
`,
  },

  {
    tag: "Life Coaching",
    title: "Personal transformation through clarity and balance",
    description:
      "A holistic journey toward self-leadership, mindfulness, and fulfillment.",
    button: "Transform with Dr. Sangieta",
    image: user3,
    content: `✨ What you’ll gain:
• Clarity coaching for personal & professional goals  
• Emotional intelligence + resilience building  
• Mindfulness-based productivity routines  
• Tools for balance, purpose & growth  

Ideal for: Professionals, educators & leaders seeking inner balance.
`,
  },
];

export const eventSection = {
  title: "Events",
  subtitle: "Transformative workshops and speaking engagements",
  cards: [
    {
      date: { day: "Thu", num: "1", month: "Jan 2026" },
      tag: "Book Launch",
      title: "Hanuman: My Soul Warrior",
      location: "Mumbai, India",
      // description:
      // "Intensive workshop for emerging entrepreneurs and business leaders",
      // cta: "Register now",
      // ctaHref: "#",
      image: event1,
    },
    // {
    //   date: { day: "Fri", num: "10", month: "Oct 2025" },
    //   tag: "Coaching",
    //   title: "Personal development masterclass",
    //   location: "Online",
    //   description:
    //     "Interactive session on achieving balance and personal growth",
    //   cta: "Join session",
    //
    //   ctaHref: "#",
    //   image: event2,
    // },
  ],
};
