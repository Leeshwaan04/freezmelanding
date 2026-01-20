'use client';

import Icon from '@/components/ui/AppIcon';
import { motion } from 'framer-motion';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="hidden lg:block w-full max-w-4xl mx-auto mb-16 px-4">
      <div className="flex items-center justify-between relative">
        {/* Connection Line Backend */}
        <div className="absolute top-6 left-[2.5rem] right-[2.5rem] h-1 bg-muted/30 rounded-full -z-10" />

        {/* Connection Line Progress */}
        <motion.div
          className="absolute top-6 left-[2.5rem] h-1 bg-gradient-to-r from-primary to-accent rounded-full -z-10"
          initial={{ width: 0 }}
          animate={{
            width: `calc(${((currentStep - 1) / (steps.length - 1)) * 100}% - 5rem)`
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />

        {steps.map((step) => {
          const isActive = step.number === currentStep;
          const isCompleted = step.number < currentStep;

          return (
            <div key={step.number} className="flex flex-col items-center relative group">
              <motion.div
                initial={false}
                animate={{
                  scale: isActive ? 1.1 : 1,
                  backgroundColor: isCompleted ? 'rgb(var(--primary))' : isActive ? 'rgb(var(--accent))' : 'rgb(var(--muted))',
                  color: isCompleted || isActive ? 'white' : 'rgb(var(--muted-foreground))',
                  boxShadow: isActive ? '0 0 20px rgba(var(--accent), 0.4)' : 'none'
                }}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center font-headline font-bold text-lg transition-all duration-300 transform-gpu cursor-default`}
              >
                {isCompleted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Icon name="CheckIcon" size={24} variant="solid" />
                  </motion.div>
                ) : (
                  <span>{step.number}</span>
                )}
              </motion.div>

              <div className="mt-4 text-center absolute -bottom-14 w-32 left-1/2 -translate-x-1/2">
                <motion.p
                  animate={{
                    color: isActive ? 'rgb(var(--primary))' : 'rgb(var(--muted-foreground))',
                    scale: isActive ? 1.05 : 1
                  }}
                  className={`font-headline font-bold text-sm tracking-tight transition-all`}
                >
                  {step.title}
                </motion.p>
                <p className={`text-[10px] uppercase font-bold tracking-widest mt-1 opacity-60`}>
                  {isCompleted ? 'Completed' : isActive ? 'In Progress' : 'Upcoming'}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;