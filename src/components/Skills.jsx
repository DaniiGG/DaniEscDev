import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Cloud, Palette, Code2 } from 'lucide-react';
import { skills } from '../data/mockData';

const categoryConfig = {
  frontend: {
    icon: Palette,
    label: 'Frontend',
    color: '#00f0ff',
    description: 'Interfaces modernas y responsivas'
  },
  backend: {
    icon: Database,
    label: 'Backend',
    color: '#ff00ff',
    description: 'APIs robustas y escalables'
  },
  devops: {
    icon: Cloud,
    label: 'DevOps',
    color: '#00ff88',
    description: 'Infraestructura y automatización'
  }
};

const SkillBar = ({ skill, index, isActive }) => {
  const config = categoryConfig[skill.category];
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`group relative ${
        isActive ? 'scale-105' : ''
      } transition-transform duration-300`}
    >
      <div className="glass-card rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono font-medium text-white group-hover:text-[#00f0ff] transition-colors">
            {skill.name}
          </span>
          <span 
            className="text-sm font-mono font-bold"
            style={{ color: config.color }}
          >
            {skill.level}%
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.05, ease: 'easeOut' }}
            className="h-full rounded-full relative"
            style={{ 
              background: `linear-gradient(90deg, ${config.color}, ${config.color}80)`,
              boxShadow: `0 0 10px ${config.color}50`
            }}
          >
            {/* Glow effect */}
            <div 
              className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full animate-pulse"
              style={{ 
                backgroundColor: config.color,
                boxShadow: `0 0 10px ${config.color}`
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = ['all', 'frontend', 'backend', 'devops'];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00f0ff]/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#00ff88]/30 text-[#00ff88] font-mono text-sm mb-4">
            <Cpu className="w-4 h-4" />
            &lt;skills /&gt;
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Tech <span className="bg-gradient-to-r from-[#00ff88] to-[#00f0ff] bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones excepcionales
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => {
            const config = cat !== 'all' ? categoryConfig[cat] : null;
            const Icon = config?.icon || Code2;
            
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-sm transition-all ${
                  activeCategory === cat
                    ? 'text-[#0a0a0f]'
                    : 'glass border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                }`}
                style={{
                  backgroundColor: activeCategory === cat ? (config?.color || '#00f0ff') : 'transparent'
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                {cat === 'all' ? 'Todos' : config?.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Category Description */}
        {activeCategory !== 'all' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mb-8 font-mono text-sm"
          >
            {categoryConfig[activeCategory].description}
          </motion.p>
        )}

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              index={index}
              isActive={activeCategory === skill.category}
            />
          ))}
        </motion.div>

        {/* Tech Icons Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <p className="text-center text-gray-500 font-mono text-sm mb-8">
            // Siempre aprendiendo nuevas tecnologías
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {Object.entries(categoryConfig).map(([key, config], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass-card rounded-2xl p-6 border border-white/10 text-center min-w-[140px]"
              >
                <config.icon 
                  className="w-10 h-10 mx-auto mb-3"
                  style={{ color: config.color }}
                />
                <div className="font-mono font-medium text-white">{config.label}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {skills.filter(s => s.category === key).length} skills
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;