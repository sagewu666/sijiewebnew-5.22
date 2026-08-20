import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
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
import { Project, Education, Experience } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  // Initial Data
  const initialProjectsData: Project[] = [
    {
      id: "nyc-dof-cca",
      title: "NYC DOF Cooperative & Condominium Abatement (CCA) Online Filing Video Series",
      category: "Instructional Video Series",
      description: "Developed a public-facing instructional video series to guide property owners and managing agents through the Cooperative and Condominium Abatement (CCA) online filing process.",
      points: [
        "Developed a public-facing instructional video series to guide property owners and managing agents through the Cooperative and Condominium Abatement (CCA) online filing process.",
        "Designed learner-centered instructional content that transformed complex tax policies and digital workflows into clear, accessible learning experiences."
      ],
      liveDemo: "",
      videoUrl: "https://www.youtube.com/watch?v=jVOfuIJJ9l8&t=6s",
      tech: ["Instructional Design", "Video Production", "Adobe PR", "Adobe PS", "YouTube", "Public Service"],
      placeholderImg: "https://img.youtube.com/vi/jVOfuIJJ9l8/maxresdefault.jpg"
    },
    {
      id: "learning-synapse",
      title: "SYNAPSE",
      category: "Learning Engine",
      description: "A recursive learning engine designed to map conceptual DNA through AI-driven content transformation.",
      points: [
        "Visualized complex information structures using cognitive load theory.",
        "Engineered an interface for deep hierarchical knowledge mapping."
      ],
      liveDemo: "https://www.linkedin.com/in/sijie-w-2020b738b",
      videoUrl: "https://vimeo.com/1156036453",
      tech: ["Information Design", "AI Integration", "UX Architecture"],
      placeholderImg: "https://raw.githubusercontent.com/sagewu666/image/main/IMG_4954.jpg"
    },
    {
      id: "snap-story",
      title: "SnapStory",
      category: "ESL/EFL Acquisition",
      description: "A magical world for kids aged 6-12 where real-world photos are transformed into interactive stories for ESL and EFL learners.",
      points: [
        "Gamified vocabulary acquisition for non-native speakers through contextualized visual inputs.",
        "Designed child-centric UI with instructional scaffolding to lower cognitive barriers in language learning."
      ],
      liveDemo: "https://www.linkedin.com/in/sijie-w-2020b738b",
      videoUrl: "https://vimeo.com/1156035200",
      tech: ["ESL/EFL Pedagogy", "K-12 Tech", "Interactive Storytelling"],
      placeholderImg: "https://raw.githubusercontent.com/sagewu666/image/main/IMG_4949.jpg"
    },
    {
      id: "memory-sphere",
      title: "MemorySphere",
      category: "Interactive Platform",
      description: "A Gesture Based Interactive Platform for Travel Memory and Place Exploration",
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
      category: "Educational Design",
      description: "An educational digital cooking learning platform designed for middle school students to support abstract thinking and decision-making.",
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
      category: "Instructional Design",
      description: "An interactive, asynchronous Introduction to AI module designed explicitly for working adult learners.",
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

  const [projectsData, setProjectsData] = useState<Project[]>(initialProjectsData);
  const [currentView, setCurrentView] = useState<'home' | 'snapstory' | 'synapse' | 'memorysphere' | 'cookwise' | 'aiworkplace'>('home');
  const hasGeneratedRef = useRef(false);

  const handleViewProject = (projectId: string) => {
    if (projectId === 'snap-story') {
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
    }, 300);
  };

  // Generate Images with Gemini
  useEffect(() => {
    const generateImages = async () => {
      if (hasGeneratedRef.current) return;
      hasGeneratedRef.current = true;

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const updatedProjects = [...projectsData];
      let hasUpdates = false;

      for (let i = 0; i < updatedProjects.length; i++) {
        const project = updatedProjects[i];
        if (project.genAiPrompt) {
          try {
            console.log(`Generating cover for ${project.title}...`);
            const response = await ai.models.generateContent({
              model: 'gemini-2.5-flash-image',
              contents: {
                parts: [{ text: project.genAiPrompt }]
              }
            });
            
            // Extract image from response
            const parts = response.candidates?.[0]?.content?.parts;
            if (parts) {
              for (const part of parts) {
                if (part.inlineData && part.inlineData.data) {
                  updatedProjects[i] = {
                    ...project,
                    placeholderImg: `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`
                  };
                  hasUpdates = true;
                }
              }
            }
          } catch (error) {
            console.error(`Failed to generate image for ${project.title}`, error);
          }
        }
      }

      if (hasUpdates) {
        setProjectsData(updatedProjects);
      }
    };

    generateImages();
  }, []); // Run once on mount

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3, rootMargin: '-80px 0px -20% 0px' });

    const sections = document.querySelectorAll('section');
    sections.forEach(el => observer.observe(el));

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, [currentView]);

  const educationData: Education[] = [
    {
      degree: "M.A. Instructional Technology & Media",
      school: "Columbia University",
      location: "",
      year: "08/2025 - Present",
      details: ["GPA: 4.0/4.0", "Core Focus: Interactive Media Programming, Instructional Design Systems"]
    },
    {
      degree: "Exchange Student, Academic Study Abroad Program",
      school: "University of California, Irvine",
      location: "",
      year: "09/2023 - 12/2023",
      details: ["GPA: 4.0/4.0", "Core Courses: Issues in K-12 Educ, Bilingual Education"]
    },
    {
      degree: "Bachelor of Education",
      major: "Major: Preschool Education",
      school: "Shanghai Normal University",
      location: "",
      year: "09/2021 - 06/2025",
      details: [
        "WES GPA: 3.64/4.0",
        "Scholarship: SHNU Academic Achievement Scholarship; SHNU Overseas Exchange Scholarship"
      ]
    }
  ];

  const experienceData: Experience[] = [
    {
      role: "Instructional Video Designer",
      organization: "Department of Finance",
      location: "",
      period: "",
      points: [
        "Led the development of internal and public-facing instructional videos by authoring scripts, producing end-to-end video content, and creating the Video Style Guide to standardize visual design and production workflows.",
        "Collaborated with subject matter experts (SMEs), a graphic designer, and cross-functional stakeholders through multiple review cycles to gather requirements, incorporate feedback, and ensure content accuracy, consistency, and policy compliance.",
        "Mentored and supervised a high school intern by assigning production tasks, providing constructive feedback, and supporting the development of high-quality instructional videos."
      ]
    },
    {
      role: "Volunteer Learning Experience Designer",
      organization: "Marlene Yu Museum",
      location: "",
      period: "02/2026 - 05/2026",
      points: [
        "Designed and developed an interactive self-guided tour web prototype for museum visitors, creating a digital platform to present artwork descriptions, background context, and extended content",
        "Structured content architecture and page logic based on visitor experience scenarios, integrating images, interpretive text, and interactive elements to enhance coherence and engagement"
      ]
    },
    {
      role: "Member",
      organization: "Snow Day Learning Lab",
      location: "",
      period: "08/2025 - 03/2026",
      points: [
        "Participated in weekly lab meetings focused on educational technology, learning experience design, and discussion of current EdTech research and practice",
        "Contributed to hands-on EdTech activities and exploratory design work related to learning tools and interactive media"
      ]
    },
    {
      role: "Research Support for PhD Dissertation Project",
      organization: "Teachers College, Columbia University",
      location: "",
      period: "10/2025 - 02/2026",
      points: [
        "Conducted qualitative analysis of dialogue and interaction data from Scratch based game creation sessions",
        "Organized and coded learning interaction data to identify patterns related to participation, identity, and sense of belonging in computing activities",
        "Supported analysis of how social and cultural contexts influence young learners’ engagement with computer science"
      ]
    }
  ];

  const skillsList = [
    "Instructional Design and Training Content Development",
    "Learner Analysis and Content Optimization",
    "WCAG & Accessible Design",
    "Cross-functional Collaboration",
    "Writing and Presentation of Learning Material",
    "Video Editing",
    "Vibe Coding"
  ];

  const toolsList = [
    "Figma", "Videoleap", "Canva", "Google AI Studio", "HTML, CSS, JavaScript", "Adobe Creative Cloud"
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

  if (currentView === 'snapstory') {
    return (
      <div className="flex flex-col w-full min-h-screen relative overflow-hidden bg-white">
        <Navbar activeSection="projects" onNavigate={handleNavigate} />
        <main className="flex-1 mt-20">
          <SnapStoryDetails onBack={handleBackToHome} />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentView === 'synapse') {
    return (
      <div className="flex flex-col w-full min-h-screen relative overflow-hidden bg-white">
        <Navbar activeSection="projects" onNavigate={handleNavigate} />
        <main className="flex-1 mt-20">
          <SynapseDetails onBack={handleBackToHome} />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentView === 'memorysphere') {
    return (
      <div className="flex flex-col w-full min-h-screen relative overflow-hidden bg-white">
        <Navbar activeSection="projects" onNavigate={handleNavigate} />
        <main className="flex-1 mt-20">
          <MemorySphereDetails onBack={handleBackToHome} />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentView === 'cookwise') {
    return (
      <div className="flex flex-col w-full min-h-screen relative overflow-hidden bg-white">
        <Navbar activeSection="projects" onNavigate={handleNavigate} />
        <main className="flex-1 mt-20">
          <CookwiseDetails onBack={handleBackToHome} />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentView === 'aiworkplace') {
    return (
      <div className="flex flex-col w-full min-h-screen relative overflow-hidden bg-white">
        <Navbar activeSection="projects" onNavigate={handleNavigate} />
        <main className="flex-1 mt-20">
          <AiWorkplaceDetails onBack={handleBackToHome} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen relative overflow-hidden bg-white">
      {/* Persistant Animated Background Globs */}
      
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="flex-1">
        <section id="home" className="w-full bg-blue-50">
          <Hero />
        </section>

        <section id="about" className="py-24 w-full bg-white reveal">
          <div className="px-6 md:px-12 max-w-7xl mx-auto w-full">
            <About />
          </div>
        </section>

        <section id="skills" className="py-24 w-full bg-violet-50 reveal">
          <div className="px-6 md:px-12 max-w-7xl mx-auto w-full">
            <SkillsSection skills={skillsList} tools={toolsList} />
          </div>
        </section>

        <section id="projects" className="py-24 w-full bg-amber-50">
          <div className="px-6 md:px-12 max-w-7xl mx-auto w-full">
            <div className="mb-16 reveal">
              <h2 className="text-4xl md:text-6xl font-black font-heading text-slate-900 mb-6 tracking-tight drop-shadow-sm title-reveal">
                Selected <span className="text-amber-600">Works</span>
              </h2>
              <p className="text-slate-600 text-lg font-light max-w-2xl">
                Precision-engineered educational tools and interactive architectures.
              </p>
            </div>
            <Projects projects={projectsData} onViewProject={handleViewProject} />
          </div>
        </section>

        <section id="experience" className="py-24 w-full bg-emerald-50 reveal">
          <div className="px-6 md:px-12 max-w-7xl mx-auto w-full">
            <ExperienceSection items={experienceData} />
          </div>
        </section>

        <section id="education" className="py-24 w-full bg-white reveal mb-10">
          <div className="px-6 md:px-12 max-w-7xl mx-auto w-full">
            <EducationSection items={educationData} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;