import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";

type Category = "All" | "AI/ML" | "GenAI" | "Full-Stack" | "Data Science";

interface Project {
  title: string;
  description: string;
  tech: string[];
  categories: Category[];
  github: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "StellaDash – Data Intelligence Command Center",
    description: "CSV → interactive dashboards, automated insights, downloadable reports. Full-featured data intelligence platform.",
    tech: ["Full-Stack", "JavaScript", "Data Visualization", "Analytics"],
    categories: ["Full-Stack", "Data Science"],
    github: "https://github.com/Tanya-garg10/StellaDash-Data-Intelligence-Command-Center",
    featured: true,
  },
  {
    title: "PulsePoint AI – Smart Reel Generator",
    description: "Long videos/podcasts → 3–5 short reels automatically using GenAI and multimodal AI capabilities.",
    tech: ["TypeScript", "GenAI", "Multimodal AI", "Video Processing"],
    categories: ["GenAI", "AI/ML"],
    github: "https://github.com/Tanya-garg10/PulsePoint-AI-Smart-Reel-Generator-using-GenAI-Multimodal-AI",
    featured: true,
  },
  {
    title: "ScamGuard – Real-Time Audio Fraud Detection",
    description: "Scam call detection via audio manipulation signals (urgency, authority, OTP/money prompts) for fraud prevention.",
    tech: ["TypeScript", "AI", "Audio Processing", "NLP"],
    categories: ["AI/ML", "GenAI"],
    github: "https://github.com/Tanya-garg10/ScamGuard---Real-Time-Audio-Fraud-Detection-for-Scam-Prevention",
    featured: true,
  },
  {
    title: "TaskPilot AI Agent",
    description: "Notes/screenshots/PDFs → structured tasks + step breakdown using Gemini. Intelligent task management powered by AI.",
    tech: ["TypeScript", "GenAI", "Gemini", "Agent"],
    categories: ["GenAI", "AI/ML"],
    github: "https://github.com/Tanya-garg10/Taskpilot-AI-Agent",
  },
  {
    title: "Policy Navigator AI",
    description: "Govt policy simplification + eligibility matching + step-by-step guidance using NLP and GenAI.",
    tech: ["TypeScript", "NLP", "GenAI", "Government Tech"],
    categories: ["GenAI", "AI/ML"],
    github: "https://github.com/Tanya-garg10/Policy-Navigator-AI",
  },
  {
    title: "CodeLens AI – Understand Any Codebase Instantly",
    description: "AI explanations + architecture diagrams for codebases. Developer productivity tool powered by GenAI.",
    tech: ["JavaScript", "TypeScript", "GenAI", "Developer Tools"],
    categories: ["GenAI", "AI/ML"],
    github: "https://github.com/Tanya-garg10/CodeLens-AI-Understand-Any-Codebase-Instantly",
  },
  {
    title: "Credit Risk & Loan Default Prediction System",
    description: "End-to-end ML: feature engineering, model comparison, explainability. Complete FinTech ML pipeline.",
    tech: ["Python", "Machine Learning", "Jupyter", "FinTech"],
    categories: ["AI/ML", "Data Science"],
    github: "https://github.com/Tanya-garg10/Credit-Risk-Loan-Default-Prediction-System",
  },
  {
    title: "Sales Forecasting & Demand Prediction Dashboard",
    description: "Time series forecasting + dashboard + business insights using Prophet/ARIMA models.",
    tech: ["Python", "Time Series", "Prophet", "ARIMA", "Dashboard"],
    categories: ["Data Science", "AI/ML"],
    github: "https://github.com/Tanya-garg10/Sales-Forecasting-Demand-Prediction-with-Time-Series-Dashboard",
  },
];

const filters: Category[] = ["All", "GenAI", "AI/ML", "Full-Stack", "Data Science"];

const ProjectsSection = () => {
  const [active, setActive] = useState<Category>("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            >
              <Sparkles className="text-primary" size={16} />
              <span className="text-sm font-medium text-primary">Featured Work</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of projects showcasing AI/ML, GenAI, and full-stack development
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${active === f
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-secondary text-secondary-foreground hover:bg-muted hover:border-primary/30 border border-transparent"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group relative p-6 rounded-2xl bg-card border transition-all duration-300 card-hover ${project.featured
                    ? "border-primary/50 shadow-lg shadow-primary/10"
                    : "border-border hover:border-primary/50"
                  }`}
              >
                {project.featured && (
                  <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-blue-500 text-white text-xs font-semibold shadow-lg">
                    Featured
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-xl group-hover:text-primary transition-colors pr-4 leading-tight">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300 group/link"
                    aria-label="View on GitHub"
                  >
                    <Github size={20} className="group-hover/link:scale-110 transition-transform" />
                  </a>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300"
                >
                  View Project
                  <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">No projects found in this category.</p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/Tanya-garg10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground font-medium transition-all duration-300 group"
            >
              <Github size={20} />
              View All Projects on GitHub
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
