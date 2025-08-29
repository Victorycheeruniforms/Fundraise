export interface UniformItem {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

export const availableColors = [
  '#FF1493', // Deep Pink
  '#FF69B4', // Hot Pink
  '#FFB6C1', // Light Pink
  '#8A2BE2', // Blue Violet
  '#9370DB', // Medium Purple
  '#BA55D3', // Medium Orchid
  '#4169E1', // Royal Blue
  '#1E90FF', // Dodger Blue
  '#00BFFF', // Deep Sky Blue
  '#FF4500', // Orange Red
  '#FF6347', // Tomato
  '#FFD700', // Gold
  '#32CD32', // Lime Green
  '#00FF7F', // Spring Green
  '#DC143C', // Crimson
  '#000000', // Black
  '#FFFFFF', // White
  '#C0C0C0', // Silver
];

export const uniformItems: UniformItem[] = [
  {
    id: '1',
    name: 'Classic Cheer Top',
    category: 'Tops',
    price: 45.99,
    image: '/placeholder.svg',
    primaryColor: '#FF1493',
    secondaryColor: '#FFFFFF',
    accentColor: '#FFD700'
  },
  {
    id: '2',
    name: 'Victory Skirt',
    category: 'Bottoms',
    price: 39.99,
    image: '/placeholder.svg',
    primaryColor: '#8A2BE2',
    secondaryColor: '#FFFFFF',
    accentColor: '#FF69B4'
  },
  {
    id: '3',
    name: 'Spirit Bow',
    category: 'Accessories',
    price: 12.99,
    image: '/placeholder.svg',
    primaryColor: '#FF4500',
    secondaryColor: '#FFD700',
    accentColor: '#FFFFFF'
  },
  {
    id: '4',
    name: 'Champion Crop Top',
    category: 'Tops',
    price: 42.99,
    image: '/placeholder.svg',
    primaryColor: '#4169E1',
    secondaryColor: '#FFFFFF',
    accentColor: '#FFD700'
  },
  {
    id: '5',
    name: 'Performance Shorts',
    category: 'Bottoms',
    price: 29.99,
    image: '/placeholder.svg',
    primaryColor: '#32CD32',
    secondaryColor: '#000000',
    accentColor: '#FFFFFF'
  },
  {
    id: '6',
    name: 'Pom Poms Set',
    category: 'Accessories',
    price: 18.99,
    image: '/placeholder.svg',
    primaryColor: '#FF69B4',
    secondaryColor: '#9370DB',
    accentColor: '#FFD700'
  },
  {
    id: '7',
    name: 'Elite Shell Top',
    category: 'Tops',
    price: 52.99,
    image: '/placeholder.svg',
    primaryColor: '#DC143C',
    secondaryColor: '#FFFFFF',
    accentColor: '#FFD700'
  },
  {
    id: '8',
    name: 'Competition Skirt',
    category: 'Bottoms',
    price: 48.99,
    image: '/placeholder.svg',
    primaryColor: '#1E90FF',
    secondaryColor: '#FFFFFF',
    accentColor: '#C0C0C0'
  }
];