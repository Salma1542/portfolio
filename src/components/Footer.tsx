import { PORTFOLIO_DATA } from "@/src/constants";
import { usePortfolio } from "@/src/context/PortfolioContext";
import { Github, Linkedin, Heart, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

// Custom SVG Icons for Arabic Freelance Platforms
const MostaqlIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
  </svg>
);

const KhamsatIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
  </svg>
);

const UreedIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

export default function Footer() {
  const { language } = usePortfolio();
  const t = PORTFOLIO_DATA[language];

  return (
    <footer className="relative pt-24 pb-12 border-t border-white/5 bg-[#0a0a0c] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-vibrant-purple/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start mb-20 text-center md:text-left">
          
          {/* Left Column: Don't be shy */}
          <div className="space-y-6">
            <div className="inline-block relative">
              <h3 className="text-2xl font-bold tracking-wider text-vibrant-pink uppercase">
                {language === "en" ? "DON'T BE SHY!" : "لا تترد في التواصل!"}
              </h3>
              <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-vibrant-pink to-vibrant-purple rounded-full shadow-[0_0_10px_rgba(var(--vibrant-pink),0.5)]" />
            </div>
            <p className="text-muted-foreground/80 text-lg font-light leading-relaxed max-w-sm mx-auto md:mx-0">
              {language === "en" 
                ? "Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions."
                : "لا تتردد في التواصل معي. أنا متاح دائمًا لمناقشة المشاريع الجديدة أو الأفكار الإبداعية أو الفرص لأكون جزءًا من رؤيتك."}
            </p>
          </div>

          {/* Middle Column: Square Brand & Socials */}
          <div className="flex flex-col items-center justify-center space-y-8">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              className="w-24 h-24 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-vibrant-pink/20 to-vibrant-purple/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-vibrant-pink via-white to-vibrant-blue">
                {language === "en" ? "S.A" : "س.ع"}
              </span>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center gap-4 max-w-xs">
              {/* Main Socials */}
              <a href={t.contact.socials.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-vibrant-blue hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 shadow-lg group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href={t.contact.socials.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300 border border-white/10 shadow-lg group">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              
              {/* Freelance Platforms */}
              <a href="#" target="_blank" rel="noopener noreferrer" title="Mostaql" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-vibrant-blue hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 shadow-lg p-2 group">
                <MostaqlIcon className="w-full h-full group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" title="Khamsat" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#00c594] hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 shadow-lg p-2 group">
                <KhamsatIcon className="w-full h-full group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" title="Kafiil" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-vibrant-pink hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 shadow-lg group">
                <span className="font-black text-xs group-hover:scale-110 transition-transform">K</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" title="Ureed" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-vibrant-purple hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 shadow-lg p-2 group">
                <UreedIcon className="w-full h-full group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Who am I? */}
          <div className="space-y-6 md:text-right">
            <div className="inline-block relative">
              <h3 className="text-2xl font-bold tracking-wider text-vibrant-pink uppercase">
                {language === "en" ? "WHO AM I?" : "من أنا؟"}
              </h3>
              <div className="absolute -bottom-2 right-0 w-1/3 h-1 bg-gradient-to-r from-vibrant-purple to-vibrant-pink rounded-full shadow-[0_0_10px_rgba(var(--vibrant-purple),0.5)]" />
            </div>
            <p className="text-muted-foreground/80 text-lg font-light leading-relaxed max-w-sm mx-auto md:mr-0 md:ml-auto">
              {language === "en" 
                ? "I'm a Front-End Developer & React & Node.js Enthusiast, Passionate and dedicated to my work. I have acquired the skills and knowledge necessary to design and develop user-friendly, scalable web applications that make your project a success."
                : "أنا مطورة واجهات أمامية، شغوفة وملتزمة بعملي. لقد اكتسبت المهارات والمعرفة اللازمة لتصميم وتطوير تطبيقات ويب سهلة الاستخدام وقابلة للتوسع تجعل مشروعك ناجحًا."}
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground/60 text-sm font-light">
            © {new Date().getFullYear()} {t.name}. {language === "en" ? "All rights reserved." : "جميع الحقوق محفوظة."}
          </p>
          
          <div className="flex items-center gap-2 text-muted-foreground/60 text-sm font-light">
            {language === "en" ? "Designed with" : "تم التصميم بـ"} <Heart className="w-4 h-4 text-vibrant-pink fill-vibrant-pink animate-pulse" /> {language === "en" ? "by" : "بواسطة"} <span className="text-white font-medium">{t.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

