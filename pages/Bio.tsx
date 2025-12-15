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
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">Biography</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 transition-colors duration-300">The journey, the mission, and the passion behind the code.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        
        {/* Main Content Column */}
        <div className="md:col-span-2 space-y-12">
          {/* About Me Section */}
          <section className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 relative overflow-hidden transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 dark:bg-teal-900/20 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Award className="text-teal-600 dark:text-teal-400 w-6 h-6 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">About Me</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg transition-colors duration-300">
                Onokwuru Oscar OnyeBuchi is a Cloud & Data Engineering professional passionate about using technology to solve meaningful problems across Africa. He holds an <span className="font-semibold text-slate-800 dark:text-white">AWS Solutions Architect Associate</span> certification and is undergoing a Data Engineering foundation program where he learned teamwork, cloud fundamentals, and product thinking.
              </p>
            </div>
          </section>

          {/* Journey Section */}
          <section className="relative">
            <div className="flex items-center mb-6">
              <Rocket className="text-teal-600 dark:text-teal-400 w-6 h-6 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">My Journey</h2>
            </div>
            
            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-8 pb-4 transition-colors duration-300">
              {/* Month 1 */}
              <div className="ml-8 relative">
                <span className="absolute -left-[43px] top-1 bg-slate-50 dark:bg-slate-950 border-2 border-teal-500 rounded-full w-5 h-5 transition-colors duration-300"></span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white transition-colors duration-300">Month 1: Foundation</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1 transition-colors duration-300">Learned how African GCGOs operate and how technology can create large-scale impact.</p>
              </div>
              
              {/* Month 2 */}
              <div className="ml-8 relative">
                <span className="absolute -left-[43px] top-1 bg-slate-50 dark:bg-slate-950 border-2 border-teal-500 rounded-full w-5 h-5 transition-colors duration-300"></span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white transition-colors duration-300">Month 2: Skills Strengthening</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1 transition-colors duration-300">Strengthened teamwork, problem-solving, and collaboration skills.</p>
              </div>

              {/* Month 3 */}
              <div className="ml-8 relative">
                <span className="absolute -left-[43px] top-1 bg-slate-50 dark:bg-slate-950 border-2 border-teal-500 rounded-full w-5 h-5 transition-colors duration-300"></span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white transition-colors duration-300">Month 3: Application</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1 transition-colors duration-300">Began applying cloud + data concepts to purpose-driven projects.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Column: Profile Card & Mission */}
        <div className="space-y-8">
           {/* Profile Card */}
           <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 text-center transition-all duration-300">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-md opacity-50"></div>
                <img 
                  src="/images/profile.jpg"
                  alt="Buchi" 
                  className="w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 relative z-10 shadow-sm transition-colors duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Onye+Buchi&background=0D9488&color=fff&size=512';
                  }}
                />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg transition-colors duration-300">TechWithBuchi</h3>
              <div className="flex items-center justify-center gap-2 text-teal-600 dark:text-teal-400 mt-1 transition-colors duration-300">
                <Cloud size={16} />
                <span className="text-sm font-medium">Cloud Engineer</span>
              </div>
           </div>

          {/* Mission Section */}
          <section className="bg-teal-700 dark:bg-teal-900/40 border border-teal-600 dark:border-teal-800 rounded-xl p-8 shadow-lg text-white relative overflow-hidden transition-colors duration-300">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="flex items-center mb-4 relative z-10">
              <Target className="text-teal-200 dark:text-teal-300 w-6 h-6 mr-3" />
              <h2 className="text-xl font-bold text-white">My Mission</h2>
            </div>
            <p className="text-teal-50 dark:text-teal-100 text-lg leading-relaxed font-light italic relative z-10">
              "To build scalable, cloud-native systems that improve lives through innovation and data-driven thinking."
            </p>
          </section>
        </div>
      </div>

      {/* Skills Section */}
      <section>
        <div className="flex items-center mb-8">
          <Cpu className="text-teal-600 dark:text-teal-400 w-8 h-8 mr-3" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors duration-300">Technical Arsenal</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-teal-50 dark:bg-teal-900/30 rounded-lg mr-3 transition-colors duration-300">
                  <category.icon className="text-teal-600 dark:text-teal-400 w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white transition-colors duration-300">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700 transition-colors duration-300">
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