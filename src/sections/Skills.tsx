import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Brain,
  Code2,
  Globe,
  Wrench,
  Cpu,
  Database,
  GitBranch,
  Terminal,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'AI / ML',
    icon: Brain,
    skills: [
      'Generative AI (Gemini/OpenAI)',
      'Computer Vision',
      'OCR',
      'CNNs',
      'Scikit-learn',
      'NLP & RAG',
    ],
  },
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'C++', 'JavaScript', 'SQL', 'Java'],
  },
  {
    title: 'Web',
    icon: Globe,
    skills: [
      'FastAPI',
      'React',
      'Node.js',
      'Express',
      'PostgreSQL/MySQL',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'Google Colab', 'Jupyter', 'Visual Paradigm'],
  },
];

const techStack = [
  { icon: Cpu, label: 'AI/ML' },
  { icon: Terminal, label: 'Python' },
  { icon: Globe, label: 'Web' },
  { icon: Database, label: 'DB' },
  { icon: GitBranch, label: 'Git' },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stackCardRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

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

      // Stack card animation
      gsap.fromTo(
        stackCardRef.current,
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

      // Stack icons animation
      const stackIcons = stackCardRef.current?.querySelectorAll('.stack-icon');
      if (stackIcons) {
        gsap.fromTo(
          stackIcons,
          { scale: 0.92, opacity: 0 },
          {
            scale: 1,
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

      // Categories animation
      const categoryCols =
        categoriesRef.current?.querySelectorAll('.category-col');
      if (categoryCols) {
        gsap.fromTo(
          categoryCols,
          { y: 24, opacity: 0 },
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
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full min-h-screen py-[10vh] px-[7vw] bg-navy-secondary z-30"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[5vw]">
        {/* Left Column - Header + Categories */}
        <div>
          {/* Header */}
          <div ref={headerRef} className="mb-12">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.14em] text-gold mb-4">
              Skills
            </span>
            <h2 className="text-[clamp(34px,3.6vw,52px)] font-bold uppercase tracking-[0.06em] leading-[1] text-white">
              What I work with
            </h2>
          </div>

          {/* Categories Grid */}
          <div
            ref={categoriesRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, index) => (
              <div key={index} className="category-col">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-5 h-5 text-gold" />
                  <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-white">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-navy-light text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-gold/60 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Stack Card */}
        <div className="flex justify-center lg:justify-end items-start">
          <div
            ref={stackCardRef}
            className="relative w-full max-w-[400px] lg:w-[35vw] lg:max-w-none aspect-[4/3] rounded-[22px] overflow-hidden border border-white/10 shadow-[0_28px_70px_rgba(0,0,0,0.45)] bg-navy-primary"
          >
            {/* Background gradient */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, rgba(200,162,83,0.15), transparent 70%)',
              }}
            />

            {/* Tech Stack Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Center node */}
                <div className="w-20 h-20 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-gold" />
                </div>

                {/* Orbiting nodes */}
                {techStack.map((tech, index) => {
                  const angle = (index * 360) / techStack.length - 90;
                  const radius = 100;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <div
                      key={index}
                      className="stack-icon absolute w-14 h-14 rounded-full bg-navy-secondary border border-white/10 flex flex-col items-center justify-center gap-1"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                    >
                      <tech.icon className="w-5 h-5 text-gold" />
                      <span className="text-[8px] uppercase tracking-wider text-navy-light">
                        {tech.label}
                      </span>
                    </div>
                  );
                })}

                {/* Connecting lines */}
                <svg
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px]"
                  style={{ pointerEvents: 'none' }}
                >
                  {techStack.map((_, index) => {
                    const angle = (index * 360) / techStack.length - 90;
                    const radius = 100;
                    const x =
                      140 + Math.cos((angle * Math.PI) / 180) * radius;
                    const y =
                      140 + Math.sin((angle * Math.PI) / 180) * radius;

                    return (
                      <line
                        key={index}
                        x1="140"
                        y1="140"
                        x2={x}
                        y2={y}
                        stroke="rgba(242,245,248,0.12)"
                        strokeWidth="1"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
