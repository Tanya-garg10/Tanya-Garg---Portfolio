import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, MapPin, Sparkles, ArrowUpRight } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "tanyagarg5315@gmail.com",
    link: "mailto:tanyagarg5315@gmail.com",
    description: "Drop me an email anytime",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "@Tanya-garg10",
    link: "https://github.com/Tanya-garg10",
    description: "Check out my code",
    color: "from-gray-700 to-gray-900"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Tanya Garg",
    link: "https://www.linkedin.com/in/tanya-garg-6757862b1",
    description: "Let's connect professionally",
    color: "from-blue-600 to-blue-800"
  }
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

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
              <Sparkles className="text-primary" size={16} />
              <span className="text-sm font-medium text-primary">Let's Connect</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  target={method.link.startsWith('http') ? "_blank" : undefined}
                  rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover"
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="text-white" size={24} />
                    </div>

                    <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                      {method.title}
                      <ArrowUpRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={18} />
                    </h3>

                    <p className="text-sm text-muted-foreground mb-3">
                      {method.description}
                    </p>

                    <p className="text-sm font-medium text-primary break-all">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="text-primary" size={20} />
                  <h3 className="text-xl font-semibold">Based in India</h3>
                </div>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Available for remote opportunities, freelance projects, and collaborations worldwide.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-4 py-2 rounded-lg bg-secondary text-sm font-medium">
                    Open to Work
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-secondary text-sm font-medium">
                    Remote Friendly
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-secondary text-sm font-medium">
                    Quick Responder
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground text-sm mb-4">
                Prefer email? Send me a message directly
              </p>
              <a
                href="mailto:tanyagarg5315@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group"
              >
                <Mail size={20} />
                Send Email
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
