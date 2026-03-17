import AnimatedSection from '../ui/AnimatedSection'
import SectionLabel from '../ui/SectionLabel'
import TechIcon from '../ui/TechIcon'
import { techStack, certifications } from '../../data/techStack'

export default function TrustSignals() {
  return (
    <section id="skills" className="section-padding bg-charcoal">
      <div className="container-narrow">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <SectionLabel text="Tools & Credentials" className="text-cream/40" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.1]">
            Built on Expertise
          </h2>
        </AnimatedSection>

        {/* Tech Stack */}
        <AnimatedSection delay={100}>
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-cream/30 mb-10 text-center">
            Tech Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 mb-20">
            {techStack.map((tech) => (
              <TechIcon key={tech.name} {...tech} />
            ))}
          </div>
        </AnimatedSection>

        {/* Divider */}
        <div className="border-t border-white/10 mb-20" />

        {/* Certifications */}
        <AnimatedSection delay={200}>
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-cream/30 mb-10 text-center">
            Education & Certifications
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="border border-white/10 p-6 hover:border-white/20 transition-colors duration-500 ease-luxury"
              >
                <span className="text-forest text-xs mb-4 block">{cert.icon}</span>
                <p className="font-serif text-sm text-cream font-medium leading-snug mb-2">
                  {cert.title}
                </p>
                <p className="text-xs font-sans text-cream/40 mb-1">{cert.issuer}</p>
                <p className="text-xs font-sans text-cream/25">{cert.year}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
