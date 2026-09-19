import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { profileData } from '../data/mockData';
import { useTranslation } from '../hooks/useTranslation';

const Navbar = () => {
  const { t, i18n, changeLanguage } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const navLinks = [
    { name: t('common.nav.home'), href: '#hero' },
    { name: t('common.nav.about'), href: '#about' },
    { name: t('common.nav.projects'), href: '#projects' },
    { name: t('common.nav.skills'), href: '#skills' },
    { name: t('common.nav.contact'), href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00f0ff] to-[#ff00ff] p-[2px]">
                <div className="w-full h-full rounded-lg bg-[#0a0a0f] flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-[#00f0ff]" />
                </div>
              </div>
              <span className="font-mono text-lg font-bold">
                <span className="text-[#00f0ff]">{'<'}</span>
                <span className="text-white">Dev</span>
                <span className="text-[#ff00ff]">/{'>'}</span>
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00f0ff]/10 to-[#ff00ff]/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    layoutId="navbar-hover"
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#00f0ff] to-[#ff00ff] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Social Links, Language Switcher & CTA */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <motion.a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-[#00f0ff] hover:neon-border-cyan transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-[#00f0ff] hover:neon-border-cyan transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
              </div>
              
              {/* Language Switcher */}
              <motion.button
                onClick={toggleLanguage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-[#00f0ff] hover:neon-border-cyan transition-all"
                aria-label="Change language"
              >
                <Globe className="w-5 h-5" />
              </motion.button>

              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                className="px-5 py-2.5 rounded-full font-mono text-sm font-medium bg-gradient-to-r from-[#00f0ff] to-[#00ff88] text-[#0a0a0f] hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('common.cta.letsTalk')}
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden w-10 h-10 rounded-lg glass flex items-center justify-center text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-[#0a0a0f]/95 backdrop-blur-xl" />
            <div className="relative h-full flex flex-col pt-24 px-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="px-4 py-4 text-2xl font-medium text-gray-300 hover:text-[#00f0ff] border-b border-white/10 transition-colors"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-[#00f0ff] font-mono text-sm mr-2">0{index + 1}.</span>
                    {link.name}
                  </motion.a>
                ))}
              </div>
              <div className="mt-auto pb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-[#00f0ff]"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-[#00f0ff]"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={profileData.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-[#00f0ff]"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
                <motion.a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                  className="w-full py-4 rounded-xl font-mono text-lg font-medium bg-gradient-to-r from-[#00f0ff] to-[#00ff88] text-[#0a0a0f] text-center block"
                >
                  {t('common.cta.contactMe')}
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;