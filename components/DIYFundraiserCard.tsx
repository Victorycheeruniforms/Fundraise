import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, DollarSign, PlayCircle, Edit } from 'lucide-react';
import { DIYFundraiser } from '@/data/diyFundraisingData';

interface DIYFundraiserCardProps {
  fundraiser: DIYFundraiser;
  onViewDetails: (fundraiser: DIYFundraiser) => void;
  onEdit?: (fundraiser: DIYFundraiser) => void;
}

export function DIYFundraiserCard({ fundraiser, onViewDetails, onEdit }: DIYFundraiserCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg">{fundraiser.title}</CardTitle>
          <div className="flex items-center gap-2">
            {onEdit && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onEdit(fundraiser)}
                className="h-6 w-6 p-0"
              >
                <Edit className="w-3 h-3" />
              </Button>
            )}
            <Badge className={getDifficultyColor(fundraiser.difficulty)}>
              {fundraiser.difficulty}
            </Badge>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{fundraiser.description}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <img 
          src={fundraiser.image} 
          alt={fundraiser.title}
          className="w-full h-32 object-cover rounded-md"
        />
        
        <div className="grid grid-cols-1 gap-2 text-sm">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-green-600" />
            <span>{fundraiser.estimatedProfit}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>{fundraiser.timeRequired}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-purple-600" />
            <span>{fundraiser.participantsNeeded}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            onClick={() => onViewDetails(fundraiser)}
            className="flex-1"
          >
            View Tutorial
          </Button>
          {fundraiser.videoUrl && (
            <Button variant="outline" size="icon">
              <PlayCircle className="w-4 h-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}