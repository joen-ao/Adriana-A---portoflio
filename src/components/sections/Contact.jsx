import AnimatedSection from '../ui/AnimatedSection'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'
import { Mail, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-offwhite">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <SectionLabel text="Get In Touch" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] mb-8">
              Let's Build Something
              <br />
              <span className="italic font-normal text-stone">Remarkable.</span>
            </h2>
            <p className="font-sans text-stone leading-relaxed mb-12">
              Whether you're looking to scale your e-commerce operations, enter new markets, or
              bring analytical rigor to your business strategy — I'm open to discussing how we can
              collaborate. Let's connect.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            {/* Contact info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a
                href="mailto:Acevedoadriana219@gmail.com"
                className="flex items-center gap-2.5 font-mono text-sm text-stone hover:text-forest transition-colors duration-300 group"
              >
                <Mail size={14} className="text-forest" />
                <span className="group-hover:underline underline-offset-4">
                  Acevedoadriana219@gmail.com
                </span>
              </a>

              <span className="hidden sm:block w-px h-4 bg-border" />

              <a
                href="https://www.linkedin.com/in/adriana-acevedo-/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-mono text-sm text-stone hover:text-forest transition-colors duration-300 group"
              >
                <Linkedin size={14} className="text-forest" />
                <span className="group-hover:underline underline-offset-4">
                  linkedin.com/in/adriana-acevedo
                </span>
              </a>
            </div>

            <Button variant="outline-dark" href="mailto:Acevedoadriana219@gmail.com">
              Send Me a Message →
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
