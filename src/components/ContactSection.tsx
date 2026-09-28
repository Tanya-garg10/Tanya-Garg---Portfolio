import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    id: "contact-linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: "Tanya Garg",
    href: "https://www.linkedin.com/in/tanya-garg-6757862b1",
    desc: "Let's connect professionally",
  },
  {
    id: "contact-github",
    icon: Github,
    label: "GitHub",
    value: "@Tanya-garg10",
    href: "https://github.com/Tanya-garg10",
    desc: "Check out my code",
  },
  {
    id: "contact-email",
    icon: Mail,
    label: "Email",
    value: "tanyagarg5315@gmail.com",
    href: "mailto:tanyagarg5315@gmail.com",
    desc: "Drop me a message",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 relative overflow-hidden border-t border-border">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Corner decorations */}
      <div className="absolute top-12 left-8 font-mono text-[10px] text-muted-foreground/30 tracking-widest hidden lg:block">
        SECTION 06 / CONTACT
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Big editorial CTA */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-lime" />
            <span className="label-sm">Get In Touch</span>
          </div>

          <h2 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-[6rem] leading-[0.9] tracking-tight mb-8">
            GOT AN
            <br />
            IDEA?{" "}
            <span className="text-lime">LET'S</span>
            <br />
            <span className="text-lime">BUILD IT.</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something meaningful.
            Based in India — available remote, worldwide.
          </p>
        </motion.div>

        {/* Contact links — large editorial cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.id}
              id={link.id}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group relative p-6 border border-border bg-card hover:border-lime/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_hsl(75_100%_50%_/_0.12)]"
            >
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-lime/20 group-hover:border-lime transition-colors duration-300" />

              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 border border-border bg-secondary flex items-center justify-center group-hover:border-lime/40 transition-colors duration-300">
                  <link.icon size={16} className="text-muted-foreground group-hover:text-lime transition-colors duration-200" />
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground/40 group-hover:text-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </div>

              <p className="label-sm mb-1">{link.label}</p>
              <p className="text-sm font-medium text-foreground mb-1">{link.value}</p>
              <p className="text-xs text-muted-foreground">{link.desc}</p>
            </motion.a>
          ))}
        </div>

        {/* Location + availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 border border-border bg-card"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime status-pulse" />
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              Available for opportunities
            </span>
          </div>
          <div className="w-px h-4 bg-border hidden sm:block" />
          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-lime" />
            <span className="font-mono text-xs text-muted-foreground">Based in India</span>
          </div>
          <div className="w-px h-4 bg-border hidden sm:block" />
          <div className="flex flex-wrap gap-2">
            {["Open to Work", "Remote Friendly", "Quick Responder"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] px-3 py-1 border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
