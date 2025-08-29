import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Edit3, Eye } from 'lucide-react';

interface ArticleEditorProps {
  fundraiserId: string;
  fundraiserTitle: string;
  initialContent: string;
  onSave: (content: string) => void;
}

export function ArticleEditor({ 
  fundraiserId, 
  fundraiserTitle, 
  initialContent, 
  onSave 
}: ArticleEditorProps) {
  const [content, setContent] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  const handleSave = () => {
    onSave(content);
    setIsEditing(false);
  };

  const formatPreview = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-2xl font-bold mb-4">{line.slice(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-xl font-semibold mb-3 mt-6">{line.slice(3)}</h2>;
        }
        if (line.startsWith('- ')) {
          return <li key={index} className="ml-4 mb-1">{line.slice(2)}</li>;
        }
        if (line.trim() === '') {
          return <br key={index} />;
        }
        return <p key={index} className="mb-2">{line}</p>;
      });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Article for {fundraiserTitle}</CardTitle>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPreviewMode(!previewMode)}
            >
              <Eye className="w-4 h-4 mr-1" />
              {previewMode ? 'Edit' : 'Preview'}
            </Button>
            {!isEditing ? (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(true)}
              >
                <Edit3 className="w-4 h-4 mr-1" />
                Edit
              </Button>
            ) : (
              <Button size="sm" onClick={handleSave}>
                <Save className="w-4 h-4 mr-1" />
                Save
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {previewMode ? (
          <div className="prose max-w-none">
            {formatPreview(content)}
          </div>
        ) : isEditing ? (
          <div className="space-y-4">
            <div>
              <Label htmlFor="content">Article Content</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[400px] font-mono text-sm"
                placeholder="Write your article using Markdown format..."
              />
            </div>
            <div className="text-sm text-muted-foreground">
              <p><strong>Formatting tips:</strong></p>
              <p># Main Title, ## Section Title, - Bullet point</p>
            </div>
          </div>
        ) : (
          <div className="prose max-w-none">
            {formatPreview(content)}
          </div>
        )}
      </CardContent>
    </Card>
  );
}