import { Clock, Receipt, Sparkles, type LucideIcon } from "lucide-react";

export interface Solution {
  id: string;
  slug: string;
  title: string;
  description: string;
  badgeTitle: string;
  image: string;
  imageSrcOne: string;
  imageSrcTwo: string;
  features: string[];
  content: {
    title: string;
    description: string;
    sections: Array<{
      title: string;
      description: string;
      image: string;
      reverse?: boolean;
    }>;
  };
  challengeSection?: {
    badgeText: string;
    heading: string;
    subheading: string;
    imageLeft: string;
    imageRight: string;
    cards: { number: string; title: string; description: string }[];
  };

  solutionHighlightSection?: {
    badgeText: string;
    heading: string;
    subheading: string;
    topImage: string;
    bottomImage: string;
    topRightCard: { title: string; description: string };
    bottomLeftCard: { title: string; description: string };
  };

  featureTabs?: {
    badgeText: string;
    heading: string;
    subheading: string;
    tabs: Array<{
      id: string;
      title: string;
      tag: string;
      image: string;
      heading: string;
      subheading: string;

    }>
  };

  featuredApps?: {
    cards: Array<{
      id: number;
      image: string;
      title: string;
    }>;
  };

  FeatureItem?: {
    Items: Array<{
      icon: LucideIcon;
      title: string;
      description: string;
    }>;
  };
}

export const solutions: Solution[] = [
  {
    id: 'digital-menu-boards',
    slug:'menu-boards',
    title: 'Menu Boards',
    description: 'Transform your restaurant or cafe with dynamic digital menus that are easy to update and manage.',
    badgeTitle: 'Dynamic Menus',
    image: '/images/menu-boards.png',
    imageSrcOne: '/images/menu-dashboard-hero-one.png',
    imageSrcTwo: '/images/menu-dashboard-hero-two.png',
    features: [
      'Easy menu updates in real-time',
      'Dynamic pricing and promotions',
      'Integration with POS systems',
      'Scheduled content changes'
    ],
    content: {
      title: 'Digital Menu Boards',
      description: 'Revolutionize your food service business with our digital menu board solutions that make updates effortless and engagement higher.',
      sections: [
        {
          title: 'Engage Customers with Dynamic Menus',
          description: 'Showcase your menu items in high-definition with the ability to update prices, items, and promotions in real-time.',
          image: '/images/solutions/menu-boards-1.jpg'
        },
        {
          title: 'Increase Sales with Promotions',
          description: 'Highlight specials, combos, and limited-time offers to boost your average order value.',
          image: '/images/solutions/menu-boards-2.jpg',
          reverse: true
        }
      ]
    },
    challengeSection: {
      badgeText: 'The Challenge',
      heading: 'Outdated Menus Limit Growth',
      subheading: "Static boards can’t keep up with fast-changing offers, pricing, or customer expectations in today’s dynamic dining world.",
      imageLeft: '/images/challenge-menu-board-left.png',
      imageRight: '/images/challenge-menu-board-right.png',
      cards: [
        {
          number: "01",
          title: 'Manual Updates',
          description: 'Changing menus takes time and often leads to inconsistent branding across locations and screens.',
        },
        {
          number: "02",
          title: 'Low Engagement',
          description: 'Static boards struggle to capture attention or promote upsells effectively compared to dynamic content.',
        },
        {
          number: "03",
          title: 'Limited Agility',
          description: 'Restaurants can’t react quickly to pricing, stock, or seasonal changes when menus are locked to print.',
        },
      ],
    },
    solutionHighlightSection: {
      badgeText: 'Solution',
      heading: 'Digital Menus That Sell',
      subheading:
        'Upgrade your dining space with vibrant, automated menu boards that work as hard as you.',
      topImage: '/images/menu-promo-image-top.png',
      bottomImage: '/images/menu-promo-image-bottom.png',
      topRightCard: {
        title: 'Seamless Control',
        description:
          'Update prices, items, and promotions instantly from one dashboard. No printing, no waiting, just effortless syncing across screens.',
      },
      bottomLeftCard: {
        title: 'Engage Visually',
        description:
          'Showcase dynamic food imagery, daypart menus, and real-time offers that capture attention and drive spontaneous orders.',
      },
    },
    featureTabs: {
      badgeText: "Effortless",
      heading: "Faster Design. Simpler Control.",
      subheading: "Create, update, and manage visuals in just a few clicks, powered by AI and smart automation.",
      tabs: [
        {
          id: "smart",
          title: "Grow Without Limits",
          tag: "Scalability",
          image: "/images/about-image-one.png",
          heading: "Grow Without Limits",
          subheading: "SignageX adapts seamlessly from single stores to nationwide retail chains, ensuring consistent branding and communication everywhere."
        },
        {
          id: "hardware",
          title: "Use Existing Hardware",
          tag: "COST-EFFICIENT",
          image: "/images/featuredImage1.jpg",
          heading: "Use Existing Hardware",
        subheading:
          "Our AI simplifies content creation and navigation. Build apps, widgets, and layouts in minutes.",
      },
      {
        id: "hub",
        title: "Centralized Management Hub",
        tag: "CONTROL",
        image: "/images/featuredImage2.jpg",
        heading: "Centralized Management Hub",
        subheading:
          "Organize, assign, and update screens from one unified dashboard with full automation.",
      },
      {
        id: "support",
        title: "Reliable 24/7 Support",
        tag: "TRUST",
        image: "/images/featuredImage3.jpg",
        heading: "Reliable Support",
        subheading:
          "Our support ensures smooth operations, uptime, and long-term stability for all deployments.",
      },
      ]
    },
    featuredApps: {
      cards: [
        { id: 1, image: "/images/featuredImage1.jpg", title: "October Event" },
        { id: 2, image: "/images/featuredImage2.jpg", title: "Quiz Time" },
        { id: 3, image: "/images/featuredImage3.jpg", title: "Fun Facts" },
        { id: 4, image: "/images/featuredImage4.jpg", title: "Mosquito Trivia" },
        { id: 5, image: "/images/featuredImage5.jpg", title: "November Event" },
      ],
    },
    FeatureItem: {
      Items: [
        {
          icon: Clock,
          title: "Faster Updates",
          description: "Change menus instantly without printing delays.",
        },
        {
          icon: Receipt,
          title: "Higher Sales",
          description: "Promote combos and specials that boost order value.",
        },
        {
          icon: Sparkles,
          title: "Better Experience",
          description: "Enhance visibility and speed up customer decisions.",
        },
      ]
    },
    
  }

];
