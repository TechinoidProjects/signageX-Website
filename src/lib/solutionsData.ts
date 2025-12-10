import { Monitor, LayoutGrid, Smartphone, BarChart2, ShoppingCart, Users, MessageSquare, Calendar } from 'lucide-react';

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
    }
  }
];
