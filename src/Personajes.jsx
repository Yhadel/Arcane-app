import React, { useState, useEffect, useRef } from "react";
import { Users, Shield, Mic } from "lucide-react";

// Datos oficiales de los personajes de Arcane (Incluyendo a Vander)
const CHARACTERS_DATA = [
  {
    id: "jinx",
    name: "JINX",
    realName: "Powder",
    role: "Pistolera & Inventora",
    faction: "Zaun",
    factionColor: "text-fuchsia-400 border-fuchsia-500/40 bg-fuchsia-950/50",
    glowColor: "from-fuchsia-600/30 via-purple-950/40 to-[#0b0f19]",
    image: "personajes/jinxp.webp",
    voiceActor: "Ella Purnell",
    voiceActorDub: "Romina Marroquín (Español)",
    voiceActorImg:
      "https://image.tmdb.org/t/p/w500/jqrYg35GHuMGwGqEVUthqTLQnay.jpg",
    description:
      "Antiguamente una niña ingenua pero impulsiva llamada Powder, el trauma trágico y la influencia de Silco la transformaron en Jinx. Maneja un temible arsenal artesanal y bombas Hextech en medio del caos del subterráneo de Zaun.",
    quote: "¡Tengo las mejores intenciones del mundo!",
    weapon: "Pium-Pium, Espinas & Granadas Masticadoras",
  },
  {
    id: "vi",
    name: "VI",
    realName: "Violet",
    role: "Luchadora & Protectora",
    faction: "Zaun / Piltover",
    factionColor: "text-pink-400 border-pink-500/40 bg-pink-950/50",
    glowColor: "from-pink-600/30 via-rose-950/40 to-[#0b0f19]",
    image: "personajes/vip.webp",
    voiceActor: "Hailee Steinfeld",
    voiceActorDub: "Karla Falcón (Español)",
    voiceActorImg:
      "https://es.web.img2.acsta.net/pictures/19/08/27/10/13/0826817.jpg",
    description:
      "Crecida en las duras calles de la Ciudad Subterránea, Vi utiliza sus puños para proteger a sus seres queridos. Tras años de prisión injusta, busca desesperadamente rescatar a su hermana Powder.",
    quote: "Primero pego, luego pregunto.",
    weapon: "Guanteletes Hextech Atlas",
  },
  {
    id: "caitlyn",
    name: "CAITLYN",
    realName: "Caitlyn Kiramman",
    role: "Tiradora & Vigilante",
    faction: "Piltover",
    factionColor: "text-sky-400 border-sky-500/40 bg-sky-950/50",
    glowColor: "from-sky-600/30 via-blue-950/40 to-[#0b0f19]",
    image: "personajes/caitlynp.webp",
    voiceActor: "Katie Leung",
    voiceActorDub: "Hiromi Hayakawa / Leyla Rangel (Español)",
    voiceActorImg:
      "https://m.media-amazon.com/images/M/MV5BZDE3NDY1ZjItYTg2Ny00Y2JjLWEzNTItMzdjOGQ5OTBhNjVhXkEyXkFqcGc@._V1_.jpg",
    description:
      "Nacida en una de las casas nobles más influyentes de Piltover, rechazó los privilegios aristocráticos para convertirse en una audaz investigadora de los Vigilantes.",
    quote: "Busco la verdad, no la aprobación.",
    weapon: "Rifle de Francotirador Hextech",
  },
  {
    id: "ekko",
    name: "EKKO",
    realName: "Ekko",
    role: "Líder de los Firelights",
    faction: "Zaun",
    factionColor: "text-emerald-400 border-emerald-500/40 bg-emerald-950/50",
    glowColor: "from-emerald-600/30 via-teal-950/40 to-[#0b0f19]",
    image: "personajes/ekkop.webp",
    voiceActor: "Reed Shannon",
    voiceActorDub: "Gabrro López (Español)",
    voiceActorImg: "https://ntvb.tmsimg.com/assets/assets/1022523_v9_ba.jpg",
    description:
      "Genio callejero de Zaun y líder de los Firelights que lucha por proteger lo que queda de la Ciudad Subterránea del azote del Shimmer y la corrupción.",
    quote:
      "El tiempo no cura nada... pero te da la oportunidad de intentarlo otra vez.",
    weapon: "Bat de Cronomancia & Aerodeslizador",
  },
  {
    id: "heimer",
    name: "HEIMERDINGER",
    realName: "Heimerdinger",
    role: "Científico & Fundador",
    faction: "Piltover",
    factionColor: "text-amber-400 border-amber-500/40 bg-amber-950/50",
    glowColor: "from-amber-600/30 via-yellow-950/40 to-[#0b0f19]",
    image: "personajes/heimerp.webp",
    voiceActor: "Mick Wingert",
    voiceActorDub: "Humberto Solórzano (Español)",
    voiceActorImg:
      "https://resizing.flixster.com/cTvnP2Bb9aAqFmhZAdfPq60Li0Y=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/618678_v9_bb.jpg",
    description:
      "Un yordle inventor que ha vivido durante cientos de años ayudando a fundar la gran ciudad de Piltover, precavido ante los peligros de la magia incontrolada.",
    quote: "La innovación requiere tiempo y paciencia.",
    weapon: "Llave Inglesa Hextech & Torretas",
  },
  {
    id: "ambessa",
    name: "AMBESSA",
    realName: "Ambessa Medarda",
    role: "Señora de la Guerra",
    faction: "Noxus",
    factionColor: "text-red-400 border-red-500/40 bg-red-950/50",
    glowColor: "from-red-600/30 via-rose-950/40 to-[#0b0f19]",
    image: "personajes/ambep.webp",
    voiceActor: "Ellen Thomas",
    voiceActorDub: "Magda Giner (Español)",
    voiceActorImg:
      "https://m.media-amazon.com/images/M/MV5BZmZjYTNmZGMtYzRiMy00NzU4LWFmMmQtMjEzMjBkNzhhN2JiXkEyXkFqcGc@._V1_.jpg",
    description:
      "Una despiadada y calculadora señora de la guerra noxiana dispuesta a cualquier sacrificio militar y político para asegurar el poder de su familia.",
    quote: "La fuerza es el único idioma que el mundo entiende.",
    weapon: "Cuchillas Lobo de Noxus",
  },
  {
    id: "jayce",
    name: "JAYCE",
    realName: "Jayce Talis",
    role: "Inventor & Consejero",
    faction: "Piltover",
    factionColor: "text-amber-400 border-amber-500/40 bg-amber-950/50",
    glowColor: "from-orange-600/30 via-amber-950/40 to-[#0b0f19]",
    image: "personajes/jaycep.webp",
    voiceActor: "Kevin Alejandro",
    voiceActorDub: "Irwin Daayán (Español)",
    voiceActorImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9HIxHWltGx3QW-Hj16gwWsbVrR3vcByDAikXXNCodQ&s=10",
    description:
      "Un brillante idealista de Piltover que combinó ciencia y magia para crear la Hextecnología.",
    quote: "Por el progreso.",
    weapon: "Martillo de Mercurio",
  },
  {
    id: "mel",
    name: "MEL",
    realName: "Mel Medarda",
    role: "Consejera & Diplomática",
    faction: "Piltover / Noxus",
    factionColor: "text-yellow-400 border-yellow-500/40 bg-yellow-950/50",
    glowColor: "from-yellow-600/30 via-amber-950/40 to-[#0b0f19]",
    image: "personajes/melp.webp",
    voiceActor: "Toks Olagundoye",
    voiceActorDub: "Rebeca Patiño (Español)",
    voiceActorImg:
      "https://m.media-amazon.com/images/M/MV5BMTY2NzM2NTMzNF5BMl5BanBnXkFtZTcwOTc2ODAzOQ@@._V1_.jpg",
    description:
      "Miembro influyente del Consejo de Piltover, experta en el juego político y la influencia social.",
    quote: "El poder real no siempre hace ruido.",
    weapon: "Influencia Política & Artefactos Noxianos",
  },
  {
    id: "sevika",
    name: "SEVIKA",
    realName: "Sevika",
    role: "Teniente de Zaun",
    faction: "Zaun",
    factionColor: "text-orange-400 border-orange-500/40 bg-orange-950/50",
    glowColor: "from-amber-700/30 via-neutral-950/40 to-[#0b0f19]",
    image: "personajes/sevikap.webp",
    voiceActor: "Amirah Vann",
    voiceActorDub: "Amirah Vann (Español)",
    voiceActorImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCpefKD1CjEuFAQaShNzViTCePNJIsu-AfwHWjqzT_w&s=10",
    description:
      "Mano derecha leal a Silco y guerrera aguerrida con un implante de Shimmer en su brazo.",
    quote: "En el bajo mundo o sobrevives o te aplastan.",
    weapon: "Espada de Shimmer Mecánica",
  },
  {
    id: "vander",
    name: "VANDER",
    realName: "Vander / Warwick",
    role: "Protector de Zaun",
    faction: "Zaun",
    factionColor: "text-purple-400 border-purple-500/40 bg-purple-950/50",
    glowColor: "from-emerald-600/30 via-teal-950/40 to-[#0b0f19]",
    image: "personajes/vanderp.webp",
    voiceActor: "JB Blanc",
    voiceActorDub: "Alfonso Ramírez (Español)",
    voiceActorImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWV7MrBKLHGaA0feoswApCe2dWBrOoAqCn89yl5HJ3417RWQCRZsUnoM&s=10",
    description:
      "Antiguo líder revolucionario conocido como el Sabueso de los Subterráneos, convertido en figura paterna para Vi y Powder en el bar La Última Gota.",
    quote: "La paz nunca es gratis, alguien siempre paga el precio.",
    weapon: "Fuerza Bruta & Garras",
  },
  {
    id: "viktor",
    name: "VIKTOR",
    realName: "Viktor",
    role: "Científico & Visionario",
    faction: "Piltover / Zaun",
    factionColor: "text-cyan-400 border-cyan-500/40 bg-cyan-950/50",
    glowColor: "from-cyan-600/30 via-slate-950/40 to-[#0b0f19]",
    image: "personajes/victorp.webp",
    voiceActor: "Harry Lloyd",
    voiceActorDub: "Igor Cruz (Español)",
    voiceActorImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5BWV5oLwGkRqZLPgjwJzFulk4UzTxDG576Wxv2MBPJLTLEivvC_5Sxv9&s=10",
    description:
      "Investigador brillante que busca la evolución humana a través de la tecnología Hextech.",
    quote: "En la búsqueda del gran progreso...",
    weapon: "Núcleo Hextech",
  },
];

