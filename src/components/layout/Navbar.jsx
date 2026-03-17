import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#"
          className={`font-serif text-2xl font-medium tracking-wide transition-colors duration-300 ${
            isScrolled ? 'text-charcoal' : 'text-cream'
          }`}
          title="Adriana Acevedo"
        >
          Adriana Acevedo
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs font-sans uppercase tracking-[0.15em] transition-colors duration-300 hover:opacity-60 ${
                isScrolled ? 'text-charcoal' : 'text-cream'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-2 transition-colors duration-300 ${
            isScrolled ? 'text-charcoal' : 'text-cream'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center gap-12 transition-all duration-500 ease-luxury ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            className="font-serif text-4xl text-charcoal hover:text-forest transition-colors duration-300"
            style={{
              transitionDelay: isOpen ? `${i * 80}ms` : '0ms',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(1rem)',
              transition: `opacity 0.4s ease ${i * 80}ms, transform 0.4s ease ${i * 80}ms, color 0.3s ease`,
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
