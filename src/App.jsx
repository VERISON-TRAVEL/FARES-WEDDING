import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import InvitationSection from './components/InvitationSection'
import CountdownSection from './components/CountdownSection'
import CalendarSection from './components/CalendarSection'
import VenueSection from './components/VenueSection'
import WeddingGallery from './components/WeddingGallery'
import Footer from './components/Footer'
import Particles from './components/Particles'
import PageLoader from './components/PageLoader'
import LetterIntro from './components/LetterIntro'

const App = () => {
  const [loaded, setLoaded] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  // musicSrc is set once on stamp click — keeps the iframe alive with no interruptions
  const [musicSrc, setMusicSrc] = useState('')
  const musicRef = useRef(null)

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

  // Page loader — only start once the intro is gone
  useEffect(() => {
    if (showIntro) return
    const timer = setTimeout(() => setLoaded(true), 2200)
    return () => clearTimeout(timer)
  }, [showIntro])

  const handleIntroEnter = () => {
    window.scrollTo(0, 0)
    sessionStorage.setItem('weddingIntroDone', '1')
    setMusicSrc(MUSIC_URL) // also update state so tab-resume listener works
    setShowIntro(false)
  }
  // Attach ref + src as properties so LetterIntro can trigger music instantly on click
  const MUSIC_URL = 'https://www.youtube.com/embed/pwoCvZpoiBs?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1'
  handleIntroEnter.musicRef = musicRef
  handleIntroEnter.musicSrc = MUSIC_URL

  // Resume playback when the user returns to this tab
  useEffect(() => {
    const resumeMusic = () => {
      if (document.visibilityState === 'visible' && musicRef.current && musicSrc) {
        try {
          musicRef.current.contentWindow.postMessage(
            JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
            'https://www.youtube.com'
          )
        } catch (_) { }
      }
    }
    document.addEventListener('visibilitychange', resumeMusic)
    return () => document.removeEventListener('visibilitychange', resumeMusic)
  }, [musicSrc])



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

      {/* ── PRE-OPENING LETTER ── */}
      {showIntro && <LetterIntro onEnter={handleIntroEnter} />}

      {/* ── MAIN SITE (hidden behind intro) ── */}
      <div
        className="main-site-wrapper"
        style={{
          opacity: showIntro ? 0 : 1,
          pointerEvents: showIntro ? 'none' : 'auto',
          transition: 'none', /* instant reveal */
        }}
      >
        {/* Scroll Progress */}
        <div id="scroll-progress" />

        {/* Page Loader */}
        <PageLoader visible={!loaded && !showIntro} />

        {/* Background */}
        <div className="page-bg" aria-hidden="true" />

        {/* Gold Particles */}
        <Particles />

        {/* Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="wedding-app">
          <HeroSection />
          <InvitationSection />
          <WeddingGallery />
          <CountdownSection />
          <CalendarSection />
          <VenueSection />
          <Footer />
        </main>

        {/* Sticky Download Button */}
        <a
          href="/invitation.png"
          download="invitation-sana-fares.png"
          className="sticky-download"
          aria-label="تحميل الدعوة"
          onClick={handleRipple}
          style={{ position: 'fixed' }}
        >
          <span className="dl-icon" aria-hidden="true">⬇</span>
          <span lang="ar" dir="rtl">تحميل الدعوة</span>
        </a>

        {/* Background Music — persistent iframe, resumes when tab regains focus */}
        <iframe
          ref={musicRef}
          src={musicSrc}
          allow="autoplay"
          title="Wedding Background Music"
          aria-hidden="true"
          style={{
            position: 'fixed',
            top: '-9999px',
            left: '-9999px',
            width: '1px',
            height: '1px',
            opacity: 0,
            pointerEvents: 'none',
            border: 'none',
          }}
        />
      </div>
    </div>
  )
}

export default App
