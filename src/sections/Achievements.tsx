import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Trophy,
  Award,
  Star,
  Image as ImageIcon,
  Instagram,
  Facebook,
  Plus,
  Github,
} from 'lucide-react';

// Achievement image paths
const competitionImages = [
  '/assets/achievements/competitions/competition-1.jpg',
  '/assets/achievements/competitions/competition-2.jpg',
  '/assets/achievements/competitions/competition-3.jpg',
  '/assets/achievements/competitions/competition-4.jpg',
  '/assets/achievements/competitions/competition-5.jpg',
];

const certificateImages = [
  '/assets/achievements/certificates/certificate-1.jpg',
  '/assets/achievements/certificates/certificate-2.jpg',
  '/assets/achievements/certificates/certificate-3.jpg',
  '/assets/achievements/certificates/certificate-4.jpg',
  '/assets/achievements/certificates/certificate-5.jpg',
  '/assets/achievements/certificates/certificate-6.jpg',
  '/assets/achievements/certificates/certificate-7.jpg',
];

const universityImages = [
  '/assets/achievements/university/university-1.jpg',
  '/assets/achievements/university/university-2.jpg',
  '/assets/achievements/university/university-3.jpg',
  '/assets/achievements/university/university-4.jpg',
  '/assets/achievements/university/university-5.jpg',
  '/assets/achievements/university/university-6.jpg',
  '/assets/achievements/university/university-7.jpg',
];

gsap.registerPlugin(ScrollTrigger);

const competitions = [
  {
    title: '🥈 Silver Medal',
    description: '2026 ICPC Syrian Private Universities Collegiate Programming Contest',
  },
  {
    title: 'Participant',
    description: '2026 ICPC Syrian Collegiate Programming Contest',
  },
  {
    title: 'Contestant Coach',
    description: '2025 ICPC ACPC Kickoff Online Individual Contest, Team: Algorithmmer',
  },
  {
    title: 'Participant',
    description: '2024 ICPC Syrian Collegiate Programming Contest, Team: Hope Burners',
  },
  {
    title: 'Participant',
    description: '2024 ICPC Syrian Private Universities Collegiate Programming Contest, Team: Hope Burners',
  },
  {
    title: 'Participant',
    description: '2023 ICPC Syrian Private Universities Collegiate Programming Contest, Team: GermanUOK',
  },
  {
    title: 'Participant',
    description: '2023 ICPC Syrian Collegiate Programming Contest, Team: GermanUOK',
  },
  {
    title: '🏆 Champion',
    description: 'University of Kalamoon Programming Competition (2024, 2025)',
  },
  {
    title: 'Judge & Problem Setter',
    description: 'Programming Competition (2026)',
  },
  {
    title: 'Codeforces Expert',
    description: '2,800+ problems solved',
  },
];



