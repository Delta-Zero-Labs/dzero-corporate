import { motion } from "framer-motion";
import { SlideLayout } from "../SlideLayout";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { DollarSign, Users, Target, TrendingUp } from "lucide-react";
import { MetricCard } from "../demos/MetricCard";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const data = [
  // Use chart palette colors to avoid duplicates (accent and chart-1 can both be orange in some themes)
  { name: "Engineering", value: 40, color: "hsl(var(--chart-4))" },
  { name: "Sales & Marketing", value: 25, color: "hsl(var(--chart-1))" },
  { name: "IP Protection", value: 20, color: "hsl(var(--chart-2))" },
  { name: "Operations", value: 15, color: "hsl(var(--chart-3))" },
];

export const Slide10BAskJustification = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <p className="text-accent font-mono text-sm mb-2">CAPITAL ALLOCATION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why $4.5M: Scaling to Multi-Product Licensing Lab
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-card/30 border border-border rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4">Capital Allocation</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Allocation']} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Outcomes */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <div className="bg-accent/5 border-2 border-accent/40 rounded-xl p-6">
              <h3 className="text-accent font-mono text-sm mb-3">2-YEAR RUNWAY OUTCOMES</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-foreground">6 engineers → Parallel product dev</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-accent" />
                  <span className="text-foreground">3 products launched</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <span className="text-foreground">$10M ARR by Year 2</span>
                </div>
              </div>
            </div>

            <div className="bg-card/30 border border-border rounded-xl p-4">
              <p className="text-muted-foreground text-sm">
                <strong>Pro Forma:</strong> $187K/month burn; ARR ramp to $10M Year 2
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                <strong>Validation:</strong> Mentor call completed; demos tie to $4.5M value
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-4 gap-3 mt-6"
        >
          <MetricCard
            icon={DollarSign}
            value="$4.5M"
            label="Seed Ask"
            variant="accent"
            delay={0.8}
          />
          <MetricCard
            icon={Users}
            value="6"
            label="Engineers Hired"
            variant="success"
            delay={0.9}
          />
          <MetricCard
            icon={Target}
            value="3"
            label="Products"
            variant="accent"
            delay={1.0}
          />
          <MetricCard
            icon={TrendingUp}
            value="$10M"
            label="ARR Year 2"
            variant="success"
            delay={1.1}
          />
        </motion.div>
      </div>
    </SlideLayout>
  );
};