import { useState, useEffect } from "react";

const PRIMARY = "#3b2bee";
const ORG_AVATAR = "/zet-logo.png";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Inter', sans-serif; }

  .material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    vertical-align: middle;
  }

  @keyframes ping {
    75%, 100% { transform: scale(2); opacity: 0; }
  }
  .animate-ping {
    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .glass-nav {
    backdrop-filter: blur(12px);
    background-color: rgba(255,255,255,0.85);
  }

  .portfolio-card:hover .portfolio-overlay { opacity: 1; }
  .portfolio-card:hover .portfolio-img { transform: scale(1.1); }

  .service-card:hover .service-icon {
    background-color: ${PRIMARY};
    color: white;
  }

  .process-step:hover .step-num {
    background-color: ${PRIMARY};
    color: white;
  }

  a { text-decoration: none; color: inherit; }

  .trusted-link {
    display: inline-block;
    padding: 10px 24px;
    border-radius: 10px;
    border: 1.5px solid transparent;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    opacity: 0.5;
    filter: grayscale(1);
    color: #475569;
  }
  .trusted-link:hover {
    transform: translateY(-4px) scale(1.08);
    background-color: ${PRIMARY} !important;
    border-color: ${PRIMARY} !important;
    box-shadow: 0 8px 24px rgba(59,43,238,0.3);
    color: #ffffff !important;
    filter: grayscale(0) !important;
    opacity: 1 !important;
    -webkit-filter: grayscale(0) !important;
  }

  html { scroll-behavior: smooth; }
`;

const Icon = ({ name, size = 24, style = {} }) => (
  <span className="material-symbols-outlined" style={{ fontSize: size, ...style }}>{name}</span>
);

export default function ZETTechnologies() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#0f172a", background: "#fff" }}>
      <style>{styles}</style>

      {/* NAV */}
      <nav className="glass-nav" style={{
        position: "fixed", top: 0, width: "100%", zIndex: 50,
        borderBottom: "1px solid #f1f5f9"
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto", padding: "0 24px",
          height: 80, display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src={ORG_AVATAR}
              alt="ZET Technologies avatar"
              style={{ width: 40, height: 40, borderRadius: 8, objectFit: "cover" }}
            />
            <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.5px" }}>
              ZET Technologies
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
            {["Services", "Portfolio", "Process", "Contact Us"].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} style={{
                fontSize: 14, fontWeight: 600, color: "#475569",
                transition: "color 0.2s"
              }}
                onMouseEnter={e => e.target.style.color = PRIMARY}
                onMouseLeave={e => e.target.style.color = "#475569"}
                onClick={e => {
                  e.preventDefault();
                  document.getElementById(item.toLowerCase().replace(" ", "-"))
                    ?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >{item}</a>
            ))}
          </div>

          <a
            href="https://github.com/ZET-Technologies-Private-Limited"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: 40, height: 40, borderRadius: "50%",
              background: "#0f172a", transition: "transform 0.2s"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <img
              src="https://cdn.simpleicons.org/github/ffffff"
              alt="GitHub"
              style={{ width: 22, height: 22 }}
            />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", paddingTop: 160, paddingBottom: 96, overflow: "hidden" }}>

        <div style={{
          maxWidth: 1280, margin: "0 auto", padding: "0 24px",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64,
          alignItems: "center", position: "relative", zIndex: 1
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "4px 12px", borderRadius: 9999, background: `${PRIMARY}1a`,
              color: PRIMARY, fontSize: 11, fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "0.1em", width: "fit-content"
            }}>
              <span style={{ position: "relative", display: "inline-flex", width: 8, height: 8 }}>
                <span className="animate-ping" style={{
                  position: "absolute", inset: 0, borderRadius: "50%",
                  background: PRIMARY, opacity: 0.75
                }} />
                <span style={{
                  position: "relative", width: 8, height: 8,
                  borderRadius: "50%", background: PRIMARY
                }} />
              </span>
              Available for new projects
            </div>

            <h1 style={{
              fontSize: 68, fontWeight: 900, lineHeight: 1.1,
              letterSpacing: "-2px", color: "#0f172a"
            }}>
              Crafting{" "}
              <span style={{
                color: PRIMARY,
                textDecoration: "underline",
                textDecorationColor: `${PRIMARY}33`,
                textUnderlineOffset: 8
              }}>Digital</span>
              {" "}Excellence
            </h1>

            <p style={{ fontSize: 18, color: "#475569", maxWidth: 480, lineHeight: 1.7 }}>
              We build high-performance websites and custom software tailored to your business goals. Experience modern web solutions designed for scale.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button style={{
                background: PRIMARY, color: "#fff", padding: "16px 32px",
                borderRadius: 8, fontWeight: 700, fontSize: 18, border: "none",
                cursor: "pointer", boxShadow: `0 20px 40px ${PRIMARY}40`,
                transition: "transform 0.2s"
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                onClick={() => {
                  window.location.href = "mailto:zetfounder@gmail.com?subject=Start%20Your%20Project";
                }}
              >Start Your Project</button>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 24, paddingTop: 16 }}>
              <div style={{ display: "flex" }}>
                {[
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/68.jpg"
                ].map((src, i) => (
                  <img key={i} src={src} alt="Client"
                    style={{
                      width: 40, height: 40, borderRadius: "50%",
                      border: "2px solid #fff", marginLeft: i > 0 ? -12 : 0,
                      objectFit: "cover"
                    }} />
                ))}
              </div>
              <p style={{ fontSize: 14, fontWeight: 500, color: "#64748b" }}>
                <strong style={{ color: "#0f172a" }}>500+</strong> projects delivered worldwide
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div style={{ position: "relative" }}>
            <div style={{
              aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <img
                src="/hero-illustration.png"
                alt="Developer at work"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section style={{ padding: "48px 0", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <p style={{
            textAlign: "center", fontSize: 11, fontWeight: 700, color: "#94a3b8",
            textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 40
          }}>Trusted by industry leaders</p>
          <div style={{
            display: "flex", flexWrap: "wrap", justifyContent: "center",
            alignItems: "center", gap: 48
          }}>
            {[
              { name: "Stripe", url: "https://stripe.com" },
              { name: "Linear", url: "https://linear.app" },
              { name: "Vercel", url: "https://vercel.com" },
              { name: "Notion", url: "https://notion.so" },
              { name: "Figma", url: "https://figma.com" }
            ].map(({ name, url }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="trusted-link" style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-1px", textDecoration: "none" }}>{name}</a>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "64px 0", background: "#fff" }} id="services">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "flex-end",
            gap: 32, marginBottom: 80, flexWrap: "wrap"
          }}>
            <div style={{ maxWidth: 560 }}>
              <h2 style={{ color: PRIMARY, fontWeight: 700, fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Our Expertise</h2>
              <h3 style={{ fontSize: 48, fontWeight: 900, color: "#0f172a", letterSpacing: "-1.5px", lineHeight: 1.15 }}>
                Comprehensive agency services for modern brands
              </h3>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {[
              {
                icon: "code", title: "Full-Stack Development",
                desc: "Custom web apps, SaaS products, and startup MVPs built with React, Node.js, and robust backend systems. From dashboards to real-time apps.",
                features: ["SaaS & MVP Development", "API & Real-time Systems", "Admin Dashboards"]
              },
              {
                icon: "phone_android", title: "Mobile App Development",
                desc: "Native Android apps and cross-platform solutions — ride-booking, food delivery, super apps, and UI-to-app conversions.",
                features: ["Android (Java/Kotlin)", "Ride & Delivery Apps", "Super App Modules"]
              },
              {
                icon: "psychology", title: "AI-Based Products",
                desc: "Intelligent AI solutions using ChatGPT, Gemini APIs — chatbots, automation bots, OCR systems, and AI SaaS tools.",
                features: ["AI Chatbots & Automation", "OCR & Recommendation Systems", "Chrome Extensions & SaaS"]
              },
              {
                icon: "cloud_upload", title: "DevOps & Deployment",
                desc: "End-to-end deployment, CI/CD pipelines, server scaling, and performance optimization on AWS, Vercel, and Render.",
                features: ["CI/CD Pipelines", "Docker & Kubernetes", "Performance Optimization"]
              },
              {
                icon: "model_training", title: "Machine Learning",
                desc: "Intelligent ML solutions — predictive analytics, NLP models, computer vision, and data-driven AI systems that transform your business insights.",
                features: ["Predictive Analytics", "NLP & Computer Vision", "Model Training & Deployment"]
              }
            ].map(card => (
              <ServiceCard key={card.title} {...card} primary={PRIMARY} />
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section style={{ padding: "64px 0", background: "#f8fafc" }} id="portfolio">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <h2 style={{ color: PRIMARY, fontWeight: 700, fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Selected Portfolio</h2>
            <h3 style={{ fontSize: 48, fontWeight: 900, color: "#0f172a", letterSpacing: "-1.5px" }}>Showcasing our recent work</h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            <PortfolioCard
              href="https://keystrike.vercel.app/"
              img="https://s.wordpress.com/mshots/v1/https://keystrike.vercel.app?w=1600"
              tag="Web Application"
              title="KeyStrike"
              desc="A high-performance speed testing and tutor platform designed for accuracy and user engagement."
              year="2026"
              primary={PRIMARY}
            />
            <PortfolioCard
              href="https://v0-drive-nation.vercel.app/"
              img="https://s.wordpress.com/mshots/v1/https://v0-drive-nation.vercel.app?w=1600"
              tag="E-commerce"
              title="Drive Nation"
              desc="Premium automotive marketplace and driving community portal with seamless inventory management."
              year="2026"
              primary={PRIMARY}
            />
          </div>

          <div style={{ marginTop: 80, textAlign: "center" }}>
            <button style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: PRIMARY, fontWeight: 700, fontSize: 16,
              background: "none", border: "none", cursor: "pointer"
            }}>
              See All Projects <Icon name="arrow_right_alt" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "64px 0", background: "#fff" }} id="process">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
            <div>
              <h2 style={{ color: PRIMARY, fontWeight: 700, fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Our Process</h2>
              <h3 style={{ fontSize: 48, fontWeight: 900, color: "#0f172a", letterSpacing: "-1.5px", lineHeight: 1.15, marginBottom: 32 }}>
                How we turn ideas into reality
              </h3>
              <p style={{ fontSize: 18, color: "#475569", marginBottom: 48 }}>
                We follow a structured methodology that ensures quality, transparency, and timely delivery for every single project.
              </p>
              <div style={{ borderRadius: 16, overflow: "hidden", padding: 4, background: "#f1f5f9" }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  style={{ width: "100%", borderRadius: 12, objectFit: "cover", height: 280 }}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
              {[
                { num: "01", title: "Discovery & Strategy", desc: "We dive deep into your business goals, target audience, and market competition to build a roadmap for success." },
                { num: "02", title: "UX & Visual Design", desc: "Our designers craft intuitive wireframes and beautiful high-fidelity designs that reflect your brand identity." },
                { num: "03", title: "Development & QA", desc: "Our engineers build clean, efficient code while maintaining a rigorous testing phase to ensure bug-free performance." },
                { num: "04", title: "Launch & Growth", desc: "We handle the deployment and provide ongoing support and optimization to help your product grow." },
                { num: "05", title: "Maintenance & Support", desc: "We provide 24/7 monitoring, regular updates, security patches, and dedicated support to keep your product running smoothly." },
              ].map(step => (
                <ProcessStep key={step.num} {...step} primary={PRIMARY} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact-us" style={{ padding: "48px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{
            background: PRIMARY, borderRadius: 24, padding: "96px 48px",
            textAlign: "center", color: "#fff", position: "relative", overflow: "hidden"
          }}>
            {/* Grid pattern */}
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.1 }} preserveAspectRatio="none" viewBox="0 0 100 100">
              <defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>

            <h2 style={{ fontSize: 56, fontWeight: 900, marginBottom: 24, position: "relative", zIndex: 1, lineHeight: 1.15 }}>
              Ready to transform your<br />digital presence?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 18, marginBottom: 48, maxWidth: 560, margin: "0 auto 48px", position: "relative", zIndex: 1 }}>
              Let's discuss your next project and build something extraordinary together.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <button style={{
                background: "#fff", color: PRIMARY, padding: "20px 40px",
                borderRadius: 12, fontWeight: 900, fontSize: 20, border: "none",
                cursor: "pointer", boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                transition: "transform 0.2s", display: "inline-flex",
                alignItems: "center", gap: 10
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                onClick={() => {
                  window.open("https://wa.me/919291258688", "_blank", "noopener,noreferrer");
                }}
              >
                Contact Us
                <img
                  src="https://cdn.simpleicons.org/whatsapp/25D366"
                  alt="WhatsApp"
                  style={{ width: 24, height: 24 }}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#fff", borderTop: "1px solid #f1f5f9", paddingTop: 96, paddingBottom: 48 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 80 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
                <img
                  src={ORG_AVATAR}
                  alt="ZET Technologies avatar"
                  style={{ width: 32, height: 32, borderRadius: 8, objectFit: "cover" }}
                />
                <span style={{ fontSize: 20, fontWeight: 800 }}>ZET Technologies</span>
              </div>
              <p style={{ color: "#64748b", maxWidth: 280, marginBottom: 32, lineHeight: 1.7 }}>
                Crafting digital excellence through modern engineering and user-centric design since 2026.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                {["public", "share", "alternate_email"].map(icon => (
                  <a key={icon} href="#" style={{
                    width: 40, height: 40, borderRadius: "50%", background: "#f8fafc",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#94a3b8", transition: "all 0.2s"
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = PRIMARY; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#f8fafc"; e.currentTarget.style.color = "#94a3b8"; }}
                  >
                    <Icon name={icon} size={20} />
                  </a>
                ))}
              </div>
            </div>

            {[
              { heading: "Company", links: ["About Us", "Careers", "Our Blog", "Contact"] },
              { heading: "Services", links: ["Web Dev", "UI/UX Design", "Mobile Apps", "Branding"] },
              { heading: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
            ].map(col => (
              <div key={col.heading}>
                <h6 style={{ fontWeight: 700, color: "#0f172a", marginBottom: 24, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em" }}>{col.heading}</h6>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" style={{ color: "#64748b", fontWeight: 500, fontSize: 14, transition: "color 0.2s" }}
                        onMouseEnter={e => e.target.style.color = PRIMARY}
                        onMouseLeave={e => e.target.style.color = "#64748b"}
                      >{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{
            paddingTop: 32, borderTop: "1px solid #f1f5f9",
            display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24
          }}>
            <p style={{ color: "#94a3b8", fontSize: 14, fontWeight: 500 }}>© 2026 ZET Technologies Inc. All rights reserved.</p>
            <div style={{ display: "flex", gap: 32 }}>
              {[
                { icon: "location_on", text: "Guntur, Andhra Pradesh" },
                { icon: "mail", text: "zetfounder@gmail.com" }
              ].map(item => (
                <span key={item.text} style={{ display: "flex", alignItems: "center", gap: 8, color: "#94a3b8", fontSize: 14 }}>
                  <Icon name={item.icon} size={18} />{item.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, desc, features, primary }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="service-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: 40, borderRadius: 16,
        border: hovered ? `1px solid ${primary}33` : "1px solid #f1f5f9",
        background: "#fff",
        boxShadow: hovered ? `0 25px 50px ${primary}0d` : "none",
        transition: "all 0.3s"
      }}
    >
      <div style={{
        width: 64, height: 64, borderRadius: 12,
        background: hovered ? primary : `${primary}0d`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: hovered ? "#fff" : primary, marginBottom: 32, transition: "all 0.3s"
      }}>
        <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{icon}</span>
      </div>
      <h4 style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>{title}</h4>
      <p style={{ color: "#475569", lineHeight: 1.7, marginBottom: 32 }}>{desc}</p>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
        {features.map(f => (
          <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#64748b", fontWeight: 500 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: primary }}>check_circle</span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PortfolioCard({ href, img, tag, title, desc, year, primary }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position: "relative", overflow: "hidden", borderRadius: 16,
        aspectRatio: "16/9", marginBottom: 24,
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        background: "#fff", padding: 16
      }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 12, overflow: "hidden", position: "relative" }}>
          <img src={img} alt={title} style={{
            width: "100%", height: "100%", objectFit: "cover",
            transition: "transform 0.7s",
            transform: hovered ? "scale(1.1)" : "scale(1)"
          }} />
        </div>
        <div style={{
          position: "absolute", inset: 0,
          background: `${primary}cc`,
          opacity: hovered ? 1 : 0, transition: "opacity 0.3s",
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <div style={{
            background: "#fff", color: primary, padding: "12px 24px",
            borderRadius: 9999, fontWeight: 700, boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            display: "flex", alignItems: "center", gap: 8
          }}>
            Visit Live Website <span className="material-symbols-outlined" style={{ fontSize: 18 }}>north_east</span>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <span style={{ color: primary, fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em" }}>{tag}</span>
          <h5 style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", marginTop: 4 }}>{title}</h5>
          <p style={{ color: "#64748b", fontSize: 14, marginTop: 8, maxWidth: 340 }}>{desc}</p>
        </div>
        <span style={{ color: "#94a3b8", fontWeight: 500 }}>{year}</span>
      </div>
    </a>
  );
}

function ProcessStep({ num, title, desc, primary }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ display: "flex", gap: 24 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        flexShrink: 0, width: 48, height: 48, borderRadius: "50%",
        background: hovered ? primary : `${primary}0d`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: hovered ? "#fff" : primary, fontWeight: 900, fontSize: 18,
        transition: "all 0.3s"
      }}>{num}</div>
      <div>
        <h4 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{title}</h4>
        <p style={{ color: "#475569", lineHeight: 1.7 }}>{desc}</p>
      </div>
    </div>
  );
}
