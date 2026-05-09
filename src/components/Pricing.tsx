import { motion } from "motion/react";
import { Check, Info, ArrowLeft, Globe, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PORTFOLIO_DATA } from "@/src/constants";
import { usePortfolio } from "@/src/context/PortfolioContext";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
    const navigate = useNavigate();
  const handleContactClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  const { language, setLanguage, theme, toggleTheme } = usePortfolio();
  const t = PORTFOLIO_DATA[language].pricing;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 transition-colors duration-300">
      {/* Header with Nav-like items */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              {language === "en" ? "Back to Portfolio" : "العودة للمعرض"}
            </Button>
          </Link>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setLanguage(language === "en" ? "ar" : "en")}>
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {t.badge}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto bg-secondary/30 border rounded-2xl p-6 flex gap-4 items-start text-left rtl:text-right"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Info className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.info}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <Card className={`h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${plan.popular ? 'border-vibrant-purple ring-1 ring-vibrant-purple' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 left-0 h-1 bg-vibrant-purple" />
                )}
                <CardHeader className="p-6 pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{plan.name}</span>
                    {plan.popular && (
                      <Badge className="bg-vibrant-purple text-white">POPULAR</Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground text-xs">{plan.unit}</span>
                  </div>
                  <CardDescription className="mt-3 min-h-[30px] text-sm">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs">
                        <Check className="h-3.5 w-3.5 text-vibrant-purple shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                 <Button 
  className={`w-full h-11 font-bold ${plan.popular ? 'bg-vibrant-gradient hover:opacity-90 border-none' : ''}`}
  variant={plan.popular ? "default" : "outline"}
  onClick={handleContactClick}
>
  {plan.button}
</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
