import { motion } from "motion/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, Github, Linkedin, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/src/constants";
import { usePortfolio } from "@/src/context/PortfolioContext";
import { cn } from "@/lib/utils";
import heroImg from "./images/hero.webp";
export default function Hero() {
  const { language } = usePortfolio();
  const t = PORTFOLIO_DATA[language];

  return (
    <section className="relative overflow-hidden flex items-center min-h-[100vh]">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vibrant-purple/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: language === "en" ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left rtl:text-right"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary/50 border text-xs font-medium text-muted-foreground"
            >
              {language === "en" ? "Welcome to my world" : "أهلاً بك في عالمي"}
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              {language === "en" ? "Hi, I'm " : "أهلاً، أنا "}
              <br />
              <span className="text-gradient whitespace-nowrap">{t.name}</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-4">
              {t.role}
            </h2>

            <p className="text-base text-muted-foreground max-w-lg mb-8 leading-relaxed">
              {language === "en" 
                ? "I build scalable, high-performance web applications using React.js and Node.js." 
                : "أقوم ببناء تطبيقات ويب قابلة للتوسع وعالية الأداء باستخدام React.js و Node.js."}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button 
                size="lg" 
                className="rounded-full px-8 bg-vibrant-gradient hover:opacity-90 transition-opacity border-none font-bold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {language === "en" ? "Let's Talk" : "لنبدأ التحدث"}
              </Button>
              <a 
                href="/Salma_Abdelwahed_CV.pdf" 
                download="Salma_Abdelwahed_CV.pdf"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "rounded-full px-8 font-bold flex items-center gap-2"
                )}
              >
                <ArrowDownToLine className="h-4 w-4" />
                {language === "en" ? "Download CV" : "تحميل السيرة الذاتية"}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              {/* Circular frame with border */}
              <div className="absolute inset-0 rounded-full border-4 border-vibrant-green/30 animate-pulse" />
              <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-vibrant-pink/50">
               <img 
  src={heroImg}
  alt={t.name}
  className="w-full h-full object-cover"
/>
              </div>
              {/* Decorative elements around the circle */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-vibrant-purple/40 blur-xl rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-vibrant-blue/40 blur-xl rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 rtl:translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-muted-foreground rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

