import React, { useState, useMemo } from 'react';
import { uniformItems, availableColors, UniformItem } from '@/data/uniformData';
import CatalogHeader from './CatalogHeader';
import UniformCard from './UniformCard';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/hooks/useCart';

const CheerCatalog: React.FC = () => {
  const [items, setItems] = useState<UniformItem[]>(uniformItems || []);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { toast } = useToast();
  const { cartItems, addToCart, updateQuantity, removeItem, clearCart } = useCart();

  const categories = useMemo(() => {
    if (!uniformItems || uniformItems.length === 0) return [];
    const cats = Array.from(new Set(uniformItems.map(item => item.category)));
    return cats.sort();
  }, []);

  const filteredItems = useMemo(() => {
    if (!items || items.length === 0) return [];
    return items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [items, searchTerm, selectedCategory]);

  const handleColorChange = (itemId: string, colorType: string, color: string) => {
    setItems(prevItems => 
      prevItems.map(item => {
        if (item.id === itemId) {
          const colorKey = `${colorType}Color` as keyof Pick<UniformItem, 'primaryColor' | 'secondaryColor' | 'accentColor'>;
          return { ...item, [colorKey]: color };
        }
        return item;
      })
    );
  };

  const handleAddToCart = (item: UniformItem, size: string) => {
    addToCart(item, size);
    toast({
      title: "Added to Cart!",
      description: `${item.name} (${size}) has been added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <CatalogHeader
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
        cartItems={cartItems || []}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClearCart={clearCart}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-lg text-gray-600 text-center">
            Found {filteredItems?.length || 0} item{(filteredItems?.length || 0) !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems?.map((item) => (
            <UniformCard
              key={item.id}
              item={item}
              availableColors={availableColors}
              onColorChange={handleColorChange}
              onAddToCart={handleAddToCart}
            />
          )) || []}
        </div>
        
        {(!filteredItems || filteredItems.length === 0) && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">
              No items found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheerCatalog;