// src/components/ui/AnimatedSection.tsx
// ¡Importante! Este es un archivo .tsx (React + TypeScript)

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Necesitarás: npm install react-intersection-observer
import { useEffect } from "react";

// Definimos los tipos de las props que recibirá
interface Props {
  children: React.ReactNode;
  delay?: number; // Un delay opcional para escalonar animaciones
}

export const AnimatedSection: React.FC<Props> = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  // ref: El elemento que observamos
  // inView: Un booleano que nos dice si está en pantalla
  const [ref, inView] = useInView({
    triggerOnce: true, // La animación solo ocurre una vez
    threshold: 0.1, // Se dispara cuando el 10% del elemento es visible
  });

  // useEffect se ejecuta cuando el valor de 'inView' o 'controls' cambia
  useEffect(() => {
    if (inView) {
      // Si está en pantalla, inicia la animación 'visible'
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      // 'variants' define los estados de la animación
      variants={{
        hidden: { opacity: 0, y: 50 }, // Estado inicial (oculto, 50px abajo)
        visible: { 
          opacity: 1, 
          y: 0,     // Estado final (visible, en su posición original)
          transition: { 
            duration: 0.6, 
            delay: delay,
            ease: "easeOut" 
          } 
        },
      }}
      initial="hidden" // Estado inicial
      animate={controls} // El controlador que cambia de 'hidden' a 'visible'
    >
      {children}
    </motion.div>
  );
};

// Exportamos como default para la directiva 'client:visible' de Astro
export default AnimatedSection;