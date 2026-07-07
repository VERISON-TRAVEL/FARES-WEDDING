import React from 'react'

/**
 * BaroqueCorner — inline SVG gold ornamental corner flourish.
 * Made BOLD and STRONG per user request.
 */
const BaroqueCorner = ({ position = 'tl' }) => {
  const transformMap = {
    tl: undefined,
    tr: 'scaleX(-1)',
    bl: 'scaleY(-1)',
    br: 'scale(-1,-1)',
  }
  // Pushed further into the corners to accommodate larger size
  const posMap = {
    tl: { top: -4,    left: -4   },
    tr: { top: -4,    right: -4  },
    bl: { bottom: -4, left: -4   },
    br: { bottom: -4, right: -4  },
  }
  return (
    <svg
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: 100, /* Larger size */
        height: 100,
        pointerEvents: 'none',
        zIndex: 5,
        opacity: 1, /* Fully visible */
        filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.3)) drop-shadow(0px 0px 8px rgba(201, 168, 76, 0.4))', /* Gold & dark glow */
        transform: transformMap[position],
        ...posMap[position],
      }}
    >
      {/* Outer L lines - much thicker */}
      <path fill="none" stroke="#C9A84C" strokeWidth="2.5"
        d="M5,5 L32,5 Q44,5 44,17 L44,44" />
      {/* Inner curve */}
      <path fill="none" stroke="#C9A84C" strokeWidth="1.5"
        d="M5,15 L22,15 Q34,15 34,27 L34,44" />
      {/* Corner dot - larger */}
      <circle cx="5" cy="5" r="4.5" fill="#C9A84C" />
      {/* Mid diamonds - fully opaque */}
      <polygon points="5,32 9,27 13,32 9,37" fill="#C9A84C" />
      <polygon points="32,5 37,9 32,13 27,9" fill="#C9A84C" />
      {/* Small accent dots */}
      <circle cx="18" cy="5" r="2.5" fill="#C9A84C" />
      <circle cx="5"  cy="18" r="2.5" fill="#C9A84C" />
      {/* Heavy Leaf curl */}
      <path fill="#C9A84C"
        d="M5,5 Q12,-2 18,5 Q12,12 5,5 Z" />
    </svg>
  )
}

export default BaroqueCorner
