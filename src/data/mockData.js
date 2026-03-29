// Mock data for the portfolio
export const profileData = {
  name: "Daniel Escobar",
  title: "Full Stack Developer",
  subtitle: "Building the future, one line of code at a time",
  bio: "Desarrollador apasionado con 2+ años de experiencia creando aplicaciones web innovadoras. Especializado en React, Laravel.js y arquitecturas cloud. Me encanta transformar ideas complejas en soluciones elegantes y escalables.",
  location: "Granada, España",
  email: "daniescomoli@gmail.com",
  github: "https://github.com/DaniiGG",
  linkedin: "https://www.linkedin.com/in/daniel-escobar-molina-30b132277/",
  twitter: "",
  avatar: "../img/me.png"
};

export const skills = [
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Next.js", level: 88, category: "frontend" },
  { name: "Java", level: 90, category: "backend" },
  { name: "Laravel", level: 90, category: "backend" },
  { name: "MySQL", level: 93, category: "backend" },
  { name: "Firebase", level: 95, category: "backend" },
  { name: "Docker", level: 80, category: "devops" },
  { name: "AWS", level: 72, category: "devops" },
  { name: "Kotlin", level: 87, category: "backend" },
  { name: "Tailwind CSS", level: 92, category: "frontend" },
  { name: "Git", level: 95, category: "devops" }
];

export const projects = [
  {
    id: 1,
    title: "Lol Roulette",
    description: "Página web dedicada al entretenimiento usando la api de Riot de League of Legends.",
    image: "../img/LolRoulette.png",
    tags: ["Next.js", "TypeScript", "Supabase"],
    github: "https://github.com/DaniiGG/Lol-Roulette",
    demo: "https://lol-roulette-nine.vercel.app",
    featured: false,
    in_process: true,
    color: "#ffea00"
  },
  {
    id: 2,
    title: "CalTrack",
    description: "Plataforma dedicada al control de entrenamientos, especialmente calisténicos.",
    image: "../img/CalTrack.png",
    tags: ["React Native", "TypeScript", "Firebase"],
    github: "https://github.com/DaniiGG/CalTrack_LaravelBack",
    demo: "https://github.com/DaniiGG/CalTrack_LaravelBack",
    featured: false,
    in_process: true,
    color: "#00f0ff"
  },
  {
    id: 3,
    title: "Club Atletismo Maracena",
    description: "Página web del club de atletismo de Maracena, noticias, galería, inscripciones, administración...",
    image: "../img/AtleMaracena.png",
    tags: ["React", "TypeScript", "Firebase", "Google Analytics"],
    github: "https://github.com/DaniiGG/Atletismo_Maracena",
    demo: "https://club-atletismo-maracena.web.app",
    featured: false,
    in_process: false,
    color: "#ff00ff"
  },
  {
    id: 4,
    title: "Ferreramos",
    description: "Web de ferreteria Ferreramos realizada en prácticas en Area Binaria.",
    image: "../img/Ferreramos.png",
    tags: ["Prestashop", "Nginx", "MySql", "Google Analytics"],
    github: "https://github.com/DaniiGG",
    demo: "https://ferreramos.com/",
    featured: true,
    in_process: false,
    color: "#00ff88"
  },
  {
    id: 5,
    title: "EasyOrder",
    description: "Aplicación móvil para gestionar pedidos y comandas en un restaurante de forma rápida y sencilla.",
    image: "../img/EasyOrder.png",
    tags: ["React Native", "Typescript", "Firebase"],
    github: "https://github.com/DaniiGG/EasyOrder",
    demo: "",
    featured: false,
    in_process: false,
    color: "#ff6b35"
  },
];

export const experiences = [
  {
    company: "Area binaria",
    role: "Full Stack Developer",
    period: "Mar 2024 - Jun 2024",
    description: "Desarrollo de módulos personalizados para E-commerce y mantenimiento de plantillas corporativas"
  },
  {
    company: "Enneo Ingeniería",
    role: "Full Stack Developer",
    period: "Mar 2025 - Jun 2025",
    description: "Desarrollo de una aplicación web de seguimiento de trámites en Laravel + React, mejorando la trazabilidad y comunicación con clientes."
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "2024 - Actualidad",
    description: "Desarrollo, mantenimiento de aplicaciones web personalizadas y automatizaciones para clientes particulares y pequeñas empresas"
  }
];

export const stats = [
  { label: "Años de Experiencia", value: "2+" },
  { label: "Proyectos Completados", value: "15+" },
  { label: "Clientes Satisfechos", value: "15+" },
  { label: "Líneas de Código", value: "500K+" }
];