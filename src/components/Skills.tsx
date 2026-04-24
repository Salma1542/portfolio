import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PORTFOLIO_DATA } from "@/src/constants";
import { 
  Code2, Database, Brain, Server, Layout, 
  Lock, Rocket, Users, Zap, Clock, Globe, Settings
} from "lucide-react";
import { usePortfolio } from "@/src/context/PortfolioContext";

const iconMap: Record<string, any> = {
  Code2, Server, Database, Brain, Layout, 
  Lock, Rocket, Users, Zap, Clock, Globe, Settings
};

// Custom Brand Icons as SVGs
const BrandIcons: Record<string, (props: any) => React.JSX.Element> = {
  React: (props) => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" {...props}>
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  Nextjs: (props) => (
    <svg viewBox="0 0 128 128" {...props}>
      <path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.6v37.2h-7.1V35.2h7.1l52.4 61.9c4.7-9.1 7.4-19.4 7.4-30.3 0-35.3-28.7-64-64-64zm29.2 42.2h-7.1V35.2h7.1v7zm-7.1 53.4l-52.4-61.9v37.2h-7.1V35.2h7.1l52.4 61.9c4.7-9.1 7.4-19.4 7.4-30.3 0-35.3-28.7-64-64-64z" />
    </svg>
  ),
  Typescript: (props) => (
    <svg viewBox="0 0 128 128" {...props}>
      <path fill="currentColor" d="M1.5 63.913l-.012 62.599 125.012.013-.013-125.013-124.987-.012-.012 62.413zm82.474 5.464l10.367-6.299c2.489 4.244 4.756 7.661 8.523 7.661 3.517 0 5.711-1.782 5.711-4.244 0-2.943-2.327-3.984-7.661-6.364l-2.658-1.168c-7.725-3.375-12.917-7.531-12.917-16.162 0-9.217 7.205-16.032 18.239-16.032 9.087 0 15.059 3.505 19.343 10.904l-9.399 6.036c-2.467-4.049-4.823-5.841-8.847-5.841-3.375 0-5.322 1.817-5.322 3.894 0 2.726 2.077 3.699 7.009 5.841l2.658 1.168c9.606 4.115 14.15 8.763 14.15 16.681 0 10.97-8.626 16.942-20.511 16.942-12.787 0-20.446-6.685-24.075-13.017zm-64.39-27.901h11.164v43.489h11.423v-43.489h11.164v-9.477h-33.751v9.477z" />
    </svg>
  ),
  Javascript: (props) => (
    <svg viewBox="0 0 128 128" {...props}>
      <path fill="currentColor" d="M1.5 63.913l-.012 62.599 125.012.013-.013-125.013-124.987-.012-.012 62.413zm101.444 43.164c-5.711 0-10.106-2.467-13.351-6.621l9.087-5.517c2.207 3.245 4.414 4.803 7.205 4.803 2.986 0 4.803-1.428 4.803-3.44 0-2.402-1.947-3.245-6.361-5.128l-2.207-.909c-8.568-3.635-14.28-7.789-14.28-16.811 0-8.893 6.621-15.124 16.811-15.124 8.179 0 13.566 2.986 17.525 9.477l-8.308 5.322c-2.402-3.894-4.803-5.452-8.438-5.452-2.986 0-4.803 1.623-4.803 3.44 0 2.142 1.428 3.116 5.841 4.998l2.207.909c9.477 4.024 14.864 8.179 14.864 16.942 0 10.385-7.789 17.525-20.511 17.525zm-47.514-2.207c-11.489 0-18.759-5.322-22.524-13.436l9.606-5.582c2.207 4.414 5.388 7.205 11.294 7.205 5.128 0 8.308-2.012 8.308-9.477v-39.205h11.423v39.335c0 14.28-8.179 21.16-18.107 21.16z" />
    </svg>
  ),
  Redux: (props) => (
    <svg viewBox="0 0 128 128" {...props}>
      <path fill="currentColor" d="M78.6 15.6c-1.3 0-2.6.4-3.7 1.1l-40.4 23.3c-2.3 1.3-3.7 3.8-3.7 6.4v46.6c0 2.6 1.4 5.1 3.7 6.4l40.4 23.3c2.3 1.3 5.1 1.3 7.4 0l40.4-23.3c2.3-1.3 3.7-3.8 3.7-6.4v-46.6c0-2.6-1.4-5.1-3.7-6.4l-40.4-23.3c-1.1-.7-2.4-1.1-3.7-1.1zm0 7.4c.4 0 .8.1 1.1.3l40.4 23.3c.7.4 1.1 1.2 1.1 2v46.6c0 .8-.4 1.6-1.1 2l-40.4 23.3c-.7.4-1.5.4-2.2 0l-40.4-23.3c-.7-.4-1.1-1.2-1.1-2v-46.6c0-.8.4-1.6 1.1-2l40.4-23.3c.3-.2.7-.3 1.1-.3zm-14.7 20.2c-1.2 0-2.4.3-3.4 1l-14.7 8.5c-2.1 1.2-3.4 3.5-3.4 5.9v17c0 2.4 1.3 4.7 3.4 5.9l14.7 8.5c2.1 1.2 4.7 1.2 6.8 0l14.7-8.5c2.1-1.2 3.4-3.5 3.4-5.9v-17c0-2.4-1.3-4.7-3.4-5.9l-14.7-8.5c-1-.7-2.2-1-3.4-1zm0 6.8c.4 0 .8.1 1.1.3l14.7 8.5c.7.4 1.1 1.1 1.1 1.9v17c0 .8-.4 1.5-1.1 1.9l-14.7 8.5c-.7.4-1.5.4-2.2 0l-14.7-8.5c-.7-.4-1.1-1.1-1.1-1.9v-17c0-.8.4-1.5 1.1-1.9l14.7-8.5c.3-.2.7-.3 1.1-.3z" />
    </svg>
  ),
  Html5: (props) => (
    <svg viewBox="0 0 128 128" {...props}>
      <path fill="currentColor" d="M14.6 11.4l10.3 105.2 39.1 10.8 39.1-10.8 10.3-105.2h-98.8zm78.2 31.2l-1.8 18.7h-36.4l1.2 13.1h33.4l-3.3 33.6-22.1 6.1-22.1-6.1-1.4-15.6h12.5l.7 8.1 8.9 2.4 8.9-2.4 1.3-13.1h-46.4l-3.6-40.6h51.8l1.8-18.7h-55.4l-1.8-18.7h77.2z" />
    </svg>
  ),
  Css3: (props) => (
    <svg viewBox="0 0 128 128" {...props}>
      <path fill="currentColor" d="M14.6 11.4l10.3 105.2 39.1 10.8 39.1-10.8 10.3-105.2h-98.8zm78.2 31.2l-1.8 18.7h-36.4l1.2 13.1h33.4l-3.3 33.6-22.1 6.1-22.1-6.1-1.4-15.6h12.5l.7 8.1 8.9 2.4 8.9-2.4 1.3-13.1h-46.4l-3.6-40.6h51.8l1.8-18.7h-55.4l-1.8-18.7h77.2z" />
    </svg>
  ),
  Tailwind: (props) => (
    <svg viewBox="0 0 128 128" {...props}>
      <path fill="currentColor" d="M64 32c-16 0-24 8-24 24 0 16 8 24 24 24 16 0 24-8 24-24 0-16-8-24-24-24zm-48 48c-16 0-24 8-24 24 0 16 8 24 24 24 16 0 24-8 24-24 0-16-8-24-24-24z" />
    </svg>
  ),
  Sass: (props) => (
    <svg viewBox="0 0 128 128" {...props}>
      <path fill="currentColor" d="M115.3 64.1c0 28.3-22.9 51.2-51.2 51.2S12.9 92.4 12.9 64.1s22.9-51.2 51.2-51.2 51.2 22.9 51.2 51.2z" />
    </svg>
  ),
  Bootstrap: (props) => (
    <svg viewBox="0 0 128 128" {...props}>
      <path fill="currentColor" d="M128 64c0 35.3-28.7 64-64 64S0 99.3 0 64 28.7 0 64 0s64 28.7 64 64zM42.7 32v64h21.3c11.8 0 21.3-9.5 21.3-21.3 0-6.4-2.8-12.1-7.3-16 4.5-3.9 7.3-9.6 7.3-16 0-11.8-9.5-21.3-21.3-21.3H42.7zm10.7 10.7h10.7c5.9 0 10.7 4.8 10.7 10.7s-4.8 10.7-10.7 10.7H53.4V42.7zm0 32h10.7c5.9 0 10.7 4.8 10.7 10.7s-4.8 10.7-10.7 10.7H53.4V74.7z" />
    </svg>
  ),
  Jquery: (props) => (
    <svg viewBox="0 0 128 128" {...props}>
      <path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 117.3c-29.4 0-53.3-23.9-53.3-53.3S34.6 10.7 64 10.7 117.3 34.6 117.3 64s-23.9 53.3-53.3 53.3z" />
    </svg>
  ),
  Github: (props) => (
    <svg viewBox="0 0 128 128" {...props}>
      <path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64c0 28.2 18.3 52.1 43.7 60.5 3.2.6 4.4-1.4 4.4-3.1 0-1.5-.1-5.5-.1-10.8-17.8 3.9-21.6-8.6-21.6-8.6-2.9-7.4-7.1-9.4-7.1-9.4-5.8-4 .4-3.9.4-3.9 6.4.5 9.8 6.6 9.8 6.6 5.7 9.8 15 7 18.7 5.3.6-4.1 2.2-7 4.1-8.6-14.2-1.6-29.2-7.1-29.2-31.7 0-7 2.5-12.7 6.6-17.2-.7-1.6-2.9-8.1.6-16.9 0 0 5.4-1.7 17.6 6.6 5.1-1.4 10.6-2.1 16-2.1s10.9.7 16 2.1c12.2-8.3 17.6-6.6 17.6-6.6 3.5 8.8 1.3 15.3.6 16.9 4.1 4.5 6.6 10.2 6.6 17.2 0 24.7-15 30.1-29.2 31.7 2.3 2 4.4 6 4.4 12.1 0 8.7-.1 15.8-.1 18 0 1.7 1.2 3.7 4.4 3.1C109.7 116.1 128 92.2 128 64c0-35.3-28.7-64-64-64z" />
    </svg>
  ),
  Nodejs: (props) => (
    <svg viewBox="0 0 128 128" {...props}>
      <path fill="currentColor" d="M64 0L12 30v68l52 30 52-30V30L64 0zm41.3 89.3l-41.3 23.8-41.3-23.8V38.7l41.3-23.8 41.3 23.8v50.6z" />
    </svg>
  ),
};

