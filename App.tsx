import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { HashRouter, Routes, Route, useLocation } from './components/PageTransition';
import { ThemeProvider } from './components/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Portfolio from './pages/Portfolio';
import ElevatorPitch from './pages/ElevatorPitch';
import Contact from './pages/Contact';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pitch" element={<ElevatorPitch />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;