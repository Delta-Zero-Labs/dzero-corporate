import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SlideLayout } from "../SlideLayout";
import { DollarSign, Filter, Zap, TrendingDown } from "lucide-react";
import { AnimatedCounter } from "../demos/AnimatedCounter";
import { ProgressBar } from "../demos/ProgressBar";
import { ComparisonCard } from "../demos/ComparisonCard";
import { MetricCard } from "../demos/MetricCard";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const gatingStats = {
  recordsTotal: 100000,
  recordsDropped: 18300,
  recordsPassed: 81700,
  tokensSaved: 96148,
  costWithoutPounce: 210.00,
  costWithPounce: 171.57,
  savingsPerBatch: 38.43,
  savingsPercent: 18.3,
  dailyCostWithout: 584000,
  dailyCostWith: 445000,
  annualSavings: 50774400,
};

export const Slide14DemoAIGating = ({ slideNumber, totalSlides }: SlideProps) => {
  const [showCounters, setShowCounters] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCounters(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-4"
        >
          <p className="text-accent font-mono text-sm mb-2">AI COST OPTIMIZATION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Gate Before Tokenization: <span className="text-accent">$50M Annual Savings</span>
          </h2>
        </motion.div>

        {/* Live Processing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card/50 border border-border rounded-xl p-4 mb-4"
        >
          <p className="text-muted-foreground text-sm mb-3 font-mono">Processing enterprise log stream...</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Records Scanned</p>
              {showCounters && (
                <AnimatedCounter
                  end={gatingStats.recordsTotal}
                  duration={2.5}
                  className="text-xl text-foreground"
                />
              )}
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Records Dropped (PII)</p>
              {showCounters && (
                <AnimatedCounter
                  end={gatingStats.recordsDropped}
                  duration={2.5}
                  className="text-xl text-destructive"
                />
              )}
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Records Passed</p>
              {showCounters && (
                <AnimatedCounter
                  end={gatingStats.recordsPassed}
                  duration={2.5}
                  className="text-xl text-chart-3"
                />
              )}
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Tokens Saved</p>
              {showCounters && (
                <AnimatedCounter
                  end={gatingStats.tokensSaved}
                  duration={2.5}
                  className="text-xl text-accent"
                />
              )}
            </div>
          </div>

          <ProgressBar progress={81.7} duration={2.5} delay={0.3} variant="accent" />
        </motion.div>

        {/* Two-Column Comparison */}
        <div className="grid lg:grid-cols-2 gap-4 mb-4">
          <ComparisonCard title="Without Pounce" variant="destructive" delay={1}>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">All records sent to LLM</p>
              <p className="text-muted-foreground">100,000 records × 70 tokens avg</p>
              <p className="text-muted-foreground">= 7,000,000 tokens/batch</p>
              <div className="pt-2 border-t border-border/50">
                <p className="text-destructive text-2xl font-bold font-mono">$210.00/batch</p>
              </div>
              <p className="text-destructive text-xs flex items-center gap-1">
                ⚠️ PII exposed to LLM
              </p>
            </div>
          </ComparisonCard>

          <ComparisonCard title="With Pounce" variant="accent" delay={1.2}>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">Pre-filter sensitive records</p>
              <p className="text-muted-foreground">81,700 records × 70 tokens avg</p>
              <p className="text-muted-foreground">= 5,719,000 tokens/batch</p>
              <div className="pt-2 border-t border-border/50">
                <p className="text-chart-3 text-2xl font-bold font-mono">$171.57/batch</p>
              </div>
              <p className="text-accent text-xs font-semibold">
                Savings: $38.43/batch (18.3%)
              </p>
            </div>
          </ComparisonCard>
        </div>

        {/* Enterprise Projection */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.4 }}
          className="bg-accent/5 border-2 border-accent/40 rounded-xl p-5"
        >
          <h3 className="text-accent font-mono text-sm mb-3">ENTERPRISE SCALE: 100M records/day</h3>
          
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-muted-foreground text-xs mb-1">Without Pounce</p>
              <p className="text-foreground font-mono">$584,000/day</p>
              <p className="text-muted-foreground text-xs">→ $213M/year</p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs mb-1">With Pounce</p>
              <p className="text-chart-3 font-mono">$445,000/day</p>
              <p className="text-muted-foreground text-xs">→ $162M/year</p>
            </div>
            <div className="bg-accent/10 rounded-lg p-3">
              <p className="text-accent text-xs mb-1 font-semibold">Annual Savings</p>
              <p className="text-accent text-3xl font-bold font-mono">$50.7M</p>
              <p className="text-accent text-xs">💰</p>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
