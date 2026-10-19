import React, { useState } from 'react';
import { Film, Play, ShieldAlert, Sparkles, Settings } from 'lucide-react';

// Datos de los momentos clave de la serie reordenados
const MOMENTOS_DATA = [
  {
    id: 'jinx-vi',
    title: 'El Desgarrador Reencuentro: Jinx vs. Vi',
    youtubeId: '8PU2iKx0YtQ',
    thumbnail: 'momentos/jinxvsvi.jpg',
    badge: 'Clímax Emocional',
    badgeColor: 'text-pink-400 border-pink-500/40 bg-pink-950/50',
    glowColor: 'from-pink-600/30 via-rose-950/40 to-[#0b0f19]',
    spoilerWarning: '⚠️ AVISO DE SPOILER: Contiene altos niveles de spoilers sobre el quiebre definitivo de las hermanas.',
    description: 'La tensa reunión donde confluyen los caminos de Vi, Jinx, Caitlyn e Isha. Las heridas del pasado no sanan fácilmente y la presión de las facciones enfrentadas estalla en un conflicto desgarrador. Las lealtades se ponen a prueba con los guanteletes Hextech y el armamento pesado de por medio en una atmósfera cargada de tragedia familiar.',
    context: 'El punto de no retorno en la relación de las hermanas, marcado por decisiones imposibles.'
  },
  {
    id: 'sevika-jinx',
    title: 'Alianza Inesperada: Sevika y Jinx',
    youtubeId: '-mpNrw1stVI',
    thumbnail: 'momentos/sevikayjinx.jpg',
    badge: 'Combate en el Subterráneo',
    badgeColor: 'text-orange-400 border-orange-500/40 bg-orange-950/50',
    glowColor: 'from-amber-700/30 via-neutral-950/40 to-[#0b0f19]',
    spoilerWarning: '⚠️ AVISO DE SPOILER: Contiene menciones de dinámicas de poder posteriores en la Ciudad Subterránea.',
    description: 'A pesar de sus constantes roces y diferencias de temperamento, Jinx y Sevika se ven obligadas a coordinar fuerzas para repeler a una amenaza común en los callejones de Zaun. Demuestran una brutal efectividad en combate cuerpo a cuerpo y tácticas explosivas, consolidando una tensa pero fascinante relación de respeto mutuo en el bajo mundo.',
    context: 'Acción desenfrenada que resalta la crudeza del bajo mundo de Zaun y la supervivencia al límite.'
  },
  {
    id: 'jinx-ekko',
    title: 'El Puente del Destino: Jinx vs. Ekko',
    youtubeId: 'gH2-WDTZmTo',
    thumbnail: 'jinx-ekko.jpg',
    badge: 'Batalla de los Firelights',
    badgeColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/50',
    glowColor: 'from-emerald-600/30 via-teal-950/40 to-[#0b0f19]',
    spoilerWarning: '⚠️ AVISO DE SPOILER: Este resumen menciona detalles argumentales del enfrentamiento clave en el puente.',
    description: 'En uno de los momentos más emocionales y visualmente deslumbrantes de la serie, el pasado y el presente chocan en el puente. Ekko y Jinx (Powder) se enfrentan cara a cara, reviviendo los recuerdos de su infancia compartida mientras el destino de Zaun pende de un hilo. Una secuencia donde la animación y la narrativa melódica alcanzan la perfección.',
    context: 'Enfrentamiento ideológico y personal entre los ideales de los Firelights y la destrucción desatada por el artefacto Hextech.'
  },
  {
    id: 'extra-baile',
    title: 'Escena Extra: El Baile Multiversal de Powder y Ekko',
    youtubeId: '1HzQZ0Fplvo',
    thumbnail: 'momentos/ekkoypowder.jpg',
    badge: 'Momento Cinematográfico',
    badgeColor: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/50',
    glowColor: 'from-cyan-600/30 via-blue-950/40 to-[#0b0f19]',
    spoilerWarning: '⚠️ AVISO DE SPOILER: Secuencia artística y conceptual de la obra.',
    description: 'Una de las piezas audiovisuales más aclamadas por los fanáticos y la crítica. Esta secuencia entrelaza el simbolismo, la coreografía visual y la música de una forma magistral, mostrando la dualidad de los personajes principales y el dolor de los recuerdos que persiguen a los habitantes de Zaun y Piltover.',
    context: 'Una joya multiversal de dirección artística firmada por Fortiche Production, que explora el doloroso vínculo entre Ekko y Powder en una realidad alternativa donde él no es el Ekko habitual de ese universo.'
  }
];

