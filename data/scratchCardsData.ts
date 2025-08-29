export interface ScratchCard {
  id: string;
  name: string;
  image: string;
  price: string;
  profit: string;
  profitPercentage: string;
  description: string;
  features: string[];
  category: string;
  tickets: number;
  prizeStructure: string;
}

export const scratchCardsData: ScratchCard[] = [
  {
    id: 'sc1',
    name: '$1 Scratch Cards',
    image: 'https://images.unsplash.com/photo-1541278107931-e006523892df?w=400&h=300&fit=crop',
    price: '$50.00',
    profit: '$50.00',
    profitPercentage: '100%',
    description: 'Classic $1 scratch-off cards with instant prizes. Perfect for quick fundraising.',
    features: [
      '50 cards per pack',
      'Instant winners',
      '100% profit margin',
      'Easy to sell',
      'No upfront costs'
    ],
    category: 'Classic',
    tickets: 50,
    prizeStructure: '10 winners, $40 in prizes'
  },
  {
    id: 'sc2',
    name: '$2 Scratch Cards',
    image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop',
    price: '$100.00',
    profit: '$100.00',
    profitPercentage: '100%',
    description: '$2 scratch cards with bigger prizes and higher profit potential.',
    features: [
      '50 cards per pack',
      'Larger prize pool',
      '100% profit margin',
      'Popular price point',
      'Quick turnaround'
    ],
    category: 'Classic',
    tickets: 50,
    prizeStructure: '15 winners, $100 in prizes'
  },
  {
    id: 'sc3',
    name: '$5 Premium Scratch Cards',
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop',
    price: '$250.00',
    profit: '$250.00',
    profitPercentage: '100%',
    description: 'Premium $5 scratch cards with larger prizes and higher profit margins.',
    features: [
      '50 cards per pack',
      'Premium prize structure',
      '100% profit margin',
      'High-value fundraising',
      'Attractive design'
    ],
    category: 'Premium',
    tickets: 50,
    prizeStructure: '20 winners, $250 in prizes'
  },
  {
    id: 'sc4',
    name: 'Holiday Scratch Cards',
    image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400&h=300&fit=crop',
    price: '$75.00',
    profit: '$75.00',
    profitPercentage: '100%',
    description: 'Festive holiday-themed scratch cards perfect for seasonal fundraising.',
    features: [
      '50 cards per pack',
      'Holiday themed design',
      '100% profit margin',
      'Seasonal appeal',
      'Gift-worthy packaging'
    ],
    category: 'Specialty',
    tickets: 50,
    prizeStructure: '12 winners, $50 in prizes'
  }
];

export const scratchCardCategories = [
  'All',
  'Classic',
  'Premium',
  'Specialty'
];