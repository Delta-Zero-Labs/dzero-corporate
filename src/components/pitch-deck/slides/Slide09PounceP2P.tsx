import { motion } from "framer-motion";
import { SlideLayout } from "../SlideLayout";
import { Network, Database, Cpu, Zap, Shield, Globe, TrendingUp, CheckCircle } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const layers = [
  {
    icon: Network,
    title: "P2P Data Plane",
    subtitle: "Ethereum RPC Killer",
    features: [
      "Direct rLPx/ECIES connectivity",
      "discv4 discovery + ENR",
      "ETH/68 transaction broadcast",
      "70+ peers across mainnet, Base, BSC",
    ],
  },
  {
    icon: Database,
    title: "Lakehouse",
    subtitle: "Curation Engine",
    features: [
      "Stream processing of block headers + receipts",
      "Fused Semantic Execution (FSE) for O(1) rule selection",
      "20+ curated DeFi strategies",
      "Parquet-based storage with streaming queries",
    ],
  },
  {
    icon: Cpu,
    title: "Trading Node",
    subtitle: "Execution Platform",
    features: [
      "Saturation Fabric for O(1) fact evaluation",
      "A/B test framework for strategy validation",
      "Automatic profit tracking and PnL analysis",
      "Multi-chain support (mainnet, Base, BSC, Arbitrum, Optimism)",
    ],
  },
];

const metrics = [
  { label: "Peer Success Rate", value: "10/10", target: ">95%", status: "proven" },
  { label: "Message Latency", value: "1ms", target: "<2ms", status: "proven" },
  { label: "Data Throughput", value: "70+ blocks/min", target: ">50 blocks/min", status: "proven" },
  { label: "Availability", value: "24/7", target: ">99%", status: "proven" },
];

const achievements = [
  { icon: Shield, text: "Zero RPC dependency for data ingest and transaction broadcasting" },
  { icon: Zap, text: "FSE O(1) with 20+ rules evaluated in single pass" },
  { icon: TrendingUp, text: "$53+ ETH real capital at risk (Hetzner deployment)" },
  { icon: Globe, text: "Built from scratch, no external dependencies" },
];

export const Slide09PounceP2P = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <p className="text-accent font-mono text-sm mb-2">VALIDATED APPLICATION</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Pounce-P2P
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Ethereum RPC Killer & Trading Infrastructure. No full nodes. No RPC providers.{" "}
            <span className="text-accent">Pure market signals on commodity hardware.</span>
          </p>
        </motion.div>

        {/* Three Layers */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-4 mb-6"
        >
          {layers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-card/30 border border-border rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <layer.icon className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm font-bold text-foreground">{layer.title}</p>
                  <p className="text-xs text-muted-foreground">{layer.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-1">
                {layer.features.map((feature, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-1">
                    <CheckCircle className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-card/30 border border-border rounded-xl p-5 mb-6"
        >
          <h3 className="text-lg font-bold text-foreground mb-3">Performance & Reliability</h3>
          <div className="grid grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-accent font-mono">{metric.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                <p className="text-[10px] text-muted-foreground/70 mt-0.5">Target: {metric.target}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 gap-3"
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-2 bg-accent/5 border border-accent/20 rounded-lg p-3">
              <achievement.icon className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <p className="text-sm text-foreground">{achievement.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Mission Impact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-4 text-center"
        >
          <p className="text-sm text-muted-foreground">
            <span className="text-accent font-semibold">Mission Impact:</span>{" "}
            Before: Full nodes (100+ GB) or expensive RPC providers.{" "}
            <span className="text-accent">After:</span> Direct P2P access on commodity hardware with enterprise-grade reliability.
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
