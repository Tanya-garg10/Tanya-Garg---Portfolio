import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-10 bg-card/50">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 bg-lime flex items-center justify-center">
          <span className="font-mono font-bold text-[9px] text-foreground">TG</span>
        </div>
        <p className="font-mono text-xs text-muted-foreground tracking-widest">
          © 2026 TANYA GARG · BUILDER'S LAB
        </p>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://github.com/Tanya-garg10"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-1.5 text-muted-foreground hover:text-lime transition-colors duration-200"
        >
          <Github size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/tanya-garg-6757862b1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-1.5 text-muted-foreground hover:text-lime transition-colors duration-200"
        >
          <Linkedin size={16} />
        </a>
        <a
          href="mailto:tanyagarg5315@gmail.com"
          aria-label="Email"
          className="p-1.5 text-muted-foreground hover:text-lime transition-colors duration-200"
        >
          <Mail size={16} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
