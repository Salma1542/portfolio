import { PORTFOLIO_DATA } from "@/src/constants";
import { usePortfolio } from "@/src/context/PortfolioContext";
import { Github, Linkedin, Heart } from "lucide-react";
import { motion } from "motion/react";

const MostaqlIcon = (props: any) => (
  <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
    <path d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5zm0 10c19.3 0 35 15.7 35 35S69.3 85 50 85 15 69.3 15 50s15.7-35 35-35zm-5 15v20H25v10h20v20h10V60h20V50H55V30H45z"/>
  </svg>
);

const KhamsatIcon = (props: any) => (
  <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
    <path d="M50 5L5 30v40l45 25 45-25V30L50 5zm0 12l33 18.5v39L50 93 17 74.5v-39L50 17zm0 10L25 41v18l25 14 25-14V41L50 27zm0 10l15 8.5V54L50 62.5 35 54v-8.5L50 37z"/>
  </svg>
);

const NafezlyIcon = (props: any) => (
  <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
    <path d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5zm-5 20h10v25l20-15v12L50 65 25 47V35l20 15V25z"/>
  </svg>
);

export default function Footer() {
  const { language } = usePortfolio();
  const t = PORTFOLIO_DATA[language];

  return (
    <footer className="relative pt-24 pb-12 border-t border-white/5 bg-[#0a0a0c] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-vibrant-purple/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start mb-20 text-center md:text-left">
          
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
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/salma-abdelwahed154/" target="_blank" rel="noopener noreferrer" title="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-vibrant-blue hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 shadow-lg group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              {/* GitHub */}
              <a href="https://github.com/Salma1542" target="_blank" rel="noopener noreferrer" title="GitHub"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300 border border-white/10 shadow-lg group">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              {/* Mostaql */}
              <a href="https://mostaql.com/u/salma_1542" target="_blank" rel="noopener noreferrer" title="مستقل"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#2e86de] hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 shadow-lg p-2 group">
                <MostaqlIcon className="w-full h-full group-hover:scale-110 transition-transform" />
              </a>

              {/* Khamsat */}
              <a href="https://khamsat.com/user/salma_abdelwahed1" target="_blank" rel="noopener noreferrer" title="خمسات"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#00c594] hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 shadow-lg p-2 group">
                <KhamsatIcon className="w-full h-full group-hover:scale-110 transition-transform" />
              </a>

              {/* Nafezly */}
              <a href="https://nafezly.com/u/salma_abdelwahed" target="_blank" rel="noopener noreferrer" title="نافذلي"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-vibrant-purple hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 shadow-lg p-2 group">
                <NafezlyIcon className="w-full h-full group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

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