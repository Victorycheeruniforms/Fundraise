import { useState } from 'react';
import { scratchCardsData, scratchCardCategories } from '@/data/scratchCardsData';
import { ScratchCard } from '@/components/ScratchCard';
import { CatalogHeader } from '@/components/CatalogHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export const ScratchCardsCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCards = scratchCardsData.filter(card => {
    const matchesCategory = selectedCategory === 'All' || card.category === selectedCategory;
    const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         card.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <CatalogHeader 
        title="Scratch Cards Catalog"
        subtitle="Instant win scratch cards for easy fundraising"
      />
      
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search scratch cards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex gap-2 flex-wrap">
          {scratchCardCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="text-sm text-gray-600 mb-4">
        Showing {filteredCards.length} scratch card{filteredCards.length !== 1 ? 's' : ''}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCards.map((card) => (
          <ScratchCard key={card.id} card={card} />
        ))}
      </div>

      {filteredCards.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No scratch cards found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ScratchCardsCatalog;