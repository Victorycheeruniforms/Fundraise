import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, CheckCircle } from "lucide-react";
import { FundraisingBrand } from "@/data/fundraisingData";

interface BrandCardProps {
  brand: FundraisingBrand;
}

export const BrandCard = ({ brand }: BrandCardProps) => {
  const handleVisitWebsite = () => {
    if (brand.website) {
      const url = brand.website.startsWith('http') 
        ? brand.website 
        : `https://${brand.website}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={brand.logo} 
              alt={brand.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <CardTitle className="text-lg flex items-center gap-2">
                {brand.name}
                {brand.verified && (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                )}
              </CardTitle>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-muted-foreground">
                  {brand.rating}
                </span>
              </div>
            </div>
          </div>
          <Badge variant="secondary">{brand.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{brand.description}</p>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium">Operation:</span>
            <p className="text-muted-foreground">{brand.operationType}</p>
          </div>
          <div>
            <span className="font-medium">Team %:</span>
            <p className="text-green-600 font-semibold">{brand.teamPercentage}%</p>
          </div>
          <div>
            <span className="font-medium">Min Order:</span>
            <p className="text-muted-foreground">${brand.minOrder}</p>
          </div>
          <div>
            <span className="font-medium">Products:</span>
            <p className="text-muted-foreground">{brand.products.length} items</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {brand.products.slice(0, 3).map((product) => (
            <Badge key={product} variant="outline" className="text-xs">
              {product}
            </Badge>
          ))}
          {brand.products.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{brand.products.length - 3} more
            </Badge>
          )}
        </div>

        <Button 
          className="w-full" 
          variant="outline"
          onClick={handleVisitWebsite}
          disabled={!brand.website}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Visit Website
        </Button>
      </CardContent>
    </Card>
  );
};