const universityRecognition = [
  {
    title: 'Faculty of Engineering Exhibition Award',
    description: '2025, 2026',
  },
  {
    title: 'University Certificate',
    description: 'Educational Leadership',
  },
  {
    title: 'University Certificate',
    description: 'Educational Leadership',
  },
  {
    title: 'University Certificate',
    description: 'Educational Leadership',
  },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const competitionsRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);
  const universityRef = useRef<HTMLDivElement>(null);

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
            end: 'top 55%',
            scrub: 0.4,
          },
        }
      );

      // Competitions animation
      const competitionItems = competitionsRef.current?.querySelectorAll('.competition-item');
      if (competitionItems) {
        gsap.fromTo(
          competitionItems,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.06,
            scrollTrigger: {
              trigger: competitionsRef.current,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 0.4,
            },
          }
        );
      }

      // Certificates animation
      const certificateCards = certificatesRef.current?.querySelectorAll('.certificate-card');
      if (certificateCards) {
        gsap.fromTo(
          certificateCards,
          { scale: 0.92, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            stagger: 0.08,
            scrollTrigger: {
              trigger: certificatesRef.current,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 0.4,
            },
          }
        );
      }

      // University recognition animation
      const universityItems = universityRef.current?.querySelectorAll('.university-item');
      if (universityItems) {
        gsap.fromTo(
          universityItems,
          { x: 24, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.08,
            scrollTrigger: {
              trigger: universityRef.current,
              start: 'top 80%',
              end: 'top 50%',
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
      id="achievements"
      className="relative w-full py-[10vh] px-[7vw] bg-navy-secondary z-[60]"
    >
      {/* Header */}
      <div ref={headerRef} className="mb-16">
        <span className="inline-block text-xs font-medium uppercase tracking-[0.14em] text-gold mb-4">
          Achievements
        </span>
        <h2 className="text-[clamp(34px,3.6vw,52px)] font-bold uppercase tracking-[0.06em] leading-[1] text-white">
          Recognition & Competitions
        </h2>
      </div>

      {/* ICPC & Programming Competitions */}
      <div ref={competitionsRef} className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Trophy className="w-6 h-6 text-gold" />
          <h3 className="text-xl font-semibold uppercase tracking-[0.06em] text-white">
            ICPC & Programming Competitions
          </h3>
        </div>

        {/* Competition Links */}
        <div className="flex items-center gap-4 mb-6 flex-wrap">
          <span className="text-xs text-navy-light/60">Competition Pages:</span>
          <a
            href="http://www.uok.edu.sy/%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%ab%d8%a7%d9%86%d9%8a-%d9%84%d9%84%d9%85%d8%b9%d8%b3%d9%83%d8%b1-%d8%a7%d9%84%d8%aa%d8%af%d8%b1%d9%8a%d8%a8%d9%8a-%d9%81%d9%8a-%d8%a7%d9%84%d9%85/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-navy-light hover:bg-gold/20 hover:border-gold/40 transition-colors"
          >
            <Star className="w-3 h-3 text-gold/60" />
            University Exhibition
          </a>
          <a
            href="https://icpc.global/private/person/988026/ICPCID"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-navy-light hover:bg-gold/20 hover:border-gold/40 transition-colors"
          >
            <Trophy className="w-3 h-3 text-gold/60" />
            ICPC Profile
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {competitions.map((comp, index) => (
            <div
              key={index}
              className="competition-item p-4 rounded-xl bg-navy-primary/50 border border-white/5 hover:border-gold/30 transition-colors"
            >
              <h4 className="text-sm font-semibold text-white mb-1">
                {comp.title}
              </h4>
              <p className="text-xs text-navy-light">{comp.description}</p>
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <ImageIcon className="w-4 h-4 text-gold/60" />
            <span className="text-xs uppercase tracking-wider text-navy-light/60">
              Competition Photos
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {competitionImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Competition photo ${index + 1}`}
                className="aspect-square rounded-lg object-cover border border-white/10"
              />
            ))}
          </div>
        </div>

        {/* Social Media Links Placeholder */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-navy-light/60">Follow our documented journey:</span>
          <a
            href=""
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold/20 hover:border-gold/40 transition-colors"
          >
            <Instagram className="w-4 h-4 text-gold/60" />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold/20 hover:border-gold/40 transition-colors"
            title="Facebook"
          >
            <Facebook className="w-4 h-4 text-gold/60" />
          </a>
          <a
            href="https://codeforces.com/profile/Mayar471"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold/20 hover:border-gold/40 transition-colors"
            title="Codeforces"
          >
            <Trophy className="w-4 h-4 text-gold/60" />
          </a>
          <a
            href="https://github.com/Mayar471"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold/20 hover:border-gold/40 transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4 text-gold/60" />
          </a>
        </div>
      </div>

      {/* Certificates */}
      <div ref={certificatesRef} className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Award className="w-6 h-6 text-gold" />
          <h3 className="text-xl font-semibold uppercase tracking-[0.06em] text-white">
            Certificates
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {certificateImages.map((image, index) => (
            <div
              key={index}
              className="certificate-card p-4 rounded-xl bg-navy-primary/50 border border-white/5 hover:border-gold/30 transition-colors"
            >
              <img
                src={image}
                alt={`Certificate ${index + 1}`}
                className="aspect-[4/3] rounded-lg object-cover mb-4 border border-white/10"
              />
              <h4 className="text-sm font-semibold text-white mb-1">
                Certificate {index + 1}
              </h4>
              <p className="text-xs text-navy-light">Professional Achievement</p>
            </div>
          ))}

          {/* Add Certificate Card */}
          <div className="certificate-card p-6 rounded-xl bg-navy-primary/30 border border-dashed border-white/20 flex items-center justify-center cursor-pointer hover:border-gold/40 transition-colors">
            <div className="text-center">
              <Plus className="w-8 h-8 text-gold/40 mx-auto mb-2" />
              <p className="text-xs text-navy-light/60">Add Certificate</p>
            </div>
          </div>
        </div>
      </div>

      {/* University Recognition & Exhibition */}
      <div ref={universityRef}>
        <div className="flex items-center gap-3 mb-8">
          <Star className="w-6 h-6 text-gold" />
          <h3 className="text-xl font-semibold uppercase tracking-[0.06em] text-white">
            University Recognition & Exhibition
          </h3>
        </div>

        {/* University Links */}
        <div className="flex items-center gap-4 mb-6 flex-wrap">
          <span className="text-xs text-navy-light/60">University Pages:</span>
          <a
            href="http://www.uok.edu.sy/%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%ab%d8%a7%d9%86%d9%8a-%d9%84%d9%84%d9%85%d8%b9%d8%b3%d9%83%d8%b1-%d8%a7%d9%84%d8%aa%d8%af%d8%b1%d9%8a%d8%a8%d9%8a-%d9%81%d9%8a-%d8%a7%d9%84%d9%85/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-navy-light hover:bg-gold/20 hover:border-gold/40 transition-colors"
          >
            <Star className="w-3 h-3 text-gold/60" />
            Faculty Exhibition
          </a>
          <a
            href="https://www.facebook.com/share/1MZkFvJpuU/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-navy-light hover:bg-gold/20 hover:border-gold/40 transition-colors"
          >
            <Facebook className="w-3 h-3 text-gold/60" />
            Featured Posts
          </a>
        </div>

        <div className="space-y-4 mb-6">
          {universityRecognition.map((rec, index) => (
            <div
              key={index}
              className="university-item flex items-center gap-4 p-4 rounded-xl bg-navy-primary/50 border border-white/5 hover:border-gold/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  {rec.title}
                </h4>
                <p className="text-xs text-navy-light">{rec.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <ImageIcon className="w-4 h-4 text-gold/60" />
            <span className="text-xs uppercase tracking-wider text-navy-light/60">
              Exhibition Photos
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {universityImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`University photo ${index + 1}`}
                className="aspect-square rounded-lg object-cover border border-white/10"
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
