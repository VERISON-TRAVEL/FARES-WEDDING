import React, { useRef, useState } from 'react'
import BaroqueCorner from './BaroqueCorner'

/**
 * LetterIntro — Baroque square decorated letter with red wax stamp.
 * The stamp is both decoration and the "enter" button.
 * On click: stamp pulses → envelope zooms → main page appears.
 */

const LetterIntro = ({ onEnter }) => {
  const [phase, setPhase] = useState('visible') // visible | stamping | zooming
  const envelopeRef = useRef(null)

  // Play the real envelope-open sound
  const playEnvelopeSound = () => {
    try {
      const audio = new Audio('/envelope-open.mp3')
      audio.volume = 0.8
      audio.play().catch(() => {})
    } catch (_) {}
  }

  const handleStampClick = () => {
    if (phase !== 'visible') return
    setPhase('stamping')
    playEnvelopeSound()
    // Trigger music immediately
    if (onEnter.musicRef && onEnter.musicRef.current) {
      onEnter.musicRef.current.src = onEnter.musicSrc
    }
    // Zoom envelope, then reveal main page — total ~800ms
    setTimeout(() => {
      setPhase('zooming')
      setTimeout(() => {
        onEnter()
      }, 700)
    }, 80)
  }

  return (
    <div className={`letter-intro ${phase === 'zooming' ? 'letter-intro--zooming' : ''}`}>

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
      <div ref={envelopeRef} className={`letter-card image-envelope${phase === 'zooming' ? ' envelope--zooming' : ''}`}>

        {/* Top Text */}
        <p className="letter-bismillah" lang="ar" dir="rtl" style={{ marginTop: '18px' }}>
          بسم الله الرحمن الرحيم
        </p>

        {/* Gold-glowing stamp button */}
        <button
          className={`invisible-stamp-btn stamp-glow${phase === 'stamping' ? ' invisible-stamp-btn--pressed' : ''}`}
          onClick={handleStampClick}
          aria-label="انقر لدخول موقع الزفاف"
        >
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
