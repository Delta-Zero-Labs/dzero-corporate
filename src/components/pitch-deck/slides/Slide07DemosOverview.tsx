import { motion } from "framer-motion";
import { SlideLayout } from "../SlideLayout";
import { Database, Network, Zap, Eye, Play, ArrowRight } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const applications = [
  {
    icon: Database,
    title: "Reactive Columnar Database",
    description: "Live query results as functions of data, not snapshots. Incremental view maintenance with O(delta) updates.",
    status: "Active development",
    detail: "Core operators implemented. Architecture manifest enforces performance invariants.",
  },
  {
    icon: Network,
    title: "Ethereum Trading Platform",
    description: "Direct P2P connectivity to Ethereum peers. No full nodes, no RPC providers. Commodity hardware.",
    status: "Active development",
    detail: "70+ peers tested across mainnet, Base, BSC. ETH/68 transaction broadcast proven.",
  },
  {
    icon: Zap,
    title: "API Security & Policy Engine",
    description: "Flat-scaling policy evaluation for API gateways. Add rules without adding infrastructure.",
    status: "Demo available",
    detail: "Flat scaling from 10 to 100K rules with constant runtime.",
  },
  {
    icon: Eye,
    title: "LLM Cost Optimization",
    description: "Pre-tokenization gating that drops 70-90% of records before expensive AI processing.",
    status: "Demo available",
    detail: "90% token reduction proven in AI Gate demo.",
  },
  {
    icon: Play,
    title: "Semantic Data Scanning",
    description: "Single-pass extraction across multiple rule sets. Faster than dedicated parsers.",
    status: "Demo available",
    detail: "2.9x faster extraction vs. baseline.",
  },
];

export const Slide07DemosOverview = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <p className="text-accent font-mono text-sm mb-2">PRODUCT ROADMAP</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Validated Applications
          </h2>
          <p className="text-muted-foreground mt-2">
            Multiple products built on the same saturation fabric core
          </p>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="bg-card/50 border border-border rounded-lg p-4 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <app.icon className="w-5 h-5 text-accent" />
                <h3 className="text-sm font-bold text-foreground">{app.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-3">{app.description}</p>
              <div className="flex items-center gap-1 mb-1">
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                  app.status === "Demo available" 
                    ? "bg-accent/20 text-accent" 
                    : "bg-chart-2/20 text-chart-2"
                }`}>
                  {app.status}
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground/80">{app.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Demos CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-accent/5 border border-accent/30 rounded-xl p-4 text-center"
        >
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="text-sm text-foreground font-semibold">3 interactive demos available now</span>
            <ArrowRight className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Use arrow keys or click "View Demos" to navigate</span>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
