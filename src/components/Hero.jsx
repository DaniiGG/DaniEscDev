import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Code2, Zap } from 'lucide-react';
import { profileData, stats } from '../data/mockData';

const TypeWriter = ({ texts, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className="typing-cursor">
      {displayText}
    </span>
  );
};

const FloatingParticle = ({ delay, duration, x, y, size }) => (
  <motion.div
    className="absolute rounded-full bg-[#00f0ff]/30"
    style={{ width: size, height: size }}
    initial={{ opacity: 0, x, y }}
    animate={{
      opacity: [0, 1, 0],
      y: [y, y - 100],
      x: [x, x + (Math.random() - 0.5) * 50],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeOut',
    }}
  />
);

const Hero = () => {
  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'Cloud Architect',
    'UI/UX Enthusiast',
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 grid-bg" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00f0ff]/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#ff00ff]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff88]/10 rounded-full blur-[150px]" />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <FloatingParticle
          key={i}
          delay={i * 0.5}
          duration={3 + Math.random() * 2}
          x={Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)}
          y={Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)}
          size={4 + Math.random() * 8}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#00f0ff]/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#00f0ff]" />
              <span className="text-sm font-mono text-[#00f0ff]">Disponible para proyectos</span>
            </motion.div>

            {/* Name with Glitch Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4"
            >
              <span className="text-lg font-mono text-gray-400">Hola, soy</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glitch-wrapper mb-4"
            >
              <span 
                className="glitch-text text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
                data-text={profileData.name}
              >
                {profileData.name}
              </span>
            </motion.h1>

            {/* Role with Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl sm:text-3xl font-mono mb-6 h-12"
            >
              <span className="text-gray-400">&gt; </span>
              <span className="text-[#00f0ff]">
                <TypeWriter texts={roles} />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed"
            >
              {profileData.subtitle}. Transformo ideas en experiencias digitales 
              <span className="text-[#ff00ff]"> extraordinarias</span> con código limpio y 
              <span className="text-[#00ff88]"> tecnología de vanguardia</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                className="group relative px-8 py-4 rounded-xl font-mono font-medium overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#00ff88]" />
                <div className="absolute inset-[2px] rounded-[10px] bg-[#0a0a0f] group-hover:bg-transparent transition-colors" />
                <span className="relative z-10 flex items-center gap-2 text-[#00f0ff] group-hover:text-[#0a0a0f] transition-colors">
                  <Code2 className="w-5 h-5" />
                  Ver Proyectos
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                className="px-8 py-4 rounded-xl font-mono font-medium glass border border-white/10 hover:border-[#ff00ff]/50 hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-5 h-5 text-[#ff00ff]" />
                Contactar
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Visual Element - Code Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00f0ff]/20 via-[#ff00ff]/20 to-[#00ff88]/20 rounded-2xl blur-xl" />
              
              {/* Terminal Window */}
              <div className="relative glass-card rounded-2xl overflow-hidden border border-white/10">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a24] border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
                  <span className="ml-3 text-sm font-mono text-gray-500">portfolio.tsx</span>
                </div>
                
                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm">
                  <div className="text-gray-500">// Developer Profile</div>
                  <div className="mt-2">
                    <span className="text-[#ff00ff]">const</span>
                    <span className="text-white"> developer</span>
                    <span className="text-[#00f0ff]"> = </span>
                    <span className="text-[#ff00ff]">{'{'}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#00ff88]">name</span>
                    <span className="text-white">: </span>
                    <span className="text-[#ffd700]">"{profileData.name}"</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#00ff88]">role</span>
                    <span className="text-white">: </span>
                    <span className="text-[#ffd700]">"{profileData.title}"</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#00ff88]">location</span>
                    <span className="text-white">: </span>
                    <span className="text-[#ffd700]">"{profileData.location}"</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#00ff88]">skills</span>
                    <span className="text-white">: [</span>
                    <span className="text-[#ffd700]">"React"</span>
                    <span className="text-white">, </span>
                    <span className="text-[#ffd700]">"Node"</span>
                    <span className="text-white">, </span>
                    <span className="text-[#ffd700]">"Cloud"</span>
                    <span className="text-white">],</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#00ff88]">available</span>
                    <span className="text-white">: </span>
                    <span className="text-[#00f0ff]">true</span>
                  </div>
                  <div>
                    <span className="text-[#ff00ff]">{'}'}</span>
                    <span className="text-white">;</span>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span className="text-[#00f0ff]">▶</span>
                    <span className="text-gray-400 ml-2">Ready to build amazing things...</span>
                    <span className="ml-1 w-2 h-4 bg-[#00f0ff] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="glass-card rounded-xl p-6 text-center hover:border-[#00f0ff]/30 transition-all group"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#00f0ff] to-[#00ff88] bg-clip-text text-transparent group-hover:neon-text-cyan transition-all">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-2 font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs font-mono">Scroll</span>
          <ChevronDown className="w-5 h-5 text-[#00f0ff]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;