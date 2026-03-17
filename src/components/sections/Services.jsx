import AnimatedSection from '../ui/AnimatedSection'
import SectionLabel from '../ui/SectionLabel'
import ServiceCard from '../ui/ServiceCard'
import { services } from '../../data/services'

export default function Services() {
  return (
    <section id="services" className="section-padding bg-offwhite">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <SectionLabel text="Services" className="text-stone" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]">
              What I Bring to the Table
            </h2>
          </AnimatedSection>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 150}>
              <ServiceCard {...service} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
