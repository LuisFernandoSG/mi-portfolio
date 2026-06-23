/** @jsxImportSource react */
import React, { useState } from 'react';
import { XCircle } from 'lucide-react';

// --- Interfaces ---

interface SiteItem {
    name: string;
    url: string;
    description: string;
    stack: string[];
    previewImage?: string;
}

interface CarouselProps {
    items: SiteItem[];
}

// --- Componente Item Individual del Carrusel ---

const CarouselItem: React.FC<{ site: SiteItem }> = ({ site }) => {
    const [isHovered, setIsHovered] = useState(false);
    // Este estado SÓLO se activa si el iframe falla (capa 3)
    const [iframeFailed, setIframeFailed] = useState(false);

    const renderStack = site.stack.join(', ');
    const hasImage = !!site.previewImage;

    // Reiniciamos el estado de error del iframe si cambiamos el sitio
    // useEffect(() => { setIframeFailed(false); }, [site.url]); // No necesario en carrusel, pero buena práctica en React.

    const handleIframeError = () => {
        // Marcamos el fallo para activar el fallback simple (capa 3)
        setIframeFailed(true);
    };

    const renderPreviewContent = () => {
        // --- 1. Capa: IMAGEN ESTÁTICA (Si existe la ruta) ---
        if (hasImage) {
            return (
                <div
                    className={`absolute inset-0 bg-cover bg-center`}
                    style={{ backgroundImage: `url(${site.previewImage})` }}
                ></div>
            );
        }

        // --- 2. Capa: IFRAME (Solo se carga cuando se hace Hover para optimizar RAM al máximo) ---
        if (!iframeFailed && isHovered) {
            return (
                <iframe
                    src={site.url}
                    title={`Preview of ${site.name}`}
                    // Las propiedades de escala simulan la previsualización del monitor
                    className="w-full h-full border-0 pointer-events-none transform scale-[0.35] origin-top-left"
                    style={{ height: '280%', width: '280%', filter: 'grayscale(50%)' }}
                    onError={handleIframeError}
                    onLoad={() => setIframeFailed(false)} // Si carga, aseguramos que el error esté en false
                />
            );
        }

        // --- 3. Capa: FALLBACK SIMPLE (Si falló el iframe) ---
        if (iframeFailed) {
            return (
                <div
                    className={`w-full h-full flex flex-col items-center justify-center p-4 bg-gray-800/80 transition-colors`}
                >
                    <XCircle className="w-12 h-12 text-red-500 mb-2" />
                    <p className="text-sm text-center text-red-400 font-semibold">
                        Previsualización en vivo no disponible (bloqueada).
                    </p>
                    <p className="text-sm text-center text-gray-400 mt-1">{site.name}</p>
                </div>
            );
        }

        // --- 4. Vista previa por defecto optimizada (Previene carga excesiva en memoria y CPU) ---
        return (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-slate-900/60 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-sky-500/30 mb-3 group-hover:text-sky-400/80 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <p className="text-[10px] text-gray-500 font-mono tracking-wider uppercase select-none">Pasa el cursor para cargar en vivo</p>
            </div>
        );
    };

    return (
        <a
            href={site.url || '#'}
            target={site.url ? "_blank" : undefined}
            rel={site.url ? "noopener noreferrer" : undefined}
            className="flex-shrink-0 w-80 h-96 mx-4 flex flex-col relative overflow-hidden rounded-2xl glass-card border border-white/10 shadow-2xl hover:border-sky-500/30 transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* 1. Browser Header Mockup */}
            <div className="flex gap-1.5 px-4 py-2.5 bg-slate-950/80 border-b border-white/5 items-center flex-shrink-0">
                <span className="w-2 h-2 rounded-full bg-[#ff5f56] opacity-70 group-hover:opacity-100 transition-opacity"></span>
                <span className="w-2 h-2 rounded-full bg-[#ffbd2e] opacity-70 group-hover:opacity-100 transition-opacity"></span>
                <span className="w-2 h-2 rounded-full bg-[#27c93f] opacity-70 group-hover:opacity-100 transition-opacity"></span>
                <span className="ml-3 text-[10px] font-mono text-gray-500 truncate max-w-[180px]">
                    {site.url ? site.url.replace('https://', '').replace('/', '') : 'internal-preview'}
                </span>
            </div>

            {/* 2. Preview Content Window */}
            <div className="relative flex-grow overflow-hidden bg-slate-950/50">
                {/* Renderiza la previsualización según la lógica de tres capas */}
                <div className={`absolute inset-0 transition-all duration-500 ease-out ${isHovered ? 'scale-105' : 'scale-100'}`}>
                    {renderPreviewContent()}
                </div>

                {/* Overlay Oscuro para Legibilidad (se desvanece al hacer hover para ver la vista previa) */}
                <div className="absolute inset-0 bg-slate-950/20 group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>

            {/* 3. Slide-up Info Panel (se muestra por defecto y se oculta al hacer hover) */}
            <div
                className={`absolute inset-x-0 bottom-0 top-[29px] flex flex-col justify-between p-6 transition-all duration-500 ease-in-out z-20
                            ${!isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                style={{
                    background: 'linear-gradient(to top, rgba(2, 6, 23, 0.98) 0%, rgba(2, 6, 23, 0.90) 80%, rgba(2, 6, 23, 0.85) 100%), opacity-80',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    whiteSpace: 'normal'
                }}
            >
                <div className="overflow-y-auto pr-1">
                    <h4 className="text-lg font-bold text-sky-400 mb-1.5">{site.name}</h4>
                    <p className="text-xs text-gray-300 leading-relaxed">{site.description}</p>
                </div>

                <div className="pt-3 border-t border-white/5 flex-shrink-0">
                    <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                        {site.stack.map((tech, idx) => (
                            <span
                                key={idx}
                                className="bg-sky-500/10 text-sky-300 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-sky-500/20"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    {/* Indicador de acción de carga en vivo / preview */}
                    <div className="flex items-center gap-2 pt-2 border-t border-white/5 text-[10px] text-sky-400/80 font-mono tracking-wider uppercase animate-pulse">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                        </span>
                        {site.url ? 'Pasa el cursor para cargar en vivo' : 'Pasa el cursor para ver captura'}
                    </div>
                </div>
            </div>

            {/* 4. Bottom Default Header (visible en hover para identificar el sitio) */}
            <div className={`absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-950/90 to-slate-950/0 transition-all duration-300 flex items-center justify-between z-10 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                <h4 className="text-sm font-semibold text-white truncate">{site.name}</h4>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-400 font-mono">
                        {site.url ? 'en vivo' : 'demo'}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${site.url ? 'bg-emerald-500' : 'bg-sky-500'} animate-ping`}></span>
                </div>
            </div>
        </a>
    );
};

// --- Componente Contenedor del Carrusel (Se mantiene igual) ---

const WebsiteCarousel: React.FC<CarouselProps> = ({ items }) => {
    if (!items || items.length === 0) return <p className="text-center text-gray-400">No hay sitios web destacados disponibles.</p>;

    let doubledItems = [...items, ...items];

    const ITEM_WIDTH_REM = 21;
    const totalWidthRem = doubledItems.length * ITEM_WIDTH_REM;

    return (
        <div className="overflow-hidden py-8">
            <div
                className="flex animate-scroll hover:animate-pause whitespace-nowrap"
                style={{ width: `${totalWidthRem}rem` }}
            >
                {doubledItems.map((site, index) => (
                    <CarouselItem key={`${site.name}-${index}`} site={site} />
                ))}
            </div>

            {/* <p className="text-center text-sm text-gray-500 mt-4">
                Desplazamiento automático. Pasa el ratón por encima para pausar.
            </p> */}
        </div>
    );
};

export default WebsiteCarousel;