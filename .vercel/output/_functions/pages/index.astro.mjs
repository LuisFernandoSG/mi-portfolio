import { e as createComponent, f as createAstro, h as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, m as maybeRenderHead, n as renderComponent } from '../chunks/astro/server_YAOMPHgW.mjs';
import 'clsx';
/* empty css                                 */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
export { renderers } from '../renderers.mjs';

const CONTENT = {
  // ====================================================================
  // ESPAÑOL (es)
  // ====================================================================
  es: {
    PROFILE: {
      Greeting: "¡Hola! Soy",
      name: "Luis Fernando Salguero Guzman",
      title: "Ingeniero en Tecnología de la Información",
      summary: "Ingeniero en Tecnología de la Información con experiencia en desarrollo web, automatización de procesos y soporte técnico. Hábil en la construcción de soluciones con React, Node.js, Oracle APEX y herramientas de gestión de proyectos como GitHub. Sólida capacidad para colaborar con equipos multidisciplinarios, optimizar procesos y entregar soluciones de alto impacto. Certificado Scrum Master Professional (SMPC).",
      location: "Heredia, Costa Rica"
    },
    CONTACT: {
      email: "Ifsalguerog@gmail.com",
      phone: "8311-9080",
      linkedin: "www.linkedin.com/in/lfsalguerog"
    },
    SKILLS: {
      dev: ["JavaScript", "Node.js", "React", "Redux", "Socket.IO", "PHP", "HTML", "CSS", "Tailwind", "Bootstrap", "Oracle APEX"],
      databases: ["Oracle", "SQL", "MongoDB"],
      bi: ["Power BI", "JasperReports"],
      support: ["Troubleshooting", "Windows Server", "Linux", "MS Office"]
    },
    EXPERIENCE: [
      {
        role: "Consultor de TI (Internacional)",
        company: "CRC Coding S.A",
        period: "Ene 2025 - Presente",
        description: [
          "Desarrollo de aplicaciones empresariales usando Oracle SQL y Oracle APEX, mejorando la gestión financiera y de reportes.",
          "Optimización de consultas SQL y stored procedures, reduciendo el tiempo de procesamiento de datos en un 30%.",
          "Implementación de módulos financieros y sistemas de reportes, incluyendo seguimiento de presupuesto y gestión contable.",
          "Administración de servidores, gestionando configuración de Oracle APEX, ORDS y entornos Apache Tomcat."
        ]
      },
      {
        role: "Desarrollador Full Stack",
        company: "Freelance",
        period: "Jun 2024 - Presente",
        description: [
          "Mantenimiento del sitio web institucional de SENARA, asegurando disponibilidad, estabilidad y actualizaciones oportunas.",
          "Mantenimiento preventivo y correctivo, resolviendo problemas del sistema para mejorar la fiabilidad de la plataforma.",
          "Desarrollo e integración de nuevas funcionalidades en la plataforma, mejorando la satisfacción del cliente y la experiencia del usuario."
        ]
      }
    ],
    PROJECTS: [
      {
        name: "SENARA Logbook",
        period: "Ene 2024 - Jun 2024",
        stack: ["ReactJS", "NodeJS (Express)", "MongoDB", "Socket.IO", "Redux"],
        description: [
          "Diseño y desarrollo de una aplicación de seguimiento de proyectos para mejorar la eficiencia operativa y la gestión de recursos.",
          "Construcción de una solución full-stack con ReactJS, NodeJS (ExpressJS), MongoDB y Socket.IO para actualizaciones en tiempo real; integración de Redux para la gestión del estado.",
          "Mejora de la visibilidad del proyecto y control de costos, permitiendo una mejor toma de decisiones mediante el monitoreo preciso del tiempo y los gastos."
        ]
      }
    ],
    WEBSITES: [
      {
        name: "Amigo Secreto",
        url: "https://amigo-secreto-client-8plq.vercel.app/",
        description: "Aplicación web responsiva para gestionar intercambios de regalos familiares de forma sencilla y atractiva.",
        stack: ["React", "Tailwind CSS", "NodeJS", "Express", "MongoDB"]
      }
    ],
    UI: {
      homeLink: "Inicio",
      contactButton: "Contáctame",
      linkedinButton: "LinkedIn",
      experienceTitle: "Experiencia Profesional",
      projectsTitle: "Proyectos Destacados",
      skillsTitle: "Habilidades Técnicas",
      devTitle: "Desarrollo y Programación",
      dbTitle: "Bases de Datos",
      biTitle: "BI & Reporting Tools",
      websitesTitle: "Sitios Web & Demos"
    }
  },
  // ====================================================================
  // INGLÉS (en)
  // ====================================================================
  en: {
    PROFILE: {
      Greeting: "Hello! I'm",
      name: "Luis Fernando Salguero Guzman",
      title: "Information Technology Engineer",
      summary: "Information Technology Engineer with experience in web development, process automation, and technical support. Skilled in building solutions with React, Node.js, Oracle APEX, and project management tools such as GitHub. Solid ability to collaborate with multidisciplinary teams, optimize processes, and deliver high-impact solutions. Certified Scrum Master Professional (SMPC).",
      location: "Heredia, Costa Rica"
    },
    CONTACT: {
      email: "Ifsalguerog@gmail.com",
      phone: "8311-9080",
      linkedin: "www.linkedin.com/in/lfsalguerog"
    },
    SKILLS: {
      dev: ["JavaScript", "Node.js", "React", "Redux", "Socket.IO", "PHP", "HTML", "CSS", "Tailwind", "Bootstrap", "Oracle APEX"],
      databases: ["Oracle", "SQL", "MongoDB"],
      bi: ["Power BI", "JasperReports"],
      support: ["Troubleshooting", "Windows Server", "Linux", "MS Office"]
    },
    EXPERIENCE: [
      {
        role: "IT Consultant (International)",
        company: "CRC Coding S.A",
        period: "Jan 2025 - Present",
        description: [
          "Developed enterprise applications using Oracle SQL and Oracle APEX, improving financial and reporting management.",
          "Optimized SQL queries and stored procedures, reducing data processing time by 30%.",
          "Implemented financial modules and reporting systems, including budget tracking and accounting management.",
          "Administered servers, managing Oracle APEX, ORDS configuration, and Apache Tomcat environments."
        ]
      },
      {
        role: "Full Stack Developer ",
        company: "Freelance",
        period: "Jun 2024 - Presente",
        description: [
          "Maintained the institutional website for SENARA, ensuring availability, stability, and timely updates.",
          "Performed preventive and corrective maintenance, resolving system issues to improve platform reliability.",
          "Developed and integrated new features into the platform, enhancing client satisfaction and user experience."
        ]
      }
    ],
    PROJECTS: [
      {
        name: "SENARA Logbook",
        period: "Jan 2024 - Jun 2024",
        stack: ["ReactJS", "NodeJS (Express)", "MongoDB", "Socket.IO", "Redux"],
        description: [
          "Designed and developed a project tracking application to improve operational efficiency and resource management.",
          "Built a full-stack solution with ReactJS, NodeJS (ExpressJS), MongoDB, and Socket.IO for real-time updates; integrated Redux for state management.",
          "Improved project visibility and cost control, enabling better decision-making through precise monitoring of time and expenses."
        ]
      }
    ],
    WEBSITES: [
      // <-- DATOS EN INGLÉS
      {
        name: "Secret Santa",
        url: "https://amigo-secreto-client-8plq.vercel.app/",
        description: "Responsive web application for managing family gift exchanges in a simple and attractive way.",
        stack: ["React", "Tailwind CSS", "NodeJS", "Express", "MongoDB"]
      }
    ],
    UI: {
      homeLink: "Home",
      contactButton: "Contact Me",
      linkedinButton: "LinkedIn",
      experienceTitle: "Professional Experience",
      projectsTitle: "Featured Projects",
      skillsTitle: "Technical Skills",
      devTitle: "Development and Programming",
      dbTitle: "Databases",
      biTitle: "BI & Reporting Tools",
      websitesTitle: "Websites & Demos"
    }
  }
};
const DEFAULT_LANG = "es";

