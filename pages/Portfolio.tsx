import React from 'react';
import PageTransition from '../components/PageTransition';
import { ExternalLink, Database, Home, Leaf, Cloud, Workflow, Server, Terminal, FileText } from 'lucide-react';

const ProjectCard = ({ 
  title, 
  icon: Icon, 
  description, 
  subtitle, 
  tags, 
  isFlagship = false,
  projectUrl
}: { 
  title: string; 
  icon: React.ElementType; 
  description: string; 
  subtitle?: string; 
  tags: string[]; 
  isFlagship?: boolean;
  projectUrl?: string;
}) => (
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
      <p className="text-slate-600 mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="mt-auto space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200">
              {tag}
            </span>
          ))}
        </div>

        {projectUrl && (
          <a 
            href={projectUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-800 transition-colors mt-2"
          >
            View Presentation <ExternalLink size={14} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  return (
    <PageTransition className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Selected Projects</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          A showcase of impactful solutions leveraging cloud architecture, data engineering, and product thinking.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Project 1: Smart Care */}
        <div className="md:col-span-2 lg:col-span-2">
          <ProjectCard 
            title="Smart Care" 
            subtitle="Healthcare Access"
            icon={Database}
            isFlagship={true}
            description="A cloud-powered concept for improving healthcare access using data workflows and event-driven design. This system orchestrates patient data to streamline triage and resource allocation in resource-constrained environments."
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
            tags={['Terraform', 'DevOps', 'CI/CD', 'Automation']}
          />
        </div>

      </div>
    </PageTransition>
  );
};

export default Portfolio;