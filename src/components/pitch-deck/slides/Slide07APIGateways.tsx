import { motion } from "framer-motion";
import { SlideLayout } from "../SlideLayout";
import { Server, TrendingDown, Zap, DollarSign } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const customers = ["Kong", "NGINX", "Envoy", "Traefik"];

const benefits = [
  { icon: TrendingDown, value: "80%", label: "Infrastructure cost reduction" },
  { icon: Zap, value: "10×", label: "Faster policy iteration" },
  { icon: DollarSign, value: "$4B", label: "API gateway market" },
];

export const Slide07APIGateways = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <p className="text-accent font-mono text-sm mb-2">APPLICATION 1</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            API Security & Policy Optimization
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
              <li>Multi-tenant SaaS platforms need 1000s of tenant-specific policies</li>
              <li>Current approach: Deploy separate gateway per 50-100 policies</li>
              <li className="text-destructive font-semibold">= Infrastructure explosion</li>
            </ul>
            <div className="bg-destructive/10 rounded-lg p-3 mt-4">
              <span className="font-mono text-destructive">∂cost/∂tenants = linear</span>
              <span className="text-muted-foreground text-sm block">(unscalable)</span>
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
            <ul className="space-y-2 text-muted-foreground">
              <li>1000 policies, single instance</li>
              <li>&lt;20% overhead</li>
              <li className="text-accent font-semibold">Add tenants without adding servers</li>
            </ul>
            <div className="bg-accent/10 rounded-lg p-3 mt-4">
              <span className="font-mono text-accent">∂cost/∂tenants ≈ 0</span>
              <span className="text-muted-foreground text-sm block">(scalable)</span>
            </div>
          </motion.div>
        </div>

        {/* Before/After Diagram */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-card/30 border border-border rounded-xl p-6 mb-6"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="text-center">
              <p className="text-destructive font-semibold mb-3">Before</p>
              <div className="flex flex-wrap justify-center gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-destructive/20 border border-destructive/40 rounded-lg p-3">
                    <Server className="w-5 h-5 text-destructive mx-auto" />
                    <p className="text-xs text-muted-foreground mt-1">GW {i}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">N policies = N gateway instances</p>
            </div>

            {/* After */}
            <div className="text-center">
              <p className="text-accent font-semibold mb-3">After</p>
              <div className="flex justify-center">
                <div className="bg-accent/20 border-2 border-accent rounded-xl p-6">
                  <p className="text-3xl mb-1">∂₀</p>
                  <Server className="w-8 h-8 text-accent mx-auto" />
                  <p className="text-sm text-foreground mt-2">1 Instance</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">N policies = 1 DZero-powered instance</p>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics & Licensing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-4"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card/50 border border-border rounded-lg p-4 text-center">
              <benefit.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-accent">{benefit.value}</p>
              <p className="text-xs text-muted-foreground">{benefit.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-muted-foreground mt-4"
        >
          License Model: <span className="text-accent font-semibold">$500K-1.5M/year</span> per vendor
        </motion.p>
      </div>
    </SlideLayout>
  );
};
