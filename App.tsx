import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsSection } from './components/SkillsSection';
import { Projects } from './components/Projects';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { SnapStoryDetails } from './components/SnapStoryDetails';
import { SynapseDetails } from './components/SynapseDetails';
import { MemorySphereDetails } from './components/MemorySphereDetails';
import { CookwiseDetails } from './components/CookwiseDetails';
import { AiWorkplaceDetails } from './components/AiWorkplaceDetails';
import { DofDetails } from './components/DofDetails';
import { Project, Education, Experience } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentView, setCurrentView] = useState<'home' | 'dof' | 'snapstory' | 'synapse' | 'memorysphere' | 'cookwise' | 'aiworkplace'>('home');

  // Initial Projects Data
  const initialProjectsData: Project[] = [
    {
      id: "nyc-dof-cca",
      title: "Cooperative & Condominium Abatement (CCA) Video Series",
      category: "Instructional Video",
      role: "NYC Department of Finance",
      description: "Developed a public-facing instructional video series to guide property owners and managing agents through the Cooperative and Condominium Abatement (CCA) online filing process, transforming complex tax policies into clear, learner-centered experiences.",
      points: [
        "Designed learner-centered instructional content that transformed complex tax policies and digital workflows into clear, accessible learning experiences.",
        "Led the development of 5 public-facing instructional videos and 3 internal training videos, authored 30+ scripts, and created a Video Style Guide to standardize visual design and production workflows.",
        "Collaborated with subject matter experts (SMEs), a graphic designer, and DOF leadership through multiple review cycles to gather requirements, incorporate feedback, and ensure content accuracy, consistency, and policy compliance.",
        "Mentored and supervised a high school intern by assigning production tasks, providing constructive feedback, and supporting the development of high-quality instructional videos."
      ],
      liveDemo: "",
      videoUrl: "https://youtu.be/No4ZcYjFO00?si=hGacXLUg5ZkDqMV7",
      tech: ["Instructional Video", "Video Style Guide", "Scriptwriting", "SME Collaboration"],
      placeholderImg: "https://i.ytimg.com/vi/No4ZcYjFO00/maxresdefault.jpg"
    },
    {
      id: "learning-synapse",
      title: "SYNAPSE",
      category: "Cognitive Learning Engine",
      description: "Engineered a recursive learning engine designed to map conceptual knowledge through AI-driven content transformation and interactive hierarchical concept mapping.",
      points: [
        "Visualized complex information structures using cognitive load theory.",
        "Engineered an interface for deep hierarchical knowledge mapping."
      ],
      liveDemo: "https://www.linkedin.com/in/sijie-w-2020b738b",
      videoUrl: "https://vimeo.com/1156036453",
      tech: ["Information Architecture", "AI Integration", "UX Systems"],
      placeholderImg: "https://raw.githubusercontent.com/sagewu666/image/main/IMG_4954.jpg"
    },
    {
      id: "snap-story",
      title: "SnapStory",
      category: "ESL/EFL Language Acquisition",
      description: "Designed an interactive language acquisition platform for children aged 6 to 12 that transforms real-world photos into engaging stories for ESL and EFL learners.",
      points: [
        "Gamified vocabulary acquisition for non-native speakers through contextualized visual inputs.",
        "Designed child-centric UI with instructional scaffolding to lower cognitive barriers in language learning."
      ],
      liveDemo: "https://www.linkedin.com/in/sijie-w-2020b738b",
      videoUrl: "https://vimeo.com/1156035200",
      tech: ["ESL/EFL Pedagogy", "K-12 EdTech", "Interactive Storytelling"],
      placeholderImg: "https://raw.githubusercontent.com/sagewu666/image/main/IMG_4949.jpg"
    },
    {
      id: "memory-sphere",
      title: "MemorySphere",
      category: "Spatial & Embodied Interaction",
      description: "Developed a gesture-based interactive platform for travel memory and spatial exploration, seamlessly linking 3D geographic visualization directly with personal autobiographical memory.",
      points: [
        "Interactive 3D globe visualization linking spatial data with autobiographical memory.",
        "Gesture-based input control for engaging spatial reflections and personal storytelling."
      ],
      liveDemo: "",
      videoUrl: "https://vimeo.com/1190294766?fl=ip&fe=ec",
      tech: ["Spatial Interaction", "Computational Modeling", "Embodied Cognition"],
      placeholderImg: "https://raw.githubusercontent.com/sagewu666/image2-site/main/%E6%88%AA%E5%B1%8F2026-05-22%2012.41.00.png"
    },
    {
      id: "cookwise",
      title: "CookWise",
      category: "Inquiry-Based Learning Platform",
      description: "Created an inquiry-based digital cooking learning platform for middle school students to cultivate abstract reasoning and procedural decision-making through structured cognitive feedback.",
      points: [
        "Transformed cooking into an interactive cognitive learning process via a 4-stage loop.",
        "Structured feedback designed to promote the internalization and transfer of structural knowledge."
      ],
      liveDemo: "",
      videoUrl: "https://vimeo.com/1188587135?fl=ip&fe=ec",
      tech: ["EdTech", "Kinesthetic Learning", "Cognitive Scaffolding"],
      placeholderImg: "https://raw.githubusercontent.com/sagewu666/image2-site/main/%E6%88%AA%E5%B1%8F2026-05-22%2012.44.33.png"
    },
    {
      id: "ai-workplace",
      title: "AI in the Workplace",
      category: "Asynchronous Instructional Module",
      description: "Authored an interactive, asynchronous instructional module designed for working adult learners to build foundational artificial intelligence literacy and workplace prompt engineering skills.",
      points: [
        "Learner-centered design integrating modular structures for asynchronous self-paced study.",
        "Scaffolded prompt labs and peer interactions to build confidence without technical overwhelm."
      ],
      liveDemo: "https://www.figma.com/make/sgOHMLNUpZfPcT97IxpgLm/AI-WORK?fullscreen=1&t=uXbSXn5zhSpa1NQp-1&code-node-id=0-9",
      videoUrl: "",
      tech: ["Needs Assessment", "Asynchronous Delivery", "Curriculum Design"],
      placeholderImg: "https://raw.githubusercontent.com/sagewu666/image2-site/main/%E6%88%AA%E5%B1%8F2026-05-22%2012.52.48.png"
    }
  ];

  const [projectsData] = useState<Project[]>(initialProjectsData);

  const handleViewProject = (projectId: string) => {
    if (projectId === 'nyc-dof-cca') {
      setCurrentView('dof');
      window.scrollTo(0, 0);
    } else if (projectId === 'snap-story') {
      setCurrentView('snapstory');
      window.scrollTo(0, 0);
    } else if (projectId === 'learning-synapse') {
      setCurrentView('synapse');
      window.scrollTo(0, 0);
    } else if (projectId === 'memory-sphere') {
      setCurrentView('memorysphere');
      window.scrollTo(0, 0);
    } else if (projectId === 'cookwise') {
      setCurrentView('cookwise');
      window.scrollTo(0, 0);
    } else if (projectId === 'ai-workplace') {
      setCurrentView('aiworkplace');
      window.scrollTo(0, 0);
    }
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: '-70px 0px -40% 0px' }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [currentView]);

  // Education Data with requested courses
  const educationData: Education[] = [
    {
      degree: "M.A. Instructional Technology & Media",
      school: "Teachers College, Columbia University",
      location: "New York, NY",
      year: "09/2025 – 05/2027",
      courses: [
        "Theory and Programming of Interactive Media",
        "Instructional Design of EdTechnology",
        "Staff Development and Training",
        "The Learning Org: Digital Workplace"
      ],
      details: [
        "Cumulative GPA: 4.0 / 4.0",
        "Cognitive Engineering, Systems Design & Educational Evaluation",
        "Interactive Media Programming & Learning Systems Architecture"
      ]
    },
    {
      degree: "Academic Study Abroad Program",
      school: "University of California, Irvine",
      location: "Irvine, CA",
      year: "09/2023 - 12/2023",
      details: [
        "GPA: 4.0 / 4.0",
        "Courses: Issues in K-12 Education, Bilingual Education"
      ]
    },
    {
      degree: "Bachelor of Education (B.Ed.)",
      major: "Preschool Education",
      school: "Shanghai Normal University",
      location: "Shanghai, China",
      year: "09/2021 - 06/2025",
      details: [
        "WES Verified GPA: 3.64 / 4.0",
        "SHNU Academic Achievement Scholarship recipient.",
        "SHNU Overseas Exchange Program Scholarship recipient."
      ]
    }
  ];

  // Experience Data with Columbia Higher Education Intern, Columbia CA, and NYC Department of Finance
  const experienceData: Experience[] = [
    {
      role: "Higher Education Intern",
      organization: "Columbia University",
      location: "New York, NY",
      period: "11/2026 – 05/2027",
      points: [
        "Support the planning and coordination of academic and professional development events, including orientations, career seminars, networking events, and student/alumni engagement activities.",
        "Assist with student services and career development initiatives, including speaker coordination, event logistics, and communication with students and alumni.",
        "Maintain program materials and website content, collect participant feedback, and provide administrative support to improve program operations and student engagement."
      ]
    },
    {
      role: "Course Assistant",
      organization: "Teachers College, Columbia University",
      location: "New York, NY",
      period: "09/2026 – 12/2026",
      points: [
        "Support weekly online class sessions for Theory & Programming of Interactive Media Lab by tracking attendance, coordinating course activities, and assisting the instructor with class operations.",
        "Hold weekly office hours to support students and organize assignments, submissions, and other course materials."
      ]
    },
    {
      role: "PEA Summer Graduate Intern",
      organization: "New York City Department of Finance",
      location: "New York, NY",
      period: "06/2026 – 08/2026",
      videoUrl: "https://www.youtube.com/watch?v=jVOfuIJJ9l8&t=6s",
      points: [
        "Led the development of 5 public-facing instructional videos and 3 internal training videos, authored 30+ scripts, and created a Video Style Guide to standardize visual design and production workflows.",
        "Collaborated with subject matter experts (SMEs), a graphic designer, and DOF leadership through multiple review cycles to gather requirements, incorporate feedback, and ensure content accuracy, consistency, and policy compliance.",
        "Mentored and supervised a high school intern by assigning production tasks, providing constructive feedback, and supporting the development of high-quality instructional videos."
      ]
    },
    {
      role: "Volunteer Learning Experience Designer",
      organization: "Marlene Yu Museum",
      location: "Remote / Hybrid",
      period: "02/2026 – 05/2026",
      points: [
        "Designed and developed an interactive self-guided tour web prototype for museum visitors, creating a digital platform to present artwork descriptions, background context, and extended content.",
        "Structured content architecture and page logic based on visitor experience scenarios, integrating images, interpretive text, and interactive elements to enhance coherence and engagement."
      ]
    },
    {
      role: "Member",
      organization: "Snow Day Learning Lab",
      location: "New York, NY",
      period: "08/2025 – 03/2026",
      points: [
        "Participated in weekly lab meetings focused on educational technology, learning experience design, and discussion of current EdTech research and practice.",
        "Contributed to hands-on EdTech activities and exploratory design work related to learning tools and interactive media."
      ]
    },
    {
      role: "Research Support for PhD Dissertation Project",
      organization: "Teachers College, Columbia University",
      location: "New York, NY",
      period: "10/2025 – 02/2026",
      points: [
        "Conducted qualitative analysis of dialogue and interaction data from Scratch based game creation sessions.",
        "Organized and coded learning interaction data to identify patterns related to participation, identity, and sense of belonging in computing activities.",
        "Supported analysis of how social and cultural contexts influence young learners’ engagement with computer science."
      ]
    }
  ];

  const skillsList = [
    "Instructional Systems Design & Curriculum Scaffolding",
    "Learner Analysis, Needs Assessment & Content Optimization",
    "WCAG 2.1 AA Accessible Instructional Media Design",
    "Qualitative Learning Interaction Coding & Analytics",
    "Instructional Scriptwriting & Video Production Pipelines",
    "Cross-Functional Stakeholder & SME Collaboration"
  ];

  const toolsList = [
    "Figma",
    "Adobe Premiere Pro",
    "Adobe Photoshop",
    "Canva",
    "Videoleap",
    "HTML5 / CSS3 / JavaScript",
    "Google AI Studio",
    "Git & Prototyping Tools"
  ];

  const handleNavigate = (sectionId: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  // Case Study Subviews
  if (currentView === 'dof') {
    return (
      <div className="flex flex-col w-full min-h-screen bg-slate-50">
        <Navbar activeSection="projects" onNavigate={handleNavigate} />
        <main className="flex-1 mt-16">
          <DofDetails onBack={handleBackToHome} />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentView === 'snapstory') {
    return (
      <div className="flex flex-col w-full min-h-screen bg-slate-50">
        <Navbar activeSection="projects" onNavigate={handleNavigate} />
        <main className="flex-1 mt-16">
          <SnapStoryDetails onBack={handleBackToHome} />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentView === 'synapse') {
    return (
      <div className="flex flex-col w-full min-h-screen bg-slate-50">
        <Navbar activeSection="projects" onNavigate={handleNavigate} />
        <main className="flex-1 mt-16">
          <SynapseDetails onBack={handleBackToHome} />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentView === 'memorysphere') {
    return (
      <div className="flex flex-col w-full min-h-screen bg-slate-50">
        <Navbar activeSection="projects" onNavigate={handleNavigate} />
        <main className="flex-1 mt-16">
          <MemorySphereDetails onBack={handleBackToHome} />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentView === 'cookwise') {
    return (
      <div className="flex flex-col w-full min-h-screen bg-slate-50">
        <Navbar activeSection="projects" onNavigate={handleNavigate} />
        <main className="flex-1 mt-16">
          <CookwiseDetails onBack={handleBackToHome} />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentView === 'aiworkplace') {
    return (
      <div className="flex flex-col w-full min-h-screen bg-slate-50">
        <Navbar activeSection="projects" onNavigate={handleNavigate} />
        <main className="flex-1 mt-16">
          <AiWorkplaceDetails onBack={handleBackToHome} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="flex-1">
        {/* Hero Section - Crisp Clean White */}
        <section id="home" className="w-full bg-white">
          <Hero />
        </section>

        {/* Selected Works / Projects - Solid Pastel Light Blue */}
        <section id="projects" className="py-20 md:py-24 w-full bg-sky-50 border-b border-sky-200/80">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <Projects projects={projectsData} onViewProject={handleViewProject} />
          </div>
        </section>

        {/* Experience & Fieldwork - Solid Pastel Light Green */}
        <section id="experience" className="py-20 md:py-24 w-full bg-emerald-50/70 border-b border-emerald-200/80">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <ExperienceSection items={experienceData} onViewDof={() => handleViewProject('nyc-dof-cca')} />
          </div>
        </section>

        {/* Academic Credentials / Education - Solid Pastel Light Yellow / Cream */}
        <section id="education" className="py-20 md:py-24 w-full bg-amber-50/70 border-b border-amber-200/80">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <EducationSection items={educationData} />
          </div>
        </section>

        {/* Core Competencies & Toolkit - Solid Pastel Light Purple / Lavender */}
        <section id="skills" className="py-20 md:py-24 w-full bg-purple-50/70 border-b border-purple-200/80">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <SkillsSection skills={skillsList} tools={toolsList} />
          </div>
        </section>

        {/* About & Pedagogical Philosophy - Solid Clean Slate */}
        <section id="about" className="py-20 md:py-24 w-full bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <About />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;