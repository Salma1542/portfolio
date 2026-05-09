import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { PORTFOLIO_DATA } from "@/src/constants";
import { usePortfolio } from "@/src/context/PortfolioContext";

export default function Projects() {
  const { language } = usePortfolio();
  const t = PORTFOLIO_DATA[language];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Atmospheric Glows - Lightened */}
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-vibrant-blue/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-vibrant-purple/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-bold tracking-[0.4em] uppercase text-primary mb-6 block"
          >
            {t.nav.projects}
          </motion.span>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
          >
            {language === "en" ? "Featured Projects" : "أبرز المشاريع"}
          </motion.h3>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            className="h-1 bg-vibrant-purple rounded-full mt-6 mx-auto shadow-[0_0_15px_rgba(var(--vibrant-purple),0.5)]" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {t.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="group cursor-default"
            >
              <div className="h-full overflow-hidden rounded-[2.5rem] bg-white/5 backdrop-blur-3xl border border-white/10 group-hover:border-vibrant-purple/80 transition-all duration-500 shadow-2xl relative">
                <div className="relative h-full flex flex-col">
                  <div className="aspect-video overflow-hidden relative">
                   <div className="aspect-video overflow-hidden relative">
  {project.videoUrl ? (
    <video
      src={project.videoUrl}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
    />
  ) : (
    <img 
      src={project.image} 
      alt={project.title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      referrerPolicy="no-referrer"
    />
  )}
  
  {/* الطبقة الشفافة (Overlay) والـ Badges هتفضل زي ما هي فوق الفيديو أو الصورة */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
  
  <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
    {project.tech.slice(0, 3).map((tech) => (
      <Badge key={tech} variant="secondary" className="bg-white/10 backdrop-blur-md text-white border-white/10 text-[9px] uppercase tracking-widest font-bold px-2 py-0.5">
        {tech}
      </Badge>
    ))}
  </div>
</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    
                    {/* Floating Tech Badges on Image */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-white/10 backdrop-blur-md text-white border-white/10 text-[9px] uppercase tracking-widest font-bold px-2 py-0.5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <h4 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight group-hover:text-vibrant-pink transition-colors duration-500">
                      {project.title}
                    </h4>
                    
                    <div className="space-y-4 mb-8 flex-1">
                      <motion.div whileHover={{ x: 8 }} className="relative pl-6 border-l-2 border-vibrant-pink shadow-[0_0_15px_rgba(var(--vibrant-pink),0.2)]">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-vibrant-pink mb-1 block">
                          {language === "en" ? "The Challenge" : "التحدي"}
                        </span>
                        <p className="text-muted-foreground/90 text-sm md:text-base leading-relaxed font-light">
                          {project.challenge}
                        </p>
                      </motion.div>
                      <motion.div whileHover={{ x: 8 }} className="relative pl-6 border-l-2 border-vibrant-blue shadow-[0_0_15px_rgba(var(--vibrant-blue),0.2)]">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-vibrant-blue mb-1 block">
                          {language === "en" ? "The Action" : "الإجراء"}
                        </span>
                        <p className="text-muted-foreground/90 text-sm md:text-base leading-relaxed font-light">
                          {project.action}
                        </p>
                      </motion.div>
                      <motion.div whileHover={{ x: 8 }} className="relative pl-6 border-l-2 border-vibrant-purple shadow-[0_0_15px_rgba(var(--vibrant-purple),0.2)]">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-vibrant-purple mb-1 block">
                          {language === "en" ? "The Result" : "النتيجة"}
                        </span>
                        <p className="text-muted-foreground/90 text-sm md:text-base leading-relaxed font-light">
                          {project.result}
                        </p>
                      </motion.div>
                    </div>

                    <div className="flex items-center gap-4 mt-auto">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full">
  <Button variant="outline" className="w-full rounded-xl gap-2 h-11 border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-base font-bold tracking-tight">
    <Github className="h-4 w-4" />
    Code
  </Button>
</a>
                      </motion.div>
                     <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
  <a href={project.link} target="_blank" rel="noopener noreferrer">
    <Button className="w-full rounded-xl gap-2 h-12 bg-vibrant-gradient border-none text-base font-bold tracking-tight shadow-xl shadow-vibrant-purple/30 group/btn">
      <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
      Live Demo
    </Button>
  </a>
</motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

