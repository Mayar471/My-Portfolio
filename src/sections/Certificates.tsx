import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Trophy,
  Award,
  Medal,
  Star,
  ArrowRight,
  ImageIcon,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    title: 'SCPC Finalist',
    description: 'Two consecutive seasons',
    icon: Trophy,
  },
  {
    title: 'Syrian Private Universities CPC',
    description: '4th Place (2024–2025)',
    icon: Medal,
  },
  {
    title: 'Syrian Private Universities CPC',
    description: '7th Place (2023–2024)',
    icon: Medal,
  },
  {
    title: 'University of Kalamoon CPC',
    description: '1st Place (2023, 2024, 2025)',
    icon: Star,
  },
  {
    title: 'Excellence Award',
    description: 'Leadership',
    icon: Award,
  },
  {
    title: 'Excellence Award',
    description: 'Technical Training',
    icon: Award,
  },
];

export default function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const goldLineRef = useRef<HTMLDivElement>(null);

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

      // Gold line animation
      gsap.fromTo(
        goldLineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: 'left',
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end: 'top 50%',
            scrub: 0.4,
          },
        }
      );

      // List items animation
      const listItems = listRef.current?.querySelectorAll('.achievement-item');
      if (listItems) {
        gsap.fromTo(
          listItems,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              end: 'top 40%',
              scrub: 0.4,
            },
          }
        );
      }

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
      id="certificates"
      className="relative w-full min-h-screen py-[10vh] px-[7vw] bg-navy-secondary z-[60]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[5vw]">
        {/* Left Column - List */}
        <div>
          {/* Header */}
          <div ref={headerRef} className="mb-8">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.14em] text-gold mb-4">
              Certificates
            </span>
            <h2 className="text-[clamp(34px,3.6vw,52px)] font-bold uppercase tracking-[0.06em] leading-[1] text-white mb-4">
              Proof of craft
            </h2>
            <p className="text-navy-light text-sm leading-relaxed">
              Consistent finalist in national contests; recognized for
              leadership and training impact.
            </p>
          </div>

          {/* Gold line */}
          <div ref={goldLineRef} className="w-24 h-0.5 bg-gold mb-8" />

          {/* Achievements List */}
          <div ref={listRef} className="space-y-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="achievement-item flex items-center gap-4 p-4 rounded-xl bg-navy-primary/50 border border-white/5 hover:border-gold/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <achievement.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-navy-light">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View Certificates Link */}
          <button className="inline-flex items-center gap-2 mt-8 text-gold font-medium hover:gap-4 transition-all duration-300 group">
            <span>View certificates</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            <span className="text-xs text-navy-light/60 italic">
              (Images will be uploaded later)
            </span>
          </button>
        </div>

        {/* Right Column - Image Card */}
        <div className="flex justify-center lg:justify-end items-start">
          <div
            ref={imageCardRef}
            className="relative w-full max-w-[400px] lg:w-[35vw] lg:max-w-none aspect-[4/3] rounded-[22px] overflow-hidden border border-white/10 shadow-[0_28px_70px_rgba(0,0,0,0.45)]"
          >
            <img
              src="/images/certificates-trophy.jpg"
              alt="Awards"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/60 to-transparent" />

            {/* Placeholder overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#0B1320]/40">
              <div className="text-center">
                <ImageIcon className="w-12 h-12 text-gold/50 mx-auto mb-2" />
                <p className="text-xs text-navy-light/60 uppercase tracking-wider">
                  Certificate images coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
