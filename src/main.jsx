import React from 'react'
import ReactDOM from 'react-dom/client'
import HeroMockup from './components/HeroMockup.jsx'

// script.js DOMContentLoaded da initHeroReveal() ni chaqiradi.
// React mount bo'lgandan keyin ham .reveal va .visible klasslari ishlaydi.
// index.html da <div id="hero-mockup-root" class="hero-mockup reveal"> mavjud.

const mountEl = document.getElementById('hero-mockup-root')

if (mountEl) {
  ReactDOM.createRoot(mountEl).render(
    <React.StrictMode>
      <HeroMockup />
    </React.StrictMode>
  )
}
