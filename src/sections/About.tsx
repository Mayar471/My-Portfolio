import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Label animation
      gsap.fromTo(
        labelRef.current,
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

      // Quote animation (word by word)
      const quoteWords = quoteRef.current?.querySelectorAll('.quote-word');
      if (quoteWords) {
        gsap.fromTo(
          quoteWords,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.03,
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
              end: 'top 50%',
              scrub: 0.4,
            },
          }
        );
      }

      // Body paragraph animation
      gsap.fromTo(
        bodyRef.current,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 65%',
            end: 'top 45%',
            scrub: 0.4,
          },
        }
      );

      // Link animation
      gsap.fromTo(
        linkRef.current,
        { y: 14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            end: 'top 40%',
            scrub: 0.4,
          },
        }
      );

      // Image card animation
      gsap.fromTo(
        imageCardRef.current,
        { x: '10vw', rotate: 1.5, opacity: 0 },
        {
          x: 0,
          rotate: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 45%',
            scrub: 0.4,
          },
        }
      );

      // Image parallax
      gsap.fromTo(
        imageRef.current,
        { y: -12 },
        {
          y: 12,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const quoteText = 'I build systems that understand content.';

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-screen py-[10vh] px-[7vw] bg-navy-primary z-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[5vw] items-center">
        {/* Left Column - Text */}
        <div className="order-2 lg:order-1">
          {/* Label */}
          <span
            ref={labelRef}
            className="inline-block text-xs font-medium uppercase tracking-[0.14em] text-gold mb-6"
          >
            About
          </span>

          {/* Quote */}
          <h2
            ref={quoteRef}
            className="text-[clamp(28px,3vw,42px)] font-bold leading-[1.2] text-white mb-8"
          >
            {quoteText.split(' ').map((word, index) => (
              <span key={index} className="quote-word inline-block mr-[0.3em]">
                {word}
              </span>
            ))}
          </h2>

          {/* Body */}
          <div ref={bodyRef} className="space-y-4 text-navy-light leading-relaxed">
            <p>
              I'm an IT Engineering graduate specializing in AI and full-stack
              development. I've shipped AI-driven tools for education—like
              automated grading and Arabic OCR—and led technical training
              programs for 200+ students.
            </p>
            <p>
              Currently, I'm deepening my work in NLP and Retrieval-Augmented
              Generation (RAG).
            </p>
          </div>

          {/* Link */}
          <a
            ref={linkRef}
            href="#experience"
            className="inline-flex items-center gap-2 mt-8 text-gold font-medium hover:gap-4 transition-all duration-300 group"
          >
            <span>Read the full story</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Right Column - Image Card */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div
            ref={imageCardRef}
            className="relative w-full max-w-[400px] lg:w-[35vw] lg:max-w-none aspect-[3/4] rounded-[22px] overflow-hidden border border-white/10 shadow-[0_28px_70px_rgba(0,0,0,0.45)]"
          >
            <img
              ref={imageRef}
              src="/images/about-portrait.png"
              alt="Mayar Al Malla"
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
