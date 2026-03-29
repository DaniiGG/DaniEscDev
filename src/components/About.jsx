import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Calendar, Coffee, Rocket, Heart } from 'lucide-react';
import { profileData, experiences } from '../data/mockData';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ff00ff]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00f0ff]/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border border-[#ff00ff]/30 text-[#ff00ff] font-mono text-sm mb-4">
            &lt;about /&gt;
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Sobre <span className="bg-gradient-to-r from-[#ff00ff] to-[#00f0ff] bg-clip-text text-transparent">Mí</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conoce mi historia, pasión por el código y experiencia profesional
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column - Bio */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Card */}
            <div className="glass-card rounded-2xl p-8 border border-white/10">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#00f0ff]">
                    <img
                      src={profileData.avatar}
                      alt={profileData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#00ff88] rounded-full border-4 border-[#111118]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{profileData.name}</h3>
                  <p className="text-[#00f0ff] font-mono">{profileData.title}</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{profileData.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-300 leading-relaxed">
                  {profileData.bio}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10">
                  <Mail className="w-4 h-4 text-[#00f0ff]" />
                  <span className="text-sm text-gray-300">{profileData.email}</span>
                </div>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Coffee, label: 'Cafés/día', value: '∞', color: '#ff6b35' },
                { icon: Rocket, label: 'Proyectos', value: '15+', color: '#00f0ff' },
                { icon: Heart, label: 'Pasión', value: '100%', color: '#ff00ff' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="glass-card rounded-xl p-4 text-center border border-white/10 hover:border-white/20 transition-all"
                >
                  <item.icon className="w-6 h-6 mx-auto mb-2" style={{ color: item.color }} />
                  <div className="text-xl font-bold" style={{ color: item.color }}>{item.value}</div>
                  <div className="text-xs text-gray-500 font-mono">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Experience Timeline */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-5 h-5 text-[#00ff88]" />
              <h3 className="text-xl font-bold">Experiencia Profesional</h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00f0ff] via-[#ff00ff] to-[#00ff88]" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-10"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-[#111118] border-2 border-[#00f0ff] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#00f0ff]" />
                    </div>

                    <div className="glass-card rounded-xl p-6 border border-white/10 hover:border-[#00f0ff]/30 transition-all group">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                            {exp.role}
                          </h4>
                          <p className="text-[#ff00ff] font-mono text-sm">{exp.company}</p>
                        </div>
                        <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Code Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 glass-card rounded-xl p-6 border border-white/10"
            >
              <div className="font-mono text-sm">
                <div className="text-gray-500">/** Mi filosofía de código */</div>
                <div className="mt-2">
                  <span className="text-[#ff00ff]">const</span>
                  <span className="text-white"> philosophy</span>
                  <span className="text-[#00f0ff]"> = </span>
                  <span className="text-[#ffd700]">"Código limpio, usuario feliz"</span>
                  <span className="text-white">;</span>
                </div>
                <div className="mt-1">
                  <span className="text-[#ff00ff]">const</span>
                  <span className="text-white"> approach</span>
                  <span className="text-[#00f0ff]"> = </span>
                  <span className="text-[#ffd700]">"Primero resolver, luego optimizar"</span>
                  <span className="text-white">;</span>
                </div>
                <div className="mt-1">
                  <span className="text-[#ff00ff]">const</span>
                  <span className="text-white"> learning</span>
                  <span className="text-[#00f0ff]"> = </span>
                  <span className="text-[#00f0ff]">Infinity</span>
                  <span className="text-white">;</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;