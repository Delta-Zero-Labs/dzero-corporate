import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  slideNumber: number;
  totalSlides: number;
}

export const SlideLayout = ({ children, slideNumber, totalSlides }: SlideLayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative min-h-screen w-full bg-background overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/30" />
      
      {/* Watermark */}
      <div className="absolute bottom-8 right-8 text-8xl font-light text-accent/10 select-none">
        ∂₀
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen p-8 md:p-12 lg:p-16">
        {children}
      </div>
      
      {/* Slide indicator */}
      <div className="absolute bottom-6 left-8 flex items-center gap-3">
        <span className="text-accent font-mono text-sm">∂₀</span>
        <span className="text-muted-foreground text-sm">
          {slideNumber} / {totalSlides}
        </span>
      </div>
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent" />
    </motion.div>
  );
};
