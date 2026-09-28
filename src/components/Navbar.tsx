import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Work", section: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/achievements", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "nav-glass border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label="Tanya Garg - Home"
        >
          <div className="w-8 h-8 bg-lime flex items-center justify-center text-xs font-mono font-bold text-charcoal shrink-0 group-hover:scale-110 transition-transform duration-200">
            TG
          </div>
          <span className="hidden sm:block font-display font-semibold text-sm tracking-[0.12em] uppercase text-foreground">
            Tanya Garg
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`relative text-xs font-mono tracking-[0.15em] uppercase transition-colors duration-200 ${
                isActive(l.href)
                  ? "text-lime"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
              {isActive(l.href) && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-lime"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right side: status + theme toggle */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-lime status-pulse" />
            <span className="tracking-widest uppercase text-[10px]">Available</span>
          </div>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 border border-border text-muted-foreground hover:text-lime hover:border-lime transition-all duration-200"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 border border-border text-muted-foreground"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 border border-border text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden nav-glass border-b border-border/60"
          >
            <div className="flex flex-col px-6 pb-6 pt-2 gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 text-xs font-mono tracking-widest uppercase border-b border-border/40 transition-colors last:border-0 ${
                    isActive(l.href)
                      ? "text-lime"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 pt-3 text-xs font-mono text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-lime status-pulse" />
                <span className="tracking-widest uppercase text-[10px]">Available for opportunities</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
