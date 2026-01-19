import { motion } from "framer-motion";
import { SlideLayout } from "../SlideLayout";
import { Shield, FileText, CheckCircle, XCircle } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const coreClaims = [
  "Selector deduplication across independent decision rules",
  "Streaming evaluation without intermediate representation",
  "Parallel rule state with bounded memory (O(N), not O(N×M))",
  "Early termination on partial data",
];

const priorArt = [
  { name: "Multi-Query Optimization", issue: "Planner-level; we're execution-layer" },
  { name: "Rete Algorithm", issue: "Stateful network for reasoning; we're streaming data" },
  { name: "Hyperscan", issue: "Pattern-only; we support full semantic predicates" },
];

export const Slide05Patent = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <p className="text-accent font-mono text-sm mb-2">INTELLECTUAL PROPERTY</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Defensible IP Position
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Patent Status */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-card/50 border border-border rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-accent" />
              <div>
                <h3 className="text-lg font-bold text-foreground">Patent Status</h3>
                <p className="text-sm text-muted-foreground">Fused Semantic Execution Engine</p>
              </div>
            </div>
            
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-4">
              <p className="text-foreground font-semibold">
                "Fused Semantic Execution Engine for Deterministic Streaming Rule Evaluation"
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-secondary/50 rounded-lg p-3">
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="text-foreground font-semibold">Provisional Filed December 2024</p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-3">
                <p className="text-sm text-muted-foreground">Non-Provisional Due</p>
                <p className="text-foreground font-semibold">December 2025</p>
              </div>
            </div>
          </motion.div>

          {/* Patent Figure */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-primary/20 border border-primary/40 rounded-xl p-6 flex flex-col items-center justify-center"
          >
            <FileText className="w-12 h-12 text-accent mb-3" />
            <p className="text-foreground font-semibold text-center">FIG. 1</p>
            <p className="text-sm text-muted-foreground text-center">System Architecture</p>
            <p className="text-4xl text-accent mt-3">∂₀</p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Core Claims */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-card/50 border border-border rounded-xl p-6"
          >
            <h3 className="text-lg font-bold text-foreground mb-4">Core Claims</h3>
            <ul className="space-y-3">
              {coreClaims.map((claim, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{claim}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Differentiation */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-card/50 border border-border rounded-xl p-6"
          >
            <h3 className="text-lg font-bold text-foreground mb-4">Differentiation from Prior Art</h3>
            <ul className="space-y-3">
              {priorArt.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground font-semibold">{item.name}:</span>
                    <span className="text-muted-foreground ml-1">{item.issue}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Market Position */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-accent/10 border border-accent/30 rounded-xl p-4 mt-6 text-center"
        >
          <p className="text-lg text-foreground">
            <strong>Market Position:</strong> First to achieve <span className="text-accent font-mono">∂cost/∂rules ≈ 0</span> for general-purpose rule evaluation
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
