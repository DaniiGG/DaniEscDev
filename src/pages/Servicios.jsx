import { useState } from "react";
import SEO from '../SEO'

const WHATSAPP_NUMBER = "34640294034";
const WA = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const testimonials = [
  {
    name: "Laura Martín",
    business: "Clínica FisioSalud",
    sector: "Fisioterapia",
    initials: "LM",
    color: "#e8f4fb",
    quote: "En dos semanas teníamos la web y desde entonces las citas se reservan solas desde el móvil. La mejor inversión que hemos hecho.",
    metric: "+120 citas online en 2 meses",
  },
  {
    name: "José Antonio Ruiz",
    business: "Restaurante La Gamba",
    sector: "Hostelería",
    initials: "JR",
    color: "#fef3e2",
    quote: "Pasamos de vivir de las redes a recibir reservas todos los días. Sin agencia, sin pagar de más y siempre respondiendo por WhatsApp.",
    metric: "+40 reservas en el primer mes",
  },
  {
    name: "Marta Jiménez",
    business: "Estudio de yoga Mía",
    sector: "Bienestar",
    initials: "MJ",
    color: "#fce8f3",
    quote: "Dudaba si un freelance daría buen resultado y fue justo al revés: más barato, más rápido y más pendiente del detalle que cualquier agencia.",
    metric: "x2 alumnos en 90 días",
  },
];

const templates = [
  {
    id: "fisio",
    label: "Centro de fisioterapia",
    sector: "Salud",
    desc: "Servicios y tratamientos, equipo profesional, opiniones de pacientes y reserva de cita online.",
    img: "../img/fisio.png",
    url: "https://fisio-clinic-two.vercel.app",
    color: "#e8f4fb",
    emoji: "🩺",
  },
  {
    id: "salon",
    label: "Salón de belleza",
    sector: "Belleza",
    desc: "Galería de trabajos, servicios con precios y reserva de cita directa desde el móvil.",
    img: "../img/salon.png",
    url: "https://salon-app-kappa.vercel.app",
    color: "#fce8f3",
    emoji: "💇‍♀️",
  },
  {
    id: "piscinas",
    label: "Construcción y piscinas",
    sector: "Construcción",
    desc: "Galería de proyectos realizados, servicios y formulario de presupuesto sin compromiso.",
    img: "../img/piscinas.png",
    url: "https://piscinas-app.vercel.app",
    color: "#e8f4fb",
    emoji: "🏊",
  },
  {
    id: "floristeria",
    label: "Floristería",
    sector: "Comercio",
    desc: "Catálogo de arreglos, pedidos online para eventos y envío a domicilio.",
    img: "../img/floristeria.png",
    url: "https://floreria-bloom.vercel.app",
    color: "#f0fce8",
    emoji: "💐",
  },
  {
    id: "atletismo",
    label: "Club de atletismo",
    sector: "Deporte",
    desc: "Presentación del club, resultados, calendario de entrenamientos e inscripciones online.",
    img: "../img/atletismo.png",
    url: "https://club-atletismo.vercel.app",
    color: "#e6f7f1",
    emoji: "🏃",
  },
];
 
function MockupFrame({ template }) {
  return (
    <div style={{
      borderRadius: 16,
      overflow: "hidden",
      border: "0.5px solid #dde3e8",
      boxShadow: "0 12px 40px rgba(26,158,110,.1)",
    }}>
      {/* Barra de navegador falsa */}
      <div style={{
        background: "#f0f4f7",
        padding: "10px 14px",
        display: "flex",
        gap: 6,
        alignItems: "center",
      }}>
        {["#e06b6b", "#e0c06b", "#6be09a"].map(c => (
          <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
        ))}
      </div>
 
      {/* Imagen de la demo o placeholder */}
      {template.img ? (
        <img
          src={template.img}
          alt={template.label}
          style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "top", maxHeight: 340 }}
        />
      ) : (
        <div style={{
          height: 300,
          background: template.color,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
        }}>
          <div style={{ fontSize: 52 }}>{template.emoji}</div>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: "#8fa3b3",
            fontWeight: 500,
          }}>
            Pon aquí tu captura de pantalla
          </div>
        </div>
      )}
    </div>
  );
}
 
