import React from 'react';
import PageTransition from '../components/PageTransition';
import { Award, Target, Rocket, Cloud, Database, Terminal, Cpu, Users } from 'lucide-react';

const Bio: React.FC = () => {
  const skillCategories = [
    {
      title: "Cloud Architecture",
      icon: Cloud,
      skills: ["AWS Solutions Architect (Associate)", "Serverless (Lambda)", "EC2 & VPC Networking", "IAM Security", "S3 Storage Strategy", "CloudWatch"]
    },
    {
      title: "Data Engineering",
      icon: Database,
      skills: ["ETL/ELT Pipelines", "AWS Glue", "Amazon Redshift", "Advanced SQL", "Python (Pandas)", "Data Modeling (Star Schema)"]
    },
    {
      title: "Tools & DevOps",
      icon: Terminal,
      skills: ["Terraform (IaC)", "Git & GitHub", "Linux CLI", "VS Code", "CI/CD Basics", "Automation Scripts"]
    },
    {
      title: "Core Competencies",
      icon: Users,
      skills: ["Problem Solving", "Product Thinking", "Agile Collaboration", "Technical Documentation", "Process Digitization", "System Design"]
    }
  ];

  return (
    <PageTransition className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      
      {/* Header */}
      <div className="mb-12 border-l-4 border-teal-500 pl-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Biography</h1>
        <p className="text-lg text-slate-500">The journey, the mission, and the passion behind the code.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        
        {/* Main Content Column */}
        <div className="md:col-span-2 space-y-12">
          {/* About Me Section */}
          <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Award className="text-teal-600 w-6 h-6 mr-3" />
                <h2 className="text-2xl font-bold text-slate-800">About Me</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                Onokwuru Oscar OnyeBuchi is a Cloud & Data Engineering professional passionate about using technology to solve meaningful problems across Africa. He holds an <span className="font-semibold text-slate-800">AWS Solutions Architect Associate</span> certification and is undergoing a Data Engineering foundation program where he learned teamwork, cloud fundamentals, and product thinking.
              </p>
            </div>
          </section>

          {/* Journey Section */}
          <section className="relative">
            <div className="flex items-center mb-6">
              <Rocket className="text-teal-600 w-6 h-6 mr-3" />
              <h2 className="text-2xl font-bold text-slate-800">My Journey</h2>
            </div>
            
            <div className="relative border-l-2 border-slate-200 ml-3 space-y-8 pb-4">
              {/* Month 1 */}
              <div className="ml-8 relative">
                <span className="absolute -left-[43px] top-1 bg-white border-2 border-teal-500 rounded-full w-5 h-5"></span>
                <h3 className="text-lg font-semibold text-slate-800">Month 1: Foundation</h3>
                <p className="text-slate-600 mt-1">Learned how African GCGOs operate and how technology can create large-scale impact.</p>
              </div>
              
              {/* Month 2 */}
              <div className="ml-8 relative">
                <span className="absolute -left-[43px] top-1 bg-white border-2 border-teal-500 rounded-full w-5 h-5"></span>
                <h3 className="text-lg font-semibold text-slate-800">Month 2: Skills Strengthening</h3>
                <p className="text-slate-600 mt-1">Strengthened teamwork, problem-solving, and collaboration skills.</p>
              </div>

              {/* Month 3 */}
              <div className="ml-8 relative">
                <span className="absolute -left-[43px] top-1 bg-white border-2 border-teal-500 rounded-full w-5 h-5"></span>
                <h3 className="text-lg font-semibold text-slate-800">Month 3: Application</h3>
                <p className="text-slate-600 mt-1">Began applying cloud + data concepts to purpose-driven projects.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Column: Profile Card & Mission */}
        <div className="space-y-8">
           {/* Profile Card */}
           <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100 text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <div className="absolute inset-0 bg-teal-100 rounded-full blur-md opacity-50"></div>
                <img 
                  src="https://lh3.googleusercontent.com/rd-gg/AIJ2gl_BMtStylm3Xe4PbRO_phNR97QSUTFRZIaMam2TJVm8XkdiEZl3MDfs49BC9cC0O_Yz1Ag36dpsUWKG65axbCkitwvgpFffTz9f5IqLqo_rqJI4bxx7c_PBxpPmmq-z7fle5GPof0BR8VX5oiEFIE_7YCRcfaN_KLGZVBNApWQLXjnq8Sc0J6AEIGcHvutpubKm6meUXpvrC4v0PoQ6KvDSQy7atI5uJdLrhiNQs-43WwiPOeepd4QesdxJNYB4m30MviPZnyoiPu5bl216ScbvRFrcm1liMKp68CbcrS2MPh6H17WO4sVxPmlGWro-NdgCANXbKSQr8xPySGRvQ_7lX4tM8lpcb3q1msPJMbqdW-nh7r1BWHfYjTiDypKHq2EPE7SaA_3SPjgV5883Dh8XU0toFTH1YHura4tMaaUCZyi02OPLxk4RqhHhWO8-LbajNXktSXZ2jqmyF_DWfSPMjPfc9FCBdO52xuhn9lKHLsroL3Z2c-YY5uZQaIK1Bza40CSZnNHJmiuGqabmAp3bpeQYnObJFHL2UP5vDKnaxWgxUBcarJCq3nNJeuogOFyK5A_QaX6hdHj2BcVsNJAruSj66mNNbgXut08zX1xRKbGOz6ODzNyvrV2i1hwOnU1uxvqc-CyOAk8wm5yg8l-QM7Ptrz1Qsi1Qep0y15-3nWRBe-HxrFJYLedv-I7_z9-TIHcZ7OCc9JCff-tcuF9mnUkk3oaK618Zd2D_0G9WFwmg2HNsKlVs4YR_QxglhiVHMy8RLzxnXtgLAWHq4uNZc2EQ8q_IC7w6Vcd0wuIrOYY3aeCcaR5a2WTjo4Std6k5sOC4ZRiWIi6NR4AdW-UpVrC-0WmDBmIP0BdyGVi-RP0i6U7MtR_4f35IhqhxxAjVk6bmOKcsd3dm0LCOetsKhf2puWUfFCwvYPsd1mTmYM7XNurVFaO5v_S5DMDxFbsIymLV_zYzFXRRg0Bq6Pgr5FNSvDisoCfZ8ubUC7ATMRse7mV-VtE_-1kbRGCWPcNQvTWyoZdFi2Y5iLj3uAHJuSet01UBSV-DYaOJVa4ovTZtOunB_N7S6cUSvRh4Vw4JtQEhPdmsTNU8Shcv5v5LUdT6pCmHgvymPeZ5wnpOpVhjQ6sAvoE6AC60HXm5ueyu8NRK_scV-cShu7ldPdE2TzVaSGqbmauyyDHqrleM7Z96JvthoD0LAJ6204lExkLOSusML_4_74tHnN45qd1npPlrTgLY11Hl_4JftXwLs5bVPexvQT3gbHIAZJM8NyfVXq_Q2AS5QjnGIID3_GrXlvGTgXHhvV0mYk120i0Sy13RQAKxHX9VgXNg02Y-j_3b1j8FMjRdzb1FZGH2PGWDJVXuXG4M3M9hpEwv4580ZgOXQD9PGZhf9wzLm-UErgiQCmDpOZhZkEyiPqmkupg-U6BvrlvadYAF9Z2XB3uGIAmvfx-9t6sQBBkkP2NCNY025hcPg4s9DVAOdJhS1YwndWTmO7hl=s1024-rj"
                  alt="Buchi" 
                  className="w-full h-full object-cover rounded-full border-4 border-white relative z-10 shadow-sm"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Onye+Buchi&background=0D9488&color=fff&size=512';
                  }}
                />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">TechWithBuchi</h3>
              <div className="flex items-center justify-center gap-2 text-teal-600 mt-1">
                <Cloud size={16} />
                <span className="text-sm font-medium">Cloud Engineer</span>
              </div>
           </div>

          {/* Mission Section */}
          <section className="bg-teal-900 rounded-xl p-8 shadow-lg text-white relative overflow-hidden">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="flex items-center mb-4 relative z-10">
              <Target className="text-teal-300 w-6 h-6 mr-3" />
              <h2 className="text-xl font-bold text-white">My Mission</h2>
            </div>
            <p className="text-teal-50 text-lg leading-relaxed font-light italic relative z-10">
              "To build scalable, cloud-native systems that improve lives through innovation and data-driven thinking."
            </p>
          </section>
        </div>
      </div>

      {/* Skills Section */}
      <section>
        <div className="flex items-center mb-8">
          <Cpu className="text-teal-600 w-8 h-8 mr-3" />
          <h2 className="text-3xl font-bold text-slate-900">Technical Arsenal</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-teal-50 rounded-lg mr-3">
                  <category.icon className="text-teal-600 w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-slate-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </PageTransition>
  );
};

export default Bio;