const $$Astro$7 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es" class="dark"> <head><meta charset="UTF-8"><meta name="description" content="Portfolio de Luis Salguero"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-gray-900 text-gray-100 selection:bg-sky-500 selection:text-gray-900"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "E:/Desarrollos/mi-portfolio/src/layouts/BaseLayout.astro", void 0);

const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    // La animación solo ocurre una vez
    threshold: 0.1
    // Se dispara cuando el 10% del elemento es visible
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      variants: {
        hidden: { opacity: 0, y: 50 },
        // Estado inicial (oculto, 50px abajo)
        visible: {
          opacity: 1,
          y: 0,
          // Estado final (visible, en su posición original)
          transition: {
            duration: 0.6,
            delay,
            ease: "easeOut"
          }
        }
      },
      initial: "hidden",
      animate: controls,
      children
    }
  );
};

const $$Astro$6 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  const { content } = Astro2.props;
  const PROFILE = content.PROFILE;
  const CONTACT = content.CONTACT;
  const UI = content.UI;
  return renderTemplate`${maybeRenderHead()}<section id="inicio" class="max-w-3xl mx-auto px-6 py-24 md:py-32"> ${renderComponent($$result, "AnimatedSection", AnimatedSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "E:/Desarrollos/mi-portfolio/src/components/ui/AnimatedSection.tsx", "client:component-export": "AnimatedSection" }, { "default": ($$result2) => renderTemplate` <h1 class="text-4xl md:text-6xl font-bold mb-4">  ${PROFILE.Greeting} <span class="titulo-degradado">${PROFILE.name}</span> </h1> ` })} ${renderComponent($$result, "AnimatedSection", AnimatedSection, { "client:visible": true, "delay": 0.2, "client:component-hydration": "visible", "client:component-path": "E:/Desarrollos/mi-portfolio/src/components/ui/AnimatedSection.tsx", "client:component-export": "AnimatedSection" }, { "default": ($$result2) => renderTemplate` <h2 class="text-2xl md:text-3xl font-semibold text-gray-300 mb-6"> ${PROFILE.title} </h2> ` })} ${renderComponent($$result, "AnimatedSection", AnimatedSection, { "client:visible": true, "delay": 0.4, "client:component-hydration": "visible", "client:component-path": "E:/Desarrollos/mi-portfolio/src/components/ui/AnimatedSection.tsx", "client:component-export": "AnimatedSection" }, { "default": ($$result2) => renderTemplate` <p class="text-lg text-gray-400 mb-8"> ${PROFILE.summary} </p> ` })} ${renderComponent($$result, "AnimatedSection", AnimatedSection, { "client:visible": true, "delay": 0.6, "client:component-hydration": "visible", "client:component-path": "E:/Desarrollos/mi-portfolio/src/components/ui/AnimatedSection.tsx", "client:component-export": "AnimatedSection" }, { "default": ($$result2) => renderTemplate` <div class="flex flex-col sm:flex-row gap-4"> <a${addAttribute(`mailto:${CONTACT.email}`, "href")} class="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"> ${UI.contactButton}  </a> <a${addAttribute(`https://${CONTACT.linkedin}`, "href")} target="_blank" rel="noopener noreferrer" class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"> ${UI.linkedinButton}  </a> </div> ` })} </section>`;
}, "E:/Desarrollos/mi-portfolio/src/components/sections/Hero.astro", void 0);

