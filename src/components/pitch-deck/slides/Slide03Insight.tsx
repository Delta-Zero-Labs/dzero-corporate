import { motion } from "framer-motion";
import { SlideLayout } from "../SlideLayout";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const comparisonData = [
  { rules: 10, traditional: 10, dzero: 10 },
  { rules: 100, traditional: 100, dzero: 12 },
  { rules: 500, traditional: 500, dzero: 18 },
  { rules: 1000, traditional: 1000, dzero: 22 },
];

export const Slide03Insight = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8 text-center"
        >
          <p className="text-accent font-mono text-sm mb-2">THE FUNDAMENTAL INSIGHT</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What If <span className="text-accent font-mono">∂cost/∂complexity</span> Could Equal Zero?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Traditional */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-destructive/5 border border-destructive/30 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">
              Current Reality <span className="text-destructive font-mono">(O(N×M))</span>
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-destructive">✕</span>
                N rules, M data points = N×M operations
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive">✕</span>
                Each rule re-parses/re-traverses data independently
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive">✕</span>
                <span className="font-mono">∂cost/∂rules = O(M)</span> — adding rules is expensive
              </li>
            </ul>
          </motion.div>

          {/* DZero */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-accent/5 border border-accent/30 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">
              Delta Zero Reality <span className="text-accent font-mono">(O(M))</span>
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                Parse data once, broadcast to all rules
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                Adding rules incurs ~zero marginal cost
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span className="font-mono">∂cost/∂rules ≈ 0</span> — bounded overhead
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Chart */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-card/30 border border-border rounded-xl p-6"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="rules" 
                  stroke="hsl(var(--muted-foreground))"
                  label={{ value: 'Number of Rules', position: 'bottom', fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  label={{ value: 'Cost', angle: -90, position: 'left', fill: 'hsl(var(--muted-foreground))' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="traditional" 
                  name="Traditional (∂cost/∂rules = linear)"
                  stroke="hsl(var(--destructive))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--destructive))' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="dzero" 
                  name="DZero (∂cost/∂rules ≈ 0)"
                  stroke="hsl(var(--accent))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--accent))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Bottom callout */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-2xl font-semibold text-accent mt-8"
        >
          This isn't incremental optimization. This is <span className="underline">asymptotic collapse</span>.
        </motion.p>
      </div>
    </SlideLayout>
  );
};
