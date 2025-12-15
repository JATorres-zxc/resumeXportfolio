import { Mail, Github, Linkedin, ExternalLink, MapPin } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-5xl py-12 md:py-20">
        {/* Header */}
        <header className="mb-12 md:mb-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-tight mb-2">
                John Angelo Torres
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-4">
                Full Stack Developer | Web and Mobile Applications
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Cebu City, Philippines
                </span>
                <span className="hidden md:inline text-divider">·</span>
                <div className="flex items-center gap-4">
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
                </div>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left Column */}
          <div className="md:col-span-7 space-y-12">
            {/* About */}
            <section>
              <h2 className="section-title">About</h2>
              <p className="text-foreground leading-relaxed text-justify">
              Full-stack developer with professional experience building and maintaining production web applications. Strong background in end-to-end development, from system design and implementation to deployment and ongoing optimization. Known for delivering reliable, maintainable solutions, improving performance, and solving complex product and technical challenges.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="section-title">Experience</h2>
              <div className="space-y-6">
                <ExperienceItem
                  role="Full Stack Developer"
                  company="HQZen"
                  period="Aug 2024 — Aug 2025"
                  highlights={[
                    "Delivered production-ready features across backend and frontend, supporting internal and client-facing workflows used by 1000+ active users",
                    "Optimized database queries and API endpoints, reducing average API response times by ~30% and improving overall application load performance",
                    "Resolved high- and medium-priority bugs across the stack, reducing recurring production issues by ~40% and supporting consistent on-time sprint delivery"
                  ]}
                />
                <ExperienceItem
                  role="Full Stack Developer Intern"
                  company="HQZen"
                  period="Jun 2024 — Aug 2024"
                  highlights={[
                    "Contributed to production codebase by implementing features and fixing bugs across Django-based APIs and Vue.js frontend components",
                    "Participated in Agile development workflows including sprint planning, stand-ups, and code reviews, contributing to 2–3 sprint releases during the internship period",
                    "Applied coding best practices and peer feedback to reduce review rework and improve code quality consistency within the team"
                  ]}
                />
                <ExperienceItem
                  role="Freelance Web Developer"
                  company="Self-Employed"
                  period="2022 — 2025"
                  highlights={[
                    "Delivered web and application projects for clients across different industries, managing the full development lifecycle from requirements to deployment",
                    "Designed and built full-stack solutions tailored to client needs, improving page load times by 20–35% through performance optimization and efficient API design",
                    "Maintained and enhanced existing applications by fixing bugs, adding features, and improving reliability, leading to repeat clients and long-term engagements"
                  ]}
                />
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="section-title">Recent Projects</h2>
              <div className="space-y-1.5">
                <ProjectItem
                  name="Specdoors"
                  description="AI-powered door & frame estimating with NCC compliance checks"
                  link="https://specdoors-ai.vercel.app/"
                />
                <ProjectItem
                  name="Barzen Projects"
                  description="A sleek, modern landing page with clean design and strong hierarchy."
                  link="https://barzenprojects.com.au"
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
                  items={["Python", "TypeScript", "JavaScript", "SQL"]}
                />
                <TechCategory
                  category="Backend"
                  items={["Django", "Node.js", "Supabase"]}
                />
                <TechCategory
                  category="Frontend"
                  items={["React", "Vue.js"]}
                />
                <TechCategory
                  category="Databases"
                  items={["PostgreSQL", "MySQL", "MongoDB"]}
                />
                <TechCategory
                  category="Cloud & Deployment"
                  items={["AWS", "Vercel", "Render", "Cloudflare R2"]}
                />
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="section-title">Education</h2>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-foreground">BS Computer Science</p>
                  <p className="text-sm text-muted-foreground">University of the Philippines - Cebu · 2026</p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="section-title">Certifications</h2>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="text-foreground">AWS Certified Developer - Associate</span>
                  {/* <span className="text-muted-foreground"> · 2026</span> */}
                </p>
              </div>
            </section>

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
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-divider">
          <p className="text-xs text-muted-foreground">
            Last updated December 2025
          </p>
        </footer>
      </div>
    </div>
  );
};

const ExperienceItem = ({
  role,
  company,
  period,
  highlights,
}: {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}) => (
  <div className="experience-item">
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
      <div>
        <h3 className="font-medium text-foreground">{role}</h3>
        <p className="text-sm text-muted-foreground">{company}</p>
      </div>
      <span className="text-sm text-muted-foreground whitespace-nowrap">{period}</span>
    </div>
    <ul className="space-y-1">
      {highlights.map((highlight, index) => (
        <li key={index} className="text-sm text-muted-foreground leading-relaxed text-justify">
          {highlight}
        </li>
      ))}
    </ul>
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
        aria-label={`View ${name} project`}
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
