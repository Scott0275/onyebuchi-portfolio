import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from './PageTransition';
import { useTheme } from './ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Bio', path: '/bio' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Elevator Pitch', path: '/pitch' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between h-full items-center">
            <div className="flex-shrink-0 flex items-center z-50">
              <Link to="/" className="text-xl font-bold text-slate-900 dark:text-white tracking-tight" onClick={closeMenu}>
                TechWith<span className="text-teal-600 dark:text-teal-500">Buchi</span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-teal-600 dark:text-teal-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Theme Toggle Button Desktop */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 focus:outline-none transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button & Toggle */}
            <div className="md:hidden flex items-center gap-4 z-50">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 focus:outline-none"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={toggleMenu}
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 focus:outline-none active:scale-95 transition-transform"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white dark:bg-slate-950 z-40 overflow-y-auto border-t border-slate-100 dark:border-slate-800"
            >
              <div className="flex flex-col p-4 space-y-2 pb-20">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={closeMenu}
                    className={`block px-4 py-4 rounded-xl text-lg font-medium transition-all duration-200 ${
                      location.pathname === link.path
                        ? 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20'
                        : 'text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Social Links in Mobile Menu */}
                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex justify-center space-x-8">
                    <a href="https://github.com/scott0275" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors p-2">
                    <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/oscar-onokwuru" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors p-2">
                    <Linkedin size={24} />
                    </a>
                    <a href="https://twitter.com/OOnokwuru" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors p-2">
                    <Twitter size={24} />
                    </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TechWithBuchi. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/scott0275" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/oscar-onokwuru" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com/OOnokwuru" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;