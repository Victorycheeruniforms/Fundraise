import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArticleEditor } from './ArticleEditor';
import { DIYFundraiser } from '@/data/diyFundraisingData';
import { BookOpen, Settings } from 'lucide-react';

interface DIYFundraiserEditorProps {
  fundraiser: DIYFundraiser | null;
  open: boolean;
  onClose: () => void;
  onUpdateTutorial: (fundraiserId: string, tutorial: string) => void;
}

export function DIYFundraiserEditor({ 
  fundraiser, 
  open, 
  onClose, 
  onUpdateTutorial 
}: DIYFundraiserEditorProps) {
  if (!fundraiser) return null;

  const handleSaveTutorial = (content: string) => {
    onUpdateTutorial(fundraiser.id, content);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Edit {fundraiser.title}
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="tutorial" className="w-full h-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tutorial" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Tutorial Article
            </TabsTrigger>
            <TabsTrigger value="details">
              Fundraiser Details
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="tutorial" className="mt-4 h-[calc(90vh-120px)] overflow-y-auto">
            <ArticleEditor
              fundraiserId={fundraiser.id}
              fundraiserTitle={fundraiser.title}
              initialContent={fundraiser.tutorial || '# Tutorial\n\nAdd your tutorial content here...'}
              onSave={handleSaveTutorial}
            />
          </TabsContent>
          
          <TabsContent value="details" className="mt-4">
            <div className="space-y-4 p-4 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold">Fundraiser Information</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><strong>Category:</strong> {fundraiser.category}</div>
                <div><strong>Difficulty:</strong> {fundraiser.difficulty}</div>
                <div><strong>Estimated Profit:</strong> {fundraiser.estimatedProfit}</div>
                <div><strong>Time Required:</strong> {fundraiser.timeRequired}</div>
                <div><strong>Participants:</strong> {fundraiser.participantsNeeded}</div>
              </div>
              <div>
                <strong>Description:</strong>
                <p className="text-muted-foreground mt-1">{fundraiser.description}</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}