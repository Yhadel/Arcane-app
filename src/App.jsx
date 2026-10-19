import React, { useState, useEffect } from "react";
import Personajes from "./Personajes";
import Momentos from "./Momentos";
import AcercaDe from "./AcercaDe";
import Servicios from "./Servicios";
import Juego from "./Juego";

import {
  Home,
  Users,
  Film,
  Info,
  Gamepad2,
  Briefcase,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Sparkles,
  Clapperboard,
  Calendar,
  Award,
  Mic,
  ExternalLink,
  ArrowRight,
  Star,
} from "lucide-react";

const REPARTO_PORTADA = [
  {
    id: "jinx",
    name: "JINX",
    role: "Ella Purnell",
    image: "personajes/jinxp.webp",
  },
  {
    id: "vi",
    name: "VI",
    role: "Hailee Steinfeld",
    image: "personajes/vip.webp",
  },
  {
    id: "caitlyn",
    name: "CAITLYN",
    role: "Katie Leung",
    image: "personajes/caitlynp.webp",
  },
  {
    id: "ekko",
    name: "EKKO",
    role: "Reed Shannon",
    image: "personajes/ekkop.webp",
  },
  {
    id: "heimer",
    name: "HEIMERDINGER",
    role: "Mick Wingert",
    image: "personajes/heimerp.webp",
  },
  {
    id: "ambessa",
    name: "AMBESSA",
    role: "Ellen Thomas",
    image: "personajes/ambep.webp",
  },
  {
    id: "jayce",
    name: "JAYCE",
    role: "Kevin Alejandro",
    image: "personajes/jaycep.webp",
  },
  {
    id: "mel",
    name: "MEL",
    role: "Toks Olagundoye",
    image: "personajes/melp.webp",
  },
  {
    id: "sevika",
    name: "SEVIKA",
    role: "Azzurra Skye",
    image: "personajes/sevikap.webp",
  },
  {
    id: "vander",
    name: "VANDER",
    role: "JB Blanc",
    image: "personajes/vanderp.webp",
  },
  {
    id: "viktor",
    name: "VIKTOR",
    role: "Harry Lloyd",
    image: "personajes/victorp.webp",
  },
];

