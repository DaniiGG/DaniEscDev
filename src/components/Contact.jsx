import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, Twitter, MessageSquare, Sparkles, CheckCircle } from 'lucide-react';
import { profileData } from '../data/mockData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const socialLinks = [
    { icon: Github, href: profileData.github, label: 'GitHub', color: '#00f0ff' },
    { icon: Linkedin, href: profileData.linkedin, label: 'LinkedIn', color: '#0077b5' },
    { icon: Twitter, href: profileData.twitter, label: 'Twitter', color: '#1da1f2' },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#ff00ff]/10 rounded-full blur-[200px]" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#ff00ff]/30 text-[#ff00ff] font-mono text-sm mb-4">
            <MessageSquare className="w-4 h-4" />
            &lt;contact /&gt;
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Hablemos de tu <span className="bg-gradient-to-r from-[#ff00ff] to-[#00f0ff] bg-clip-text text-transparent">Proyecto</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ¿Tienes una idea increíble? Me encantaría escucharla y ayudarte a hacerla realidad
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass-card rounded-xl p-6 border border-white/10 flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#00f0ff]/10 flex items-center justify-center group-hover:bg-[#00f0ff]/20 transition-colors">
                  <Mail className="w-6 h-6 text-[#00f0ff]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-mono">Email</div>
                  <a href={`mailto:${profileData.email}`} className="text-white hover:text-[#00f0ff] transition-colors">
                    {profileData.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass-card rounded-xl p-6 border border-white/10 flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#ff00ff]/10 flex items-center justify-center group-hover:bg-[#ff00ff]/20 transition-colors">
                  <MapPin className="w-6 h-6 text-[#ff00ff]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-mono">Ubicación</div>
                  <span className="text-white">{profileData.location}</span>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-mono text-gray-400 mb-4">// Sígueme en</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-xl glass-card border border-white/10 flex items-center justify-center group transition-all"
                    style={{ 
                      '--hover-color': social.color 
                    }}
                  >
                    <social.icon 
                      className="w-6 h-6 text-gray-400 group-hover:text-[var(--hover-color)] transition-colors" 
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Terminal Style Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 border border-white/10"
            >
              <div className="font-mono text-sm">
                <div className="text-[#00ff88]">$ current_status</div>
                <div className="mt-2 text-gray-400">
                  <span className="text-[#00f0ff]">▶</span> Disponible para freelance
                </div>
                <div className="text-gray-400">
                  <span className="text-[#00f0ff]">▶</span> Abierto a colaboraciones
                </div>
                <div className="text-gray-400">
                  <span className="text-[#00f0ff]">▶</span> Respuesta en &lt;24h
                </div>
                <div className="mt-3 flex items-center">
                  <span className="w-2 h-4 bg-[#00f0ff] animate-pulse" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00f0ff]/20 via-[#ff00ff]/20 to-[#00ff88]/20 rounded-2xl blur-xl" />
              
              <form 
                onSubmit={handleSubmit}
                className="relative glass-card rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-[#ff00ff]" />
                  <h3 className="text-xl font-bold">Envíame un mensaje</h3>
                </div>

                <div className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00f0ff] focus:outline-none focus:ring-1 focus:ring-[#00f0ff] transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00f0ff] focus:outline-none focus:ring-1 focus:ring-[#00f0ff] transition-all"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2">Mensaje</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Cuéntame sobre tu proyecto..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00f0ff] focus:outline-none focus:ring-1 focus:ring-[#00f0ff] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full py-4 rounded-xl font-mono font-medium flex items-center justify-center gap-2 transition-all ${
                      isSubmitted 
                        ? 'bg-[#00ff88] text-[#0a0a0f]' 
                        : 'bg-gradient-to-r from-[#00f0ff] to-[#ff00ff] text-white hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]'
                    }`}
                    whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        ¡Mensaje enviado!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar mensaje
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Note */}
                <p className="text-center text-xs text-gray-500 mt-4 font-mono">
                  * Respondo en menos de 24 horas
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;