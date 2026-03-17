import { Monitor, Globe, BarChart2 } from 'lucide-react'

const iconMap = {
  Monitor,
  Globe,
  BarChart2,
}

export default function ServiceCard({ icon, title, description, items }) {
  const Icon = iconMap[icon] || Monitor

  return (
    <div className="group border-t-2 border-forest pt-8 pb-10 px-6 bg-offwhite hover:bg-cream transition-colors duration-500 ease-luxury">
      <Icon
        size={28}
        className="text-forest mb-6 transition-transform duration-500 group-hover:scale-110"
        strokeWidth={1.5}
      />

      <h3 className="font-serif text-xl text-charcoal font-medium mb-3 leading-snug">
        {title}
      </h3>

      <p className="font-sans text-sm text-stone leading-relaxed mb-6">
        {description}
      </p>

      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-forest flex-shrink-0" />
            <span className="font-sans text-sm text-stone/80">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
