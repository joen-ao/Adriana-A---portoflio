import AnimatedSection from '../ui/AnimatedSection'
import SectionLabel from '../ui/SectionLabel'
import PortfolioCard from '../ui/PortfolioCard'
import { caseStudies } from '../../data/portfolio'

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-cream">
      <div className="container-narrow">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <SectionLabel text="Selected Work" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]">
            Case Studies
          </h2>
        </AnimatedSection>

        {/* Cards */}
        <div className="flex flex-col gap-10">
          {caseStudies.map((study, i) => (
            <AnimatedSection key={study.id} delay={i * 100}>
              <PortfolioCard {...study} reverse={i % 2 !== 0} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
