import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { number: 10, suffix: "×", label: "Hackathon Builds / Wins" },
  { number: 15, suffix: "+", label: "Projects & Experiments" },
  { number: 3, suffix: "", label: "Internships" },
  { number: 1254, suffix: "", label: "Competitors Outranked" },
];

const timeline = ["LEARN", "EXPERIMENT", "BUILD", "COMPETE", "SHIP"];

// Animated counter hook
function useCounter(target: number, inView: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);
  return count;
}

function StatCounter({ stat, inView }: { stat: typeof stats[0]; inView: boolean }) {
  const count = useCounter(stat.number, inView);
  return (
    <div className="group relative p-6 border border-border bg-card hover:border-lime/50 transition-all duration-300 card-hover">
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-lime/40 group-hover:border-lime transition-colors duration-300" />
      <p className="font-display font-bold text-5xl lg:text-6xl text-lime mb-2 tracking-tight">
        {count}{stat.suffix}
      </p>
      <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
        {stat.label}
      </p>
    </div>
  );
}

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* STORY / BUILDER SECTION */}
      <section id="about" className="py-32 relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — big editorial text */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-lime" />
                <span className="label-sm">About</span>
              </div>

              <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight mb-10">
                NOT JUST A{" "}
                <br />
                DEVELOPER.{" "}
                <br />
                <span className="text-lime">A BUILDER.</span>
              </h2>

              {/* Timeline */}
              <div className="flex items-center gap-0 mb-10 flex-wrap">
                {timeline.map((step, i) => (
                  <div key={step} className="flex items-center">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.1 + 0.4 }}
                      className="group relative"
                    >
                      <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-2 border border-border bg-card hover:border-lime hover:text-lime transition-all duration-200 cursor-default">
                        {step}
                      </span>
                    </motion.div>
                    {i < timeline.length - 1 && (
                      <span className="text-lime/40 font-mono text-xs px-1">→</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Proof of work stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <StatCounter key={s.label} stat={s} inView={inView} />
                ))}
              </div>
            </motion.div>

            {/* Right — storytelling */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-6 lg:pt-20"
            >
              <div className="relative border-l-2 border-lime/30 pl-6 space-y-6">
                <div className="absolute top-0 left-0 w-2 h-2 -translate-x-[5px] bg-lime rounded-full" />

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hi! I'm{" "}
                  <span className="text-foreground font-semibold">Tanya Garg</span>, a
                  B.Tech IT student with a deep passion for{" "}
                  <span className="text-lime font-medium">Artificial Intelligence</span>,{" "}
                  <span className="text-lime font-medium">Machine Learning</span>, and{" "}
                  <span className="text-lime font-medium">Full-Stack Development</span>.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  I specialize in building{" "}
                  <span className="text-foreground font-medium">practical, real-world solutions</span>{" "}
                  that bridge cutting-edge technology and everyday problems — from multimodal AI
                  applications to data intelligence dashboards and developer productivity tools.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  My journey has been marked by{" "}
                  <span className="text-foreground font-medium">competitive success</span> —
                  including ranking{" "}
                  <span className="text-lime font-semibold">#1 out of 1254 participants</span> in
                  DSA competitions — and hands-on experience through multiple internships where I've
                  worked on end-to-end ML projects.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Beyond coding, I'm an{" "}
                  <span className="text-foreground font-medium">open-source contributor</span>,{" "}
                  <span className="text-foreground font-medium">published co-author</span>, and
                  someone who believes in continuous learning. Always seeking opportunities to grow and make an impact.
                </p>
              </div>

              {/* What drives me */}
              <div className="border border-border p-6 relative group hover:border-lime/50 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-lime/40 group-hover:border-lime transition-colors" />
                <p className="label-sm mb-3">CURIOUS BY DEFAULT.</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I'm motivated by the potential of technology to solve meaningful problems.
                  Every project is an opportunity to learn something new, collaborate with
                  talented people, and create solutions that make a real difference.
                </p>
              </div>

              {/* Open to work badge */}
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-lime status-pulse shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Currently seeking opportunities to contribute to innovative projects and teams!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS section embedded */}
      <SkillsEmbedded />

      {/* AI LAB section */}
      <AILabSection />
    </>
  );
};

// Skills embedded in About for home page flow
const skillGroups = [
  {
    label: "DEVELOPMENT",
    skills: ["Python", "TypeScript", "JavaScript", "React", "HTML/CSS", "Django", "Node.js", "PHP", "SQL"],
  },
  {
    label: "AI / DATA",
    skills: ["Machine Learning", "Generative AI", "Multimodal AI", "NLP", "Computer Vision", "Time Series", "Deep Learning", "LLMs"],
  },
  {
    label: "TOOLS / CLOUD",
    skills: ["Git", "GitHub", "Streamlit", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Docker", "MongoDB", "PostgreSQL", "Firebase", "AWS"],
  },
];

function SkillsEmbedded() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills-home" className="py-24 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-lime" />
            <span className="label-sm">Skill Ecosystem</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
            HOW I BUILD
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.12 }}
              className="group border border-border p-6 hover:border-lime/50 transition-all duration-300 relative"
            >
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-lime/30 group-hover:border-lime transition-colors duration-300" />
              <p className="label-sm mb-4">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
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
      </div>
    </section>
  );
}

// AI Lab section
const aiWorkflow = [
  { step: "IDEA", desc: "Brainstorming problems worth solving with AI" },
  { step: "RESEARCH", desc: "Exploring models, papers, and existing solutions" },
  { step: "PROTOTYPE", desc: "Rapid UI exploration and feasibility testing" },
  { step: "CODE", desc: "Building with AI assistance (Copilot, Gemini)" },
  { step: "DEBUG", desc: "AI-aided debugging and code explanation" },
  { step: "TEST", desc: "Validation, edge cases, and quality checks" },
  { step: "SHIP", desc: "Deployment, documentation, and iteration" },
];

function AILabSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ai-lab" className="py-24 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-lime" />
            <span className="label-sm">AI Lab</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-3">
            HOW I BUILD <span className="text-lime">WITH AI</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            AI isn't just what I build — it's how I build. Here's my workflow from idea to ship.
          </p>
        </motion.div>

        {/* Workflow */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-px bg-border">
          {aiWorkflow.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group bg-card p-5 hover:bg-secondary/50 transition-colors duration-300 relative"
            >
              <div className="mb-3">
                <span className="font-mono text-[9px] text-lime/50 tracking-widest">0{i + 1}</span>
              </div>
              <p className="font-mono text-xs font-semibold text-foreground tracking-widest mb-2">
                {item.step}
              </p>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
              {i < aiWorkflow.length - 1 && (
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-lime/30 font-mono text-xs hidden lg:block">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* AI tools note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-8 p-5 border border-lime/20 bg-lime/5 flex items-start gap-4"
        >
          <span className="text-lime text-lg shrink-0">✦</span>
          <p className="text-sm text-muted-foreground leading-relaxed">
            AI is integrated into my ideation, research, UI exploration, coding, debugging,
            documentation, and experimentation workflows — not as a crutch, but as an amplifier
            for building smarter, faster, and more creatively.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
