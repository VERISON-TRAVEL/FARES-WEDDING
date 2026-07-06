import React, { useState, useEffect, useCallback, useRef } from 'react'
import FadeInSection from './FadeInSection'

const WEDDING_DATE = new Date('2026-07-31T00:00:00+01:00')
const pad = (n) => String(n).padStart(2, '0')

// SVG corner ornament for countdown units
const CornerOrnament = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M1 19 L1 1 L19 1" stroke="#C9A84C" strokeWidth="1" opacity="0.6" />
    <circle cx="1" cy="1" r="2" fill="#C9A84C" opacity="0.6" />
  </svg>
)

const CountdownUnit = ({ value, label, prev }) => {
  const flipping = value !== prev
  return (
    <div className="countdown-unit">
      <span className={`countdown-number${flipping ? ' flip' : ''}`}>
        {value}
      </span>
      <div className="unit-divider" aria-hidden="true" />
      <span className="countdown-label" lang="ar" dir="rtl">{label}</span>

    </div>
  )
}

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState(null)
  const [isCelebration, setIsCelebration] = useState(false)
  const prevRef = useRef({})

  const calculate = useCallback(() => {
    const diff = WEDDING_DATE - new Date()
    if (diff <= 0) { setIsCelebration(true); setTimeLeft(null); return }
    const s = Math.floor(diff / 1000)
    setTimeLeft({
      days:    Math.floor(s / 86400),
      hours:   Math.floor((s % 86400) / 3600),
      minutes: Math.floor((s % 3600) / 60),
      seconds: s % 60,
    })
  }, [])

  useEffect(() => {
    calculate()
    const id = setInterval(calculate, 1000)
    return () => clearInterval(id)
  }, [calculate])

  const units = timeLeft ? [
    { value: pad(timeLeft.days),    label: 'يوم',    en: 'Days'    },
    { value: pad(timeLeft.hours),   label: 'ساعات',  en: 'Hours'   },
    { value: pad(timeLeft.minutes), label: 'دقيقة',  en: 'Minutes' },
    { value: pad(timeLeft.seconds), label: 'ثواني',  en: 'Seconds' },
  ] : []

  // Track prev values for flip
  const prevValues = { ...prevRef.current }
  if (timeLeft) {
    prevRef.current = {
      days:    pad(timeLeft.days),
      hours:   pad(timeLeft.hours),
      minutes: pad(timeLeft.minutes),
      seconds: pad(timeLeft.seconds),
    }
  }

  return (
    <section className="countdown-section" id="countdown" aria-label="العد التنازلي للحفل">
      <FadeInSection>
        <div className="countdown-section-header">
          <p className="section-label">Countdown</p>
          <h2 className="section-heading" lang="ar" dir="rtl">العد التنازلي للفرح</h2>
          <div style={{ width: 0, height: '1px', background: 'var(--gold-grad)', margin: '16px auto', transition: 'width 1s ease', animationFillMode: 'both' }} className="section-underline" />
        </div>

        {isCelebration ? (
          <p className="countdown-celebration" lang="ar" dir="rtl" role="status">
            اليوم هو يوم الفرح
          </p>
        ) : (
          <div className="countdown-grid" role="timer" aria-label="العد التنازلي">
            {/* Corner ornaments */}
            <span style={{ position:'absolute', top:8, left:8 }}><CornerOrnament /></span>
            <span style={{ position:'absolute', top:8, right:8, transform:'scaleX(-1)' }}><CornerOrnament /></span>
            <span style={{ position:'absolute', bottom:8, left:8, transform:'scaleY(-1)' }}><CornerOrnament /></span>
            <span style={{ position:'absolute', bottom:8, right:8, transform:'scale(-1,-1)' }}><CornerOrnament /></span>
            
            {units.map((u) => (
              <CountdownUnit
                key={u.en}
                value={u.value}
                label={u.label}
                prev={prevValues[u.en.toLowerCase()]}
              />
            ))}
          </div>
        )}
      </FadeInSection>
    </section>
  )
}

export default CountdownSection