const Accordion = ({ items }) => {
  const [openId, setOpenId] = useState(null);
  const handleToggle = (id) => {
    setOpenId((prevId) => prevId === id ? null : id);
  };
  return /* @__PURE__ */ jsx("div", { className: "space-y-4", children: items.map((job) => {
    const isOpen = job.id === openId;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: "rounded-xl border border-gray-700/50 bg-gray-800/50 overflow-hidden shadow-lg",
        children: [
          /* @__PURE__ */ jsx("h2", { id: `heading-${job.id}`, children: /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "flex items-center justify-between w-full p-5 font-medium text-left \r\n                                           text-white bg-gray-700/50 hover:bg-gray-700 transition-colors focus:outline-none",
              onClick: () => handleToggle(job.id),
              "aria-controls": `collapse-${job.id}`,
              "aria-expanded": isOpen,
              children: [
                /* @__PURE__ */ jsxs("span", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsx("span", { className: `text-lg font-bold ${isOpen ? "text-sky-300" : "text-white"}`, children: job.role }),
                  /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-400", children: [
                    job.company,
                    " — ",
                    job.period
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: `w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`,
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" })
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              id: `collapse-${job.id}`,
              role: "region",
              "aria-labelledby": `heading-${job.id}`,
              className: `grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 p-3" : "grid-rows-[0fr] opacity-0"}`,
              children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("ul", { className: "list-disc pl-5 space-y-2 text-gray-300 p-5 pt-0", children: job.description.map((desc, index) => /* @__PURE__ */ jsx("li", { children: desc }, index)) }) })
            }
          )
        ]
      },
      job.id
    );
  }) });
};

