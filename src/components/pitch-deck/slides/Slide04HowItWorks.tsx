import { motion } from "framer-motion";
import { SlideLayout } from "../SlideLayout";
import { ArrowRight, Cpu, Zap, CheckCircle } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide04HowItWorks = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <p className="text-accent font-mono text-sm mb-2">HOW IT WORKS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            The DZero Engine Architecture
          </h2>
          <p className="text-muted-foreground mt-2">
            Patent-Pending: <span className="text-accent">Fused Semantic Execution</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Compilation Phase */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-card/50 border border-border rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Cpu className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">1. Compilation Phase</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">→</span>
                Analyze all rules, extract selectors (e.g., "user.id", "amount")
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">→</span>
                <strong className="text-foreground">Deduplicate:</strong> All rules checking "user.id" share ONE lookup
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">→</span>
                Generate fused executable with parallel rule state
              </li>
            </ul>
          </motion.div>

          {/* Execution Phase */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-card/50 border border-border rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Zap className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">2. Execution Phase</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">→</span>
                Single streaming parse of input data
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">→</span>
                Broadcast values to all relevant rules simultaneously
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">→</span>
                <strong className="text-foreground">Early exit</strong> when all rules resolved (often before full parse)
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-card/30 border border-border rounded-xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {/* Data Stream */}
            <div className="bg-secondary border border-border rounded-lg px-6 py-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">Input</p>
              <p className="text-foreground font-semibold">Data Stream</p>
            </div>

            <ArrowRight className="w-8 h-8 text-accent rotate-90 md:rotate-0" />

            {/* DZero Engine */}
            <div className="bg-accent/20 border-2 border-accent rounded-xl px-8 py-6 text-center">
              <p className="text-4xl mb-2">∂₀</p>
              <p className="text-foreground font-bold">DZero Engine</p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                <span className="text-xs bg-primary/50 px-2 py-1 rounded">Selector Dedup</span>
                <span className="text-xs bg-primary/50 px-2 py-1 rounded">Parallel State</span>
                <span className="text-xs bg-primary/50 px-2 py-1 rounded">Early Exit</span>
              </div>
            </div>

            <ArrowRight className="w-8 h-8 text-accent rotate-90 md:rotate-0" />

            {/* Output */}
            <div className="bg-secondary border border-border rounded-lg px-6 py-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">Output</p>
              <p className="text-foreground font-semibold">N Decisions</p>
              <p className="text-accent font-mono text-sm">in O(M) time</p>
            </div>
          </div>
        </motion.div>

        {/* Result */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-3 mt-8"
        >
          <CheckCircle className="w-6 h-6 text-accent" />
          <p className="text-xl text-foreground">
            <strong>Result:</strong> Evaluation cost <span className="text-accent">independent of rule count</span> after compilation
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
