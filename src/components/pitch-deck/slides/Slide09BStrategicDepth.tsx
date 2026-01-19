import { motion } from "framer-motion";
import { SlideLayout } from "../SlideLayout";
import { FileJson, Shield, Cpu, Database, Network, CheckCircle, FileText } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const highRoiDomains = [
  { name: "API Gateways", detail: "Kong, NGINX, Envoy ($500K-1.5M/year each)", icon: Network },
  { name: "Observability", detail: "Splunk, Datadog cost reduction (10-20% savings share)", icon: Database },
  { name: "DLP/Security", detail: "Compliance gating, PII detection ($200K-500K/year)", icon: Shield },
];

const federalTrack = [
  { name: "Network DPI", detail: "Defense contractors, agencies ($500K-2M contracts)" },
  { name: "VOSB + Clearance", detail: "GSA schedule access enabled" },
];

const mediumRoiDomains = [
  "ETL/Data Lakes",
  "Event Streaming (Kafka)",
  "OpenTelemetry",
  "AI Token Preprocessing",
  "Code Scanning (DevSecOps)",
  "Blockchain/MEV (prototype validated)",
];

const evidencePoints = [
  "29-page strategic applications document",
  "Prior art clearance completed",
  "Benchmarks across 4 domains (Gateway, Logs, AI, Blockchain)",
  "Format generality proven (JSON + Protobuf working)",
];

export const Slide09BStrategicDepth = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-4"
        >
          <p className="text-accent font-mono text-sm mb-2">STRATEGIC DEPTH</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Validated Application Roadmap
          </h2>
          <p className="text-muted-foreground mt-2 text-lg">
            <span className="text-accent font-semibold">Licensing Lab Model:</span> One Technology, 10+ Revenue Streams
          </p>
        </motion.div>

        {/* Format-Agnostic Core */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="bg-accent/10 border border-accent/30 rounded-xl p-4 mb-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <FileJson className="w-5 h-5 text-accent" />
            <h3 className="text-base font-bold text-foreground">Format-Agnostic Core</h3>
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {["JSON", "Protobuf", "Binary", "CSV", "XML"].map((format) => (
              <span key={format} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-mono">
                {format}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Same fused execution primitive • Domain adapter = <span className="text-accent font-semibold">2-4 weeks</span> engineering per new format
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4 mb-4">
          {/* High-ROI Immediate */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-card/50 border border-border rounded-xl p-4"
          >
            <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-accent">✓</span> High-ROI Immediate
              <span className="text-xs text-muted-foreground">(Months 0-12)</span>
            </h3>
            <div className="space-y-3">
              {highRoiDomains.map((domain, index) => (
                <div key={index} className="flex items-start gap-2">
                  <domain.icon className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground font-semibold text-sm">{domain.name}</p>
                    <p className="text-xs text-muted-foreground">{domain.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Federal Track */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-card/50 border border-border rounded-xl p-4"
          >
            <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              Federal Track
              <span className="text-xs text-muted-foreground">(Parallel)</span>
            </h3>
            <div className="space-y-3">
              {federalTrack.map((item, index) => (
                <div key={index} className="bg-secondary/50 rounded-lg p-3">
                  <p className="text-foreground font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Medium-ROI Expansion */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="bg-card/50 border border-border rounded-xl p-4"
          >
            <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-accent" />
              Medium-ROI Expansion
              <span className="text-xs text-muted-foreground">(Months 12-24)</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {mediumRoiDomains.map((domain, index) => (
                <span key={index} className="bg-secondary/50 text-muted-foreground px-2 py-1 rounded text-xs">
                  {domain}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Evidence of Planning */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-card/30 border border-border rounded-xl p-4 mb-4"
        >
          <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-accent" />
            Evidence of Planning
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {evidencePoints.map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why This Works */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-accent/10 via-accent/5 to-primary/10 border border-accent/30 rounded-xl p-4 text-center"
        >
          <h3 className="text-lg font-bold text-foreground mb-2">Why This Works</h3>
          <p className="text-muted-foreground">
            Same <span className="text-accent font-semibold">6-person engineering team</span> unlocks all domains — format adapters are lightweight, 
            sales cycles stagger naturally, licensing model scales <span className="text-accent font-semibold">without marginal cost</span>.
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
