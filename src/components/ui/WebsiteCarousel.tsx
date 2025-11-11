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

        // --- 2. Capa: IFRAME (Si no hay imagen Y no ha fallado) ---
        if (!iframeFailed) {
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

        // --- 3. Capa: FALLBACK SIMPLE (Si la imagen no existe Y el iframe falló) ---
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
    };

    return (
        <a 
            href={site.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-shrink-0 w-80 h-96 mx-4 relative overflow-hidden rounded-xl shadow-2xl 
                       transition-all duration-300 transform hover:scale-[1.03] group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* 1. Contenedor de Previsualización */}
            <div 
                className={`absolute inset-0 transition-all duration-500 ease-out ${isHovered ? 'scale-105' : 'scale-100'}`}
            >
                {/* Renderiza la previsualización según la lógica de tres capas */}
                {renderPreviewContent()}
                
                {/* Overlay Oscuro para Legibilidad */}
                <div className="absolute inset-0 bg-gray-900/50 group-hover:bg-gray-900/80 transition-colors"></div>
            </div>

            {/* 2. Contenido Flotante con Transición (Descripción) */}
            <div 
                className={`absolute inset-0 flex flex-col justify-end p-6 pt-16 transition-transform duration-500 
                            ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}
                style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    whiteSpace: 'normal'
                }} 
            >
                <h4 className="text-xl font-bold text-sky-400 mb-2">{site.name}</h4>
                <p className="text-sm text-gray-300 mb-4">{site.description}</p>
                
                <div className="mt-auto pt-2 border-t border-gray-700/50">
                    <p className="text-xs text-gray-400 font-mono italic">
                        Stack: <span className="text-gray-200 font-semibold">{renderStack}</span>
                    </p>
                </div>
            </div>

            {/* 3. Título visible siempre */}
            <div className={`absolute bottom-0 left-0 w-full p-4 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                <h4 className="text-lg font-semibold text-white truncate">{site.name}</h4>
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