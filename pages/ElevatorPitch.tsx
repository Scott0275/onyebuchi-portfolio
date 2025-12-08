import React from 'react';
import PageTransition from '../components/PageTransition';
import { Video, Mic } from 'lucide-react';

const ElevatorPitch: React.FC = () => {
  return (
    <PageTransition className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="max-w-2xl w-full text-center">
        
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
          Elevator Pitch
        </h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 mb-10">
          <div className="aspect-video bg-slate-900 rounded-lg flex flex-col items-center justify-center text-slate-400 mb-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>
            <div className="relative z-10 flex flex-col items-center">
                <div className="bg-slate-700/50 p-4 rounded-full mb-4 backdrop-blur-sm">
                    <Video className="w-10 h-10 text-teal-400" />
                </div>
                <p className="font-medium text-lg">Video Coming Soon</p>
                <p className="text-sm text-slate-500 mt-2">Currently in production</p>
            </div>
          </div>
          
          <div className="flex items-start justify-center gap-3 text-left max-w-lg mx-auto">
            <Mic className="text-teal-600 w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed italic">
                "I design cloud-native data systems that are simple, scalable, and impactful — delivering real solutions to real problems."
              </p>
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default ElevatorPitch;