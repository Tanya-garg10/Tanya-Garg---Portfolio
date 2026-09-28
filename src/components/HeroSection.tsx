import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const FLOATING_ELEMENTS = [
  { label: "// AI Builder", x: "10%", y: "15%", delay: 0 },
  { label: "model.predict()", x: "75%", y: "20%", delay: 0.5 },
  { label: "→ hackathon_mode", x: "80%", y: "65%", delay: 1 },
  { label: "✦ GenAI", x: "5%", y: "70%", delay: 0.8 },
  { label: "v2.0 SHIPPED", x: "65%", y: "80%", delay: 1.2 },
  { label: "{ problem: solved }", x: "15%", y: "85%", delay: 0.3 },
];

const TECH_TAGS = ["Python", "TypeScript", "GenAI", "React", "ML", "LLMs", "Data Science"];

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const [hasPhoto, setHasPhoto] = useState(true);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      mouseX.set(x * 15);
      mouseY.set(y * 15);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 font-mono text-[10px] text-muted-foreground/40 tracking-widest hidden lg:block">
        LAT 28.6139° N
      </div>
      <div className="absolute top-8 right-8 font-mono text-[10px] text-muted-foreground/40 tracking-widest hidden lg:block">
        LON 77.2090° E
      </div>
      <div className="absolute bottom-8 left-8 font-mono text-[10px] text-muted-foreground/40 tracking-widest hidden lg:block">
        BUILDER'S LAB © 2026
      </div>

      {/* Floating abstract elements - workspace fragments */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {FLOATING_ELEMENTS.map((el, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: el.x, top: el.y }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.35, y: 0 }}
            transition={{ delay: el.delay + 1.5, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
              className="font-mono text-[10px] text-lime/60 border border-lime/20 px-2 py-1 bg-card/50 backdrop-blur-sm whitespace-nowrap"
            >
              {el.label}
            </motion.div>
          </motion.div>
        ))}

        {/* Animated node dots */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-1 h-1 rounded-full bg-lime/40"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 15}%`,
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.6,
            }}
          />
        ))}

        {/* Cursor-following glow */}
        <motion.div
          className="absolute w-64 h-64 rounded-full pointer-events-none"
          style={{
            x: springX,
            y: springY,
            left: "45%",
            top: "40%",
            background: "radial-gradient(circle, hsl(75 100% 50% / 0.06) 0%, transparent 70%)",
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0 lg:pt-32 grid lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-center">
        {/* Left — editorial text */}
        <div>
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-lime" />
            <span className="label-sm">The Builder's Lab</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95] tracking-tight mb-8"
          >
            I BUILD THINGS
            <br />
            THAT MAKE
            <br />
            <span className="text-lime">PEOPLE SAY</span>
            <br />
            <span className="text-foreground/60 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">"WAIT… HOW?"</span>
          </motion.h1>

          {/* Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-6"
          >
            <p className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-1">
              Tanya Garg
            </p>
            <p className="font-mono text-sm text-lime tracking-widest uppercase">
              AI Builder · Developer · Problem Solver
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="text-muted-foreground text-base lg:text-lg max-w-lg leading-relaxed mb-10"
          >
            I build AI-powered products, developer tools, data-driven applications,
            and experimental technology projects that solve real problems and push the boundaries of what's possible.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link
              to="/projects"
              id="hero-explore-work"
              className="btn-primary group"
            >
              Explore My Work
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
            <Link
              to="/contact"
              id="hero-lets-connect"
              className="btn-secondary"
            >
              Let's Connect
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <FileText size={16} /> Resume
            </a>
          </motion.div>

        </div>

        {/* Right — Currently Building card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-64 border border-border bg-card/80 backdrop-blur-sm p-6 relative"
          >
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-lime" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-lime" />

            <p className="label-sm mb-4">Currently Building</p>
            <div className="space-y-3 mb-6">
              {["AI-powered products", "Developer tools", "Intelligent experiences"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-lime text-xs">✦</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="border-t border-border/60 pt-4">
              <p className="label-sm mb-2">Status</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-secondary overflow-hidden">
                  <motion.div
                    className="h-full bg-lime"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                  />
                </div>
                <span className="text-xs font-mono text-lime">100%</span>
              </div>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {TECH_TAGS.slice(0, 4).map((tag) => (
                <span key={tag} className="text-[10px] font-mono px-2 py-0.5 border border-border text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Profile image or initials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-4 w-64 h-48 sm:h-64 border border-border bg-card/60 flex items-center justify-center relative overflow-hidden"
          >
            <img
              src="/profile.jpg"
              alt="Tanya Garg"
              className="w-full h-full object-contain p-2 object-center"
              onError={(e) => {
                const el = e.currentTarget;
                el.style.display = "none";
                const parent = el.parentElement;
                if (parent) {
                  const ph = document.createElement("div");
                  ph.className = "flex flex-col items-center justify-center w-full h-full";
                  ph.innerHTML = `
                    <div class="w-14 h-14 bg-lime flex items-center justify-center mb-2">
                      <span class="font-display font-bold text-xl text-charcoal">TG</span>
                    </div>
                    <p class="font-mono text-[10px] text-muted-foreground tracking-widest">TANYA GARG</p>
                  `;
                  parent.appendChild(ph);
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} />
      </motion.div>

      {/* Marquee tech strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/40 bg-card/20 py-2 overflow-hidden hidden md:block">
        <div className="marquee-wrapper">
          <div className="marquee-track text-[10px] font-mono text-muted-foreground/40 tracking-widest uppercase">
            {[...TECH_TAGS, ...TECH_TAGS, ...TECH_TAGS, ...TECH_TAGS].map((tag, i) => (
              <span key={i} className="flex items-center gap-3">
                {tag}
                <span className="text-lime/40">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
