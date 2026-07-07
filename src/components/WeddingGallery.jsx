import React, { useState, useEffect, useRef, useCallback } from 'react'
import FadeInSection from './FadeInSection'
import GoldDivider from './GoldDivider'
import BaroqueCorner from './BaroqueCorner'

const GALLERY_IMAGES = [
  { id: 1, src: '/gallery-1.png', alt: 'Wedding reception ballroom' },
  { id: 2, src: '/gallery-2.png', alt: 'Wedding rings on bouquet' },
  { id: 3, src: '/gallery-3.png', alt: 'Beach sunset couple' },
  { id: 4, src: '/gallery-4.png', alt: 'Wedding Salle' },
  { id: 5, src: '/gallery-5.png', alt: 'Wedding Sallae 2' },
  { id: 6, src: '/gallery-6.png', alt: 'The Couple' },
]

const WeddingGallery = () => {
  const total = GALLERY_IMAGES.length
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState(null)
  const timerRef = useRef(null)
  const dragStartX = useRef(null)

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total])
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total])

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(next, 2000)
  }, [next])

  useEffect(() => {
    timerRef.current = setInterval(next, 2000)
    return () => clearInterval(timerRef.current)
  }, [next])

  const goTo = (i) => { setCurrent(i); resetTimer() }
  const handlePrev = () => { prev(); resetTimer() }
  const handleNext = () => { next(); resetTimer() }

  // Drag / swipe
  const onDragStart = (e) => { dragStartX.current = e.clientX ?? e.touches?.[0]?.clientX }
  const onDragEnd = (e) => {
    if (dragStartX.current == null) return
    const end = e.clientX ?? e.changedTouches?.[0]?.clientX
    const delta = dragStartX.current - end
    if (Math.abs(delta) > 40) { delta > 0 ? handleNext() : handlePrev() }
    dragStartX.current = null
  }

  const getOffset = (i) => {
    let d = i - current
    if (d > total / 2) d -= total
    if (d < -total / 2) d += total
    return d
  }

  return (
    <section className="gallery-section" id="gallery" aria-label="معرض صور الزفاف">
      {/* Baroque corner decorations */}
      <BaroqueCorner position="tl" />
      <BaroqueCorner position="tr" />
      <BaroqueCorner position="bl" />
      <BaroqueCorner position="br" />
      <FadeInSection>
        <div className="gallery-section-header">
          <p className="section-label">Gallery</p>
          <h2 className="section-heading" lang="ar" dir="rtl">لحظات الفرح</h2>
          <GoldDivider icon="◆" />
        </div>

        {/* ── INFINITE CAROUSEL ── */}
        <div
          className="carousel-container"
          aria-label="صور الزفاف"
        >
          <div
            className="carousel-stage"
            onMouseDown={onDragStart}
            onMouseUp={onDragEnd}
            onTouchStart={onDragStart}
            onTouchEnd={onDragEnd}
          >
            {GALLERY_IMAGES.map((img, i) => {
              const off = getOffset(i)
              const isCenter = off === 0
              const isSide = Math.abs(off) === 1
              const isHidden = Math.abs(off) > 1
              const slideStyle = {
                transform: `translateX(${off * 105}%) scale(${isCenter ? 1 : 0.82})`,
                filter: isCenter ? 'blur(0px) brightness(1)' : isSide ? 'blur(3px) brightness(0.7)' : 'blur(6px) brightness(0.5)',
                zIndex: isCenter ? 5 : isSide ? 3 : 1,
                opacity: isHidden ? 0 : 1,
                pointerEvents: isHidden ? 'none' : 'auto',
              }
              return (
                <div
                  key={img.id}
                  className="carousel-slide"
                  style={slideStyle}
                  onClick={() => isCenter ? setLightbox(img) : goTo(i)}
                  role="button"
                  tabIndex={isCenter ? 0 : -1}
                  aria-label={isCenter ? `عرض الصورة: ${img.alt}` : img.alt}
                  onKeyDown={e => e.key === 'Enter' && isCenter && setLightbox(img)}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" draggable="false" />
                  {isCenter && <div className="carousel-zoom-hint" aria-hidden="true">🔍</div>}
                </div>
              )
            })}

            {/* Nav Buttons */}
            <button className="carousel-btn carousel-btn--prev" onClick={handlePrev} aria-label="السابق">‹</button>
            <button className="carousel-btn carousel-btn--next" onClick={handleNext} aria-label="التالي">›</button>
          </div>
        </div>{/* /carousel-container */}

        {/* Dots */}
        <div className="carousel-dots" role="tablist">
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={img.id}
              className={`carousel-dot ${i === current ? 'carousel-dot--active' : ''}`}
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`الصورة ${i + 1}`}
            />
          ))}
        </div>

        <div style={{ marginTop: '80px' }}>
          <GoldDivider icon="◆" />
        </div>
      </FadeInSection>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-backdrop"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="عرض مكبّر"
        >
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="إغلاق">✕</button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="lightbox-img"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default WeddingGallery
