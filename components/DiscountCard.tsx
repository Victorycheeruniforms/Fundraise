import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Clock, Star } from 'lucide-react';
import { DiscountCard as DiscountCardType } from '@/data/discountCardsData';

interface DiscountCardProps {
  card: DiscountCardType;
  onAddToCart: (card: DiscountCardType) => void;
}

export const DiscountCard: React.FC<DiscountCardProps> = ({ card, onAddToCart }) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border-2 hover:border-purple-300">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-green-500 text-white font-bold px-3 py-1">
            Save {card.savings}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
            {card.name}
          </CardTitle>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600">
              ${card.price}
            </div>
          </div>
        </div>
        <CardDescription className="text-gray-600 text-sm">
          {card.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>Valid until {new Date(card.validUntil).toLocaleDateString()}</span>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-700 flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            Features:
          </h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {card.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                {feature}
              </li>
            ))}
            {card.features.length > 3 && (
              <li className="text-purple-600 font-medium">
                +{card.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>
        
        <Button
          onClick={() => onAddToCart(card)}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};