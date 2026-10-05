import { Mail, Github, Linkedin, ExternalLink, MapPin, MessageCircle, Clock } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Snowfall from "react-snowfall";
import { useState, useEffect } from "react";

const Index = () => {
  // Show snowfall only in December
  const isDecember = new Date().getMonth() === 11; // 0-indexed

  // Local time state
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Manila',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {isDecember && (
        <Snowfall
          snowflakeCount={40}
          speed={[0.3, 1.0]}
          wind={[-0.3, 0.5]}
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />
      )}

      {/* Local Time Display */}
      <div className="relative z-10 bg-surface-subtle/50">
        <div className="container max-w-5xl">
          <div className="flex items-center justify-center gap-2 py-3 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            <span className="font-medium">{formatTime(currentTime)}</span>
            <span className="text-divider">·</span>
            <span>GMT+8 (Manila, Philippines)</span>
          </div>
        </div>
      </div>

      <div className="container relative z-10 max-w-5xl py-6 md:py-8">
        {/* Header */}
        <header className="relative mb-10 md:mb-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-tight mb-2 pr-20 md:pr-0">
                John Angelo Torres
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-2 md:mb-4">
                Full Stack Developer | Web and Mobile Applications
              </p>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Manila, Philippines
                </span>
                <span className="hidden md:inline text-divider">·</span>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <a href="mailto:gelodevelops@gmail.com" className="link-subtle flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </a>
                  <a href="https://github.com/JATorres-zxc" target="_blank" rel="noopener noreferrer" className="link-subtle flex items-center gap-1.5">
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/john-angelo-torres-75b561349/" target="_blank" rel="noopener noreferrer" className="link-subtle flex items-center gap-1.5">
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://wa.me/639380655783" target="_blank" rel="noopener noreferrer" className="link-subtle flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-1 md:static">
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <main className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left Column */}
          <div className="md:col-span-7 space-y-12">
            {/* About */}
            <section>
              <h2 className="section-title">About</h2>
              <p className="text-foreground leading-relaxed">
                I'm a full stack developer with 4+ years of experience building production web applications for international clients and a SaaS product team. I work across React, Vue.js, TypeScript, Node.js, and Django, with hands-on experience in AI integrations, subscription payments, real-time features, testing, and AWS deployment. I'm open to remote roles worldwide.
                {/* Hidden until received: I'm an AWS Certified Developer – Associate. */}
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="section-title">Experience</h2>
              <div className="space-y-6">
                <ExperienceItem
                  role="Freelance Full Stack Developer"
                  company="Self-Employed · Remote"
                  period="2022 — Present"
                  projects={[
                    {
                      name: "Rentalizer",
                      link: "https://rentalizer.ai/",
                      role: "Solo Developer",
                      highlights: [
                        "Built a Node.js/React subscription platform end to end for a real estate coaching business with 500+ paying users.",
                        "Integrated OpenAI with RentCast and AirDNA data for AI market analysis, property recommendations, and student Q&A.",
                        "Built AI tools for the coach to send personalized student recommendations, and implemented Stripe recurring billing.",
                      ],
                      tech: ["React", "Node.js", "OpenAI", "Stripe", "RentCast", "AirDNA"],
                    },
                    {
                      name: "TheLookBook.AI",
                      link: "https://thelookbook.ai/",
                      role: "Lead Developer",
                      highlights: [
                        "Led development of a Node.js/React marketplace connecting models, photographers, and agencies, with 100+ paying users.",
                        "Built Stripe subscriptions, a booking calendar, real-time messaging with Socket.io, and AI tools for casting matches and portfolio feedback.",
                        "Interviewed and hired a part-time developer; assigned tasks, reviewed code, and coordinated releases with QA in a 4-person team.",
                        "Developing the React Native (Expo) mobile version of the platform, extending it with native mobile features.",
                      ],
                      tech: ["React", "Node.js", "Socket.io", "Stripe", "React Native", "Expo"],
                    },
                    {
                      name: "Other client work",
                      highlights: [
                        "Built internal admin dashboards for 3+ clients, including inventory and order management for an apparel brand.",
                        "Wrote Jest and pytest unit tests, plus Playwright end-to-end tests for critical flows like auth and payments.",
                        "Deployed apps on Vercel, Render, AWS, and VPS using Docker and GitHub/GitLab CI/CD pipelines.",
                        "Set up Grafana, Prometheus, and Sentry for monitoring and error tracking on every production app shipped.",
                      ],
                    },
                  ]}
                />
                <ExperienceItem
                  role="Full Stack Developer"
                  company="HQZen · Cebu, PH (Hybrid) · Promoted from Intern"
                  period="2024 — 2025"
                  highlights={[
                    "Co-built the scheduling system, a core feature of a time-tracking and recruitment SaaS used by 1,000+ active users.",
                    "Developed recurring shifts, timezone-aware scheduling, approval workflows, and time-off conflict detection across the Django REST API and Vue.js UI.",
                    "Promoted from intern to full-time in 2 months; took part in sprint planning and code reviews on the 8-person core Time & Money team.",
                  ]}
                  tech={["Django", "Django REST Framework", "Vue.js"]}
                />
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="section-title">Recent Projects</h2>
              <div className="space-y-1.5">
                <ProjectItem
                  name="TheLookBookAI"
                  description="The premier platform connecting models, photographers, and agencies worldwide."
                  link="https://thelookbook.ai/"
                />
                <ProjectItem
                  name="Custom Clad"
                  description="Commercial cladding fabricator and installer site showcasing end-to-end design, manufacture, supply, and installation across Victoria and Queensland."
                  link="https://customclad.com.au/"
                />
                <ProjectItem
                  name="RentalizerAI"
                  description="Live personalized guidance and AI-powered tools to find markets, acquire properties, and automate operations."
                  link="https://rentalizer.ai/"
                />
                {/* <ProjectItem
                  name="ML-Pipeline"
                  description="End-to-end ML pipeline framework with automated feature engineering"
                  link="https://github.com"
                /> */}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="md:col-span-5 space-y-12">
            {/* Tech Stack */}
            <section>
              <h2 className="section-title">Technical Expertise</h2>
              <div className="space-y-4">
                <TechCategory
                  category="Languages"
                  items={["JavaScript", "TypeScript", "Python", "SQL"]}
                />
                <TechCategory
                  category="Frontend"
                  items={["React", "Vue.js", "Tailwind CSS", "HTML", "CSS"]}
                />
                <TechCategory
                  category="Mobile"
                  items={["React Native", "Expo", "Flutter", "TestFlight", "App Store Connect", "Google Play Console"]}
                />
                <TechCategory
                  category="Backend"
                  items={["Node.js", "Express.js", "Django", "Django REST Framework", "REST APIs", "Socket.io", "Supabase"]}
                />
                <TechCategory
                  category="Databases"
                  items={["PostgreSQL", "MySQL", "MongoDB"]}
                />
                <TechCategory
                  category="Cloud & DevOps"
                  items={["AWS", "Cloudflare", "Docker", "Vercel", "Render", "IONOS", "GitHub Actions", "GitLab CI/CD"]}
                />
                <TechCategory
                  category="Monitoring"
                  items={["Grafana", "Prometheus", "Sentry"]}
                />
                <TechCategory
                  category="Testing"
                  items={["Jest", "Vitest", "React Testing Library", "Playwright", "pytest"]}
                />
                <TechCategory
                  category="APIs & Integrations"
                  items={["OpenAI", "Stripe", "Google Maps", "OpenStreetMap", "RentCast", "AirDNA", "ThetaData", "Interactive Brokers (IBKR)"]}
                />
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="section-title">Education</h2>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-foreground">BS Computer Science</p>
                  <p className="text-sm text-muted-foreground">University of the Philippines - Cebu · 2025</p>
                  <p className="text-xs text-muted-foreground">Thesis: Machine learning with a focus on smart contracts</p>
                </div>
              </div>
            </section>

            {/* Certifications — hidden until received */}
            {/* <section>
              <h2 className="section-title">Certifications</h2>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="text-foreground">AWS Certified Developer - Associate</span>
                  <span className="text-muted-foreground"> · 2026</span>
                </p>
              </div>
            </section> */}

            {/* Community */}
            {/* <section>
              <h2 className="section-title">Community</h2>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="text-foreground">Speaker</span> — MLConf, PyData, AI Summit
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground">Maintainer</span> — Open source ML tools
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground">Mentor</span> — AI/ML engineering bootcamps
                </p>
              </div>
            </section> */}
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-divider">
          <p className="text-xs text-muted-foreground">
            Last updated October 2026
          </p>
        </footer>
      </div>
    </div>
  );
};

