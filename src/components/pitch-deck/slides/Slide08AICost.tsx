import { motion } from "framer-motion";
import { SlideLayout } from "../SlideLayout";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip, LabelList } from "recharts";
import { Brain, TrendingDown, DollarSign } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const costData = [
  { name: "Before", tokenization: 500, filtering: 0, fill: "hsl(var(--destructive))" },
  { name: "After", tokenization: 75, filtering: 10, fill: "hsl(var(--accent))" },
];

const customers = ["OpenAI", "Anthropic", "Together AI", "Enterprise ML"];

export const Slide08AICost = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <p className="text-accent font-mono text-sm mb-2">APPLICATION 2</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            LLM Pipeline Efficiency
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
              <li>Processing 1M log records through LLM</li>
              <li className="text-destructive font-semibold text-xl">= $500K/month in tokenization</li>
              <li>Current approach: Tokenize everything, hope downstream filtering helps</li>
            </ul>
            <div className="bg-destructive/10 rounded-lg p-3 mt-4">
              <span className="font-mono text-destructive">∂cost/∂records = constant</span>
              <span className="text-muted-foreground text-sm block">(expensive at scale)</span>
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
              <li>Pre-tokenization gating with 100 relevance rules</li>
              <li>Evaluate all 100 rules in single pass</li>
              <li className="text-accent font-semibold">Drop 70-90% of records before tokenization</li>
            </ul>
            <div className="bg-accent/10 rounded-lg p-3 mt-4">
              <span className="font-mono text-accent">∂cost/∂rules ≈ 0</span>
              <span className="text-muted-foreground text-sm block">(add filtering rules without overhead)</span>
            </div>
          </motion.div>
        </div>

        {/* Cost Comparison Chart */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-card/30 border border-border rounded-xl p-6 mb-6"
        >
          <h3 className="text-lg font-bold text-foreground mb-4 text-center">Monthly Cost Comparison ($K)</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={costData} layout="vertical" barCategoryGap="30%">
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" domain={[0, 550]} />
                <YAxis type="category" dataKey="name" stroke="hsl(var(--muted-foreground))" width={60} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  formatter={(value: number) => [`$${value}K`, '']}
                />
                <Bar dataKey="tokenization" stackId="a" radius={[0, 0, 0, 0]}>
                  {costData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                  <LabelList dataKey="tokenization" position="inside" fill="white" formatter={(value: number) => `$${value}K`} />
                </Bar>
                <Bar dataKey="filtering" stackId="a" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]}>
                  <LabelList dataKey="filtering" position="inside" fill="white" formatter={(value: number) => value > 0 ? `$${value}K` : ''} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Savings Highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-4"
        >
          <div className="bg-card/50 border border-border rounded-lg p-4 text-center">
            <DollarSign className="w-6 h-6 text-accent mx-auto mb-2" />
            <p className="text-2xl font-bold text-accent">$350-450K</p>
            <p className="text-xs text-muted-foreground">Monthly savings</p>
          </div>
          <div className="bg-card/50 border border-border rounded-lg p-4 text-center">
            <TrendingDown className="w-6 h-6 text-accent mx-auto mb-2" />
            <p className="text-2xl font-bold text-accent">70-90%</p>
            <p className="text-xs text-muted-foreground">Cost reduction</p>
          </div>
          <div className="bg-card/50 border border-border rounded-lg p-4 text-center">
            <Brain className="w-6 h-6 text-accent mx-auto mb-2" />
            <p className="text-2xl font-bold text-accent">90%</p>
            <p className="text-xs text-muted-foreground">Token reduction (AI Gate Demo)</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-muted-foreground mt-4"
        >
          License Model: <span className="text-accent font-semibold">10-20%</span> of measured token savings
        </motion.p>
      </div>
    </SlideLayout>
  );
};
