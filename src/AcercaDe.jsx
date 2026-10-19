import React from "react";
import {
  Info,
  Sparkles,
  Clapperboard,
  Calendar,
  Award,
  Palette,
  ExternalLink,
  Play,
  Film,
  UserCheck,
} from "lucide-react";

export default function AcercaDe() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-8 pt-24 pb-16 space-y-12 animate-fadeIn">
      {/* 1. BANNER SUPERIOR DE ENCABEZADO */}
      <div className="rounded-2xl border border-cyan-500/30 p-6 md:p-8 shadow-2xl relative overflow-hidden bg-gray-900">
        <img
          src="acerca.jpg"
          alt="Banner Acerca de Arcane"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-50 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-[#0b0f19]/80 to-[#0b0f19]/40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
            <Info size={16} />
            DETALLES Y PRODUCCIÓN DE LA OBRA
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            ACERCA DE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-900 animate-blue-glow drop-shadow-[0_0_25px_rgba(6,182,212,0.6)]">
              ＡＲＣＡＮＥ 🔵
            </span>
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-3xl leading-relaxed drop-shadow-md">
            Descubre en profundidad los orígenes, el equipo creativo detrás de
            escena y el revolucionario proceso artístico de más de 6 años que
            convirtió a Arcane en un fenómeno cultural y una obra maestra de la
            animación mundial.
          </p>
        </div>
      </div>

      {/* 2. TARJETAS INFORMATIVAS (CREADORES, TEMPORADAS Y ESTUDIO CON LOGO) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Creadores con Fotos */}
        <div className="p-6 rounded-2xl bg-gray-900/80 border border-cyan-500/30 space-y-4 relative overflow-hidden backdrop-blur flex flex-col justify-between">
          <div className="space-y-3">
            <div className="p-3 w-fit rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Clapperboard size={24} />
            </div>
            <h3 className="text-lg font-black text-white uppercase">
              Mentes Creativas & Showrunners
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Arcane nació de la visión conjunta de dos veteranos de Riot Games
              que dedicaron casi una década a expandir la mitología de League of
              Legends en un relato humano e íntimo.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10">
            <div className="flex flex-col items-center text-center p-2 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-400/60 bg-gray-800">
                <img
                  src="creadores/christian_linke.jpg"
                  alt="Christian Linke"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://www.riotgames.com/darkroom/1200/c3651391121cc8a922d7a2addb233023:3226e1af337c51752b3707dc444d15a8/christian-linke.png";
                  }}
                />
              </div>
              <div>
                <strong className="block text-xs text-white font-bold">
                  Christian Linke
                </strong>
                <span className="text-[10px] text-cyan-300 block">
                  Co-Creador / Showrunner
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-2 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-400/60 bg-gray-800">
                <img
                  src="creadores/alex_yee.jpg"
                  alt="Alex Yee"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://media.themoviedb.org/t/p/w235_and_h235_face/kvRKbXZcCnM6d1vcND4917iQ4kp.jpg";
                  }}
                />
              </div>
              <div>
                <strong className="block text-xs text-white font-bold">
                  Alex Yee
                </strong>
                <span className="text-[10px] text-cyan-300 block">
                  Co-Creador / Guionista
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Temporadas */}
        <div className="p-6 rounded-2xl bg-gray-900/80 border border-cyan-500/30 space-y-3 relative overflow-hidden backdrop-blur flex flex-col justify-between">
          <div className="space-y-3">
            <div className="p-3 w-fit rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400">
              <Calendar size={24} />
            </div>
            <h3 className="text-lg font-black text-white uppercase">
              Estructura Narrativa
            </h3>
            <p className="text-sm text-fuchsia-300 font-semibold">
              2 Temporadas (Historia Completa)
            </p>
            <p className="text-xs text-gray-300 leading-relaxed">
              A diferencia de producciones indefinidas, la serie fue concebida
              minuciosamente desde el primer día para desarrollarse a lo largo
              de 2 temporadas, garantizando una narrativa cerrada y sin
              episodios de relleno.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-[11px] text-fuchsia-200">
            <strong>Lanzamiento mundial:</strong> Temporada 1 (2021) //
            Temporada 2 (2024) en Netflix.
          </div>
        </div>

        {/* Estudio de Animación con Logo Flotante */}
        <div className="p-6 rounded-2xl bg-gray-900/80 border border-cyan-500/30 space-y-3 relative overflow-hidden backdrop-blur flex flex-col justify-between">
          <div className="space-y-3">
            {/* Encabezado con Icono y Logo Flotante Más Grande */}
            <div className="flex items-center justify-between">
              <div className="p-3 w-fit rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Award size={24} />
              </div>

              <img
                src="riotxfortiche.png"
                alt="Logo Fortiche Production & Riot Games"
                className="h-12 md:h-16 w-auto object-contain filter brightness-110 drop-shadow-lg"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerHTML =
                    '<span class="text-xs font-black text-amber-400 tracking-wider">FORTICHE x RIOT</span>';
                }}
              />
            </div>

            <h3 className="text-lg font-black text-white uppercase">
              Estudio de Animación
            </h3>
            <p className="text-sm text-amber-300 font-semibold">
              Fortiche Production (París, Francia)
            </p>
            <p className="text-xs text-gray-300 leading-relaxed">
              Estudio francés pionero en fusionar modelos 3D avanzados con
              acabados manuales en 2D. Más de 300 artistas colaboraron durante
              años para pintar cada cuadro y fondo digitalmente.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-[11px] text-amber-200">
            <strong>Filosofía técnica:</strong> Pinceladas digitales
            tradicionales integradas en entornos 3D dinámicos.
          </div>
        </div>
      </div>

      {/* 3. GALERÍA AMPLIADA CON 9 FOTOS INFORMATIVAS */}
      <div className="rounded-3xl bg-gradient-to-r from-gray-950 via-[#091522] to-gray-950 border border-white/10 p-6 md:p-10 shadow-2xl space-y-8">
        {/* Cabecera con texto a la izquierda y Logo flotante a la derecha */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-black uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
              <Palette size={16} /> REVOLUCIÓN TÉCNICA Y VISUAL
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
              Proceso Creativo & Estilo Visual Extraordinario
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Cada fotograma de Arcane está diseñado como una obra de arte
              independiente. Explora a continuación las claves visuales que
              definen su proceso de producción:
            </p>
          </div>

          {/* LOGO DE LAS COMPAÑÍAS FLOTANDO A LA DERECHA */}
          <div className="flex-shrink-0 self-start md:self-center">
            <img
              src="riotxfortiche.png"
              alt="Logo Fortiche Production & Riot Games"
              className="h-12 md:h-20 w-auto object-contain filter brightness-110 drop-shadow-xl"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.innerHTML =
                  '<span class="text-xs font-black text-amber-400 tracking-wider">FORTICHE x RIOT</span>';
              }}
            />
          </div>
        </div>

        {/* CUADRÍCULA DE 9 FOTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Foto 1 */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video group bg-black">
            <img
              src="acerca/foto1.jpg"
              alt="Arte Pintado a Mano"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
              onError={(e) => {
                e.target.src = "acerca/piltover.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 space-y-0.5">
              <span className="text-xs font-bold text-cyan-300 block">
                1. Pintura Digital 2D en Entornos 3D
              </span>
              <p className="text-[11px] text-gray-300 leading-tight">
                Los fondos fueron pintados a mano como ilustraciones al óleo.
              </p>
            </div>
          </div>

          {/* Foto 2 */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video group bg-black">
            <img
              src="acerca/foto2.jpg"
              alt="Animación Facial"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
              onError={(e) => {
                e.target.src = "acerca/jinxex.png";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 space-y-0.5">
              <span className="text-xs font-bold text-fuchsia-300 block">
                2. Expresividad y Actuación Facial
              </span>
              <p className="text-[11px] text-gray-300 leading-tight">
                Microexpresiones emotivas dibujadas fotograma a fotograma.
              </p>
            </div>
          </div>

          {/* Foto 3 */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video group bg-black">
            <img
              src="acerca/foto3.jpg"
              alt="Efectos Especiales 2D"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
              onError={(e) => {
                e.target.src = "acerca/efectos.jpeg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 space-y-0.5">
              <span className="text-xs font-bold text-amber-300 block">
                3. Efectos Visuales Tradicionales 2D
              </span>
              <p className="text-[11px] text-gray-300 leading-tight">
                Fuego, explosiones y magia Hextech animados estilo cómic.
              </p>
            </div>
          </div>

          {/* Foto 4 */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video group bg-black">
            <img
              src="acerca/foto4.jpg"
              alt="Iluminación Cinematográfica"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
              onError={(e) => {
                e.target.src = "acerca/iluminacion.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 space-y-0.5">
              <span className="text-xs font-bold text-emerald-300 block">
                4. Iluminación y Claroscuros
              </span>
              <p className="text-[11px] text-gray-300 leading-tight">
                Uso de luces dramáticas para enriquecer el tono emocional.
              </p>
            </div>
          </div>

          {/* Foto 5 */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video group bg-black">
            <img
              src="acerca/foto5.jpg"
              alt="Sincronización Musical"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
              onError={(e) => {
                e.target.src = "acerca/music.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 space-y-0.5">
              <span className="text-xs font-bold text-pink-300 block">
                5. Sincronización Musical & Ritmo
              </span>
              <p className="text-[11px] text-gray-300 leading-tight">
                Secuencias de acción coreografiadas al compás de la banda
                sonora.
              </p>
            </div>
          </div>

          {/* Foto 6 */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video group bg-black">
            <img
              src="acerca/foto6.jpg"
              alt="Diseño de Producción Piltover vs Zaun"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
              onError={(e) => {
                e.target.src = "acerca/piltoveryzaun.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 space-y-0.5">
              <span className="text-xs font-bold text-sky-300 block">
                6. Arquitectura y Contraste Social
              </span>
              <p className="text-[11px] text-gray-300 leading-tight">
                Piltover utópica frente a los tonos neón y óxido de Zaun.
              </p>
            </div>
          </div>

          {/* Foto 7 (NUEVA) */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video group bg-black">
            <img
              src="acerca/foto7.jpg"
              alt="Dirección de Voces"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
              onError={(e) => {
                e.target.src = "acerca/vocesarcane.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 space-y-0.5">
              <span className="text-xs font-bold text-purple-300 block">
                7. Dirección de Voces & Reparto
              </span>
              <p className="text-[11px] text-gray-300 leading-tight">
                Interpretaciones magistrales grabadas antes de la animación
                final.
              </p>
            </div>
          </div>

          {/* Foto 8 (NUEVA) */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video group bg-black">
            <img
              src="acerca/foto8.jpg"
              alt="Diseño Conceptual"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
              onError={(e) => {
                e.target.src = "acerca/arteconcep.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 space-y-0.5">
              <span className="text-xs font-bold text-orange-300 block">
                8. Arte Conceptual & Lore
              </span>
              <p className="text-[11px] text-gray-300 leading-tight">
                Años de bocetos previos para expandir el universo de Runaterra.
              </p>
            </div>
          </div>

          {/* Foto 9 (NUEVA) */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video group bg-black">
            <img
              src="acerca/foto9.jpg"
              alt="Montaje y Edición"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
              onError={(e) => {
                e.target.src = "acerca/arcaneguion.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 space-y-0.5">
              <span className="text-xs font-bold text-teal-300 block">
                9. Edición y Ritmo Narrativo
              </span>
              <p className="text-[11px] text-gray-300 leading-tight">
                Transiciones fluidas que conectan el drama político y personal.
              </p>
            </div>
          </div>
        </div>

        {/* 4. CAJA DEL VIDEO EXPLICATIVO RESUMIDO (COLOCADA DEBAJO DE LAS 9 FOTOS) */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <div className="flex items-center space-x-2 text-cyan-400">
            <Play size={20} />
            <h3 className="text-lg font-black text-white uppercase tracking-wider">
              Documental Resumido: Detrás de Escenas de Arcane
            </h3>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-video w-full border border-cyan-500/30 shadow-2xl bg-black max-w-4xl mx-auto">
            <iframe
              className="w-full h-full border-0"
              src="https://www.youtube.com/embed/d2_0HsST5u8?autoplay=0"
              title="Arcane Behind the Scenes Resumen"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <p className="text-xs text-gray-400 text-center max-w-2xl mx-auto">
            Video explicativo optimizado sobre la creación de la serie. Puedes
            explorar la serie documental completa y oficial de Riot Games en
            esta{" "}
            <a
              href="https://youtube.com/playlist?list=PLbAFXJC0J5GYEkfxnGTWnvgcEypgBeAb5&si=pbb7al7Y7nVQALjK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline hover:text-cyan-300"
            >
              Playlist de YouTube
            </a>
            .
          </p>
        </div>
      </div>

      {/* 5. RECONOCIMIENTOS Y PREMIOS */}
      <div className="rounded-2xl bg-black/60 border border-amber-500/30 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center justify-center md:justify-start gap-1.5">
            <Award size={16} /> RECONOCIMIENTO CRÍTICO HISTÓRICO
          </span>
          <h3 className="text-xl md:text-2xl font-black text-white">
            Ganadora de 4 Premios Primetime Emmy & 9 Premios Annie
          </h3>
          <p className="text-xs md:text-sm text-gray-300 max-w-2xl">
            Arcane hizo historia en la televisión al convertirse en la primera
            serie de una plataforma de streaming animada en ganar el Emmy a
            Mejor Programa de Animación, además de obtener puntuaciones
            perfectas en la crítica internacional.
          </p>
        </div>

        <a
          href="https://www.netflix.com/title/81435684"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-xs uppercase bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-500/20 transition-all flex-shrink-0 cursor-pointer"
        >
          <span>Ver Serie en Netflix</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
