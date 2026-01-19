import { motion } from "framer-motion";
import { SlideLayout } from "../SlideLayout";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Calendar, Target, TrendingUp, Users, Shield, Scale, Briefcase } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const fundAllocation = [
  { name: "Engineering", value: 1800, color: "hsl(var(--accent))" },
  { name: "Sales & Licensing", value: 1000, color: "hsl(var(--chart-2))" },
  { name: "Infrastructure", value: 600, color: "hsl(var(--chart-3))" },
  { name: "Legal/IP", value: 500, color: "hsl(var(--chart-4))" },
  { name: "Operations", value: 600, color: "hsl(var(--chart-5))" },
];

const milestones = [
  { month: "Month 6", target: "First 2-3 licensing deals ($1-2M ARR)" },
  { month: "Month 12", target: "$5M ARR, patent filed, federal cert in progress" },
  { month: "Month 18", target: "$10M ARR, 8-12 licensees across 5+ domains" },
  { month: "Month 24", target: "Series A ready ($15-20M ARR, multi-domain proof)" },
];

const executionTracks = [
  { 
    name: "High-ROI Core", 
    timeline: "Months 0-12",
    items: ["API Gateways", "Observability/Logs", "DLP/Security"],
    icon: Target
  },
  { 
    name: "Federal Track", 
    timeline: "Months 0-24",
    items: ["Compliance certs", "Cleared team", "GSA schedule"],
    icon: Shield
  },
  { 
    name: "Format Expansion", 
    timeline: "Months 6-18",
    items: ["Protobuf → telemetry, gRPC, blockchain"],
    icon: Scale
  },
  { 
    name: "Medium-ROI Domains", 
    timeline: "Months 12-24",
    items: ["ETL", "Event Streaming", "AI Preprocessing", "Code Scanning"],
    icon: Briefcase
  },
];

export const Slide10GTM = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-4"
        >
          <p className="text-accent font-mono text-sm mb-2">GO-TO-MARKET</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Capital Deployment Plan <span className="text-accent">(24 Months)</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4 mb-4">
          {/* Pie Chart */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-card/50 border border-border rounded-xl p-4"
          >
            <h3 className="text-lg font-bold text-foreground mb-2 text-center">$4.5M Seed Allocation</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={fundAllocation}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, value }) => `${name}: $${(value/1000).toFixed(1)}M`}
                    labelLine={{ stroke: 'hsl(var(--muted-foreground))' }}
                  >
                    {fundAllocation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                    formatter={(value: number) => [`$${(value/1000).toFixed(1)}M`, '']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Allocation Details */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-card/50 border border-border rounded-xl p-4"
          >
            <h3 className="text-base font-bold text-foreground mb-3">Allocation Breakdown</h3>
            <div className="space-y-2 text-sm">
              <div className="border-l-4 border-accent pl-3">
                <p className="text-foreground font-semibold">$1.8M Engineering (You + 4 engineers)</p>
                <p className="text-xs text-muted-foreground">Core engine + format adapters, production integrations</p>
              </div>
              <div className="border-l-4 border-chart-2 pl-3">
                <p className="text-foreground font-semibold">$1.0M Sales & Licensing</p>
                <p className="text-xs text-muted-foreground">1 licensing lead + 2 SEs + commission pool</p>
              </div>
              <div className="border-l-4 border-chart-3 pl-3">
                <p className="text-foreground font-semibold">$600K Infrastructure & Security</p>
                <p className="text-xs text-muted-foreground">FedRAMP prep, SOC2, multi-domain demo infra</p>
              </div>
              <div className="border-l-4 border-chart-4 pl-3">
                <p className="text-foreground font-semibold">$500K Legal & IP</p>
                <p className="text-xs text-muted-foreground">Non-provisional patent + continuations, licensing frameworks</p>
              </div>
              <div className="border-l-4 border-chart-5 pl-3">
                <p className="text-foreground font-semibold">$600K Operations & Strategic</p>
                <p className="text-xs text-muted-foreground">Travel, conferences, design partners, buffer</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Parallel Execution Strategy */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="bg-card/30 border border-border rounded-xl p-4 mb-4"
        >
          <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
            <Users className="w-4 h-4 text-accent" />
            Parallel Execution Strategy
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {executionTracks.map((track, index) => (
              <div key={index} className="bg-secondary/50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <track.icon className="w-4 h-4 text-accent" />
                  <p className="text-accent font-semibold text-sm">{track.name}</p>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{track.timeline}</p>
                <ul className="text-xs text-muted-foreground space-y-0.5">
                  {track.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-card/30 border border-border rounded-xl p-4 mb-4"
        >
          <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-accent" />
            Milestones
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {milestones.map((m, index) => (
              <div key={index} className="bg-secondary/50 rounded-lg p-3">
                <p className="text-accent font-semibold text-sm mb-1">{m.month}</p>
                <p className="text-muted-foreground text-xs">{m.target}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Series A & Strategic Depth */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-2 gap-3"
        >
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-accent" />
              <p className="text-foreground font-semibold text-sm">Then: Series A</p>
            </div>
            <p className="text-accent text-lg font-bold">$100-150M valuation</p>
            <p className="text-muted-foreground text-xs">(8-10× ARR multiple)</p>
          </div>
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Target className="w-4 h-4 text-accent" />
              <p className="text-foreground font-semibold text-sm">Strategic Depth</p>
            </div>
            <p className="text-muted-foreground text-xs">
              10+ validated applications (API Gateway, Observability, DLP, Federal DPI, AI Token Gating, Telemetry, ETL, Event Streaming, Code Scanning, Blockchain) — all leveraging same core technology.
            </p>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
