import React, { useEffect } from 'react';
import PageTransition, { Link } from '../components/PageTransition';
import ProfileImage from '../components/ProfileImage';
import { Award, Target, Rocket, Cloud, Database, Terminal, Cpu, Users, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';

const Bio: React.FC = () => {
  // Check for hash to scroll to certifications if needed
  useEffect(() => {
    if (window.location.hash === '#certifications') {
      const element = document.getElementById('certifications');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

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

  const certifications = [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "2024",
      url: "https://drive.google.com/file/d/1xzEBMuzeczLGokgNssonqyUMD9yx3D-7/view?usp=sharing",
      icon: Cloud,
      color: "text-orange-500"
    },
    {
      name: "Cloud Computing",
      issuer: "ALX Africa",
      date: "2024",
      url: "https://savanna.alxafrica.com/certificates/f97x2SHTm5?utm_campaign=ALX%20-%202024%20-%20TR%20-%20AWS%20C4&utm_medium=email&_hsenc=p2ANqtz-_lFjenphQD1Lv6pJj0PIIVQcfJ0xABzZZC9Ja3uUYqcwDXlnJ-c1_xL4zIprzI5RSdQM10-JKWlz26g7uc5kzIDH29WkjlGE3wNgHUU4B9GwJ3rlE&_hsmi=105124670&utm_content=105124670&utm_source=hs_email",
      icon: Award,
      color: "text-teal-500"
    },
    {
      name: "Founders Academy",
      issuer: "ALX Africa",
      date: "2025",
      url: "https://savanna.alxafrica.com/certificates/P6G3fJMc82?utm_campaign=98449599-ALX%20-%202025%20-%20Ventures%20FLA%202W%20C0&utm_medium=email&_hsenc=p2ANqtz-_Kv6UTDfk-EGjCif1KsyTRgLEDl63diCWRR9OuNEyJhVGcPDaHygFnaeC5jE13e-oOVCkYm0A9T7Xspil1tB6R-zcXctnzQml2xURay2p76bXjJb0&_hsmi=112355529&utm_content=112355529&utm_source=hs_email",
      icon: Rocket,
      color: "text-purple-500"
    },
    {
      name: "DevOps Pre-Requisite",
      issuer: "KodeKloud",
      date: "2024",
      url: "https://drive.google.com/file/d/1KsjV0TT5cm3iN9xZQqS1OrwVLzk4OI4J/view?usp=sharing",
      icon: Terminal,
      color: "text-blue-500"
    },
    {
      name: "12 Factor App",
      issuer: "KodeKloud",
      date: "2024",
      url: "https://drive.google.com/file/d/1D9r77ILUmKNWgEYGBVKbz1e52DNOxo7W/view?usp=sharing",
      icon: Database,
      color: "text-green-500"
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
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg transition-colors duration-300">
                <p>
                  Oscar Onokwuru is a cloud data engineer and startup founder building technology-driven solutions for critical systems in emerging markets. He focuses on designing scalable cloud and data infrastructures that power real-world products in healthcare, housing, and access to essential services.
                </p>
                <p>
                  What sets Oscar apart is his founder mindset—combining technical execution with product vision. He doesn’t just build systems; he builds solutions with clear users, measurable impact, and long-term scalability in mind.
                </p>
                <p>
                  Driven by a passion for using data and cloud technology to improve efficiency, trust, and accessibility, Oscar is actively developing platforms like SmartCare and HomeStarter Connect. His work at ALX and beyond, combined with his <span className="font-semibold text-slate-800 dark:text-white">AWS Solutions Architect Associate</span> certification, is equipping him with the technical depth and leadership skills needed to turn complex problems into sustainable, investable products.
                </p>
              </div>
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
                <div className="w-full h-full rounded-full border-4 border-white dark:border-slate-800 relative z-10 shadow-sm overflow-hidden">
                   <ProfileImage alt="Buchi" className="w-full h-full object-cover" />
                </div>
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
      <section className="mb-16">
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

      {/* Certifications Section */}
      <section id="certifications" className="mb-16 scroll-mt-24">
        <div className="flex items-center mb-8">
          <ShieldCheck className="text-teal-600 dark:text-teal-400 w-8 h-8 mr-3" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors duration-300">Certifications & Credentials</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:border-teal-200 dark:hover:border-teal-800 transition-all duration-300 group">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-slate-50 dark:bg-slate-800 ${cert.color} transition-colors duration-300`}>
                    <cert.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{cert.issuer}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Issued: {cert.date}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Verify Credential <ExternalLink size={14} className="ml-1.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center py-12 border-t border-slate-200 dark:border-slate-800">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Ready to create impact?</h3>
        <Link 
          to="/contact" 
          className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500 transition-all duration-200 shadow-lg shadow-teal-500/20 dark:shadow-teal-900/20 transform hover:-translate-y-0.5"
        >
          Let's Connect <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </section>

    </PageTransition>
  );
};

export default Bio;