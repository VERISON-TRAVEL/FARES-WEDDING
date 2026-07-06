import React from 'react'

const PageLoader = ({ visible }) => (
  <div className={`page-loader${visible ? '' : ' hidden'}`} aria-hidden="true">
    <div className="circular-loader-container" style={{ animation: 'spin 8s linear infinite' }}>
      <svg viewBox="0 0 100 100" width="200" height="200">
        <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
        <text>
          <textPath href="#circlePath" startOffset="0%" style={{ fontSize: '11px', fill: '#C8956C', letterSpacing: '1px', fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>
            invitation for the wedding of SANA and FARES • 
          </textPath>
        </text>
      </svg>
    </div>
    <style>{`
      @keyframes spin { 100% { transform: rotate(360deg); } }
    `}</style>
  </div>
)

export default PageLoader
