// src/data/portfolioData.ts

// Definimos la estructura de contenido
interface Content {
  EXPERIENCE: {
    role: string;
    company: string;
    period: string;
    description: string[];
  }[];
  PROJECTS: {
    name: string;
    period: string;
    stack: string[];
    description: string[];
  }[];
  WEBSITES: {
    name: string;
    url: string;
    description: string;
    stack: string[];
    previewImage?: string;
  }[];

  PROFILE: {
    Greeting: string;
    name: string;
    title: string;
    summary: string;
    location: string;
  };
  CONTACT: {
    email: string;
    phone: string;
    linkedin: string;
  };
  SKILLS: {
    dev: string[];
    databases: string[];
    bi: string[];
    support: string[];
  };
  // ¡Etiquetas de UI!
  UI: {
    homeLink: string; // <-- CLAVE NECESARIA
    contactButton: string;
    linkedinButton: string;
    experienceTitle: string;
    projectsTitle: string;
    skillsTitle: string;
    devTitle: string; // Títulos para Skills
    dbTitle: string; // Títulos para Skills
    biTitle: string; // Títulos para Skills
    websitesTitle: string; // Títulos para Websites
  }
}

export const CONTENT: Record<'es' | 'en', Content> = {
  // ====================================================================
  // ESPAÑOL (es)
  // ====================================================================
  es: {
    PROFILE: {
      Greeting: "¡Hola! Soy",
      name: "Luis Fernando Salguero Guzman",
      title: "Ingeniero en Tecnología de la Información",
      summary: "Ingeniero en Tecnología de la Información con experiencia en desarrollo web, automatización de procesos y soporte técnico. Hábil en la construcción de soluciones con React, Node.js, Oracle APEX y herramientas de gestión de proyectos como GitHub. Sólida capacidad para colaborar con equipos multidisciplinarios, optimizar procesos y entregar soluciones de alto impacto. Certificado Scrum Master Professional (SMPC).",
      location: "Heredia, Costa Rica",
    },
    CONTACT: {
      email: "Ifsalguerog@gmail.com",
      phone: "8311-9080",
      linkedin: "www.linkedin.com/in/lfsalguerog",
    },
    SKILLS: {
      dev: ["JavaScript", "Node.js", "React", "Redux", "Socket.IO", "PHP", "HTML", "CSS", "Tailwind", "Bootstrap", "Oracle APEX"],
      databases: ["Oracle", "SQL", "MongoDB"],
      bi: ["Power BI", "JasperReports"],
      support: ["Troubleshooting", "Windows Server", "Linux", "MS Office"],
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
            stack: ["React", "Tailwind CSS", "NodeJS", "Express", "MongoDB"],
            previewImage: ""
        },
        {
            name: "Bitacora SENARA (Interno)",
            url: "",
            description: "Bitácora digital para la gestión y seguimiento de proyectos internos en SENARA, optimizando la asignación de recursos y tiempos.",
            stack: ["React", "Redux", "NodeJS", "Express", "MongoDB", "Socket.IO"],
            previewImage: "/public/img/senara.webp"
        },
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
        websitesTitle: "Sitios Web & Demos",
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
      location: "Heredia, Costa Rica",
    },
    CONTACT: {
      email: "Ifsalguerog@gmail.com",
      phone: "8311-9080",
      linkedin: "www.linkedin.com/in/lfsalguerog",
    },
    SKILLS: {
      dev: ["JavaScript", "Node.js", "React", "Redux", "Socket.IO", "PHP", "HTML", "CSS", "Tailwind", "Bootstrap", "Oracle APEX"],
      databases: ["Oracle", "SQL", "MongoDB"],
      bi: ["Power BI", "JasperReports"],
      support: ["Troubleshooting", "Windows Server", "Linux", "MS Office"],
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
    WEBSITES: [ // <-- DATOS EN INGLÉS
        {
            name: "Secret Santa",
            url: "https://amigo-secreto-client-8plq.vercel.app/",
            description: "Responsive web application for managing family gift exchanges in a simple and attractive way.",
            stack: ["React", "Tailwind CSS", "NodeJS", "Express", "MongoDB"],
            previewImage: ""
        },
        {
            name: "SENARA Logbook (Internal)",
            url: "",
            description: "Digital logbook for managing and tracking internal projects at SENARA, optimizing resource and time allocation.",
            stack: ["React", "Redux", "NodeJS", "Express", "MongoDB", "Socket.IO"],
            previewImage: "/public/img/senara.webp"
        },

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
        websitesTitle: "Websites & Demos",
    }
  }
};

export const DEFAULT_LANG = 'es';