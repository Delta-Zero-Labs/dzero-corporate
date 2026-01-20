import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon?: LucideIcon;
  value: string;
  label: string;
  subtitle?: string;
  variant?: "default" | "accent" | "success";
  delay?: number;
  className?: string;
}

const variantStyles = {
  default: "text-foreground",
  accent: "text-accent",
  success: "text-chart-3",
};

export const MetricCard = ({
  icon: Icon,
  value,
  label,
  subtitle,
  variant = "default",
  delay = 0,
  className = "",
}: MetricCardProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, type: "spring", stiffness: 100 }}
      className={`bg-card/50 border border-border rounded-xl p-5 text-center ${className}`}
    >
      {Icon && (
        <Icon className={`w-7 h-7 ${variantStyles[variant]} mx-auto mb-3`} />
      )}
      <p className={`text-3xl md:text-4xl font-bold font-mono ${variantStyles[variant]} mb-1`}>
        {value}
      </p>
      <p className="text-sm font-medium text-foreground">{label}</p>
      {subtitle && (
        <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
      )}
    </motion.div>
  );
};
