import AnimatedSection from '../ui/AnimatedSection'
import SectionLabel from '../ui/SectionLabel'
import aboutImage from '../../utils/about-image.JPEG'

const ABOUT_IMAGE = aboutImage

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '2', label: 'Languages' },
  { value: 'LatAm', label: 'Based' },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-narrow">
        <AnimatedSection>
          <SectionLabel text="About Adriana" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mt-4">
          {/* Image column */}
          <AnimatedSection delay={100}>
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden ring-1 ring-border">
                <img
                  src={ABOUT_IMAGE}
                  alt="Adriana Acevedo — Professional Portrait"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              {/* Decorative offset border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-forest/30 -z-10" />
            </div>
          </AnimatedSection>

          {/* Text column */}
          <div className="flex flex-col justify-center">
            <AnimatedSection delay={200}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] mb-8">
                Strategic Vision.
                <br />
                <span className="italic font-normal text-stone">Digital Execution.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="font-sans text-stone leading-relaxed mb-6">
                Strategic and results-oriented International Business Administrator with experience
                in project management, e-commerce operations, and international market expansion.
                Proven track record in leading cross-functional teams, conducting complex market
                feasibility studies, and optimizing digital content via CMS (Drupal).
              </p>
              <p className="font-sans text-stone leading-relaxed mb-10">
                Based in Latin America and working globally, I offer a unique perspective on
                cross-border logistics, e-commerce optimization, and operational efficiency.
                Bilingual in English and Spanish, with a strong ability to navigate multicultural
                business environments.
              </p>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={400}>
              <div className="border-t border-border pt-8">
                <div className="flex gap-10 md:gap-16">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-serif text-4xl text-forest font-medium mb-1">
                        {stat.value}
                      </p>
                      <p className="text-xs uppercase tracking-widest text-stone font-sans">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
