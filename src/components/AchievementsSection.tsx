import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Briefcase, BookOpen, Zap } from "lucide-react";

const hackathons = [
  {
    event: "Prajwalan 2025",
    type: "DSA & Competitive Programming",
    result: "1st Place — Rank #1/1254",
    badge: "🏆 WINNER",
    year: "2025",
    highlight: true,
  },
  {
    event: "Socio-Tech Insight",
    type: "National Case Study Competition",
    result: "2nd Place — UDAAN CONNECT AI Chatbot",
    badge: "🥈 NATIONAL",
    year: "2025",
  },
  {
    event: "Social Ideate (IBS Mumbai)",
    type: "National Case Competition — 305+ participants",
    result: "First Runner-Up",
    badge: "🥈 RUNNER-UP",
    year: "2025",
  },
  {
    event: "FIN-STARS 2025",
    type: "E-Cell MNNIT Allahabad — Finance & Strategy",
    result: "3rd Prize",
    badge: "🥉 TOP 3",
    year: "2025",
  },
  {
    event: "PM Ready Case Competition",
    type: "Product Management — LocalVibe AI App",
    result: "2nd Place",
    badge: "🥈 2nd PLACE",
    year: "2025",
  },
  {
    event: "Nerds AI Quest 1.0 (Unstop)",
    type: "AI Fundamentals Quiz",
    result: "2nd Rank",
    badge: "🧠 TOP 2",
    year: "2025",
  },
  {
    event: "Networking Cheat Codes",
    type: "Post Webinar Quiz — Unstop",
    result: "1st Place",
    badge: "🏆 WINNER",
    year: "2024",
    highlight: true,
  },
  {
    event: "Stock Quiz — StockFox",
    type: "Financial Markets & Trading",
    result: "Winner",
    badge: "🏆 WINNER",
    year: "2024",
    highlight: true,
  },
  {
    event: "Elite Coders Winter of Code",
    type: "Open Source Contributions",
    result: "Top 3 Posts — Swag Winner",
    badge: "✦ TOP 3",
    year: "2024",
  },
  {
    event: "Financopedia Contest",
    type: "Aquilae Technologies",
    result: "Gold & Silver Medals + Cash Prizes",
    badge: "🥇 GOLD",
    year: "2024",
    highlight: true,
  },
];

const internships = [
  {
    role: "Data Science Intern",
    org: "Enginow",
    desc: "End-to-end ML projects: Customer Churn Prediction, Sales Forecasting, Credit Risk & Loan Default Prediction.",
    badge: "ML Pipeline",
  },
  {
    role: "Frontend Developer Intern",
    org: "SynapseIT Solution",
    desc: "Real-world web applications, frontend skills, collaboration, and industry practices.",
    badge: "Selected",
  },
  {
    role: "Web Developer Intern (Core Team)",
    org: "TechMNHub",
    desc: "3 months project-based internship building live projects and strengthening web development skills.",
    badge: "Core Team",
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="py-32 relative overflow-hidden border-t border-border">
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
            <span className="label-sm">Hackathon Wall</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4">
            BUILT UNDER{" "}
            <span className="text-lime">PRESSURE.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            A collection of real experiences — competitions, recognitions, and battles won.
          </p>
        </motion.div>

        {/* Hackathon Wall — vertical timeline */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 mb-20">
          {/* Left — quick count */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-6">
              Competition Record
            </p>
            {[
              { icon: Trophy, label: "1st Place Wins", count: "3×" },
              { icon: Zap, label: "National Competitions", count: "3×" },
              { icon: Trophy, label: "Total Awards", count: "10+" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 border border-border bg-card group hover:border-lime/50 transition-colors duration-300"
              >
                <div className="w-8 h-8 border border-lime/30 flex items-center justify-center text-lime group-hover:bg-lime/10 transition-colors duration-300">
                  <item.icon size={14} />
                </div>
                <span className="text-sm text-muted-foreground flex-1">{item.label}</span>
                <span className="font-display font-bold text-xl text-lime">{item.count}</span>
              </div>
            ))}

            <div className="mt-8 p-5 border border-border bg-card">
              <p className="label-sm mb-3">Publication</p>
              <div className="flex items-start gap-3">
                <BookOpen size={14} className="text-lime mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Co-author</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                    "When the Calendar Turns – Volume 3" anthology
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 border border-lime/30 text-lime">
                    PUBLISHED AUTHOR
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — hackathon wall */}
          <div className="relative">
            {/* Timeline spine */}
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />

            <div className="space-y-4">
              {hackathons.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.06 + 0.3 }}
                  className={`flex gap-5 group`}
                >
                  {/* Timeline dot */}
                  <div className="relative shrink-0 mt-3">
                    <div
                      className={`w-[22px] h-[22px] border flex items-center justify-center z-10 relative transition-colors duration-200 ${
                        h.highlight
                          ? "bg-lime border-lime"
                          : "bg-card border-border group-hover:border-lime/60"
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          h.highlight ? "bg-foreground" : "bg-muted-foreground"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 border p-4 bg-card transition-all duration-300 group-hover:border-lime/50 ${
                      h.highlight ? "border-lime/30" : "border-border"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="font-display font-semibold text-sm text-foreground">
                        {h.event}
                      </h3>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-mono text-[9px] text-muted-foreground">{h.year}</span>
                        <span
                          className={`font-mono text-[9px] px-2 py-0.5 border ${
                            h.badge.includes("🏆") || h.badge.includes("🥇")
                              ? "border-lime/50 text-lime bg-lime/5"
                              : "border-border text-muted-foreground"
                          }`}
                        >
                          {h.badge}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{h.type}</p>
                    <p className="text-xs font-medium text-foreground/70">{h.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience / Internships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-lime" />
            <span className="label-sm">Experience</span>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {internships.map((intern, i) => (
              <motion.div
                key={intern.org}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="group border border-border bg-card p-6 hover:border-lime/50 transition-all duration-300 relative"
              >
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-lime/30 group-hover:border-lime transition-colors duration-300" />
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 border border-border bg-secondary flex items-center justify-center shrink-0">
                    <Briefcase size={14} className="text-lime" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm">{intern.role}</p>
                    <p className="text-xs text-muted-foreground">{intern.org}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {intern.desc}
                </p>
                <span className="font-mono text-[10px] px-2 py-0.5 border border-lime/30 text-lime">
                  {intern.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
