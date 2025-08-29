import React from 'react';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';

export interface CartItemType {
  id: string;
  name: string;
  price: number;
  size: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  quantity: number;
  image: string;
}

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center space-x-4 p-4 border rounded-lg bg-white">
      <div 
        className="w-16 h-16 rounded-lg flex-shrink-0"
        style={{
          background: `linear-gradient(135deg, ${item.primaryColor} 0%, ${item.secondaryColor} 50%, ${item.accentColor} 100%)`
        }}
      />
      
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600">Size: {item.size}</p>
        <p className="font-bold text-purple-600">${item.price}</p>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
        >
          <Minus className="w-4 h-4" />
        </Button>
        <span className="w-8 text-center">{item.quantity}</span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onRemove(item.id)}
        className="text-pink-500 hover:text-pink-700"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default CartItem;