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

        {/* Cumulative Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-card/30 border border-border rounded-xl p-6"
        >
          <h3 className="text-center text-foreground font-semibold mb-6">Cumulative Replication Barrier</h3>
          
          {/* Horizontal Timeline */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 flex-wrap lg:flex-nowrap">
              {/* Technical */}
              <div className="flex items-center gap-2">
                <div className="bg-blue-500/20 border-2 border-blue-500 rounded-lg px-4 py-3 text-center min-w-[140px]">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Shield className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-semibold text-blue-400">Technical</span>
                  </div>
                  <span className="text-lg font-bold text-foreground">18-24 mo</span>
                </div>
                <span className="text-2xl text-muted-foreground font-light hidden lg:block">→</span>
              </div>
              
              {/* Legal/IP */}
              <div className="flex items-center gap-2">
                <div className="bg-emerald-500/20 border-2 border-emerald-500 rounded-lg px-4 py-3 text-center min-w-[140px]">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-semibold text-emerald-400">+ Legal</span>
                  </div>
                  <span className="text-lg font-bold text-foreground">3.5 yr</span>
                </div>
                <span className="text-2xl text-muted-foreground font-light hidden lg:block">→</span>
              </div>
              
              {/* Economic */}
              <div className="flex items-center gap-2">
                <div className="bg-accent/20 border-2 border-accent rounded-lg px-4 py-3 text-center min-w-[140px]">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <DollarSign className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">+ Economic</span>
                  </div>
                  <span className="text-lg font-bold text-foreground">Lock-in</span>
                </div>
                <span className="text-2xl text-muted-foreground font-light hidden lg:block">→</span>
              </div>
              
              {/* Network */}
              <div className="flex items-center gap-2">
                <div className="bg-purple-500/20 border-2 border-purple-500 rounded-lg px-4 py-3 text-center min-w-[140px]">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Rocket className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-semibold text-purple-400">+ Network</span>
                  </div>
                  <span className="text-lg font-bold text-foreground">Infrastructure</span>
                </div>
              </div>
            </div>
            
            {/* Total Barrier */}
            <div className="mt-6 bg-accent/10 border border-accent/50 rounded-xl px-6 py-3 text-center">
              <span className="text-sm text-muted-foreground">Total replication barrier: </span>
              <span className="text-xl font-bold text-accent">5+ years</span>
              <span className="text-sm text-muted-foreground"> + </span>
              <span className="text-lg font-semibold text-foreground">market position</span>
            </div>
          </div>
          
          <p className="text-center text-xs text-muted-foreground mt-4">
            Each layer builds upon the previous — competitors must overcome all four to replicate
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
