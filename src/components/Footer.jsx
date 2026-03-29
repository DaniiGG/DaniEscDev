import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2, Terminal, ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';
import { profileData } from '../data/mockData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: profileData.github },
    { icon: Linkedin, href: profileData.linkedin },
    { icon: Twitter, href: profileData.twitter },
  ];

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#111118] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00f0ff] to-[#ff00ff] p-[2px]">
                <div className="w-full h-full rounded-lg bg-[#0a0a0f] flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-[#00f0ff]" />
                </div>
              </div>
              <span className="font-mono text-lg font-bold">
                <span className="text-[#00f0ff]">&lt;</span>
                <span className="text-white">Dev</span>
                <span className="text-[#ff00ff]">/&gt;</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Transformando ideas en experiencias digitales extraordinarias. 
              Siempre aprendiendo, siempre creando.
            </p>
            <div className="font-mono text-xs text-gray-500">
              <span className="text-[#00f0ff]">const</span> passion = <span className="text-[#ffd700]">"coding"</span>;
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-mono text-[#00f0ff] mb-4">// Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                >
                  <span className="text-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-mono text-[#ff00ff] mb-4">// Connect</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <a 
              href={`mailto:${profileData.email}`}
              className="text-gray-400 hover:text-[#00f0ff] transition-colors text-sm font-mono"
            >
              {profileData.email}
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm flex items-center gap-2"
          >
            <Code2 className="w-4 h-4 text-[#00f0ff]" />
            <span>© {currentYear} {profileData.name}.</span>
            <span className="hidden sm:inline">Hecho con</span>
            <Heart className="w-4 h-4 text-[#ff00ff] animate-pulse hidden sm:inline" />
            <span className="hidden sm:inline">y mucho café</span>
          </motion.p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-gray-500 hover:text-[#00f0ff] transition-colors text-sm font-mono group"
          >
            <span>Volver arriba</span>
            <div className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center group-hover:border-[#00f0ff]/50 transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </motion.button>
        </div>

        {/* ASCII Art Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <pre className="text-[8px] sm:text-[10px] text-gray-700 font-mono leading-tight hidden md:block">
{`
    ___       ___       ___       ___       ___   
   /\  \     /\  \     /\  \     /\  \     /\__\  
  /::\  \   /::\  \   /::\  \   /::\  \   /:/ _/_ 
 /:/\:\__\ /::\:\__\ /:/\:\__\ /::\:\__\ /::-"\__\
 \:\ \/__/ \/\::/  / \:\/:/  / \:\:\/  / \;:;-",-"
  \:\__\     /:/  /   \::/  /   \:\/  /   |:|  |  
   \/__/     \/__/     \/__/     \/__/     \|__|  
`}
          </pre>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;