const CONTENT_SLIDES = [
  {
    id: "personajes",
    title: "PERSONAJES",
    subtitle: "Conoce a los Protagonistas",
    description:
      "Explora los perfiles detallados, historias y facciones de Jinx, Vi, Ekko, Viktor, Jayce y Mel.",
    image: "portada-serie.jpg",
    tag: "SECCIÓN 01",
    accentColor: "from-cyan-400 to-blue-500",
    buttonText: "Ir a Personajes",
    icon: Users,
    targetTab: "personajes",
  },
  {
    id: "momentos",
    title: "MOMENTOS ICÓNICOS",
    subtitle: "Escenas Memorables",
    description:
      "Revive las batallas más impactantes, secuencias musicales y enfrentamientos clave de la serie con reproductor integrado.",
    image: "jinx-ekko.jpg",
    tag: "SECCIÓN 02",
    accentColor: "from-fuchsia-500 to-pink-500",
    buttonText: "Ver Momentos",
    icon: Film,
    targetTab: "momentos",
  },
  {
    id: "acerca",
    title: "ACERCA DE ARCANE",
    subtitle: "Detalles de Producción",
    description:
      "Descubre cómo Riot Games y Fortiche Studio combinaron arte 2D y 3D para crear esta galardonada obra de arte.",
    image: "acerca.jpg",
    tag: "SECCIÓN 03",
    accentColor: "from-amber-400 to-yellow-500",
    buttonText: "Leer Sobre Arcane",
    icon: Info,
    targetTab: "acerca",
  },
  {
    id: "juego",
    title: "JUEGA CONMIGO",
    subtitle: "Minijuego Interactivo",
    description:
      "Pon a prueba tu puntería con este juego basado en el campo de tiro de la sala de juegos La Última Gota. Supera el récord de Powder acertando a los objetivos antes de que se agote el tiempo.",
    image: "juego.jpg",
    tag: "SECCIÓN 04",
    accentColor: "from-emerald-400 to-teal-500",
    buttonText: "Iniciar Juego",
    icon: Gamepad2,
    targetTab: "juego",
  },
  {
    id: "servicios",
    title: "SERVICIOS",
    subtitle: "Perfil Académico & Profesional",
    description:
      "Conoce al desarrollador detrás de esta aplicación. Información de contacto, proyectos y habilidades.",
    image: "servicios.jpg",
    tag: "SECCIÓN 05",
    accentColor: "from-cyan-400 to-fuchsia-400",
    buttonText: "Ver Mi Perfil",
    icon: Briefcase,
    targetTab: "servicios",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("portada");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Subir la pantalla arriba del todo automáticamente cada vez que cambie de ventana/sección
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [activeTab]);

  // Escuchar el scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (activeTab !== "portada") return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CONTENT_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeTab]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % CONTENT_SLIDES.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + CONTENT_SLIDES.length) % CONTENT_SLIDES.length,
    );

  const menuItems = [
    { id: "portada", label: "Portada", icon: Home },
    { id: "personajes", label: "Personajes", icon: Users },
    { id: "momentos", label: "Momentos", icon: Film },
    { id: "acerca", label: "Acerca de", icon: Info },
    { id: "juego", label: "Juega Conmigo", icon: Gamepad2 },
    { id: "servicios", label: "Servicios", icon: Briefcase },
  ];

  const renderView = () => {
    switch (activeTab) {
      case "juego":
        return <Juego />;

      case "servicios":
        return <Servicios />;

      case "acerca":
        return <AcercaDe />;

      case "momentos":
        return <Momentos />;

      case "personajes":
        return <Personajes />;

      case "portada":
        return (
          <div className="flex flex-col w-full space-y-12 pb-12">
            {/* 1. HERO INICIAL CINEMÁTICO FULL SCREEN */}
            <div className="relative w-full h-screen min-h-[650px] bg-black flex items-center overflow-hidden justify-center">
              {/* Video Nativo Local con cobertura total perfecta */}
              <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                >
                  <source src="/arcane-bg.mp4" type="video/mp4" />
                  Tu navegador no soporta videos HTML5.
                </video>
              </div>

              {/* Gradiente de oscuridad para que el texto resalte */}
              <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

              {/* Degradados de fondo para lectura perfecta */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/40 to-black/60" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-[#0b0f19]/50 to-transparent" />

              {/* Contenido Principal réplica del diseño */}
              <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full space-y-6 pt-20">
                {/* Espacio para Logo en PNG de Arcane */}
                <div className="w-56 md:w-80 h-20 md:h-28 flex items-center justify-start">
                  <img
                    src="arcane-logo.png"
                    alt="Arcane Logo"
                    className="max-h-full max-w-full object-contain filter drop-shadow-2xl"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = "none";
                      e.target.parentNode.innerHTML =
                        '<span class="text-4xl md:text-5xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-fuchsia-400 drop-shadow-lg">ARCANE</span>';
                    }}
                  />
                </div>

                {/* TÍTULO PRINCIPAL DE PORTADA CON ADAPTACIÓN MÓVIL PERFECCIONADA */}
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight">
                  SUMÉRGETE EN{" "}
                  <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-500 animate-blue-glow drop-shadow-[0_0_25px_rgba(6,182,212,0.6)]">
                    ARCANE 🔵
                  </span>
                </h1>

                {/* Subtítulo */}
                <p className="text-gray-200 text-sm md:text-lg max-w-2xl font-medium drop-shadow-md">
                  Una serie original de Netflix basada en el universo de League
                  of Legends.
                </p>

                {/* Réplica de Estrellas e Puntuación IMDb */}
                <div className="flex items-center space-x-3 text-amber-400">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="currentColor"
                        className="text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-white font-bold text-sm tracking-wide">
                    9.0/10 IMDb
                  </span>
                </div>

                {/* Botones de Acción Réplica */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="https://www.netflix.com/title/81435684"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-8 py-3.5 rounded-lg font-black text-sm uppercase bg-red-600 hover:bg-red-500 text-white shadow-xl shadow-red-600/40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Play size={18} fill="currentColor" />
                    <span>VER EN NETFLIX</span>
                  </a>

                  <a
                    href="https://www.arcane.com/es-es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-8 py-3.5 rounded-lg font-black text-sm uppercase bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md transition-all cursor-pointer"
                  >
                    <ExternalLink size={18} />
                    <span>WEB OFICIAL</span>
                  </a>
                </div>
              </div>
            </div>

            {/* CONTENEDOR CENTRAL */}
            <div className="max-w-7xl mx-auto w-full px-4 md:px-8 space-y-12">
              {/* 2. CAJA INFORMATIVA: Sinopsis -> Tráiler -> Creadores -> Reparto */}
              <div
                id="sinopsis-section"
                className="rounded-2xl bg-gray-900/90 border border-cyan-500/30 p-6 md:p-8 shadow-xl relative overflow-hidden backdrop-blur space-y-8"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-8">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800 pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                          <Sparkles size={22} />
                        </div>
                        <div>
                          <h2 className="text-2xl font-black text-white tracking-wide uppercase">
                            ¿De qué trata Arcane?
                          </h2>
                          <p className="text-xs text-cyan-400 font-semibold tracking-wider uppercase">
                            Sinopsis e Información General
                          </p>
                        </div>
                      </div>

                      <span className="self-start md:self-auto px-3 py-1 rounded-full text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-500/30 flex items-center gap-1.5">
                        <Award size={14} />
                        Ganadora del Emmy a Mejor Serie Animada
                      </span>
                    </div>

                    <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                      <p>
                        <strong className="text-white">Arcane</strong> se
                        sumerge en el tenso y fascinante equilibrio entre la
                        opulenta y utópica ciudad de{" "}
                        <span className="text-amber-300 font-semibold">
                          Piltover
                        </span>{" "}
                        y el sombrío y oprimido bajo mundo de{" "}
                        <span className="text-fuchsia-400 font-semibold">
                          Zaun
                        </span>
                        . La historia explora las profundas diferencias sociales
                        y políticas que dividen a ambas sociedades, aceleradas
                        dramáticamente por la invención de la{" "}
                        <em className="text-cyan-300 font-semibold">Hextech</em>{" "}
                        —una revolucionaria tecnología capaz de controlar e
                        infundir energía mágica en dispositivos científicos.
                      </p>
                      <p>
                        En medio de esta creciente agitación social, la
                        narrativa sigue la trágica ruptura de dos hermanas
                        huérfanas, <strong className="text-white">Vi</strong> y{" "}
                        <strong className="text-white">Jinx (Powder)</strong>,
                        cuyos caminos se separan de manera desgarradora tras un
                        evento catastrófico. Mientras Vi intenta sobrevivir en
                        las calles luchando con puños de hierro y buscando
                        desesperadamente a su hermana, Powder cae bajo la
                        influencia de{" "}
                        <span className="text-purple-400 font-semibold">
                          Silco
                        </span>
                        , el líder de los barrios bajos, transformándose en la
                        impredecible y peligrosa Jinx.
                      </p>
                      <p>
                        A medida que las intrigas políticas del Consejo de
                        Piltover amenazan con desatar una guerra abierta y la
                        sustancia sintética conocida como{" "}
                        <span className="text-fuchsia-400 font-semibold">
                          Shimmer
                        </span>{" "}
                        corrompe las calles de Zaun, los destinos de
                        científicos, ejecutores, revolucionarios y criminales se
                        entrelazan en una épica historia de lealtad, traición,
                        ambición y la inquebrantable búsqueda de identidad.
                      </p>
                    </div>
                  </div>

                  {/* Tráiler Oficial en Español */}
                  <div className="pt-4 border-t border-gray-800 space-y-4">
                    <div className="flex items-center space-x-2 text-sm font-bold text-cyan-400">
                      <Play size={18} />
                      <span>Tráiler Oficial de Arcane (En Español)</span>
                    </div>

                    <div className="relative rounded-xl overflow-hidden border border-cyan-500/40 shadow-2xl bg-black aspect-video max-w-4xl mx-auto">
                      <iframe
                        className="w-full h-full border-0"
                        src="https://www.youtube.com/embed/xPKN7MxS8TU"
                        title="Arcane Official Trailer Español"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  {/* Banners Informativos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                      <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                        <Clapperboard size={16} /> Creadores y Estudio
                      </span>
                      <p className="text-xs text-gray-200 font-medium">
                        Christian Linke y Alex Yee //{" "}
                        <strong>Fortiche Production & Riot Games</strong>
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                      <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                        <Calendar size={16} /> Estreno y Temporadas
                      </span>
                      <p className="text-xs text-gray-200 font-medium">
                        2 Temporadas (2021 - 2024) // Disponible globalmente en
                        Netflix
                      </p>
                    </div>
                  </div>

                  {/* Reparto Principal - Barra Horizontal Estática */}
                  <div className="space-y-4 pt-4 border-t border-gray-800">
                    <div className="flex items-center space-x-2 text-cyan-400">
                      <Mic size={20} />
                      <h3 className="text-lg font-black text-white uppercase tracking-wider">
                        Reparto Principal de Voces
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                      {REPARTO_PORTADA.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center space-x-3 px-4 py-2.5 rounded-xl border flex-shrink-0 bg-black/50 border-white/10 text-gray-300"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-8 h-8 rounded-lg object-cover border border-white/20 flex-shrink-0"
                          />
                          <div className="text-left leading-tight">
                            <span className="block text-xs font-black text-white uppercase">
                              {item.name}
                            </span>
                            <span className="block text-[10px] text-cyan-300">
                              {item.role}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. CAJA DE ENLACE A NETFLIX */}
              <div className="rounded-2xl bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 border border-cyan-500/30 p-6 md:p-8 shadow-xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <span className="text-xs font-bold text-red-500 uppercase tracking-widest flex items-center gap-1.5 justify-center md:justify-start">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    DISPONIBLE EN STREAMING
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-white">
                    ¿Listo para ver la serie completa?
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400">
                    Disfruta de las 2 temporadas de Arcane en máxima calidad
                    directamente en la plataforma oficial de Netflix.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="https://www.netflix.com/title/81435684"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-sm bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Ver en Netflix</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* 4. SLIDER DE CONTENIDO DISPONIBLE EN LA APP */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 px-1">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                    EXPLORA LA APLICACIÓN
                  </span>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-gray-900 shadow-2xl shadow-cyan-500/10 min-h-[420px] md:min-h-[480px] flex items-end">
                  <img
                    src={CONTENT_SLIDES[currentSlide].image}
                    alt={CONTENT_SLIDES[currentSlide].title}
                    className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/60 to-transparent" />

                  <div className="relative z-10 p-6 md:p-12 space-y-4 max-w-3xl">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest text-cyan-300 bg-cyan-950/80 border border-cyan-500/40">
                      {CONTENT_SLIDES[currentSlide].tag}
                    </span>

                    <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase drop-shadow-lg">
                      {CONTENT_SLIDES[currentSlide].title}
                    </h3>

                    <p
                      className={`text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${CONTENT_SLIDES[currentSlide].accentColor}`}
                    >
                      {CONTENT_SLIDES[currentSlide].subtitle}
                    </p>

                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {CONTENT_SLIDES[currentSlide].description}
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() =>
                          setActiveTab(CONTENT_SLIDES[currentSlide].targetTab)
                        }
                        className="flex items-center space-x-2 px-6 py-3 rounded-lg font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                      >
                        {React.createElement(
                          CONTENT_SLIDES[currentSlide].icon,
                          { size: 18 },
                        )}
                        <span>{CONTENT_SLIDES[currentSlide].buttonText}</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-cyan-500 text-white border border-white/10 transition-all backdrop-blur cursor-pointer"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-cyan-500 text-white border border-white/10 transition-all backdrop-blur cursor-pointer"
                  >
                    <ChevronRight size={24} />
                  </button>

                  <div className="absolute bottom-4 right-6 z-20 flex space-x-2">
                    {CONTENT_SLIDES.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          currentSlide === index
                            ? "w-8 bg-cyan-400"
                            : "w-2 bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* ---------------- SECCIÓN PLAYLIST OFICIAL DE ARCANE (INTERACTIVA) ---------------- */}
              <div className="rounded-3xl bg-gradient-to-r from-gray-950 via-[#071318] to-gray-950 border border-cyan-500/20 p-6 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  {/* Reproductor Interactivo Embebido (Spotify Official Player) */}
                  <div className="lg:col-span-6 w-full">
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/60 backdrop-blur">
                      <iframe
                        style={{ borderRadius: "12px" }}
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3KVUsNUmJc2?utm_source=generator&theme=0"
                        width="100%"
                        height="382"
                        frameBorder="0"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title="Arcane Official Spotify Playlist"
                      />
                    </div>
                  </div>

                  {/* Lado Derecho: Textos y Botones de Enlace Directo */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-black uppercase tracking-widest text-cyan-400">
                        MÚSICA DE ARCANE
                      </span>
                      <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
                        LISTA DE REPRODUCCIÓN OFICIAL DE ARCANE
                      </h2>
                    </div>

                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      Escucha un fragmento y ve a la banda sonora oficial de la
                      serie directamente desde aquí. Explora todos los temas de
                      la temporada 1 y 2 compuestos para Piltover y Zaun,
                      profundizando en la historia y el trasfondo oculto detrás
                      de cada personaje, enmarcados por una ambientación
                      melódica y cinematográfica inolvidable..
                    </p>

                    <div className="space-y-3 pt-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">
                        O ESCÚCHALA EN TU PLATAFORMA PREFERIDA
                      </span>
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href="https://arcane.lnk.to/PTTB/spotify"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-xl bg-gray-900 border border-white/10 hover:border-cyan-400 text-white hover:text-cyan-400 transition-all flex items-center space-x-2 text-xs font-bold cursor-pointer"
                        >
                          <span>Spotify</span>
                        </a>

                        <a
                          href="https://arcane.lnk.to/PTTB/applemusic"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-xl bg-gray-900 border border-white/10 hover:border-cyan-400 text-white hover:text-cyan-400 transition-all flex items-center space-x-2 text-xs font-bold cursor-pointer"
                        >
                          <span>Apple Music</span>
                        </a>

                        <a
                          href="https://arcane.lnk.to/PTTB/deezer"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-xl bg-gray-900 border border-white/10 hover:border-cyan-400 text-white hover:text-cyan-400 transition-all flex items-center space-x-2 text-xs font-bold cursor-pointer"
                        >
                          <span>Deezer</span>
                        </a>

                        <a
                          href="https://arcane.lnk.to/PTTB/amazonmusic"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-xl bg-gray-900 border border-white/10 hover:border-cyan-400 text-white hover:text-cyan-400 transition-all flex items-center space-x-2 text-xs font-bold cursor-pointer"
                        >
                          <span>Amazon Music</span>
                        </a>

                        <a
                          href="https://arcane.lnk.to/PTTB/youtubemusic"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-xl bg-gray-900 border border-white/10 hover:border-cyan-400 text-white hover:text-cyan-400 transition-all flex items-center space-x-2 text-xs font-bold cursor-pointer"
                        >
                          <span>YouTube Music</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "personajes":
        return (
          <div className="p-8 text-center text-white">
            <h1 className="text-4xl font-bold text-cyan-400">Personajes</h1>
          </div>
        );
      case "momentos":
        return (
          <div className="p-8 text-center text-white">
            <h1 className="text-4xl font-bold text-cyan-400">Momentos</h1>
          </div>
        );
      case "acerca":
        return (
          <div className="p-8 text-center text-white">
            <h1 className="text-4xl font-bold text-cyan-400">Acerca de</h1>
          </div>
        );
      case "juego":
        return (
          <div className="p-8 text-center text-white">
            <h1 className="text-4xl font-bold text-cyan-400">Juega Conmigo</h1>
          </div>
        );
      case "servicios":
        return (
          <div className="p-8 text-center text-white">
            <h1 className="text-4xl font-bold text-cyan-400">servicios</h1>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 flex flex-col font-sans">
      {/* HEADER NAVEGACIÓN FLOTANTE TRASLÚCIDO / DINÁMICO */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gray-900/90 backdrop-blur border-b border-cyan-500/20 shadow-xl"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* LOGO EN EL NAVBAR QUE REDIRIGE AL PRINCIPIO */}
          <div
            className="flex items-center cursor-pointer group py-1"
            onClick={() => {
              setActiveTab("portada");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="h-9 w-32 md:w-36 flex items-center justify-start">
              <img
                src="arcane-logo-A.png"
                alt="Arcane Logo"
                className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                  e.target.parentNode.innerHTML =
                    '<span class="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">ARCANE</span>';
                }}
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20 backdrop-blur"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Botón Ver en Netflix en la esquina del Navbar */}
          <div className="hidden lg:block">
            <a
              href="https://www.netflix.com/title/81435684"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider bg-red-600 hover:bg-red-500 text-white shadow-md shadow-red-600/30 transition-all cursor-pointer"
            >
              VER EN NETFLIX
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur border-b border-cyan-500/20 px-4 pt-2 pb-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-base font-medium cursor-pointer ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </header>

      <main className="flex-1 flex flex-col">{renderView()}</main>

      {/* ---------------- FOOTER COMPLETO ---------------- */}

      <footer className="w-full bg-[#070b14] border-t border-gray-800/60 pt-16 pb-8 text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Grid de 3 Columnas */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
            {/* Columna 1: Logo, Descripción e Íconos de Redes Sociales */}
            <div className="md:col-span-6 space-y-6">
              <div className="flex items-start space-x-4">
                {/* Logo "A" estilizado (o tu imagen de logo) */}
                <span className="text-2xl font-black text-gray-200 tracking-tighter pt-0.5">
                  <img
                    src="arcane-logo.png"
                    alt="Arcane Logo"
                    className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = "none";
                      e.target.parentNode.innerHTML =
                        '<span class="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">ARCANE</span>';
                    }}
                  />
                </span>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
                  Explora el mundo de Arcane, donde la magia y la tecnología
                  colisionan en las ciudades de Piltover y Zaun. Una historia de
                  conflicto, innovación y los lazos que nos unen y nos separan.
                </p>
              </div>

              {/* Íconos de Redes Sociales */}
              <div className="flex items-center space-x-5 pt-2 text-gray-400">
                <a
                  href="https://www.tiktok.com/@leagueoflegends"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                  title="TikTok"
                >
                  {/* TikTok Icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.83V7.65a6.34 6.34 0 0 0-3.5 1 6.34 6.34 0 1 0 11.23 4.31V9.82a8.27 8.27 0 0 0 4.88 1.58V7.95a4.85 4.85 0 0 1-2.5-.76z" />
                  </svg>
                </a>

                <a
                  href="https://twitter.com/arcaneshow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                  title="X / Twitter"
                >
                  {/* Twitter / X Icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/arcaneshow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                  title="Instagram"
                >
                  {/* Instagram Icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href="https://facebook.com/arcaneshow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                  title="Facebook"
                >
                  {/* Facebook Icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href="https://youtube.com/playlist?list=PLbAFXJC0J5GYRhFnNllP8ss1moTRwMRBg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                  title="YouTube Playlist"
                >
                  {/* YouTube Icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                <a
                  href="https://open.spotify.com/album/3MdiH74FL8mhlbnR6DcqJd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                  title="Spotify"
                >
                  {/* Spotify Icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.72 1.62.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </a>

                <a
                  href="https://music.apple.com/es/album/1593944607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                  title="Apple Music"
                >
                  {/* Music Note Icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Columna 2: EXPLORAR */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-amber-300">
                EXPLORAR
              </h4>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <a
                    href="https://www.netflix.com/title/81435684"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Ver en Netflix
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arcane.com/es-es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Sitio oficial
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arcane.com/es-es/news/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Noticias
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3: LEGAL */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-amber-300">
                LEGAL
              </h4>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <a
                    href="https://www.riotgames.com/es/terms-of-service-ES"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Términos de Servicio
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.riotgames.com/es/privacy-notice-ES"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Aviso de Privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.riotgames.com/es/cookie-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Línea Divisoria y Créditos del Pie de Página */}
          <div className="border-t border-gray-800/80 pt-8 text-center text-xs text-gray-400">
            <p>
              © 2026 Riot Games, Inc. Todos los derechos reservados. Esta es una
              fan App de Arcane creada por{" "}
              <span className="text-amber-300 font-bold">Yhadel</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
