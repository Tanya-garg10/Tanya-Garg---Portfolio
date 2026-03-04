import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

// Import photo - Add your photo as src/assets/profile.jpg
// If photo is in public folder, use: /profile.jpg
// If photo is in src/assets, uncomment the import below:
// import profilePhoto from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23888' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="text-primary" size={16} />
              <span className="text-sm font-medium text-primary">Available for opportunities</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-mono text-sm text-primary mb-4"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              Tanya Garg<span className="text-gradient">.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 h-16 flex items-center"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Open Source Contributor',
                  2000,
                  'AI Systems Developer',
                  2000,
                  'Problem Solver',
                  2000,
                  'Creative Thinker',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gradient"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              Building AI-driven products, dashboards, and automation tools with modern technologies.
              Passionate about creating impactful solutions that make a difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                to="/projects"
                className="group px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2"
              >
                View Projects
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl border-2 border-border text-foreground font-semibold text-sm hover:bg-secondary hover:border-primary/50 transition-all duration-300"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-6"
            >
              <a
                href="https://github.com/Tanya-garg10"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
              >
                <Github size={20} />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-card border border-border rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitHub
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/tanya-garg-6757862b1"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
              >
                <Linkedin size={20} />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-card border border-border rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  LinkedIn
                </span>
              </a>
              <a
                href="mailto:tanyagarg5315@gmail.com"
                className="group relative p-3 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
              >
                <Mail size={20} />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-card border border-border rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Email
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />

              {/* Image container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl bg-card">
                  {/* Try multiple photo paths */}
                  <img
                    src="/profile.jpg"
                    alt="Tanya Garg - Full Stack Developer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Try alternative paths if first one fails
                      const target = e.currentTarget;
                      if (target.src.includes('/profile.jpg')) {
                        target.src = '/src/assets/profile.jpg';
                      } else if (target.src.includes('/src/assets/profile.jpg')) {
                        // Show placeholder if photo not found
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-blue-500/20">
                              <div class="text-center">
                                <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                                  <span class="text-6xl font-bold text-white">TG</span>
                                </div>
                                <p class="text-sm text-muted-foreground px-4">
                                  Add photo as: <br/>
                                  <code class="text-xs bg-secondary px-2 py-1 rounded">public/profile.jpg</code>
                                  <br/>or<br/>
                                  <code class="text-xs bg-secondary px-2 py-1 rounded">src/assets/profile.jpg</code>
                                </p>
                              </div>
                            </div>
                          `;
                        }
                      }
                    }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Decorative elements */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-4 -right-4 w-24 h-24 border-4 border-primary/30 rounded-full"
                />
                <motion.div
                  animate={{
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-blue-500/30 rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground cursor-pointer"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
