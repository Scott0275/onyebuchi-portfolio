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
          
          <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
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
                  // Fallback to a professional placeholder instead of text avatar
                  (e.target as HTMLImageElement).src = 'https://lh3.googleusercontent.com/rd-gg/AIJ2gl8I8T0UIvs0nMrjyQScC-vJqlUtvwcMBLpmehqC3B9M5-JPOPhdxfd_UP0KTm70dChTo8hI06lFFgxuByiM9J_WI-Bu9tkC63Fj5BnfstQMiSblSRXZU1iTQQ5-9Zjuxsmvr1K-Pp6Zzal237N5iOV4zD1u5hoFNhp-GZtulrnaPO9jZ89mB-xAiLHq_OR6xBQq6x2HBZeG7vNqy08Fe4S8y63aAg6DGR6l9qoHXyV95KJEdbPaEWJ6nLMuwVbg7Z9rAN1dDoTaRnjr7o7AqZYb4fPCQgnWpVseCNtxrI0XQ48N1HGjcpsqnB24w_tFgva73BoUQ45LFru1FP4mCe-Ecu3DAeX-ZOJLk2D0AdimhqidkgpZDZFltXdGETRFQ9L7YIbkxsAyuCH6SwZu0ztcM3OemEBCkeW8gg4x8SMep6dy930dkNoK0XilkfCHUYGbDU4p6Q1pnOJSWUjLjnL65Qfq7wvDvUmdXeMNJzwXLYSzdxwv98FnpjfrSOtAelfSveDbf7TdZ_jcTQmRqorOJCxRrf_gOk5R9Anq3J5J3wcxZiEk6fmnf2HP5L9QfpEtFSLDOpRT2x0GZRYaNVWqL6FbFqQkD68-hr8pt07ygbyfO_TeDxZV0NHTgwpItTGPMPQ-spn9rFHk_tB5a0gpUevLCCApurFnlsB5LJytm5QX_eT2vhvIvovUMG2h81DnPMa5PFOrdQ2XT5L-v4_MlhncQqvdF0GGfKcxDbR3KEg2t0hs78IoDNF4LTtSgdlbOiFrmO2xfP_ZOTLbG8KoZ35MZ5cOZ8Leb34tS9cHUQOn7UlxrOW11Ee1UEmxzNh5NQBXLkSSrUbp_n3LP30x6aZADPnsGfyu_wFTxigvQeOY-22ph0offnVlPFVrud8Gz1tyQ4FYjP00XKwtox1KMtOzJ_tyMrBKx3H8o0EHgCzLQCKBtOy4_Ndk51uPtLXdp7xbuaR_M1vkJNi6VugXKZQgaBjvTKBpElJlmcNAAndLHtu_JNBEpC--YFPqEQZotJuINRzvvOIe60Wrhtwe7Ehe7Qngg2s_8a5xi74ABYVfQjsfVABFfFpZ2zJ7mKC5lXLzxtLwZXKkvctSfq69Fv9W_66J1eXcoGhVHFRTWeLjZILCaIRA-dEtDAJO3S8yPMIAsuC87B4LQV2iH-3unR3Sf2y_HZQzM06zRL1y--cws_bZWfXCLbsFViI_vcR01WyYFnOeh_owK096WUXkbw2KCU6HP-L8_a8YG_v8XVg9om5_saJcdKG_E9djw-QzFhF872heqEyucnEzhMIxSfi5SnR2kwGX7ctJ02IPDzAYQJnA_2Q0y0zMFqo1WfMFMRfhGFJJCMk0cl1fTPYtxIt1fJXTlLvqtEfqJWJrp54Sfzi8fGEkjQT8zAPD2pxmUS-IVrYUyN5qJl9GgO85bNyLyZv5xSSerOuH5SPDgrMdGoNn6dcN5RtdRk3t_W9BReiD8gqTNFt2-bWgupuFT2QTgqm-1JhBJgZk=s1024-rj';
                }}
              />
            </div>

            {/* Floating Badges */}
            <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-900 p-2 sm:p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 animate-bounce transition-colors duration-300" style={{ animationDuration: '3s' }}>
              <Database className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 dark:text-teal-400" />
              <span className="text-[10px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">Data Engineer</span>
            </div>
             <div className="absolute top-10 -left-2 sm:-left-6 bg-white dark:bg-slate-900 p-2 sm:p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 transition-colors duration-300" >
              <Cloud className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 dark:text-blue-400" />
              <span className="text-[10px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">AWS Certified</span>
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default Home;