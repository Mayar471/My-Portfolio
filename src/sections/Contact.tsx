import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Linkedin, Github, Download, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { x: '-6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 0.4,
          },
        }
      );

      // Contact details animation
      const contactItems = contactRef.current?.querySelectorAll('.contact-item');
      if (contactItems) {
        gsap.fromTo(
          contactItems,
          { y: 14, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.06,
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              end: 'top 45%',
              scrub: 0.4,
            },
          }
        );
      }

      // Buttons animation
      gsap.fromTo(
        buttonsRef.current,
        { scale: 0.96, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: section,
            start: 'top 65%',
            end: 'top 40%',
            scrub: 0.4,
          },
        }
      );

      // Image card animation
      gsap.fromTo(
        imageCardRef.current,
        { x: '10vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.4,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full min-h-screen py-[10vh] px-[7vw] bg-navy-primary z-[70]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[5vw]">
        {/* Left Column - Contact Info */}
        <div>
          {/* Header */}
          <div ref={headerRef} className="mb-12">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.14em] text-gold mb-4">
              Contact
            </span>
            <h2 className="text-[clamp(34px,3.6vw,52px)] font-bold uppercase tracking-[0.06em] leading-[1] text-white">
              Let's build what's next.
            </h2>
          </div>

          {/* Contact Details */}
          <div ref={contactRef} className="space-y-6 mb-10">
            {/* Email */}
            <a
              href="mailto:mayaralmalla2@gmail.com"
              className="contact-item flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-navy-light mb-1">
                  Email
                </p>
                <p className="text-white group-hover:text-gold transition-colors">
                  mayaralmalla2@gmail.com
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Linkedin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-navy-light mb-1">
                  LinkedIn
                </p>
                <p className="text-white group-hover:text-gold transition-colors flex items-center gap-2">
                  Connect with me
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </p>
              </div>
            </a>
          </div> {/* إغلاق قسم Contact Details */}
          
          {/* Buttons Area (Added to match your Ref) */}
          <div ref={buttonsRef}>
            {/* يمكنك وضع أزرار التحميل هنا لاحقاً إذا أردت */}
          </div>
        </div> {/* إغلاق الـ Left Column (هذا هو التاغ الذي كان مفقوداً) */}

        {/* Right Column - Image Card */}
        <div className="flex justify-center lg:justify-end items-start">
          <div
            ref={imageCardRef}
            className="relative w-full max-w-[400px] lg:w-[35vw] lg:max-w-none aspect-[3/4] rounded-[22px] overflow-hidden border border-white/10 shadow-[0_28px_70px_rgba(0,0,0,0.45)]"
          >
            <img
              src="/images/contact-portrait.png"
              alt="Mayar Al Malla"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/60 to-transparent" />
          </div>
        </div>
      </div> {/* إغلاق الـ Grid الأساسي */}

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy-light text-sm">
            © {new Date().getFullYear()} Mayar Al Malla. Built with care.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#hero"
              className="text-navy-light text-sm hover:text-gold transition-colors"
            >
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
