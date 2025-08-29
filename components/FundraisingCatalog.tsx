import { useState, useMemo } from "react";
import { BrandCard } from "@/components/BrandCard";
import { FundraisingFilters } from "@/components/FundraisingFilters";
import { fundraisingBrands } from "@/data/fundraisingData";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

type SortOption = 'name' | 'teamPercentage' | 'rating' | 'minOrder';

export const FundraisingCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedOperationType, setSelectedOperationType] = useState('All Types');
  const [minTeamPercentage, setMinTeamPercentage] = useState(0);
  const [sortBy, setSortBy] = useState<SortOption>('teamPercentage');
  const [sortDesc, setSortDesc] = useState(true);

  const filteredAndSortedBrands = useMemo(() => {
    if (!fundraisingBrands || fundraisingBrands.length === 0) return [];
    
    let filtered = fundraisingBrands.filter(brand => {
      const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           brand.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || brand.category === selectedCategory;
      const matchesOperationType = selectedOperationType === 'All Types' || brand.operationType === selectedOperationType;
      const matchesTeamPercentage = brand.teamPercentage >= minTeamPercentage;
      
      return matchesSearch && matchesCategory && matchesOperationType && matchesTeamPercentage;
    });

    return filtered.sort((a, b) => {
      let aVal = a[sortBy];
      let bVal = b[sortBy];
      
      if (typeof aVal === 'string') {
        aVal = aVal.toLowerCase();
        bVal = (bVal as string).toLowerCase();
      }
      
      if (aVal < bVal) return sortDesc ? 1 : -1;
      if (aVal > bVal) return sortDesc ? -1 : 1;
      return 0;
    });
  }, [searchTerm, selectedCategory, selectedOperationType, minTeamPercentage, sortBy, sortDesc]);

  const handleSort = (option: SortOption) => {
    if (sortBy === option) {
      setSortDesc(!sortDesc);
    } else {
      setSortBy(option);
      setSortDesc(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">
          Trusted Fundraising Brands
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover a huge variety of verified athletic fundraising partners to help your team reach its goals.
          Compare team percentages, minimum orders, and product offerings.
        </p>
      </div>

        <FundraisingFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedOperationType={selectedOperationType}
          onOperationTypeChange={setSelectedOperationType}
          minTeamPercentage={minTeamPercentage}
          onMinTeamPercentageChange={setMinTeamPercentage}
          totalBrands={fundraisingBrands?.length || 0}
          filteredCount={filteredAndSortedBrands?.length || 0}
        />

        <div className="flex gap-2 mb-6">
          <Button
            variant={sortBy === 'name' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleSort('name')}
          >
            Name <ArrowUpDown className="w-4 h-4 ml-1" />
          </Button>
          <Button
            variant={sortBy === 'teamPercentage' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleSort('teamPercentage')}
          >
            Team % <ArrowUpDown className="w-4 h-4 ml-1" />
          </Button>
          <Button
            variant={sortBy === 'rating' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleSort('rating')}
          >
            Rating <ArrowUpDown className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedBrands?.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          )) || []}
        </div>

        {(!filteredAndSortedBrands || filteredAndSortedBrands.length === 0) && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No brands match your current filters. Try adjusting your search criteria.
            </p>
          </div>
        )}
    </div>
  );
};