// src/components/ui/LanguageToggle.tsx
// ¡Este es un componente de React (.tsx)!

import React, { useState, useEffect } from 'react';

type Lang = 'es' | 'en';

// === FUNCIONES AUXILIARES PARA COOKIES ===

// 1. Establece una cookie
const setCookie = (name: string, value: string, days: number) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// 2. Lee una cookie
const getCookie = (name: string): string | null => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// ===========================================

const LanguageToggle: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Lang>('es');
  // Usaremos un estado booleano para el switch (true = 'en', false = 'es')
  const [isEnglish, setIsEnglish] = useState(false);

  // 1. Leer la preferencia al inicio
  useEffect(() => {
    const savedLang = (getCookie('portfolioLang') as Lang) || 'es';
    setCurrentLang(savedLang);
    setIsEnglish(savedLang === 'en');
    document.documentElement.lang = savedLang;
  }, []);

  // 2. Función para cambiar el idioma.
  const toggleLanguage = () => {
    // Calcula el nuevo idioma basado en el estado actual
    const newLang: Lang = isEnglish ? 'es' : 'en';
    
    // 2a. Actualiza los estados de React
    setCurrentLang(newLang);
    setIsEnglish(!isEnglish); // Invierte el estado del switch
    
    // 2b. Guarda la preferencia en la cookie
    setCookie('portfolioLang', newLang, 30);
    document.documentElement.lang = newLang;

    // 2c. Forzar recarga suave
    window.location.reload(); 
  };
  
  // Clases dinámicas para el fondo del switch y el círculo (el "thumb")
  const switchBgClasses = isEnglish ? 'bg-sky-600' : 'bg-gray-700';
  const switchThumbClasses = isEnglish ? 'translate-x-full bg-white' : 'translate-x-0 bg-sky-400';


  return (
    // Utilizamos un <label> para que el clic en cualquier parte del componente active la función
    <label htmlFor="language-toggle" className="flex items-center cursor-pointer">
      
      {/* 1. Etiqueta 'ES' a la izquierda */}
      <span className={`text-sm font-semibold mr-2 ${isEnglish ? 'text-gray-400' : 'text-sky-400'}`}>
        ES
      </span>

      {/* 2. Toggle Switch visual */}
      <div className="relative">
        {/* Input invisible (el verdadero interruptor) */}
        <input 
            type="checkbox" 
            id="language-toggle" 
            className="sr-only" // Oculta el input visualmente pero lo mantiene accesible
            checked={isEnglish}
            onChange={toggleLanguage} // Llama a la función al cambiar
        />
        
        {/* Pista o Fondo del Switch (56px de ancho, 28px de alto) */}
        <div className={`block w-14 h-7 rounded-full transition duration-300 ${switchBgClasses}`}>
          
          {/* Sombra de texto invisible (hack para centrar el texto 'EN') */}
          <span 
             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        text-xs font-bold text-white transition-opacity duration-300
                        opacity-0">EN
          </span>
        </div>
        
        {/* El "Thumb" o Círculo del Switch (20px de ancho) */}
        <div className={`dot absolute left-1 top-1 w-5 h-5 rounded-full transition transform duration-300 ${switchThumbClasses}`}></div>
      </div>
      
      {/* 3. Etiqueta 'EN' a la derecha */}
      <span className={`text-sm font-semibold ml-2 ${isEnglish ? 'text-sky-400' : 'text-gray-400'}`}>
        EN
      </span>
      
    </label>
  );
};

export default LanguageToggle;