import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/src/constants";
import { usePortfolio } from "@/src/context/PortfolioContext";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { language } = usePortfolio();
  const t = PORTFOLIO_DATA[language];
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""
      );
      setIsSent(true);
      formRef.current.reset();
      setTimeout(() => setIsSent(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(language === "en" ? "Failed to send message. Please try again later." : "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى لاحقاً.");
    } finally {
      setIsSending(false);
    }
  };

  const whatsappMessage = encodeURIComponent("Hello, I visited your portfolio and I'd like to get in touch!");
  const whatsappUrl = `https://wa.me/201152957313?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Atmospheric Glows - Lightened */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-vibrant-blue/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-vibrant-purple/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: language === "en" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-sm font-bold tracking-[0.4em] uppercase text-primary mb-6 block"
            >
              {t.nav.contact}
            </motion.span>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 leading-tight">
              {language === "en" ? "Let's Talk About Your Next Project" : "دعنا نتحدث عن مشروعك القادم"}
            </h3>
            <p className="text-lg text-muted-foreground/80 mb-12 leading-relaxed font-light tracking-wide max-w-lg">
              {language === "en" 
                ? "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
                : "أنا دائماً منفتحة لمناقشة المشاريع الجديدة، الأفكار الإبداعية أو الفرص لأكون جزءاً من رؤيتكم."}
            </p>

            <div className="space-y-8">
              <a href={`mailto:${t.contact.email}`} className="block">
                <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center text-vibrant-purple border border-white/10 group-hover:border-vibrant-purple/40 transition-all duration-500 shadow-2xl">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/40 mb-0.5">{language === "en" ? "Email Me" : "راسلني"}</p>
                    <p className="text-xl font-bold tracking-tight group-hover:text-vibrant-purple transition-colors">{t.contact.email}</p>
                  </div>
                </motion.div>
              </a>
              
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
                <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center text-vibrant-pink border border-white/10 group-hover:border-vibrant-pink/40 transition-all duration-500 shadow-2xl">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/40 mb-0.5">{language === "en" ? "Call/WhatsApp Me" : "اتصال / واتساب"}</p>
                    <p className="text-xl font-bold tracking-tight group-hover:text-vibrant-pink transition-colors">{t.contact.phone}</p>
                  </div>
                </motion.div>
              </a>

              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center text-vibrant-blue border border-white/10 group-hover:border-vibrant-blue/40 transition-all duration-500 shadow-2xl">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/40 mb-0.5">{language === "en" ? "Location" : "الموقع"}</p>
                  <p className="text-xl font-bold tracking-tight group-hover:text-vibrant-blue transition-colors">{t.contact.location}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: language === "en" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/5 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Form Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-vibrant-purple/10 rounded-full blur-[80px] -z-10" />
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/60 ml-2">{language === "en" ? "Full Name" : "الاسم الكامل"}</label>
                  <Input name="from_name" required placeholder={language === "en" ? "John Doe" : "فلان الفلاني"} className="bg-white/5 border-white/10 h-11 rounded-xl px-4 focus:bg-white/10 transition-all text-base" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/60 ml-2">{language === "en" ? "Email Address" : "البريد الإلكتروني"}</label>
                  <Input name="from_email" required placeholder="john@example.com" type="email" className="bg-white/5 border-white/10 h-11 rounded-xl px-4 focus:bg-white/10 transition-all text-base" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/60 ml-2">{language === "en" ? "Subject" : "الموضوع"}</label>
                <Input name="subject" required placeholder={language === "en" ? "Project Inquiry" : "استفسار عن مشروع"} className="bg-white/5 border-white/10 h-11 rounded-xl px-4 focus:bg-white/10 transition-all text-base" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/60 ml-2">{language === "en" ? "Message" : "الرسالة"}</label>
                <Textarea name="message" required placeholder={language === "en" ? "Tell me about your project..." : "أخبرني عن مشروعك..."} className="bg-white/5 border-white/10 min-h-[140px] rounded-xl p-4 focus:bg-white/10 transition-all text-base resize-none" />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  disabled={isSending}
                  className={`w-full h-12 text-lg font-bold group bg-vibrant-gradient border-none rounded-xl shadow-xl shadow-vibrant-purple/20 transition-opacity ${isSending ? 'opacity-70' : ''}`}
                >
                  {isSending ? (language === "en" ? "Sending..." : "جاري الإرسال...") : (language === "en" ? "Send Message" : "إرسال الرسالة")}
                  <Send className={`ml-2 h-5 w-5 ${!isSending && "group-hover:translate-x-1 rtl:group-hover:-translate-x-1 group-hover:-translate-y-1"} transition-transform`} />
                </Button>
              </motion.div>

              {isSent && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-vibrant-green font-bold justify-center"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  <span>{language === "en" ? "Message sent successfully!" : "تم إرسال الرسالة بنجاح!"}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

