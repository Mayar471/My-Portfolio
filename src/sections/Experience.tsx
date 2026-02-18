import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, GraduationCap, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: 'Web Developer & Team Lead',
    company: 'FLARETECH',
    location: 'Dubai, UAE - Remote',
    period: 'Oct 2024 – May 2025',
    description:
      'Led full-stack SaaS development and code quality across a remote team.',
    icon: Briefcase,
  },
  {
    title: 'Technical Trainer & ICPC Coach',
    company: 'University of Kalamoon',
    location: 'Syria',
    period: 'Oct 2023 – Present',
    description:
      "Founded the university's programming club; qualified 18 teams to ICPC regionals.",
    icon: GraduationCap,
  },
  {
    title: 'Technical Trainer',
    company: 'Mini Code Leader',
    location: 'Syria',
    period: 'Dec 2024 – Present',
    description: 'Teach Python and problem-solving for beginners.',
    icon: Users,
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

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

      // Timeline items animation
      const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
      const connectorLines = timelineRef.current?.querySelectorAll('.connector-line');

      if (timelineItems) {
        gsap.fromTo(
          timelineItems,
          { x: '-8vw', opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.12,
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              end: 'top 40%',
              scrub: 0.4,
            },
          }
        );
      }

      if (connectorLines) {
        gsap.fromTo(
          connectorLines,
          { scaleX: 0 },
          {
            scaleX: 1,
            stagger: 0.12,
            transformOrigin: 'left',
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

      // Image parallax
      gsap.fromTo(
        imageRef.current,
        { y: -10 },
        {
          y: 10,
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

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative w-full min-h-screen py-[10vh] px-[7vw] bg-navy-primary z-40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[5vw]">
        {/* Left Column - Timeline */}
        <div>
          {/* Header */}
          <div ref={headerRef} className="mb-12">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.14em] text-gold mb-4">
              Experience
            </span>
            <h2 className="text-[clamp(34px,3.6vw,52px)] font-bold uppercase tracking-[0.06em] leading-[1] text-white">
              Where I've made impact
            </h2>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item relative pl-8">
                {/* Connector line */}
                <div className="connector-line absolute left-0 top-0 w-px h-full bg-gradient-to-b from-gold/60 to-transparent" />

                {/* Dot */}
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[3px] rounded-full bg-gold" />

                {/* Content */}
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <exp.icon className="w-4 h-4 text-gold" />
                    <span className="text-xs uppercase tracking-[0.1em] text-navy-light">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gold/80 mb-2">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-navy-light text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image Card */}
        <div className="flex justify-center lg:justify-end items-start">
          <div
            ref={imageCardRef}
            className="relative w-full max-w-[400px] lg:w-[35vw] lg:max-w-none aspect-[4/3] rounded-[22px] overflow-hidden border border-white/10 shadow-[0_28px_70px_rgba(0,0,0,0.45)]"
          >
            <img
              ref={imageRef}
              src="/images/experience-workspace.jpg"
              alt="Workspace"
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
