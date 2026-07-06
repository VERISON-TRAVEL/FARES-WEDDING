import React, { useState } from 'react'
import FadeInSection from './FadeInSection'
import GoldDivider from './GoldDivider'

const GALLERY_IMAGES = [
  { id: 1, src: '/gallery-1.png', alt: 'Wedding reception ballroom', side: 'right' },
  { id: 2, src: '/gallery-2.png', alt: 'Wedding rings on bouquet',   side: 'left'  },
  { id: 3, src: '/gallery-3.png', alt: 'Beach sunset couple',        side: 'right' },
  { id: 4, src: '/gallery-4.png', alt: 'Pink rose bouquet',          side: 'left'  },
]

const WeddingGallery = () => {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section className="gallery-section" id="gallery" aria-label="معرض صور الزفاف">
      <FadeInSection>
        <div className="gallery-section-header">
          <p className="section-label">Gallery</p>
          <h2 className="section-heading" lang="ar" dir="rtl">لحظات الفرح</h2>
          <GoldDivider icon="◆" />
        </div>

        <div className="gallery-alt-list">
          {GALLERY_IMAGES.map((img) => (
            <div key={img.id} className={`gallery-alt-row gallery-alt-row--${img.side}`}>
              <div
                className="gallery-alt-item"
                onClick={() => setLightbox(img)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLightbox(img)}
                aria-label="عرض الصورة بالحجم الكامل"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="gallery-alt-img"
                />
              </div>
            </div>
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
          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="إغلاق"
          >
            ✕
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default WeddingGallery
