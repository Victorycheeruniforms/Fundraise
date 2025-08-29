import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Sparkles } from 'lucide-react';
import ShoppingCart from './ShoppingCart';
import { CartItemType } from './CartItem';

interface CatalogHeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
  cartItems: CartItemType[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CatalogHeader: React.FC<CatalogHeaderProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-yellow-300" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Fundraising Directory
              </h1>
              <Sparkles className="w-8 h-8 text-yellow-300" />
            </div>
            <p className="text-xl md:text-2xl text-pink-100 font-medium">
              Customize Your Perfect Uniform with Our Recolor Tool!
            </p>
          </div>
          <div className="ml-4">
            <ShoppingCart
              items={cartItems}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveItem={onRemoveItem}
              onClearCart={onClearCart}
            />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search uniforms, accessories, and more..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 py-3 text-lg bg-white/90 backdrop-blur-sm border-0 shadow-lg"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedCategory === 'all' ? 'secondary' : 'outline'}
              onClick={() => onCategoryChange('all')}
              className="bg-white/20 hover:bg-white/30 border-white/30 text-white"
            >
              <Filter className="w-4 h-4 mr-2" />
              All Items
            </Button>
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? 'secondary' : 'outline'}
                className={`cursor-pointer px-4 py-2 text-sm font-medium transition-all hover:scale-105 ${
                  selectedCategory === category 
                    ? 'bg-white text-purple-600 shadow-lg' 
                    : 'bg-white/20 hover:bg-white/30 border-white/30 text-white'
                }`}
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogHeader;