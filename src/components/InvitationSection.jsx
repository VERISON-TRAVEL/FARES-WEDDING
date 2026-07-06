import React from 'react'
import FadeInSection from './FadeInSection'
import GoldDivider from './GoldDivider'

// Ornate SVG corner flourish
const CornerFlourish = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2 48 L2 2 L48 2" stroke="#C9A84C" strokeWidth="1" opacity="0.7" />
    <path d="M2 36 Q10 10 36 2" stroke="#C9A84C" strokeWidth="0.6" opacity="0.5" fill="none" />
    <circle cx="2" cy="2" r="3" fill="#C9A84C" opacity="0.7" />
    <circle cx="8" cy="8" r="1.5" fill="#C9A84C" opacity="0.5" />
    <polygon points="2,22 5,18 8,22 5,26" fill="#C9A84C" opacity="0.5" />
    <polygon points="22,2 18,5 22,8 26,5" fill="#C9A84C" opacity="0.5" />
  </svg>
)

// SVG linked rings at top of card
const RingsSVG = () => (
  <svg className="card-rings" viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="ringGold" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#C9A84C" />
        <stop offset="50%" stopColor="#F5E6A3" />
        <stop offset="100%" stopColor="#C9A84C" />
      </linearGradient>
    </defs>
    <circle cx="28" cy="20" r="16" fill="none" stroke="url(#ringGold)" strokeWidth="2.5" />
    <circle cx="52" cy="20" r="16" fill="none" stroke="url(#ringGold)" strokeWidth="2.5" />
  </svg>
)

const InvitationSection = () => (
  <section className="invitation-section" id="invitation" aria-label="نص الدعوة">
    <FadeInSection>
      <div className="invitation-section-header">
        <p className="section-label">Invitation</p>
        <h2 className="section-heading" lang="ar" dir="rtl">الدعوة</h2>
        <GoldDivider icon="◆" />
      </div>

      <div className="invitation-card" role="article">
        {/* Corner flourishes */}
        <span className="card-corner card-corner--tl"><CornerFlourish /></span>
        <span className="card-corner card-corner--tr"><CornerFlourish /></span>
        <span className="card-corner card-corner--bl"><CornerFlourish /></span>
        <span className="card-corner card-corner--br"><CornerFlourish /></span>

        {/* Rings icon */}
        <RingsSVG />

        <div className="invitation-text" lang="ar" dir="rtl">
          <span className="bismillah-line">بسم الله الرحمن الرحيم</span>

          <GoldDivider icon="◆" />

          <p>
            ﴿وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً﴾
          </p>

          <br />

          <p>
            بكل معاني المحبة والامتنان، وبقلوبٍ يملؤها الفرح والسرور،<br/>
            يتشرف <span className="names-highlight">سناء</span> و <span className="names-highlight">فارس</span> بدعوتكم الكريمة لتشريفهما بحضور حفل زفافهما، ومشاركتهما أجمل لحظات العمر، احتفاءً ببداية رحلةٍ جديدة عنوانها المودة والوفاء.
          </p>

          <br />

          <p>
            إن حضوركم شرفٌ لنا، وفرحتنا تكتمل بوجودكم، لتبقى هذه المناسبة ذكرى جميلة تزداد رونقًا بمشاركتكم.
          </p>

          <br />

          <p>
            نسأل الله أن يديم الأفراح، ويجمعنا دائمًا على الخير والمحبة.
          </p>
        </div>

        <GoldDivider icon="◆" />
      </div>
    </FadeInSection>
  </section>
)

export default InvitationSection
