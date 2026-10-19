# ⚡ Arcane: Mobile Experience & Interactive Aim-Trainer

Aplicación móvil multiplataforma inspirada en el universo de **Arcane** (League of Legends), desarrollada como proyecto académico/estudiantil para el **ITLA**. El objetivo es brindar una experiencia de usuario (UI/UX) inmersiva, optimizada para dispositivos móviles y compilada de manera nativa como **APK** mediante Capacitor.

---

## 🚀 Tecnologías Utilizadas

El proyecto fue construido utilizando un stack web moderno adaptado para entornos híbridos y móviles:

* **Frontend:** React (Vite) para una arquitectura de componentes rápida y modular.
* **Estilos & Diseño:** Tailwind CSS, logrando una interfaz futurista y oscura (*Dark Theme*) fiel a la estética de Piltover y Zaun.
* **Iconografía:** `lucide-react` para iconos limpios y responsivos.
* **Despliegue Móvil:** Capacitor (Ionic), transformando la SPA web en una aplicación Android nativa lista para WebView.

---

## 🎮 Características Principales

1. **Portada Cinemática (Hero Section):** Reproductor multimedia integrado con ambientación de la serie.
2. **Sección de Personajes:** Fichas interactivas detalladas con información de facciones, roles, biografías y reparto de voces (tanto original como doblaje en español).
3. **Momentos Icónicos:** Reproductor de escenas clave y secuencias memorables de la serie.
4. **Minijuego "Aim-Trainer de Powder":** 
   * Inspirado en la galería de tiro subterránea del bar *La Última Gota*.
   * Objetivos aleatorios (Vigilantes, Monstruos, Dianas y aliados penalizables como Powder).
   * Sistema de combos por aciertos consecutivos.
   * Registro y persistencia de récords locales mediante `localStorage`.
5. **Sección Académica / Servicios:** Información del perfil del desarrollador y del proyecto institucional.

---

## 📱 Proceso de Compilación y Despliegue Android (APK)

Para compilar los cambios de React hacia el entorno nativo de Android Studio:

1. **Generar la compilación de producción:**
   ```bash
   npm run build
