import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, Code2, Monitor, Smartphone, Layout, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "@/src/constants";
import { usePortfolio } from "@/src/context/PortfolioContext";

export default function About() {
  const { language } = usePortfolio();
  const t = PORTFOLIO_DATA[language];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Atmospheric Glows - Lightened */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-vibrant-blue/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: language === "en" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 rtl:lg:col-start-6"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-sm font-bold tracking-[0.4em] uppercase text-primary mb-6 block"
            >
              {t.nav.about}
            </motion.span>
            
            <p className="text-lg md:text-xl text-muted-foreground/80 mb-10 leading-relaxed font-light tracking-wide">
              {t.about.description}
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  borderColor: "var(--vibrant-blue)",
                  backgroundColor: "rgba(var(--vibrant-blue), 0.05)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(var(--vibrant-blue), 0.4)"
                }}
                className="p-6 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-2xl transition-all duration-300"
              >
                <p className="text-3xl font-bold text-vibrant-blue mb-1">1+</p>
                <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground/60">{language === "en" ? "Year of Experience" : "سنة من الخبرة"}</p>
              </motion.div>
              <motion.div 
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  borderColor: "var(--vibrant-purple)",
                  backgroundColor: "rgba(var(--vibrant-purple), 0.05)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(var(--vibrant-purple), 0.4)"
                }}
                className="p-6 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-2xl transition-all duration-300"
              >
                <p className="text-3xl font-bold text-vibrant-purple mb-1">5+</p>
                <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground/60">{language === "en" ? "Projects Completed" : "مشاريع منجزة"}</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center items-center rtl:lg:col-start-1 rtl:lg:row-start-1"
          >
            <div className="relative w-full aspect-square max-w-[400px] flex items-center justify-center">
              {/* Central Icon */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-56 h-56 bg-gradient-to-br from-primary to-purple-600 rounded-[3rem] flex items-center justify-center shadow-[0_0_50px_rgba(var(--primary),0.3)] relative z-10 border border-white/20"
              >
                <Code2 className="w-28 h-28 text-white" />
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 p-6 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl z-20 cursor-pointer"
              >
                <Monitor className="w-10 h-10 text-vibrant-blue" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }}
                whileHover={{ scale: 1.2, rotate: -15 }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-10 left-0 p-6 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl z-20 cursor-pointer"
              >
                <Smartphone className="w-10 h-10 text-vibrant-purple" />
              </motion.div>

              <motion.div
                animate={{ x: [0, 20, 0], scale: [1, 1.1, 1] }}
                whileHover={{ scale: 1.2, x: 25 }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/4 left-0 p-6 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl z-20 cursor-pointer"
              >
                <Layout className="w-10 h-10 text-vibrant-green" />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
                whileHover={{ scale: 1.3, rotate: 25 }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-1/4 p-6 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl z-20 cursor-pointer"
              >
                <Cpu className="w-10 h-10 text-vibrant-orange" />
              </motion.div>

              {/* Decorative Circles */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-dashed border-primary/20 rounded-full animate-spin-slow" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] border border-dashed border-vibrant-purple/20 rounded-full animate-spin-slow-reverse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