function TemplatesSection() {
  const [active, setActive] = useState("fisio");
  const current = templates.find(t => t.id === active);
 
  return (
    <section style={{ padding: "96px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="slabel">Ejemplos reales</div>
        <h2 className="stitle">¿Tu negocio podría<br />tener algo así?</h2>
        <p className="ssub">
          Proyectos reales que puedes visitar ahora mismo. Cada uno diseñado
          a medida para su sector.
        </p>
 
        {/* Pestañas */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 36 }}>
          {templates.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              style={{
                padding: "9px 18px",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                border: active === t.id ? "none" : "1.5px solid #d1d9e0",
                background: active === t.id ? "#1a9e6e" : "#fff",
                color: active === t.id ? "#fff" : "#5a7080",
                cursor: "pointer",
                transition: "all .15s",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
 
        {/* Contenido */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
        }}>
          {/* Mockup izquierda */}
          <MockupFrame template={current} />
 
          {/* Info derecha */}
          <div>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#e6f7f1",
              color: "#0d6b4a",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: 100,
              marginBottom: 20,
            }}>
              {current.sector}
            </div>
 
            <h3 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 28,
              fontWeight: 800,
              color: "#1e2d3d",
              marginBottom: 16,
              lineHeight: 1.15,
            }}>
              {current.label}
            </h3>
 
            <p style={{
              fontSize: 15,
              color: "#5a7080",
              lineHeight: 1.75,
              fontWeight: 300,
              marginBottom: 28,
            }}>
              {current.desc}. Una web hecha a medida para este sector, con las
              funciones que realmente necesita tu negocio y un diseño que
              transmite confianza desde el primer vistazo.
            </p>
 
            <ul style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginBottom: 36,
            }}>
              {[
                "Diseño adaptado a móvil y escritorio",
                "Optimizada para aparecer en Google",
                "Lista en 2 a 4 semanas",
              ].map(f => (
                <li key={f} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 14,
                  color: "#5a7080",
                }}>
                  <span style={{
                    width: 20, height: 20,
                    borderRadius: "50%",
                    background: "#e6f7f1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    color: "#1a9e6e",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
 
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href={current.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "#1e2d3d",
                  color: "#fff",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "13px 24px",
                  borderRadius: 8,
                  textDecoration: "none",
                  transition: "background .15s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#1a9e6e"}
                onMouseLeave={e => e.currentTarget.style.background = "#1e2d3d"}
              >
                Ver demo ↗
              </a>
              <a
                href={WA(`Hola Dani, quiero una web como la de "${current.label}" para mi negocio. ¿Me pasas presupuesto?`)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "#1a9e6e",
                  color: "#fff",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "13px 24px",
                  borderRadius: 8,
                  textDecoration: "none",
                  transition: "background .15s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#0d6b4a"}
                onMouseLeave={e => e.currentTarget.style.background = "#1a9e6e"}
              >
                Quiero algo así →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700&family=Syne:wght@700;800&display=swap');

  :root {
    --green: #1a9e6e;
    --green-light: #22c88a;
    --green-pale: #e6f7f1;
    --green-dark: #0d6b4a;
    --slate: #1e2d3d;
    --slate-mid: #3d5166;
    --blue-light: #e8f4fb;
    --blue-mid: #b8d8ee;
    --blue-accent: #4a9bbe;
    --gray-cool: #f0f4f7;
    --white: #ffffff;
    --text: #1a2a35;
    --text-muted: #5a7080;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .srv { font-family: 'DM Sans', sans-serif; color: var(--text); background: #fff; overflow-x: hidden; }

  /* HERO */
  .hero {
    background: var(--slate);
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
  }
  @media(max-width:768px){ .hero { grid-template-columns:1fr; min-height:auto; } }

  .hero-blob {
    position: absolute; border-radius: 50%; pointer-events: none; filter: blur(70px);
  }

  .hero-left {
    padding: 100px 56px 80px;
    display: flex; flex-direction: column; justify-content: center;
    position: relative; z-index: 2;
  }
  @media(max-width:768px){ .hero-left { padding: 72px 24px 48px; } }

  .badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(34,200,138,0.15); border: 1px solid rgba(34,200,138,0.35);
    color: var(--green-light); font-size: 12px; font-weight: 700;
    letter-spacing: .12em; text-transform: uppercase;
    padding: 6px 14px; border-radius: 100px;
    width: fit-content; margin-bottom: 32px;
  }

  .badge-dot {
    width: 6px; height: 6px; background: var(--green-light);
    border-radius: 50%; animation: bdot 1.6s ease-in-out infinite;
  }
  @keyframes bdot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.65)} }

  .hero h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(38px, 5vw, 66px);
    font-weight: 800; color: #fff;
    line-height: 1.06; margin-bottom: 24px;
    animation: fup .7s ease both;
  }
  .hero h1 em { font-style: normal; color: var(--green-light); }

  .hero-p {
    font-size: 17px; color: var(--blue-mid); font-weight: 300;
    line-height: 1.7; max-width: 400px; margin-bottom: 44px;
    animation: fup .7s .12s ease both;
  }

  .hero-btns { display: flex; gap: 14px; flex-wrap: wrap; animation: fup .7s .22s ease both; }

  .btn-g {
    background: var(--green); color: #fff;
    font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 700;
    padding: 15px 30px; border-radius: 8px; text-decoration: none;
    border: none; cursor: pointer; letter-spacing: .02em;
    transition: background .2s, transform .15s;
  }
  .btn-g:hover { background: var(--green-dark); transform: translateY(-2px); }

  .btn-o {
    background: transparent; color: #fff;
    font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500;
    padding: 15px 30px; border-radius: 8px;
    border: 1px solid rgba(255,255,255,.22); text-decoration: none;
    cursor: pointer; transition: border-color .2s, background .2s;
  }
  .btn-o:hover { border-color: var(--green-light); background: rgba(34,200,138,.08); }

  .hero-right {
    display: flex; align-items: center; justify-content: center;
    padding: 80px 40px; position: relative; z-index: 2;
  }
  @media(max-width:768px){ .hero-right { display:none; } }

  .card-stack { position: relative; width: 300px; height: 340px; }

  .hcard {
    position: absolute;
    background: rgba(255,255,255,.07); backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,.13);
    border-radius: 16px; padding: 26px; color: #fff;
  }
  .hc1 { width: 250px; top: 0; left: 24px; transform: rotate(-4deg); animation: fl1 4.5s ease-in-out infinite; }
  .hc2 { width: 270px; top: 90px; left: 0; transform: rotate(1deg); animation: fl2 5s ease-in-out infinite; z-index:2; }
  .hc3 { width: 230px; top: 205px; left: 44px; transform: rotate(3.5deg); animation: fl3 4s ease-in-out infinite; }

  @keyframes fl1 { 0%,100%{transform:rotate(-4deg) translateY(0)} 50%{transform:rotate(-4deg) translateY(-9px)} }
  @keyframes fl2 { 0%,100%{transform:rotate(1deg) translateY(0)} 50%{transform:rotate(1deg) translateY(-13px)} }
  @keyframes fl3 { 0%,100%{transform:rotate(3.5deg) translateY(0)} 50%{transform:rotate(3.5deg) translateY(-7px)} }

  .hcard-icon { font-size: 22px; margin-bottom: 10px; }
  .hcard-title { font-weight: 700; font-size: 15px; margin-bottom: 3px; }
  .hcard-sub { font-size: 12px; color: var(--blue-mid); }
  .hcard-pill {
    display: inline-block; margin-top: 10px;
    background: rgba(34,200,138,.25); color: var(--green-light);
    font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 100px;
  }

  @keyframes fup { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }

  /* STATS */
  .stats {
    background: var(--green);
    display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  .stat {
    text-align: center; padding: 36px 16px; color: #fff;
    border-right: 1px solid rgba(255,255,255,.18);
  }
  .stat:last-child { border-right: none; }
  .stat-n { font-family: 'Syne', sans-serif; font-size: 42px; font-weight: 800; line-height: 1; margin-bottom: 6px; }
  .stat-l { font-size: 13px; color: rgba(255,255,255,.7); }

  /* SECTION COMMON */
  .slabel { font-size: 11px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; color: var(--green); margin-bottom: 14px; }
  .stitle { font-family: 'Syne', sans-serif; font-size: clamp(28px, 3.5vw, 46px); font-weight: 800; color: var(--slate); line-height: 1.1; margin-bottom: 14px; }
  .ssub { font-size: 16px; color: var(--text-muted); font-weight: 300; line-height: 1.65; max-width: 500px; margin-bottom: 56px; }

  /* SERVICES */
  .services { padding: 96px 24px; max-width: 1100px; margin: 0 auto; }
  .srv-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 22px; }

  .sc {
    border-radius: 16px; padding: 38px 30px;
    transition: transform .25s, box-shadow .25s; cursor: default; position: relative; overflow: hidden;
  }
  .sc:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(0,0,0,.1); }

  .sc-dark { background: var(--slate); }
  .sc-green { background: var(--green-pale); }
  .sc-blue { background: var(--blue-light); }

  .sc-geo {
    position: absolute; border-radius: 50%; pointer-events: none; opacity: .18;
  }

  .sc-iconbox { width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; margin-bottom: 22px; }
  .ic-dark { background: rgba(34,200,138,.2); }
  .ic-green { background: rgba(26,158,110,.15); }
  .ic-blue { background: rgba(74,155,190,.2); }

  .sc h3 { font-family: 'Syne', sans-serif; font-size: 21px; font-weight: 800; margin-bottom: 12px; }
  .sc-dark h3 { color: #fff; }
  .sc-green h3, .sc-blue h3 { color: var(--slate); }

  .sc p { font-size: 14px; line-height: 1.7; font-weight: 300; margin-bottom: 26px; }
  .sc-dark p { color: var(--blue-mid); }
  .sc-green p, .sc-blue p { color: var(--text-muted); }

  .sc-footer {
    padding-top: 20px; display: flex; align-items: center; justify-content: space-between;
    font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 700;
  }
  .sc-dark .sc-footer { border-top: 1px solid rgba(255,255,255,.1); color: #fff; }
  .sc-green .sc-footer, .sc-blue .sc-footer { border-top: 1px solid rgba(0,0,0,.07); color: var(--slate); }

  .sc-arrow {
    width: 30px; height: 30px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 15px; transition: transform .2s;
  }
  .sc:hover .sc-arrow { transform: translateX(4px); }
  .ar-dark { background: rgba(34,200,138,.2); color: var(--green-light); }
  .ar-green { background: rgba(26,158,110,.15); color: var(--green-dark); }
  .ar-blue { background: rgba(74,155,190,.2); color: var(--blue-accent); }

  .sc-popular {
    position: absolute; top: 18px; right: 18px;
    background: var(--green-light); color: var(--slate);
    font-size: 10px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
    padding: 3px 10px; border-radius: 100px;
  }

  /* CASES */
  .cases { background: var(--gray-cool); padding: 96px 24px; position: relative; overflow: hidden; }
  .cases-inner { max-width: 1100px; margin: 0 auto; }
  .cases-blob { position: absolute; width: 480px; height: 480px; border-radius: 50%; background: var(--green-pale); top: -200px; right: -180px; pointer-events: none; }

  .cases-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 20px; }

  .cc {
    background: #fff; border-radius: 16px; padding: 34px 26px;
    transition: transform .25s;
  }
  .cc:hover { transform: translateY(-4px); }

  .cc-sector {
    font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase;
    color: var(--green); margin-bottom: 18px;
    display: flex; align-items: center; gap: 8px;
  }
  .cc-sector::before { content:''; display:inline-block; width:18px; height:2px; background:var(--green); border-radius:2px; }

  .cc h3 { font-family: 'Syne', sans-serif; font-size: 19px; font-weight: 800; color: var(--slate); margin-bottom: 12px; }
  .cc p { font-size: 14px; color: var(--text-muted); line-height: 1.7; font-weight: 300; }

  .cc-metric {
    margin-top: 22px; padding-top: 18px; border-top: 1px solid #edf1f4;
    display: flex; align-items: center; gap: 8px;
    font-size: 13px; font-weight: 600; color: var(--green-dark);
  }

  /* PROCESS */
  .process { padding: 96px 24px; max-width: 860px; margin: 0 auto; }
  .proc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 36px 52px; }
  @media(max-width:600px){ .proc-grid { grid-template-columns:1fr; } }

  .proc-step { display: flex; gap: 18px; align-items: flex-start; }
  .proc-num-box {
    flex-shrink: 0; width: 46px; height: 46px; border-radius: 12px;
    background: var(--green-pale); display: flex; align-items: center; justify-content: center;
  }
  .proc-num { font-family: 'Syne', sans-serif; font-size: 17px; font-weight: 800; color: var(--green); }
  .proc-step h3 { font-family: 'Syne', sans-serif; font-size: 17px; font-weight: 700; color: var(--slate); margin-bottom: 7px; }
  .proc-step p { font-size: 14px; color: var(--text-muted); line-height: 1.65; font-weight: 300; }

  /* FAQ */
  .faq { background: var(--slate); padding: 96px 24px; }
  .faq-inner { max-width: 680px; margin: 0 auto; }
  .faq .stitle { color: #fff; }
  .faq .ssub { color: var(--blue-mid); margin-bottom: 44px; }
  .faq .slabel { color: var(--green-light); }

  .faq-item { border-bottom: 1px solid rgba(255,255,255,.1); padding: 22px 0; }
  .faq-q {
    all: unset; cursor: pointer; width: 100%;
    display: flex; justify-content: space-between; align-items: center; gap: 16px;
    font-size: 16px; font-weight: 500; color: #fff;
  }
  .faq-icon {
    width: 26px; height: 26px; border-radius: 50%;
    border: 1px solid rgba(255,255,255,.2);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; color: var(--green-light); flex-shrink: 0;
    transition: background .2s, transform .25s;
  }
  .faq-icon.open { background: var(--green); border-color: var(--green); transform: rotate(45deg); }
  .faq-a { font-size: 14px; color: var(--blue-mid); line-height: 1.75; font-weight: 300; padding-top: 14px; }

  /* CONTACT */
  .contact {
    background: linear-gradient(140deg, #e5f6ef 0%, #e8f4fb 100%);
    padding: 96px 24px; position: relative; overflow: hidden;
  }
  .contact-geo { position: absolute; border-radius: 50%; pointer-events: none; }
  .contact-inner { max-width: 520px; margin: 0 auto; position: relative; z-index: 2; text-align: center; }
  .contact .stitle { color: var(--slate); }

  .cform {
    margin-top: 44px; text-align: left;
    display: flex; flex-direction: column; gap: 16px;
    background: #fff; padding: 36px; border-radius: 20px;
    box-shadow: 0 20px 60px rgba(26,158,110,.13);
  }

  .flabel { font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--slate-mid); margin-bottom: 7px; display: block; }
  .finput {
    width: 100%; background: var(--gray-cool); border: 2px solid transparent;
    border-radius: 10px; padding: 13px 15px;
    font-size: 15px; color: var(--text);
    font-family: 'DM Sans', sans-serif; outline: none;
    transition: border-color .2s, background .2s;
  }
  .finput:focus { border-color: var(--green); background: #fff; }

  .fbtn {
    width: 100%; background: var(--green); color: #fff;
    font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 700;
    padding: 17px; border: none; border-radius: 10px; cursor: pointer;
    transition: background .2s, transform .15s; margin-top: 6px; letter-spacing: .02em;
  }
  .fbtn:hover { background: var(--green-dark); transform: translateY(-2px); }

  .calt { font-size: 13px; color: var(--text-muted); text-align: center; margin-top: 14px; }
  .calt a { color: var(--green-dark); font-weight: 600; }

  .success {
    background: var(--green-pale); border: 2px solid var(--green);
    border-radius: 20px; padding: 56px 36px;
    text-align: center; margin-top: 44px;
  }
  .success-icon { font-size: 44px; margin-bottom: 14px; }
  .success h3 { font-family:'Syne',sans-serif; font-size:22px; color:var(--slate); margin-bottom:8px; }
  .success p { color:var(--text-muted); font-size:15px; }

  /* PRICE */
  .sc-old { font-size: 13px; color: #9aa8b5; font-weight: 400; margin-left: 4px; }
  .sc-guarantee { margin-top: 18px; font-size: 14px; color: var(--text-muted); }

  /* TESTIMONIALS */
  .testi { padding: 96px 24px; background: var(--gray-cool); }
  .testi-inner { max-width: 1100px; margin: 0 auto; }
  .testi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
  .tt {
    background: #fff; border-radius: 16px; padding: 30px 28px;
    display: flex; flex-direction: column; gap: 16px;
    transition: transform .25s; border: 1px solid #edf1f4;
  }
  .tt:hover { transform: translateY(-4px); }
  .tt-stars { color: #f5b301; font-size: 15px; letter-spacing: 2px; }
  .tt-quote { font-size: 15px; color: var(--text); line-height: 1.7; font-weight: 300; }
  .tt-metric { font-size: 13px; font-weight: 700; color: var(--green-dark); }
  .tt-person { display: flex; align-items: center; gap: 12px; margin-top: auto; }
  .tt-avatar {
    width: 46px; height: 46px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Syne', sans-serif; font-weight: 800; font-size: 15px; color: var(--slate);
    flex-shrink: 0;
  }
  .tt-name { font-weight: 700; font-size: 14px; color: var(--slate); }
  .tt-biz { font-size: 12px; color: var(--text-muted); }

  /* FREE AUDIT */
  .audit {
    background: linear-gradient(135deg, #0d6b4a 0%, #1a9e6e 60%, #22c88a 100%);
    padding: 80px 24px;
  }
  .audit-inner {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1.4fr 1fr; gap: 48px; align-items: center;
  }
  @media(max-width:768px){ .audit-inner { grid-template-columns: 1fr; } }
  .audit-badge {
    display: inline-block; background: rgba(255,255,255,.15); border: 1px solid rgba(255,255,255,.3);
    color: #fff; font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
    padding: 6px 14px; border-radius: 100px; margin-bottom: 20px;
  }
  .audit-p { color: rgba(255,255,255,.85); font-size: 16px; line-height: 1.7; font-weight: 300; max-width: 480px; }
  .audit-ticks { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
  .audit-ticks span {
    background: rgba(255,255,255,.12); color: #fff; font-size: 13px; font-weight: 600;
    padding: 7px 14px; border-radius: 100px;
  }
  .audit-cta { text-align: center; }
  .audit-note { margin-top: 16px; color: rgba(255,255,255,.8); font-size: 13px; }

  /* FLOATING WHATSAPP */
  .wa-float {
    position: fixed; right: 22px; bottom: 22px; z-index: 100;
    width: 60px; height: 60px; border-radius: 50%;
    background: #25d366; color: #fff;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 8px 24px rgba(37,211,102,.45);
    transition: transform .2s, box-shadow .2s;
    animation: wa-pulse 2s ease-in-out infinite;
  }
  .wa-float:hover { transform: scale(1.08); box-shadow: 0 12px 32px rgba(37,211,102,.6); }
  @keyframes wa-pulse {
    0%,100% { box-shadow: 0 8px 24px rgba(37,211,102,.45); }
    50% { box-shadow: 0 8px 28px rgba(37,211,102,.75); }
  }
`;

const services = [
  { icon:"🌐", title:"Web corporativa", desc:"Presencia online profesional que refleja la identidad de tu negocio. Rápida, optimizada para Google y lista para captar clientes.", price:"Desde 150€", oldPrice:"500€", tag:"Más popular", sc:"sc-dark", ic:"ic-dark", ar:"ar-dark" },
  { icon:"🛒", title:"Tienda online", desc:"Vende tus productos las 24h. Carrito, pasarela de pago, gestión de pedidos y stock. Todo integrado.", price:"Desde 500€", oldPrice:"900€", tag:null, sc:"sc-green", ic:"ic-green", ar:"ar-green" },
  { icon:"🔧", title:"Mantenimiento", desc:"¿Ya tienes web pero necesitas mejorarla, actualizarla o añadir funciones? Me encargo sin que tú tengas que preocuparte.", price:"Desde 15€/mes", oldPrice:"30€/mes", tag:null, sc:"sc-blue", ic:"ic-blue", ar:"ar-blue" },
];

const cases = [
  { name:"Restaurante La Gamba", result:"Pasaron de tener sólo redes sociales a recibir reservas online desde el primer mes.", sector:"Hostelería", metric:"+40 reservas en el primer mes" },
  { name:"Estudio de yoga Mía", result:"Duplicaron sus alumnos en 3 meses con una web que muestra horarios y permite inscribirse.", sector:"Bienestar", metric:"x2 alumnos en 90 días" },
  { name:"Carpintería Roldán", result:"Ahora reciben presupuestos online. El 40% de clientes nuevos llegan por la web.", sector:"Artesanía", metric:"40% clientes vía web" },
];

const faqs = [
  { q:"¿Cuánto cuesta una web?", a:"Webs corporativas desde 150€ y tiendas online desde 500€. Es mucho menos que una agencia (que suele cobrar 4-5 veces más) porque trabajas directamente conmigo, sin intermediarios. Pido presupuesto gratis y sin compromiso por WhatsApp." },
  { q:"¿Cuánto tarda en estar lista la web?", a:"Entre 2 y 4 semanas dependiendo del proyecto. Siempre te doy una fecha concreta antes de empezar." },
  { q:"¿Necesito saber de tecnología?", a:"Para nada. Me encargo de todo y te enseño a gestionar lo básico en una sesión: cambiar textos, subir fotos, ver estadísticas." },
  { q:"¿Qué pasa después de entregar la web?", a:"Tienes soporte incluido durante el primer mes. Después puedes contratar mantenimiento mensual o llamarme cuando lo necesites." },
  { q:"¿Y si no me gusta el resultado?", a:"Tienes garantía: si la web no te convence, te devuelvo el dinero. Y antes de nada, hago una auditoría gratuita de tu web actual para que veas exactamente qué necesitas." },
  { q:"¿Trabajas solo con negocios locales?", a:"Trabajo con negocios de toda España, aunque me especializo en PYMEs y autónomos de Granada que quieren crecer online." },
];

export default function Servicios() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ nombre:"", telefono:"", mensaje:"" });
  const [sent, setSent] = useState(false);

  return (
    <>
      <SEO
        title="Diseño de páginas web en Granada desde 150€ | DaniEscDev"
        description="Diseñador web freelance en Granada. Webs para negocios locales desde 150€, con garantía de devolución y entrega en 2-4 semanas. Auditoría gratuita de tu web por WhatsApp."
        path="/servicios"
      />
      <style>{CSS}</style>
      <div className="srv">

        {/* HERO */}
        <section className="hero">
          <div className="hero-blob" style={{ width:580,height:580,background:"rgba(26,158,110,.13)",top:-180,right:-80 }}/>
          <div className="hero-blob" style={{ width:280,height:280,background:"rgba(74,155,190,.1)",bottom:-80,left:120 }}/>
          <div className="hero-left">
            <div className="badge"><span className="badge-dot"/>Disponible ahora · Granada y toda España</div>
            <h1>Tu negocio,<br/><em>online</em> y<br/>funcionando.</h1>
            <p className="hero-p">Webs para negocios locales que convierten visitas en clientes. Diseño a medida <strong>desde 150€</strong> — sin pagar los precios de agencia.</p>
            <div className="hero-btns">
              <a href={WA("Hola Dani, quiero un presupuesto para mi web. ¿Podemos hablar?")} target="_blank" rel="noopener noreferrer" className="btn-g">Solicitar presupuesto gratis →</a>
              <a href="#servicios" className="btn-o">Ver precios</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="card-stack">
              <div className="hcard hc1">
                <div className="hcard-icon">🌐</div>
                <div className="hcard-title">Web corporativa</div>
                <div className="hcard-sub">Diseño a medida</div>
                <div className="hcard-pill">Desde 150€</div>
              </div>
              <div className="hcard hc2">
                <div className="hcard-icon">🛒</div>
                <div className="hcard-title">Tienda online</div>
                <div className="hcard-sub">Vende las 24h</div>
                <div className="hcard-pill">Desde 500€</div>
              </div>
              <div className="hcard hc3">
                <div className="hcard-icon">⚡</div>
                <div className="hcard-title">Resultados reales</div>
                <div className="hcard-sub">+20 webs entregadas</div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats">
          {[{n:"+20",l:"webs entregadas"},{n:"Desde 150€",l:"web llave en mano"},{n:"100%",l:"clientes satisfechos"},{n:"< 1h",l:"respuesta por WhatsApp"}].map(s=>(
            <div className="stat" key={s.l}>
              <div className="stat-n">{s.n}</div>
              <div className="stat-l">{s.l}</div>
            </div>
          ))}
        </section>

        {/* SERVICES */}
        <section className="services" id="servicios">
          <div className="slabel">Servicios y precios</div>
          <h2 className="stitle">Precios de freelance,<br/>calidad de agencia</h2>
          <p className="ssub">Una agencia te cobra 4-5 veces más por lo mismo. Trabajo directo contigo, sin intermediarios ni comisiones: pagas por el trabajo real, no por mantener oficinas.</p>
          <div className="srv-grid">
            {services.map(s=>(
              <div className={`sc ${s.sc}`} key={s.title}>
                {s.tag && <div className="sc-popular">{s.tag}</div>}
                <div className={`sc-iconbox ${s.ic}`}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="sc-footer">
                  <span>{s.price} <del className="sc-old">{s.oldPrice}</del></span>
                  <span className={`sc-arrow ${s.ar}`}>→</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <a href={WA("Hola Dani, quiero saber cuánto costaría mi web. ¿Me ayudas?")} target="_blank" rel="noopener noreferrer" className="btn-g">¿Cuánto costaría la mía? →</a>
            <p className="sc-guarantee">⭐ Garantía: si la web no te convence, te devuelvo el dinero.</p>
          </div>
        </section>

        {/* TEMPLATES */}
        <TemplatesSection />

        {/* CASES */}
        <section className="cases">
          <div className="cases-blob"/>
          <div className="cases-inner">
            <div className="slabel">Casos de éxito</div>
            <h2 className="stitle">Negocios que ya<br/>crecen online</h2>
            <div className="cases-grid">
              {cases.map(c=>(
                <div className="cc" key={c.name}>
                  <div className="cc-sector">{c.sector}</div>
                  <h3>{c.name}</h3>
                  <p>{c.result}</p>
                  <div className="cc-metric"><span style={{color:"var(--green)",fontSize:16}}>↑</span>{c.metric}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testi">
          <div className="testi-inner">
            <div className="slabel">Opiniones de clientes</div>
            <h2 className="stitle">Negocios que ya<br/>trabajan conmigo</h2>
            <div className="testi-grid">
              {testimonials.map(t=>(
                <div className="tt" key={t.name}>
                  <div className="tt-stars">★★★★★</div>
                  <p className="tt-quote">"{t.quote}"</p>
                  <div className="tt-metric">↑ {t.metric}</div>
                  <div className="tt-person">
                    <div className="tt-avatar" style={{ background: t.color }}>{t.initials}</div>
                    <div>
                      <div className="tt-name">{t.name}</div>
                      <div className="tt-biz">{t.business} · {t.sector}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process">
          <div className="slabel">Cómo trabajo</div>
          <h2 className="stitle">Sencillo y sin sorpresas</h2>
          <p className="ssub">Un proceso claro desde el primer mensaje hasta el día de lanzamiento.</p>
          <div className="proc-grid">
            {[
              {n:"01",t:"Me cuentas tu proyecto",d:"Hablamos por teléfono, WhatsApp o email. Sin compromiso."},
              {n:"02",t:"Presupuesto en 24h",d:"Claro y sin letra pequeña. Tú decides si seguimos."},
              {n:"03",t:"Desarrollo con avances",d:"Te muestro el progreso. Tú apruebas cada paso."},
              {n:"04",t:"Tu web, live",d:"Online y funcionando. Y disponible si necesitas algo más."},
            ].map(s=>(
              <div className="proc-step" key={s.n}>
                <div className="proc-num-box"><span className="proc-num">{s.n}</span></div>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FREE AUDIT */}
        <section className="audit">
          <div className="audit-inner">
            <div className="audit-info">
              <div className="audit-badge">🎁 Regalo sin compromiso</div>
              <h2 className="stitle" style={{ color: "#fff", marginBottom: 14 }}>Auditoría gratuita<br/>de tu web actual</h2>
              <p className="audit-p">Te digo gratis por qué tu web actual no da clientes y cómo arreglarlo. 15 minutos por WhatsApp, sin pagar nada y sin obligación de contratar.</p>
              <div className="audit-ticks">
                <span>✓ Velocidad y móvil</span>
                <span>✓ SEO local en Google</span>
                <span>✓ Textos que venden</span>
              </div>
            </div>
            <div className="audit-cta">
              <a href={WA("Hola Dani, quiero mi auditoría gratuita de mi web. ¿Me ayudas?")} target="_blank" rel="noopener noreferrer" className="btn-g" style={{ display:"inline-block", fontSize:17, padding:"17px 34px" }}>Quiero mi auditoría gratis →</a>
              <p className="audit-note">Respondo en menos de 1 hora · Solo quedan 3 plazas esta semana</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq">
          <div className="faq-inner">
            <div className="slabel">FAQ</div>
            <h2 className="stitle">Preguntas frecuentes</h2>
            <p className="ssub">Todo lo que necesitas saber antes de empezar.</p>
            {faqs.map((f,i)=>(
              <div className="faq-item" key={i}>
                <button className="faq-q" onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                  {f.q}
                  <span className={`faq-icon${openFaq===i?" open":""}`}>+</span>
                </button>
                {openFaq===i && <p className="faq-a">{f.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contacto">
          <div className="contact-geo" style={{width:380,height:380,background:"rgba(26,158,110,.1)",top:-140,right:-140}}/>
          <div className="contact-geo" style={{width:220,height:220,background:"rgba(74,155,190,.1)",bottom:-80,left:-60}}/>
          <div className="contact-inner">
            <div className="slabel">Contacto</div>
            <h2 className="stitle">Hablemos de<br/>tu proyecto</h2>
            <p style={{color:"var(--text-muted)",fontSize:16,marginTop:10}}>Déjame tu número de WhatsApp y te escribo en menos de 1 hora. Sin compromiso.</p>
            {sent ? (
              <div className="success">
                <div className="success-icon">✅</div>
                <h3>¡Mensaje enviado, {form.nombre}!</h3>
                <p>Te escribo por WhatsApp en menos de 1 hora. Si es urgente, escríbeme directamente al <a href={WA("Hola Dani, soy " + form.nombre)} target="_blank" rel="noopener noreferrer" style={{color:"var(--green-dark)",fontWeight:700}}>botón de WhatsApp</a>.</p>
              </div>
            ) : (
              <div className="cform">
                <div>
                  <label className="flabel">Tu nombre</label>
                  <input className="finput" type="text" placeholder="Ana García" value={form.nombre} onChange={e=>setForm({...form,nombre:e.target.value})}/>
                </div>
                <div>
                  <label className="flabel">Tu número de WhatsApp</label>
                  <input className="finput" type="tel" placeholder="600 000 000" value={form.telefono} onChange={e=>setForm({...form,telefono:e.target.value})}/>
                </div>
                <div>
                  <label className="flabel">¿Qué necesitas?</label>
                  <textarea className="finput" rows={4} style={{resize:"vertical"}} placeholder="Tengo una panadería y quiero empezar a vender online..." value={form.mensaje} onChange={e=>setForm({...form,mensaje:e.target.value})}/>
                </div>
                <button className="fbtn" onClick={()=>{ if(form.nombre&&form.telefono) setSent(true); }}>Enviar y recibir presupuesto →</button>
                <p className="calt">O escríbeme por WhatsApp: <a href={WA("Hola Dani, quiero información sobre tu web.")} target="_blank" rel="noopener noreferrer"><strong>+34 640 294 034</strong></a></p>
              </div>
            )}
          </div>
        </section>

      </div>

      {/* Floating WhatsApp */}
      <a
        href={WA("Hola Dani, quiero información sobre tu web.")}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Escribir por WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true">
          <path d="M16 .8C7.6.8.8 7.6.8 16c0 2.7.7 5.3 2 7.6L.6 31.3l7.9-2.1c2.2 1.2 4.8 1.9 7.5 1.9 8.4 0 15.2-6.8 15.2-15.2S24.4.8 16 .8zm7 20.5c-.3.9-1.7 1.7-2.5 1.9-.7.2-1.5.3-4.5-1-3.8-1.5-6.2-5.5-6.4-5.7-.2-.3-1.5-2-1.5-3.9s.9-2.7 1.3-3.1c.3-.3.7-.4.9-.4h.7c.2 0 .5-.1.8.6.3.8 1 2.8 1.1 3 .1.2.1.4 0 .6-.1.2-.2.4-.4.6l-.6.7c-.2.2-.4.4-.2.8.2.4.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.8.4.2.6.1.8-.1.2-.3.9-1.1 1.2-1.4.3-.4.5-.3.9-.2.4.1 2.4 1.1 2.8 1.3.4.2.7.3.8.5.1.2.1.9-.2 1.8z"/>
        </svg>
      </a>
    </>
  );
}