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
    // Inicialmente el primero.
    const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

    const handleToggle = (id: string) => {
        setOpenId(prevId => (prevId === id ? null : id));
    };

    return (
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-6">
            {items.map((job, index) => {
                const isOpen = job.id === openId;
                
                return (
                    <div 
                        key={job.id} 
                        className="relative group"
                    >
                        {/* Timeline Node dot */}
                        <div className={`absolute -left-[31px] sm:-left-[39px] top-7 h-4 w-4 rounded-full border-2 
                                        transition-all duration-300 flex items-center justify-center
                                        ${isOpen 
                                            ? 'bg-sky-400 border-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.5)] scale-110' 
                                            : 'bg-slate-950 border-white/20'}`}
                        >
                            {isOpen && <div className="h-1.5 w-1.5 rounded-full bg-slate-950 animate-ping"></div>}
                        </div>

                        {/* Accordion Card */}
                        <div 
                            className={`glass-card rounded-2xl overflow-hidden transition-all duration-300
                                        ${isOpen 
                                            ? 'border-t-sky-400/60 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6)] bg-slate-900/50' 
                                            : 'hover:border-t-sky-400/40 hover:bg-slate-900/10'}`}
                        >
                            {/* Toggle Header Button */}
                            <h3 id={`heading-${job.id}`}>
                                <button 
                                    type="button" 
                                    className="flex items-center justify-between w-full p-6 text-left focus:outline-none cursor-pointer"
                                    onClick={() => handleToggle(job.id)}
                                    aria-controls={`collapse-${job.id}`} 
                                    aria-expanded={isOpen}
                                >
                                    <span className="flex flex-col gap-1.5">
                                        <span className={`text-lg font-bold tracking-tight transition-colors duration-200 
                                                         ${isOpen ? 'text-sky-400' : 'text-white group-hover:text-sky-300'}`}>
                                            {job.role}
                                        </span>
                                        <span className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
                                            <span className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5 text-gray-500"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="16"></line><line x1="15" y1="22" x2="15" y2="16"></line><line x1="9" y1="16" x2="15" y2="16"></line><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M16 10h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path></svg>
                                                {job.company}
                                            </span>
                                            <span className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5 text-gray-500"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                                {job.period}
                                            </span>
                                        </span>
                                    </span>
                                    
                                    {/* Icono de Chevron */}
                                    <div className={`p-1.5 rounded-lg border transition-all duration-300 
                                                    ${isOpen 
                                                        ? 'bg-sky-500/10 border-sky-500/20 text-sky-400 rotate-180' 
                                                        : 'bg-white/5 border-white/5 text-gray-400 group-hover:text-white'}`}
                                    >
                                        <svg 
                                            className="w-4 h-4" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24" 
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                            </h3>

                            {/* Contenido del Acordeón */}
                            <div 
                                id={`collapse-${job.id}`} 
                                role="region" 
                                aria-labelledby={`heading-${job.id}`}
                                className={`grid transition-all duration-300 ease-in-out 
                                            ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 border-t border-white/5 mt-1">
                                        <ul className="space-y-3.5 text-gray-300 pt-5">
                                            {job.description.map((desc, index) => (
                                                <li key={index} className="flex gap-2.5 items-start text-sm md:text-base leading-relaxed">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400 mt-2.5 flex-shrink-0"></span>
                                                    <span>{desc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Accordion;