import { ArrowDown } from 'lucide-react'
import Button from '../ui/Button'
import heroImage from '../../utils/hero-image.jpg'

const HERO_IMAGE = heroImage

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-charcoal"
      style={{
        backgroundImage: `url(${HERO_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/65" />

      {/* Content */}
      <div className="relative z-10 container-narrow w-full pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            className="text-xs font-sans uppercase tracking-[0.25em] text-cream/60 mb-6"
            style={{ animation: 'fadeUp 0.6s ease forwards' }}
          >
            International · Bilingual · LatAm
          </p>

          {/* Name */}
          <p
            className="font-serif text-lg md:text-xl text-cream/90 font-normal tracking-wide mb-3"
            style={{ animation: 'fadeUp 0.8s ease 80ms forwards', opacity: 0 }}
          >
            Adriana Acevedo
          </p>

          {/* Headline */}
          <h1
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream font-medium leading-[1.05] mb-8"
            style={{ animation: 'fadeUp 0.8s ease 200ms forwards', opacity: 0 }}
          >
            International Business
            <br />
            <span className="italic font-normal text-cream/80">Administrator</span>
            {' & CMS'}
            <br />
            Operations Specialist
          </h1>

          {/* Sub-headline */}
          <p
            className="font-sans text-base md:text-lg text-cream/70 leading-relaxed max-w-xl mb-12"
            style={{ animation: 'fadeUp 0.8s ease 350ms forwards', opacity: 0 }}
          >
            Bridging the gap between strategic business operations and digital execution.
            Bilingual (EN/ES) expert based in LatAm, focused on scaling global e-commerce platforms.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{ animation: 'fadeUp 0.8s ease 550ms forwards', opacity: 0 }}
          >
            <Button variant="primary" href="#portfolio">
              View My Projects
            </Button>
            <Button variant="outline" href="#contact">
              Let's Connect
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40 hover:text-cream/70 transition-colors duration-300 z-10"
        style={{ animation: 'fadeUp 1s ease 1000ms forwards', opacity: 0 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-sans">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
