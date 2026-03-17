import { ArrowUpRight } from 'lucide-react'

export default function PortfolioCard({ company, role, period, tag, image, description, results, reverse = false }) {
  return (
    <article className="border border-border bg-offwhite group">
      <div className={`grid grid-cols-1 lg:grid-cols-5 ${reverse ? 'lg:grid-flow-dense' : ''}`}>
        {/* Image */}
        <div className={`lg:col-span-2 overflow-hidden ${reverse ? 'lg:col-start-4' : ''}`}>
          <div className="h-64 lg:h-full overflow-hidden">
            <img
              src={image}
              alt={`${company} case study`}
              className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className={`lg:col-span-3 p-8 md:p-12 flex flex-col justify-between ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
          <div>
            {/* Tag + period */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] bg-forest/10 text-forest px-3 py-1.5">
                {tag}
              </span>
              <span className="text-xs font-sans text-stone">{period}</span>
            </div>

            {/* Company */}
            <h3 className="font-serif text-2xl md:text-3xl text-charcoal font-medium mb-2 flex items-start gap-3">
              {company}
              <ArrowUpRight size={20} className="text-forest mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
            </h3>
            <p className="text-eyebrow text-stone mb-6">{role}</p>

            <p className="font-sans text-sm text-stone leading-relaxed mb-8">
              {description}
            </p>
          </div>

          {/* Results */}
          <div>
            <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-charcoal mb-4">Key Outcomes</p>
            <ul className="space-y-2">
              {results.map((result) => (
                <li key={result} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-forest flex-shrink-0" />
                  <span className="font-sans text-sm text-stone/80">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}
