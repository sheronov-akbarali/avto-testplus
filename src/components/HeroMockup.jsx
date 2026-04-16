import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

/* ================================================================
   1. ROAD NETWORK DATA
   ================================================================ */
const ROAD_PATHS = [
  { d: 'M 0 320 C 120 280 200 360 340 300 S 520 180 700 220', color: '#0ea5e9', dasharray: '7 7', width: 1.6 },
  { d: 'M 700 100 C 580 140 500 80 380 130 S 200 200 0 160',  color: '#22d3ee', dasharray: '7 7', width: 1.6 },
  { d: 'M 150 0 C 180 120 140 200 200 300 S 240 450 220 600', color: '#38bdf8', dasharray: '6 9', width: 1.4 },
  { d: 'M 450 0 C 420 100 480 180 440 280 S 400 400 430 600', color: '#0ea5e9', dasharray: '6 9', width: 1.4 },
  { d: 'M 0 500 C 150 470 250 520 380 480 S 560 420 700 460', color: '#06b6d4', dasharray: '7 7', width: 1.6 },
  { d: 'M 700 350 C 580 330 480 380 360 350 S 180 300 0 340', color: '#22d3ee', dasharray: '6 9', width: 1.4 },
]

const ROAD_NODES = [
  { cx: 200, cy: 220, color: '#0ea5e9' },
  { cx: 440, cy: 130, color: '#22d3ee' },
  { cx: 380, cy: 350, color: '#0ea5e9' },
  { cx: 150, cy: 480, color: '#06b6d4' },
  { cx: 560, cy: 460, color: '#22d3ee' },
]

/* ================================================================
   2. GLASSMORPHISM CARDS DATA
   ================================================================ */
const GLASS_CARDS = [
  {
    id: 'correct',
    icon: '✓',
    label: "To'g'ri!",
    i18nKey: 'badge_correct',
    sub: '1-savol',
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.16)',
    border: 'rgba(34,197,94,0.40)',
    glow: 'rgba(34,197,94,0.12)',
    pos: { left: '-22px', top: '18%' },
    floatDur: 3.2,
    delay: 0.8,
  },
  {
    id: 'score',
    icon: '🏆',
    label: '87% ball',
    i18nKey: null,
    sub: 'Imtihon natijasi',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.16)',
    border: 'rgba(245,158,11,0.40)',
    glow: 'rgba(245,158,11,0.12)',
    pos: { right: '-18px', top: '12%' },
    floatDur: 3.8,
    delay: 1.2,
  },
  {
    id: 'fast',
    icon: '⚡',
    label: 'Tez javob',
    i18nKey: 'badge_fast',
    sub: '2.4 soniya',
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.16)',
    border: 'rgba(14,165,233,0.40)',
    glow: 'rgba(14,165,233,0.12)',
    pos: { right: '-14px', bottom: '22%' },
    floatDur: 3.5,
    delay: 1.6,
  },
  {
    id: 'pass',
    icon: '🎓',
    label: 'Topshirildi!',
    i18nKey: null,
    sub: 'Tabriklaymiz',
    color: '#a78bfa',
    bg: 'rgba(139,92,246,0.16)',
    border: 'rgba(139,92,246,0.40)',
    glow: 'rgba(139,92,246,0.12)',
    pos: { left: '-18px', bottom: '16%' },
    floatDur: 4.0,
    delay: 2.0,
  },
]

/* ================================================================
   3. MOVING DOT — yo'l bo'ylab harakatlanadi
   SVG path.getTotalLength() + getPointAtLength() ishlatadi
   ================================================================ */
function MovingDot({ pathD, color, phaseOffset }) {
  const [pos, setPos] = useState({ x: 0, y: 0, ready: false })
  const pathRef  = useRef(null)
  const svgRef   = useRef(null)
  const rafRef   = useRef(null)
  const startRef = useRef(null)

  useEffect(() => {
    const ns    = 'http://www.w3.org/2000/svg'
    const svg   = document.createElementNS(ns, 'svg')
    const path  = document.createElementNS(ns, 'path')
    svg.style.cssText =
      'position:absolute;width:0;height:0;visibility:hidden;pointer-events:none'
    path.setAttribute('d', pathD)
    svg.appendChild(path)
    document.body.appendChild(svg)
    pathRef.current = path
    svgRef.current  = svg

    const SPEED = 0.055 // 1 sikl ~18 soniyada

    function tick(ts) {
      if (!startRef.current) startRef.current = ts
      const elapsed  = (ts - startRef.current) / 1000
      const total    = path.getTotalLength()
      const progress = ((elapsed * SPEED + phaseOffset) % 1 + 1) % 1
      const pt       = path.getPointAtLength(progress * total)
      setPos({ x: pt.x, y: pt.y, ready: true })
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      if (svgRef.current && document.body.contains(svgRef.current)) {
        document.body.removeChild(svgRef.current)
      }
    }
  }, [pathD, phaseOffset])

  if (!pos.ready) return null

  return (
    <circle
      cx={pos.x}
      cy={pos.y}
      r="3.5"
      fill={color}
      opacity="0.92"
      style={{ filter: `drop-shadow(0 0 5px ${color})` }}
    />
  )
}

/* ================================================================
   4. NEON ROAD CANVAS — SVG background
   ================================================================ */
