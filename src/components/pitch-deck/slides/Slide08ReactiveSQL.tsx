import { motion } from "framer-motion";
import { SlideLayout } from "../SlideLayout";
import { Database, Zap, GitBranch, RefreshCw, Layers, Cpu } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const capabilities = [
  {
    icon: RefreshCw,
    title: "Incremental View Maintenance",
    description: "Materialized views that update O(delta) when source rows change. No manual refresh, no full re-compute.",
  },
  {
    icon: GitBranch,
    title: "Hypothetical Queries",
    description: "\"What changes if I delete customer 42?\" Assert the retraction, run to fixpoint, read the diff, restore.",
  },
  {
    icon: Zap,
    title: "Live Reactive Results",
    description: "A SELECT SUM(revenue) GROUP BY region is not a snapshot — it's a set of live facts. Assert new data, the aggregation re-fires automatically.",
  },
  {
    icon: Cpu,
    title: "Self-Modifying Query Plans",
    description: "The query plan is facts. A rule can watch OperatorProfile facts and assert a different physical plan mid-query. Autonomously.",
  },
  {
    icon: Layers,
    title: "SQL + Symbolic Math in One Pass",
    description: "The same saturation loop that runs GROUP BY can run Risch integration. Analytical aggregation and symbolic computation in one pass.",
  },
];

const performanceData = [
  { operator: "scan", reactive: 0.02, duckdb: 349 },
  { operator: "filter", reactive: 75.6, duckdb: 89.5 },
  { operator: "agg_sum", reactive: 2.0, duckdb: 2.6 },
  { operator: "order_by", reactive: 198.6, duckdb: 391 },
  { operator: "group_by", reactive: 44.7, duckdb: 8.0 },
  { operator: "filter_agg", reactive: 7.4, duckdb: 2.5 },
  { operator: "join", reactive: 331, duckdb: 0.2 },
];

export const Slide08ReactiveSQL = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <p className="text-accent font-mono text-sm mb-2">VALIDATED APPLICATION</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Reactive SQL Engine
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            The first SQL database where query results are live functions of the data, not snapshots.{" "}
            <span className="text-accent font-mono">∂refresh/∂delta = 0</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* What It Is */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-accent/5 border border-accent/30 rounded-xl p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-bold text-foreground">What It Is</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              A reactive relational engine built on the Delta Zero saturation fabric.
              Every derived result knows exactly which input facts produced it.
            </p>
            <div className="space-y-3">
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-1">Traditional (DuckDB shape)</p>
                <p className="text-sm font-mono text-foreground">
                  data → forward pass → result <span className="text-destructive">(static snapshot)</span>
                </p>
              </div>
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-1">Reactive Engine</p>
                <p className="text-sm font-mono text-foreground">
                  data → forward pass → result <span className="text-accent">(live, bidirectional)</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Architecture */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-card/30 border border-border rounded-xl p-5"
          >
            <h3 className="text-lg font-bold text-foreground mb-4">Architecture</h3>
            <div className="space-y-3">
              <div className="border-b border-border/50 pb-3">
                <p className="text-sm font-semibold text-accent mb-1">Arena (Node Store)</p>
                <p className="text-xs text-muted-foreground">
                  Hash-cons node store. Structure only — plan trees, column lists, sort specs. Immortal, deduped, never data.
                </p>
              </div>
              <div className="border-b border-border/50 pb-3">
                <p className="text-sm font-semibold text-accent mb-1">FactStore (Live Facts)</p>
                <p className="text-xs text-muted-foreground">
                  The live fact set. Asserted, retracted, provenance-tracked. O(plan) + O(result), NOT O(rows).
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-accent mb-1">SaturationFabric Loop</p>
                <p className="text-xs text-muted-foreground">
                  Facts arrive → Alpha index routes in O(1) → Handlers fire → Loop to fixpoint → Output. No scheduler, no second pass.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Capabilities */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <h3 className="text-lg font-bold text-foreground mb-3">What It Enables</h3>
          <div className="grid md:grid-cols-3 gap-3">
            {capabilities.slice(0, 3).map((cap, index) => (
              <div key={index} className="bg-card/50 border border-border rounded-lg p-3">
                <cap.icon className="w-5 h-5 text-accent mb-2" />
                <p className="text-sm font-semibold text-foreground mb-1">{cap.title}</p>
                <p className="text-xs text-muted-foreground">{cap.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Performance Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-card/30 border border-border rounded-xl p-5"
        >
          <h3 className="text-lg font-bold text-foreground mb-3">
            Performance (10M rows, debug build)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 text-muted-foreground">Operator</th>
                  <th className="text-right py-2 text-accent">Reactive Engine</th>
                  <th className="text-right py-2 text-muted-foreground">DuckDB</th>
                  <th className="text-right py-2 text-muted-foreground">Δ</th>
                </tr>
              </thead>
              <tbody>
                {performanceData.map((row, index) => {
                  const ratio = row.duckdb / row.reactive;
                  const isFaster = row.reactive < row.duckdb;
                  return (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-2 font-mono text-foreground">{row.operator}</td>
                      <td className={`py-2 text-right font-mono ${isFaster ? 'text-accent' : 'text-foreground'}`}>
                        {row.reactive}ms
                      </td>
                      <td className="py-2 text-right font-mono text-muted-foreground">
                        {row.duckdb}ms
                      </td>
                      <td className={`py-2 text-right font-mono ${isFaster ? 'text-accent' : 'text-destructive'}`}>
                        {ratio.toFixed(2)}×
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            The fabric architecture means constant-factor gaps are tuning, not architecture.
            Operations at fabric speed show growth exponent k ≈ 1.0 (single-pass O(N)).
          </p>
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-center"
        >
          <p className="text-sm text-muted-foreground">
            <span className="text-accent font-semibold">Status:</span> Active development. Core operators implemented as fire-once-on-Batch saturation rules.
            Architecture manifest enforces 16 invariants including datalog-speed gate (k ≤ 1.5).
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
