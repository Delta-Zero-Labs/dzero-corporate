import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SlideLayout } from "../SlideLayout";
import { Clock, HardDrive, FileJson, Zap, Check } from "lucide-react";
import { MetricCard } from "../demos/MetricCard";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const scanComparison = {
  docSizeMB: 1.7,
  docName: "citm_catalog.json",
  domTimeMs: 15.2,
  domMemoryMB: 7.77,
  pounceTimeMs: 5.1,
  pounceMemoryKB: 1,
  speedup: 2.98,
  memoryReduction: 7772,
  keysFound: ["areaNames", "events", "performances"],
};

export const Slide15DemoSemanticScan = ({ slideNumber, totalSlides }: SlideProps) => {
  const [domProgress, setDomProgress] = useState(0);
  const [pounceProgress, setPounceProgress] = useState(0);
  const [pounceComplete, setPounceComplete] = useState(false);
  const [domComplete, setDomComplete] = useState(false);
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    // Start DOM animation
    const domStart = setTimeout(() => {
      const domInterval = setInterval(() => {
        setDomProgress((prev) => {
          if (prev >= 100) {
            clearInterval(domInterval);
            setDomComplete(true);
            return 100;
          }
          return prev + 2;
        });
      }, 60); // 3 seconds total
    }, 300);

    // Start Pounce animation (faster, but with slight delay)
    const pounceStart = setTimeout(() => {
      const pounceInterval = setInterval(() => {
        setPounceProgress((prev) => {
          if (prev >= 100) {
            clearInterval(pounceInterval);
            setPounceComplete(true);
            return 100;
          }
          return prev + 6;
        });
      }, 60); // 1 second total
    }, 500);

    // Show metrics after race
    const metricsTimer = setTimeout(() => {
      setShowMetrics(true);
    }, 3500);

    return () => {
      clearTimeout(domStart);
      clearTimeout(pounceStart);
      clearTimeout(metricsTimer);
    };
  }, []);

  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <p className="text-accent font-mono text-sm mb-2">STREAMING INTELLIGENCE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Scan Without Parsing: <span className="text-accent">3× Faster, 7772× Less Memory</span>
          </h2>
        </motion.div>

        {/* Race Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card/50 border border-border rounded-xl p-6 mb-6"
        >
          <div className="space-y-6">
            {/* DOM Parse + Query */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="text-foreground font-medium">DOM Parse + Query</p>
                  <p className="text-xs text-muted-foreground">Traditional: Parse entire document, then query</p>
                </div>
                <div className="text-right">
                  {!domComplete ? (
                    <span className="text-muted-foreground text-sm font-mono">Allocating memory...</span>
                  ) : (
                    <span className="text-destructive text-sm font-mono">Complete: 15.2ms, 7.77MB</span>
                  )}
                </div>
              </div>
              <div className="h-6 bg-card/80 rounded-full overflow-hidden border border-border/50">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${domProgress}%` }}
                  className="h-full bg-destructive/80 rounded-full flex items-center justify-end pr-2"
                >
                  {domComplete && <Check className="w-4 h-4 text-white" />}
                </motion.div>
              </div>
            </div>

            {/* Pounce Stream Scan */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="text-foreground font-medium">Pounce Stream Scan</p>
                  <p className="text-xs text-muted-foreground">Stream through once, detect keys</p>
                </div>
                <div className="text-right">
                  {!pounceComplete ? (
                    <span className="text-muted-foreground text-sm font-mono">Scanning...</span>
                  ) : (
                    <span className="text-chart-3 text-sm font-mono flex items-center gap-1">
                      <Zap className="w-4 h-4" /> Done! 5.1ms, 1KB
                    </span>
                  )}
                </div>
              </div>
              <div className="h-6 bg-card/80 rounded-full overflow-hidden border border-border/50">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${pounceProgress}%` }}
                  className="h-full bg-chart-3 rounded-full flex items-center justify-end pr-2"
                >
                  {pounceComplete && <Zap className="w-4 h-4 text-white" />}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Metrics Cards */}
        {showMetrics && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-3 gap-4 mb-6"
          >
            <MetricCard
              icon={Clock}
              value="2.98×"
              label="Speedup"
              subtitle="Time to first result"
              variant="accent"
              delay={0}
            />
            <MetricCard
              icon={HardDrive}
              value="7,772×"
              label="Memory Reduction"
              subtitle="7.77MB → 1KB"
              variant="success"
              delay={0.1}
            />
            <MetricCard
              icon={FileJson}
              value="1.7MB"
              label="Document Size"
              subtitle="citm_catalog.json"
              delay={0.2}
            />
          </motion.div>
        )}

        {/* Technical Detail */}
        {showMetrics && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-card/30 border border-border rounded-xl p-5"
          >
            <p className="text-muted-foreground text-sm mb-3">What Pounce detected (without parsing):</p>
            <div className="space-y-2 mb-4">
              {scanComparison.keysFound.map((key, index) => (
                <motion.div
                  key={key}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-4 h-4 text-chart-3" />
                  <span className="text-foreground font-mono text-sm">
                    Key "{key}" present at depth 1
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="text-accent font-semibold text-sm">
              Zero allocations. Zero DOM tree. Just facts.
            </p>
          </motion.div>
        )}
      </div>
    </SlideLayout>
  );
};
