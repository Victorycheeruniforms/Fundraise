import React from 'react';
import { Button } from '@/components/ui/button';

interface ColorPickerProps {
  colors: string[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
  label?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  selectedColor,
  onColorSelect,
  label
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <Button
            key={color}
            variant={selectedColor === color ? "default" : "outline"}
            size="sm"
            className={`w-8 h-8 p-0 border-2 rounded-full transition-all hover:scale-110`}
            style={{ backgroundColor: color }}
            onClick={() => onColorSelect(color)}
            aria-label={`Select ${color} color`}
          >
            {selectedColor === color && (
              <div className="w-3 h-3 bg-white rounded-full" />
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;