import React from 'react';
import PageTransition from '../components/PageTransition';
import { Video, Mic } from 'lucide-react';

const ElevatorPitch: React.FC = () => {
  return (
    <PageTransition className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="max-w-2xl w-full text-center">
        
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
          Elevator Pitch
        </h1>
        
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 mb-10 transition-all duration-300">
          <div className="aspect-video bg-slate-100 dark:bg-slate-950 rounded-lg flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 mb-6 relative overflow-hidden group border border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-black/80 transition-colors duration-300"></div>
            <div className="relative z-10 flex flex-col items-center">
                <div className="bg-white dark:bg-slate-800/50 p-4 rounded-full mb-4 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
                    <Video className="w-10 h-10 text-teal-600 dark:text-teal-400" />
                </div>
                <p className="font-medium text-lg text-slate-700 dark:text-slate-300 transition-colors duration-300">Video Coming Soon</p>
                <p className="text-sm text-slate-500 mt-2">Currently in production</p>
            </div>
          </div>
          
          <div className="flex items-start justify-center gap-3 text-left max-w-lg mx-auto">
            <Mic className="text-teal-600 dark:text-teal-500 w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-200 leading-relaxed italic transition-colors duration-300">
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