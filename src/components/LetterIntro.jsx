import React, { useRef, useState } from 'react'
import BaroqueCorner from './BaroqueCorner'

/**
 * LetterIntro — Baroque square decorated letter with red wax stamp.
 * The stamp is both decoration and the "enter" button.
 * On click: stamp pulses → letter fades out → main page fades in.
 */


const LetterIntro = ({ onEnter }) => {
  const [phase, setPhase] = useState('visible') // visible | stamping | fading

  // Accept a ref to the hidden music iframe so we can start it the INSTANT the stamp is clicked
  const handleStampClick = () => {
    if (phase !== 'visible') return
    // 1. Trigger music immediately (before any React state update)
    if (onEnter.musicRef && onEnter.musicRef.current) {
      onEnter.musicRef.current.src = onEnter.musicSrc
    }
    // Instant transition — no delays or fade phases
    onEnter()
  }

  return (
    <div className={`letter-intro ${phase === 'fading' ? 'letter-intro--fading' : ''}`}>

      {/* Global baroque corners on the pink gold background */}
      <BaroqueCorner position="tl" />
      <BaroqueCorner position="tr" />
      <BaroqueCorner position="bl" />
      <BaroqueCorner position="br" />

      {/* Floating particles */}
      <div className="letter-particles" aria-hidden="true">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="letter-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${(Math.random() * 6).toFixed(2)}s`,
            animationDuration: `${(8 + Math.random() * 8).toFixed(2)}s`,
          }} />
        ))}
      </div>

      {/* The Letter Envelope Image */}
      <div className="letter-card image-envelope">
        
        {/* Top Text */}
        <p className="letter-bismillah" lang="ar" dir="rtl" style={{ marginTop: '40px' }}>
          بسم الله الرحمن الرحيم
        </p>

        {/* Invisible button over the stamp (center) */}
        <button
          className={`invisible-stamp-btn ${phase === 'stamping' ? 'invisible-stamp-btn--pressed' : ''}`}
          onClick={handleStampClick}
          aria-label="انقر لدخول موقع الزفاف"
        >
          {/* Optional: Add a subtle ripple/glow on click to simulate "opening" */}
          <div className="invisible-stamp-ripple" />
        </button>

        {/* Bottom Text */}
        <p className="letter-stamp-label" style={{ fontFamily: "'Lucida Calligraphy', 'Monotype Corsiva', cursive", marginBottom: '40px', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', textTransform: 'none', letterSpacing: '2px', color: '#8B0000' }}>
          Wedding Invitation
        </p>

      </div>{/* /letter-card */}
    </div>
  )
}

export default LetterIntro
