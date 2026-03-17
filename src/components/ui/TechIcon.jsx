export default function TechIcon({ name, logo }) {
  return (
    <div className="group flex flex-col items-center gap-3">
      <div className="w-14 h-14 flex items-center justify-center transition-all duration-500 ease-luxury grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100">
        <img src={logo} alt={name} className="w-10 h-10 object-contain" />
      </div>
      <span className="text-[10px] font-sans uppercase tracking-[0.15em] text-cream/40 group-hover:text-cream/80 transition-colors duration-500">
        {name}
      </span>
    </div>
  )
}
