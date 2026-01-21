import { motion } from "framer-motion";
import { SlideLayout } from "../SlideLayout";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Zap, HardDrive, TrendingUp } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const benchmarkData = [
  { policies: 10, baseline: 2.1, dzero: 2.1 },
  { policies: 100, baseline: 21, dzero: 2.2 },
  { policies: 1000, baseline: 210, dzero: 2.7 },
];

const metrics = [
  { icon: Zap, label: "Speedup at 1000 policies", value: "78×", color: "text-accent" },
  { icon: HardDrive, label: "Memory", value: "Fixed 64KB", color: "text-chart-3" },
  { icon: TrendingUp, label: "Overhead growth", value: "Sub-linear", color: "text-chart-2" },
];

export const Slide06Benchmarks = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <p className="text-accent font-mono text-sm mb-2">BENCHMARKS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Proven: <span className="text-accent font-mono">∂cost/∂rules ≈ 0</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Baseline */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-destructive/5 border border-destructive/30 rounded-xl p-5"
          >
            <h3 className="text-lg font-bold text-foreground mb-4">
              Baseline (Sequential Evaluation)
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground">10 policies</span>
                <span className="text-foreground font-mono">2.1ms</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground">100 policies</span>
                <span className="text-destructive font-mono">21ms <span className="text-sm">(10× slower)</span></span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">1000 policies</span>
                <span className="text-destructive font-mono">210ms <span className="text-sm">(100× slower)</span></span>
              </div>
            </div>
          </motion.div>

          {/* DZero */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-accent/5 border border-accent/30 rounded-xl p-5"
          >
            <h3 className="text-lg font-bold text-foreground mb-4">
              DZero Engine
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground">10 policies</span>
                <span className="text-foreground font-mono">2.1ms</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground">100 policies</span>
                <span className="text-accent font-mono">2.2ms <span className="text-sm">(+5%)</span></span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">1000 policies</span>
                <span className="text-accent font-mono">2.7ms <span className="text-sm">(+28%)</span></span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Chart */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-card/30 border border-border rounded-xl p-5"
        >
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={benchmarkData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="policies" 
                  stroke="hsl(var(--muted-foreground))"
                  label={{ value: 'Number of Policies', position: 'bottom', fill: 'hsl(var(--muted-foreground))', offset: -5 }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  label={{ value: 'Latency (ms)', angle: -90, position: 'left', fill: 'hsl(var(--muted-foreground))' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  formatter={(value: number) => [`${value}ms`, '']}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="baseline" 
                  name="Baseline (steep slope)"
                  stroke="hsl(var(--destructive))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--destructive))' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="dzero" 
                  name="DZero (nearly flat)"
                  stroke="hsl(var(--accent))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--accent))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-2">
            Source: dzero benchmarks (reproducible, <a href="https://github.com/Michael-A-Kuykendall" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub</a>)
          </p>
          <p className="text-center text-[11px] text-muted-foreground/80 mt-1">
            * Targeted scenarios; full reproduction details available post-NDA.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-4 mt-6"
        >
          {metrics.map((metric, index) => (
            <div key={index} className="bg-card/50 border border-border rounded-lg p-4 text-center">
              <metric.icon className={`w-6 h-6 ${metric.color} mx-auto mb-2`} />
              <p className="text-2xl font-bold text-foreground">{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  );
};
