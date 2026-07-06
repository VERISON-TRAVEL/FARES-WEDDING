import React from 'react'

const GoldDivider = ({ icon = '◆' }) => (
  <div className="gold-divider" aria-hidden="true">
    <span className="gold-divider-icon">{icon}</span>
  </div>
)

export default GoldDivider
