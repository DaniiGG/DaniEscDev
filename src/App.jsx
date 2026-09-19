import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Servicios from './pages/Servicios';
import SEO from './SEO';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from './hooks/useTranslation';

function HomePage() {
  const { t } = useTranslation();
  
  return (
    <>
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        path="/"
        noindex={true}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </div>
  );
}

export default App;