import React, { useMemo } from 'react'

const Particles = () => {
  const particles = useMemo(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      dur: `${6 + Math.random() * 10}s`,
      delay: `${Math.random() * 8}s`,
      drift: `${(Math.random() - 0.5) * 80}px`,
      maxOp: (0.3 + Math.random() * 0.5).toFixed(2),
      size: `${2 + Math.random() * 2}px`,
    })),
  [])

  return (
    <div className="particles" aria-hidden="true">
      {particles.map(p => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            '--dur': p.dur,
            '--delay': p.delay,
            '--drift': p.drift,
            '--max-op': p.maxOp,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  )
}

export default Particles