function NeonRoadCanvas() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: '-60px',
        zIndex: 0,
        borderRadius: '32px',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <svg
        viewBox="0 0 700 600"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <filter id="neon-glow-r" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Yo'l chiziqlari — chizilish + pulse animatsiyasi */}
        <g filter="url(#neon-glow-r)">
          {ROAD_PATHS.map((rp, i) => (
            <motion.path
              key={i}
              d={rp.d}
              stroke={rp.color}
              strokeWidth={rp.width}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={rp.dasharray}
              pathLength={1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: [0, 0.75, 0.42, 0.78, 0.42],
              }}
              transition={{
                pathLength: {
                  duration: 2.2,
                  delay: i * 0.26,
                  ease: 'easeInOut',
                },
                opacity: {
                  duration: 4,
                  delay: i * 0.36,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatType: 'mirror',
                },
              }}
            />
          ))}
        </g>

        {/* Kesishma nuqtalari — kengayib torayib turadi */}
        {ROAD_NODES.map((n, i) => (
          <g key={i}>
            <motion.circle
              cx={n.cx}
              cy={n.cy}
              r={8}
              fill={n.color}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.85, 1], opacity: [0.18, 0.65, 0.18] }}
              transition={{
                duration: 2.8,
                delay: i * 0.6 + 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            {/* Markaziy qattiq nuqta */}
            <circle
              cx={n.cx}
              cy={n.cy}
              r={3}
              fill={n.color}
              opacity={0.92}
              style={{ filter: `drop-shadow(0 0 4px ${n.color})` }}
            />
          </g>
        ))}

        {/* Harakatlanuvchi nuqtalar — har yo'lda bitta */}
        {ROAD_PATHS.map((rp, i) => (
          <MovingDot
            key={i}
            pathD={rp.d}
            color={rp.color}
            phaseOffset={(i * 0.17) % 1}
          />
        ))}
      </svg>
    </div>
  )
}

/* ================================================================
   5. AMBIENT GLOW
   ================================================================ */
function AmbientGlow() {
  return (
    <motion.div
      aria-hidden="true"
      animate={{ scale: [1, 1.18, 1], opacity: [0.42, 0.85, 0.42] }}
      transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(14,165,233,0.22), transparent 70%)',
        borderRadius: '50%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  )
}

/* ================================================================
   6. GLASSMORPHISM FLOATING CARD
   ================================================================ */
function GlassCard({ card }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.55, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: card.delay,
        duration: 0.55,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      style={{ position: 'absolute', zIndex: 20, ...card.pos }}
    >
      {/* Levitate — chiqib bo'lgandan keyin uzluksiz yuqori-pastga */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: card.floatDur,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: card.delay * 0.25,
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '9px',
          padding: '9px 15px',
          borderRadius: '14px',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          background: card.bg,
          border: `1px solid ${card.border}`,
          boxShadow: `0 4px 22px ${card.glow}, 0 0 0 1px ${card.border}`,
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-body, "Poppins", system-ui, sans-serif)',
          userSelect: 'none',
          cursor: 'default',
        }}
      >
        {/* Icon */}
        <div
          style={{
            fontSize: '17px',
            lineHeight: 1,
            flexShrink: 0,
            filter: `drop-shadow(0 0 7px ${card.color})`,
          }}
        >
          {card.icon}
        </div>

        {/* Text */}
        <div>
          {/* data-i18n atributi — script.js applyLanguage() ishlatadi */}
          <div
            data-i18n={card.i18nKey || undefined}
            style={{ fontSize: '12px', fontWeight: 700, color: card.color, lineHeight: 1.25 }}
          >
            {card.label}
          </div>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.52)', marginTop: '1px' }}>
            {card.sub}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ================================================================
   7. PHONE FRAME
   src="./img/image.png" va className — o'zgarmagan
   ================================================================ */
function PhoneFrame() {
  return (
    <motion.div
      style={{ position: 'relative', zIndex: 10 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
          {/*
            ┌─────────────────────────────────────────────┐
            │  RASMGA TEGMADIK                            │
            │  src="./img/image.png"  — o'zgarmagan       │
            │  className="hero-phone-screenshot" — saqlan │
            └─────────────────────────────────────────────┘
          */}
          <img
            src="/img/image.png"
            alt="AvtoTest Plus App Screenshot"
            className="hero-phone-screenshot"
          />
        </div>
        <div className="phone-home-bar" />
      </div>
    </motion.div>
  )
}

/* ================================================================
   8. HERO MOCKUP — asosiy export
   id="hero-mockup-root" diviga mount bo'ladi (src/main.jsx orqali)
   ================================================================ */
export default function HeroMockup() {
  /**
   * script.js dagi applyLanguage() funksiyasi DOM da
   * data-i18n atributlarini qidiradi.
   * React render bo'lgandan keyin bu atributlar DOM da bo'ladi,
   * shuning uchun language switcher glassmorphism
   * kartalaridagi matnlarni ham to'g'ri tilga o'giradi.
   *
   * Qo'shimcha: sahifa yuklanganda script.js ning
   * initHeroReveal() funksiyasi .hero-mockup.reveal elementiga
   * 'visible' klassini qo'shadi. Bu klass #hero-mockup-root
   * ning ota elementi (.hero-mockup) ga qo'shilgani uchun
   * CSS reveal animatsiyasi avvalgidek ishlayveradi.
   */
  useEffect(() => {
    // script.js allaqachon yuklangan bo'lsa, language ni qayta apply qilamiz
    const saved = localStorage.getItem('avtotest_lang') || 'uz'
    // applyLanguage global scope da (script.js dan)
    if (typeof window.applyLanguage === 'function') {
      window.applyLanguage(saved)
    }
  }, [])

  return (
    <>
      <NeonRoadCanvas />
      <AmbientGlow />
      <PhoneFrame />
      {GLASS_CARDS.map((card) => (
        <GlassCard key={card.id} card={card} />
      ))}
    </>
  )
}
