import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Code2, Brain, Wrench, Database, Globe, Palette } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    label: "PROGRAMMING LANGUAGES",
    skills: ["Python", "TypeScript", "JavaScript", "HTML5", "CSS3", "PHP", "SQL"],
  },
  {
    icon: Brain,
    label: "AI & MACHINE LEARNING",
    skills: [
      "Machine Learning", "Generative AI", "Multimodal AI",
      "Natural Language Processing", "Computer Vision",
      "Time Series Forecasting", "Deep Learning",
    ],
  },
  {
    icon: Wrench,
    label: "FRAMEWORKS & LIBRARIES",
    skills: [
      "React", "Node.js", "Streamlit", "TensorFlow",
      "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV",
    ],
  },
  {
    icon: Database,
    label: "DATABASES & CLOUD",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "AWS", "Docker", "Redis"],
  },
  {
    icon: Globe,
    label: "WEB TECHNOLOGIES",
    skills: [
      "REST APIs", "GraphQL", "WebSockets", "Tailwind CSS",
      "Bootstrap", "Responsive Design", "Progressive Web Apps",
    ],
  },
  {
    icon: Palette,
    label: "TOOLS & PLATFORMS",
    skills: ["Git/GitHub", "VS Code", "Jupyter", "Postman", "Figma", "Linux", "CI/CD"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="min-h-screen bg-background grain">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="pt-24 pb-24 relative"
      >
        <div className="absolute inset-0 dot-pattern opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-lime" />
              <span className="label-sm">Skill Ecosystem</span>
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-4">
              TECHNICAL <span className="text-lime">SKILLS</span>
            </h1>
            <p className="text-muted-foreground max-w-xl text-lg">
              A comprehensive overview of my technical expertise and the tools I build with.
            </p>
          </motion.div>

          {/* Skill grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.08 }}
                className="group relative border border-border bg-card p-6 hover:border-lime/50 transition-all duration-300 card-hover"
              >
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-lime/20 group-hover:border-lime transition-colors duration-300" />

                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 border border-border flex items-center justify-center group-hover:border-lime/40 transition-colors duration-300">
                    <cat.icon size={16} className="text-lime" />
                  </div>
                  <span className="label-sm text-[10px]">{cat.label}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1.5 border border-border bg-secondary/50 text-muted-foreground hover:border-lime/50 hover:text-lime transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Always learning note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 p-5 border border-lime/20 bg-lime/5 flex items-start gap-4"
          >
            <span className="text-lime shrink-0">✦</span>
            <div>
              <p className="text-sm font-medium text-foreground mb-1">Always Learning</p>
              <p className="text-sm text-muted-foreground">
                Continuously expanding my skillset with emerging technologies, AI frameworks, and developer tools.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Skills;
