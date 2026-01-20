import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  delay?: number;
}

export const AnimatedCounter = ({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
  delay = 0,
}: AnimatedCounterProps) => {
  const [hasStarted, setHasStarted] = useState(false);
  
  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });
  
  const display = useTransform(spring, (value) => {
    return `${prefix}${value.toFixed(decimals)}${suffix}`;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
      spring.set(end);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [end, spring, delay]);

  return (
    <motion.span className={`font-mono ${className}`}>
      {display}
    </motion.span>
  );
};
