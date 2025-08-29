import React from 'react';
import { Button } from '@/components/ui/button';

interface SizeSelectorProps {
  selectedSize: string;
  onSizeChange: (size: string) => void;
  availableSizes?: string[];
}

const defaultSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const SizeSelector: React.FC<SizeSelectorProps> = ({ 
  selectedSize, 
  onSizeChange, 
  availableSizes = defaultSizes 
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">Size</label>
      <div className="flex flex-wrap gap-2">
        {availableSizes.map((size) => (
          <Button
            key={size}
            variant={selectedSize === size ? "default" : "outline"}
            size="sm"
            onClick={() => onSizeChange(size)}
            className={`min-w-[40px] ${
              selectedSize === size 
                ? 'bg-purple-600 hover:bg-purple-700' 
                : 'hover:bg-purple-50'
            }`}
          >
            {size}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;