const $$Astro$5 = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Experience;
  const { content } = Astro2.props;
  const EXPERIENCE = content.EXPERIENCE;
  const UI = content.UI;
  const accordionItems = EXPERIENCE.map((job, index) => ({
    ...job,
    id: `job-${index + 1}`
  }));
  return renderTemplate`${maybeRenderHead()}<section id="experiencia" class="max-w-3xl mx-auto px-6 py-16"> ${renderComponent($$result, "AnimatedSection", AnimatedSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "E:/Desarrollos/mi-portfolio/src/components/ui/AnimatedSection.tsx", "client:component-export": "AnimatedSection" }, { "default": ($$result2) => renderTemplate` <h3 class="text-3xl font-bold text-sky-400 mb-12">${UI.experienceTitle}</h3> ` })} ${renderComponent($$result, "Accordion", Accordion, { "items": accordionItems, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "E:/Desarrollos/mi-portfolio/src/components/ui/Accordion.tsx", "client:component-export": "default" })} </section>`;
}, "E:/Desarrollos/mi-portfolio/src/components/sections/Experience.astro", void 0);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="bg-sky-700/50 text-sky-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full border border-sky-600"> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "E:/Desarrollos/mi-portfolio/src/components/ui/Badge.astro", void 0);

const $$Astro$4 = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Projects;
  const { content } = Astro2.props;
  const PROJECTS = content.PROJECTS;
  const UI = content.UI;
  return renderTemplate`${maybeRenderHead()}<section id="proyectos" class="max-w-3xl mx-auto px-6 py-16"> ${renderComponent($$result, "AnimatedSection", AnimatedSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "E:/Desarrollos/mi-portfolio/src/components/ui/AnimatedSection.tsx", "client:component-export": "AnimatedSection" }, { "default": ($$result2) => renderTemplate` <h3 class="text-3xl font-bold text-sky-400 mb-12">${UI.projectsTitle}</h3> ` })} <div class="grid grid-cols-1 md:grid-cols-1 gap-8"> ${PROJECTS.map((project, index) => renderTemplate`${renderComponent($$result, "AnimatedSection", AnimatedSection, { "client:visible": true, "delay": index * 0.2, "client:component-hydration": "visible", "client:component-path": "E:/Desarrollos/mi-portfolio/src/components/ui/AnimatedSection.tsx", "client:component-export": "AnimatedSection" }, { "default": ($$result2) => renderTemplate` <div class="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 shadow-lg 
                    hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"> <h4 class="text-xl font-bold text-white mb-2">${project.name}</h4> <time class="text-sm text-gray-400 mb-4 block">${project.period}</time> <ul class="list-disc pl-5 space-y-2 text-gray-300 mb-6"> ${project.description.map((desc) => renderTemplate`<li>${desc}</li>`)} </ul> <div class="flex flex-wrap gap-2"> ${project.stack.map((tech) => renderTemplate`${renderComponent($$result2, "Badge", $$Badge, {}, { "default": ($$result3) => renderTemplate`${tech}` })}`)} </div> </div> ` })}`)} </div> </section>`;
}, "E:/Desarrollos/mi-portfolio/src/components/sections/Projects.astro", void 0);

