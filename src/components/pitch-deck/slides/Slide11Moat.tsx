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

        {/* Visual Moat Diagram - Redesigned */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-card/30 border border-border rounded-xl p-6"
        >
          <h3 className="text-center text-foreground font-semibold mb-6">Layered Defense Strategy</h3>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Concentric Rings Diagram */}
            <div className="relative w-72 h-72 flex-shrink-0">
              {/* Layer 4: Network Effects (outermost) - Purple */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/10 border-4 border-purple-500/40 flex items-center justify-center">
                {/* Layer 3: Economic - Orange/Accent */}
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-accent/25 to-accent/15 border-4 border-accent/50 flex items-center justify-center">
                  {/* Layer 2: IP Protection - Green */}
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-emerald-500/30 to-emerald-600/20 border-4 border-emerald-500/60 flex items-center justify-center">
                    {/* Layer 1: Technical (innermost) - Blue */}
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/40 to-blue-600/30 border-4 border-blue-500/70 flex items-center justify-center">
                      {/* Core: ∂₀ */}
                      <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/30">
                        <span className="text-xl font-bold text-accent-foreground">∂₀</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Positioned Labels with Icons - Clockwise from top */}
              {/* Top: Network Effects */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-purple-500/30 border border-purple-500/50 flex items-center justify-center mb-1">
                  <Rocket className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-xs font-medium text-purple-400 whitespace-nowrap">Network Effects</span>
              </div>
              
              {/* Right: Economic */}
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 flex items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-accent/30 border border-accent/50 flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-accent" />
                </div>
                <span className="text-xs font-medium text-accent whitespace-nowrap">Economic</span>
              </div>
              
              {/* Bottom: IP Protection */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <span className="text-xs font-medium text-emerald-400 whitespace-nowrap mb-1">IP Protection</span>
                <div className="w-8 h-8 rounded-full bg-emerald-500/30 border border-emerald-500/50 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
              
              {/* Left: Technical */}
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 flex items-center gap-1">
                <span className="text-xs font-medium text-blue-400 whitespace-nowrap">Technical</span>
                <div className="w-8 h-8 rounded-full bg-blue-500/30 border border-blue-500/50 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-blue-400" />
                </div>
              </div>
            </div>
            
            {/* Callout Descriptions */}
            <div className="flex flex-col gap-3 text-sm max-w-xs">
              <div className="flex items-start gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-blue-400">Technical:</span>
                  <span className="text-muted-foreground ml-1">18-24 month replication barrier</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-emerald-400">IP:</span>
                  <span className="text-muted-foreground ml-1">Patent + 3.5 year legal moat</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-3 h-3 rounded-full bg-accent mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-accent">Economic:</span>
                  <span className="text-muted-foreground ml-1">10-20× ROI creates lock-in</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-purple-400">Network:</span>
                  <span className="text-muted-foreground ml-1">Becomes foundational infrastructure</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-xs text-muted-foreground mt-4">
            Each layer builds upon the previous — competitors must breach all four to replicate
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
