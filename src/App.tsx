/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import EducationAndCertificates from "./components/EducationAndCertificates";
import ExperienceAndServices from "./components/ExperienceAndServices";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import { PortfolioProvider, usePortfolio } from "./context/PortfolioContext";
import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "./constants";

function ComingSoon({ id, title }: { id: string; title: string }) {
  const { language } = usePortfolio();
  return (
    <section id={id} className="section-vh bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-primary">{title}</h2>
          <div className="relative inline-block">
            <h3 className="text-5xl md:text-7xl font-bold opacity-10 select-none">COMING SOON</h3>
            <h3 className="text-4xl md:text-6xl font-bold absolute inset-0 flex items-center justify-center">
              {language === "en" ? "Coming Soon" : "قريباً جداً"}
            </h3>
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            {language === "en" 
              ? "I'm currently working on something amazing. Stay tuned for updates!"
              : "أنا أعمل حالياً على شيء مذهل. ابقوا على تواصل للمستجدات!"}
          </p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                className="w-2 h-2 rounded-full bg-primary"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioHome() {
  const { language } = usePortfolio();
  const t = PORTFOLIO_DATA[language].nav;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 transition-colors duration-300">
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="about" className="section-vh">
          <About />
        </div>
        <div id="education-certificates">
          <EducationAndCertificates />
        </div>
        <div id="skills" className="section-vh">
          <Skills />
        </div>
        <div id="experience-services" className="min-h-screen">
          <ExperienceAndServices />
        </div>
        <div id="projects" className="section-vh">
          <Projects />
        </div>
        <ComingSoon id="testimonials" title={t.testimonials} />
        <div id="contact" className="section-vh">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>
    </PortfolioProvider>
  );
}



