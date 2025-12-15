import React from 'react';
import { User, Briefcase, PlayCircle, Database, Cloud } from 'lucide-react';
import PageTransition, { Link } from '../components/PageTransition';

const Home: React.FC = () => {
  return (
    <PageTransition className="flex flex-col justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="space-y-8 text-center md:text-left order-2 md:order-1">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-bold tracking-wide uppercase transition-colors duration-300">
              <Cloud size={14} className="mr-2" />
              TechWithBuchi
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight transition-colors duration-300">
              Onokwuru Oscar <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-500">
                Onyebuchi
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium max-w-lg mx-auto md:mx-0 transition-colors duration-300">
              Cloud & Data Engineer • AWS Certified Solutions Architect
            </p>
          </div>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto md:mx-0 transition-colors duration-300">
            Building scalable cloud-native systems for real-world impact. I design data solutions that solve critical problems in emerging markets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <Link
              to="/bio"
              className="flex items-center justify-center px-8 py-3 w-full sm:w-auto text-base font-medium rounded-lg text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500 transition-all duration-200 shadow-lg shadow-teal-500/20 dark:shadow-teal-900/20 transform hover:-translate-y-0.5"
            >
              <User className="w-5 h-5 mr-2" />
              View Bio
            </Link>
            <Link
              to="/portfolio"
              className="flex items-center justify-center px-8 py-3 w-full sm:w-auto text-base font-medium rounded-lg text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200 shadow-sm transform hover:-translate-y-0.5"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              View Projects
            </Link>
          </div>
        </div>

        {/* Right Column: Image with Cloud/Tech styling */}
        <div className="relative order-1 md:order-2 flex justify-center">
          {/* Decorative Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-teal-500/10 via-blue-500/5 to-transparent dark:from-teal-500/20 dark:via-blue-500/10 blur-3xl rounded-full opacity-50"></div>
          
          <div className="relative z-10 w-72 h-72 md:w-96 md:h-96">
            {/* Tech Ring Decoration */}
            <div className="absolute inset-0 border-2 border-dashed border-teal-200 dark:border-teal-800 rounded-full animate-[spin_20s_linear_infinite] transition-colors duration-300"></div>
            
            {/* Main Image Container */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 transition-colors duration-300">
              <div className="absolute inset-0 bg-teal-900/0 dark:bg-teal-900/10 mix-blend-overlay z-10"></div> {/* Subtle tint in dark mode */}
              <img 
                src="/images/profile.jpg"
                alt="Onokwuru Oscar Onyebuchi" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Onye+Buchi&background=0D9488&color=fff&size=512';
                }}
              />
            </div>

            {/* Floating Badges */}
            <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 animate-bounce transition-colors duration-300" style={{ animationDuration: '3s' }}>
              <Database className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Data Engineer</span>
            </div>
             <div className="absolute top-10 -left-6 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 transition-colors duration-300" >
              <Cloud className="w-5 h-5 text-blue-500 dark:text-blue-400" />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">AWS Certified</span>
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default Home;