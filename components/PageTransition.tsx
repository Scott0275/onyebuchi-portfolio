import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion } from 'framer-motion';

// --- Custom Router Implementation ---
// Replaces react-router-dom to fix missing module errors

const RouterContext = createContext<{ path: string; navigate: (path: string) => void }>({
  path: '/',
  navigate: () => {},
});

export const useLocation = () => {
  const context = useContext(RouterContext);
  return { pathname: context.path };
};

export const HashRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [path, setPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      const newPath = window.location.hash.slice(1) || '/';
      setPath(newPath);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (newPath: string) => {
    window.location.hash = newPath;
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const Routes: React.FC<{ children: React.ReactNode; location?: { pathname: string } }> = ({ children, location }) => {
  const context = useContext(RouterContext);
  const currentPath = location ? location.pathname : context.path;

  let foundMatch = null;
  React.Children.forEach(children, (child) => {
    if (foundMatch) return;
    if (!React.isValidElement(child)) return;
    // @ts-ignore
    if (child.props.path === currentPath) {
      foundMatch = child;
    }
  });

  return <>{foundMatch}</>;
};

export const Route: React.FC<{ path: string; element: React.ReactNode }> = ({ element }) => {
  return <>{element}</>;
};

export const Link: React.FC<{ to: string; className?: string; children: React.ReactNode; onClick?: () => void }> = ({ to, className, children, onClick }) => {
  return (
    <a 
      href={`#${to}`} 
      className={className}
      onClick={(e) => {
        if (onClick) onClick();
      }}
    >
      {children}
    </a>
  );
};

// --- PageTransition Component ---

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;