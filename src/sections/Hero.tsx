import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const underline = underlineRef.current;
    const meta = metaRef.current;
    const cta = ctaRef.current;
    const scrollHint = scrollHintRef.current;
    const bg = bgRef.current;

    if (!section || !headline || !underline || !meta || !cta || !scrollHint || !bg) return;

    const ctx = gsap.context(() => {
      // Auto-play entrance animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headline.querySelectorAll('.headline-line'),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.08 }
      )
        .fromTo(
          underline,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, transformOrigin: 'left' },
          '-=0.5'
        )
        .fromTo(
          meta,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          cta,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          scrollHint,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          '-=0.2'
        );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements when scrolling back to top
            gsap.set([headline, underline, meta, cta], { opacity: 1, x: 0, y: 0 });
            gsap.set(bg, { scale: 1, opacity: 1 });
          },
        },
      });

      // EXIT phase (70% - 100%)
      scrollTl.fromTo(
        headline,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        underline,
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        cta,
        { y: 0, opacity: 1 },
        { y: '10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        meta,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.75
      );

      scrollTl.fromTo(
        scrollHint,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bg,
        { scale: 1, opacity: 1 },
        { scale: 1.06, opacity: 0.7, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full h-screen overflow-hidden z-10"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/images/hero-city.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(11,19,32,0.35), rgba(11,19,32,0.75))',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-[7vw]">
        {/* Headline */}
        <div ref={headlineRef} className="mb-6">
          <h1 className="text-[clamp(44px,5vw,76px)] font-bold uppercase tracking-[0.06em] leading-[0.95] text-white">
            <span className="headline-line block">Mayar</span>
            <span className="headline-line block">Al Malla</span>
          </h1>
        </div>

        {/* Underline */}
        <div
          ref={underlineRef}
          className="w-[34vw] h-1 bg-gold mb-8"
          style={{ transformOrigin: 'left' }}
        />

        {/* Meta */}
        <div ref={metaRef} className="mb-12">
          <p className="text-[clamp(14px,1.5vw,18px)] font-medium uppercase tracking-[0.14em] text-navy-light">
            AI Engineer • Full-Stack Developer
          </p>
        </div>

        {/* CTA */}
        <div ref={ctaRef}>
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-gold text-[#0B1320] font-semibold uppercase tracking-[0.1em] text-sm rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <p className="mt-4 text-sm text-navy-light/70">Scroll to explore</p>
        </div>
      </div>

      {/* Scroll Hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-[6vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold/50 to-gold" />
        <ChevronDown className="w-5 h-5 text-gold animate-bounce" />
      </div>
    </section>
  );
}
