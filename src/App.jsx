import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

// Buena práctica: Los plugins de GSAP se registran UNA SOLA VEZ en el archivo raíz (App.jsx) para que TODOS los componentes hijos puedan usarlos sin volver a registrarlos.
gsap.registerPlugin(ScrollTrigger, SplitText);

ScrollTrigger.normalizeScroll(true);
// PROBLEMA SIN normalizeScroll: El scroll se bloqueaba porque:
// - El ratón y trackpad enviaban eventos de scroll DIFERENTES y conflictivos
// - Las animaciones de GSAP competían simultáneamente por controlar el scroll
// - El navegador no sabía cuál evento procesar primero, congelando la página
// - No podías subir ni bajar sin esperar a que terminara
//
// SOLUCIÓN: normalizeScroll(true) actúa como "árbitro"
// - Convierte TODOS los eventos de scroll a un mismo formato estándar
// - Evita rebotes y congelaciones
// - Permite que todo fluya sin conflictos

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
};

export default App;
