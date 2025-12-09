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
    }
  }
];
