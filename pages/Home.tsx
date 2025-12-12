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
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold tracking-wide uppercase">
              <Cloud size={14} className="mr-2" />
              TechWithBuchi
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              Onokwuru Oscar <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Onyebuchi
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium max-w-lg mx-auto md:mx-0">
              Cloud & Data Engineer • AWS Certified Solutions Architect • Problem-Solver & Smart-Care Innovator
            </p>
          </div>

          <p className="text-slate-500 leading-relaxed max-w-md mx-auto md:mx-0">
            I build cloud-native data solutions and practical systems that solve real-world problems across Africa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <Link
              to="/bio"
              className="flex items-center justify-center px-8 py-3 w-full sm:w-auto text-base font-medium rounded-lg text-white bg-teal-600 hover:bg-teal-700 transition-all duration-200 shadow-lg shadow-teal-200 hover:shadow-teal-300 transform hover:-translate-y-0.5"
            >
              <User className="w-5 h-5 mr-2" />
              View Bio
            </Link>
            <Link
              to="/portfolio"
              className="flex items-center justify-center px-8 py-3 w-full sm:w-auto text-base font-medium rounded-lg text-slate-700 bg-white border border-slate-200 hover:border-teal-500 hover:text-teal-600 transition-all duration-200"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Portfolio
            </Link>
          </div>
        </div>

        {/* Right Column: Image with Cloud/Tech styling */}
        <div className="relative order-1 md:order-2 flex justify-center">
          {/* Decorative Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-teal-200/40 via-blue-200/30 to-transparent blur-3xl rounded-full opacity-70"></div>
          
          <div className="relative z-10 w-72 h-72 md:w-96 md:h-96">
            {/* Tech Ring Decoration */}
            <div className="absolute inset-0 border-2 border-dashed border-teal-200 rounded-full animate-[spin_20s_linear_infinite]"></div>
            
            {/* Main Image Container */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-teal-900/10">
              <div className="absolute inset-0 bg-teal-900/10 mix-blend-overlay z-10"></div> {/* Subtle tint */}
              <img 
                src="https://lh3.googleusercontent.com/rd-gg/AIJ2gl_BMtStylm3Xe4PbRO_phNR97QSUTFRZIaMam2TJVm8XkdiEZl3MDfs49BC9cC0O_Yz1Ag36dpsUWKG65axbCkitwvgpFffTz9f5IqLqo_rqJI4bxx7c_PBxpPmmq-z7fle5GPof0BR8VX5oiEFIE_7YCRcfaN_KLGZVBNApWQLXjnq8Sc0J6AEIGcHvutpubKm6meUXpvrC4v0PoQ6KvDSQy7atI5uJdLrhiNQs-43WwiPOeepd4QesdxJNYB4m30MviPZnyoiPu5bl216ScbvRFrcm1liMKp68CbcrS2MPh6H17WO4sVxPmlGWro-NdgCANXbKSQr8xPySGRvQ_7lX4tM8lpcb3q1msPJMbqdW-nh7r1BWHfYjTiDypKHq2EPE7SaA_3SPjgV5883Dh8XU0toFTH1YHura4tMaaUCZyi02OPLxk4RqhHhWO8-LbajNXktSXZ2jqmyF_DWfSPMjPfc9FCBdO52xuhn9lKHLsroL3Z2c-YY5uZQaIK1Bza40CSZnNHJmiuGqabmAp3bpeQYnObJFHL2UP5vDKnaxWgxUBcarJCq3nNJeuogOFyK5A_QaX6hdHj2BcVsNJAruSj66mNNbgXut08zX1xRKbGOz6ODzNyvrV2i1hwOnU1uxvqc-CyOAk8wm5yg8l-QM7Ptrz1Qsi1Qep0y15-3nWRBe-HxrFJYLedv-I7_z9-TIHcZ7OCc9JCff-tcuF9mnUkk3oaK618Zd2D_0G9WFwmg2HNsKlVs4YR_QxglhiVHMy8RLzxnXtgLAWHq4uNZc2EQ8q_IC7w6Vcd0wuIrOYY3aeCcaR5a2WTjo4Std6k5sOC4ZRiWIi6NR4AdW-UpVrC-0WmDBmIP0BdyGVi-RP0i6U7MtR_4f35IhqhxxAjVk6bmOKcsd3dm0LCOetsKhf2puWUfFCwvYPsd1mTmYM7XNurVFaO5v_S5DMDxFbsIymLV_zYzFXRRg0Bq6Pgr5FNSvDisoCfZ8ubUC7ATMRse7mV-VtE_-1kbRGCWPcNQvTWyoZdFi2Y5iLj3uAHJuSet01UBSV-DYaOJVa4ovTZtOunB_N7S6cUSvRh4Vw4JtQEhPdmsTNU8Shcv5v5LUdT6pCmHgvymPeZ5wnpOpVhjQ6sAvoE6AC60HXm5ueyu8NRK_scV-cShu7ldPdE2TzVaSGqbmauyyDHqrleM7Z96JvthoD0LAJ6204lExkLOSusML_4_74tHnN45qd1npPlrTgLY11Hl_4JftXwLs5bVPexvQT3gbHIAZJM8NyfVXq_Q2AS5QjnGIID3_GrXlvGTgXHhvV0mYk120i0Sy13RQAKxHX9VgXNg02Y-j_3b1j8FMjRdzb1FZGH2PGWDJVXuXG4M3M9hpEwv4580ZgOXQD9PGZhf9wzLm-UErgiQCmDpOZhZkEyiPqmkupg-U6BvrlvadYAF9Z2XB3uGIAmvfx-9t6sQBBkkP2NCNY025hcPg4s9DVAOdJhS1YwndWTmO7hl=s1024-rj" 
                alt="Onokwuru Oscar Onyebuchi" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Onye+Buchi&background=0D9488&color=fff&size=512';
                }}
              />
            </div>

            {/* Floating Badges */}
            <div className="absolute -bottom-2 -right-2 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 animate-bounce" style={{ animationDuration: '3s' }}>
              <Database className="w-5 h-5 text-teal-600" />
              <span className="text-xs font-bold text-slate-700">Data Engineer</span>
            </div>
             <div className="absolute top-10 -left-6 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2" >
              <Cloud className="w-5 h-5 text-blue-500" />
              <span className="text-xs font-bold text-slate-700">AWS Certified</span>
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default Home;