export interface DiscountCard {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  savings: string;
  category: string;
  features: string[];
  validUntil: string;
}

export const discountCards: DiscountCard[] = [
  {
    id: 'restaurant-discount-card',
    name: 'Restaurant Discount Card',
    description: 'Save money at your favorite restaurants with this comprehensive discount card featuring local and national dining establishments.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
    price: 20,
    savings: 'Up to $500',
    category: 'Dining',
    features: [
      '2-for-1 entrees at participating restaurants',
      '10-50% off meals',
      'Valid at 100+ local restaurants',
      'No blackout dates',
      'Valid for 12 months',
      'Digital and physical card options'
    ],
    validUntil: '2025-12-31'
  },
  {
    id: 'dinner-movie-card',
    name: 'Dinner & Movie Card',
    description: 'Save on dining and entertainment with exclusive discounts at popular restaurants and movie theaters.',
    image: 'https://images.unsplash.com/photo-1489599735734-79b4212ccb46?w=400&h=300&fit=crop',
    price: 20,
    savings: 'Up to $500',
    category: 'Entertainment',
    features: [
      'Discounts at 50+ restaurants',
      'Movie theater savings',
      'Valid for 12 months',
      'No expiration on offers',
      'Digital and physical options'
    ],
    validUntil: '2025-12-31'
  },
  {
    id: 'local-dining-card',
    name: 'Local Dining Card',
    description: 'Exclusive discounts at local restaurants and cafes in your area.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop',
    price: 15,
    savings: 'Up to $300',
    category: 'Dining',
    features: [
      '25+ local restaurants',
      '10-50% off meals',
      'Valid for 12 months',
      'Family-friendly options'
    ],
    validUntil: '2025-12-31'
  },
  {
    id: 'shopping-savings-card',
    name: 'Shopping Savings Card',
    description: 'Get discounts at major retailers and online stores.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop',
    price: 25,
    savings: 'Up to $750',
    category: 'Shopping',
    features: [
      'Major retail discounts',
      'Online shopping deals',
      'Seasonal promotions',
      'Free shipping offers'
    ],
    validUntil: '2025-12-31'
  },
  {
    id: 'golf-discount-card',
    name: 'Golf Discount Card',
    description: 'Premium golf discounts at courses nationwide with exclusive member benefits.',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400&h=300&fit=crop',
    price: 35,
    savings: 'Up to $1000',
    category: 'Sports',
    features: [
      'Discounts at 200+ golf courses',
      'Free rounds and reduced green fees',
      'Pro shop discounts',
      'Valid for 12 months',
      'Nationwide coverage'
    ],
    validUntil: '2025-12-31'
  }
];

export const discountCardCategories = [
  'Entertainment',
  'Dining',
  'Shopping',
  'Services',
  'Travel',
  'Sports'
];