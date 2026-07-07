import React from 'react'
import FadeInSection from './FadeInSection'
import GoldDivider from './GoldDivider'
import BaroqueCorner from './BaroqueCorner'

const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.047648878501!2d3.3260728758336344!3d36.697392872276716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e5b775651292f%3A0xd4ed1955d5c39987!2sSalle%20des%20f%C3%AAtes%20Sofia!5e0!3m2!1sen!2ssa!4v1783350240692!5m2!1sen!2ssa'

const MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/search/?api=1&query=salle+des+fetes+sofia+ouled+hedadj'

const VenueSection = () => (
  <section className="venue-section" id="venue" aria-label="مكان الحفل">
    {/* Baroque corner decorations */}
    <BaroqueCorner position="tl" />
    <BaroqueCorner position="tr" />
    <BaroqueCorner position="bl" />
    <BaroqueCorner position="br" />
    <FadeInSection>
      <div className="venue-section-header">
        <p className="section-label">Location</p>
        <h2 className="section-heading" lang="ar" dir="rtl">مكان الحفل</h2>
        <GoldDivider icon="◆" />
        <p style={{
          fontFamily: 'var(--font-ar)',
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: 'var(--text-muted)',
          letterSpacing: '2px',
          marginTop: '8px',
        }} lang="ar" dir="rtl">
          نتشرف بحضوركم الكريم في المكان التالي
        </p>
      </div>

      {/* Venue card */}
      <div className="venue-card">
        <span className="venue-name" dir="ltr" style={{ fontWeight: '700', letterSpacing: '3px' }}>Salle des Fêtes Sofia</span>
        <div style={{ width: '60px', height: '1px', background: 'var(--gold-grad)', margin: '20px auto' }} aria-hidden="true" />
        <p className="venue-address" dir="ltr">Ouled Hedadj, Algeria</p>
      </div>

      {/* Map with ornate frame */}
      <div className="map-wrapper">
        <iframe
          src={MAPS_EMBED_URL}
          title="موقع قاعة الأفراح صوفيا على الخريطة"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="خريطة تفاعلية"
        />
      </div>

      {/* Directions button */}
      <a
        href={MAPS_DIRECTIONS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="map-btn"
        aria-label="فتح الخريطة في تطبيق جوجل للخرائط"
      >
        <span aria-hidden="true">🗺</span>
        <span lang="ar" dir="rtl">فتح الخريطة (GPS)</span>
      </a>

      <GoldDivider icon="◆" />
    </FadeInSection>
  </section>
)

export default VenueSection