export default function Momentos() {
  const [selectedMoment, setSelectedMoment] = useState(MOMENTOS_DATA[0]);

  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-8 pt-24 pb-16 space-y-10 animate-fadeIn">
      
      {/* 1. BANNER SUPERIOR CON TEXTO MEJORADO */}
      <div className="rounded-2xl border border-cyan-500/30 p-6 md:p-8 shadow-2xl relative overflow-hidden bg-gray-900">
        <img
          src="momentos/arcanobackg.png"
          alt="Banner Momentos Arcane"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-50 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-[#0b0f19]/80 to-[#0b0f19]/40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
            <Film size={16} />
            ESCENAS MEMORABLES DE LA SERIE
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            MOMENTOS CLAVE DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-900 animate-blue-glow drop-shadow-[0_0_25px_rgba(6,182,212,0.6)]">ＡＲＣＡＮＥ 🔵</span>
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-3xl leading-relaxed drop-shadow-md">
            Arcane es una serie profundamente realizada y épica, repleta de momentos inolvidables, detalles asombrosos y efectos visuales extraordinarios e increíblemente preciosos que dan forma a un estilo de animación único e impresionante. A continuación, revive los enfrentamientos y escenas más icónicas de Piltover y Zaun seleccionando un momento en la parte inferior.
          </p>
        </div>
      </div>

      {/* 2. CAJA REPRODUCTORA PRINCIPAL */}
      <div className={`rounded-3xl bg-gradient-to-b ${selectedMoment.glowColor} border border-white/10 p-6 md:p-10 shadow-2xl relative overflow-hidden backdrop-blur space-y-6 transition-all duration-700`}>
        
        {/* Título del Momento */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${selectedMoment.badgeColor}`}>
              {selectedMoment.badge}
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
              {selectedMoment.title}
            </h2>
          </div>
        </div>

        {/* Reproductor de Video Embebido */}
        <div className="relative rounded-2xl overflow-hidden aspect-video w-full border border-white/10 shadow-2xl bg-black">
          <iframe
            className="w-full h-full border-0"
            src={`https://www.youtube.com/embed/${selectedMoment.youtubeId}?autoplay=0`}
            title={selectedMoment.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Nota indicando que ponga la mejor calidad */}
        <div className="flex items-center gap-2 text-xs text-cyan-300 bg-cyan-950/40 border border-cyan-500/20 px-3.5 py-2 rounded-xl">
          <Settings size={15} className="flex-shrink-0 animate-spin-slow" />
          <span><strong>Nota de experiencia:</strong> Te recomendamos configurar el reproductor de YouTube en la <strong>máxima calidad posible (1080p, 4K u 8K)</strong> para disfrutar plenamente de la riqueza visual y artística de la serie.</span>
        </div>

        {/* 3. SECCIÓN DE DESCRIPCIÓN CON AVISO DE SPOILER */}
        <div className="space-y-4 pt-2">
          
          <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs md:text-sm flex items-center gap-2.5">
            <ShieldAlert size={18} className="flex-shrink-0" />
            <span>{selectedMoment.spoilerWarning}</span>
          </div>

          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            {selectedMoment.description}
          </p>

          <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-cyan-200 text-xs md:text-sm">
            <strong>Contexto narrativo:</strong> {selectedMoment.context}
          </div>
        </div>

      </div>

      {/* 4. TARJETAS INFERIORES / SELECTOR DE MOMENTOS */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center space-x-2 text-cyan-400">
          <Sparkles size={20} />
          <h3 className="text-lg font-black text-white uppercase tracking-wider">
            Selecciona un Momento para ver
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {MOMENTOS_DATA.map((momento) => {
            const isSelected = selectedMoment.id === momento.id;
            return (
              <div
                key={momento.id}
                onClick={() => {
                  setSelectedMoment(momento);
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className={`rounded-2xl p-4 border transition-all cursor-pointer flex flex-col justify-between space-y-4 relative overflow-hidden group ${
                  isSelected
                    ? 'bg-gradient-to-b from-cyan-950/90 to-gray-900 border-cyan-400 shadow-xl shadow-cyan-500/20 ring-2 ring-cyan-500/40'
                    : 'bg-gray-900/80 border-gray-800 hover:border-gray-700 hover:bg-gray-800/80'
                }`}
              >
                <div className="relative rounded-xl overflow-hidden aspect-video w-full border border-white/10 bg-black">
                  <img
                    src={momento.thumbnail}
                    alt={momento.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    onError={(e) => {
                      e.target.src = "portada-serie.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-black/70 text-cyan-400 backdrop-blur">
                    <Play size={14} fill="currentColor" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-black text-white uppercase line-clamp-2">
                    {momento.title}
                  </h4>
                </div>

                {isSelected && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400" />
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}