const $$Astro$3 = createAstro();
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Skills;
  const { content } = Astro2.props;
  const SKILLS = content.SKILLS;
  const UI = content.UI;
  return renderTemplate`${maybeRenderHead()}<section id="habilidades" class="max-w-3xl mx-auto px-6 py-16"> ${renderComponent($$result, "AnimatedSection", AnimatedSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "E:/Desarrollos/mi-portfolio/src/components/ui/AnimatedSection.tsx", "client:component-export": "AnimatedSection" }, { "default": ($$result2) => renderTemplate` <h3 class="text-3xl font-bold text-sky-400 mb-8">${UI.skillsTitle}</h3> <div class="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6"> <div class="mb-6"> <h4 class="text-xl font-semibold mb-4 text-white">${UI.devTitle}</h4> <div class="flex flex-wrap gap-2"> ${SKILLS.dev.map((skill) => renderTemplate`${renderComponent($$result2, "Badge", $$Badge, {}, { "default": ($$result3) => renderTemplate`${skill}` })}`)} </div> </div> <div class="mb-6"> <h4 class="text-xl font-semibold mb-4 text-white">${UI.dbTitle}</h4> <div class="flex flex-wrap gap-2"> ${SKILLS.databases.map((skill) => renderTemplate`${renderComponent($$result2, "Badge", $$Badge, {}, { "default": ($$result3) => renderTemplate`${skill}` })}`)} </div> </div> <div class="mb-0"> <h4 class="text-xl font-semibold mb-4 text-white">${UI.biTitle}</h4> <div class="flex flex-wrap gap-2"> ${SKILLS.bi.map((skill) => renderTemplate`${renderComponent($$result2, "Badge", $$Badge, {}, { "default": ($$result3) => renderTemplate`${skill}` })}`)} </div> </div> </div> ` })} </section>`;
}, "E:/Desarrollos/mi-portfolio/src/components/sections/Skills.astro", void 0);

const setCookie = (name, value, days) => {
  let expires = "";
  {
    const date = /* @__PURE__ */ new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1e3);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value) + expires + "; path=/";
};
const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};
const LanguageToggle = () => {
  const [currentLang, setCurrentLang] = useState("es");
  const [isEnglish, setIsEnglish] = useState(false);
  useEffect(() => {
    const savedLang = getCookie("portfolioLang") || "es";
    setCurrentLang(savedLang);
    setIsEnglish(savedLang === "en");
    document.documentElement.lang = savedLang;
  }, []);
  const toggleLanguage = () => {
    const newLang = isEnglish ? "es" : "en";
    setCurrentLang(newLang);
    setIsEnglish(!isEnglish);
    setCookie("portfolioLang", newLang, 30);
    document.documentElement.lang = newLang;
    window.location.reload();
  };
  const switchBgClasses = isEnglish ? "bg-sky-600" : "bg-gray-700";
  const switchThumbClasses = isEnglish ? "translate-x-full bg-white" : "translate-x-0 bg-sky-400";
  return (
    // Utilizamos un <label> para que el clic en cualquier parte del componente active la función
    /* @__PURE__ */ jsxs("label", { htmlFor: "language-toggle", className: "flex items-center cursor-pointer", children: [
      /* @__PURE__ */ jsx("span", { className: `text-sm font-semibold mr-2 ${isEnglish ? "text-gray-400" : "text-sky-400"}`, children: "ES" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "checkbox",
            id: "language-toggle",
            className: "sr-only",
            checked: isEnglish,
            onChange: toggleLanguage
          }
        ),
        /* @__PURE__ */ jsx("div", { className: `block w-14 h-7 rounded-full transition duration-300 ${switchBgClasses}`, children: /* @__PURE__ */ jsx(
          "span",
          {
            className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 \r\n                        text-xs font-bold text-white transition-opacity duration-300\r\n                        opacity-0",
            children: "EN"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: `dot absolute left-1 top-1 w-5 h-5 rounded-full transition transform duration-300 ${switchThumbClasses}` })
      ] }),
      /* @__PURE__ */ jsx("span", { className: `text-sm font-semibold ml-2 ${isEnglish ? "text-sky-400" : "text-gray-400"}`, children: "EN" })
    ] })
  );
};

