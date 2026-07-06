import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import InvitationSection from './components/InvitationSection'
import CountdownSection from './components/CountdownSection'
import VenueSection from './components/VenueSection'
import WeddingGallery from './components/WeddingGallery'
import Footer from './components/Footer'
import Particles from './components/Particles'
import PageLoader from './components/PageLoader'

const App = () => {
  const [loaded, setLoaded] = useState(false)

  // Scroll progress bar
  useEffect(() => {
    const bar = document.getElementById('scroll-progress')
    const onScroll = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (bar) bar.style.width = `${(scrolled / total) * 100}%`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Page loader
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2200)
    return () => clearTimeout(timer)
  }, [])

  // Download button ripple effect
  const handleRipple = (e) => {
    const btn = e.currentTarget
    const circle = document.createElement('span')
    circle.classList.add('ripple')
    const rect = btn.getBoundingClientRect()
    circle.style.width = circle.style.height = `${Math.max(rect.width, rect.height)}px`
    circle.style.left = `${e.clientX - rect.left - rect.width / 2}px`
    circle.style.top = `${e.clientY - rect.top - rect.height / 2}px`
    btn.appendChild(circle)
    setTimeout(() => circle.remove(), 600)
  }

  return (
    <div lang="ar" dir="rtl">
      {/* Scroll Progress */}
      <div id="scroll-progress" />

      {/* Page Loader */}
      <PageLoader visible={!loaded} />

      {/* Background */}
      <div className="page-bg" aria-hidden="true" />

      {/* Gold Particles */}
      <Particles />

      {/* Navigation */}
      <Navbar />

      {/* Page Content */}
      <main className="wedding-app">
        <HeroSection />
        <CountdownSection />
        <InvitationSection />
        <WeddingGallery />
        <VenueSection />
        <Footer />
      </main>

      {/* Sticky Download Button */}
      <a
        href="/invitation.png"
        download="invitation-fifi-fares.png"
        className="sticky-download"
        aria-label="تحميل الدعوة"
        onClick={handleRipple}
        style={{ position: 'fixed' }}
      >
        <span className="dl-icon" aria-hidden="true">⬇</span>
        <span lang="ar" dir="rtl">تحميل الدعوة</span>
      </a>
    </div>
  )
}

export default App
