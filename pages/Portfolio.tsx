import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { ExternalLink, Database, Home, Leaf, Cloud, Workflow, Server, Terminal, FileText, ChevronDown, ChevronUp, LayoutGrid, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  icon: React.ElementType;
  description: string;
  detailedDescription?: string;
  subtitle?: string;
  tags: string[];
  isFlagship?: boolean;
  projectUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  icon: Icon, 
  description, 
  detailedDescription,
  subtitle, 
  tags, 
  isFlagship = false,
  projectUrl
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-white rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-lg flex flex-col h-full ${isFlagship ? 'border-teal-500 shadow-md md:col-span-2' : 'border-slate-200'}`}>
      <div className={`px-6 py-4 border-b ${isFlagship ? 'bg-teal-50 border-teal-100' : 'bg-slate-50 border-slate-100'} flex justify-between items-center`}>
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isFlagship ? 'bg-teal-100 text-teal-700' : 'bg-slate-200 text-slate-700'}`}>
            <Icon size={isFlagship ? 24 : 20} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">{title}</h3>
            {subtitle && <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{subtitle}</p>}
          </div>
        </div>
        {isFlagship && <span className="bg-teal-600 text-white text-xs px-3 py-1 rounded-full font-medium">Flagship</span>}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-slate-600 mb-4 leading-relaxed">
          {description}
        </p>
        
        <AnimatePresence>
          {isExpanded && detailedDescription && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-2 pb-6 text-sm text-slate-600 bg-slate-50/50 -mx-6 px-6 border-y border-slate-100 mb-4">
                <div className="font-semibold text-slate-800 mb-2 mt-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                  Technical Details
                </div>
                <p className="leading-relaxed whitespace-pre-line">{detailedDescription}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="mt-auto space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            {projectUrl ? (
              <a 
                href={projectUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-800 transition-colors"
              >
                View Presentation <ExternalLink size={14} className="ml-1" />
              </a>
            ) : (
              <span></span> /* Spacer */
            )}

            {detailedDescription && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors focus:outline-none"
              >
                {isExpanded ? 'Less Info' : 'Learn More'}
                {isExpanded ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'highlights' | 'external'>('highlights');

  return (
    <PageTransition className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Portfolio</h1>
        <p className="text-slate-500 max-w-2xl mx-auto mb-8">
          A showcase of impactful solutions leveraging cloud architecture, data engineering, and product thinking.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center">
          <div className="bg-slate-100 p-1.5 rounded-xl inline-flex shadow-inner">
            <button
              onClick={() => setActiveTab('highlights')}
              className={`flex items-center px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'highlights'
                  ? 'bg-white text-teal-600 shadow-sm ring-1 ring-black/5'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
              }`}
            >
              <LayoutGrid size={18} className="mr-2" />
              Selected Projects
            </button>
            <button
              onClick={() => setActiveTab('external')}
              className={`flex items-center px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'external'
                  ? 'bg-white text-teal-600 shadow-sm ring-1 ring-black/5'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
              }`}
            >
              <Globe size={18} className="mr-2" />
              Data Science Portfolio
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'highlights' ? (
          <motion.div
            key="highlights"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Project 1: Smart Care */}
            <div className="md:col-span-2 lg:col-span-2">
              <ProjectCard 
                title="Smart Care" 
                subtitle="Healthcare Access"
                icon={Database}
                isFlagship={true}
                description="A cloud-powered concept for improving healthcare access using data workflows and event-driven design. This system orchestrates patient data to streamline triage and resource allocation in resource-constrained environments."
                detailedDescription={`Smart Care leverages AWS Lambda for serverless compute and Amazon EventBridge to handle real-time patient data ingestion. The architecture ensures high availability and scalability, critical for healthcare applications. 
                
                By decoupling services, we achieved a theoretical reduction in latency for emergency triage routing. The system also integrates with Amazon SNS for immediate alerts to medical personnel, ensuring that critical data reaches the right hands instantly.`}
                tags={['Cloud Architecture', 'Event-Driven', 'Data Workflows', 'AWS']}
                projectUrl="https://docs.google.com/presentation/d/1dRuyCU1jTwSOvqa3sWPwt1zbj0ylTCmPapIQneSwzhY/edit?usp=sharing"
              />
            </div>

            {/* Project 2: HomeStarter */}
            <div className="lg:col-span-1">
              <ProjectCard 
                title="HomeStarter" 
                subtitle="PropTech Marketplace"
                icon={Home}
                description="The Flexible Homeownership Marketplace for African Youths. Facilitates rent-to-own models, installment payments, verified listings, and mortgage readiness tracking."
                detailedDescription={`HomeStarter is built as a microservices-inspired application. It features a robust identity verification workflow to ensure trust between buyers and sellers. 
                
                The platform includes a mortgage calculator engine and tracks user financial behavior to build a 'readiness score', enabling financial institutions to assess loan eligibility for unbanked users based on their platform activity.`}
                tags={['Marketplace', 'FinTech', 'User Verification']}
                projectUrl="https://docs.google.com/presentation/d/1jqBhk_Q9bi65NQG5YqTTsPnD_ajaP7au_Pj9FUj4m6c/edit?usp=sharing"
              />
            </div>

            {/* Project 3: O3one Farms */}
            <div className="lg:col-span-1">
              <ProjectCard 
                title="O3one Farms" 
                subtitle="AgriTech Process"
                icon={Leaf}
                description="A digital process initiative aimed at digitizing agricultural workflows. Replaced paper-based tracking with digital logs to improve harvest data accuracy and supply chain visibility."
                detailedDescription={`This initiative transformed manual record-keeping into a digital-first workflow using mobile-friendly web forms. Data is stored in a centralized relational database, allowing for real-time dashboards on harvest yields and supply chain bottlenecks. 
                
                The move to digital logs significantly reduced data entry errors and improved inventory forecasting accuracy.`}
                tags={['Digitization', 'Process Improvement', 'AgriTech']}
              />
            </div>

            {/* Project 4: Portfolio Presentation */}
            <div className="lg:col-span-1">
              <ProjectCard 
                title="Portfolio Architecture" 
                subtitle="System Documentation"
                icon={FileText}
                description="Detailed documentation and architectural overview of my portfolio ecosystem. Breaks down the tech stack, design choices, and deployment strategy."
                detailedDescription={`This portfolio is a Single Page Application (SPA) built with React and TypeScript, styled with Tailwind CSS for rapid UI development. 
                
                It uses React Router for client-side navigation and Framer Motion for smooth page transitions. The architecture focuses on component reusability and clean code principles, ensuring easy maintenance and scalability.`}
                tags={['Documentation', 'System Design', 'React/AWS']}
                projectUrl="https://docs.google.com/presentation/d/1vPWKqObZA9HjpC2DUBARyNL070n_nvFGEx_mqKLmkW8/edit?usp=sharing"
              />
            </div>

            {/* Section Divider */}
            <div className="md:col-span-2 lg:col-span-3 mt-8 mb-4">
              <div className="flex items-center gap-4">
                <div className="h-px bg-slate-200 flex-grow"></div>
                <h2 className="text-slate-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                  <Cloud size={16} /> Data Engineering Labs
                </h2>
                <div className="h-px bg-slate-200 flex-grow"></div>
              </div>
            </div>

            {/* Future Project: ETL */}
            <div className="lg:col-span-1">
              <ProjectCard 
                title="Serverless ETL Pipeline" 
                subtitle="In Progress"
                icon={Workflow}
                description="Building robust data ingestion pipelines using Python, AWS Glue, and Lambda. Focuses on transforming raw JSON logs into structured formats for downstream analytics."
                detailedDescription={`A prototype pipeline that utilizes AWS Lambda triggered by S3 file uploads to process raw application logs. 
                
                The system utilizes Pandas layers for lightweight data transformation and cleansing, outputting optimized Parquet files to a curated S3 bucket. This setup is designed to be cost-effective and completely serverless, scaling automatically with data volume.`}
                tags={['ETL', 'AWS Glue', 'Python', 'Data Lake']}
              />
            </div>

            {/* Future Project: DWH */}
            <div className="lg:col-span-1">
              <ProjectCard 
                title="Data Warehouse Demo" 
                subtitle="Coming Soon"
                icon={Server}
                description="Designing a star-schema data model in Redshift to optimize query performance for BI dashboards. Includes data partitioning and sort key optimization strategies."
                detailedDescription={`This project demonstrates a Redshift cluster setup optimized for retail analytics. 
                
                It features a dimensional model (Star Schema) with Fact and Dimension tables. The design specifically focuses on the selection of Distribution Keys to minimize data shuffling during joins and Sort Keys to accelerate date-range queries for dashboarding.`}
                tags={['Redshift', 'SQL', 'Data Modeling', 'DWH']}
              />
            </div>

            {/* Future Project: Cloud Automation */}
            <div className="lg:col-span-1">
              <ProjectCard 
                title="Cloud Automation" 
                subtitle="Infrastructure as Code"
                icon={Terminal}
                description="Developing reusable Terraform modules to provision reproducible cloud environments. Automates the deployment of VPCs, ECS clusters, and RDS instances."
                detailedDescription={`A repository of reusable Terraform modules designed to deploy a High Availability (HA) network architecture.
                
                The modules automate the provisioning of VPCs with public/private subnets, NAT Gateways, and Application Load Balancers. This ensures that infrastructure changes are version-controlled and environments can be spun up or torn down in minutes.`}
                tags={['Terraform', 'DevOps', 'CI/CD', 'Automation']}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="external"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
             <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex justify-between items-center">
                   <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                   </div>
                   <a 
                    href="https://datascienceportfol.io/oscaronyebuchi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-slate-500 hover:text-teal-600 flex items-center gap-1 font-medium transition-colors"
                   >
                     Open in new tab <ExternalLink size={12} />
                   </a>
                </div>
                <div className="relative w-full h-[800px]">
                  <iframe
                    src="https://datascienceportfol.io/oscaronyebuchi"
                    className="w-full h-full border-0"
                    title="Data Science Portfolio"
                  />
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Portfolio;