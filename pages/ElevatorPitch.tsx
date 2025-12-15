import React from 'react';
import PageTransition, { Link } from '../components/PageTransition';
import { Video, Mic, Briefcase, ArrowRight } from 'lucide-react';

const ElevatorPitch: React.FC = () => {
  return (
    <PageTransition className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="max-w-4xl w-full text-center">
        
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
          Elevator Pitch
        </h1>
        
        <div className="bg-white dark:bg-slate-900 p-4 md:p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 mb-10 transition-all duration-300">
          <div className="aspect-video bg-slate-100 dark:bg-slate-950 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm relative group transition-colors duration-300">
             <iframe 
                src="https://drive.google.com/file/d/1i35tu-vAiEPZPukkq9Btq8ZqxwaRPrDp/preview" 
                className="w-full h-full border-0" 
                allow="autoplay; fullscreen"
                title="Elevator Pitch Video"
            ></iframe>
          </div>
          
          <div className="flex items-start justify-center gap-3 text-left max-w-lg mx-auto mt-6">
            <Mic className="text-teal-600 dark:text-teal-500 w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-200 leading-relaxed italic transition-colors duration-300">
                "I design cloud-native data systems that are simple, scalable, and impactful — delivering real solutions to real problems."
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
           <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 w-full sm:w-auto text-base font-medium rounded-lg text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500 transition-all duration-200 shadow-lg shadow-teal-500/20 dark:shadow-teal-900/20 transform hover:-translate-y-0.5"
            >
              See My Work <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
        </div>

      </div>
    </PageTransition>
  );
};

export default ElevatorPitch;