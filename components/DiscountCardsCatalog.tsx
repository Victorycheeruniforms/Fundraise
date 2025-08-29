import React, { useState, useMemo } from 'react';
import { DiscountCard } from './DiscountCard';
import { discountCards, discountCardCategories, DiscountCard as DiscountCardType } from '@/data/discountCardsData';
import { CatalogHeader } from './CatalogHeader';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';
import { CartItemType } from './CartItem';

export const DiscountCardsCatalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { cartItems, addToCart, updateQuantity, removeFromCart, clearCart } = useCart();

  const filteredCards = useMemo(() => {
    return discountCards.filter(card => {
      const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           card.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || card.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleAddToCart = (card: DiscountCardType) => {
    const cartItem: CartItemType = {
      id: card.id,
      name: card.name,
      price: card.price,
      image: card.image,
      quantity: 1,
      size: 'Standard',
      color: 'Default'
    };
    addToCart(cartItem);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <CatalogHeader
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={discountCardCategories}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Discount Cards ({filteredCards.length})
          </h2>
          <div className="flex gap-2">
            {discountCardCategories.map(category => (
              <Badge
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCards.map(card => (
            <DiscountCard
              key={card.id}
              card={card}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        
        {filteredCards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No discount cards found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};