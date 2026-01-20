import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
  duration?: number;
  delay?: number;
  variant?: "default" | "accent" | "destructive" | "success";
  className?: string;
  showLabel?: boolean;
  label?: string;
}

const variantStyles = {
  default: "bg-muted-foreground",
  accent: "bg-accent",
  destructive: "bg-destructive",
  success: "bg-chart-3",
};

export const ProgressBar = ({
  progress,
  duration = 2,
  delay = 0,
  variant = "default",
  className = "",
  showLabel = false,
  label,
}: ProgressBarProps) => {
  return (
    <div className={`w-full ${className}`}>
      {showLabel && label && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-muted-foreground">{label}</span>
          <span className="text-sm font-mono text-foreground">{progress}%</span>
        </div>
      )}
      <div className="h-3 bg-card/50 rounded-full overflow-hidden border border-border/50">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration, delay, ease: "easeOut" }}
          className={`h-full rounded-full ${variantStyles[variant]}`}
        />
      </div>
    </div>
  );
};
