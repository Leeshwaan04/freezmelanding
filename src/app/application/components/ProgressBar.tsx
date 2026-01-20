'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-border/20">
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] relative"
        initial={{ width: 0 }}
        animate={{
          width: `${progress}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 20,
        }}
        style={{
          boxShadow: '0 0 10px rgba(var(--primary), 0.3)'
        }}
        role="progressbar"
        aria-valuenow={currentStep}
        aria-valuemin={0}
        aria-valuemax={totalSteps}
        aria-label={`Step ${currentStep} of ${totalSteps}`}
      >
        <div className="absolute inset-0 bg-white/20 animate-pulse mix-blend-overlay" />
      </motion.div>
    </div>
  );
};

export default ProgressBar;