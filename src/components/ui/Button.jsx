export default function Button({ variant = 'primary', href, children, onClick, className = '' }) {
  const base =
    'inline-flex items-center gap-2 px-8 py-3.5 text-sm font-sans font-medium tracking-wide transition-all duration-300 ease-luxury cursor-pointer'

  const variants = {
    primary:
      'bg-forest text-cream hover:bg-forest-deep border border-forest hover:border-forest-deep',
    outline:
      'bg-transparent text-cream border border-cream/60 hover:border-cream hover:bg-cream/10',
    'outline-dark':
      'bg-transparent text-forest border border-forest hover:bg-forest hover:text-cream',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('mailto') || href.startsWith('#') ? undefined : '_blank'} rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
