import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, DollarSign, CheckCircle, Lightbulb } from 'lucide-react';
import { DIYFundraiser } from '@/data/diyFundraisingData';

interface DIYFundraiserModalProps {
  fundraiser: DIYFundraiser | null;
  open: boolean;
  onClose: () => void;
}

export function DIYFundraiserModal({ fundraiser, open, onClose }: DIYFundraiserModalProps) {
  if (!fundraiser) return null;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <DialogTitle className="text-2xl">{fundraiser.title}</DialogTitle>
            <Badge className={getDifficultyColor(fundraiser.difficulty)}>
              {fundraiser.difficulty}
            </Badge>
          </div>
          <p className="text-muted-foreground">{fundraiser.description}</p>
        </DialogHeader>
        
        <div className="space-y-6">
          <img 
            src={fundraiser.image} 
            alt={fundraiser.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          
          <div className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium">Estimated Profit</p>
                <p className="text-sm text-muted-foreground">{fundraiser.estimatedProfit}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium">Time Required</p>
                <p className="text-sm text-muted-foreground">{fundraiser.timeRequired}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-medium">Participants</p>
                <p className="text-sm text-muted-foreground">{fundraiser.participantsNeeded}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Materials Needed
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {fundraiser.materials.map((material, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">{material}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Step-by-Step Instructions</h3>
            <div className="space-y-3">
              {fundraiser.steps.map((step, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <p className="text-sm">{step}</p>
                </div>
              ))}
            </div>
          </div>
          
          {fundraiser.tutorial && fundraiser.tutorial.length > 50 && (
            <>
              <Separator />
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Detailed Tutorial</h3>
                <div className="prose prose-sm max-w-none">
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">
                    {fundraiser.tutorial}
                  </div>
                </div>
              </div>
            </>
          )}
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Pro Tips
            </h3>
            <div className="space-y-2">
              {fundraiser.tips.map((tip, index) => (
                <div key={index} className="flex gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}