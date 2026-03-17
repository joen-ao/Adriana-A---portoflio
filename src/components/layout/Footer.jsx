export default function Footer() {
  return (
    <footer className="bg-charcoal py-8">
      <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#" className="font-serif text-lg text-cream/70 hover:text-cream transition-colors duration-300">
          Adriana Acevedo
        </a>
        <div className="text-center sm:text-right">
          <p className="text-xs font-sans text-cream/30">
            © {new Date().getFullYear()} Adriana Acevedo · Bogota, Colombia
          </p>
          <p className="text-xs font-sans text-cream/20 mt-0.5 italic">
            Made with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
