import { motion } from "framer-motion";
import { SlideLayout } from "../SlideLayout";
import { User, Briefcase, Shield, Award, Target, TrendingUp, Building, Rocket } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const experience = [
  { icon: Briefcase, text: "20 years systems programming (Rust, C, distributed systems)" },
  { icon: Building, text: "IRS.gov Lead Developer (federal-scale infrastructure)" },
  { icon: Shield, text: "Former USAF Staff Sergeant (execution discipline)" },
  { icon: Award, text: "VOSB Owner (federal contracting channel ready)" },
  { icon: Shield, text: "Public Trust Clearance (government sales enabled)" },
];

const trackRecord = [
  "Built and deployed systems processing billions of requests",
  "Federal security compliance (FedRAMP, FISMA)",
  "Patent author (provisional filed, continuation planned)",
];

const pathsToScale = [
  { path: "Profitability", detail: "High-margin licensing supports growth without Series B" },
  { path: "Strategic M&A", detail: "Customers become acquirers as they see value" },
  { path: "Category Leader", detail: "Foundational infrastructure with defining potential" },
];

export const Slide12Team = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <p className="text-accent font-mono text-sm mb-2">TEAM & THE ASK</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Founder & The Ask
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Founder */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-card/50 border border-border rounded-xl p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                <User className="w-10 h-10 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Mike Kuykendall</h3>
                <p className="text-muted-foreground">Founder & CEO</p>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              {experience.map((exp, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <exp.icon className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-muted-foreground">{exp.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-secondary/50 rounded-lg p-3">
              <p className="text-sm font-semibold text-foreground mb-2">Track Record:</p>
              <ul className="space-y-1">
                {trackRecord.map((item, index) => (
                  <li key={index} className="text-xs text-muted-foreground flex items-center gap-1">
                    <span className="text-accent">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* The Ask */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {/* Raising */}
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold text-foreground">Delta Zero Labs</h3>
              </div>
              <div className="text-center py-4">
                <p className="text-muted-foreground mb-1">Raising</p>
                <p className="text-4xl font-bold text-accent">$4.5M Seed</p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-secondary/50 rounded-lg p-2 text-center">
                  <p className="text-muted-foreground">Use of Funds</p>
                  <p className="text-foreground font-semibold text-xs">6-person team + infra + federal compliance</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-2 text-center">
                  <p className="text-muted-foreground">Timeline</p>
                  <p className="text-foreground font-semibold">24 months to Series A</p>
                </div>
              </div>
            </div>

            {/* Target */}
            <div className="bg-card/50 border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <p className="text-foreground font-semibold">Target</p>
              </div>
              <p className="text-2xl font-bold text-accent">$15-20M ARR</p>
              <p className="text-muted-foreground text-sm">10-15 licensees across 6+ domains</p>
            </div>

            {/* Path to Scale */}
            <div className="bg-card/50 border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Rocket className="w-4 h-4 text-accent" />
                <p className="text-foreground font-semibold">Path to Scale</p>
              </div>
              <div className="space-y-2">
                {pathsToScale.map((item, index) => (
                  <div key={index} className="text-sm">
                    <span className="text-accent font-semibold">{item.path}:</span>
                    <span className="text-muted-foreground"> {item.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Contact */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-accent/10 via-accent/5 to-primary/10 border border-accent/30 rounded-xl p-6 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-3">The Vision</h3>
          <p className="text-lg text-muted-foreground mb-4">
            <span className="text-accent font-mono text-2xl">∂₀</span> becomes the standard for any system evaluating multiple rules.
          </p>
          <p className="text-foreground">
            Like <span className="text-accent">SIMD</span> for parallelization, <span className="text-accent">∂₀</span> for rule evaluation.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <a href="mailto:michaelallenkuykendall@gmail.com" className="hover:text-accent transition-colors">📧 michaelallenkuykendall@gmail.com</a>
            <span>📱 816-835-3920</span>
            <a href="https://www.linkedin.com/in/makuykendall/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">🔗 LinkedIn</a>
            <a href="https://github.com/Michael-A-Kuykendall" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">💻 GitHub</a>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
