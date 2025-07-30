import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import Homepage from './components/pages/Homepage';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import FAQ from './components/pages/FAQ';
import Contact from './components/pages/Contact';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App min-h-screen">
        <Layout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </div>
    </Router>
  );
}

export default App;