const brandColors: Record<string, string> = {
  React: "var(--vibrant-blue)",
  Nextjs: "var(--vibrant-purple)",
  Typescript: "var(--vibrant-blue)",
  Javascript: "var(--vibrant-pink)",
  Redux: "var(--vibrant-purple)",
  Html5: "var(--vibrant-pink)",
  Css3: "var(--vibrant-blue)",
  Tailwind: "var(--vibrant-blue)",
  Sass: "var(--vibrant-pink)",
  Bootstrap: "var(--vibrant-purple)",
  Jquery: "var(--vibrant-blue)",
  Github: "var(--vibrant-purple)",
  Nodejs: "var(--vibrant-pink)",
  Angular: "var(--vibrant-purple)",
  Figma: "var(--vibrant-pink)",
  Docker: "var(--vibrant-blue)",
  Vite: "var(--vibrant-purple)",
};

export default function Skills() {
  const { language } = usePortfolio();
  const t = PORTFOLIO_DATA[language];
  const [activeTab, setActiveTab] = useState("front-end");

  const activeSkills = t.skills.items[activeTab as keyof typeof t.skills.items] || [];

  const tabColors: Record<string, string> = {
    "front-end": "var(--vibrant-blue)",
    "back-end": "var(--vibrant-purple)",
    "tools": "var(--vibrant-blue)",
    "soft-skills": "var(--vibrant-pink)",
  };

  const currentTabColor = tabColors[activeTab] || "var(--vibrant-purple)";

  return (
    <section id="skills" className="relative overflow-hidden bg-background py-32">
      {/* Background Atmospheric Glows - Lightened */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-vibrant-blue/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-vibrant-purple/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vibrant-pink/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter text-white"
          >
            {t.skills.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-12 font-light tracking-wide"
          >
            {t.skills.subtitle}
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {t.skills.categories.map((category: any) => {
            const isActive = activeTab === category.id;
            const color = tabColors[category.id] || "var(--vibrant-purple)";
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative px-8 py-4 rounded-xl border transition-all duration-300 font-bold text-sm tracking-wide
                  ${isActive 
                    ? "text-white" 
                    : "bg-white/5 backdrop-blur-md text-muted-foreground border-white/10 hover:border-white/20"}
                `}
                style={isActive ? {
                  backgroundColor: color,
                  borderColor: color,
                  boxShadow: `0 0 20px ${color}40`
                } : {}}
              >
                {category.name}
              </motion.button>
            );
          })}
        </div>

        {/* Main Content Card */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden"
        >
          {/* Internal Title & Description */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white tracking-tight">
              {activeTab === "front-end" ? (language === "en" ? "Frontend Development" : "تطوير الواجهة الأمامية") : 
               activeTab === "back-end" ? (language === "en" ? "Backend Development" : "تطوير الواجهة الخلفية") : 
               activeTab === "tools" ? (language === "en" ? "Tools & Utilities" : "الأدوات والوسائل") :
               (language === "en" ? "Professional Growth" : "النمو المهني")}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed font-light tracking-wide max-w-4xl">
              {t.skills.descriptions[activeTab as keyof typeof t.skills.descriptions]}
            </p>
          </div>

          {activeTab === "soft-skills" ? (
            /* Specialized Soft Skills Layout */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {activeSkills.map((skill: any, idx: number) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    borderColor: "var(--vibrant-pink)",
                    boxShadow: "0 10px 30px rgba(var(--vibrant-pink), 0.2)"
                  }}
                  className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 group"
                >
                  <div className="w-4 h-4 bg-vibrant-pink rotate-45 mb-6 shadow-[0_0_15px_var(--vibrant-pink)]" />
                  <h4 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {skill.name}
                  </h4>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Technical Skills Grid */
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {activeSkills.map((skill: any, idx: number) => {
                const Icon = BrandIcons[skill.icon] || iconMap[skill.icon] || Globe;
                const color = brandColors[skill.icon] || "var(--vibrant-blue)";
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(255, 255, 255, 0.05)"
                    }}
                    className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-300"
                  >
                    <div className="relative mb-4">
                      <Icon 
                        className="w-10 h-10 transition-all duration-300 group-hover:filter-none grayscale group-hover:grayscale-0" 
                        style={{ color: color }}
                      />
                      {/* Icon Glow Effect */}
                      <div 
                        className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    </div>
                    <span className="text-sm font-semibold tracking-tight text-white/70 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}


