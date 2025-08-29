import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ShoppingCart as CartIcon, X } from 'lucide-react';
import CartItem, { CartItemType } from './CartItem';
import { Badge } from '@/components/ui/badge';

interface ShoppingCartProps {
  items: CartItemType[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <CartIcon className="w-5 h-5" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-teal-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            Shopping Cart ({totalItems})
            {items.length > 0 && (
              <Button variant="ghost" size="sm" onClick={onClearCart}>
                <X className="w-4 h-4" />
              </Button>
            )}
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-4 max-h-[60vh] overflow-y-auto">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <CartIcon className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemoveItem}
              />
            ))
          )}
        </div>
        
        {items.length > 0 && (
          <div className="mt-6 pt-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-purple-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;