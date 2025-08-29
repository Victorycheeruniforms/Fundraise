import { FundraisingBrand } from './fundraisingData';

export const fundraisingBrands11: FundraisingBrand[] = [
  {
    id: '46',
    name: 'Avon',
    description: 'Beauty products and personal care items',
    category: 'Home & Garden',
    operationType: 'Direct Sales',
    products: ['Cosmetics', 'Skincare', 'Fragrances', 'Bath Products', 'Jewelry'],
    teamPercentage: 40,
    minOrder: 150,
    rating: 4.4,
    verified: true,
    website: 'https://www.avon.com/magnoliaPublic/dam/pdf/fundraising/fundraising-presentation-booklet-en.pdf',
    logo: 'data:image/png;base64,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'
  },
  {
    id: '47',
    name: 'Mary Kay',
    description: 'Premium skincare and cosmetics',
    category: 'Home & Garden',
    operationType: 'Direct Sales',
    products: ['Skincare', 'Makeup', 'Fragrances', 'Body Care', 'Men\'s Products'],
    teamPercentage: 42,
    minOrder: 125,
    rating: 4.5,
    verified: true,
    website: 'file:///C:/Users/info/Downloads/MKACF_FundraiserForm.pdf',
    logo: 'https://www.marykay.com/-/media/images/mk/united-states/usa/esuite/header/2024-new-mary-kay-logo-esuite-164x35.svg?la=en-US&hash=DC4814BFD1704E8EA5AA399563396E5829945946'
  },
  {
    id: '48',
    name: 'Pampered Chef',
    description: 'Kitchen tools and cooking accessories',
    category: 'Home & Garden',
    operationType: 'Direct Sales',
    products: ['Kitchen Tools', 'Cookware', 'Bakeware', 'Food Products', 'Gadgets'],
    teamPercentage: 38,
    minOrder: 175,
    rating: 4.6,
    verified: true,
    website: 'pamperedchef.com',
    logo: 'https://www.pamperedchef.com/iceberg/home/aug-25/school.jpg'
  }];