const $$Astro$2 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { content } = Astro2.props;
  const safeContent = content || CONTENT.es;
  const NAV_LINKS = [
    { href: "#inicio", text: safeContent.UI.homeLink },
    { href: "#experiencia", text: safeContent.UI.experienceTitle },
    { href: "#proyectos", text: safeContent.UI.projectsTitle },
    { href: "#habilidades", text: safeContent.UI.skillsTitle }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 w-full px-6 py-4
               bg-gray-900/70 backdrop-blur-lg 
               border-b border-gray-700/50"> <div class="max-w-5xl mx-auto flex justify-between items-center"> <a href="#inicio" class="text-xl font-bold text-sky-400 hover:text-sky-300 transition-colors">
LS.dev
</a> <div class="flex items-center gap-6"> <nav class="hidden sm:flex gap-6"> ${NAV_LINKS.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-gray-300 hover:text-sky-400 transition-colors"> ${link.text} </a>`)} </nav> ${renderComponent($$result, "LanguageToggle", LanguageToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/Desarrollos/mi-portfolio/src/components/ui/LanguageToggle.tsx", "client:component-export": "default" })} </div> </div> </header>`;
}, "E:/Desarrollos/mi-portfolio/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Websites = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Websites;
  const { content } = Astro2.props;
  const WEBSITES = content.WEBSITES;
  const UI = content.UI;
  return renderTemplate`${maybeRenderHead()}<section id="sitios-web" class="max-w-5xl mx-auto px-6 py-16"> ${renderComponent($$result, "AnimatedSection", AnimatedSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "E:/Desarrollos/mi-portfolio/src/components/ui/AnimatedSection.tsx", "client:component-export": "AnimatedSection" }, { "default": ($$result2) => renderTemplate` <h3 class="text-3xl font-bold text-sky-400 mb-12">${UI.websitesTitle}</h3> ` })} <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${WEBSITES.map((site, index) => renderTemplate`${renderComponent($$result, "AnimatedSection", AnimatedSection, { "client:visible": true, "delay": index * 0.2, "client:component-hydration": "visible", "client:component-path": "E:/Desarrollos/mi-portfolio/src/components/ui/AnimatedSection.tsx", "client:component-export": "AnimatedSection" }, { "default": ($$result2) => renderTemplate` <a${addAttribute(site.url, "href")} target="_blank" rel="noopener noreferrer" class="block bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 shadow-lg 
                 hover:bg-gray-800 hover:border-sky-600 transition-all duration-300 group"> <div class="flex justify-between items-start mb-3"> <h4 class="text-xl font-bold text-white group-hover:text-sky-400 transition-colors"> ${site.name} </h4> <svg class="w-5 h-5 text-gray-400 group-hover:text-sky-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg> </div> <p class="text-gray-300 mb-4">${site.description}</p> <div class="flex flex-wrap gap-2"> ${site.stack.map((tech) => renderTemplate`${renderComponent($$result2, "Badge", $$Badge, {}, { "default": ($$result3) => renderTemplate`${tech}` })}`)} </div> </a> ` })}`)} </div> </section>`;
}, "E:/Desarrollos/mi-portfolio/src/components/sections/Websites.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const getCookieFromHeader = (cookieHeader2, name) => {
    if (!cookieHeader2) return null;
    const cookies = cookieHeader2.split(";");
    for (const cookie of cookies) {
      const parts = cookie.split("=");
      const key = parts[0].trim();
      const value = parts[1] ? parts[1].trim() : "";
      if (key === name) {
        return value;
      }
    }
    return null;
  };
  let lang = DEFAULT_LANG;
  const cookieHeader = Astro2.request.headers.get("cookie");
  const savedLang = getCookieFromHeader(cookieHeader, "portfolioLang");
  const validLangs = Object.keys(CONTENT);
  if (savedLang && validLangs.includes(savedLang)) {
    lang = savedLang;
  }
  const currentContent = CONTENT[lang];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Portafolio | ${currentContent.PROFILE.name}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "content": currentContent })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "content": currentContent })} ${renderComponent($$result2, "Experience", $$Experience, { "content": currentContent })} ${renderComponent($$result2, "Projects", $$Projects, { "content": currentContent })} ${renderComponent($$result2, "Skills", $$Skills, { "content": currentContent })} ${renderComponent($$result2, "Websites", $$Websites, { "content": currentContent })} </main> ` })}`;
}, "E:/Desarrollos/mi-portfolio/src/pages/index.astro", void 0);

const $$file = "E:/Desarrollos/mi-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