export default function Personajes() {
  const [selectedChar, setSelectedChar] = useState(CHARACTERS_DATA[0]);
  
  // Referencia al contenedor de detalles del personaje
  const detailPanelRef = useRef(null);
  const isFirstRender = useRef(true);

  // Desplazamiento suave (scroll) hacia los detalles al seleccionar un personaje
  useEffect(() => {
    // Evitamos hacer scroll en la primera carga inicial
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (detailPanelRef.current) {
      detailPanelRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedChar]);

  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-8 pt-24 pb-16 space-y-8 animate-fadeIn">
      {/* PANEL INTRODUCTORIO ENCABEZADO CON IMAGEN DE FONDO */}
      <div className="rounded-2xl border border-cyan-500/30 p-6 md:p-8 shadow-2xl relative overflow-hidden bg-gray-900">
        {/* Imagen de Fondo */}
        <img
          src="personajes/imagenpersonajesportada.jpg"
          alt="Fondo Personajes Arcane"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-50 opacity-40"
        />

        {/* Capa de degradado oscuro para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-[#0b0f19]/80 to-[#0b0f19]/40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Contenido del Texto */}
        <div className="relative z-10 space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
            <Users size={16} />
            UNIVERSO DE LEAGUE OF LEGENDS
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            PERSONAJES DE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-900 animate-blue-glow drop-shadow-[0_0_25px_rgba(6,182,212,0.6)]">
              ＡＲＣＡＮＥ 🔵
            </span>
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-3xl leading-relaxed drop-shadow-md">
            Ven y conoce a los héroes, villanos y leyendas que moldean los
            destinos de Piltover y Zaun. Selecciona un personaje de la lista
            lateral para consultar su historia general, habilidades y reparto de
            voces.
          </p>
        </div>
      </div>

      {/* CONTENEDOR PRINCIPAL: DETALLE IZQUIERDO vs BARRA LATERAL DERECHA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LADO IZQUIERDO: DETALLE DEL PERSONAJE */}
        <div
          ref={detailPanelRef}
          className={`lg:col-span-8 rounded-3xl bg-gradient-to-b ${selectedChar.glowColor} border border-white/10 p-6 md:p-10 shadow-2xl relative overflow-hidden backdrop-blur space-y-8 transition-all duration-700 scroll-mt-24`}
        >
          {/* 1. FOTO DEL PERSONAJE CENTRADA */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] w-full flex items-end border border-white/10 shadow-2xl bg-black">
            {/* Imagen Principal Centrada */}
            <img
              src={selectedChar.image}
              alt={selectedChar.name}
              className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95 transition-all duration-700"
            />

            {/* Efecto de desvanecimiento suave tipo gradiente hacia abajo */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19]/80 via-transparent to-[#0b0f19]/80" />

            {/* Nombre y Rol Superpuestos */}
            <div className="relative z-10 p-6 md:p-8 space-y-2 max-w-2xl">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${selectedChar.factionColor}`}
              >
                {selectedChar.faction}
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase drop-shadow-2xl">
                {selectedChar.name}
              </h2>
              <p className="text-cyan-300 font-semibold text-sm md:text-base">
                {selectedChar.role}
              </p>
            </div>
          </div>

          {/* 2. CUADRO DEL ACTOR DE DOBLAJE */}
          <div className="p-5 rounded-2xl bg-black/70 border border-white/10 flex flex-col sm:flex-row items-center gap-5 shadow-xl">
            <div className="w-20 h-20 rounded-xl overflow-hidden border border-white/20 flex-shrink-0 bg-gray-800">
              <img
                src={selectedChar.voiceActorImg}
                alt={selectedChar.voiceActor}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1 text-center sm:text-left flex-1">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1">
                <Mic size={14} /> REPARTO DE VOZ Y DOBLAJE
              </span>
              <h4 className="text-lg font-bold text-white">
                Voz Original:{" "}
                <span className="text-cyan-300">{selectedChar.voiceActor}</span>
              </h4>
              <p className="text-xs text-gray-300">
                Doblaje Hispanoamérica:{" "}
                <strong>{selectedChar.voiceActorDub}</strong>
              </p>
            </div>
          </div>

          {/* 3. INFORMACIÓN GENERAL Y BIOGRAFÍA */}
          <div className="space-y-4 pt-2 border-t border-white/10">
            <h3 className="text-xl font-black text-white uppercase tracking-wide flex items-center gap-2">
              <Shield size={20} className="text-cyan-400" />
              Información General
            </h3>

            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              {selectedChar.description}
            </p>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10 italic text-cyan-200 text-sm">
              "{selectedChar.quote}"
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Armamento / Equipo
                </span>
                <p className="text-sm text-white font-semibold">
                  {selectedChar.weapon}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Nombre Real
                </span>
                <p className="text-sm text-white font-semibold">
                  {selectedChar.realName}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: BARRA LATERAL CON LOS PERSONAJES */}
        <div className="lg:col-span-4 space-y-3 h-full flex flex-col">
          <div className="px-2 pb-1">
            <h3 className="text-xs font-black uppercase tracking-widest text-cyan-400">
              SELECCIONAR PERSONAJE ({CHARACTERS_DATA.length})
            </h3>
          </div>

          <div className="space-y-3 max-h-[1050px] overflow-y-auto scrollbar-none pr-1">
            {CHARACTERS_DATA.map((char) => {
              const isSelected = selectedChar.id === char.id;
              return (
                <div
                  key={char.id}
                  onClick={() => setSelectedChar(char)}
                  className={`p-3.5 rounded-2xl transition-all cursor-pointer flex items-center space-x-4 border ${
                    isSelected
                      ? "bg-gradient-to-r from-cyan-950/90 to-gray-900 border-cyan-400 shadow-lg shadow-cyan-500/20 translate-x-1"
                      : "bg-gray-900/80 border-gray-800 hover:border-gray-700 hover:bg-gray-800/80"
                  }`}
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 flex-shrink-0 relative">
                    <img
                      src={char.image}
                      alt={char.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-black text-white truncate uppercase">
                      {char.name}
                    </h4>
                    <p className="text-xs text-cyan-400 font-medium truncate">
                      {char.role}
                    </p>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block pt-0.5">
                      {char.faction}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="w-2 h-8 bg-cyan-400 rounded-full" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}