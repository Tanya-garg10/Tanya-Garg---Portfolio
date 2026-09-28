import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";

type Category = "All" | "AI/ML" | "GenAI" | "Full-Stack" | "Data Science";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  approach: string;
  tech: string[];
  categories: Category[];
  github: string;
  featured?: boolean;
  visual: "ai" | "data" | "fullstack" | "dev";
  year: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "StellaDash",
    subtitle: "Data Intelligence Command Center",
    description: "CSV → interactive dashboards, automated insights, downloadable reports. Full-featured data intelligence platform.",
    problem: "Analysts waste hours manually transforming raw CSV data into actionable insights and reports.",
    approach: "Built an end-to-end data intelligence platform that auto-generates interactive dashboards, surfaces insights, and produces downloadable reports from any CSV input.",
    tech: ["Full-Stack", "JavaScript", "Data Visualization", "Analytics"],
    categories: ["Full-Stack", "Data Science"],
    github: "https://github.com/Tanya-garg10/StellaDash-Data-Intelligence-Command-Center",
    featured: true,
    visual: "data",
    year: "2025",
  },
  {
    id: "02",
    title: "PulsePoint AI",
    subtitle: "Smart Reel Generator",
    description: "Long videos/podcasts → 3–5 short reels automatically using GenAI and multimodal AI capabilities.",
    problem: "Content creators spend hours manually clipping long-form video into short-form reels for social media.",
    approach: "Leveraged multimodal AI to identify the most engaging segments, auto-cut reels, and add captions — fully automated pipeline.",
    tech: ["TypeScript", "GenAI", "Multimodal AI", "Video Processing"],
    categories: ["GenAI", "AI/ML"],
    github: "https://github.com/Tanya-garg10/PulsePoint-AI-Smart-Reel-Generator-using-GenAI-Multimodal-AI",
    featured: true,
    visual: "ai",
    year: "2025",
  },
  {
    id: "03",
    title: "ScamGuard",
    subtitle: "Real-Time Audio Fraud Detection",
    description: "Scam call detection via audio manipulation signals (urgency, authority, OTP/money prompts) for fraud prevention.",
    problem: "Millions fall victim to phone scams using psychological manipulation tactics that are hard to detect in real-time.",
    approach: "Analyzed audio signals for scam indicators (urgency patterns, authority signals, OTP/money prompts) using NLP and real-time audio processing.",
    tech: ["TypeScript", "AI", "Audio Processing", "NLP"],
    categories: ["AI/ML", "GenAI"],
    github: "https://github.com/Tanya-garg10/ScamGuard---Real-Time-Audio-Fraud-Detection-for-Scam-Prevention",
    featured: true,
    visual: "ai",
    year: "2025",
  },
  {
    id: "04",
    title: "TaskPilot AI",
    subtitle: "Intelligent Task Agent",
    description: "Notes/screenshots/PDFs → structured tasks + step breakdown using Gemini. Intelligent task management powered by AI.",
    problem: "Information scattered across notes, screenshots, and PDFs makes task extraction and planning extremely manual.",
    approach: "Built a Gemini-powered agent that parses multimodal inputs and generates structured task breakdowns with clear step-by-step guidance.",
    tech: ["TypeScript", "GenAI", "Gemini", "Agent"],
    categories: ["GenAI", "AI/ML"],
    github: "https://github.com/Tanya-garg10/Taskpilot-AI-Agent",
    visual: "dev",
    year: "2025",
  },
  {
    id: "05",
    title: "Policy Navigator AI",
    subtitle: "Government Policy Simplifier",
    description: "Govt policy simplification + eligibility matching + step-by-step guidance using NLP and GenAI.",
    problem: "Complex government policies are inaccessible to ordinary citizens who can't decode bureaucratic language.",
    approach: "Used NLP and GenAI to simplify policy documents, match user profiles to eligible schemes, and provide actionable step-by-step guidance.",
    tech: ["TypeScript", "NLP", "GenAI", "Government Tech"],
    categories: ["GenAI", "AI/ML"],
    github: "https://github.com/Tanya-garg10/Policy-Navigator-AI",
    visual: "ai",
    year: "2025",
  },
  {
    id: "06",
    title: "CodeLens AI",
    subtitle: "Understand Any Codebase Instantly",
    description: "AI explanations + architecture diagrams for codebases. Developer productivity tool powered by GenAI.",
    problem: "Developers onboarding to large codebases spend days just understanding the architecture and relationships.",
    approach: "Built a GenAI-powered tool that auto-generates architecture diagrams and natural language explanations for any codebase.",
    tech: ["JavaScript", "TypeScript", "GenAI", "Developer Tools"],
    categories: ["GenAI", "AI/ML"],
    github: "https://github.com/Tanya-garg10/CodeLens-AI-Understand-Any-Codebase-Instantly",
    visual: "dev",
    year: "2025",
  },
  {
    id: "07",
    title: "Credit Risk ML",
    subtitle: "Loan Default Prediction System",
    description: "End-to-end ML: feature engineering, model comparison, explainability. Complete FinTech ML pipeline.",
    problem: "Financial institutions need accurate, explainable models to assess credit risk and prevent loan defaults.",
    approach: "Built a complete ML pipeline with feature engineering, multiple model comparison, and explainability (SHAP) to surface the best-performing credit risk model.",
    tech: ["Python", "Machine Learning", "Jupyter", "FinTech"],
    categories: ["AI/ML", "Data Science"],
    github: "https://github.com/Tanya-garg10/Credit-Risk-Loan-Default-Prediction-System",
    visual: "data",
    year: "2025",
  },
  {
    id: "08",
    title: "Sales Forecasting",
    subtitle: "Demand Prediction Dashboard",
    description: "Time series forecasting + dashboard + business insights using Prophet/ARIMA models.",
    problem: "Businesses rely on guesswork for inventory and staffing because forecasting requires expensive data science expertise.",
    approach: "Implemented Prophet and ARIMA time-series models with an interactive dashboard that surfaces demand predictions and business insights.",
    tech: ["Python", "Time Series", "Prophet", "ARIMA", "Dashboard"],
    categories: ["Data Science", "AI/ML"],
    github: "https://github.com/Tanya-garg10/Sales-Forecasting-Demand-Prediction-with-Time-Series-Dashboard",
    visual: "data",
    year: "2025",
  },
];

