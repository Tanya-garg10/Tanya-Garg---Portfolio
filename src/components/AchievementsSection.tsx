import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Briefcase, BookOpen } from "lucide-react";

const achievements = [
  { icon: Briefcase, text: "Data Science Internship — Enginow: Customer Churn Prediction, Sales Forecasting, Credit Risk & Loan Default Prediction." },
  { icon: Briefcase, text: "Selected — Frontend Developer Intern, SynapseIT Solution (Starting 5 March 2026)." },
  { icon: Briefcase, text: "Web Developer Intern (Core Team) — TechMNHub (3 months)." },
  { icon: Trophy, text: "1st Place — Prajwalan 2025 (DSA & Competitive Programming), Rank #1/1254." },
  { icon: Award, text: '2nd Place — Socio-Tech Insight National Case Study Competition: "UDAAN CONNECT — AI Donor Engagement Chatbot".' },
  { icon: Award, text: "First Runner-Up — Social Ideate (IBS Mumbai) National-level case competition." },
  { icon: Award, text: "3rd Prize — FIN-STARS 2025 (E-Cell MNNIT Allahabad)." },
  { icon: Award, text: "2nd Place — PM Ready Case Competition 2025 (LocalVibe AI hyper-local app concept)." },
  { icon: Trophy, text: "Top 3 Posts (Swag Winner) — Elite Coders Winter of Code Giveaway." },
  { icon: Trophy, text: "Winner — Stock Quiz by StockFox." },
  { icon: Trophy, text: "Gold & Silver Medals + Cash Prizes — Financopedia Contest (Aquilae Technologies)." },
  { icon: BookOpen, text: 'Co-author — "When the Calendar Turns – Volume 3" anthology.' },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <p className="font-mono text-sm text-primary mb-2">04.</p>
            <h2 className="text-3xl font-bold">Achievements</h2>
          </div>

          <div className="max-w-2xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-timeline-line" />

            <div className="space-y-6">
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 relative"
                >
                  <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shrink-0 z-10">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
