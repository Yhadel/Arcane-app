import React from 'react';
import { Briefcase, GraduationCap, Mail, Smartphone, Code2, Heart, Cpu, Layers, Wrench } from 'lucide-react';

export default function Servicios() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-8 pt-24 pb-16 space-y-10 animate-fadeIn">
      
      {/* 1. BANNER SUPERIOR */}
      <div className="rounded-2xl border border-cyan-500/30 p-6 md:p-8 shadow-2xl relative overflow-hidden bg-gray-900">
        <img
          src="contra.jpg"
          alt="Banner Servicios Arcane"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-50 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-[#0b0f19]/80 to-[#0b0f19]/40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
            <Briefcase size={16} />
            DESARROLLO & PROYECTO ACADÉMICO
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            ACERCA DEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-900 animate-blue-glow drop-shadow-[0_0_25px_rgba(6,182,212,0.6)]">PROYECTO🔧</span>
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-3xl leading-relaxed drop-shadow-md">
            Conoce el trasfondo técnico de esta aplicación móvil, su propósito educativo y la motivación detrás del desarrollo de este tributo a Arcane.
          </p>
        </div>
      </div>

      {/* 2. TARJETA PRINCIPAL: PERFIL DEL DESARROLLADOR */}
      <div className="rounded-3xl bg-gray-900/80 border border-cyan-500/30 p-6 md:p-10 shadow-2xl relative overflow-hidden backdrop-blur grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Espacio para la Foto de Perfil */}
        <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
          <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-cyan-400/80 shadow-2xl shadow-cyan-500/20 bg-gray-950">
            <img
              src="mi-foto.jpg"
              alt="Foto del Desarrollador"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "perfil.jpg";
              }}
            />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">Yhadel Lopez</h2>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Estudiante de Desarrollo de Software</span>
          </div>
        </div>

        {/* Información & Presentación */}
        <div className="md:col-span-8 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold">
              <GraduationCap size={15} />
              <span>Proyecto Académico - ITLA</span>
            </div>
            <h3 className="text-2xl font-black text-white uppercase">Sobre mí y esta Aplicación</h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Hola, soy un estudiante en etapa final de la carrera de <strong className="text-cyan-300">Desarrollo de Software</strong>. Esta aplicación móvil forma parte de mis proyectos prácticos de aplicación real, construida nativamente para dispositivos móviles con una interfaz reactiva y de alto rendimiento.
            </p>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            Decidí enfocar este proyecto en <strong className="text-white">Arcane</strong> debido a mi admiración por el nivel técnico de la serie. La riqueza artística, el diseño de personajes y el detalle visual me motivan a aspirar a la misma excelencia en el ámbito del desarrollo de software. Es un sueño profesional poder colaborar en el futuro en empresas innovadoras como <strong className="text-cyan-300">Riot Games</strong> o <strong className="text-cyan-300">Fortiche Production</strong>.
          </p>

          {/* Datos de Contacto y Matrícula */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Matrícula Institucional</span>
              <strong className="text-sm font-mono text-cyan-300">20242493</strong>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Correo Institucional</span>
              <span className="text-xs text-gray-200 font-mono block truncate">20242493@itla.edu.do</span>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-1 sm:col-span-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block flex items-center gap-1.5">
                <Mail size={12} /> Correo Personal
              </span>
              <span className="text-xs text-cyan-300 font-mono block">yhadel1809@gmail.com</span>
            </div>
          </div>
        </div>

      </div>

      {/* 3. ARQUITECTURA TÉCNICA Y HERRAMIENTAS DE DESARROLLO (MÁS DETALLADO) */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center space-x-2 text-cyan-400">
          <Wrench size={20} />
          <h3 className="text-lg font-black text-white uppercase tracking-wider">
            Herramientas & Entorno de Desarrollo de la App
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-gray-900/80 border border-cyan-500/30 space-y-3">
            <div className="p-3 w-fit rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <Smartphone size={22} />
            </div>
            <h4 className="text-base font-black text-white uppercase">Interfaz & Mobile UX</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Desarrollada bajo estándares de navegación táctil para teléfonos, optimizando la distribución de vistas, botones adaptativos y gestos de desplazamiento fluido.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-900/80 border border-cyan-500/30 space-y-3">
            <div className="p-3 w-fit rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
              <Code2 size={22} />
            </div>
            <h4 className="text-base font-black text-white uppercase">React & Componentes Modulares</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Arquitectura basada en componentes reactivos de JavaScript (JSX). Manejo de estados centralizados con <strong className="text-cyan-300">useState</strong> para evitar cierres o pantallas en blanco.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-900/80 border border-cyan-500/30 space-y-3">
            <div className="p-3 w-fit rounded-xl bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30">
              <Layers size={22} />
            </div>
            <h4 className="text-base font-black text-white uppercase">Tailwind CSS & Lucide Icons</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Diseño de estilos mediante clases de utilidad en <strong className="text-fuchsia-300">Tailwind CSS</strong>, gradients neón, desenfoques en tiempo real e iconografía vectorial ligera con <strong className="text-fuchsia-300">Lucide React</strong>.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}