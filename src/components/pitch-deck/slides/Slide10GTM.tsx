import { motion } from "framer-motion";
import { SlideLayout } from "../SlideLayout";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Calendar, Target, TrendingUp } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const fundAllocation = [
  { name: "Engineering", value: 700, color: "hsl(var(--accent))" },
  { name: "Sales", value: 600, color: "hsl(var(--chart-2))" },
  { name: "Legal/IP", value: 400, color: "hsl(var(--chart-3))" },
  { name: "Operations", value: 300, color: "hsl(var(--chart-4))" },
];

const milestones = [
  { month: "Month 6", target: "First licensing deal ($500K-1M/year)" },
  { month: "Month 12", target: "Patent non-provisional filed, 2-3 deals signed" },
  { month: "Month 18", target: "$2-5M ARR across 3-5 licensees" },
];

export const Slide10GTM = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <p className="text-accent font-mono text-sm mb-2">GO-TO-MARKET</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Capital Deployment Plan <span className="text-accent">(18 Months)</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Pie Chart */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-card/50 border border-border rounded-xl p-5"
          >
            <h3 className="text-lg font-bold text-foreground mb-2 text-center">$1.5-2M Seed Allocation</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={fundAllocation}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, value }) => `${name}: $${value}K`}
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
                    formatter={(value: number) => [`$${value}K`, '']}
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
            className="bg-card/50 border border-border rounded-xl p-5"
          >
            <h3 className="text-lg font-bold text-foreground mb-4">Allocation Breakdown</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-accent pl-3">
                <p className="text-foreground font-semibold">$700K Engineering (3 engineers)</p>
                <p className="text-sm text-muted-foreground">Production integrations (NGINX, Kong, Envoy SDKs), domain-specific adapters</p>
              </div>
              <div className="border-l-4 border-chart-2 pl-3">
                <p className="text-foreground font-semibold">$600K Sales (2 enterprise + 1 SE)</p>
                <p className="text-sm text-muted-foreground">Gateway vendors, AI platforms, defense contractors</p>
              </div>
              <div className="border-l-4 border-chart-3 pl-3">
                <p className="text-foreground font-semibold">$400K Legal/IP</p>
                <p className="text-sm text-muted-foreground">Non-provisional patent filing + licensing agreements</p>
              </div>
              <div className="border-l-4 border-chart-4 pl-3">
                <p className="text-foreground font-semibold">$300K Operations</p>
                <p className="text-sm text-muted-foreground">Runway buffer, conferences, travel</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-card/30 border border-border rounded-xl p-6 mb-6"
        >
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-accent" />
            Milestones
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {milestones.map((m, index) => (
              <div key={index} className="bg-secondary/50 rounded-lg p-4">
                <p className="text-accent font-semibold mb-2">{m.month}</p>
                <p className="text-muted-foreground text-sm">{m.target}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Series A & Strategy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-2 gap-4"
        >
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              <p className="text-foreground font-semibold">Then: Series A</p>
            </div>
            <p className="text-muted-foreground text-sm">
              $30-50M valuation (10-15× ARR multiple)
            </p>
          </div>
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-accent" />
              <p className="text-foreground font-semibold">Strategy</p>
            </div>
            <p className="text-muted-foreground text-sm">
              Licensing lab model — revenue from each domain funds next expansion
            </p>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
