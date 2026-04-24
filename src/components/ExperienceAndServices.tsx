import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Briefcase, Database, Server, Globe, Monitor, Code2, Layout, Zap, ArrowRight, 
  Target, Lightbulb, TrendingUp, ShoppingBag, Gauge, Stethoscope, DollarSign,
  Atom, Github, FileCode, Type
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/src/constants";
import { usePortfolio } from "@/src/context/PortfolioContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, any> = {
  Database: Database,
  Server: Server,
  Globe: Globe,
  Monitor: Monitor,
  Code2: Code2,
  Layout: Layout,
  Zap: Zap,
  ShoppingBag: ShoppingBag,
  Gauge: Gauge,
  Stethoscope: Stethoscope,
};

const stackIconMap: Record<string, any> = {
  "React.js": Atom,
  "Node.js": Server,
  "Express.js": Zap,
  "MongoDB": Database,
  "Git": Github,
  "HTML5": Globe,
  "CSS3": Layout,
  "JavaScript": FileCode,
  "Bootstrap": Type,
};

export default function ExperienceAndServices() {
  const { language } = usePortfolio();
  const t = PORTFOLIO_DATA[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const blockVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="space-y-32 py-20 relative overflow-hidden">
      {/* Background Atmospheric Glows - Lightened */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-vibrant-blue/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-vibrant-purple/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Experience Section */}
      <section id="experience" className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 tracking-tighter uppercase relative inline-block">
              {t.nav.experience}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                className="absolute -bottom-2 left-0 h-1 bg-vibrant-pink rounded-full shadow-[0_0_10px_rgba(var(--vibrant-pink),0.5)]" 
              />
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {t.experience.map((exp: any, i: number) => (
              <motion.div
                key={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group flex flex-col bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-white/10 shadow-xl overflow-hidden hover:border-vibrant-purple/40 transition-all duration-300"
              >
                {/* Top Part - Summary */}
                <div className="p-6 border-b border-white/10 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 p-2 flex items-center justify-center shrink-0">
                        <img 
                          src={exp.logo} 
                          alt={exp.company} 
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(exp.company)}&background=random&color=fff`;
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white leading-tight">{exp.company}</h4>
                        <p className="text-sm text-muted-foreground/80">{exp.role}</p>
                      </div>
                    </div>
                    <Badge className={`rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider ${exp.type === 'Full-time' || exp.type === 'دوام كامل' ? 'bg-vibrant-blue/20 text-vibrant-blue border-vibrant-blue/30' : 'bg-vibrant-pink/20 text-vibrant-pink border-vibrant-pink/30'}`}>
                      {exp.type}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-vibrant-purple" />
                      <span>{exp.period} <span className="opacity-40">·</span> {exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Globe className="w-3 h-3 text-vibrant-blue" />
                      <span>{exp.location} <span className="opacity-40">·</span> {exp.workType}</span>
                    </div>
                  </div>

                  {/* Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((item: string, idx: number) => {
                      const StackIcon = stackIconMap[item] || Code2;
                      return (
                        <span key={idx} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-muted-foreground/80 group-hover:border-vibrant-purple/30 group-hover:text-white transition-all duration-300">
                          <StackIcon className="w-3 h-3 text-vibrant-purple" />
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Part - Details (STAR) */}
                <div className="flex-1 p-6 space-y-6 overflow-y-auto max-h-[400px] custom-scrollbar">
                  {/* Situation */}
                  <div className="pl-4 border-l-4 border-amber-500 bg-amber-500/5 p-4 rounded-r-2xl">
                    <h5 className="text-xs font-black uppercase tracking-widest text-amber-500 mb-2">
                      {language === 'en' ? 'SITUATION' : 'الموقف'}
                    </h5>
                    <p className="text-sm text-muted-foreground/90 leading-relaxed font-light italic">
                      "{exp.situation}"
                    </p>
                  </div>

                  {/* Action */}
                  <div className="pl-4 border-l-4 border-vibrant-blue bg-vibrant-blue/5 p-4 rounded-r-2xl">
                    <h5 className="text-xs font-black uppercase tracking-widest text-vibrant-blue mb-2">
                      {language === 'en' ? 'ACTION' : 'الإجراء'}
                    </h5>
                    <ul className="space-y-2">
                      {exp.actions.map((action: string, idx: number) => (
                        <li key={idx} className="flex gap-2 text-sm text-muted-foreground/90 leading-relaxed font-light">
                          <span className="text-vibrant-blue mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-vibrant-blue shadow-[0_0_5px_rgba(var(--vibrant-blue),0.5)]" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Result */}
                  <div className="pl-4 border-l-4 border-green-500 bg-green-500/5 p-4 rounded-r-2xl">
                    <h5 className="text-xs font-black uppercase tracking-widest text-green-500 mb-2">
                      {language === 'en' ? 'RESULT' : 'النتيجة'}
                    </h5>
                    <ul className="space-y-2">
                      {exp.results.map((result: string, idx: number) => (
                        <li key={idx} className="flex gap-2 text-sm text-muted-foreground/90 leading-relaxed font-light">
                          <span className="text-green-500 mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-green-500 shadow-[0_0_5px_rgba(0,128,0,0.5)]" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header to match screenshot - slightly downsized */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-16"
          >
            {/* Header Icon */}
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-14 h-14 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6 text-vibrant-purple border border-white/10 shadow-lg"
            >
              <Code2 className="h-6 w-6" />
            </motion.div>
            
            <h5 className="text-vibrant-blue text-xs font-bold tracking-[0.3em] uppercase mb-4">
              {language === "en" ? "WHAT I CAN DO FOR YOU" : "ما يمكنني فعله من أجلك"}
            </h5>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tighter">
              {t.nav.services}
            </h2>
            
            {/* Short underline */}
            <div className="w-12 h-1 bg-gradient-to-r from-vibrant-purple via-vibrant-pink to-vibrant-blue rounded-full mb-6" />
            
            <p className="text-muted-foreground text-lg font-light tracking-wide max-w-xl mx-auto">
              {language === "en" ? "Comprehensive development services to bring your ideas to life." : "خدمات تطوير شاملة لإحياء أفكارك وتحويلها إلى واقع ملموس."}
            </p>
          </motion.div>

          {/* Services Grid (3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {t.services.map((service: any, i: number) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -15, scale: 1.05 }}
                  className="group"
                >
                  <div className="h-full bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[2rem] p-8 transition-all duration-500 hover:border-vibrant-purple/60 hover:bg-vibrant-purple/[0.05] hover:shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(var(--vibrant-purple),0.3)] shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-vibrant-purple/10 rounded-full blur-3xl -z-10" />
                    
                    <div className="w-10 h-10 bg-vibrant-purple/20 rounded-xl flex items-center justify-center mb-6 text-vibrant-purple group-hover:bg-vibrant-purple group-hover:text-white transition-all duration-500 shadow-inner">
                      <Icon className="h-5 w-5" />
                    </div>
                    
                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-vibrant-purple transition-colors duration-300">
                      {service.title}
                    </h4>
                    
                    <p className="text-muted-foreground/75 text-base leading-relaxed mb-6 font-light line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                      {service.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                       {service.tags?.map((tag: string, idx: number) => (
                         <Badge 
                           key={idx} 
                           variant="outline" 
                           className="bg-white/5 border-white/10 text-muted-foreground/50 font-medium text-[10px] py-0.5 px-2 rounded-lg group-hover:border-vibrant-fuchsia/30 group-hover:text-white transition-all"
                         >
                           {tag}
                         </Badge>
                       ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Styled CTA Button - Vibrant and Responsive */}
          <div className="flex justify-center">
            <Link to="/pricing">
              <motion.button
                whileHover={{ scale: 1.05, shadow: "0 0 25px rgba(124, 58, 237, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-3 px-8 py-4 bg-vibrant-gradient rounded-xl text-white font-bold text-base shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <div className="relative flex items-center gap-3">
                  <div className="p-1.5 bg-white/20 rounded-md">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <span className="tracking-wide">{language === "en" ? "Check Detailed Pricing" : "الاطلاع على تفاصيل الأسعار"}</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </div>
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


