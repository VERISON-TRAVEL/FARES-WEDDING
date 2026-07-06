import React from 'react'
import GoldDivider from './GoldDivider'

const Footer = () => (
  <footer className="footer">
    <GoldDivider icon="◆" />
    <p className="footer-blessing" lang="ar" dir="rtl">
      اللهم بارك لهما وبارك عليهما واجمع بينهما في خير
    </p>
    <div style={{ width: '60px', height: '1px', background: 'var(--gold-grad)', margin: '24px auto' }} aria-hidden="true" />
    <p className="footer-family" lang="ar" dir="rtl">
      مع تحيات عائلتي العروسين
    </p>
  </footer>
)

export default Footer
