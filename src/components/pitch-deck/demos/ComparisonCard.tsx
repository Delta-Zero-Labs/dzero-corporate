import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ComparisonCardProps {
  title: string;
  children: ReactNode;
  variant: "destructive" | "accent";
  delay?: number;
  className?: string;
}

const variantStyles = {
  destructive: "bg-destructive/5 border-destructive/30",
  accent: "bg-accent/5 border-accent/30",
};

export const ComparisonCard = ({
  title,
  children,
  variant,
  delay = 0,
  className = "",
}: ComparisonCardProps) => {
  return (
    <motion.div
      initial={{ x: variant === "destructive" ? -30 : 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay, duration: 0.4 }}
      className={`rounded-xl p-5 border ${variantStyles[variant]} ${className}`}
    >
      <h3 className="text-lg font-bold text-foreground mb-4">{title}</h3>
      {children}
    </motion.div>
  );
};