const filters: Category[] = ["All", "GenAI", "AI/ML", "Full-Stack", "Data Science"];

const VISUAL_STYLES = {
  ai: "from-lime/5 via-transparent to-transparent",
  data: "from-blue-500/5 via-transparent to-transparent",
  fullstack: "from-purple-500/5 via-transparent to-transparent",
  dev: "from-orange-500/5 via-transparent to-transparent",
};

const VISUAL_LABELS = {
  ai: "AI · ML",
  data: "DATA · ANALYTICS",
  fullstack: "FULL STACK",
  dev: "DEV TOOLS",
};

// Case Study Modal
const CaseStudyModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-background/90 backdrop-blur-xl"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Panel */}
        <motion.div
          className="relative w-full max-w-2xl bg-card border border-border max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-lime" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-lime" />

          <div className="p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="label-sm mb-2">{project.id} / Case Study</p>
                <h2 className="font-display font-bold text-2xl sm:text-3xl">{project.title}</h2>
                <p className="text-muted-foreground text-sm mt-1">{project.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="p-2 border border-border hover:border-lime hover:text-lime transition-colors duration-200 shrink-0 ml-4"
              >
                <X size={16} />
              </button>
            </div>

            {/* Flow */}
            <div className="space-y-6">
              {[
                { label: "PROBLEM", content: project.problem, icon: "01" },
                { label: "APPROACH", content: project.approach, icon: "02" },
                { label: "AI / TECHNOLOGY", content: project.tech.join(" · "), icon: "03" },
                { label: "SOLUTION", content: project.description, icon: "04" },
              ].map((step, i) => (
                <div key={step.label}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[10px] text-lime tracking-widest">{step.icon}</span>
                    <div className="flex-1 h-px bg-border" />
                    <span className="label-sm text-[10px]">{step.label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                    {step.content}
                  </p>
                  {i < 3 && (
                    <div className="flex justify-center mt-4">
                      <span className="text-lime/40 text-xs font-mono">↓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-border">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                <Github size={16} />
                View on GitHub
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectsSection = () => {
  const [active, setActive] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projects" className="py-32 relative overflow-hidden" aria-label="Projects">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-lime" />
            <span className="label-sm">Featured Work</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4">
            PROOF OF <span className="text-lime">WORK</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            A collection of AI-driven products, developer tools, and data applications.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2 mb-12 flex-wrap"
        >
          {filters.map((f) => (
            <button
              key={f}
              id={`filter-${f.toLowerCase().replace("/", "-")}`}
              onClick={() => setActive(f)}
              className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-200 border ${
                active === f
                  ? "bg-lime text-foreground border-lime"
                  : "border-border text-muted-foreground hover:border-lime/50 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`group relative bg-card border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:border-lime/50 hover:shadow-[0_20px_50px_-15px_hsl(75_100%_50%_/_0.12)] ${
                project.featured ? "md:col-span-1" : ""
              }`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Visual area */}
              <div
                className={`relative h-36 bg-gradient-to-br ${VISUAL_STYLES[project.visual]} border-b border-border overflow-hidden`}
              >
                {/* Grid decoration */}
                <div className="absolute inset-0 grid-pattern opacity-50" />

                {/* Project number */}
                <div className="absolute top-4 left-4 font-mono text-4xl font-bold text-foreground/5 select-none">
                  {project.id}
                </div>

                {/* Visual label */}
                <div className="absolute top-4 right-4">
                  <span className="label-sm text-[9px] border border-border/60 px-2 py-1 bg-card/50 backdrop-blur-sm">
                    {VISUAL_LABELS[project.visual]}
                  </span>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute bottom-4 left-4">
                    <span className="label-sm text-[9px] border border-lime/40 px-2 py-1 text-lime bg-card/50 backdrop-blur-sm">
                      ✦ Featured
                    </span>
                  </div>
                )}

                {/* Hover: reveal arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-mono text-lime">VIEW CASE STUDY →</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-1">
                      {project.id} · {project.year}
                    </p>
                    <h3 className="font-display font-bold text-xl group-hover:text-lime transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="shrink-0 p-2 border border-border text-muted-foreground hover:text-lime hover:border-lime transition-all duration-200 ml-3"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                  </a>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-1 border border-border text-muted-foreground bg-secondary/50 hover:border-lime/40 hover:text-lime transition-colors duration-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-muted-foreground font-mono text-sm"
          >
            No projects in this category.
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/Tanya-garg10"
            target="_blank"
            rel="noopener noreferrer"
            id="view-all-github"
            className="btn-secondary group"
          >
            <Github size={16} />
            View All on GitHub
            <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Case study modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
