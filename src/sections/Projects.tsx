import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Image as ImageIcon, Info, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    slug: 'midad',
    title: 'MIDAD — AI-Powered Academic Assessment Platform',
    description: 'End-to-end platform that digitizes handwritten exams and automates semantic grading with human-in-the-loop review. Built a React/Tailwind dashboard with analytics, a question bank, and AI-assisted question generation for educators.',
    image: '/images/project-midad.jpg',
    technologies: ['FastAPI', 'React', 'Tailwind', 'Google Gemini', 'OCR', 'Semantic NLP'],
    githubUrl: 'https://github.com/Mayar471/Midad',
    liveUrl: '',
  },
  {
    slug: 'deep-arab-ink',
    title: 'Deep Arab Ink — Arabic Handwriting Recognition Engine',
    description: 'Independent deep learning research project focused on Arabic OCR at the character and word level. ResNet50 model with CTC loss function implemented to recognize Arabic text from sequence to sequence.',
    image: '/images/project-ocr.jpg',
    technologies: ['Deep Learning', 'TensorFlow', 'ResNet50', 'CTC Loss', 'KHATT Dataset'],
    githubUrl: '',
    liveUrl: '',
  },
  {
    slug: 'pos-system',
    title: 'POS & Accounting System — Production Restaurant Deployment',
    description: 'Production system actively used by a real restaurant; built for reliability, multi-user concurrency, and financial accuracy. Delivered a complete multi-user POS covering order management, inventory tracking, and role-based access.',
    image: '/images/project-pos-bg.jpg',
    technologies: ['Node.js', 'React', 'MySQL', 'REST API'],
    githubUrl: 'https://github.com/Mayar471/F2M-Smart-POS-System',
    liveUrl: '',
  },
  {
    slug: 'whatsapp-assistant',
    title: 'AI WhatsApp Assistant — Domain-Specific Chatbot',
    description: 'Built a WhatsApp chatbot backed by a private knowledge base, using Google Gemini for context-aware, domain-specific responses. Engineered prompt templates and retrieval logic to keep answers scoped to the business domain.',
    image: '/images/project-whatsapp-bg.jpg',
    technologies: ['Python', 'Google Gemini API', 'Prompt Engineering', 'WhatsApp Business API'],
    githubUrl: '',
    liveUrl: '',
  },
  {
    slug: 'theatrical-cms',
    title: 'Theatrical Archive & CMS — Theatre Group',
    description: 'Searchable theater document system for managing theatrical archives and content management.',
    image: '/images/project-archive.jpg',
    technologies: ['Full-Stack', 'Database', 'Search'],
    githubUrl: '',
    liveUrl: '',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [galleryProject, setGalleryProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Helper function to get project screenshots
  const getProjectScreenshots = (slug: string) => {
    const screenshotPaths: Record<string, string[]> = {
      'midad': [
        '/assets/projects/midad/screenshots/screenshot-1.jpg',
        '/assets/projects/midad/screenshots/screenshot-2.jpg',
        '/assets/projects/midad/screenshots/screenshot-3.jpg',
        '/assets/projects/midad/screenshots/screenshot-4.jpg',
        '/assets/projects/midad/screenshots/screenshot-5.jpg',
        '/assets/projects/midad/screenshots/screenshot-6.jpg',
        '/assets/projects/midad/screenshots/screenshot-7.jpg',
        '/assets/projects/midad/screenshots/screenshot-8.jpg',
        '/assets/projects/midad/screenshots/screenshot-9.jpg',
        '/assets/projects/midad/screenshots/screenshot-10.jpg',
        '/assets/projects/midad/screenshots/screenshot-11.jpg',
      ],
      'deep-arab-ink': [
        '/assets/projects/deep-arab-ink/screenshots/screenshot-1.png',
        '/assets/projects/deep-arab-ink/screenshots/screenshot-2.png',
        '/assets/projects/deep-arab-ink/screenshots/screenshot-3.png',
      ],
      'pos-system': [],
      'whatsapp-assistant': [
        '/assets/projects/whatsapp-assistant/screenshots/screenshot-1.jpg',
        '/assets/projects/whatsapp-assistant/screenshots/screenshot-2.jpg',
        '/assets/projects/whatsapp-assistant/screenshots/screenshot-3.jpg',
      ],
      'theatrical-cms': [
        '/assets/projects/theatrical-cms/screenshots/screenshot-1.jpg',
        '/assets/projects/theatrical-cms/screenshots/screenshot-2.jpg',
        '/assets/projects/theatrical-cms/screenshots/screenshot-3.jpg',
        '/assets/projects/theatrical-cms/screenshots/screenshot-4.jpg',
        '/assets/projects/theatrical-cms/screenshots/screenshot-5.jpg',
      ],
    };
    
    return screenshotPaths[slug] || [];
  };

  const openGallery = (project: typeof projects[0]) => {
    setGalleryProject(project);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setGalleryProject(null);
  };

  const nextImage = () => {
    if (galleryProject) {
      const screenshots = getProjectScreenshots(galleryProject.slug);
      setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
    }
  };

  const prevImage = () => {
    if (galleryProject) {
      const screenshots = getProjectScreenshots(galleryProject.slug);
      setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    }
  };

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
        // Entrance animation - stagger all cards
        gsap.fromTo(
          cards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              end: 'top 40%',
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
                end: 'top 35%',
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[2vw]"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card group relative aspect-[3/4] rounded-[22px] overflow-hidden border border-white/10 shadow-[0_28px_70px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1.5"
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
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-navy-light text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mb-3">
                {getProjectScreenshots(project.slug).length > 0 && (
                  <button
                    onClick={() => openGallery(project)}
                    className="card-btn flex items-center gap-2 px-4 py-2 bg-gold text-[#0B1320] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-gold/90 transition-colors"
                  >
                    <ImageIcon className="w-3 h-3" />
                    Gallery
                  </button>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-btn flex items-center gap-2 px-4 py-2 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    GitHub
                  </a>
                )}
              </div>

              {/* Screenshot Gallery - Larger Preview */}
              {getProjectScreenshots(project.slug).length > 0 && (
                <div className="pt-3 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <ImageIcon className="w-3 h-3 text-gold/60" />
                    <span className="text-[10px] uppercase tracking-wider text-navy-light/60">
                      Screenshots
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {getProjectScreenshots(project.slug).slice(0, 6).map((screenshot, index) => (
                      <div
                        key={index}
                        className="relative aspect-video rounded-lg overflow-hidden border border-white/10 hover:border-gold/40 transition-colors cursor-pointer group"
                        onClick={() => openGallery(project)}
                      >
                        <img
                          src={screenshot}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <ImageIcon className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    ))}
                  </div>
                  {getProjectScreenshots(project.slug).length > 6 && (
                    <p className="text-[9px] text-navy-light/60 mt-2 text-center">
                      +{getProjectScreenshots(project.slug).length - 6} more screenshots
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Modal */}
      {galleryProject && (
        <div 
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
          onClick={closeGallery}
        >
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={getProjectScreenshots(galleryProject.slug)[currentImageIndex]}
              alt={`${galleryProject.title} screenshot ${currentImageIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />

            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 rounded-full text-white text-sm">
              {currentImageIndex + 1} / {getProjectScreenshots(galleryProject.slug).length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
