import Icon from '@/components/ui/AppIcon';

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
    <div className="hidden lg:block w-full max-w-4xl mx-auto mb-12">
      <div className="flex items-center justify-between relative">
        {/* Connection Line */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-border -z-10">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center relative">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center font-headline font-semibold text-lg transition-all duration-300 ${
                step.number < currentStep
                  ? 'bg-primary text-primary-foreground'
                  : step.number === currentStep
                  ? 'bg-accent text-accent-foreground ring-4 ring-accent/20'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {step.number < currentStep ? (
                <Icon name="CheckIcon" size={20} variant="solid" />
              ) : (
                step.number
              )}
            </div>
            <div className="mt-3 text-center max-w-[120px]">
              <p
                className={`font-headline font-semibold text-sm ${
                  step.number === currentStep ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {step.title}
              </p>
              <p className="text-xs text-muted-foreground mt-1 hidden xl:block">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;