import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScratchCard as ScratchCardType } from '@/data/scratchCardsData';
import { useCart } from '@/hooks/useCart';
import { ShoppingCart, Ticket, Trophy } from 'lucide-react';

interface ScratchCardProps {
  card: ScratchCardType;
}

export const ScratchCard = ({ card }: ScratchCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: card.id,
      name: card.name,
      price: parseFloat(card.price.replace('$', '')),
      image: card.image,
      quantity: 1
    });
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={card.image}
            alt={card.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <Badge className="absolute top-2 right-2 bg-green-600">
            {card.profitPercentage} Profit
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 p-4">
        <CardTitle className="text-lg mb-2">{card.name}</CardTitle>
        <p className="text-sm text-gray-600 mb-3">{card.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Ticket className="h-4 w-4" />
            <span>{card.tickets} cards per pack</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Trophy className="h-4 w-4" />
            <span>{card.prizeStructure}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="font-semibold">Cost: </span>
            <span>{card.price}</span>
          </div>
          <div>
            <span className="font-semibold">Profit: </span>
            <span className="text-green-600">{card.profit}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ScratchCard;