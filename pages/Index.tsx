import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FundraisingCatalog } from '@/components/FundraisingCatalog';
import { DIYFundraisingCatalog } from '@/components/DIYFundraisingCatalog';
import { VictoryHeader } from '@/components/VictoryHeader';
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-purple-50 to-pink-50">
      <VictoryHeader />
      <div className="container mx-auto px-4 pb-8">
      <Tabs defaultValue="brands" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="brands">Fundraising Brands</TabsTrigger>
          <TabsTrigger value="diy">DIY Fundraisers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="brands">
          <FundraisingCatalog />
        </TabsContent>
        
        <TabsContent value="diy">
          <DIYFundraisingCatalog />
        </TabsContent>
      </Tabs>
      </div>
    </div>
  );
};

export default Index;