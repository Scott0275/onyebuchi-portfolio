import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { BookOpen, ExternalLink, Twitter, Clock, Tag, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Placeholder data - Replace with your actual Medium posts
  const mediumPosts = [
    {
      id: 1,
      title: "Demystifying Serverless Architecture for Data Pipelines",
      excerpt: "How to leverage AWS Lambda and EventBridge to build scalable, cost-effective data workflows without managing a single server.",
      date: "Oct 24, 2024",
      readTime: "5 min read",
      tags: ["AWS", "Data Engineering", "Serverless"],
      url: "https://medium.com/@onokwuruoscar101"
    },
    {
      id: 2,
      title: "My Journey to AWS Solutions Architect Associate",
      excerpt: "A breakdown of the resources, study plan, and hands-on labs that helped me ace the SAA-C03 exam.",
      date: "Sep 15, 2024",
      readTime: "7 min read",
      tags: ["Certification", "AWS", "Career Growth"],
      url: "https://medium.com/@onokwuruoscar101"
    },
    {
      id: 3,
      title: "Why Startups Need Data Engineering from Day One",
      excerpt: "Waiting to hire a data engineer? Here's why setting up a solid data infrastructure early prevents technical debt later.",
      date: "Aug 02, 2024",
      readTime: "4 min read",
      tags: ["Startups", "Data Strategy", "Infrastructure"],
      url: "https://medium.com/@onokwuruoscar101"
    },
    {
      id: 4,
      title: "Optimizing Redshift Queries for Real-time Analytics",
      excerpt: "Best practices for distribution keys, sort keys, and workload management (WLM) to keep your dashboards snappy.",
      date: "Jul 10, 2024",
      readTime: "6 min read",
      tags: ["Redshift", "SQL", "Performance"],
      url: "https://medium.com/@onokwuruoscar101"
    },
    {
      id: 5,
      title: "Terraform 101: Managing Infrastructure as Code",
      excerpt: "Getting started with Terraform state management, modules, and best practices for team collaboration.",
      date: "Jun 22, 2024",
      readTime: "5 min read",
      tags: ["Terraform", "DevOps", "IaC"],
      url: "https://medium.com/@onokwuruoscar101"
    },
    {
      id: 6,
      title: "Building a Data Lake on S3: A Practical Guide",
      excerpt: "Structuring your buckets, handling partitions, and setting up lifecycle policies for a cost-effective data lake.",
      date: "May 15, 2024",
      readTime: "8 min read",
      tags: ["AWS S3", "Data Lake", "Architecture"],
      url: "https://medium.com/@onokwuruoscar101"
    },
    {
      id: 7,
      title: "Python vs. SQL for ETL: When to Use Which?",
      excerpt: "Analyzing the trade-offs between processing data in-memory with Pandas versus pushing compute to the warehouse with SQL.",
      date: "Apr 04, 2024",
      readTime: "4 min read",
      tags: ["Python", "SQL", "ETL"],
      url: "https://medium.com/@onokwuruoscar101"
    }
  ];

  // Placeholder data - Replace with your actual Tweets/Threads
  const tweets = [
    {
      id: 1,
      content: "Just deployed my first multi-region DynamoDB setup. The replication latency is practically non-existent! #AWS #CloudComputing",
      date: "Nov 12, 2024",
      url: "https://twitter.com/OOnokwuru"
    },
    {
      id: 2,
      content: "Pro tip: Always use VPC Endpoints for S3 access within private subnets. Security + Cost savings combined. 🔐💰",
      date: "Oct 30, 2024",
      url: "https://twitter.com/OOnokwuru"
    },
    {
      id: 3,
      content: "Refactoring a monolith into microservices isn't just about code; it's about organizational structure. Conway's Law is real.",
      date: "Oct 15, 2024",
      url: "https://twitter.com/OOnokwuru"
    }
  ];

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = mediumPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(mediumPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Optional: scroll to top of list
    const listTop = document.getElementById('articles-list');
    if (listTop) listTop.scrollIntoView({ behavior: 'smooth' });
  };
  
  const nextPage = () => {
    if (currentPage < totalPages) paginate(currentPage + 1);
  };
  
  const prevPage = () => {
    if (currentPage > 1) paginate(currentPage - 1);
  };

  return (
    <PageTransition className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
          Technical Writing & <span className="text-teal-600 dark:text-teal-400">Insights</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
          I document my learning journey, share cloud architecture patterns, and discuss the intersection of technology and product development.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        
        {/* Main Column: Medium Articles */}
        <div className="lg:col-span-2 space-y-8" id="articles-list">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
            <BookOpen className="text-slate-900 dark:text-white w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Deep Dives on Medium</h2>
          </div>

          <div className="space-y-6">
            {currentPosts.map((post) => (
              <article key={post.id} className="group bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md hover:border-teal-200 dark:hover:border-teal-800 transition-all duration-300">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      <a href={post.url} target="_blank" rel="noopener noreferrer">
                        {post.title}
                      </a>
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                          <span key={tag} className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                            <Tag size={12} className="mr-1" /> {tag}
                          </span>
                        ))}
                      </div>
                      
                      <a 
                        href={post.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                      >
                        Read Article <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10">
              <button 
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg border border-slate-200 dark:border-slate-700 transition-all ${
                  currentPage === 1 
                    ? 'text-slate-300 dark:text-slate-600 cursor-not-allowed' 
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-teal-600 dark:hover:text-teal-400'
                }`}
                aria-label="Previous Page"
              >
                <ChevronLeft size={20} />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium border transition-all ${
                    currentPage === number
                      ? 'bg-teal-600 border-teal-600 text-white'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-teal-300 dark:hover:border-teal-700'
                  }`}
                >
                  {number}
                </button>
              ))}

              <button 
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg border border-slate-200 dark:border-slate-700 transition-all ${
                  currentPage === totalPages 
                    ? 'text-slate-300 dark:text-slate-600 cursor-not-allowed' 
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-teal-600 dark:hover:text-teal-400'
                }`}
                aria-label="Next Page"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          <div className="mt-8 text-center md:text-left">
            <a 
              href="https://medium.com/@onokwuruoscar101" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-200"
            >
              View More on Medium <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>

        {/* Sidebar: X (Twitter) Feed */}
        <div className="lg:col-span-1">
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 sticky top-24">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Twitter className="text-sky-500 w-5 h-5" />
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Micro-Thoughts</h2>
              </div>
              <a 
                href="https://twitter.com/OOnokwuru" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-medium text-slate-500 hover:text-sky-500 transition-colors"
              >
                @OOnokwuru
              </a>
            </div>

            <div className="space-y-6">
              {tweets.map((tweet) => (
                <div key={tweet.id} className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700 hover:border-sky-400 dark:hover:border-sky-500 transition-colors">
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-2 leading-relaxed">
                    "{tweet.content}"
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 dark:text-slate-500">{tweet.date}</span>
                    <a 
                      href={tweet.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-sky-500 hover:underline"
                    >
                      View
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800">
              <a 
                href="https://twitter.com/OOnokwuru" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-2.5 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-sky-300 dark:hover:border-sky-700 hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-200 shadow-sm"
              >
                Follow on X
              </a>
            </div>
          </div>
        </div>

      </div>

    </PageTransition>
  );
};

export default Blog;