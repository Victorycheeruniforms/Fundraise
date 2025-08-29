import { Trophy, Heart } from 'lucide-react';

export const VictoryHeader = () => {
  return (
    <div className="bg-gradient-to-r from-teal-600 via-purple-600 to-pink-500 text-white py-8 mb-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Trophy className="h-8 w-8 text-yellow-300" />
          <h1 className="text-4xl md:text-5xl font-bold">Victory Fundraising Directory</h1>
          <Heart className="h-8 w-8 text-yellow-300" />
        </div>
        <p className="text-xl text-teal-100 max-w-3xl mx-auto">
          Empowering cheer teams and organizations with trusted fundraising solutions
        </p>
        <div className="mt-4 text-sm text-teal-200">
          Powered by Victory Cheer Uniforms
        </div>
      </div>
    </div>
  );
};