import React from "react";
import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/src/constants";
import { usePortfolio } from "@/src/context/PortfolioContext";
import { Award, ExternalLink, Clock, MapPin } from "lucide-react";

export default function EducationAndCertificates() {
  const { language } = usePortfolio();
  const t = PORTFOLIO_DATA[language];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Atmospheric Glows - Lightened */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-vibrant-purple/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-vibrant-blue/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Title */}
        <div id="education" className="text-center mb-16 scroll-mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block relative"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r from-vibrant-blue via-vibrant-purple to-vibrant-pink">
              {language === "en" ? "Education & Certificates" : "التعليم والشهادات"}
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-vibrant-blue via-vibrant-purple to-vibrant-pink rounded-full" 
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div className="scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block relative mb-8"
            >
              <h3 className="text-2xl font-bold uppercase tracking-widest text-vibrant-purple">
                {language === "en" ? "Education" : "التعليم"}
              </h3>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-vibrant-purple rounded-full shadow-[0_0_10px_rgba(var(--vibrant-purple),0.5)]" />
            </motion.div>

            <div className="space-y-6">
              {t.education.map((edu: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    borderColor: "var(--vibrant-purple)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(var(--vibrant-purple), 0.3)"
                  }}
                  className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-6 shadow-xl border border-white/10 relative overflow-hidden group transition-all duration-500 hover:bg-vibrant-purple/[0.03]"
                >
                  <div className="absolute inset-0 bg-vibrant-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-black/40 flex items-center justify-center border border-white/5 shrink-0 shadow-inner group-hover:border-vibrant-purple/40 transition-all duration-500">
                      <img 
                        src={edu.logo} 
                        alt="University Logo" 
                        className="w-10 h-10 object-contain filter brightness-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-1 leading-tight tracking-tight group-hover:text-vibrant-purple transition-colors duration-500">
                        {edu.title}
                      </h4>
                      <p className="text-base text-muted-foreground/80 font-light tracking-wide mb-4">
                        {edu.institution}
                      </p>
                      
                      <div className="flex items-center gap-4 py-4 border-t border-white/10">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-vibrant-blue shadow-[0_0_10px_rgba(var(--vibrant-blue),0.5)]" />
                          <span className="font-bold text-sm group-hover:text-vibrant-blue transition-colors">{edu.grade}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-vibrant-purple shadow-[0_0_10px_rgba(var(--vibrant-purple),0.5)]" />
                          <span className="font-bold text-sm group-hover:text-vibrant-purple transition-colors">{edu.year}</span>
                        </div>
                      </div>
                      {edu.location && (
                        <div className="mt-4 flex items-center gap-2 text-[10px] font-bold tracking-widest text-muted-foreground/40 uppercase">
                          <MapPin className="w-3 h-3" />
                          <span>{edu.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certificates Column */}
          <div id="certificates" className="scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block relative mb-8"
            >
              <h3 className="text-2xl font-bold uppercase tracking-widest text-vibrant-pink">
                {language === "en" ? "Certificates" : "الشهادات"}
              </h3>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-vibrant-pink rounded-full shadow-[0_0_10px_rgba(var(--vibrant-pink),0.5)]" />
            </motion.div>

            <div className="space-y-6">
              {t.certificates.map((cert: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ 
                    x: 10,
                    scale: 1.02,
                    borderColor: "var(--vibrant-pink)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(var(--vibrant-pink), 0.3)"
                  }}
                  className="bg-white/5 backdrop-blur-xl rounded-[1.5rem] p-6 shadow-lg border border-white/10 relative group transition-all duration-500 hover:bg-vibrant-pink/[0.03]"
                >
                  <div className="absolute inset-0 bg-vibrant-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem]" />
                  
                  <motion.a 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={cert.link} 
                    className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-white/5 backdrop-blur-md flex items-center justify-center text-muted-foreground hover:bg-vibrant-pink hover:text-white transition-all duration-500 z-20 border border-white/10"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
 
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-vibrant-pink/10 flex items-center justify-center shrink-0 border border-vibrant-pink/20 shadow-inner group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                      {cert.logo ? (
                        <img 
                          src={cert.logo} 
                          alt="Certificate Logo" 
                          className="w-full h-full object-contain p-2"
                        />
                      ) : (
                        <Award className="w-6 h-6 text-vibrant-pink" />
                      )}
                    </div>
                    <div className="flex-1 pr-10">
                      <p className="text-vibrant-pink font-bold text-[10px] tracking-[0.2em] uppercase mb-1">{cert.issuer}</p>
                      <h4 className="text-lg font-bold mb-2 leading-tight tracking-tight group-hover:text-vibrant-pink transition-colors duration-500">
                        {cert.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
                        <span className="text-muted-foreground/60 text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5">
                          <Clock className="w-3 h-3" /> {cert.date}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed font-light tracking-wide line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
