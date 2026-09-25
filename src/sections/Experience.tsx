import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, GraduationCap, Users, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: 'Full-Stack Developer & Team Lead',
    company: 'FlareTech (Start Up)',
    location: 'UAE (Remote)',
    period: '2024 – 2025',
    description:
      'Participated in the design and development of a Software as a Service (SaaS) platform. Supervised a development team, providing weekly reviews on software design and WordPress website development. Produced comprehensive technical documentation and UML diagrams.',
    icon: Briefcase,
  },
  {
    title: 'Founder & Coach — Programming Club',
    company: 'University of Kalamoon',
    location: 'Syria',
    period: '2022 – 2026',
    description:
      "Founded the university's first official competitive programming club, mentored 250+ students across annual intensive training camps covering algorithms, data structures, and competitive programming. Problem setter on Codeforces and Polygon, organized and judged university contests, received 3 university-level certificates for educational leadership.",
    icon: GraduationCap,
  },
  {
    title: 'Programming Instructor — Python & Logic',
    company: 'MiniCodeLeader',
    location: 'Netherlands (Remote)',
    period: '2025 – 2026',
    description: 'Designed project-based lessons to develop computational thinking and problem-solving skills. Introduced young learners to programming and AI fundamentals through hands-on activities.',
    icon: Users,
  },
  {
    title: 'AI & Software Engineering Instructor',
    company: 'Freelance',
    location: 'Syria',
    period: '2024 – present',
    description: 'Delivered specialized training in Python, Artificial Intelligence Basis. Taught Full-Stack Web Development, including HTML, CSS, JavaScript, Express.js, MySQL. Mentored students through practical software engineering and AI projects.',
    icon: Briefcase,
  },
];

const volunteerWork = [
  {
    title: 'Technical Trainer & Content Creator (Volunteer)',
    company: 'Bana Community Team',
    location: 'Syria',
    period: '2024 – present',
    description:
      'Delivered technical training courses and workshops as part of a community education initiative. Contributed to educational content production, including filming and producing Reels published on the team\'s Instagram page.',
    icon: Heart,
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const volunteerRef = useRef<HTMLDivElement>(null);
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
      const volunteerItems = volunteerRef.current?.querySelectorAll('.volunteer-item');

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

      if (volunteerItems) {
        gsap.fromTo(
          volunteerItems,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            scrollTrigger: {
              trigger: section,
              start: 'top 60%',
              end: 'top 35%',
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
          <div ref={timelineRef} className="space-y-8 mb-12">
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

          {/* Volunteer Work Section */}
          <div ref={volunteerRef} className="mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-5 h-5 text-gold" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-white">
                Volunteer Work
              </h3>
            </div>
            <div className="space-y-6">
              {volunteerWork.map((vol, index) => (
                <div key={index} className="volunteer-item relative pl-8">
                  {/* Connector line */}
                  <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-gold/40 to-transparent" />

                  {/* Dot */}
                  <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[3px] rounded-full bg-gold/60" />

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <vol.icon className="w-4 h-4 text-gold/80" />
                      <span className="text-xs uppercase tracking-[0.1em] text-navy-light">
                        {vol.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {vol.title}
                    </h3>
                    <p className="text-sm text-gold/80 mb-2">
                      {vol.company} • {vol.location}
                    </p>
                    <p className="text-navy-light text-sm leading-relaxed">
                      {vol.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
