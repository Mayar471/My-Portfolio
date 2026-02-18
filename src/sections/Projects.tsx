import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, FileText, Info } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Midad',
    description: 'AI-powered exam grading and analytics.',
    image: '/images/project-midad.jpg',
    technologies: ['FastAPI', 'React', 'SQL'],
  },
  {
    title: 'Deep Arab Ink',
    description: 'Arabic OCR with deep learning.',
    image: '/images/project-ocr.jpg',
    technologies: ['Python', 'ResNet-50', 'CTC-Loss'],
  },
  {
    title: 'Theatrical Archive',
    description: 'Searchable theater document system.',
    image: '/images/project-archive.jpg',
    technologies: ['Full-Stack', 'Database', 'Search'],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: '-6vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.4,
          },
        }
      );

      // Cards animation
      const cards = cardsContainerRef.current?.querySelectorAll('.project-card');
      if (cards) {
        // Entrance animation
        gsap.fromTo(
          cards[0],
          { x: '-55vw', rotate: -6, opacity: 0 },
          {
            x: 0,
            rotate: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              end: 'top 30%',
              scrub: 0.4,
            },
          }
        );

        gsap.fromTo(
          cards[1],
          { y: '80vh', scale: 0.88, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              end: 'top 30%',
              scrub: 0.4,
            },
          }
        );

        gsap.fromTo(
          cards[2],
          { x: '55vw', rotate: 6, opacity: 0 },
          {
            x: 0,
            rotate: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              end: 'top 30%',
              scrub: 0.4,
            },
          }
        );

        // Buttons animation
        const buttons = cardsContainerRef.current?.querySelectorAll('.card-btn');
        if (buttons) {
          gsap.fromTo(
            buttons,
            { y: 14, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.06,
              scrollTrigger: {
                trigger: section,
                start: 'top 60%',
                end: 'top 25%',
                scrub: 0.4,
              },
            }
          );
        }
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full min-h-screen py-[10vh] px-[7vw] bg-navy-primary z-50"
    >
      {/* Header */}
      <div ref={headerRef} className="mb-12">
        <span className="inline-block text-xs font-medium uppercase tracking-[0.14em] text-gold mb-4">
          Projects
        </span>
        <h2 className="text-[clamp(34px,3.6vw,52px)] font-bold uppercase tracking-[0.06em] leading-[1] text-white mb-4">
          Featured work
        </h2>
        <p className="text-navy-light text-sm flex items-center gap-2">
          <Info className="w-4 h-4" />
          Links will be updated soon
        </p>
      </div>

      {/* Cards Grid */}
      <div
        ref={cardsContainerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[3vw]"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card group relative aspect-[4/5] rounded-[22px] overflow-hidden border border-white/10 shadow-[0_28px_70px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1.5"
          >
            {/* Background Image */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320] via-[#0B1320]/60 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/10 rounded-full text-navy-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-navy-light text-sm mb-4">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-3">
                <button className="card-btn flex items-center gap-2 px-4 py-2 bg-gold text-[#0B1320] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-gold/90 transition-colors">
                  <ExternalLink className="w-3 h-3" />
                  View Demo
                </button>
                <button className="card-btn flex items-center gap-2 px-4 py-2 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-white/10 transition-colors">
                  <FileText className="w-3 h-3" />
                  Case Study
                </button>
              </div>

              {/* Coming soon note */}
              <p className="mt-3 text-[10px] text-navy-light/60 italic">
                (Link will be updated/uploaded soon)
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
