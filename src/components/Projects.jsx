import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Layers, Filter } from 'lucide-react';
import { projects } from '../data/mockData';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="relative overflow-hidden rounded-2xl glass-card border border-white/10 hover:border-transparent transition-all duration-500"
        style={{
          boxShadow: isHovered ? `0 0 40px ${project.color}30, 0 0 80px ${project.color}15` : 'none'
        }}
      >
        {/* Animated Border */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${project.color}40, transparent, ${project.color}40)`,
            padding: '1px',
          }}
        />

        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
          
          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-[#0a0a0f]/80 backdrop-blur-sm flex items-center justify-center gap-4"
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1 }}
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              transition={{ delay: 0.2 }}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
              style={{ backgroundColor: project.color }}
            >
              <ExternalLink className="w-5 h-5 text-[#0a0a0f]" />
            </motion.a>
          </motion.div>

          {/* Featured Badge */}
          {project.featured && (
            <div 
              className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono font-bold"
              style={{ backgroundColor: project.color, color: '#0a0a0f' }}
            >
              Cooperativo
            </div>
          )}
          {project.in_process && (
            <div 
              className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono font-bold"
              style={{ backgroundColor: project.color, color: '#0a0a0f' }}
            >
              En Proceso
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 
              className="text-xl font-bold group-hover:text-white transition-colors"
              style={{ color: isHovered ? project.color : 'white' }}
            >
              {project.title}
            </h3>
            <motion.div
              animate={{ rotate: isHovered ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white" />
            </motion.div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono border border-white/10 text-gray-400 hover:border-white/30 hover:text-white transition-all"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="h-1 rounded-full mx-6 mb-4"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : '0%' }}
          style={{ 
            background: `linear-gradient(90deg, ${project.color}, transparent)`,
            maxWidth: 'calc(100% - 3rem)'
          }}
        />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const filters = ['all', 'in_process', 'featured'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => filter === 'featured' ? project.featured : project.in_process);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-[#00f0ff]/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-1/3 -left-32 w-[500px] h-[500px] bg-[#ff00ff]/10 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-sm mb-4">
            <Layers className="w-4 h-4" />
            &lt;projects /&gt;
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Mis <span className="bg-gradient-to-r from-[#00f0ff] to-[#00ff88] bg-clip-text text-transparent">Proyectos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi pasión por crear soluciones innovadoras
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <Filter className="w-4 h-4 text-gray-500" />
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full font-mono text-sm transition-all ${
                filter === f
                  ? 'bg-gradient-to-r from-[#00f0ff] to-[#00ff88] text-[#0a0a0f]'
                  : 'glass border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {f === 'all' ? 'Todos' : f === 'featured' ? 'Cooperativo' : 'En Proceso'}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/DaniiGG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/10 text-gray-300 hover:text-white hover:border-[#00f0ff]/50 transition-all font-mono"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            Ver más en GitHub
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;