import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { categories, operationTypes } from "@/data/fundraisingData";

interface FundraisingFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  selectedOperationType: string;
  onOperationTypeChange: (value: string) => void;
  minTeamPercentage: number;
  onMinTeamPercentageChange: (value: number) => void;
  totalBrands: number;
  filteredCount: number;
}

export const FundraisingFilters = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedOperationType,
  onOperationTypeChange,
  minTeamPercentage,
  onMinTeamPercentageChange,
  totalBrands,
  filteredCount
}: FundraisingFiltersProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold">Filter Fundraising Brands</h2>
        <Badge variant="secondary" className="ml-auto">
          {filteredCount} of {totalBrands} brands
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search brands..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={selectedOperationType} onValueChange={onOperationTypeChange}>
          <SelectTrigger>
            <SelectValue placeholder="Operation type" />
          </SelectTrigger>
          <SelectContent>
            {operationTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium whitespace-nowrap">
            Min Team %:
          </label>
          <Input
            type="number"
            min="0"
            max="100"
            value={minTeamPercentage}
            onChange={(e) => onMinTeamPercentageChange(Number(e.target.value))}
            className="w-20"
          />
        </div>
      </div>
    </div>
  );
};