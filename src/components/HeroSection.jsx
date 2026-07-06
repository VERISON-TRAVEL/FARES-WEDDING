import React from 'react'

// Ornate gold SVG wreath for hero
const WreathSVG = () => (
  <svg
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
    className="hero-wreath-svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#C9A84C" />
        <stop offset="40%"  stopColor="#F5E6A3" />
        <stop offset="70%"  stopColor="#C9A84C" />
        <stop offset="100%" stopColor="#8B6914" />
      </linearGradient>
    </defs>

    {/* Main outer circle */}
    <circle cx="250" cy="250" r="230" fill="none" stroke="url(#goldGrad)" strokeWidth="0.8" opacity="0.4" />
    <circle cx="250" cy="250" r="220" fill="none" stroke="url(#goldGrad)" strokeWidth="0.4" opacity="0.3" />

    {/* Decorative leaf clusters — 12 positions around the circle */}
    {Array.from({ length: 12 }, (_, i) => {
      const angle = (i * 30 * Math.PI) / 180
      const r = 225
      const x = 250 + r * Math.cos(angle)
      const y = 250 + r * Math.sin(angle)
      return (
        <g key={i} transform={`translate(${x},${y}) rotate(${i * 30 + 90})`}>
          {/* Small petal */}
          <ellipse cx="0" cy="-8" rx="4" ry="9" fill="url(#goldGrad)" opacity="0.6" />
          <ellipse cx="-5" cy="-4" rx="3" ry="7" fill="url(#goldGrad)" opacity="0.4" transform="rotate(-30)" />
          <ellipse cx="5" cy="-4" rx="3" ry="7" fill="url(#goldGrad)" opacity="0.4" transform="rotate(30)" />
          {/* Dot center */}
          <circle cx="0" cy="0" r="2" fill="url(#goldGrad)" opacity="0.7" />
        </g>
      )
    })}

    {/* Inner decorative ring */}
    <circle cx="250" cy="250" r="195" fill="none" stroke="url(#goldGrad)" strokeWidth="0.6" strokeDasharray="4 8" opacity="0.4" />

    {/* Four corner diamond ornaments */}
    {[0, 90, 180, 270].map(deg => {
      const rad = (deg * Math.PI) / 180
      const x = 250 + 196 * Math.cos(rad)
      const y = 250 + 196 * Math.sin(rad)
      return (
        <g key={deg} transform={`translate(${x},${y}) rotate(${deg})`}>
          <polygon points="0,-6 4,0 0,6 -4,0" fill="url(#goldGrad)" opacity="0.8" />
        </g>
      )
    })}
  </svg>
)

const HeroSection = () => (
  <section className="hero" id="hero">
    {/* Blurred rose background */}
    <div className="hero-rose-bg" aria-hidden="true" />

    <div className="hero-content">
      {/* Animated gold line */}
      <div className="hero-line-top" aria-hidden="true" />

      {/* Bismillah */}
      <p className="bismillah" lang="ar" dir="rtl">بسم الله الرحمن الرحيم</p>

      {/* Wreath with names inside */}
      <div className="hero-wreath-wrapper" aria-label="سناء وفارس">
        <WreathSVG />
        <h1 className="couple-names" lang="ar" dir="rtl">
          سناء <span className="ampersand">&amp;</span> فارس
        </h1>
      </div>

      {/* Divider */}
      <div className="hero-divider" aria-hidden="true" />

      {/* Subtitles */}
      <p className="hero-subtitle" lang="ar" dir="rtl">دعوة حفل زواج</p>
      <p className="hero-subtitle-en">Wedding Celebration</p>

      {/* Date */}
      <div className="hero-date-badge" lang="ar" dir="rtl">
        الجمعة ✦ 31 جويلية 2026
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="scroll-indicator" aria-hidden="true">
      <div className="scroll-chevron" />
    </div>
  </section>
)

export default HeroSection
