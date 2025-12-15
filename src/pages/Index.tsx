import { Mail, Github, Linkedin, ExternalLink, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-5xl py-12 md:py-20">
        {/* Header */}
        <header className="mb-12 md:mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-tight mb-2">
            Alex Chen
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Senior Software Engineer · AI Systems
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              San Francisco, CA
            </span>
            <span className="hidden md:inline text-divider">·</span>
            <div className="flex items-center gap-4">
              <a href="mailto:alex@example.com" className="link-subtle flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="link-subtle flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="link-subtle flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left Column */}
          <div className="md:col-span-7 space-y-12">
            {/* About */}
            <section>
              <h2 className="section-title">About</h2>
              <p className="text-foreground leading-relaxed">
                Software engineer with 8+ years building scalable systems and machine learning infrastructure. 
                Currently focused on LLM orchestration and real-time AI applications. 
                Previously led engineering teams at high-growth startups and contributed to open-source ML frameworks.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="section-title">Experience</h2>
              <div className="space-y-6">
                <ExperienceItem
                  role="Senior AI Engineer"
                  company="Anthropic"
                  period="2022 — Present"
                  highlights={[
                    "Led development of real-time inference infrastructure serving 10M+ daily requests",
                    "Designed and implemented distributed training pipelines for large language models",
                    "Mentored team of 5 engineers on ML systems best practices"
                  ]}
                />
                <ExperienceItem
                  role="Staff Software Engineer"
                  company="Scale AI"
                  period="2019 — 2022"
                  highlights={[
                    "Architected data labeling platform processing 50TB+ daily",
                    "Built ML model evaluation framework used across 200+ enterprise clients",
                    "Reduced annotation latency by 40% through system optimizations"
                  ]}
                />
                <ExperienceItem
                  role="Software Engineer"
                  company="Stripe"
                  period="2016 — 2019"
                  highlights={[
                    "Developed fraud detection systems with 99.7% precision",
                    "Contributed to core payments infrastructure serving millions of transactions"
                  ]}
                />
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="section-title">Selected Projects</h2>
              <div className="space-y-4">
                <ProjectItem
                  name="VectorDB"
                  description="High-performance vector database for semantic search, 10k+ GitHub stars"
                  link="https://github.com"
                />
                <ProjectItem
                  name="LLM-Router"
                  description="Intelligent request routing for multi-model LLM deployments"
                  link="https://github.com"
                />
                <ProjectItem
                  name="ML-Pipeline"
                  description="End-to-end ML pipeline framework with automated feature engineering"
                  link="https://github.com"
                />
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
                  items={["Python", "TypeScript", "Go", "Rust", "SQL"]}
                />
                <TechCategory
                  category="ML/AI"
                  items={["PyTorch", "TensorFlow", "JAX", "LangChain", "Hugging Face"]}
                />
                <TechCategory
                  category="Infrastructure"
                  items={["Kubernetes", "Docker", "AWS", "GCP", "Terraform"]}
                />
                <TechCategory
                  category="Data"
                  items={["PostgreSQL", "Redis", "Kafka", "Spark", "Airflow"]}
                />
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="section-title">Education</h2>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-foreground">M.S. Computer Science</p>
                  <p className="text-sm text-muted-foreground">Stanford University · 2016</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">B.S. Computer Science</p>
                  <p className="text-sm text-muted-foreground">UC Berkeley · 2014</p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="section-title">Certifications</h2>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="text-foreground">AWS Solutions Architect Professional</span>
                  <span className="text-muted-foreground"> · 2023</span>
                </p>
                <p className="text-sm">
                  <span className="text-foreground">Google Cloud ML Engineer</span>
                  <span className="text-muted-foreground"> · 2022</span>
                </p>
              </div>
            </section>

            {/* Community */}
            <section>
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
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-divider">
          <p className="text-xs text-muted-foreground">
            Last updated December 2024
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
        <li key={index} className="text-sm text-muted-foreground leading-relaxed">
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
}) => (
  <div className="flex items-start justify-between gap-4">
    <div>
      <h3 className="font-medium text-foreground">{name}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="link-subtle shrink-0 mt-0.5"
        aria-label={`View ${name} project`}
      >
        <ExternalLink className="w-4 h-4" />
      </a>
    )}
  </div>
);

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
