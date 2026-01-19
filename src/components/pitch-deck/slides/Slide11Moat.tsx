import { motion } from "framer-motion";
import { SlideLayout } from "../SlideLayout";
import { Shield, Clock, DollarSign, Rocket } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const moatLayers = [
  {
    icon: Shield,
    title: "Technical Barrier",
    time: "18-24 months",
    points: [
      "Requires fundamental architecture rewrite (not optimization)",
      "Deep systems knowledge (streaming semantics, parallel state)",
      "Production integration complexity (deterministic guarantees)",
    ],
  },
  {
    icon: Clock,
    title: "IP Protection",
    time: "3.5 year moat",
    points: [
      "Patent + 18-month filing lead",
      "Core mechanism claims (selector deduplication, streaming evaluation)",
      "Novel vs all identified prior art",
    ],
  },
  {
    icon: DollarSign,
    title: "Economic Moat",
    time: "Negative switching cost",
    points: [
      "10-20× customer ROI",
      "Licensing fee << infrastructure savings",
      "Strategic lock-in for early licensees",
    ],
  },
  {
    icon: Rocket,
    title: "First-Mover Advantage",
    time: "Foundational",
    points: [
      "First to achieve ∂cost/∂complexity ≈ 0",
      "Becomes foundational infrastructure",
      "Like parallelization, virtualization, containers",
    ],
  },
];

export const Slide11Moat = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <p className="text-accent font-mono text-sm mb-2">COMPETITIVE MOAT</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Why Delta Zero Is Defensible
          </h2>
        </motion.div>

        {/* Moat Layers */}
        <div className="grid md:grid-cols-2 gap-6">
          {moatLayers.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-card/50 border border-border rounded-xl p-5 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <layer.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{layer.title}</h3>
                  <p className="text-sm text-accent font-mono">{layer.time}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {layer.points.map((point, pIndex) => (
                  <li key={pIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-accent mt-1">→</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Visual Moat Diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-card/30 border border-border rounded-xl p-6"
        >
          <h3 className="text-center text-foreground font-semibold mb-4">Layered Defense</h3>
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Concentric circles representing moat layers */}
              <div className="w-64 h-64 rounded-full border-4 border-accent/20 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border-4 border-accent/40 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-4 border-accent/60 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-accent/80 flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent-foreground">∂₀</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Labels */}
              <div className="absolute top-0 right-0 -translate-y-2 translate-x-4 text-xs text-muted-foreground">
                Network Effects
              </div>
              <div className="absolute top-1/4 -right-4 text-xs text-muted-foreground">
                Economic
              </div>
              <div className="absolute top-1/2 -right-2 text-xs text-muted-foreground">
                IP
              </div>
              <div className="absolute bottom-1/4 right-4 text-xs text-muted-foreground">
                Technical
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
