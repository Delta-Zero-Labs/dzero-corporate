import { motion } from "framer-motion";
import { SlideLayout } from "../SlideLayout";
import { Shield, Layers, Award, Server } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const customers = ["Defense contractors", "Palo Alto", "Fortinet", "Federal agencies"];

const advantages = [
  { icon: Award, label: "VOSB Status", desc: "Federal contracting ready" },
  { icon: Shield, label: "Public Trust Clearance", desc: "Government sales enabled" },
  { icon: Server, label: "IRS.gov Experience", desc: "Proven at federal scale" },
];

export const Slide09Defense = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <p className="text-accent font-mono text-sm mb-2">APPLICATION 3</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Network Security & Deep Packet Inspection
          </h2>
        </motion.div>

        {/* Target Customers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-6"
        >
          <span className="text-muted-foreground">Target Customers:</span>
          {customers.map((customer) => (
            <span key={customer} className="bg-primary/30 text-foreground px-3 py-1 rounded-full text-sm font-medium">
              {customer}
            </span>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* The Problem */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-destructive/5 border border-destructive/30 rounded-xl p-5"
          >
            <h3 className="text-lg font-bold text-foreground mb-3">The Problem</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Deep packet inspection requires 100s of security rules</li>
              <li>Current: Sequential rule processing or dedicated hardware per rule set</li>
              <li className="text-destructive font-semibold">= Appliance sprawl</li>
            </ul>
            <div className="bg-destructive/10 rounded-lg p-3 mt-4">
              <span className="font-mono text-destructive">∂cost/∂rules = hardware cost</span>
            </div>
          </motion.div>

          {/* DZero Solution */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-accent/5 border border-accent/30 rounded-xl p-5"
          >
            <h3 className="text-lg font-bold text-foreground mb-3">DZero Solution</h3>
            <p className="text-accent font-semibold mb-2">Multi-layer Protocol Fusion</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>Single streaming parse across L3, L4, L7</li>
              <li>Parallel rule checking (firewall, IDS, DPI)</li>
              <li>Early exit on policy violation</li>
            </ul>
            <div className="bg-accent/10 rounded-lg p-3 mt-4">
              <span className="font-mono text-accent">∂cost/∂rules ≈ 0</span>
            </div>
          </motion.div>
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-card/30 border border-border rounded-xl p-6 mb-6"
        >
          <h3 className="text-center text-foreground font-semibold mb-4">Consolidation: 3-4 Hardware Boxes → 1 Software Layer</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="text-center">
              <p className="text-destructive font-semibold mb-3">Before</p>
              <div className="flex flex-col gap-2">
                {["Firewall", "IDS", "DPI", "L7 Gateway"].map((box) => (
                  <div key={box} className="bg-destructive/20 border border-destructive/40 rounded-lg p-3 flex items-center justify-center gap-2">
                    <Layers className="w-4 h-4 text-destructive" />
                    <span className="text-sm text-foreground">{box}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="text-center">
              <p className="text-accent font-semibold mb-3">After</p>
              <div className="bg-accent/20 border-2 border-accent rounded-xl p-6 flex flex-col items-center">
                <p className="text-4xl mb-2">∂₀</p>
                <p className="text-foreground font-semibold">DZero Engine</p>
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  <span className="text-xs bg-primary/50 px-2 py-1 rounded">L3</span>
                  <span className="text-xs bg-primary/50 px-2 py-1 rounded">L4</span>
                  <span className="text-xs bg-primary/50 px-2 py-1 rounded">L7</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dual-Use Advantages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-4"
        >
          <h3 className="text-lg font-bold text-foreground mb-3 text-center">Dual-Use Advantage</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {advantages.map((adv, index) => (
              <div key={index} className="bg-card/50 border border-border rounded-lg p-4 text-center">
                <adv.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                <p className="text-foreground font-semibold">{adv.label}</p>
                <p className="text-xs text-muted-foreground">{adv.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="grid md:grid-cols-3 gap-4"
        >
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-3 text-center">
            <p className="text-muted-foreground text-sm">License Model</p>
            <p className="text-accent font-semibold">$200K-500K/year</p>
          </div>
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-3 text-center">
            <p className="text-muted-foreground text-sm">Throughput Gain</p>
            <p className="text-accent font-semibold">5-10× per appliance</p>
          </div>
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-3 text-center">
            <p className="text-muted-foreground text-sm">Federal Opportunities</p>
            <p className="text-accent font-semibold">+ Contract Revenue</p>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
