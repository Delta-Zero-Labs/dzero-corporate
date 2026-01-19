import { motion } from "framer-motion";
import { SlideLayout } from "../SlideLayout";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide01Title = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
        {/* Main Symbol */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[12rem] md:text-[16rem] font-light text-accent leading-none mb-4"
        >
          ∂₀
        </motion.div>
        
        {/* Company Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-foreground mb-6"
        >
          Delta Zero Labs
        </motion.h1>
        
        {/* Tagline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground font-mono mb-12"
        >
          Building systems where <span className="text-accent">∂cost/∂complexity = 0</span>
        </motion.p>
        
        {/* Founder Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="space-y-2 mb-12"
        >
          <h2 className="text-2xl font-semibold text-foreground">Mike Kuykendall</h2>
          <p className="text-muted-foreground">
            IRS.gov Lead Developer | Former USAF Staff Sergeant | VOSB Owner
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mt-4">
            <a href="mailto:mikchaelallenkuykendall@gmail.com" className="hover:text-accent transition-colors">📧 mikchaelallenkuykendall@gmail.com</a>
            <span>📱 816-835-3920</span>
            <a href="https://www.linkedin.com/in/makuykendall/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">🔗 LinkedIn</a>
          </div>
        </motion.div>
        
        {/* Seed Ask */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-accent/10 border border-accent/30 rounded-xl px-8 py-4"
        >
          <p className="text-lg text-muted-foreground mb-1">Seeking</p>
          <p className="text-3xl md:text-4xl font-bold text-accent">$1.5-2M Seed</p>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
