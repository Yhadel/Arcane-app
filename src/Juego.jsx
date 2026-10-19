import React, { useState, useEffect, useRef } from "react";
import {
  Target,
  Trophy,
  Clock,
  RotateCcw,
  Zap,
  Crosshair,
  Play,
  Music,
  Sparkles,
  AlertTriangle,
} from "lucide-react";

// TIPOS DE OBJETIVOS
const TARGET_TYPES = [
  {
    id: "enforcer",
    name: "Vigilante de Piltover",
    points: 100,
    isEnemy: true,
    img: "juego/vigilante.png",
    glow: "hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]",
  },
  {
    id: "monster",
    name: "Monstruo del Submundo",
    points: 150,
    isEnemy: true,
    img: "juego/monstruo.png",
    glow: "hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]",
  },
  {
    id: "target_board",
    name: "Diana de Silco",
    points: 80,
    isEnemy: true,
    img: "juego/silco.png",
    glow: "hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]",
  },
  {
    id: "friend",
    name: "¡NO DISPARES! (Aliado)",
    points: -200,
    isEnemy: false,
    img: "juego/powder.png",
    glow: "hover:drop-shadow-[0_0_20px_rgba(244,63,94,0.9)] animate-pulse",
  },
];

export default function Juego() {
  const [gameState, setGameState] = useState("IDLE"); // IDLE, PLAYING, GAME_OVER
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  // Récord personal del jugador inicializado desde localStorage
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem("arcane_aim_highscore") || "0", 10);
  });

  const [targets, setTargets] = useState([]);
  const [hits, setHits] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [combo, setCombo] = useState(0);
  const [clickEffects, setClickEffects] = useState([]);

  const gameAreaRef = useRef(null);

  // Reloj de cuenta regresiva
  useEffect(() => {
    if (gameState !== "PLAYING") return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState]);

  // Generador de objetivos
  useEffect(() => {
    if (gameState !== "PLAYING") return;

    const intervalTime = Math.max(500, 1000 - Math.floor(score / 300) * 60);

    const targetSpawner = setInterval(() => {
      spawnTarget();
    }, intervalTime);

    return () => clearInterval(targetSpawner);
  }, [gameState, score]);

  // Limpieza automática de objetivos que vencen
  useEffect(() => {
    if (gameState !== "PLAYING") return;

    const autoCleaner = setInterval(() => {
      const now = Date.now();
      setTargets((prev) => prev.filter((t) => t.expiresAt > now));
    }, 200);

    return () => clearInterval(autoCleaner);
  }, [gameState]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setHits(0);
    setTotalClicks(0);
    setCombo(0);
    setTargets([]);
    setClickEffects([]);
    setGameState("PLAYING");
  };

  const endGame = () => {
    setGameState("GAME_OVER");
    setTargets([]);
    // Guardar y actualizar la mejor marca del jugador
    setHighScore((prevHigh) => {
      const newHigh = Math.max(prevHigh, score);
      localStorage.setItem("arcane_aim_highscore", newHigh.toString());
      return newHigh;
    });
  };

  const spawnTarget = () => {
    if (!gameAreaRef.current) return;
    const rect = gameAreaRef.current.getBoundingClientRect();

    setTargets((prevTargets) => {
      if (prevTargets.length >= 4) return prevTargets;

      const randomType =
        TARGET_TYPES[Math.floor(Math.random() * TARGET_TYPES.length)];
      
      // Tamaño adaptado para pantallas táctiles y de escritorio
      const size = Math.floor(Math.random() * 20) + 75;

      const x = Math.random() * (rect.width - size - 20) + 10;
      const y = Math.random() * (rect.height - size - 20) + 10;

      const duration = Math.floor(Math.random() * 700) + 1800;

      const newTarget = {
        id: Date.now() + Math.random(),
        ...randomType,
        x,
        y,
        size,
        expiresAt: Date.now() + duration,
      };

      return [...prevTargets, newTarget];
    });
  };

  const handleAreaClick = (e) => {
    if (gameState !== "PLAYING") return;
    setTotalClicks((prev) => prev + 1);

    const rect = gameAreaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const effectId = Date.now();
    setClickEffects((prev) => [...prev, { id: effectId, x, y }]);

    setTimeout(() => {
      setClickEffects((prev) => prev.filter((eff) => eff.id !== effectId));
    }, 400);
  };

  const handleTargetHit = (e, target) => {
    e.stopPropagation();
    if (gameState !== "PLAYING") return;

    setTotalClicks((prev) => prev + 1);

    if (target.isEnemy) {
      const addedPoints = target.points + combo * 10;
      setScore((prev) => prev + addedPoints);
      setHits((prev) => prev + 1);
      setCombo((prev) => prev + 1);
    } else {
      setScore((prev) => Math.max(0, prev + target.points));
      setCombo(0);
    }

    setTargets((prev) => prev.filter((t) => t.id !== target.id));
  };

  const accuracy = totalClicks > 0 ? Math.round((hits / totalClicks) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto w-full px-2 sm:px-6 md:px-8 pt-20 pb-16 space-y-8 animate-fadeIn select-none overflow-x-hidden">
      
      {/* 1. BANNER SUPERIOR AJUSTADO Y RESPONSIVO */}
      <div className="rounded-2xl border border-cyan-500/30 p-4 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden bg-gray-900">
        <img
          src="juego/bannercampo.jpeg"
          alt="Galería de Tiro Arcane"
          className="absolute inset-0 w-full h-full object-cover filter brightness-40 opacity-40"
          onError={(e) => {
            e.target.src = "portada-serie.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-[#0b0f19]/80 to-[#0b0f19]/40 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Texto de título ajustado */}
          <div className="space-y-2 flex-1 min-w-0">
            <span className="text-[10px] sm:text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
              <Target size={16} />
              MINIJUEGO DE PUNTERÍA Y REFLEJOS
            </span>

            <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              PRÁCTICA DE TIRO DE{" "}
              <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-500 to-cyan-400">
                ＰＯＷＤＥＲ 💥🔫
              </span>
            </h1>

            <p className="text-gray-200 text-xs sm:text-sm max-w-xl leading-relaxed">
              Demuestra tu puntería en la galería subterránea de Zaun. Derriba
              los objetivos enemigos antes de que desaparezcan o se agote el
              tiempo.
            </p>
          </div>

          {/* Marcadores de Récords alineados */}
          <div className="flex flex-row items-center gap-2 sm:gap-3 flex-shrink-0 w-full lg:w-auto justify-between sm:justify-start">
            {/* Récord a vencer de Powder */}
            <div className="flex items-center gap-2 sm:gap-3 bg-pink-950/80 border border-pink-500/40 p-2.5 sm:p-4 rounded-xl backdrop-blur shadow-lg shadow-pink-500/10 flex-1 sm:flex-none justify-center">
              <Trophy className="text-pink-400 animate-bounce" size={20} />
              <div>
                <span className="text-[9px] sm:text-[10px] text-pink-300 uppercase font-black tracking-wider block">
                  Récord de Powder
                </span>
                <strong className="text-sm sm:text-xl text-white font-mono">
                  4,000 PTS
                </strong>
              </div>
            </div>

            {/* Récord Personal Guardado */}
            <div className="flex items-center gap-2 sm:gap-3 bg-black/60 border border-cyan-500/30 p-2.5 sm:p-4 rounded-xl backdrop-blur flex-1 sm:flex-none justify-center">
              <Trophy className="text-amber-400" size={20} />
              <div>
                <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase font-bold block">
                  Tu Mejor Marca
                </span>
                <strong className="text-sm sm:text-lg text-amber-300 font-mono">
                  {highScore} PTS
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. ÁREA DEL JUEGO / PANTALLA ADAPTADA A MÓVILES SIN OVERFLOW */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl overflow-hidden bg-gray-950 aspect-[4/3] sm:aspect-[16/9] min-h-[350px] sm:min-h-[420px] flex flex-col justify-between">
        
        {/* Fondo del Escenario */}
        <img
          src="juego/campodetiro.jpg"
          alt="Escenario de Tiro"
          className="absolute inset-0 w-full h-full object-cover filter brightness-60 opacity-70 pointer-events-none"
          onError={(e) => {
            e.target.src = "portada-serie.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-gray-950/80 pointer-events-none" />

        {/* BARRA SUPERIOR DE ESTADÍSTICAS */}
        <div className="relative z-20 p-3 sm:p-4 flex items-center justify-between bg-black/60 backdrop-blur border-b border-white/10 text-white font-mono text-xs sm:text-sm">
          <div className="flex items-center gap-1.5">
            <Clock size={16} className="text-cyan-400" />
            <span className="text-gray-400 uppercase font-bold hidden sm:inline">
              Tiempo:
            </span>
            <span
              className={`font-bold ${timeLeft <= 5 ? "text-rose-500 animate-ping" : "text-cyan-300"}`}
            >
              {timeLeft}s
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Zap size={16} className="text-amber-400" />
            <span className="text-gray-400 uppercase font-bold hidden sm:inline">
              Puntos:
            </span>
            <span className="text-base sm:text-2xl font-black text-amber-300">{score}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Crosshair size={16} className="text-fuchsia-400" />
            <span className="text-gray-400 uppercase font-bold hidden sm:inline">
              Precisión:
            </span>
            <span className="font-bold text-fuchsia-300">
              {accuracy}%
            </span>
          </div>
        </div>

        {/* CAMPO DE TIRO INTERACTIVO */}
        <div
          ref={gameAreaRef}
          onClick={handleAreaClick}
          className="relative flex-1 w-full h-full cursor-crosshair overflow-hidden"
        >
          {gameState === "PLAYING" && (
            <>
              {/* Efectos visuales de disparo */}
              {clickEffects.map((eff) => (
                <div
                  key={eff.id}
                  style={{ left: eff.x, top: eff.y }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-cyan-400 rounded-full animate-ping pointer-events-none z-30"
                />
              ))}

              {/* RENDER DE OBJETIVOS CON IMÁGENES PNG */}
              {targets.map((target) => (
                <button
                  key={target.id}
                  onClick={(e) => handleTargetHit(e, target)}
                  style={{
                    left: `${target.x}px`,
                    top: `${target.y}px`,
                    width: `${target.size}px`,
                    height: `${target.size}px`,
                  }}
                  className={`absolute group z-20 cursor-pointer transition-transform duration-200 active:scale-90 animate-bounce ${target.glow}`}
                >
                  <img
                    src={target.img}
                    alt={target.name}
                    className="w-full h-full object-contain filter drop-shadow-2xl pointer-events-none"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentNode.innerHTML = `<div class="w-full h-full rounded-full bg-cyan-500/80 border-2 border-white flex items-center justify-center font-black text-black text-xs">${target.isEnemy ? "+PTS" : "NO"}</div>`;
                    }}
                  />
                </button>
              ))}
            </>
          )}

          {/* PANTALLA INICIAL (IDLE) */}
          {gameState === "IDLE" && (
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-4 text-center space-y-4 sm:space-y-6 bg-black/75 backdrop-blur-sm">
              <div className="p-3 sm:p-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 animate-pulse">
                <Target size={36} className="sm:w-12 sm:h-12" />
              </div>
              <div className="space-y-1.5 max-w-md">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-white uppercase">
                  ¿Listo para Afinar el Aim?
                </h2>
                <p className="text-[11px] sm:text-xs md:text-sm text-gray-300">
                  Haz clic sobre las dianas y enemigos PNG que aparezcan en
                  pantalla antes de que se agote el tiempo o desaparezcan.
                  ¡Cuidado de no dispararle a Powder!
                </p>
              </div>
              <button
                onClick={startGame}
                className="flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-black uppercase text-xs sm:text-sm tracking-wider shadow-xl shadow-cyan-500/20 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Play size={16} fill="currentColor" />
                <span>Iniciar Práctica</span>
              </button>
            </div>
          )}

          {/* PANTALLA DE JUEGO TERMINADO (GAME_OVER) */}
          {gameState === "GAME_OVER" && (
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-4 text-center space-y-4 sm:space-y-6 bg-black/85 backdrop-blur-md animate-fadeIn">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs font-bold text-fuchsia-400 uppercase tracking-widest block">
                  ¡TIEMPO AGOTADO!
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase">
                  Resultados
                </h2>
                {score > 4000 ? (
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-[10px] sm:text-xs font-bold animate-bounce">
                    🎉 ¡Felicidades! ¡Has superado el récord de Powder!
                  </span>
                ) : (
                  <span className="inline-block px-3 py-1 rounded-full bg-pink-500/20 border border-pink-400 text-pink-300 text-[10px] sm:text-xs font-bold">
                    Aún estás a {4000 - score} PTS del récord de Powder. ¡Sigue practicando!
                  </span>
                )}
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-md">
                <div className="p-2.5 sm:p-4 rounded-xl bg-black/60 border border-white/10 space-y-0.5">
                  <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase font-bold block">
                    Puntuación
                  </span>
                  <strong className="text-base sm:text-2xl text-amber-300 font-mono">
                    {score}
                  </strong>
                </div>

                <div className="p-2.5 sm:p-4 rounded-xl bg-black/60 border border-white/10 space-y-0.5">
                  <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase font-bold block">
                    Precisión
                  </span>
                  <strong className="text-base sm:text-2xl text-cyan-300 font-mono">
                    {accuracy}%
                  </strong>
                </div>

                <div className="p-2.5 sm:p-4 rounded-xl bg-black/60 border border-white/10 space-y-0.5">
                  <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase font-bold block">
                    Impactos
                  </span>
                  <strong className="text-base sm:text-2xl text-fuchsia-300 font-mono">
                    {hits}
                  </strong>
                </div>
              </div>

              <button
                onClick={startGame}
                className="flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-black uppercase text-xs sm:text-sm tracking-wider shadow-xl shadow-cyan-500/20 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <RotateCcw size={16} />
                <span>Intentar de Nuevo</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 3. DESCRIPCIÓN E INSPIRACIÓN DEL MINIJUEGO */}
      <div className="rounded-3xl bg-gray-900/80 border border-cyan-500/30 p-6 md:p-8 space-y-6 backdrop-blur">
        <div className="space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
            <Sparkles size={16} />
            INSPIRACIÓN Y REGLAS DEL RETO
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
            Inspirado en la Galería de Tiro de "La Última Gota"
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
            Este minijuego rinde homenaje a la icónica sala de juegos
            subterránea del bar <em>"La Última Gota"</em> en Zaun, donde Powder,
            Vi, Claggor y Mylo pasaban tardes enteras compitiendo por obtener la
            máxima puntuación en la máquina de tiro improvisada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
            <strong className="text-cyan-300 text-sm font-bold flex items-center gap-2">
              🎯 ¡Prueba tu Puntería y Reflejos!
            </strong>
            <p className="text-xs text-gray-300 leading-relaxed">
              Dispara a los Vigilantes de Piltover, Monstruos y Dianas de Silco
              para acumular puntos antes de que desaparezcan. ¡Haz combos
              consecutivos para multiplicar tus puntos!
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-rose-500/20 space-y-1.5">
            <strong className="text-rose-400 text-sm font-bold flex items-center gap-2">
              <AlertTriangle size={16} /> ¡Cuidado: No le dispares a Powder!
            </strong>
            <p className="text-xs text-gray-300 leading-relaxed">
              Si le disparas por error a tu aliada Powder, perderás{" "}
              <strong>-200 Puntos</strong> inmediatamente y se reiniciará tu
              racha de combo. ¡Trata de superar el récord histórico de{" "}
              <strong> 4,000 PTS</strong> establecido por ella!
            </p>
          </div>
        </div>
      </div>

      {/* 4. REPRODUCTOR DE MÚSICA OPCIONAL (SIN AUTOPLAY) */}
      <div className="rounded-2xl bg-black/60 border border-cyan-500/30 p-4 sm:p-6 space-y-4 shadow-xl">
        <div className="flex items-center space-x-2 text-cyan-400">
          <Music size={20} />
          <h3 className="text-xs sm:text-base font-black text-white uppercase tracking-wider">
            Banda Sonora de jinx (powder) para practicar a gusto... si gustas
            claro
          </h3>
        </div>

        <div className="relative rounded-xl overflow-hidden aspect-video w-full max-w-2xl mx-auto border border-white/10 shadow-2xl bg-black">
          <iframe
            className="w-full h-full border-0"
            src="https://www.youtube.com/embed/quBZAQEP9E0?autoplay=0"
            title="Arcane Official Soundtrack - Shootout Ambience"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <p className="text-[11px] sm:text-xs text-gray-400 text-center">
          Haz clic en reproducir si deseas acompañar tu sesión con la playlist de jinx.
        </p>
      </div>
    </div>
  );
}