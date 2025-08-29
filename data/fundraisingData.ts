export interface FundraisingBrand {
  id: string;
  name: string;
  description: string;
  category: string;
  operationType: string;
  products: string[];
  teamPercentage: number;
  minOrder: number;
  rating: number;
  verified: boolean;
  website: string;
  logo: string;
}

import { fundraisingBrands1 } from './fundraisingBrands1';
import { fundraisingBrands2 } from './fundraisingBrands2';
import { fundraisingBrands3 } from './fundraisingBrands3';
import { fundraisingBrands4 } from './fundraisingBrands4';
import { fundraisingBrands5 } from './fundraisingBrands5';
import { fundraisingBrands6 } from './fundraisingBrands6';
import { fundraisingBrands7 } from './fundraisingBrands7';
import { fundraisingBrands8 } from './fundraisingBrands8';
import { fundraisingBrands9 } from './fundraisingBrands9';
import { fundraisingBrands10 } from './fundraisingBrands10';
import { fundraisingBrands11 } from './fundraisingBrands11';
import { fundraisingBrands12 } from './fundraisingBrands12';
import { fundraisingBrands13 } from './fundraisingBrands13';
import { fundraisingBrands14 } from './fundraisingBrands14';
import { fundraisingBrands15 } from './fundraisingBrands15';
import { fundraisingBrands16 } from './fundraisingBrands16';
import { fundraisingBrands17 } from './fundraisingBrands17';
import { fundraisingBrands18 } from './fundraisingBrands18';
import { fundraisingBrands19 } from './fundraisingBrands19';
import { fundraisingBrands20 } from './fundraisingBrands20';
import { fundraisingBrands21 } from './fundraisingBrands21';
import { fundraisingBrands30 } from './fundraisingBrands30';
import { fundraisingBrands31 } from './fundraisingBrands31';
import { fundraisingBrands32 } from './fundraisingBrands32';
import { fundraisingBrands33 } from './fundraisingBrands33';
import { fundraisingBrands34 } from './fundraisingBrands34';
import { fundraisingBrands35 } from './fundraisingBrands35';
import { fundraisingBrands36 } from './fundraisingBrands36';
import { fundraisingBrands37 } from './fundraisingBrands37';
import { fundraisingBrands38 } from './fundraisingBrands38';
import { fundraisingBrands39 } from './fundraisingBrands39';
import { fundraisingBrands40 } from './fundraisingBrands40';
import { fundraisingBrands41 } from './fundraisingBrands41';
import { fundraisingBrands42 } from './fundraisingBrands42';
import { fundraisingBrands43 } from './fundraisingBrands43';
import { fundraisingBrands44 } from './fundraisingBrands44';
import { fundraisingBrands45 } from './fundraisingBrands45';

const originalBrands: FundraisingBrand[] = [
  {
    id: '1',
    name: 'Charleston Wrap',
    description: 'Gift wrap, bags, and holiday items with easy and profitable fundraising solutions',
    category: 'Gift Wrap & Accessories',
    operationType: 'Catalog Sales',
    products: ['Gift Wrap', 'Gift Bags', 'Bows', 'Holiday Decorations', 'Stationery'],
    teamPercentage: 50,
    minOrder: 200,
    rating: 4.8,
    verified: true,
    website: 'charlestonwrap.com',
    logo: 'https://i.ibb.co/23CRtVMC/CW-image.png'
  }
];

const allBrands = [
  ...originalBrands,
  ...fundraisingBrands1,
  ...fundraisingBrands2,
  ...fundraisingBrands3,
  ...fundraisingBrands4,
  ...fundraisingBrands5,
  ...fundraisingBrands6,
  ...fundraisingBrands7,
  ...fundraisingBrands8,
  ...fundraisingBrands9,
  ...fundraisingBrands10,
  ...fundraisingBrands11,
  ...fundraisingBrands12,
  ...fundraisingBrands13,
  ...fundraisingBrands14,
  ...fundraisingBrands15,
  ...fundraisingBrands16,
  ...fundraisingBrands17,
  ...fundraisingBrands18,
  ...fundraisingBrands19,
  ...fundraisingBrands20,
  ...fundraisingBrands21,
  ...fundraisingBrands30,
  ...fundraisingBrands31,
  ...fundraisingBrands32,
  ...fundraisingBrands33,
  ...fundraisingBrands34,
  ...fundraisingBrands35,
  ...fundraisingBrands36,
  ...fundraisingBrands37,
  ...fundraisingBrands38,
  ...fundraisingBrands39,
  ...fundraisingBrands40,
  ...fundraisingBrands41,
  ...fundraisingBrands42,
  ...fundraisingBrands43,
  ...fundraisingBrands44,
  ...fundraisingBrands45
];

const uniqueBrands = allBrands.filter((brand, index, self) => 
  index === self.findIndex(b => b.name.toLowerCase() === brand.name.toLowerCase())
);

export const fundraisingBrands: FundraisingBrand[] = uniqueBrands.sort((a, b) => b.teamPercentage - a.teamPercentage);

export const categories = [
  'All Categories',
  'Food & Treats',
  'Home & Garden',
  'Gift Wrap & Accessories',
  'Educational Materials',
  'Digital Fundraising'
];

export const operationTypes = [
  'All Types',
  'Direct Sales',
  'Pre-Order Sales',
  'Catalog Sales',
  'Online Only',
  'Event Sales'
];