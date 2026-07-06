import React, { useMemo } from 'react'
const FloatingPetals = () => {
  const petals = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i, size: Math.random() * 15 + 10, left: Math.random() * 100,
      delay: Math.random() * 15, duration: Math.random() * 10 + 15,
      drift: (Math.random() - 0.5) * 150
    }))
  }, [])
  return (
    <div className="petals-container" aria-hidden="true">
      {petals.map(p => (
        <div key={p.id} className="petal" style={{
          width: p.size, height: p.size * 0.8, left: `${p.left}%`,
          animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s`, '--drift': `${p.drift}px`
        }} />
      ))}
    </div>
  )
}
export default FloatingPetals
