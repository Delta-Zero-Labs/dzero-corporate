import { motion } from "framer-motion";
import { SlideLayout } from "../SlideLayout";
import { Play, Eye, Zap } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide07DemosOverview = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <p className="text-accent font-mono text-sm mb-2">LIVE DEMOS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            See Pounce in Action
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Demo 1: Flat Scaling */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-card/50 border border-border rounded-lg p-6 text-center"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Flat Scaling Demo</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Rule count ramp visualization
            </p>
            <div className="text-xs text-accent font-mono">
              10 → 100k rules, flat runtime
            </div>
          </motion.div>

          {/* Demo 2: AI Gating */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-card/50 border border-border rounded-lg p-6 text-center"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Gating Demo</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Token cost reduction showcase
            </p>
            <div className="text-xs text-accent font-mono">
              23.8%+ savings proven
            </div>
          </motion.div>

          {/* Demo 3: Semantic Scan */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-card/50 border border-border rounded-lg p-6 text-center"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Semantic Scan Demo</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Speed comparison demonstration
            </p>
            <div className="text-xs text-accent font-mono">
              2.9× faster extraction
            </div>
          </motion.div>
        </div>

        {/* Next Steps */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground">
            Next Steps: NDA available for full code walkthrough
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
