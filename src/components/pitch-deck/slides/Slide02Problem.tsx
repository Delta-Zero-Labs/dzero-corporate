import { motion } from "framer-motion";
import { SlideLayout } from "../SlideLayout";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const chartData = [
  { rules: 10, cost: 10 },
  { rules: 100, cost: 100 },
  { rules: 500, cost: 500 },
  { rules: 1000, cost: 1000 },
];

const problems = [
  { system: "API Gateways", issue: "100 policies = 100× CPU overhead" },
  { system: "Observability", issue: "1000 filters = 1000× ingestion cost" },
  { system: "Firewalls", issue: "500 DPI rules = 500× bandwidth penalty" },
  { system: "Databases", issue: "N queries = N full table scans" },
];

export const Slide02Problem = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <p className="text-accent font-mono text-sm mb-2">THE PROBLEM</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Every Infrastructure System Has This Scaling Problem
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Problem List */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">The Universal Pattern:</h3>
            
            {problems.map((item, index) => (
              <motion.div
                key={item.system}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-card/50 border border-border rounded-lg p-4"
              >
                <span className="text-accent font-semibold">{item.system}:</span>
                <span className="text-foreground ml-2">{item.issue}</span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mt-6"
            >
              <p className="text-foreground font-semibold mb-2">Current Trade-off:</p>
              <p className="text-muted-foreground">Choose 2 of 3: <span className="text-accent">Security</span>, <span className="text-accent">Performance</span>, <span className="text-accent">Cost</span></p>
            </motion.div>
          </motion.div>

          {/* Right: Chart */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-card/30 border border-border rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
              <span className="font-mono text-accent">∂cost/∂rules = constant</span>
              <span className="text-muted-foreground text-sm block mt-1">(Linear Scaling)</span>
            </h3>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
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
                  <Line 
                    type="monotone" 
                    dataKey="cost" 
                    stroke="hsl(var(--destructive))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--destructive))', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <p className="text-center text-muted-foreground mt-4">
              More complexity = proportionally more infrastructure
            </p>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};
