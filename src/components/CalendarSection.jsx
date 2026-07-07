import React from 'react'
import FadeInSection from './FadeInSection'

const CalendarSection = () => {
  // July 1, 2026 is a Wednesday (index 3 in Su=0 week)
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  const blanks = Array.from({ length: 3 }) // 3 empty cells before Wed
  const dates = Array.from({ length: 31 }, (_, i) => i + 1)

  return (
    <section className="calendar-section" id="calendar" aria-label="تقويم الزفاف">
      <FadeInSection>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p className="section-label">Save The Date</p>
          <h2 className="section-heading" lang="ar" dir="rtl">جويلية 2026</h2>
        </div>

        {/* Calendar card with baroque corners */}
        <div className="calendar-card">

          {/* ── Baroque SVG corners ── */}
          {/* Top-left */}
          <svg className="cal-corner cal-corner--tl" viewBox="0 0 60 60" aria-hidden="true" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.3))' }}>
            <path fill="none" stroke="#C9A84C" strokeWidth="2.5" d="M4,4 L24,4 Q34,4 34,14 L34,28 Q34,38 44,38 L58,38"/>
            <circle cx="4"  cy="4"  r="4" fill="#C9A84C"/>
            <circle cx="58" cy="38" r="3" fill="#C9A84C"/>
            <circle cx="14" cy="4"  r="2" fill="#C9A84C" />
            <circle cx="34" cy="48" r="2" fill="#C9A84C" />
            <path fill="#C9A84C" d="M4,4 Q7,0 10,4 Q7,8 4,4 Z"/>
          </svg>
          {/* Top-right */}
          <svg className="cal-corner cal-corner--tr" viewBox="0 0 60 60" aria-hidden="true" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.3))' }}>
            <path fill="none" stroke="#C9A84C" strokeWidth="2.5" d="M56,4 L36,4 Q26,4 26,14 L26,28 Q26,38 16,38 L2,38"/>
            <circle cx="56" cy="4"  r="4" fill="#C9A84C"/>
            <circle cx="2"  cy="38" r="3" fill="#C9A84C"/>
            <circle cx="46" cy="4"  r="2" fill="#C9A84C" />
            <circle cx="26" cy="48" r="2" fill="#C9A84C" />
            <path fill="#C9A84C" d="M56,4 Q59,0 62,4 Q59,8 56,4 Z"/>
          </svg>
          {/* Bottom-left */}
          <svg className="cal-corner cal-corner--bl" viewBox="0 0 60 60" aria-hidden="true" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.3))' }}>
            <path fill="none" stroke="#C9A84C" strokeWidth="2.5" d="M4,56 L24,56 Q34,56 34,46 L34,32 Q34,22 44,22 L58,22"/>
            <circle cx="4"  cy="56" r="4" fill="#C9A84C"/>
            <circle cx="58" cy="22" r="3" fill="#C9A84C"/>
            <path fill="#C9A84C" d="M4,56 Q7,60 10,56 Q7,52 4,56 Z"/>
          </svg>
          {/* Bottom-right */}
          <svg className="cal-corner cal-corner--br" viewBox="0 0 60 60" aria-hidden="true" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.3))' }}>
            <path fill="none" stroke="#C9A84C" strokeWidth="2.5" d="M56,56 L36,56 Q26,56 26,46 L26,32 Q26,22 16,22 L2,22"/>
            <circle cx="56" cy="56" r="4" fill="#C9A84C"/>
            <circle cx="2"  cy="22" r="3" fill="#C9A84C"/>
            <path fill="#C9A84C" d="M56,56 Q59,60 62,56 Q59,52 56,56 Z"/>
          </svg>

          {/* Month header bar */}
          <div className="calendar-month-bar">
            <span className="calendar-month-text">JULY 2026</span>
          </div>

          {/* Grid */}
          <div className="calendar-grid">
            {days.map(d => (
              <div key={d} className="calendar-day-header">{d}</div>
            ))}
            {blanks.map((_, i) => (
              <div key={`b-${i}`} className="calendar-cell" />
            ))}
            {dates.map(date => (
              <div
                key={date}
                className={`calendar-cell${date === 31 ? ' highlighted-date' : ''}`}
              >
                {date}
                {date === 31 && <span className="cal-heart">♥</span>}
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="calendar-footer-note" lang="ar" dir="rtl">
            31 جويلية 2026 — يوم الفرح
          </p>
        </div>
      </FadeInSection>
    </section>
  )
}

export default CalendarSection
