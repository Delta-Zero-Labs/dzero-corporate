import { motion } from "framer-motion";
import { SlideLayout } from "../SlideLayout";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Zap, HardDrive, TrendingUp } from "lucide-react";
import { MetricCard } from "../demos/MetricCard";
import { ComparisonCard } from "../demos/ComparisonCard";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const baselineData = [
  { obligations: "10", baseline: 38, pounce: 5.5 },
  { obligations: "100", baseline: 380, pounce: 5.5 },
  { obligations: "1K", baseline: 3800, pounce: 5.5 },
  { obligations: "10K", baseline: 38000, pounce: 5.5 },
  { obligations: "100K", baseline: 380000, pounce: 5.5 },
];

const baselineRows = [
  { obligations: "1", latency: "3.8µs", badge: null },
  { obligations: "100", latency: "380µs", badge: "100× slower" },
  { obligations: "10,000", latency: "38ms", badge: "10,000× slower" },
  { obligations: "100,000", latency: "380ms", badge: "100,000× slower" },
  { obligations: "1,000,000", latency: "3.8 seconds", badge: "1,000,000× slower" },
];

const pounceRows = [
  { obligations: "1", latency: "5.5µs", badge: null },
  { obligations: "100", latency: "5.5µs", badge: "flat!" },
  { obligations: "10,000", latency: "5.5µs", badge: "flat!" },
  { obligations: "100,000", latency: "5.5µs", badge: "flat!" },
  { obligations: "1,000,000", latency: "5.5µs ✓", badge: "flat!" },
];

export const Slide13DemoFlatScaling = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-4"
        >
          <p className="text-accent font-mono text-sm mb-2">BENCHMARK</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Flat Scaling: <span className="text-accent font-mono">∂cost/∂rules ≈ 0</span>
          </h2>
        </motion.div>

        {/* Two-Column Comparison */}
        <div className="grid lg:grid-cols-2 gap-4 mb-4">
          {/* Baseline */}
          <ComparisonCard title="Baseline (Sequential Evaluation)" variant="destructive" delay={0.2}>
            <div className="space-y-1">
              {baselineRows.map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.15 }}
                  className="flex justify-between items-center py-1.5 border-b border-border/30 last:border-0"
                >
                  <span className="text-muted-foreground text-sm">{row.obligations}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-foreground font-mono text-sm">{row.latency}</span>
                    {row.badge && (
                      <span className="text-xs bg-destructive/20 text-destructive px-2 py-0.5 rounded">
                        {row.badge}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </ComparisonCard>

          {/* Pounce */}
          <ComparisonCard title="Pounce Engine" variant="accent" delay={0.3}>
            <div className="space-y-1">
              {pounceRows.map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.15 }}
                  className="flex justify-between items-center py-1.5 border-b border-border/30 last:border-0"
                >
                  <span className="text-muted-foreground text-sm">{row.obligations}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-chart-3 font-mono text-sm">{row.latency}</span>
                    {row.badge && (
                      <span className="text-xs bg-chart-3/20 text-chart-3 px-2 py-0.5 rounded">
                        {row.badge}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </ComparisonCard>
        </div>

        {/* Chart */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="bg-card/30 border border-border rounded-xl p-4 mb-4"
        >
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={baselineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="obligations" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fontSize: 11 }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  scale="log"
                  domain={[1, 1000000]}
                  tickFormatter={(value) => value >= 1000000 ? `${value/1000000}M` : value >= 1000 ? `${value/1000}K` : value}
                  tick={{ fontSize: 11 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                  formatter={(value: number) => [`${value >= 1000000 ? (value/1000000).toFixed(1) + 's' : value >= 1000 ? (value/1000).toFixed(1) + 'ms' : value + 'µs'}`, '']}
                />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Line 
                  type="monotone" 
                  dataKey="baseline" 
                  name="Baseline O(n)"
                  stroke="hsl(var(--destructive))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--destructive))', r: 3 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="pounce" 
                  name="Pounce O(1)"
                  stroke="hsl(var(--accent))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--accent))', r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-center mb-4"
        >
          <p className="text-muted-foreground text-sm italic">
            Adding rules costs ~0 marginal runtime
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-3">
          <MetricCard
            icon={Zap}
            value="690,909×"
            label="Speedup at 1M rules"
            variant="accent"
            delay={1.8}
          />
          <MetricCard
            icon={HardDrive}
            value="64KB"
            label="Fixed Memory"
            variant="success"
            delay={1.9}
          />
          <MetricCard
            icon={TrendingUp}
            value="O(1)"
            label="Cost Scaling"
            variant="accent"
            delay={2.0}
          />
        </div>
      </div>

      {/* NDA Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2 }}
        className="mt-6 text-center"
      >
        <p className="text-muted-foreground text-sm">
          Next Steps: NDA for Code Walkthrough
        </p>
      </motion.div>
    </SlideLayout>
  );
};
