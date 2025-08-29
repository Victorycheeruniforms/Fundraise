import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ColorPicker from './ColorPicker';
import SizeSelector from './SizeSelector';
import { UniformItem } from '@/data/uniformData';

interface UniformCardProps {
  item: UniformItem;
  availableColors: string[];
  onColorChange: (itemId: string, colorType: string, color: string) => void;
  onAddToCart?: (item: UniformItem, size: string) => void;
}

const UniformCard: React.FC<UniformCardProps> = ({
  item,
  availableColors,
  onColorChange,
  onAddToCart
}) => {
  const [selectedSize, setSelectedSize] = useState('M');

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(item, selectedSize);
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100">
          <div 
            className="w-full h-48 flex items-center justify-center text-6xl font-bold"
            style={{
              background: `linear-gradient(135deg, ${item.primaryColor} 0%, ${item.secondaryColor} 50%, ${item.accentColor} 100%)`
            }}
          >
            <span className="text-white drop-shadow-lg">👕</span>
          </div>
          <Badge className="absolute top-2 right-2 bg-white/90 text-gray-800">
            {item.category}
          </Badge>
        </div>
        <CardTitle className="text-lg font-semibold">{item.name}</CardTitle>
        <p className="text-2xl font-bold text-primary">${item.price}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ColorPicker
          label="Primary Color"
          colors={availableColors}
          selectedColor={item.primaryColor}
          onColorSelect={(color) => onColorChange(item.id, 'primary', color)}
        />
        <ColorPicker
          label="Secondary Color"
          colors={availableColors}
          selectedColor={item.secondaryColor}
          onColorSelect={(color) => onColorChange(item.id, 'secondary', color)}
        />
        <ColorPicker
          label="Accent Color"
          colors={availableColors}
          selectedColor={item.accentColor}
          onColorSelect={(color) => onColorChange(item.id, 'accent', color)}
        />
        <SizeSelector
          selectedSize={selectedSize}
          onSizeChange={setSelectedSize}
        />
        {onAddToCart && (
          <Button 
            onClick={handleAddToCart}
            className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
          >
            Add to Cart
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default UniformCard;