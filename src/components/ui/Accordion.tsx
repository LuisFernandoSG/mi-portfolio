// src/components/ui/Accordion.tsx
// Usamos "use client" para asegurar que este componente sea interactivo
/** @jsxImportSource react */

import React, { useState } from 'react';

// Definimos la estructura de un ítem de experiencia
interface JobItem {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string[];
}

interface AccordionProps {
    items: JobItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    // Estado para saber qué ítem está actualmente abierto. 
    // Inicialmente, el primero (items[0].id)
    const [openId, setOpenId] = useState( null);

    const handleToggle = (id: string) => {
        // Si el ítem clickeado ya está abierto, lo cerramos (setOpenId(null)).
        // Si está cerrado, lo abrimos (setOpenId(id)).
        setOpenId(prevId => (prevId === id ? null : id));
    };

    return (
        <div className="space-y-4">
            {items.map((job) => {
                const isOpen = job.id === openId;
                
                return (
                    <div 
                        key={job.id} 
                        className="rounded-xl border border-gray-700/50 bg-gray-800/50 overflow-hidden shadow-lg"
                    >
                        {/* Botón/Encabezado */}
                        <h2 id={`heading-${job.id}`}>
                            <button 
                                type="button" 
                                className="flex items-center justify-between w-full p-5 font-medium text-left 
                                           text-white bg-gray-700/50 hover:bg-gray-700 transition-colors focus:outline-none"
                                onClick={() => handleToggle(job.id)}
                                aria-controls={`collapse-${job.id}`} 
                                aria-expanded={isOpen}
                            >
                                <span className="flex flex-col">
                                    <span className={`text-lg font-bold ${isOpen ? 'text-sky-300' : 'text-white'}`}>{job.role}</span>
                                    <span className="text-sm text-gray-400">{job.company} — {job.period}</span>
                                </span>
                                {/* Icono de Chevron */}
                                <svg 
                                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </h2>

                        {/* Contenido (Usamos Tailwind para las transiciones de altura) */}
                        <div 
                            id={`collapse-${job.id}`} 
                            role="region" 
                            aria-labelledby={`heading-${job.id}`}
                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 p-3' : 'grid-rows-[0fr] opacity-0'}`}
                        >
                            <div className="overflow-hidden">
                                <ul className="list-disc pl-5 space-y-2 text-gray-300 p-5 pt-0">
                                    {job.description.map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                );
            })}
        </div>
    );
};

export default Accordion;