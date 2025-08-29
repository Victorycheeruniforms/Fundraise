import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Settings } from 'lucide-react';
import { diyFundraisers, diyCategories, DIYFundraiser } from '@/data/diyFundraisingData';
import { DIYFundraiserCard } from './DIYFundraiserCard';
import { DIYFundraiserModal } from './DIYFundraiserModal';
import { DIYFundraiserEditor } from './DIYFundraiserEditor';

export function DIYFundraisingCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Levels');
  const [selectedFundraiser, setSelectedFundraiser] = useState<DIYFundraiser | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingFundraiser, setEditingFundraiser] = useState<DIYFundraiser | null>(null);
  const [fundraiserData, setFundraiserData] = useState(diyFundraisers);

  const filteredFundraisers = (fundraiserData || []).filter(fundraiser => {
    const matchesSearch = fundraiser.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fundraiser.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || fundraiser.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All Levels' || fundraiser.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const handleViewDetails = (fundraiser: DIYFundraiser) => {
    setSelectedFundraiser(fundraiser);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedFundraiser(null);
  };

  const handleEditFundraiser = (fundraiser: DIYFundraiser) => {
    setEditingFundraiser(fundraiser);
    setEditorOpen(true);
  };

  const handleCloseEditor = () => {
    setEditorOpen(false);
    setEditingFundraiser(null);
  };

  const handleUpdateTutorial = (fundraiserId: string, tutorial: string) => {
    setFundraiserData(prev => 
      prev.map(f => f.id === fundraiserId ? { ...f, tutorial } : f)
    );
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-purple-600">DIY Fundraising Ideas</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover creative and proven fundraising ideas you can organize yourself. 
          Complete with step-by-step tutorials and pro tips for success.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search fundraising ideas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {(diyCategories || []).map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Levels">All Levels</SelectItem>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Hard">Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Showing {filteredFundraisers?.length || 0} ideas</span>
        {(searchTerm || selectedCategory !== 'All Categories' || selectedDifficulty !== 'All Levels') && (
          <Badge variant="secondary">
            Filtered
          </Badge>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFundraisers?.map(fundraiser => (
          <DIYFundraiserCard
            key={fundraiser.id}
            fundraiser={fundraiser}
            onViewDetails={handleViewDetails}
            onEdit={handleEditFundraiser}
          />
        )) || []}
      </div>

      {(!filteredFundraisers || filteredFundraisers.length === 0) && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No fundraising ideas match your criteria.</p>
          <p className="text-sm text-muted-foreground mt-1">Try adjusting your filters.</p>
        </div>
      )}

      <DIYFundraiserModal
        fundraiser={selectedFundraiser}
        open={modalOpen}
        onClose={handleCloseModal}
      />
      
      <DIYFundraiserEditor
        fundraiser={editingFundraiser}
        open={editorOpen}
        onClose={handleCloseEditor}
        onUpdateTutorial={handleUpdateTutorial}
      />
    </div>
  );
}