type ExperienceProject = {
  name: string;
  link?: string;
  role?: string;
  highlights: string[];
  tech?: string[];
};

const TechLine = ({ tech }: { tech?: string[] }) =>
  tech && tech.length > 0 ? (
    <p className="mt-2 text-xs text-muted-foreground">{tech.join(" · ")}</p>
  ) : null;

const HighlightList = ({ highlights }: { highlights: string[] }) => (
  <ul className="space-y-1">
    {highlights.map((highlight, index) => (
      <li key={index} className="text-sm text-muted-foreground leading-relaxed">
        {highlight}
      </li>
    ))}
  </ul>
);

const ExperienceItem = ({
  role,
  company,
  period,
  highlights,
  tech,
  projects,
}: {
  role: string;
  company: string;
  period: string;
  highlights?: string[];
  tech?: string[];
  projects?: ExperienceProject[];
}) => (
  <div className="experience-item">
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
      <div>
        <h3 className="font-medium text-foreground">{role}</h3>
        <p className="text-sm text-muted-foreground">{company}</p>
      </div>
      <span className="text-sm text-muted-foreground whitespace-nowrap">{period}</span>
    </div>
    {highlights && <HighlightList highlights={highlights} />}
    <TechLine tech={tech} />
    {projects && (
      <div className="mt-4 space-y-5">
        {projects.map((project) => (
          <div key={project.name}>
            <p className="text-sm font-medium text-foreground mb-1">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-divider underline-offset-4 hover:decoration-foreground transition-colors"
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
              {project.role && (
                <span className="font-normal text-muted-foreground"> · {project.role}</span>
              )}
            </p>
            <HighlightList highlights={project.highlights} />
            <TechLine tech={project.tech} />
          </div>
        ))}
      </div>
    )}
  </div>
);

const ProjectItem = ({
  name,
  description,
  link,
}: {
  name: string;
  description: string;
  link?: string;
}) => {
  const content = (
    <>
      <div>
        <h3 className="font-medium text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {link && (
        <ExternalLink className="w-4 h-4 shrink-0 text-muted-foreground" aria-hidden="true" />
      )}
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start justify-between gap-3 rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-divider hover:bg-surface-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-start justify-between gap-4">{content}</div>;
};

const TechCategory = ({
  category,
  items,
}: {
  category: string;
  items: string[];
}) => (
  <div>
    <p className="text-sm font-medium text-foreground mb-1">{category}</p>
    <p className="text-sm text-muted-foreground">
      {items.join(" · ")}
    </p>
  </div>
);

export default Index;