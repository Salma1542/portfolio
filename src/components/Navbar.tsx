import { motion } from "motion/react";
import { Menu, X, Sun, Moon, Languages } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { usePortfolio } from "@/src/context/PortfolioContext";
import { PORTFOLIO_DATA } from "@/src/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, theme, toggleTheme } = usePortfolio();
  const t = PORTFOLIO_DATA[language];

  const navLinks = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.education, href: "#education" },
    { name: t.nav.certificates, href: "#certificates" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.testimonials, href: "#testimonials" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 font-bold text-xl tracking-tighter"
          >
            <a href="#hero" className="text-gradient">
              {language === "en" ? "SA." : "س.ع"}
            </a>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex items-baseline space-x-4 rtl:space-x-reverse">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <div className="flex items-center gap-2 border-l rtl:border-r rtl:border-l-0 pl-4 rtl:pr-4">
              <Button variant="ghost" size="icon" onClick={toggleTheme} title="Toggle Theme">
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setLanguage(language === "en" ? "ar" : "en")} title="Toggle Language">
                <Languages className="h-5 w-5" />
              </Button>
              <Button variant="default" size="sm" className="bg-vibrant-gradient hover:opacity-90 transition-opacity border-none">
                {t.nav.resume}
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setLanguage(language === "en" ? "ar" : "en")}>
              <Languages className="h-5 w-5" />
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-background border-b"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button variant="default" className="w-full">
                {t.nav.resume}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

