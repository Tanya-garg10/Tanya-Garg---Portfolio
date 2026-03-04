import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Sparkles, Target, Heart, Rocket, Award } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building end-to-end web applications with modern frameworks and best practices"
  },
  {
    icon: Sparkles,
    title: "AI & Machine Learning",
    description: "Creating intelligent systems with GenAI, NLP, and Computer Vision"
  },
  {
    icon: Target,
    title: "Problem Solving",
    description: "Ranked #1 in competitive programming challenges with strong DSA skills"
  }
];

const stats = [
  { number: "15+", label: "Projects Completed" },
  { number: "10+", label: "Awards & Recognitions" },
  { number: "3", label: "Internships" },
  { number: "1254", label: "Competitors Outranked" }
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            >
              <Heart className="text-primary" size={16} />
              <span className="text-sm font-medium text-primary">Get to know me</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate developer turning ideas into reality through code
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            {/* Left side - Main content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-muted-foreground leading-relaxed text-base">
                  Hi! I'm <span className="text-foreground font-semibold">Tanya Garg</span>, a B.Tech IT student with a deep passion for
                  <span className="text-primary font-medium"> Artificial Intelligence</span>,
                  <span className="text-primary font-medium"> Machine Learning</span>, and
                  <span className="text-primary font-medium"> Full-Stack Development</span>.
                </p>

                <p className="text-muted-foreground leading-relaxed text-base">
                  I specialize in building <span className="text-foreground font-medium">practical, real-world solutions</span> that bridge
                  the gap between cutting-edge technology and everyday problems. From developing multimodal AI applications
                  to creating data intelligence dashboards and developer productivity tools, I thrive on challenges that
                  push the boundaries of what's possible.
                </p>

                <p className="text-muted-foreground leading-relaxed text-base">
                  My journey in tech has been marked by <span className="text-foreground font-medium">competitive success</span> —
                  including ranking <span className="text-primary font-semibold">#1 out of 1254 participants</span> in DSA competitions —
                  and hands-on experience through multiple internships where I've worked on end-to-end ML projects,
                  from customer churn prediction to credit risk modeling.
                </p>

                <p className="text-muted-foreground leading-relaxed text-base">
                  Beyond coding, I'm an <span className="text-foreground font-medium">open-source contributor</span>,
                  <span className="text-foreground font-medium"> published co-author</span>, and someone who believes in
                  continuous learning. Whether it's winning case competitions, building AI-powered solutions, or
                  collaborating on innovative projects, I'm always looking for opportunities to grow and make an impact.
                </p>

                <div className="flex items-center gap-2 pt-4">
                  <Rocket className="text-primary" size={20} />
                  <p className="text-foreground font-medium text-base m-0">
                    Currently seeking opportunities to contribute to innovative projects and teams!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-primary" size={20} />
                  <h3 className="font-semibold text-lg">What Drives Me</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I'm motivated by the potential of technology to solve meaningful problems.
                  Every project is an opportunity to learn something new, collaborate with talented people,
                  and create solutions that make a real difference.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
